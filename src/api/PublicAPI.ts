import axiosInstance from "@/api/axiosInstance";
import {CatalogProductsByCategoryRequest} from "@/dataTransferObjects/request/CatalogProductsByCategoryRequest";
import {CatalogPageResponse} from "@/dataTransferObjects/response/CatalogPageResponse";
import {AxiosResponse} from "axios";

export const PublicAPI = {
    CatalogProductsByCategory(data:CatalogProductsByCategoryRequest):Promise<AxiosResponse<CatalogPageResponse>>{
        return axiosInstance.post<CatalogPageResponse>("/public/catalogproducts", data);
    }
}