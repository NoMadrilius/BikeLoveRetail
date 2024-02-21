import {createContext, useContext} from "react";
import {CatalogPageResponse} from "@/dataTransferObjects/response/CatalogPageResponse";
import {makeAutoObservable} from "mobx";
import {CatalogProductsByCategoryRequest} from "@/dataTransferObjects/request/CatalogProductsByCategoryRequest";
import {PublicAPI} from "@/api/PublicAPI";

class CatalogStore{
    catalogState:CatalogPageResponse|null = null
    loading:boolean = false

    query:{id:number,page:number,filters:number[]}={id:1,page:1,filters:[]}

    openedOptions:number[]=[]

    constructor() {
        makeAutoObservable(this);
    }

    async loadStateCategory(categoryId:number, page:number, filters:number[]){
        const request: CatalogProductsByCategoryRequest = {
            categoryId: categoryId,
            storageId: 1,
            page: page,
            pageSize: 15,
            filtersVariantIds: filters,
            sortingSettings: [],
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

    setQuery(v:{id:number,page:number,filters:number[]}){
        this.query = v
    }
}

const catalogStore = new CatalogStore();
const StoreContext = createContext(catalogStore);

export const useCatalogStore = () => useContext(StoreContext);
export default catalogStore;