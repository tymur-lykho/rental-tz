import css from "./CatalogPage.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CarList from "../../components/CarList/CarList";
import Filters from "../../components/Filters/Filters";
import Button from "../../components/reusable/Button/Button";
import Loader from "../../components/reusable/Loader/Loader";

import { fetchCars } from "../../redux/cars/operations";
import { resetCars, setPage } from "../../redux/cars/slice";
import { selectCarsData } from "../../redux/cars/selectors";
import { setBrand, setMileage, setPrice } from "../../redux/filters/slice";
import { selectFilterData } from "../../redux/filters/selectors";

import { fetchBrands } from "../../api/fetchBrands";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [brands, setBrands] = useState([]);

  const { cars, hasNextPage, page, isLoading } = useSelector(selectCarsData);
  const { brand, mileage, price } = useSelector(selectFilterData);

  useEffect(() => {
    fetchBrands().then(setBrands);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filtersFromUrl = Object.fromEntries([...searchParams]);

    if (filtersFromUrl.brand) dispatch(setBrand(filtersFromUrl.brand));
    if (filtersFromUrl.min || filtersFromUrl.max)
      dispatch(
        setMileage({ min: filtersFromUrl.min, max: filtersFromUrl.max })
      );
    if (filtersFromUrl.price) dispatch(setPrice(filtersFromUrl.price));

    dispatch(resetCars());
    dispatch(fetchCars({ filters: filtersFromUrl }));
  }, [dispatch, location.search]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));

    dispatch(
      fetchCars({
        page: nextPage,
        filters: { brand, price, min: mileage.min, max: mileage.max },
      })
    );
  };

  if (isLoading && !cars.length) return <Loader />;

  return (
    <>
      <Filters brands={brands} />
      <CarList cars={cars} />
      {hasNextPage && (
        <Button className={css.loadMore} onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
}
