import FilterModal from "@/components/Modal/FilterModal";
import BicyclePurposeTags from "@/components/Pages/Catalog/Aside/BicyclePurposeTags";
import CategoryAccordion from "@/components/Pages/Catalog/Aside/CategoryAccordion";
import SelectColor from "@/components/Pages/Catalog/Aside/SelectColor";
import SortByPrice from "@/components/Pages/Catalog/Aside/SortByPrice";
import CategoryName from "@/components/Pages/Catalog/CategoryName";
import CheckedProducts from "@/components/Pages/Catalog/CheckedProducts";
import MainContent from "@/components/Pages/Catalog/Main";
import FilterBlock from "@/components/Pages/Catalog/Main/FilterBlock";
import SubCategories from "@/components/Pages/Catalog/SubCategories";
import ContactAndSocial from "@/components/Pages/Homepage/Aside/Sections/ContactAndSocial";
import Footer from "@/components/Pages/Homepage/Aside/Sections/Footer";
import GetOurLatestNewsFirst from "@/components/Pages/Homepage/Aside/Sections/GetOurLatestNewsFirst";
import InfoAboutCompany from "@/components/Pages/Homepage/Aside/Sections/InfoAboutCompany";
import ProductCard from "@/components/UIKit/Cards/ProductCard";
import Pagination from "@/components/UIKit/Pagination";
import { PlusIcon } from "@/components/UIKit/SVGIcons";
import { useAppStore } from "@/store/AppStore";
import React, { useEffect } from "react";

const checkboxes = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
  { label: "Option 4" },
  { label: "Option 5" },
  { label: "Option 6" },
  { label: "Option 7" },
  { label: "Option 8" },
  { label: "Option 9" },
  { label: "Option 10" },
];

const Catalog = () => {
  const as = useAppStore();

  useEffect(() => {
    as.loadSaleProducts();
    as.loadTopProducts();
  }, []);
  1;
  return (
    <div className="max-w-[1324px] w-full m-auto items-start my-10 flex flex-col gap-10">
      <CategoryName title={"Назва категорії"} quantity={103} />
      <SubCategories />
      <section className="flex gap-5 w-full items-start sm:px-5 md:px-5">
        <aside className="max-w-[224px] w-full shrink-0 grow p-5 bg-white rounded-lg flex flex-col gap-5 md:hidden sm:hidden">
          <BicyclePurposeTags />
          <SelectColor />
          <CategoryAccordion title="Категорія" checkboxes={checkboxes} />
          <CategoryAccordion title="Категорія" checkboxes={checkboxes} />
          <CategoryAccordion title="Категорія" checkboxes={checkboxes} />
          <CategoryAccordion title="Категорія" checkboxes={checkboxes} />
          <SortByPrice />
        </aside>
        <MainContent products={as.saleProducts} />
      </section>
      <CheckedProducts products={as.saleProducts} />
      {false ? <FilterModal /> : null}
    </div>
  );
};

export default Catalog;
