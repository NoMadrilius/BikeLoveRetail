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
        className={`text-product-card-last-price text-[14px] lg:text-[16px] flex font-normal leading-[120%] text-left line-through ${priceClass}`}
      >
        130 000 <span className="xl:hidden block">₴</span>{" "}
        <span className="xl:block hidden">UAH</span>
      </span>
      <div
        className={`border border-pink text-pink text-[16px] font-light flex items-center justify-center leading-[19.2px] font-inter rounded-full px-2 py-1 max-w-[54px] ${discountClass}`}
      >
        -13%
      </div>
    </div>
  );
};

export default LastPrice;
