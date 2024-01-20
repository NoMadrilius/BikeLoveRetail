import axios from "axios";
import { CONFIG } from "../../config";


const axiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",

  },
});

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     if (typeof localStorage !== 'undefined') {
//     const token ='asdasdasd'
//     console.log(token)
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
