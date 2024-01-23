
import { showToast } from '@/helpers/alertService/alertService';
import { IProduct } from '@/types/types';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import authStore from './AuthStore';
import axios from 'axios';
import axiosInstance from '@/api/axiosInstance';

class CartStore {
    cart: IProduct[] = [];
    authStore: any

    constructor(authStore: any) {
      makeAutoObservable(this);
      this.authStore = authStore;
      this.initializeCart()
    }

    initializeCart() {
      if (typeof window !== 'undefined') {
       authStore.getLoginUserResponse()
        if (authStore.loginUserResponse.user?.id) {
          this.initializeCartFromServer(); 
      
        } else {
          this.initializeCartFromLocalStorage(); 
      
        }
      }
    }
  
    initializeCartFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
      
          this.cart = JSON.parse(savedCart);
        }
      }
    }
    
    initializeCartFromServer = async() => {
      try {
    
        const response = await axiosInstance.get(`/public/getcart?ClientId=${this.authStore.loginUserResponse.user?.id}`);
        this.cart = [];
       this.cart = response.data.map((item:any) => ({...item.product.product, quantity: item.quantity, image: item.product.productImages[0]?.url || null}))
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    }

    getLoginUserResponseFromAuthStore() {
      return this.authStore.getLoginUserResponse();
  }

    saveCartToLocalStorage() {
      if (typeof window !== 'undefined') {
    
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    }
    saveProductToServer(product: IProduct){
      try {
        axiosInstance.post(`/public/addcart?ClientId=${this.authStore.loginUserResponse.user?.id}&ProductId=${product.id}&Quantity=1`);
      } catch (error) {
        console.log('error saveProductToServer')
      }
   
    }
  
    addToCart(product: IProduct, image: any) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      if(authStore.loginUserResponse.user?.id){
      this.saveProductToServer(product)
      }
  
      if (existingProduct) {
        showToast({
          info:`${existingProduct.name}`,title:"Товар уже в корзине",type:'warn'
        })
      } else {
        this.cart.push({ ...product, quantity: 1, image: image });
        showToast({
          info:product.name,title:"Товар добавлен",type:'success'
        })
      }
      this.saveCartToLocalStorage();
    }

    updateProductQuantity(productId: number, newQuantity: number) {
        const productToUpdate = this.cart.find(item => item.id === productId);
        if(authStore.loginUserResponse?.user?.id){
      
          try {
            axiosInstance.post(`/public/addcart?ClientId=${this.authStore.loginUserResponse.user?.id}&ProductId=${productToUpdate?.id}&Quantity=${newQuantity}`);
          } catch (error) {
            console.log('error saveProductToServer')
          }
        }
    
        if (productToUpdate) {
          productToUpdate.quantity = newQuantity;
          if(authStore.loginUserResponse?.user?.id){
        
          }else{
        
            this.saveCartToLocalStorage();
          }
          
        }
      }

      removeFromCart(productId: number) {
        const index = this.cart.findIndex(item => item.id === productId);

        if (index !== -1) {
            this.cart.splice(index, 1);
            showToast({
                info: 'Товар удален из корзины',
                title: 'Товар удален',
                type: 'success'
            });
            this.saveCartToLocalStorage();
        } else {
            showToast({
                info: 'Товар не найден в корзине',
                title: 'Товар не найден',
                type: 'warn'
            });
        }
    }
    removeAllFromCart = () => {
      const updatedCart = this.cart.map((el) => {
        const newQuantity = el.quantity + 1;
        const newId = el.id;
        return { id: newId, quantity: newQuantity };
      });
      try {
        updatedCart.forEach((product) => {
          
          axiosInstance.post(`/public/addcart?ClientId=${this.authStore.loginUserResponse.user?.id}&ProductId=${product.id}&Quantity=${0}`);
        });
      } catch (error) {
        console.log('error saveProductToServer', error);
      }
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
    }
    
  }

const cartStore = new CartStore(authStore);
const StoreContext = createContext(cartStore);

export const useCartStore = () => useContext(StoreContext);
export default cartStore;
