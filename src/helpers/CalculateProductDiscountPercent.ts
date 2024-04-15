import {Product} from "@/dataTransferObjects/entities/Product";

export function CalculateProductDiscountPercent(product:Product):number{
    const dif = product.oldRetailPrice - product.retailPrice
    if(dif>0) return Math.round(dif/product.oldRetailPrice*100)
    else return 0
}