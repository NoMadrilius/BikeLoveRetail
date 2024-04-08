import RoundedIconButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Image from "next/image";
import React from "react";

const PriceAndCart = () => {
  return (
    <div className="flex items-center justify-between pt-1">
      <span className="product-card-price font-robot-c">100 000 UAH</span>

      <RoundedIconButton
        imageUrl={"/images/homepage/icons/shopping-cart.svg"}
        altText={"Shopping Cart"}
        bgColor={"bg-gradient-custom lg:block hidden"}
      />
    </div>
  );
};

export default PriceAndCart;
