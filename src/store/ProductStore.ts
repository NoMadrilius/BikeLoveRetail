import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { apiUrls } from './apiUrls';
import { Category } from '@/types/types';
import { createContext, useContext } from 'react';

class ProductStore {
  product = {}

  constructor() {
    makeAutoObservable(this);
  }

  fetchProduct = async (productId: number) => {
    try {
        const response = await axios.get(apiUrls.product, {
            params: {
                productId
            }
        });
        this.product = response.data.product
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
}

const productStore = new ProductStore();
const StoreContext = createContext(productStore);

export const useProductStore = () => useContext(StoreContext);
export default productStore;
