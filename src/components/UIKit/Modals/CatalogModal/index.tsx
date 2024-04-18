import { useEffect, useState } from "react";
import React from "react";
import CatalogHeader from "./CatalogHeader";
import CatalogMain from "./CatalogMain";
import CatalogMenu from "./CatalogMenu";
import { observer } from "mobx-react";
import { useAppStore } from "@/store/AppStore";

const CatalogModal = () => {
  const [isWindowWide, setIsWindowWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth > 743);
    };

    setIsWindowWide(window.innerWidth > 743);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const as = useAppStore();

  if (!as.isOpenCategories) return null;

  const handleCloseMenu = () => {
    console.log("close");
    as.setIsOpenCategories(false);
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
            <CatalogMenu isMobile={false} />
            <CatalogMain isMobile={false} />
          </>
        ) : as.selectedCategory === null?
              <CatalogMenu isMobile={true} />:
              <CatalogMain isMobile={true} />
        }


      </div>
    </div>
  );
};

export default observer(CatalogModal);
