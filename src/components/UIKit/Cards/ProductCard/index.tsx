import React from "react";
import RoundedButton from "../../Buttons/RoundedIconButton";
import Instock from "./InStock";
import LastPrice from "../Common/LastPrice";
import PriceAndCart from "./PriceAndCart";
import ProductImage from "./ProductImage";
import ProductSpecItems from "./ProductSpecItems";
import ProductTitle from "../Common/ProductTitle";
import GradientButton from "../../Buttons/GradientButton";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import { useCartStore } from "@/store/CartStore";
import Link from "next/link";
import { GenerateLink } from "@/helpers/GenerateLink";
import { useRouter } from "next/router";

const ProductCard = (p: { product: ProductFullData }) => {
  let imgs = p.product.productImages.sort((a, b) => b.sortOrder - a.sortOrder);
  const cs = useCartStore();
  const r = useRouter();

  const link = GenerateLink(r, {
      basePath: "/product",
      queryParameters: { id: p.product.product.id },
      slug: p.product.product.transliteration,
  })
  return (

      <article className="md:max-w-[322px] flex flex-col h-full max-w-[159px] lg:max-w-[316px] lg:w-full xl:max-w-[274.67px] w-full bg-white sm:pt-[11px] xl:p-5 xl:pt-[27px] lg:pt-[27px] p-3 lg:p-5 font-inter rounded-lg hover:shadow-product-card relative select-text">
        <>
          {p.product.product.oldRetailPrice > p.product.product.retailPrice && (
            <RoundedButton
              text="Акція"
              altText={"Shopping Cart"}
              bgColor={
                "bg-pink shadow-product-card absolute left-[20px] xl:left-[21px] lg:left-[21px] lg:pt-2 lg:px-3 lg:max-h-[39px] xl:top-[31px] xl:flex top-[25px] xl:block lg:block hidden  xl:!py-2 xl:!px-3 xl:max-h-[35px] "
              }
              onClick={function (): void {}}
            />
          )}

          <ProductButtonsOnMobile />
            <Link href={link} className={"cursor-pointer"}>
          <ProductImage src={imgs.length > 0 ? imgs[0].url : "null"} />
            </Link>

          <RoundedButton
            imageUrl={"/images/uikit/card/heart.svg"}
            altText={"Shopping Cart"}
            size={24}
            bgColor={
              "bg-white shadow-product-card absolute xl:flex xl:items-center xl:size-[48px] xl:right-[16px] right-[20px] top-[25px] xl:block lg:block hidden xl:py-2 xl:px-3 xl:shrink-0"
            }
            onClick={function (): void {}}
          />
        </>
          <Link href={link}  className={"cursor-pointer"}>
          <ProductTitle text={p.product.product.name} />
          </Link>
        {p.product.product.oldRetailPrice > p.product.product.retailPrice && (
          <LastPrice
            product={p.product.product}
            classname="sm:pt-[7px] pt-[11px] lg:pt-[7px] xl:pt-1 mt-auto"
          />
        )}
        <PriceAndCart product={p.product} />
        <GradientButton
          label={"Kупити"}
          showIcon={false}
          className="!rounded-full w-full sm:mt-auto mt-[6px] sm:flex !py-2 justify-center hidden"
          onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
            cs.addToCart(p.product.product, p.product);
          }}
        />
        <Instock />
        <ProductSpecItems product={p.product} />
      </article>
  );
};

export default ProductCard;

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
