import CustomSlider from "@/components/Pages/Homepage/MainContent/CustomSlider";
import ProductCard from "@/components/Pages/ProductPage/ProductCard";
import ProductHeader from "@/components/Pages/ProductPage/ProductHeader";
import { useAppStore } from "@/store/AppStore";
import React, { useEffect } from "react";

const ProductPage = () => {
  const as = useAppStore();

  useEffect(() => {
    as.loadSaleProducts();
    as.loadTopProducts();
  }, []);

  return (
    <div className="scroll-smooth max-w-[1324px] w-full m-auto items-start pt-5 pb-10 flex flex-col gap-10 md2:pr-8">
      <div className="flex flex-col gap-10 md:gap-6 w-full">
        <ProductHeader />
        <ProductCard />
      </div>
      <div className="w-full flex flex-col gap-10 md:px-1 sm:px-5">
        <CustomSlider
          products={as.saleProducts}
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
