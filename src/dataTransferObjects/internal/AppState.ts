import {Shop} from "@/dataTransferObjects/entities/Shop";
import Categories from "@/components/Modal/Categories";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {Currency} from "@/dataTransferObjects/entities/Currency";

export interface AppState{
    shops:Shop[],
    categories:ProductCategory[],
    currencies:Currency[]
}