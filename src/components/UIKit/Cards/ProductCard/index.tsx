import React from "react";
import RoundedButton from "../../Buttons/RoundedIconButton";
import Instock from "./InStock";
import LastPrice from "../Common/LastPrice";
import PriceAndCart from "./PriceAndCart";
import ProductImage from "./ProductImage";
import ProductSpecItems from "./ProductSpecItems";
import ProductTitle from "../Common/ProductTitle";
import GradientButton from "../../Buttons/GradientButton";

const ProductCard = () => {
  return (
    <article className="max-w-[160px] lg:max-w-[316px] w-full bg-white p-3 lg:p-5 font-inter rounded-lg hover:shadow-product-card relative">
      <>
        <RoundedButton
          text="Акція"
          altText={"Shopping Cart"}
          bgColor={
            "bg-pink shadow-product-card absolute left-[20px] top-[25px] lg:block hidden"
          }
        />
        <ProductButtonsOnMobile />
        <ProductImage />
        <RoundedButton
          imageUrl={"/images/uikit/card/heart.svg"}
          altText={"Shopping Cart"}
          bgColor={
            "bg-white shadow-product-card absolute right-[20px] top-[25px] lg:block hidden"
          }
        />
      </>
      <ProductTitle />
      <LastPrice classname="pt-[11px]" />
      <PriceAndCart />
      <GradientButton
        label={"Kупити"}
        showIcon={false}
        className="!rounded-full w-full my-4"
      />
      <Instock />
      <ProductSpecItems />
    </article>
  );
};

export default ProductCard;

const ProductButtonsOnMobile = () => {
  return (
    <div className="flex items-center justify-between lg:hidden">
      <RoundedButton
        text="Акція"
        altText={"Shopping Cart"}
        bgColor={"bg-pink shadow-product-card !py-2 !px-3"}
      />

      <RoundedButton
        imageUrl={"/images/uikit/card/heart.svg"}
        altText={"Shopping Cart"}
        bgColor={"bg-white shadow-product-card !py-2 !px-3"}
      />
    </div>
  );
};
