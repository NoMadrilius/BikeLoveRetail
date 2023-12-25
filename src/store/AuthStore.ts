import { RegisterRequest } from '@/types/types';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import { apiUrls } from './apiUrls';
import axios from 'axios';
import { showToast } from '@/helpers/alertService/alertService';

class AuthStore {
    registerUserResponse: any = {}
    loadingRegister: boolean = false
  
    constructor() {
      makeAutoObservable(this);
    }
    register = async (request: RegisterRequest) => {
        console.log(request)
        try {
            this.loadingRegister = true
            console.log(request)
            const response = await axios.post(apiUrls.register, request)
            this.registerUserResponse = { ...response.data }
            

            // if (typeof localStorage !== "undefined") {

            //     if (typeof response.data.user !== "undefined") {
            //         localStorage.setItem("RegistrationStore", JSON.stringify({ ...response.data }))
            //         return response.data
            //     } else {
            //         console.error('Error fetching data:')
            //     }

            // }
            showToast({
                info: "Удачных покупок :)",
                title: "Аккаунт создан",
                type: "success",
            });
            this.loadingRegister = false
        } catch (error: any) {
            showToast({
                info: error.message,
                title: 'Ошибка',
                type: "error",
            });
            this.loadingRegister = false
            
        }
    }
    
   
  }
  
const authStore = new AuthStore();
const StoreContext = createContext(authStore);

export const useAuthStore = () => useContext(StoreContext);
export default authStore;
