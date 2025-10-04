import ProductCard from "@/components/UIKit/Cards/ProductCard";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import React from "react";
import { useTranslation } from "next-i18next";

const CheckedProducts = ({ products }: { products: ProductFullData[] }) => {
  const { t } = useTranslation('catalog_page');

  return (
    <section className="flex flex-col gap-5 max-w-full sm:pl-5 px-0">
      <h3 className="font-robot-c font-bold text-black leading-[24px] text-[20px]">
        {t("Переглянуті товари")}
      </h3>
      <div className="flex gap-5 overflow-auto">
        {products.map((el) => (
          <ProductCard
            product={el}
            showBuyButton={true}
            className="lg:max-w-[179px]"
          />
        ))}
      </div>
    </section>
  );
};

export default CheckedProducts;
