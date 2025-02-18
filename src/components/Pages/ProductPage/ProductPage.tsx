"use client";

import React, {Suspense } from "react";
import ProductCard from "@/components/Pages/ProductPage/ProductCard";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { nameProductMetaTemplate } from "@/helpers/metaTamplates/nameProductMetaTemplate";
import { descriptionProductMetaTemplate } from "@/helpers/metaTamplates/descriptionProductMetaTemplate";
import noImage from "/public/images/no-image.svg";
import { observer } from "mobx-react";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";

const Skeleton = ()=>{
  console.log("skeleton")
  return(<div className={"text-black bg-white"}>Kwa kwa</div>)
}

const ProductPage = ({product}:{product:ProductFullData}) => {

  return (
    <Suspense fallback={<Skeleton/>}>
      <div
        className="scroll-smooth max-w-[1324px] w-full h-full m-auto items-start pt-5 pb-10 flex flex-col gap-10 md2:pr-8">
        <div className="flex flex-col gap-10 md:gap-6 w-full h-full">
          <UseMetaData
            title={nameProductMetaTemplate(product.product.name)}
            img={product.productImages[0].url}
            description={descriptionProductMetaTemplate(product.product.name)}
          />
          <ProductCard p={product} />
        </div>
        <div className="w-full flex flex-col gap-10 md:px-1 sm:px-5">
          {/*
        <ProductHeader />


        <CustomSlider
          products={as.topProducts}
          title={"Також Вас можуть зацікавити"}
          rightText={"Більше пропозицій"}
          hideText={true}
          className="max-w-full"
        />
        <CustomSlider
          products={as.saleProducts}
          title={"З цим купують"}
          rightText={"Більше пропозицій"}
          hideText={true}
          className="max-w-full"
        />
        <CustomSlider
          products={as.saleProducts}
          title={"Реклама"}
          rightText={"Більше пропозицій"}
          hideText={true}
          className="max-w-full"
        />
        <CustomSlider
          products={as.saleProducts}
          title={"Переглянуті товари"}
          rightText={"Більше пропозицій"}
          hideText={true}
          className="max-w-full"
        />
        */}

        </div>
      </div>
    </Suspense>

  );
};

export default observer(ProductPage);
