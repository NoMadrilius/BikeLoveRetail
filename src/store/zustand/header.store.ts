import { create } from "zustand";

interface BurgerMenuState {
  isOpen: boolean;
  isAuthOpen: boolean;
  loginOrRegistration: "login" | "registration";
}

interface BurgerMenuActions {
  saveAuthType: (type: "login" | "registration") => void;
  openMenu: () => void;
  closeMenu: () => void;
  togleAuthMenu: () => void;
}

const useBurgerMenuStore = create<BurgerMenuState & BurgerMenuActions>(
  (set) => ({
    isOpen: false,
    isAuthOpen: false,
    loginOrRegistration: "login",

    saveAuthType: (type) =>
      set({ isAuthOpen: true, loginOrRegistration: type }),

    togleAuthMenu: () => set({ isAuthOpen: false }),

    openMenu: () => set({ isOpen: true }),

    closeMenu: () => set({ isOpen: false }),
  })
);

export default useBurgerMenuStore;
