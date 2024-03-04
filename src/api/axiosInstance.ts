import axios, {AxiosRequestConfig} from "axios";
import { CONFIG } from "../../config";
import authStore from "@/store/AuthStore";
import {AxiosError} from "axios/index";
import AuthStore from "@/store/AuthStore";

const axiosInstance = axios.create({
  baseURL: typeof window === 'undefined' ? CONFIG.BASE_URL_SERVER : CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }, withCredentials:true
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = authStore.isAuth?`Bearer ${authStore.accessToken}`:'';
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, (error: AxiosError) => {
  //console.warn('Ошибка:', error)

  if (error.response?.status !== 401) {
    return Promise.reject(error);
  }

  //@ts-ignore
  if(error.response?.status === 401 && !error.config.retry){
    console.log('Обновляем токен')
    AuthStore.refreshToken().then(()=>{
      console.log('Повторяем запрос')
      let con = error.config as AxiosRequestConfig
      //@ts-ignore
      con.retry = true
      return axiosInstance.request(error.config as AxiosRequestConfig);

    }).catch(e=>{
      console.log('Токен не обновлен')
      return Promise.reject(e)
    })
  }

});


export default axiosInstance;
