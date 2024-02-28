import axios, {AxiosInstance} from "axios";
import { CONFIG } from "../../config";
import authStore from "@/store/AuthStore";
import {AxiosError} from "axios/index";

const axiosInstance : AxiosInstance = axios.create({
  //baseURL: typeof window === 'undefined' ? CONFIG.BASE_URL_SERVER : CONFIG.BASE_URL,
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = authStore.isAuth?`Bearer ${authStore.accessToken}`:'';
  console.log('Request config:',config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  console.log('Response:',response)
  return response;
}, (error: AxiosError) => {
  console.warn('Ошибка:', error)
  return Promise.reject(error);
});

export default axiosInstance;
