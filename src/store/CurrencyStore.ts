import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import axiosInstance from "@/api/axiosInstance";
import {Currency} from "@/dataTransferObjects/entities/Currency";
import {makePersistable} from "mobx-persist-store";
import {CurrenciesAPI} from "@/api/CurrenciesAPI";
import {AppState} from "@/dataTransferObjects/internal/AppState";

class CurrencyStore {
  currencies : Currency[] = [];
  selectedCurrency: Currency|null = null;
  useCurrency:(v:number)=>string = ()=>{return '0 UHA'}

  constructor() {
    makeAutoObservable(this);
    if(typeof window !== "undefined"){
      makePersistable(this, {
        name: "curStore",
        properties: ["currencies", "selectedCurrency", "useCurrency"],
        storage:window.localStorage
      }).finally(()=>{
        this.initialize()
      });

    }
  }

  setServerData(d:AppState){
    this.currencies = d.currencies
    this.initialize()
  }

  async loadCurrencies(){
    await CurrenciesAPI.GetPublic().then(r => {
      this.currencies = r.data
    })
  }

 async initialize() {
    if(this.currencies.length > 0){
      if(this.selectedCurrency === null){
        this.setCurrency(2)
      }else{
        this.useCurrency = (v)=>{return (v*this.selectedCurrency!.coefficient).toFixed(2).toString()+this.selectedCurrency!.symbol}
      }
    }
 }

 setCurrency(currencyId:number){
    let cur = this.currencies.find(n=>n.id === currencyId)
   if(cur){
     this.selectedCurrency = cur
     this.useCurrency = (v)=>{return (v*cur!.coefficient).toFixed(2).toString()+cur!.symbol}
   }
 }


}

const currencyStore = new CurrencyStore();
const StoreContext = createContext(currencyStore);

export const useCurrencyStore = () => useContext(StoreContext);
export { CurrencyStore };
