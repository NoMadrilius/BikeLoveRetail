import axios from "axios";
import { CONFIG } from "../../config";



const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",

  },
});
axiosInstance.interceptors.request.use(
  async (config) => {
    if (typeof window !== 'undefined') {
      const tokenFromLocalStorage = localStorage.getItem('AuthStore');

      if (tokenFromLocalStorage) {
        const parsedToken = JSON.parse(tokenFromLocalStorage);
        const token = parsedToken.accessToken;

        // Добавляем заголовок только для запросов, кроме /auth/login
        if (token && !config.url?.includes('/auth/login')) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);




export default axiosInstance;
