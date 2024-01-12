import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { apiUrls } from './apiUrls';
import { createContext, useContext } from 'react';

class CurrencyStore {
  currency = [];
  selectedCurrency: string = 'UAH'

  constructor() {
    makeAutoObservable(this);
    this.loadCurrencyFromLocalStorage();
    this.loadSelectedCurrencyFromLocalStorage()
  }

  getCurrency = async () => {
if(typeof window !== 'undefined'){
    try {
        const storedCurrency = localStorage.getItem('currency');
        if (storedCurrency) {
          this.currency = JSON.parse(storedCurrency);
        } else {
          const response = await axios.get('/api/currency');
          this.currency = response.data;
  
          localStorage.setItem('currency', JSON.stringify(this.currency));
        }
      } catch (error) {
        console.log('Error fetching currency:', error);
      }
}
    
  };

  loadCurrencyFromLocalStorage() {
    if(typeof window !== 'undefined'){
        const storedCurrency = localStorage.getItem('currency');
        if (storedCurrency) {
          this.currency = JSON.parse(storedCurrency);
        }
    }
    
  }

  selectCurrensy (currency?: string){
    if(currency){
      this.selectedCurrency = currency
    }

    if(typeof window !== 'undefined'){
        localStorage.setItem('selectedCurrency', JSON.stringify(currency || 'UAH'))
    }
  }
  loadSelectedCurrencyFromLocalStorage() {
    if(typeof window !== 'undefined'){
       const localCurrency = localStorage.getItem('selectedCurrency')
       if(localCurrency){
        this.selectedCurrency = JSON.parse(localCurrency)
       }
    }
  }
}

const currencyStore = new CurrencyStore();
const StoreContext = createContext(currencyStore);

export const useCurrencyStore = () => useContext(StoreContext);
export { CurrencyStore };
