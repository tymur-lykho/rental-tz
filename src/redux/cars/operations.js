import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, filters = {} } = {}, thunkAPI) => {
    try {
      const {
        brand = null,
        price = null,
        mileage = { min: null, max: null },
      } = filters;

      const params = {
        page,
        brand,
        rentalPrice: price,
        ...(mileage.min != null && { minMileage: mileage.min }),
        ...(mileage.max != null && { maxMileage: mileage.max }),
        limit,
      };

      const res = await axios.get("/cars", { params });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarData = createAsyncThunk(
  "cars/fetchCarData",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/cars/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
