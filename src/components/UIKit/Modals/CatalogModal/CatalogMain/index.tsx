import React from "react";
import CategoryBlock from "../CatalogMenu/CategoryBlock";

const CatalogMain = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-[22px] py-5 grow sm:px-5">
      <CategoryBlock />
      <CategoryBlock />
      <CategoryBlock />
      <CategoryBlock />
      <CategoryBlock />
      <CategoryBlock />
    </section>
  );
};

export default CatalogMain;
