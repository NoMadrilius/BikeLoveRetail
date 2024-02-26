import {createContext, useContext} from "react";
import {CatalogPageResponse} from "@/dataTransferObjects/response/CatalogPageResponse";
import {makeAutoObservable} from "mobx";
import {CatalogProductsByCategoryRequest} from "@/dataTransferObjects/request/CatalogProductsByCategoryRequest";
import {PublicAPI} from "@/api/PublicAPI";

class CatalogStore{
    catalogState:CatalogPageResponse|null = null
    loading:boolean = false

    openedOptions:number[]=[]

    constructor() {
        makeAutoObservable(this);
    }

    async loadStateCategory(categoryId:number, page:number, filters:number[], sort:string[]){
        const request: CatalogProductsByCategoryRequest = {
            categoryId: categoryId,
            storageId: 1,
            page: page,
            pageSize: 15,
            filtersVariantIds: filters,
            sortingSettings: sort,
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