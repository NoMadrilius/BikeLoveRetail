import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import React from "react";
import ProductGallery from "./ProductGallery";

const ProductImage = () => {
  return (
    <section className="p-5 sm:bg-white md:bg-white md2:bg-transparent rounded-lg w-full  md2:max-w-[568px] xl:max-w-[700px] lg:max-w-[768px] md2:p-0 md2:sticky top-[10px] ">
      <div className="flex flex-col gap-1 items-start md:flex-row md:items-center md:justify-between md2:hidden">
        <RoundedButton
          text="Акція"
          altText={"Shopping Cart"}
          bgColor={"bg-pink shadow-product-card py-[6.5px] px-2 md:order-1"}
          onClick={function (): void {}}
        />
        <h1 className="text-dark leading-[28.13px] text-[24px] font-robot-c font-medium">
          Велосипед Crossride Skyline 24" 13" 2023 Зелений
        </h1>
      </div>
      <ProductGallery />
    </section>
  );
};

export default ProductImage;
