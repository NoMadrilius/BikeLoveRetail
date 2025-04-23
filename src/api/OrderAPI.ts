import {CreateOrderRequest} from "@/dataTransferObjects/request/CreateOrderRequest";
import axiosInstance from "@/api/axiosInstance";
import {Currency} from "@/dataTransferObjects/entities/Currency";
import {AxiosResponse} from "axios";
import {Order} from "@/dataTransferObjects/entities/Order";
import {OrderFullData} from "@/dataTransferObjects/entities/OrderFullData";
import { PublicPromoRequest } from "@/dataTransferObjects/request/PublicPromoRequest";
import { PromoResponse } from "@/dataTransferObjects/response/PromoResponse";

export const OrderAPI = {
    PublicCreate(r:CreateOrderRequest):Promise<AxiosResponse<OrderFullData>>{
        return axiosInstance.post<OrderFullData>("/order/publiccreate",r);
    },
    GetPromo(r:PublicPromoRequest):Promise<AxiosResponse<PromoResponse|null>>{
        return axiosInstance.post<PromoResponse|null>("/order/public-promo",r);
    },
    GetByUUID(uuid:string):Promise<AxiosResponse<OrderFullData>>{
        console.log("fetching",uuid)
        return axiosInstance.get<OrderFullData>("/order/byuuid?uuid="+uuid);
    },
    PayForOrder(id:number):Promise<AxiosResponse<string>>{
        return axiosInstance.get<string>(`/payments/liqpay?Target=Order&TargetId=${id}`);
    },
    GetSelf():Promise<AxiosResponse<OrderFullData[]>>{
        return axiosInstance.get<OrderFullData[]>(`/order/getbyuser`);
    }
}