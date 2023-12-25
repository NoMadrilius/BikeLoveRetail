import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { apiUrls } from './apiUrls';
import { Category } from '@/types/types';
import { createContext, useContext } from 'react';

class CategoriesStore {
  categories: Category[] = []
  loading = false
  parentCategories: any = []
  cardsByCategory = []
  count = 0;
  rootStore: any;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async() => {
    try {
      const response = await axios.get(apiUrls.category);
      this.categories = response.data
 
      const parentCategories = response.data.filter((item: any) => item.parentId === 0)
      

      
      this.parentCategories = [...parentCategories]
  } catch (error) {
      console.error('Error fetching data:', error);
  }
  }
  fetchProductCards = async(categoryId: number, storageId: number, page: number, pageSize: number, filtersVariantIds: number[], sortingSettings: string[]) => {
    const request: any = {
      categoryId,
      storageId,
      page,
      pageSize,
      filtersVariantIds,
      sortingSettings
  }
  try {
    this.loading = true
    const response = await axios.post(apiUrls.productCardByCategory, request)
    console.log(response)
    this.cardsByCategory = response.data.products
    this.loading = false
    return response.data
} catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(JSON.stringify(error))
}
  }
}

const categoriesStore = new CategoriesStore();
const StoreContext = createContext(categoriesStore);

export const useCategoriesStore = () => useContext(StoreContext);
export default categoriesStore;
