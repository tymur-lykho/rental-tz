import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
