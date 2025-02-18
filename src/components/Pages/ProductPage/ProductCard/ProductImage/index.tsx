import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import React from "react";
import ProductGallery from "./ProductGallery";
import { observer } from "mobx-react";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";

const ProductImage = ({p}:{p:ProductFullData}) => {

  return (
    <section className="p-5  sm:bg-white md:bg-white md2:bg-transparent rounded-lg w-full  md2:max-w-[568px] xl:max-w-[700px] lg:max-w-[768px] md2:p-0 md2:sticky top-20 ">
      <div className="flex flex-col gap-1 items-start md:flex-row md:items-center md:justify-between md2:hidden">
        {p.product.oldRetailPrice > p.product.retailPrice && (
          <RoundedButton
            text="Акція"
            altText={"Shopping Cart"}
            bgColor={
              "bg-pink shadow-product-card py-[6.5px] px-2 md:order-1 z-[0]"
            }
            onClick={function (): void {}}
          />
        )}
        <h1 className="text-dark leading-[28.13px] text-[24px] font-robot-c font-medium">
          {p.product.name}
        </h1>
      </div>
      <ProductGallery p={p}/>
    </section>
  );
};

export default observer(ProductImage);
