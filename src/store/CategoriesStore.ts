import axios from "axios";
import { makeAutoObservable } from "mobx";
import { Category } from "@/types/types";
import { createContext, useContext } from "react";

class CategoriesStore {
  categories: Category[] = [];
  loading = false;
  parentCategories: any = [];
  cardsByCategory = [];
  count = 0;
  rootStore: any;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      this.categories = response.data;
      response.data.sort((a: any, b: any) => b.sortOrder - a.sortOrder);
      const parentCategories = response.data.filter(
        (item: any) => item.parentId === 0
      );

      this.parentCategories = [...parentCategories];
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  fetchProductCards = async (
    categoryId: number,
    storageId: number,
    page: number,
    pageSize: number,
    filtersVariantIds: number[],
    sortingSettings: string[]
  ) => {
    const request: any = {
      categoryId,
      storageId,
      page,
      pageSize,
      filtersVariantIds,
      sortingSettings,
    };

    try {
      this.loading = true;
      const response = await axios.post("/api/categories", request); // Изменение на ваш API endpoint для получения продуктов по категории
      this.cardsByCategory = response.data;
      this.loading = false;
      return response.data;
    } catch (error) {
      console.error("Error fetching product cards:", error);
      throw new Error(JSON.stringify(error));
    }
  };
}

const categoriesStore = new CategoriesStore();
const StoreContext = createContext(categoriesStore);

export const useCategoriesStore = () => useContext(StoreContext);
export default categoriesStore;
