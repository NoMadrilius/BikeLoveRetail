import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import {Shop} from "@/dataTransferObjects/entities/Shop";
import {PublicAPI} from "@/api/PublicAPI";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {TreeNode} from "@/dataTransferObjects/internal/TreeNode";

class AppStore{
    isOpenSidebar=false
    isCartVisible=false
    isOpenCategories=false
    isOpenSettings=false

    shops:Shop[] = []
    categories: ProductCategory[] = [];
    categoryTree: TreeNode[] = []

    constructor() {
        makeAutoObservable(this)
        this.fetchShops()
    }

    async serverInitialize(){
        let shops = PublicAPI.GetShops()
        let cats = PublicAPI.GetCategories()

        return {s:(await shops).data, c:(await cats).data}
    }
    setServerData(d:{s:Shop[],c:ProductCategory[]}){
        this.shops = d.s
        this.categories = d.c
        this.categoryTree = this.buildTree(this.categories)
    }
    setIsOpenSidebar(v:boolean) {this.isOpenSidebar=v}
    setIsCartVisible(v:boolean) {this.isCartVisible=v}
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
