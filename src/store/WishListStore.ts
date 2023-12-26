
import { showToast } from '@/helpers/alertService/alertService';
import { IProduct } from '@/types/types';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

class WishListStore {
    wishList: IProduct[] = [];
  
    constructor() {
      makeAutoObservable(this);
      this.initializeCartFromLocalStorage()
    }
  
    initializeCartFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const savedWishList = localStorage.getItem('wishList');
        if (savedWishList) {
          this.wishList = JSON.parse(savedWishList);
        }
      }
    }
  
    saveCartToLocalStorage() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishList', JSON.stringify(this.wishList));
      }
    }
  
  
  
    addToWishList(product: IProduct) {
      const existingProduct = this.wishList.find(item => item.id === product.id);
  
      if (existingProduct) {
        showToast({
          info:`${existingProduct.name}`,title:"Товар уже в списке желаний",type:'warn'
        })
      } else {
        this.wishList.push({ ...product, quantity: 1 });
        showToast({
          info:'Товар добавлен в список желаний',title:"Товар добавлен",type:'success'
        })
      }
      this.saveCartToLocalStorage();
    }
  }

const wishListStore = new WishListStore();
const StoreContext = createContext(wishListStore);

export const useWishListStore = () => useContext(StoreContext);
export default wishListStore;
