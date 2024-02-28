import React, {ReactElement} from 'react';
import AuthStore from "@/store/AuthStore";
import axiosInstance from "@/api/axiosInstance";
import {useRouter} from "next/router";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const HttpProvider = (p: { children: ReactElement }) => {
 const r = useRouter()

    // Function that will be called to refresh authorization
    const refreshAuthLogic = async (failedRequest: any) => {
        console.log('refresh logic')
        await AuthStore.refreshToken(() => {
            return Promise.resolve();
        }, () => {
            r.push("/")
            return Promise.reject(failedRequest);
        })
    }
    createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic, {statusCodes:[401]});

    return p.children;
};

export default HttpProvider;