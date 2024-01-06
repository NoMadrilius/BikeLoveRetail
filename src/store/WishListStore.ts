
import { showToast } from '@/helpers/alertService/alertService';
import { IProduct } from '@/types/types';
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import authStore from './AuthStore';
import axios from 'axios';

class WishListStore {
    wishList: IProduct[] = [];
    authStore: any

  
    constructor(authStore: any) {
      makeAutoObservable(this);
      this.authStore = authStore;
      this.initializeWishList()
    }

    initializeWishList() {
      if (typeof window !== 'undefined') {
       authStore.getLoginUserResponse()
       console.log( authStore.getLoginUserResponse())
        if (authStore.loginUserResponse.user?.id) {
          this.initializeWishListFromServer(); 
        } else {
          this.initializeWishListFromLocalStorage(); 
        }
      }
    }

  
    initializeWishListFromLocalStorage() {
      if (typeof window !== 'undefined') {
        const savedWishList = localStorage.getItem('wishList');
        if (savedWishList) {
          this.wishList = JSON.parse(savedWishList);
        }
      }
    }
    initializeWishListFromServer = async() => {
      try {
        const response = await axios.get(`https://bikeshop.1gb.ua/api/public/getfav?ClientId=${this.authStore.loginUserResponse.user?.id}`);
    
        this.wishList = [];
        this.wishList = response.data.map((item: any) => ({...item.product, image: item.productImages[0]?.url || null }))
       
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    }

  
    saveWishListToLocalStorage() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishList', JSON.stringify(this.wishList));
      }
    }
    saveWishListToServer(product: any) {
      try {
        axios.post(`https://bikeshop.1gb.ua/api/public/addfav?ClientId=${this.authStore.loginUserResponse.user?.id}&ProductId=${product.id}`);
      } catch (error) {
        console.log('error saveProductToServer')
      }
   
    }
    removeWishListItemFromServer(productId: any) {
      try {
        axios.delete(`https://bikeshop.1gb.ua/api/public/delfav?ClientId=${this.authStore.loginUserResponse.user?.id}&ProductId=${productId}`);
      } catch (error) {
        console.log('error saveProductToServer')
      }
   
    }
  
  
  
    addToWishList(product: IProduct, image: any) {
      const existingProduct = this.wishList.find(item => item.id === product.id);
      if(authStore.loginUserResponse.user?.id){
      this.saveWishListToServer(product)
      }
  
      if (existingProduct) {
        showToast({
          info:`${existingProduct.name}`,title:"Товар уже в списке желаний",type:'warn'
        })
      } else {
        this.wishList.push({ ...product, quantity: 1, image: image });
        showToast({
          info:'Товар добавлен в список желаний',title:"Товар добавлен",type:'success'
        })
      }
      this.saveWishListToLocalStorage();
    }
    removeFromWishList(productId: number) {
      const index = this.wishList.findIndex(item => item.id === productId);
      if(authStore.loginUserResponse.user?.id){
        this.removeWishListItemFromServer(productId)
        }
      if (index !== -1) {
          this.wishList.splice(index, 1);
          showToast({
              info: 'Товар удален из списка желаний',
              title: 'Товар удален',
              type: 'success'
          });
          this.saveWishListToLocalStorage();
      } else {
          showToast({
              info: 'Товар не найден в списке желаний',
              title: 'Товар не найден',
              type: 'warn'
          });
      }
  }
  }

const wishListStore = new WishListStore(authStore);
const StoreContext = createContext(wishListStore);

export const useWishListStore = () => useContext(StoreContext);
export default wishListStore;
