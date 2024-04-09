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
    <article className="max-w-[160px] lg:max-w-[316px] w-full bg-white sm:pt-[11px] p-3 lg:p-5 font-inter rounded-lg hover:shadow-product-card relative">
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
      <ProductTitle
        text={
          "Тримач гаджета GUB PRO-3 на кермо алюмінієвий для PowerBank/телефонів у чохлах. Чорний"
        }
      />
      <LastPrice classname="sm:pt-[7px] pt-[11px]" />
      <PriceAndCart />
      <GradientButton
        label={"Kупити"}
        showIcon={false}
        className="!rounded-full w-full mt-[6px] sm:flex !py-2 justify-center hidden"
      />
      <Instock />
      <ProductSpecItems />
    </article>
  );
};

export default ProductCard;

const ProductButtonsOnMobile = () => {
  return (
    <div className="flex justify-between lg:hidden">
      <RoundedButton
        text="Акція"
        altText={"Shopping Cart"}
        bgColor={
          "bg-pink shadow-product-card !py-2 !px-3 max-h-[35px] flex items-center my-[6.5px]"
        }
      />

      <RoundedButton
        imageUrl={"/images/uikit/card/heart.svg"}
        altText={"Shopping Cart"}
        bgColor={
          "bg-white shadow-product-card !py-2 !px-3 shrink-0 flex items-center"
        }
        size={24}
      />
    </div>
  );
};
