import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Instock from "@/components/UIKit/Cards/ProductCard/InStock";
import React from "react";
import { useProductPageStore } from "@/store/ProductPageStore";
import { observer } from "mobx-react";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { Product } from "@/dataTransferObjects/entities/Product";
import { useTranslation } from "next-i18next";

const ProductSummaryCard = ({p}:{p:Product}) => {
  const c = useCurrencyStore();
  const { t } = useTranslation('product_page');

  return (
    <div
      className="flex flex-col gap-3 border-b pb-3 border-gray"
      id="about-product"
    >
      <div className="md2:flex flex-col hidden gap-3">
        <h1 className="text-dark leading-[37.5px] text-[32px] font-robot-c font-medium xl:text-[40px] xl:leading-[46.88px] 2xl:text-[40px] 2xl:leading-[46.88px]">
          {p.name}
        </h1>
        <span className="font-inter text-t-grey text-[14px] leading-[16.8px]">
          {t("Код")}{" " + p.id}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <span className="font-robot-c font-medium text-dark text-[24px] leading-[28.13px] xl:text-[32px] xl:leading-[37.5px]">
            {c.useCurrency(p.retailPrice)}
          </span>
          {p.oldRetailPrice > p.retailPrice && (
            <span className="font-inter text-t-grey text-[14px] leading-[16.8px] line-through">
              {c.useCurrency(p.oldRetailPrice)}
            </span>
          )}
        </div>
        <RoundedButton
          imageUrl={"/images/uikit/card/heart.svg"}
          altText={"Shopping Cart"}
          size={24}
          bgColor={"bg-white shadow-product-card shrink-0 "}
          onClick={function (): void {}}
        />
      </div>
      <div className="flex items-end justify-between">
        <Instock
          className="!mt-0"
          stockType={
            p.internalStorageTotal > 0
              ? "inStore"
              : p.outerStorageTotal > 0
              ? "inWarehouse"
              : "outOfStock"
          }
        />

        <span className="font-inter text-t-grey text-[14px] leading-[16.8px] md2:hidden">
          {t("Код")}{" " + p.id}
        </span>
      </div>
    </div>
  );
};

export default observer(ProductSummaryCard);
