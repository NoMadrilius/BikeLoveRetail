import React from "react";
import Image from "next/image";
import { useCategoryStore } from "@/store/CategoryStore";

const CatalogHeader = () => {
  const store = useCategoryStore();

  return (
    <div className="py-2 px-5 bg-white flex border border-b-gray hidden sm:block">
      <div className="py-3 flex items-center gap-16">
        <div
          className="p-3 cursor-pointer"
          onClick={() => store.hideCatalogMain()}
        >
          <Image
            src={"/images/homepage/icons/right-arrow.svg"}
            alt={"Arrow"}
            width={10}
            height={10}
            className={`mx-auto sm:mr-10 transform transition-transform duration-300 -rotate-180`}
          />
        </div>
        <div className="flex gap-3">
          {!store.selectedCategory ? (
            <Image
              src={"/images/uikit/header/catalog.svg"}
              alt={"User Profile"}
              width={24}
              height={24}
            />
          ) : null}
          <span className="text-dark-text text-[20px] leading-[120%] font-bold">
            {store.selectedCategory || "Каталог"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CatalogHeader;
