import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {ProductSearchPreview} from "@/dataTransferObjects/response/ProductSearchPreview";
import {CategoriesSearchPreview} from "@/dataTransferObjects/response/CategoriesSearchPreview";
import {PublicAPI} from "@/api/PublicAPI";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";

class SearchStore{
    isOpenSearch=false

    query:string=""
    isLoadingProducts=false

    products:CatalogPageProduct[]=[]

    constructor() {
        makeAutoObservable(this)
    }

    setIsOpenSearch(v:boolean) {this.isOpenSearch=v}
    setQuery(v:string){
        this.query = v
        if(v!="")
        this.searchProducts()
    }

    searchProducts(){
        this.isLoadingProducts = true
        PublicAPI.Search(this.query).then((r)=>{
            this.products = r.data
        }).finally(()=>{this.isLoadingProducts=false})
    }
}

const searchStore = new SearchStore()
const StoreContext = createContext(searchStore);

export const useSearchStore = () => useContext(StoreContext);
export default searchStore