import { ProductPageData } from "@/dataTransferObjects/response/productPage/ProductPageData";
import { CatalogPageData } from "@/dataTransferObjects/response/catalogPage/CatalogPageData";

export interface PageDataResponse{
  type: string;
  productPage?: ProductPageData
  catalogPage?: CatalogPageData
}