import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    price: "",
    mileage: {
      min: null,
      max: null,
    },
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
});

export const { setBrand, setPrice, setMileage, resetFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
