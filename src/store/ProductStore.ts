import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { apiUrls } from './apiUrls';
import { Category } from '@/types/types';
import { createContext, useContext } from 'react';
import { showToast } from '@/helpers/alertService/alertService';
import axiosInstance from '@/api/axiosInstance';
import Router from 'next/router';
import cartStore from './CartStore';

class ProductStore {
  product = {}
  loadingSendOrder: boolean = false
  order:[] = []

  
  constructor() {
    makeAutoObservable(this);
  }

  fetchProduct = async (productId: number) => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      this.product = response.data.product;
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  sendOrder = async(request: any) => {

    this.loadingSendOrder = true
    let token
        if(typeof localStorage !== 'undefined'){
            const auth = localStorage.getItem('AuthStore')
            const authToken = JSON.parse(auth!) || ''
            token = authToken.accessToken

        }
    try {
      const response = await axios.post('/api/sendOrder',{request,token})
      console.log(response)
      this.loadingSendOrder = false
      Router.push('/gratitude')
      cartStore.removeAllFromCart()
    } catch (error) {
      this.loadingSendOrder = false
      showToast({info:'asd',title:'asdas',type:'error'})
      console.log(error)
    }
  }

  getOrder = async () => {
    let token
        if(typeof localStorage !== 'undefined'){
            const auth = localStorage.getItem('AuthStore')
            const authToken = JSON.parse(auth!) || ''
            token = authToken.accessToken

        }
    try {
      console.log(token)
const response = await axios.get('/api/getOrder', {
  params: {
    token: token,
  },
})
this.order = response.data
console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }
}

const productStore = new ProductStore();
const StoreContext = createContext(productStore);

export const useProductStore = () => useContext(StoreContext);
export { ProductStore };
