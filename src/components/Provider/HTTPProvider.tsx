import React, {ReactElement} from 'react';
import authStore from "@/store/AuthStore";
import {AxiosError} from "axios";
import AuthStore from "@/store/AuthStore";
import axiosInstance from "@/api/axiosInstance";
import {router} from "next/client";
import {useRouter} from "next/router";

const HttpProvider = (p: { children: ReactElement }) => {
 const r = useRouter()
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
        console.warn('Ошибка:', error.response?.data)
        return Promise.reject(error);
    });

    // Function that will be called to refresh authorization
    const refreshAuthLogic = (failedRequest: any) =>
        AuthStore.refreshToken(()=>{
            return Promise.resolve();
        }, ()=>{
            r.push("/")
            return Promise.reject(failedRequest);
        })

    //createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);

    return p.children;
};

export default HttpProvider;