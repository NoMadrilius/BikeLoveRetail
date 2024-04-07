import { makeObservable, observable, action } from "mobx";
import { createContext, useContext } from "react";

interface CategoryState {
  selectedCategory: string;
  showCatalogMain: boolean;
  isModalOpen: boolean;
}

interface CategoryActions {
  toggleCatalogMain: (category: string) => void;
  hideCatalogMain: () => void;
  toggleModal: () => void;
  hideModal: () => void;
}

export class CategoryStore {
  selectedCategory: string = "";
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

  toggleCatalogMain(category: string) {
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
