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
    
     const tokenFromLocalStoreage = localStorage.getItem('AuthStore');
     console.log(tokenFromLocalStoreage)
      // @ts-ignore
     const paredToken = JSON.parse(tokenFromLocalStoreage)
     const token = paredToken.accessToken
     console.log(token)
     console.log(paredToken)
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
