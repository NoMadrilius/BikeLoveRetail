import React from "react";
import { Product } from "@/dataTransferObjects/entities/Product";
import { CalculateProductDiscountPercent } from "@/helpers/CalculateProductDiscountPercent";
import {useCurrencyStore} from "@/store/CurrencyStore";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
interface LastPriceProps {
  classname?: string;
  discountClass?: string;
  priceClass?: string;
  product: CatalogPageProduct;
}

const LastPrice = ({
  product,
  classname,
  discountClass,
  priceClass,
}: LastPriceProps) => {
    if(product.oldPrice === 0) return null

    const c = useCurrencyStore();

    return (
    <div className={`flex items-center gap-2  ${classname}`}>
      <span
        className={`text-product-card-last-price text-[14px] flex font-normal leading-[120%] text-left line-through ${priceClass}`}
      >
        {c.useCurrency(product.oldPrice)}
      </span>
      <div
        className={`border border-pink text-pink text-[16px] font-light flex items-center justify-center leading-[19.2px] font-inter rounded-full px-2 py-1 max-w-[54px] ${discountClass}`}
      >
        {"-" + "" + "%"}
      </div>
    </div>
  );
};

export default LastPrice;
