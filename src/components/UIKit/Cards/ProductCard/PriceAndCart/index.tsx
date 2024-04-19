import RoundedIconButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Image from "next/image";
import React from "react";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { useCartStore } from "@/store/CartStore";

const PriceAndCart = (p: { product: ProductFullData }) => {
  const c = useCurrencyStore();
  const cs = useCartStore();
  return (
    <div className="flex items-center justify-between mt-auto">
      <span className="product-card-price font-robot-c">
        {c.useCurrency(p.product.product.retailPrice)}
      </span>

      <RoundedIconButton
        imageUrl={"/images/homepage/icons/shopping-cart.svg"}
        altText={"Shopping Cart"}
        bgColor={"button-gradient xl:block lg:block hidden "}
        onClick={() => {
          cs.addToCart(p.product.product, p.product);
        }}
      />
    </div>
  );
};

export default PriceAndCart;
