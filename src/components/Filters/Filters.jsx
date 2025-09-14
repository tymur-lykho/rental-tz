import css from "./Filters.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../reusable/Button/Button";
import Select from "../reusable/Select/Select";
import Container from "../reusable/Container/Container";
import FromToInput from "../reusable/FromToInput/FromToInput";

import { setBrand, setPrice, setMileage } from "../../redux/filters/slice";
import { selectFilterData } from "../../redux/filters/selectors";
import { fetchBrands } from "../../redux/filters/operations";
import { resetCars, setPage } from "../../redux/cars/slice";
import { fetchCars } from "../../redux/cars/operations";

export default function Filters() {
  const dispatch = useDispatch();
  const { brands, brand, price, mileage } = useSelector(selectFilterData);

  const prices = [20, 30, 40, 50, 60, 70, 80];

  useEffect(() => {
    dispatch(fetchBrands());

    const params = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );

    if (params.brand) dispatch(setBrand(params.brand));
    if (params.price) dispatch(setPrice(params.price));
    if (params.min) dispatch(setMileage({ min: params.min }));
    if (params.max) dispatch(setMileage({ max: params.max }));
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();

    const params = Object.fromEntries(
      Object.entries({ brand, price, ...mileage }).filter(
        ([, value]) => value !== "" && value != null
      )
    );

    const queryString = new URLSearchParams(params).toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${queryString}`
    );

    dispatch(resetCars());
    dispatch(setPage(1));
    dispatch(fetchCars({ filters: params, page: 1 }));
  };

  return (
    <Container>
      <section className={css.filterSection}>
        <form className={css.filterForm} onSubmit={handleSearch}>
          <Select
            title="Car brand"
            value={brand}
            values={brands}
            textInSelect="Choose a brand"
            onChange={(e) => dispatch(setBrand(e.target.value))}
          />
          <Select
            title="Price / 1 hour"
            value={price}
            values={prices}
            textInSelect="Choose a price"
            onChange={(e) => dispatch(setPrice(e.target.value))}
          />
          <FromToInput
            title="Car mileage / km"
            fromLabel="From"
            toLabel="To"
            minValue={mileage.min || ""}
            maxValue={mileage.max || ""}
            onChangeMin={(value) => dispatch(setMileage({ min: value }))}
            onChangeMax={(value) => dispatch(setMileage({ max: value }))}
          />
          <Button type="submit">Search</Button>
        </form>
      </section>
    </Container>
  );
}
