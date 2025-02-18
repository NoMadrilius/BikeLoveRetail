import { CatalogPageCategory } from "@/dataTransferObjects/response/catalogPage/CatalogPageCategory";
import { CatalogPageOption } from "@/dataTransferObjects/response/catalogPage/CatalogPageOption";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";

export interface CatalogPageData{
  products: CatalogPageProduct[];
  page: number;
  pageSize: number;
  totalPages: number;
  totalProducts: number;
  seoLocalized?: string | null;
  lang: string;
  category: CatalogPageCategory;
  categoryWay: CatalogPageCategory[];
  childrens: CatalogPageCategory[];
  brands: object[];
  options: CatalogPageOption[];
  sortingSettings: string[];
  filterSettings: number[];
  segments:string[]
}