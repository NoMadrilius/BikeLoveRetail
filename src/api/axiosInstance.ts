import axios from "axios";
import { CONFIG } from "../../config";
import authStore from "@/store/AuthStore";


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

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Проверяем, что ошибка связана с истекшим токеном
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
console.log('success')
      try {
        // Обновляем токен
        await authStore.refreshToken();

        // Повторяем оригинальный запрос с новым токеном
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Если обновление токена не удалось, перенаправьте пользователя на страницу входа
        // или выполните другие действия по вашему усмотрению
        console.log("Failed to refresh token:", refreshError);
        // Тут может быть логика обработки ошибки обновления токена
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
