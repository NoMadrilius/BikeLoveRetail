import ProductCategory from "@/components/Pages/Homepage/Aside/Sections/ProductCategory";
import React from "react";
import ProductCategoryMobile from "@/components/Pages/Homepage/Aside/Sections/ProductCategoryMobile";

const CatalogMenu = (p:{isMobile:boolean}) => {
  return (
    <section className="p-5 shadow-custom lg:max-w-[304px] xl:max-w-[304px] 2xl:max-w-[304px] shrink-0">
        {
            p.isMobile?<ProductCategoryMobile className="p-0" />:<ProductCategory className="p-0"/>
        }
    </section>
  );
};

export default CatalogMenu;
