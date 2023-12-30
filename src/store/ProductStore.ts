import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { apiUrls } from './apiUrls';
import { Category } from '@/types/types';
import { createContext, useContext } from 'react';

class ProductStore {
  product = {}
  options = {}
  description = ''
  images = []

  constructor() {
    makeAutoObservable(this);
  }

  fetchProduct = async (productId: number) => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      this.product = response.data.product;
      this.options = response.data.productOptions;
      this.description = response.data.productCard.description;
      this.images = response.data.productImages;
      console.log(response.data.productImages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

const productStore = new ProductStore();
const StoreContext = createContext(productStore);

export const useProductStore = () => useContext(StoreContext);
export { ProductStore };
