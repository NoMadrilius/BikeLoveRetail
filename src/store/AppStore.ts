import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {Shop} from "@/dataTransferObjects/entities/Shop";
import {PublicAPI} from "@/api/PublicAPI";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {TreeNode} from "@/dataTransferObjects/internal/TreeNode";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";

class AppStore{
    isOpenSidebar=false
    isOpenCategories=false
    isOpenSettings=false
    shops:Shop[] = []

    categories: ProductCategory[] = [];
    selectedCategory: ProductCategory|null = null;
    categoryBlocks:ProductCategory[] = []

    saleProducts:ProductFullData[] = []
    topProducts:ProductFullData[]=[]

    //del
    categoryTree: TreeNode[] = []

    constructor() {
        makeAutoObservable(this)
        if(typeof window != "undefined")
        this.fetchShops()
    }

    loadSaleProducts(){
        PublicAPI.GetSales().then(n=>{
            this.saleProducts = n.data
        })
    }

    loadTopProducts(){
        PublicAPI.GetTop().then(n=>{
            this.topProducts = n.data
        })
    }

    setSelectedCategory(v:ProductCategory|null){
        this.selectedCategory = v
        if(v)
        this.categoryBlocks = this.categories.filter(n=>n.parentId === v.id)
        else this.categoryBlocks = []
    }

    setServerData(d:AppState){
        this.shops = d.shops
        this.categories = d.categories
        //this.categoryTree = this.buildTree(this.categories)
    }
    setIsOpenSidebar(v:boolean) {this.isOpenSidebar=v}
    setIsOpenCategories(v:boolean) {this.isOpenCategories=v}
    setIsOpenSettings(v:boolean) {this.isOpenSettings=v}

    buildTree(data: ProductCategory[], parentId: number = 0, depth:number = 0) {
        const tree: TreeNode[] = []
        data.forEach((cat) => {
            if (cat.parentId === parentId) {
                let buf:TreeNode = {cat:cat, childs:this.buildTree(data, cat.id,depth+1), depth:depth, expanded:false}
                tree.push(buf)
            }
        })
        return tree
    }

    fetchShops(){
        PublicAPI.GetShops().then(r=>this.shops = r.data)
    }

    toggleExpandNode(id:number){
        console.log('toggle')
        this.categoryTree = this.categoryTree.map(n=>{
            if(n.cat.id === id) return {...n, expanded:true}
            return n
        })
    }

}

const appStore = new AppStore()
const StoreContext = createContext(appStore);

export const useAppStore = () => useContext(StoreContext);
export default appStore
