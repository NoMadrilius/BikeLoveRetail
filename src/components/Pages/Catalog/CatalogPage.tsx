import React, { useEffect } from "react";
import CategoryName from "@/components/Pages/Catalog/CategoryName";
import SubCategories from "@/components/Pages/Catalog/SubCategories";
import BicyclePurposeTags from "@/components/Pages/Catalog/Aside/BicyclePurposeTags";
import SelectColor from "@/components/Pages/Catalog/Aside/SelectColor";
import CategoryAccordion from "@/components/Pages/Catalog/Aside/CategoryAccordion";
import SortByPrice from "@/components/Pages/Catalog/Aside/SortByPrice";
import MainContent from "@/components/Pages/Catalog/Main";
import CheckedProducts from "@/components/Pages/Catalog/CheckedProducts";
import FilterModal from "@/components/Modal/FilterModal";
import { useAppStore } from "@/store/AppStore";
import { useCatalogStore } from "@/store/CatalogStore";
import { observer } from "mobx-react";
import { nameCategoryMetaTemplate } from "@/helpers/metaTamplates/nameCategoryMetaTemplate";
import { descriptionCategoryMetaTemplate } from "@/helpers/metaTamplates/descriptionCategoryMetaTemplate";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

const CatalogPage = () => {
  const as = useAppStore();
  const cs = useCatalogStore();

  console.log("catalog", cs.catalogState?.childrens);

  if (cs.catalogState === null) return null;

  const uniqueOptions = cs.catalogState!.options.reduce(
    (accumulator: { id: number; name: string }[], i) => {
      let ent = accumulator.find((n) => n.id === i.optionId);
      if (ent === undefined) {
        accumulator.push({ id: i.optionId, name: i.optionName });
      }
      return accumulator;
    },
    []
  );

  let page =
    cs.catalogState!.page != 1
      ? ` - Сторінка ${cs.catalogState!.page.toString()}`
      : "";

  let title =
    (cs.catalogState!.category?.metaTitle ||
      nameCategoryMetaTemplate(cs.catalogState!.category!.name)) + page;
  let desc =
    (cs.catalogState!.category?.metaDescription ||
      descriptionCategoryMetaTemplate(cs.catalogState!.category!.name)) + page;

  return (
    <div className="max-w-[1324px] w-full m-auto items-start my-10 flex flex-col gap-10">
      <UseMetaData
        title={title}
        img={cs.catalogState!.category?.iconUrl}
        description={desc}
      />

      {cs.catalogState!.category && (
        <BreadCrumbs categoryId={cs.catalogState!.category.id} />
      )}

      <CategoryName
        title={cs.catalogState?.category?.name ?? "no data"}
        quantity={cs.catalogState?.totalProducts ?? 666}
      />
      <SubCategories />
      <section className="flex gap-5 w-full items-start sm:px-5 px-0">
        <aside className="max-w-[224px] w-full shrink-0 grow p-5 bg-white rounded-lg flex flex-col gap-5 md:hidden sm:hidden">
          {uniqueOptions.map((opt) => {
            let variants = cs.catalogState!.options.filter(
              (n) => n.optionId === opt.id
            );
            return (
              <CategoryAccordion
                key={opt.id}
                title={opt.name}
                checkboxes={variants}
              />
            );
          })}
          <BicyclePurposeTags />
          <SelectColor />

          <SortByPrice />
        </aside>
        <MainContent products={cs.catalogState?.products ?? []} />
      </section>
      <CheckedProducts products={as.saleProducts} />
      {cs.isOpenFiltersModal ? <FilterModal /> : null}
    </div>
  );
};

export default observer(CatalogPage);
