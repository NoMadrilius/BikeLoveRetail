import axiosInstance from "@/api/axiosInstance";
import {LoginResponse} from "@/dataTransferObjects/response/LoginResponse";
import {LoginRequest} from "@/dataTransferObjects/request/LoginRequest";
import {RegisterRequest} from "@/dataTransferObjects/request/RegisterRequest";
import {AxiosResponse} from "axios";
import {RefreshResponse} from "@/dataTransferObjects/response/RefreshResponse";

export const AuthAPI = {
    Login(data:LoginRequest):Promise<AxiosResponse<LoginResponse>>{
        return axiosInstance.post<LoginResponse>("/auth/login", data)
    },
    Register(data:RegisterRequest):Promise<AxiosResponse<LoginResponse>>{
        return axiosInstance.post<LoginResponse>("/auth/register", data);
    },

    Refresh():Promise<AxiosResponse<RefreshResponse>>{
        return axiosInstance.post<RefreshResponse>("/public/refresh");
    },
    Logout():Promise<AxiosResponse>{
        return axiosInstance.post("/public/logout");
    },

    SelfVerification():Promise<AxiosResponse>{
        return axiosInstance.post("/auth/selfverif?verifType=BinoCall");
    },
    ConfirmSelfVerification(code:string):Promise<AxiosResponse>{
        return axiosInstance.post(`/auth/confirmselfverif?verifType=BinoCall&code=${code}`);
    }
}