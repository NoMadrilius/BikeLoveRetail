import React from "react";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import CharacteristicsMobile from "./ProductDescription/Characteristics/CharacteristicsMobile";

const ProductInfo = () => {
  return (
    <div className="flex flex-col mt-6 gap-6 md2:mt-0 md2:grow max-w-[628px] relative z-[-1]">
      <ProductDetails />
      <ProductDescription />
      <CharacteristicsMobile />
    </div>
  );
};

export default ProductInfo;
