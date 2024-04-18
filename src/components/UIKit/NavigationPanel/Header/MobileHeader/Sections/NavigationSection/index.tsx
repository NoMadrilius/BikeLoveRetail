import { useBurgerMenuStore } from "@/store/BurgerMenuStore";
import Image from "next/image";
import React from "react";
import {useAppStore} from "@/store/AppStore";

const NavigationSection = () => {
  const as = useAppStore()
  const menuStore = useBurgerMenuStore();

  return (
    <section>
      <div
        className="flex items-center gap-3 px-5 py-3"
        onClick={() => {
          menuStore.closeMenu();
          as.setIsOpenCategories(true)
        }}
      >
        <div className="shrink-0 relative w-[48px] h-[48px] bg-[#F2F2F2] flex items-center justify-center rounded-full">
          <Image
            src={"/images/uikit/header/catalog.svg"}
            alt={"User Profile"}
            width={24}
            height={24}
          />
        </div>
        <button className="text-dark border-none leading-[19px]">
          Каталог товарів
        </button>
      </div>
      <div className="flex flex-col border border-y-category-border">
        <div className="flex items-center gap-3 px-5 py-3">
          <div className="shrink-0 relative w-[48px] h-[48px] bg-[#F2F2F2] flex items-center justify-center rounded-full">
            <Image
              src={"/images/uikit/header/black-heart.svg"}
              alt={"User Profile"}
              width={24}
              height={24}
            />
          </div>
          <button className="text-dark border-none leading-[19px]">
            Кошик
          </button>
        </div>
        <div className="flex items-center gap-3 px-5 py-3">
          <div className="shrink-0 relative w-[48px] h-[48px] bg-[#F2F2F2] flex items-center justify-center rounded-full">
            <Image
              src={"/images/uikit/header/black-heart.svg"}
              alt={"User Profile"}
              width={24}
              height={24}
            />
          </div>
          <button className="text-dark border-none leading-[19px]">
            Улюблене
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;
