import { createSelector } from "@reduxjs/toolkit";

export const selectFilterData = createSelector(
  [
    (state) => state.filters.brands,
    (state) => state.filters.brand,
    (state) => state.filters.price,
    (state) => state.filters.mileage,
  ],
  (brands, brand, price, mileage) => ({
    brands,
    brand,
    price,
    mileage,
  })
);
