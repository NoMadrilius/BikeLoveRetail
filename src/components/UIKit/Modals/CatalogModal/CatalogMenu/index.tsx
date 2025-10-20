import ProductCategory from "@/components/Pages/Homepage/Aside/Sections/ProductCategory";
import React from "react";
import ProductCategoryMobile from "@/components/Pages/Homepage/Aside/Sections/ProductCategoryMobile";

const CatalogMenu = (p: { isMobile: boolean }) => {
  return (
    <section className="p-5 sm:shadow-none md:shadow-none w-2/5 mob:w-full">
      {p.isMobile ? (<ProductCategoryMobile className="p-0" />)
          : (
        <ProductCategory className="p-0" />
      )}
    </section>
  );
};

export default CatalogMenu;
