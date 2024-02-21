import {Product} from "@/dataTransferObjects/entities/Product";
import {ProductImage} from "@/dataTransferObjects/entities/ProductImage";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {ProductOptionVariantBind} from "@/dataTransferObjects/entities/ProductOptionVariantBind";
import {ProductCard} from "@/dataTransferObjects/entities/ProductCard";

export interface ProductFullData{
    product: Product
    productCard: ProductCard
    productOptions: ProductOptionVariantBind[]
    productImages: ProductImage[]
    productCategory: ProductCategory
    bindedProducts: Product[]
    productStorageQuantity: { [key: number]: { [subKey: number]: number } };
    productStorageReserved: { [key: number]: { [subKey: number]: number } };
}