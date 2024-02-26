import axiosInstance from "@/api/axiosInstance";
import {CatalogProductsByCategoryRequest} from "@/dataTransferObjects/request/CatalogProductsByCategoryRequest";
import {CatalogPageResponse} from "@/dataTransferObjects/response/CatalogPageResponse";
import {AxiosResponse} from "axios";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";

export const PublicAPI = {
    CatalogProductsByCategory(data:CatalogProductsByCategoryRequest):Promise<AxiosResponse<CatalogPageResponse>>{
        return axiosInstance.post<CatalogPageResponse>("/public/catalogproducts", data);
    },
    GetProductCardById(id:number):Promise<AxiosResponse<ProductFullData>>{
        return axiosInstance.get<ProductFullData>(`/public/getproductcardbyid?productId=${id}`);
    }
}