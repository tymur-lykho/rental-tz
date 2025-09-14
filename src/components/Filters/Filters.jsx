import css from "./Filters.module.css";
import Select from "../reusable/Select/Select";
import FromToInput from "../reusable/FromToInput/FromToInput";
import Button from "../reusable/Button/Button";
import Container from "../reusable/Container/Container";

import { useDispatch, useSelector } from "react-redux";
import { setBrand, setPrice, setMileage } from "../../redux/filters/slice";
import { selectFilterData } from "../../redux/filters/selectors";
import { useEffect } from "react";
import { fetchBrands } from "../../redux/filters/operations";
import { fetchCars } from "../../redux/cars/operations";
import { resetCars } from "../../redux/cars/slice";

export default function Filters() {
  const dispatch = useDispatch();
  const { brands, brand, price, mileage } = useSelector(selectFilterData);

  const prices = [20, 30, 40, 50, 60, 70, 80];

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  const handleBrandChange = (selectedOption) => {
    dispatch(setBrand(selectedOption.target.value));
  };

  const handlePriceChange = (selectedOption) => {
    dispatch(setPrice(selectedOption.target.value));
  };

  const handleChangeMin = (value) => {
    dispatch(setMileage({ min: value }));
  };

  const handleChangeMax = (value) => {
    dispatch(setMileage({ max: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(resetCars());
    dispatch(fetchCars({ filters: { brand, price, mileage } }));
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
            onChange={handleBrandChange}
          ></Select>
          <Select
            title="Price/ 1 hour"
            value={price}
            values={prices}
            textInSelect="Choose a price"
            onChange={handlePriceChange}
          ></Select>
          <FromToInput
            title="Сar mileage / km"
            fromLabel="From"
            toLabel="To"
            onChangeMin={handleChangeMin}
            onChangeMax={handleChangeMax}
            minValue={mileage.min || ""}
            maxValue={mileage.max || ""}
          />
          <Button type="submit"> Search </Button>
        </form>
      </section>
    </Container>
  );
}
