import React from "react";
import ProductTitle from "../Common/ProductTitle";
import LastPrice from "../Common/LastPrice";
import ProductImage from "../ProductCard/ProductImage";
import RoundedButton from "../../Buttons/RoundedIconButton";

const SearchCard = () => {
  return (
    <article className="p-3 bg-white border-b border-gray flex items-center justify-center gap-2 max-w-[796px]">
      <ProductImage classname="md:!w-[116px] md:!h-[100px] !w-[80px] !h-[68px] shrink-0 !mb-0" />
      <div>
        <ProductTitle disableBorder={true} className="py-0" text={"Test"} />
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-3">
            <span className="product-card-price text-[20px] leading-[120%] font-bold">
              100 000 UAH
            </span>
            <LastPrice
              priceClass="!text-pink"
              discountClass="md:block hidden"
            />
          </div>
          <div className="hidden md:flex items-center gap-3 ">
            <RoundedButton
              imageUrl={"/images/uikit/card/heart.svg"}
              altText={"Heart"}
              bgColor={"bg-white shadow-product-card"}
            />
            <RoundedButton
              text="Купити"
              bgColor={"bg-gradient-custom shadow-product-card px-[38px]"}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SearchCard;
