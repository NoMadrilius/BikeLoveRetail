import { LoginRequest, RegisterRequest } from '@/types/types';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import { apiUrls } from './apiUrls';
import axios from 'axios';
import * as jose from 'jose'
import { showToast } from '@/helpers/alertService/alertService';
import  Router  from 'next/router';
import axiosInstance from '@/api/axiosInstance';
import { CONFIG } from '../../config';

class AuthStore {
    registerUserResponse: any = {}
    loadingRegister: boolean = false
    loginUserResponse: any = {}
    loadingLogin: boolean = false
  
    constructor() {
      makeAutoObservable(this);
    }
    
    register = async (request: RegisterRequest, noRelocate?:boolean) => {
        const loginRequest = {
            phone: request.phone,
            password: request.password
        }
        try {
            this.loadingRegister = true

            const response = await axios.post('/api/register', request);
            this.registerUserResponse = { ...response.data }
            
            await this.login(loginRequest)

            if (typeof localStorage !== "undefined") {

                if (typeof response.data.user !== "undefined") {
                    localStorage.setItem("RegistrationStore", JSON.stringify({ ...response.data }))
                   
                    if(!noRelocate){
                        Router.push('/')
                    }
            showToast({
                    info: "Удачных покупок :)",
                    title: "Аккаунт создан",
                    type: "success",
                });
            this.loadingRegister = false
                    return response.data
                } else { 
                    console.error('Error fetching data:')
                }

            }
            
        } catch (error: any) {
            showToast({
                info: error.message,
                title: 'Ошибка',
                type: "error",
            });
            this.loadingRegister = false
            
        }
    }
    login = async (request: LoginRequest,noRelocate?:boolean) => {
        try {
            this.loadingLogin = true
            const response = await axios.post('/api/login', request)
            this.loginUserResponse = {...response.data}
            showToast({
                info: 'Вітаємо',
                title: 'Вхід виконано',
                type: 'success'
            })
            this.checkAuth()
            if(!noRelocate){
                Router.push('/')
            }
         
           
            this.loadingLogin = false

            if (typeof localStorage !== "undefined") {
                if (typeof response.data.accessToken !== "undefined") {
                    const result = {
                        accessTokenDetail: jose.decodeJwt(response.data.accessToken),
                        ...response.data
                    }

                    localStorage.setItem("AuthStore", JSON.stringify(result))
                    return result
                } else {
                    
                    showToast({
                        info: 'Неправильний логін або пароль',
                        title: 'Вхід не виконано',
                        type: 'error'
                    })
                    this.loadingLogin = false
                }
            }
        } catch (error) {
            showToast({
                info: 'Неправильний логін або пароль',
                title: 'Вхід не виконано',
                type: 'error'
            })
            this.loadingLogin = false
        }
    }
    refreshToken = async() => {
        const refreshCookie = document.cookie
 

const refreshToken = refreshCookie ? refreshCookie.split('=')[1] : null;
console.log(refreshCookie)
console.log(refreshToken)
        try {
            const response = await axiosInstance.post(`/auth/refresh`)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    selfUpdate = async (requestBody: any,) => {
        let token
        if(typeof localStorage !== 'undefined'){
            const auth = localStorage.getItem('AuthStore')
            const authToken = JSON.parse(auth!) || ''
            token = authToken.accessToken
        }
        try {
          const response = await axios.put('/api/updateSelfInfo', {token, requestBody});
      
          this.loginUserResponse.user = response.data
          if (typeof localStorage !== 'undefined') {
            const storedJson = localStorage.getItem("AuthStore");
            const authStoreData = storedJson ? JSON.parse(storedJson) : {};
      
            authStoreData.user = {
              ...authStoreData.user,
              ...response.data,
            };
            localStorage.setItem("AuthStore", JSON.stringify(authStoreData));
          }
      
          showToast({
            info: 'Ваші особисті дані успішно змінено',
            title: 'Успіх',
            type: 'success'
          });
        } catch (error) {
          console.log('erorr');
          showToast({
            info: 'Щось пішло не так :(',
            title: 'Помилка',
            type: 'error'
          });
        }
      };
      

    readAuth = () => {
        if (typeof localStorage !== "undefined") {
            const storedJson = localStorage.getItem("AuthStore")

            if (storedJson) {
                Object.assign(this.loginUserResponse, JSON.parse(storedJson))
            }
        }
    }

    checkAuth = () => {
        this.readAuth()

        if (typeof authStore.loginUserResponse.accessTokenDetail !== "undefined") {
            const currentTime = Math.ceil((+new Date())/1000)
            
            if (currentTime < authStore.loginUserResponse.accessTokenDetail.exp) {
                return true
            }
        }

        return false
    }
    getLoginUserResponse() {
        if(this.checkAuth()){
            return this.loginUserResponse?.user?.id;
        }else{
            return this.loginUserResponse = {};
        }
        
        
    }
    
   
  }
  
const authStore = new AuthStore();
const StoreContext = createContext(authStore);

export const useAuthStore = () => useContext(StoreContext);
export default authStore;
