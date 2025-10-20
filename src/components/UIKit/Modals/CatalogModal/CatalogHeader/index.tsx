import React from "react";
import Image from "next/image";
import { useAppStore } from "@/store/AppStore";

const CatalogHeader = () => {
  const as = useAppStore();

  return (
    <div className="py-2 px-5 bg-white border border-b-gray tab:hidden desc:hidden flex w-full">
      <div className="py-3 flex items-center gap-16 sm:gap-0 md:gap-0 w-full">
        <div
          className="p-3 cursor-pointer hover:bg-[#C1C1C133] rounded-lg py-2"
          onClick={() => {
            if (as.selectedCategory === null) {
              as.setIsOpenCategories(false);
              document.body.style.overflow = "auto";
            } else {
              as.setSelectedCategory(null);
            }
          }}
        >
          <Image
            src={"/images/homepage/icons/right-arrow.svg"}
            alt={"Arrow"}
            width={10}
            height={10}
            className={`mx-auto md:mr-0 sm:mr-0 transform transition-transform duration-300 -rotate-180 `}
          />
        </div>
        <div className="flex gap-3  sm:m-auto md:m-auto">
          {!as.selectedCategory ? (
            <Image
              src={"/images/uikit/header/catalog.svg"}
              alt={"User Profile"}
              width={24}
              height={24}
            />
          ) :
              <Image
                  src={as.selectedCategory.image || "/images/homepage/static/bike.jpg"}
                  alt={"Bike"}
                  width={24}
                  height={24}
                  className="shrink-0"
              />
          }
          <span className="text-dark-text text-[20px] leading-[120%] font-bold">
            {as.selectedCategory?.name || "Каталог"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CatalogHeader;
