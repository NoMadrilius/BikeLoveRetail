import { ProductPageDataProduct } from "@/dataTransferObjects/response/productPage/ProductPageDataProduct";
import { ProductPageDataBrand } from "@/dataTransferObjects/response/productPage/ProductPageDataBrand";
import { ProductPageDataCategory } from "@/dataTransferObjects/response/productPage/ProductPageDataCategory";
import { ProductPageDataImage } from "@/dataTransferObjects/response/productPage/ProductPageDataImage";
import { ProductPageDataOption } from "@/dataTransferObjects/response/productPage/ProductPageDataOption";
import { ProductPageDataBinds } from "@/dataTransferObjects/response/productPage/ProductPageDataBinds";
import { ProductPageDataParameter } from "@/dataTransferObjects/response/productPage/ProductPageDataParameter";

export interface ProductPageData{
  product: ProductPageDataProduct;
  brand?: ProductPageDataBrand;
  categoryWay: ProductPageDataCategory[];
  images: ProductPageDataImage[];
  requiredVariants: ProductPageDataOption[];
  productOptions: ProductPageDataOption[];
  binds: ProductPageDataBinds[];
  parameters: ProductPageDataParameter[];
}