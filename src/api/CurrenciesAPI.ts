import {AxiosResponse} from "axios/index";
import axiosInstance from "@/api/axiosInstance";
import {Currency} from "@/dataTransferObjects/entities/Currency";

export const CurrenciesAPI = {
    GetPublic():Promise<AxiosResponse<Currency[]>>{
        return axiosInstance.get<Currency[]>("/currency/getpublic");
    },
}