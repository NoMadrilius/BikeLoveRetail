import React, { useEffect } from "react";
import { useAppStore } from "@/store/AppStore";
import ProductHeader from "@/components/Pages/ProductPage/ProductHeader";
import ProductCard from "@/components/Pages/ProductPage/ProductCard";
import CustomSlider from "@/components/Pages/Homepage/MainContent/CustomSlider";
import { useProductPageStore } from "@/store/ProductPageStore";
import {UseMetaData} from "@/helpers/hooks/useMetaData";
import {nameProductMetaTemplate} from "@/helpers/metaTamplates/nameProductMetaTemplate";
import {descriptionProductMetaTemplate} from "@/helpers/metaTamplates/descriptionProductMetaTemplate";

const ProductPage = () => {
  const as = useAppStore();
  const ps = useProductPageStore();

  if (ps.product === null) return null;

  return (
    <div className="scroll-smooth max-w-[1324px] w-full h-full m-auto items-start pt-5 pb-10 flex flex-col gap-10 md2:pr-8">
      <div className="flex flex-col gap-10 md:gap-6 w-full h-full">
          <UseMetaData
              title={nameProductMetaTemplate(ps.product.product.name)}
              img={ps.product.productImages[0].url}
              description={descriptionProductMetaTemplate(ps.product.product.name)}
          />
        <ProductHeader />
        <ProductCard />
      </div>
      <div className="w-full flex flex-col gap-10 md:px-1 sm:px-5">
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
      </div>
    </div>
  );
};

export default ProductPage;
