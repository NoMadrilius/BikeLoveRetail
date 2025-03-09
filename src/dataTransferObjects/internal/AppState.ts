import {Shop} from "@/dataTransferObjects/entities/Shop";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {Currency} from "@/dataTransferObjects/entities/Currency";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {BikeSelectState} from "@/dataTransferObjects/response/BikeSelectState";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";

export interface AppState{
    shops:Shop[],
    //categories:ProductCategory[],
    categories:Category[],
    currencies:Currency[],
    popularCategories:number[]
    bikePorpouseCategories:number[]
    salesProducts:CatalogPageProduct[]
    popularProducts:CatalogPageProduct[]
    trendingProducts:CatalogPageProduct[]
    bikeSelectState:BikeSelectState
}

export interface Category{
    name: string;
    id: number;
    sortOrder: number;
    parentId: number;
    image?:string;
    url:string
}