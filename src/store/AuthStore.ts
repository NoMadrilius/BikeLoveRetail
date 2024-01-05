import { LoginRequest, RegisterRequest } from '@/types/types';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import { apiUrls } from './apiUrls';
import axios from 'axios';
import * as jose from 'jose'
import { showToast } from '@/helpers/alertService/alertService';
import  Router  from 'next/router';

class AuthStore {
    registerUserResponse: any = {}
    loadingRegister: boolean = false
    loginUserResponse: any = {}
    loadingLogin: boolean = false
  
    constructor() {
      makeAutoObservable(this);
    }
    
    register = async (request: RegisterRequest) => {
        try {
            this.loadingRegister = true

            const response = await axios.post('/api/register', request);
            this.registerUserResponse = { ...response.data }

            

            if (typeof localStorage !== "undefined") {

                if (typeof response.data.user !== "undefined") {
                    localStorage.setItem("RegistrationStore", JSON.stringify({ ...response.data }))
                   
                    Router.push('/')
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
    login = async (request: LoginRequest) => {
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
            Router.push('/')
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
        this.checkAuth()
        return this.loginUserResponse?.user?.id;
    }
    
   
  }
  
const authStore = new AuthStore();
const StoreContext = createContext(authStore);

export const useAuthStore = () => useContext(StoreContext);
export default authStore;
