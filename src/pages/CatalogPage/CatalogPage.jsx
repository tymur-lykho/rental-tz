import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CarList from "../../components/CarList/CarList";
import Filters from "../../components/Filters/Filters";
import Button from "../../components/reusable/Button/Button";
import Loader from "../../components/reusable/Loader/Loader";

import { fetchCars } from "../../redux/cars/operations";
import { resetCars, setPage } from "../../redux/cars/slice";
import { selectCarsData } from "../../redux/cars/selectors";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { cars, hasNextPage, page, isLoading } = useSelector(selectCarsData);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filtersFromUrl = Object.fromEntries([...searchParams]);

    dispatch(resetCars());
    dispatch(fetchCars({ filters: filtersFromUrl }));
  }, [dispatch, location.search]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(setPage(nextPage));

    const searchParams = new URLSearchParams(location.search);
    const filtersFromUrl = Object.fromEntries([...searchParams]);

    dispatch(fetchCars({ page: nextPage, filters: filtersFromUrl }));
  };

  if (isLoading && !cars.length) return <Loader />;

  return (
    <>
      <Filters />
      <CarList cars={cars} />
      {hasNextPage && (
        <Button className={css.loadMore} onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
}
