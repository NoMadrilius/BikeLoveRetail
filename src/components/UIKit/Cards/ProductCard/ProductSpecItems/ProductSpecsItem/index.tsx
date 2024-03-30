import React from "react";

interface ProductSpecsItemProps {
  title: string;
  description: string;
}

const ProductSpecsItem = ({ title, description }: ProductSpecsItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <span className="mr-4 font-medium text-black leading-[19px] ">
        {title}
      </span>
      <span className="text-[#9A9A9A] leading-[18px]">{description}</span>
    </div>
  );
};

export default ProductSpecsItem;
