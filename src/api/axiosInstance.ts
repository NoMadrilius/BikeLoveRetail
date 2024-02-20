import axios from "axios";
import { CONFIG } from "../../config";
import authStore from "@/store/AuthStore";

const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
