
import { showToast } from '@/helpers/alertService/alertService';
import { IProduct } from '@/types/types';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

class CartStore {
    cart: IProduct[] = [];
  
    constructor() {
      makeAutoObservable(this);
      this.initializeCartFromLocalStorage()
    }
  
    initializeCartFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          this.cart = JSON.parse(savedCart);
        }
      }
    }
  
    saveCartToLocalStorage() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    }
  
  
  
    addToCart(product: IProduct) {
      const existingProduct = this.cart.find(item => item.id === product.id);
  
      if (existingProduct) {
        showToast({
          info:`${existingProduct.name}`,title:"Товар уже в корзине",type:'warn'
        })
      } else {
        this.cart.push({ ...product, quantity: 1 });
        showToast({
          info:'',title:"Товар добавлен",type:'success'
        })
      }
      this.saveCartToLocalStorage();
    }
    updateProductQuantity(productId: number, newQuantity: number) {
        const productToUpdate = this.cart.find(item => item.id === productId);
    
        if (productToUpdate) {
          productToUpdate.quantity = newQuantity;
          this.saveCartToLocalStorage();
        }
      }
  }

const cartStore = new CartStore();
const StoreContext = createContext(cartStore);

export const useCartStore = () => useContext(StoreContext);
export default cartStore;
