import React from "react";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import CategoryName from "@/components/Pages/Catalog/CategoryName";
import CheckedProducts from "@/components/Pages/Catalog/CheckedProducts";
import { CatalogPageData } from "@/dataTransferObjects/response/catalogPage/CatalogPageData";
import BreadCrumbsUni from "@/components/BreadCrumbs/BreadCrumbsUni";
import CatalogPageProducts from "@/components/Screens/CatalogPage/CatalogPageProducts";
import { useAppStore } from "@/store/AppStore";
import { useCatalogStore } from "@/store/CatalogStore";
import CatalogPageSubcategories from "@/components/Screens/CatalogPage/CatalogPageSubcategories";
import { SortCategoryBreadCrumbs } from "@/helpers/SortCategoryBreadCrumbs";
import CatalogPageMobileFilter from "@/components/Screens/CatalogPage/CatalogPageMobileFilter";
import CatalogPageFilterBlock from "@/components/Screens/CatalogPage/CatalogPageFilterBlock";
import { observer } from "mobx-react";
import { nameCategoryMetaTemplate } from "@/helpers/metaTamplates/nameCategoryMetaTemplate";
import { descriptionCategoryMetaTemplate } from "@/helpers/metaTamplates/descriptionCategoryMetaTemplate";
import { useTranslation } from "next-i18next";

const CatalogPageUni = ({c}:{c:CatalogPageData}) => {
  const cs = useCatalogStore();
  const as = useAppStore();
  const { t } = useTranslation('catalog_page');

  let name = c.category.name

  if(c.filterSettings.length > 0){
    let opts = c.options.filter(n=>c.filterSettings.includes(n.id))
    opts.forEach(opt=>{
      name+=`, ${opt.optionName} - ${opt.name}`
    })
  }

  if(c.page > 1) name+= `, ${t("Сторінка")} ${c.page}`

  return (
    <div className="w-full items-start my-4 flex flex-col gap-4">
      <UseMetaData
        title={nameCategoryMetaTemplate(name)}
        description={descriptionCategoryMetaTemplate(name)}
      />

      <BreadCrumbsUni list={SortCategoryBreadCrumbs(c.categoryWay)} active={{name:c.category.name, url:c.category.url}} />

      <CategoryName
        title={name}
        quantity={c.totalProducts}
      />

      <CatalogPageSubcategories cats={c.childrens.filter(n=>n.parentId === c.category.id)}/>
      <section className="flex gap-5 w-full items-start sm:px-5 px-0">
        <aside className="max-w-[224px] w-full shrink-0 grow p-5 bg-white rounded-lg flex flex-col gap-5 md:hidden sm:hidden">
          <CatalogPageFilterBlock c={c}/>
        </aside>
        <div className={"flex flex-col gap-4"}>
          <CatalogPageProducts c={c}/>
          {c.seoLocalized && <div className={"text-black"} dangerouslySetInnerHTML={{ __html: c.seoLocalized }}></div>}

        </div>
      </section>
      <CheckedProducts products={as.saleProducts} />
      {cs.isOpenFiltersModal ? <CatalogPageMobileFilter c={c} /> : null}
    </div>
  );
};

export default observer(CatalogPageUni);