import React from "react";
import { Product } from "@/dataTransferObjects/entities/Product";
import { CalculateProductDiscountPercent } from "@/helpers/CalculateProductDiscountPercent";
interface LastPriceProps {
  classname?: string;
  discountClass?: string;
  priceClass?: string;
  product: Product;
}

const LastPrice = ({
  product,
  classname,
  discountClass,
  priceClass,
}: LastPriceProps) => {
  return (
    <div className={`flex items-center gap-2  ${classname}`}>
      <span
        className={`text-product-card-last-price text-[14px] flex font-normal leading-[120%] text-left line-through ${priceClass}`}
      >
        {product.oldRetailPrice}
        <span className="xl:hidden block lg:hidden">₴</span>{" "}
        <span className="xl:block hidden lg:block">UAH</span>
      </span>
      <div
        className={`border border-pink text-pink text-[16px] font-light flex items-center justify-center leading-[19.2px] font-inter rounded-full px-2 py-1 max-w-[54px] ${discountClass}`}
      >
        {"-" + CalculateProductDiscountPercent(product) + "%"}
      </div>
    </div>
  );
};

export default LastPrice;
