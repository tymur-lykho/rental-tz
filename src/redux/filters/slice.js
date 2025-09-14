import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || action.error.message;
};

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    brands: [],
    brand: "",
    price: "",
    mileage: {
      min: null,
      max: null,
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setMileage(state, action) {
      state.mileage = {
        ...state.mileage,
        ...action.payload,
      };
    },
    resetFilters(state) {
      state.brand = "";
      state.price = null;
      state.mileage = {
        min: null,
        max: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchBrands.rejected, handleRejected);
  },
});

export const { setBrand, setPrice, setMileage, resetFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
