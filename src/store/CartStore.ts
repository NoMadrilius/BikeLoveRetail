import { IProduct } from '@/types/types';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';

class CartStore {
    cart: IProduct[] = [];
  
    constructor() {
      makeAutoObservable(this);
    }
  
    addToCart(product: IProduct) {
      const existingProduct = this.cart.find(item => item.id === product.id);
  
      if (existingProduct) {
        // Если продукт уже есть в корзине, увеличиваем его количество
        existingProduct.quantity += 1;
      } else {
        // Если продукта еще нет в корзине, добавляем его
        this.cart.push({ ...product, quantity: 1 });
      }
    }
    updateProductQuantity(productId: number, newQuantity: number) {
        const productToUpdate = this.cart.find(item => item.id === productId);
    
        if (productToUpdate) {
          productToUpdate.quantity = newQuantity;
        }
      }
  }
  
const cartStore = new CartStore();
const StoreContext = createContext(cartStore);

export const useCartStore = () => useContext(StoreContext);
export default cartStore;
