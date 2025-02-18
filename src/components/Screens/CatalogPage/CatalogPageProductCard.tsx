import React from "react";
import { useCartStore } from "@/store/CartStore";
import { GenerateProductLink } from "@/helpers/LinkGen/GenerateProductLink";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Link from "next/link";
import ProductImage from "@/components/UIKit/Cards/ProductCard/ProductImage";
import ProductTitle from "@/components/UIKit/Cards/Common/ProductTitle";
import LastPrice from "@/components/UIKit/Cards/Common/LastPrice";
import PriceAndCart from "@/components/UIKit/Cards/ProductCard/PriceAndCart";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import Instock from "@/components/UIKit/Cards/ProductCard/InStock";
import ProductSpecItems from "@/components/UIKit/Cards/ProductCard/ProductSpecItems";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import {
  CalculateProductDiscountPercent2,
} from "@/helpers/CalculateProductDiscountPercent";
import noImage from "/public/images/no-image.svg";
import { prettyPrice } from "@/helpers/stringDecorate/prettyPrice";

const CatalogPageProductCard = ({p}:{p:CatalogPageProduct}) => {


  return (
    <article
      className={`md:max-w-[322px] flex flex-col h-full max-w-[159px] lg:max-w-[316px] lg:w-full xl:max-w-[274.67px] w-full bg-white sm:pt-[11px] 
    xl:p-5 xl:pt-[27px] lg:pt-[27px] p-3 lg:p-5 font-inter rounded-lg hover:shadow-product-card relative select-text`}
    >
      {1 > 0 ? (
        <>
          <>
            {p.oldPrice >
              p.price && (
                <RoundedButton
                  text="Акція"
                  altText={"Shopping Cart"}
                  bgColor={
                    "bg-pink shadow-product-card absolute left-[20px] xl:left-[21px] lg:left-[21px] lg:pt-2 lg:px-3 lg:max-h-[39px] xl:top-[31px] xl:flex top-[25px] xl:block lg:block hidden  xl:!py-2 xl:!px-3 xl:max-h-[35px] "
                  }
                  onClick={function(): void {
                  }}
                />
              )}

            <ProductButtonsOnMobile />
            <Link href={p.url} className={"cursor-pointer"}>
              <ProductImage src={p.image ?? noImage} />
            </Link>

            <RoundedButton
              imageUrl={"/images/uikit/card/heart.svg"}
              altText={"Shopping Cart"}
              size={24}
              bgColor={
                "bg-white shadow-product-card absolute xl:flex xl:items-center xl:size-[48px] xl:right-[16px] right-[20px] top-[25px] xl:block lg:block hidden xl:py-2 xl:px-3 xl:shrink-0"
              }
              onClick={function(): void {
              }}
            />
          </>
          <Link href={p.url} className={"cursor-pointer"}>
            <ProductTitle text={p.name} />
          </Link>
          {p.oldPrice>p.price && (
            <div className={`flex items-center gap-2  sm:pt-[7px] pt-[11px] lg:pt-[7px] xl:pt-1 mt-auto`}>
        <span
          className={`text-product-card-last-price text-[14px] flex font-normal leading-[120%] text-left line-through`}>
        {prettyPrice(p.oldPrice,p.currencySymbol)}
        </span>
              <div
                className={`border border-pink text-pink text-[16px] font-light flex items-center justify-center leading-[19.2px] font-inter rounded-full px-2 py-1 max-w-[54px]`}
              >
                {"-" + CalculateProductDiscountPercent2(p) + "%"}
              </div>
            </div>
          )}

          <div
            className={`flex items-center justify-between ${
              true ? "mt-auto" : "my-4"
            }`}
          >
      <span className="product-card-price font-robot-c">
        {prettyPrice(p.price,p.currencySymbol)}
      </span>

          </div>
          <Instock stockType={"inStore"} />
        </>
      ) : (
        <Link
          href={p.url}
          className={"bg-white opacity-50 select-none cursor-pointer"}
        >
          <ProductButtonsOnMobile />
          <ProductImage src={p.image} />
          <ProductTitle text={p.name} />


          <Instock stockType={p.availability} />
        </Link>
      )}
    </article>
  );
};

const ProductButtonsOnMobile = () => {
  return (
    <div className="flex justify-between xl:hidden lg:hidden">
      <RoundedButton
        text="Акція"
        altText={"Shopping Cart"}
        bgColor={
          "bg-pink shadow-product-card !py-2 !px-3 max-h-[35px] flex items-center my-[6.5px]"
        }
        onClick={function (): void {}}
      />

      <RoundedButton
        imageUrl={"/images/uikit/card/heart.svg"}
        altText={"Shopping Cart"}
        bgColor={
          "bg-white shadow-product-card !py-2 !px-3 shrink-0 flex items-center"
        }
        size={24}
        onClick={function (): void {}}
      />
    </div>
  );
};

export default CatalogPageProductCard;