import RoundedIconButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Image from "next/image";
import React from "react";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {useCurrencyStore} from "@/store/CurrencyStore";

const PriceAndCart = (p:{product:ProductFullData}) => {
    const c = useCurrencyStore()
  return (
    <div className="flex items-center justify-between pt-1 xl:pt-0 lg:mt-[-6px]">
      <span className="product-card-price font-robot-c">{c.useCurrency(p.product.product.retailPrice)}</span>

      <RoundedIconButton
        imageUrl={"/images/homepage/icons/shopping-cart.svg"}
        altText={"Shopping Cart"}
        bgColor={
          "bg-gradient-custom xl:block lg:block hidden xl:relative xl:top-[-8px] xl:-right-[1px] lg:top-[-6px] lg:relative"
        }
      />
    </div>
  );
};

export default PriceAndCart;
