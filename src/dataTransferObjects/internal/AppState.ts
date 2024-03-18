import {Shop} from "@/dataTransferObjects/entities/Shop";
import Categories from "@/components/Modal/Categories";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";

export interface AppState{
    shops:Shop[],
    categories:ProductCategory[]
}