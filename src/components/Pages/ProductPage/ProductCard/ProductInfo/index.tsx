import React from "react";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import CharacteristicsMobile from "./ProductDescription/Characteristics/CharacteristicsMobile";
import { Product } from "@/dataTransferObjects/entities/Product";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";

const ProductInfo = ({p}:{p:ProductFullData}) => {
  return (
    <div className="flex flex-col mt-6 gap-6 md2:mt-0 md2:grow md:max-w-full max-w-[628px]">
      <ProductDetails p={p} />
      <ProductDescription p={p} />
      <CharacteristicsMobile />
    </div>
  );
};

export default ProductInfo;
