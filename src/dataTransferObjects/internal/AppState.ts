import {Shop} from "@/dataTransferObjects/entities/Shop";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {Currency} from "@/dataTransferObjects/entities/Currency";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {BikeSelectState} from "@/dataTransferObjects/response/BikeSelectState";

export interface AppState{
    shops:Shop[],
    categories:ProductCategory[],
    currencies:Currency[],
    popularCategories:number[]
    bikePorpouseCategories:number[]
    saleProducts:ProductFullData[]
    topProducts:ProductFullData[]
    bikeSelectState:BikeSelectState
}