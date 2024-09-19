import { productPageStore } from "@/store/ProductPageStore";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";

export const setStateProduct = (prod:ProductFullData, sel:number[])=>{
  productPageStore.setDataServer(prod, sel)
}