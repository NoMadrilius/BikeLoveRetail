import RoundedIconButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Image from "next/image";
import React from "react";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import { useCurrencyStore } from "@/store/CurrencyStore";

const PriceAndCart = (p: { product: ProductFullData }) => {
  const c = useCurrencyStore();
  return (
    <div className="flex items-center justify-between mt-[28px]">
      <span className="product-card-price font-robot-c">
        {c.useCurrency(p.product.product.retailPrice)}
      </span>

      <RoundedIconButton
        imageUrl={"/images/homepage/icons/shopping-cart.svg"}
        altText={"Shopping Cart"}
        bgColor={"bg-gradient-custom xl:block lg:block hidden "}
      />
    </div>
  );
};

export default PriceAndCart;
