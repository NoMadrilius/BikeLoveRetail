import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Instock from "@/components/UIKit/Cards/ProductCard/InStock";
import React from "react";

const ProductSummaryCard = () => {
  return (
    <div
      className="flex flex-col gap-3 border-b pb-3 border-gray"
      id="about-product"
    >
      <div className="md2:flex flex-col hidden gap-3">
        <h1 className="text-dark leading-[37.5px] text-[32px] font-robot-c font-medium xl:text-[40px] xl:leading-[46.88px] 2xl:text-[40px] 2xl:leading-[46.88px]">
          Велосипед Crossride Skyline 24" 13" 2023 Зелений
        </h1>
        <span className="font-inter text-t-grey text-[14px] leading-[16.8px]">
          Код: 02391-З
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <span className="font-robot-c font-medium text-dark text-[24px] leading-[28.13px] xl:text-[32px] xl:leading-[37.5px]">
            100 000 UAH
          </span>
          <span className="font-inter text-t-grey text-[14px] leading-[16.8px] line-through">
            100 000 UAH
          </span>
        </div>
        <RoundedButton
          imageUrl={"/images/uikit/card/heart.svg"}
          altText={"Shopping Cart"}
          size={24}
          bgColor={"bg-white shadow-product-card ]shrink-0"}
          onClick={function (): void {}}
        />
      </div>
      <div className="flex items-end justify-between">
        <Instock className="!mt-0" />
        <span className="font-inter text-t-grey text-[14px] leading-[16.8px] md2:hidden">
          Код: 02391-З
        </span>
      </div>
    </div>
  );
};

export default ProductSummaryCard;
