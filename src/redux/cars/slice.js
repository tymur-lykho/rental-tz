import { createSlice } from "@reduxjs/toolkit";
import { fetchCarData, fetchCars } from "./operations";
import { hasNextPage } from "../../utils/hasNextPage";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || action.error.message;
};

const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    likedCars: [],
    currentCar: {},
    totalCars: null,
    page: 1,
    limit: 12,
    totalPages: 1,
    hasNextPage: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    resetCars(state) {
      state.cars = [];
      // likedCars = [];
      state.hasNextPage = false;
      state.totalCars = null;
      state.page = 1;
      state.totalPages = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        const { cars, totalCars, page, totalPages } = action.payload;
        if (state.page === 1) {
          state.cars = cars;
        } else {
          state.cars = [...state.cars, ...cars];
        }
        state.totalCars = totalCars;
        state.page = Number(page);
        state.totalPages = totalPages;
        state.isLoading = false;
        state.error = null;
        state.hasNextPage = hasNextPage(totalCars, page, state.limit);
      })
      .addCase(fetchCars.rejected, handleRejected)

      .addCase(fetchCarData.pending, (state, action) => {
        state.currentCar = {};
        handlePending(state, action);
      })
      .addCase(fetchCarData.fulfilled, (state, action) => {
        state.currentCar = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCarData.rejected, handleRejected);
  },
});

export const { resetCars, setPage } = carSlice.actions;

export default carSlice.reducer;
