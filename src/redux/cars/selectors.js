import { createSelector } from "@reduxjs/toolkit";

export const selectLikedCars = (state) => state.cars.likedCars;

export const selectCarsData = createSelector(
  [
    (state) => state.cars.cars,
    (state) => state.cars.currentCar,
    (state) => state.cars.page,
    (state) => state.cars.totalCars,
    (state) => state.cars.totalPages,
    (state) => state.cars.hasNextPage,
    (state) => state.cars.isLoading,
  ],
  (cars, currentCar, page, totalCars, totalPages, hasNextPage, isLoading) => ({
    cars,
    currentCar,
    page,
    totalCars,
    totalPages,
    hasNextPage,
    isLoading,
  })
);
