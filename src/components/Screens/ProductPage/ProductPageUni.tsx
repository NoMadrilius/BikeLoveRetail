import React, { Suspense } from "react";
import { ProductPageData } from "@/dataTransferObjects/response/productPage/ProductPageData";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { nameProductMetaTemplate } from "@/helpers/metaTamplates/nameProductMetaTemplate";
import { descriptionProductMetaTemplate } from "@/helpers/metaTamplates/descriptionProductMetaTemplate";
import ProductCard from "@/components/Pages/ProductPage/ProductCard";
import Skeleton from "react-loading-skeleton";
import ProductImage from "@/components/Pages/ProductPage/ProductCard/ProductImage";
import ProductInfo from "@/components/Pages/ProductPage/ProductCard/ProductInfo";
import ProductPageGallery from "@/components/Screens/ProductPage/ProductPageGallery";
import PublicPageInfo from "@/components/Screens/ProductPage/PublicPageInfo";
import BreadCrumbsUni from "@/components/BreadCrumbs/BreadCrumbsUni";
import { SortCategoryBreadCrumbs } from "@/helpers/SortCategoryBreadCrumbs";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { router } from "next/client";

const ProductPageUni = ({p}:{p:ProductPageData}) => {

  const r = useRouter()
  return (
    <Suspense fallback={<Skeleton/>}>
      <div
        className="scroll-smooth max-w-[1324px] w-full h-full m-auto items-start pt-2 pb-10 flex flex-col gap-10 md2:pr-8">
        <div className="flex flex-col gap-2 desc:gap-10 w-full h-full">
          <UseMetaData
            title={nameProductMetaTemplate(p.product.name)}
            img={p.images[0]?.url}
            description={descriptionProductMetaTemplate(p.product.name)}
          />
          <BreadCrumbsUni list={SortCategoryBreadCrumbs(p.categoryWay)} active={{ name: p.product.name, url: r.asPath }} />
          <h1
            className="desc:hidden text-dark leading-[37.5px] text-[32px] font-robot-c font-medium xl:text-[40px] xl:leading-[46.88px] 2xl:text-[40px] 2xl:leading-[46.88px]">
            {p.product.name}
          </h1>
          <div className="px-1 w-full h-full flex flex-col desc:flex-row desc:gap-6 desc:items-start ">
            <ProductPageGallery p={p} />
            <PublicPageInfo p={p} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default observer(ProductPageUni);