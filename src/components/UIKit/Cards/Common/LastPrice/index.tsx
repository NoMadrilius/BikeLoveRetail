import React from "react";
interface LastPriceProps {
  classname?: string;
  discountClass?: string;
  priceClass?: string;
}

const LastPrice = ({
  classname,
  discountClass,
  priceClass,
}: LastPriceProps) => {
  return (
    <div className={`flex items-center gap-2  ${classname}`}>
      <span
        className={`text-product-card-last-price text-[14px] lg:text-[16px] font-normal leading-[120%] text-left line-through ${priceClass}`}
      >
        130 000₴
      </span>
      <div
        className={`border border-pink text-pink text-base font-normal flex items-center justify-center leading-tight tracking-normal rounded-full px-2 py-1 max-w-[54px] ${discountClass}`}
      >
        -13%
      </div>
    </div>
  );
};

export default LastPrice;
