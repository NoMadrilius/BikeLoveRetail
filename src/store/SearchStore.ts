import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {ProductSearchPreview} from "@/dataTransferObjects/response/ProductSearchPreview";
import {CategoriesSearchPreview} from "@/dataTransferObjects/response/CategoriesSearchPreview";
import {PublicAPI} from "@/api/PublicAPI";

class SearchStore{
    isOpenSearch=false

    query:string=""
    isLoadingProducts=false
    isLoadingCategories=false
    requestTimeout=1000

    products:ProductSearchPreview[]=[]
    categories:CategoriesSearchPreview[]=[]

    selectedCategory:number|undefined = undefined


    constructor() {
        makeAutoObservable(this)
    }

    setIsOpenSearch(v:boolean) {this.isOpenSearch=v}
    setQuery(v:string){
        this.query = v
        if(v!="")
        this.searchCategories()
        this.searchProducts()
    }

    searchProducts(){
        this.isLoadingProducts = true
        PublicAPI.SearchPreview(this.query, this.selectedCategory).then((r)=>{
            this.products = r.data
        }).finally(()=>{this.isLoadingProducts=false})
    }

    searchCategories(){
        this.isLoadingCategories = true
        PublicAPI.CategoriesSearchPreview(this.query).then(r=>{
            this.categories = r.data
            if(!this.categories.find(n=>n.id === this.selectedCategory)) this.setSelectedCategory(undefined)
        }).finally(()=>{this.isLoadingCategories = false})
    }

    setSelectedCategory(v:number|undefined){
        this.selectedCategory = v
        this.searchProducts()
    }

}

const searchStore = new SearchStore()
const StoreContext = createContext(searchStore);

export const useSearchStore = () => useContext(StoreContext);
export default searchStore