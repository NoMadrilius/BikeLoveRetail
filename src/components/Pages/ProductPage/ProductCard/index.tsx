import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import { Product } from "@/dataTransferObjects/entities/Product";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";

const ProductCard = ({p}:{p:ProductFullData}) => {
  return (
    <div className="px-5 w-full h-full  md:px-0 flex flex-col md2:flex-row md2:px-0 md2:gap-6 md2:items-start ">
      <ProductImage p={p}/>
      <ProductInfo p={p}/>
    </div>
  );
};

export default ProductCard;
