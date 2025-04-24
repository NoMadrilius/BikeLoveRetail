import {createContext, useContext} from "react";
import {CatalogPageResponse} from "@/dataTransferObjects/response/CatalogPageResponse";
import {makeAutoObservable} from "mobx";
import {CatalogProductsByCategoryRequest} from "@/dataTransferObjects/request/CatalogProductsByCategoryRequest";
import {PublicAPI} from "@/api/PublicAPI";
import {CatalogLinkParams} from "@/dataTransferObjects/internal/linkParams/CatalogLinkParams";
import { sort } from "next/dist/build/webpack/loaders/css-loader/src/utils";

class CatalogStore{
    catalogState:CatalogPageResponse|null = null
    loading:boolean = false

    isOpenFiltersModal = false

    openedOptions:number[]=[]

    sorting:string = "default"

    constructor() {
        makeAutoObservable(this);
    }

    setIsOpenFiltersModal(v:boolean){this.isOpenFiltersModal = v}
    setSorting(v:string){this.sorting=v}

    async loadStateCategory(d:CatalogLinkParams){
        const request: CatalogProductsByCategoryRequest = {
            categoryId: d.id,
            storageId: 1,
            page: d.page,
            pageSize: 15,
            filtersVariantIds: d.filters,
            sortingSettings:d.sort
        };

        this.loading = true
        let data : CatalogPageResponse = {} as CatalogPageResponse
        await PublicAPI.CatalogProductsByCategory(request).then((r)=>{
            data = r.data
        }).finally(()=>this.loading = false)
        return data
    }

    setCatalogState(v:CatalogPageResponse){
        this.catalogState = v
    }

    toggleOption(id:number){
        if(this.openedOptions.includes(id)) this.openedOptions=this.openedOptions.filter(n=>n != id)
        else this.openedOptions.push(id)
    }
}

const catalogStore = new CatalogStore();
const StoreContext = createContext(catalogStore);

export const useCatalogStore = () => useContext(StoreContext);
export default catalogStore;