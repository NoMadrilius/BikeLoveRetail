import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductCard = () => {
  return (
    <div className="px-5 w-full  md:px-0 flex flex-col md2:flex-row md2:px-0 md2:gap-6 md2:items-start">
      <ProductImage />
      <ProductInfo />
    </div>
  );
};

export default ProductCard;
