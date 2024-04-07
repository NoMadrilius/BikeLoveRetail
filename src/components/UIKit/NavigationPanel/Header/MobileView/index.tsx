import { useBurgerMenuStore } from "@/store/BurgerMenuStore";
import { useCategoryStore } from "@/store/CategoryStore";
import Image from "next/image";
import React from "react";
import LogoImage from "../LogoImage";
import UserProfile from "../MobileHeader/UserProfile";
import CloseIcon from "./CloseIcon";

const MobileView = () => {
  const store = useBurgerMenuStore();
  const categoryStore = useCategoryStore();

  return (
    <div className="w-full flex flex-col gap-5 px-5">
      <div className="flex justify-between w-full py-[7px]">
        <LogoImage classname="!mx-0" />
        <CloseIcon
          onClick={() => {
            categoryStore.hideModal();
            store.closeMenu();
          }}
        />
      </div>
      <UserProfile />
    </div>
  );
};

export default MobileView;
