import { useEffect, useState } from "react";
import React from "react";
import CatalogHeader from "./CatalogHeader";
import CatalogMain from "./CatalogMain";
import CatalogMenu from "./CatalogMenu";
import { observer } from "mobx-react";
import { useAppStore } from "@/store/AppStore";
import ModalBase from "@/components/Modal/ModalBase/ModalBase";

const CatalogModal = () => {
  const [isWindowWide, setIsWindowWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth > 1279);
    };

    setIsWindowWide(window.innerWidth > 1279);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const as = useAppStore();

  return (
      <ModalBase open={as.isOpenCategories} setOpen={(v)=>{as.setIsOpenCategories(v)}}>
        <div
            className={`z-50 bg-white xl:gap-[22px] 2xl:gap-[22px] lg:gap-[22px] flex-col 
        md:flex-col xl:flex-row lg:flex-row 2xl:flex-row 
        sm:rounded-none md:rounded-none rounded-lg shadow-lg lg:absolute
        top-6 sm:top-[88px] md:top-[88px] md:absolute md:left-0 sm:shadow-none md:shadow-none
        left-1/2 lg:transform lg:-translate-x-1/2 flex w-full max-w-[1280px] ${
                as.selectedCategory === null
                    ? "sm:h-[calc(100vh-140px)] md:h-[calc(100vh-87px)] h-full"
                    : "h-auto"
            }`}
        >
          <CatalogHeader />
          {isWindowWide ? (
              <>
                <CatalogMenu isMobile={false} />
                <CatalogMain isMobile={false} />
              </>
          ) : as.selectedCategory === null ? (
              <CatalogMenu isMobile={true} />
          ) : (
              <CatalogMain isMobile={true} />
          )}
        </div>
      </ModalBase>
  );
};

export default observer(CatalogModal);
