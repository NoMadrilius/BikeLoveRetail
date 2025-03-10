import React from "react";
import { useCartStore } from "@/store/CartStore";
import { GenerateProductLink } from "@/helpers/LinkGen/GenerateProductLink";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Link from "next/link";
import ProductImage from "@/components/UIKit/Cards/ProductCard/ProductImage";
import ProductTitle from "@/components/UIKit/Cards/Common/ProductTitle";
import Instock from "@/components/UIKit/Cards/ProductCard/InStock";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import {
  CalculateProductDiscountPercent2,
} from "@/helpers/CalculateProductDiscountPercent";
import noImage from "/public/images/no-image.svg";
import { prettyPrice } from "@/helpers/stringDecorate/prettyPrice";
import ProductCardButton from "@/components/UIKit/Buttons/ProductCardButton/ProductCardButton";

const CatalogPageProductCard = ({p}:{p:CatalogPageProduct}) => {


  return (
    <article className={`flex flex-col h-full justify-between hover:shadow-product-card relative font-inter bg-white rounded-lg p-2 gap-2`}>
      {p.availability != "NotInStock" ? (
        <>
          <>
            {p.oldPrice > p.price && (<div>kekw</div>)}

            <Link href={p.url} className={"cursor-pointer"}>
              <ProductImage src={p.image ?? noImage} />
            </Link>

          </>
          <Link href={p.url} className={"cursor-pointer"}>
            <ProductTitle text={p.name} />
          </Link>

          {p.oldPrice>p.price && (
            <div className={`flex items-center gap-2`}>
              <span className={`text-product-card-last-price text-[14px] flex font-normal leading-[120%] text-left line-through`}>
                {prettyPrice(p.oldPrice,p.currencySymbol)}
              </span>
              <div className={`border border-pink text-pink text-[16px] font-light flex items-center justify-center leading-[19.2px] font-inter rounded-full px-2 py-1 max-w-[54px]`}>
                {"-" + CalculateProductDiscountPercent2(p) + "%"}
              </div>
            </div>
          )}

          <div className={`flex items-center justify-between`}>
            <span className="product-card-price font-robot-c">
              {prettyPrice(p.price, p.currencySymbol)}
            </span>
          </div>
          <Instock stockType={p.availability} />
          <ProductCardButton p={p} />
        </>
      ) : (
        <Link
          href={p.url}
          className={"bg-white opacity-50 select-none cursor-pointer"}
        >
          <ProductImage src={p.image??"/"} />
          <ProductTitle text={p.name} />
          <Instock stockType={p.availability} />
        </Link>
      )}
    </article>
  );
};

export default CatalogPageProductCard;