import {Product} from "@/dataTransferObjects/entities/Product";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {ProductOptionVariants} from "@/dataTransferObjects/entities/ProductOptionVariants";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";

export interface CatalogPageResponse{
    products:ProductFullData[]
    category?:ProductCategory
    page: number;
    pageSize: number;
    totalPages: number;
    totalProducts: number;
    storageId: number;
    options: ProductOptionVariants[];
    sortingSettings: string[];
    filterSettings: number[];
}