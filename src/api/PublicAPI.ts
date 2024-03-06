import axiosInstance from "@/api/axiosInstance";
import {CatalogProductsByCategoryRequest} from "@/dataTransferObjects/request/CatalogProductsByCategoryRequest";
import {CatalogPageResponse} from "@/dataTransferObjects/response/CatalogPageResponse";
import {AxiosResponse} from "axios";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {Shop} from "@/dataTransferObjects/entities/Shop";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";

export const PublicAPI = {
    CatalogProductsByCategory(data:CatalogProductsByCategoryRequest):Promise<AxiosResponse<CatalogPageResponse>>{
        return axiosInstance.post<CatalogPageResponse>("/public/catalogproducts", data);
    },
    GetProductCardById(id:number):Promise<AxiosResponse<ProductFullData>>{
        return axiosInstance.get<ProductFullData>(`/public/getproductcardbyid?productId=${id}`);
    },

    GetShops():Promise<AxiosResponse<Shop[]>>{
        return axiosInstance.get<Shop[]>(`/shop/getpublic`);
    },
    GetCategories():Promise<AxiosResponse<ProductCategory[]>>{
        return axiosInstance.get<ProductCategory[]>(`/public/getcategories`);
    }
}