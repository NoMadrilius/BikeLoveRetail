import {CreateOrderRequest} from "@/dataTransferObjects/request/CreateOrderRequest";
import axiosInstance from "@/api/axiosInstance";
import {Currency} from "@/dataTransferObjects/entities/Currency";
import {AxiosResponse} from "axios";
import {Order} from "@/dataTransferObjects/entities/Order";

export const OrderAPI = {
    PublicCreate(r:CreateOrderRequest):Promise<AxiosResponse<Order>>{
        return axiosInstance.post<Order>("/order/publiccreate",r);
    }
}