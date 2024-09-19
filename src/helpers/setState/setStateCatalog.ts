import { CatalogPageResponse } from "@/dataTransferObjects/response/CatalogPageResponse";
import catalogStore from "@/store/CatalogStore";

export const setStateCatalog = (p:CatalogPageResponse)=>{
  catalogStore.setCatalogStateServer(p)
}