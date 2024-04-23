import axiosInstance from "@/api/axiosInstance";
import {CatalogProductsByCategoryRequest} from "@/dataTransferObjects/request/CatalogProductsByCategoryRequest";
import {CatalogPageResponse} from "@/dataTransferObjects/response/CatalogPageResponse";
import {AxiosResponse} from "axios";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {Shop} from "@/dataTransferObjects/entities/Shop";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {ProductSearchPreview} from "@/dataTransferObjects/response/ProductSearchPreview";
import {CategoriesSearchPreview} from "@/dataTransferObjects/response/CategoriesSearchPreview";
import {BikeSelectCountRequest} from "@/dataTransferObjects/request/BikeSelectCountRequest";

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
    },

    GetSales():Promise<AxiosResponse<ProductFullData[]>>{
        return axiosInstance.get<ProductFullData[]>(`/public/sales`);
    },

    GetTop():Promise<AxiosResponse<ProductFullData[]>>{
        return axiosInstance.get<ProductFullData[]>(`/public/foryou`);
    },
    SearchPreview(query:string, categoryId:number|undefined):Promise<AxiosResponse<ProductSearchPreview[]>>{
        let url = `/public/searchpreview?Querry=${query}`
        if(categoryId != undefined) url += `&CategoryId=${categoryId}`
        return axiosInstance.get<ProductSearchPreview[]>(url);
    },
   CategoriesSearchPreview(query:string):Promise<AxiosResponse<CategoriesSearchPreview[]>>{
        return axiosInstance.get<CategoriesSearchPreview[]>(`/public/catsearchpw?Querry=${query}`);
    },
    GetState():Promise<AxiosResponse<AppState>>{
        return axiosInstance.get<AppState>(`/public/getstate`);
    },
    BikeSelectorCount(data:BikeSelectCountRequest):Promise<AxiosResponse<number>>{
       return axiosInstance.post<number>(`/public/bikeselectorcount`,data);
    }
}