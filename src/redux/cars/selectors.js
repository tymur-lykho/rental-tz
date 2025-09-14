import { createSelector } from "@reduxjs/toolkit";

export const selectCarsData = createSelector(
  [
    (state) => state.cars.cars,
    (state) => state.cars.currentCar,
    (state) => state.cars.page,
    (state) => state.cars.totalCars,
    (state) => state.cars.totalPages,
    (state) => state.cars.hasNextPage,
  ],
  (cars, currentCar, page, totalCars, totalPages, hasNextPage) => ({
    cars,
    currentCar,
    page,
    totalCars,
    totalPages,
    hasNextPage,
  })
);
