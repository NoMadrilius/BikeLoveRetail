import { makeObservable, observable, action } from "mobx";
import { createContext, useContext } from "react";

interface BurgerMenuState {
  isOpen: boolean;
  isAuthOpen: boolean;
  loginOrRegistration: "login" | "registration";
}

interface BurgerMenuActions {
  saveAuthType: (type: "login" | "registration") => void;
  openMenu: () => void;
  closeMenu: () => void;
  toggleAuthMenu: () => void;
}

export class BurgerMenuStore implements BurgerMenuState, BurgerMenuActions {
  isOpen = false;
  isAuthOpen = false;
  loginOrRegistration: "login" | "registration" = "login";

  constructor() {
    makeObservable(this, {
      isOpen: observable,
      isAuthOpen: observable,
      loginOrRegistration: observable,
      saveAuthType: action,
      openMenu: action,
      closeMenu: action,
      toggleAuthMenu: action,
    });
  }

  saveAuthType(type: "login" | "registration") {
    this.isAuthOpen = true;
    this.loginOrRegistration = type;
  }

  toggleAuthMenu() {
    this.isAuthOpen = !this.isAuthOpen;
  }

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false;
  }
}

const burgerMenuStore = new BurgerMenuStore();

const StoreContext = createContext<BurgerMenuStore>(burgerMenuStore);

export const useBurgerMenuStore = () => useContext(StoreContext);

export default burgerMenuStore;
