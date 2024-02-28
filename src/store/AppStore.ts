import {makeAutoObservable} from "mobx";
import {createContext, useContext} from "react";
import authStore from "@/store/AuthStore";

class AppStore{
    isOpenSidebar=false
    isCartVisible=false
    isOpenCategories=false
    isOpenSettings=false
    constructor() {
        makeAutoObservable(this)
    }

    setIsOpenSidebar(v:boolean) {this.isOpenSidebar=v}
    setIsCartVisible(v:boolean) {this.isCartVisible=v}
    setIsOpenCategories(v:boolean) {this.isOpenCategories=v}
    setIsOpenSettings(v:boolean) {this.isOpenSettings=v}

}

const appStore = new AppStore()
const StoreContext = createContext(appStore);

export const useAppStore = () => useContext(StoreContext);
export default appStore
