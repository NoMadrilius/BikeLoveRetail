import { ProductPageData } from "@/dataTransferObjects/response/productPage/ProductPageData";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";

export const PageToCatalogProduct = (p:ProductPageData)=>{
  return {
    id: p.product.id,
    name: p.product.name,
    url: p.binds.find(n=>n.id = p.product.id)?.url??"/",
    availability: p.product.availability,
    price: p.product.price,
    oldPrice: p.product.oldPrice,
    currencySymbol: p.product.currencySymbol,
    image: p.images.sort((a,b)=>a.sortOrder-b.sortOrder)[0]?.url??0
  } as CatalogPageProduct;
}