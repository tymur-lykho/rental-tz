import axios from "./axiosConfig";

export const fetchBrands = async () => {
  try {
    const { data } = await axios.get("/brands");
    return data;
  } catch {
    return [];
  }
};
