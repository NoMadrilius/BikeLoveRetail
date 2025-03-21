import axiosInstance from "@/api/axiosInstance";
import {LoginResponse} from "@/dataTransferObjects/response/LoginResponse";
import {LoginRequest} from "@/dataTransferObjects/request/LoginRequest";
import {RegisterRequest} from "@/dataTransferObjects/request/RegisterRequest";
import {AxiosResponse} from "axios";
import {RefreshResponse} from "@/dataTransferObjects/response/RefreshResponse";
import {UserExistResponse} from "@/dataTransferObjects/response/UserExistResponse";

export const AuthAPI = {
    Login(data:LoginRequest):Promise<AxiosResponse<LoginResponse>>{
        return axiosInstance.post<LoginResponse>("/auth/login", data)
    },

    CodeLogin(phone:string, type:"BinoCall"|"BinoSMS"):Promise<AxiosResponse>{
        return axiosInstance.post(`/auth/codelogin`,null,{params:{
                Phone:phone,
                VerifType:type,
            }})
    },

    ConfirmCodeLogin(phone:string, type:"BinoCall"|"BinoSMS", code:string):Promise<AxiosResponse<LoginResponse>>{
        return axiosInstance.post<LoginResponse>(`/auth/confirmcodelogin`,null, {params:{
                Phone:phone,
                VerifType:type,
                Code:code
            }})
    },

    Register(data:RegisterRequest):Promise<AxiosResponse<LoginResponse>>{
        return axiosInstance.post<LoginResponse>("/auth/register", data);
    },

    Refresh():Promise<AxiosResponse<RefreshResponse>>{
        return axiosInstance.post<RefreshResponse>("/auth/refresh");
    },
    Logout():Promise<AxiosResponse>{
        return axiosInstance.post("/auth/logout");
    },

    SelfVerification():Promise<AxiosResponse>{
        return axiosInstance.post("/auth/selfverif?verifType=BinoCall");
    },
    ConfirmSelfVerification(code:string):Promise<AxiosResponse>{
        return axiosInstance.post(`/auth/confirmselfverif?verifType=BinoCall&code=${code}`);
    },
    CheckUserExist(phone:string):Promise<AxiosResponse<UserExistResponse>>{
        return axiosInstance.get<UserExistResponse>(`/auth/checkuserexist`,{params:{phoneNumber:phone}});
    },


}