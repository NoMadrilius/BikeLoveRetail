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
import { WorkshopDataResponse } from "@/dataTransferObjects/response/WorkshopDataResponse";
import { PageDataResponse } from "@/dataTransferObjects/response/PageDataResponse";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import { param } from "ts-interface-checker";

export const PublicAPI = {
    CatalogProductsByCategory(data:CatalogProductsByCategoryRequest):Promise<AxiosResponse<CatalogPageResponse>>{
        return axiosInstance.post<CatalogPageResponse>("/public/catalogproducts", data);
    },
    GetProductCardById(id:number, lang:string|undefined):Promise<AxiosResponse<ProductFullData>>{
        return axiosInstance.get<ProductFullData>(`/public/getproductcardbyid`, {params:{productId:id, lang:lang}});
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

    Search(query:string):Promise<AxiosResponse<CatalogPageProduct[]>>{
    return axiosInstance.get<CatalogPageProduct[]>(`/web-retail/fast-search`, {params:{Querry:query}});
    },

   CategoriesSearchPreview(query:string):Promise<AxiosResponse<CategoriesSearchPreview[]>>{
        return axiosInstance.get<CategoriesSearchPreview[]>(`/public/catsearchpw?Querry=${query}`);
    },
    GetState():Promise<AxiosResponse<AppState>>{
        return axiosInstance.get<AppState>(`/public/getstate`);
    },

  GetState2(locale?:string, currencyId?:number):Promise<AxiosResponse<AppState>>{
    return axiosInstance.get<AppState>(`/web-retail/get-state`, {params:{Lang:locale, CurrencyId:currencyId}});
  },

    BikeSelectorCount(data:BikeSelectCountRequest):Promise<AxiosResponse<number>>{
       return axiosInstance.post<number>(`/public/bikeselectorcount`,data);
    },

  GetWorkshopData():Promise<AxiosResponse<WorkshopDataResponse>>{
    return axiosInstance.get<WorkshopDataResponse>(`/work/public`);
  },

  GetPageData(Url:string, Lang?:string, CurrencyId?:number):Promise<AxiosResponse<PageDataResponse>>{
    return axiosInstance.get<PageDataResponse>(`/web-retail/get-page`, {params:{Url:Url, Lang:Lang??undefined, CurrencyId:CurrencyId??undefined}});
  },

}