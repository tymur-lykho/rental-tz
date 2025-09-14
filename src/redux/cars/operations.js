import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, filters = {} } = {}, thunkAPI) => {
    try {
      const { brand = null, price = null, min = null, max = null } = filters;

      const params = {
        page,
        brand: brand || undefined,
        rentalPrice: price || undefined,
        ...(min ? { minMileage: Number(min) } : {}),
        ...(max ? { maxMileage: Number(max) } : {}),
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
