import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import CatalogHeader from "./CatalogHeader";
import CatalogMain from "./CatalogMain";
import CatalogMenu from "./CatalogMenu";
import { useCategoryStore } from "@/store/CategoryStore";
import { observer } from "mobx-react";
import { useBurgerMenuStore } from "@/store/BurgerMenuStore";

interface CatalogModalProps {
  isOpen: boolean;
}

const CatalogModal = ({ isOpen }: CatalogModalProps) => {
  const [isWindowWide, setIsWindowWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth > 1280);
    };

    setIsWindowWide(window.innerWidth > 1280);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const categoryStore = useCategoryStore();
  if (!isOpen) return null;

  const handleCloseMenu = () => {
    categoryStore.hideModal();
  };

  return (
    <div className="lg:fixed lg:inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50 sm:hidden"
        onClick={handleCloseMenu}
      ></div>
      <div
        className={`z-50 bg-white xl:gap-[22px] 2xl:gap-[22px] lg:gap-[22px] flex-col 
        md:flex-row xl:flex-row lg:flex-row 2xl:flex-row 
        sm:rounded-none rounded-lg shadow-lg lg:absolute
        top-32 sm:top-[88px]
        left-1/2 lg:transform lg:-translate-x-1/2 flex w-full max-w-[1280px]`}
      >
        <CatalogHeader />
        {isWindowWide ? (
          <>
            <CatalogMenu />
            <CatalogMain />
          </>
        ) : !categoryStore.showCatalogMain ? (
          <CatalogMenu />
        ) : (
          <CatalogMain />
        )}
      </div>
    </div>
  );
};

export default observer(CatalogModal);
