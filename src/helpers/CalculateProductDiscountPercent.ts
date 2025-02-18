import {Product} from "@/dataTransferObjects/entities/Product";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";

export function CalculateProductDiscountPercent(product:Product):number{
    const dif = product.oldRetailPrice - product.retailPrice
    if(dif>0) return Math.round(dif/product.oldRetailPrice*100)
    else return 0
}

export function CalculateProductDiscountPercent2(product:CatalogPageProduct):number{
    const dif = product.oldPrice - product.price
    if(dif>0) return Math.round(dif/product.oldPrice*100)
    else return 0
}