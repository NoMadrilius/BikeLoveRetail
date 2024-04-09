import { makeObservable, observable, action } from "mobx";
import { createContext, useContext } from "react";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";

export class CategoryStore {
  selectedCategory: ProductCategory|null = null;
  showCatalogMain: boolean = false;
  isModalOpen: boolean = false;

  constructor() {
    makeObservable(this, {
      selectedCategory: observable,
      showCatalogMain: observable,
      isModalOpen: observable,
      toggleCatalogMain: action,
      hideCatalogMain: action,
      toggleModal: action,
      hideModal: action,
    });
  }

  toggleCatalogMain(category: ProductCategory) {
    this.selectedCategory = category;
    this.showCatalogMain = true;
  }

  hideCatalogMain() {
    this.showCatalogMain = false;
  }

  toggleModal() {
    this.isModalOpen = true;
  }
  hideModal() {
    this.isModalOpen = false;
  }
}

const categoryStore = new CategoryStore();

const StoreContext = createContext<CategoryStore>(categoryStore);

export const useCategoryStore = () => useContext(StoreContext);

export default categoryStore;
