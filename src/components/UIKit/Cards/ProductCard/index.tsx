import React from "react";
import RoundedButton from "../../Buttons/RoundedIconButton";
import Instock from "./InStock";
import LastPrice from "../Common/LastPrice";
import PriceAndCart from "./PriceAndCart";
import ProductImage from "./ProductImage";
import ProductSpecItems from "./ProductSpecItems";
import ProductTitle from "../Common/ProductTitle";

const ProductCard = () => {
  return (
    <article className="max-w-[316px] w-full bg-white p-5 font-inter rounded-lg hover:shadow-product-card relative">
      <>
        <RoundedButton
          text="Акція"
          altText={"Shopping Cart"}
          bgColor={
            "bg-pink shadow-product-card absolute left-[20px] top-[25px]"
          }
        />
        <ProductImage />
        <RoundedButton
          imageUrl={"/images/uikit/card/heart.svg"}
          altText={"Shopping Cart"}
          bgColor={
            "bg-white shadow-product-card absolute right-[20px] top-[25px]"
          }
        />
      </>
      <ProductTitle />
      <LastPrice classname="pt-[11px]" />
      <PriceAndCart />
      <Instock />
      <ProductSpecItems />
    </article>
  );
};

export default ProductCard;
