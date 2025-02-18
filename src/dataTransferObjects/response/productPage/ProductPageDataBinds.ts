import { ProductPageDataOption } from "@/dataTransferObjects/response/productPage/ProductPageDataOption";

export interface ProductPageDataBinds{
  id: number;
  name: string;
  url: string;
  image?: string;
  requiredVariants: ProductPageDataOption[];
}