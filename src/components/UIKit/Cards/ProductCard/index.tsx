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
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import { GenerateProductLink } from "@/helpers/LinkGen/GenerateProductLink";
import noImage from "/public/images/no-image.svg";
import { useTranslation } from "next-i18next";

const ProductCard = (p: {
  product: ProductFullData;
  showBuyButton?: boolean;
  className?: string;
}) => {
  let imgs = p.product.productImages
    .slice()
    .sort((a, b) => b.sortOrder - a.sortOrder);
  const cs = useCartStore();
  const { t } = useTranslation('catalog_page');
  const link = GenerateProductLink(
    p.product.product.id,
    p.product.product.transliteration
  );

  const showLastPrice =
    p.product.product.oldRetailPrice > p.product.product.retailPrice;

  return (
    <article
      className={`md:max-w-[322px] flex flex-col h-full max-w-[159px] lg:max-w-[316px] lg:w-full xl:max-w-[274.67px] w-full bg-white sm:pt-[11px] 
    xl:p-5 xl:pt-[27px] lg:pt-[27px] p-3 lg:p-5 font-inter rounded-lg hover:shadow-product-card relative select-text ${p.className}`}
    >
      {p.product.product.storageTotal > 0 ? (
        <>
          <>
            {p.product.product.oldRetailPrice >
              p.product.product.retailPrice && (
              <RoundedButton
                text={t("Акція")}
                altText={"Shopping Cart"}
                bgColor={
                  "bg-pink shadow-product-card absolute left-[20px] xl:left-[21px] lg:left-[21px] lg:pt-2 lg:px-3 lg:max-h-[39px] xl:top-[31px] xl:flex top-[25px] xl:block lg:block hidden  xl:!py-2 xl:!px-3 xl:max-h-[35px] "
                }
                onClick={function (): void {}}
              />
            )}

            <ProductButtonsOnMobile />
            <Link href={link} className={"cursor-pointer"}>
              <ProductImage src={imgs[0]?.url??noImage} />
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
          <Link href={link} className={"cursor-pointer"}>
            <ProductTitle text={p.product.product.name} />
          </Link>

          <PriceAndCart
            product={p.product}
            showBuyButton={p.showBuyButton}
            showLastPrice={showLastPrice}
            addToCart={false}
          />
          {p.showBuyButton && (
            <GradientButton
              addToCart={cs.checkInCart(p.product.product.id)}
              label={t("Kупити")}
              showIcon={false}
              className={`!rounded-full w-full sm:mt-auto sm:flex justify-center ${
                p.showBuyButton ? "flex" : "hidden"
              }hidden`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                //cs.addToCart(p.product.product, p.product);
              }}
            />
          )}

          <Instock stockType={p.product.product.internalStorageTotal>0?"inStore":p.product.product.outerStorageTotal>0?"inWarehouse":"outOfStock"} />
          <ProductSpecItems product={p.product} />
        </>
      ) : (
        <Link
          href={link}
          className={"bg-white opacity-50 select-none cursor-pointer"}
        >
          <ProductButtonsOnMobile />
          <ProductImage src={imgs[0]?.url??noImage} />
          <ProductTitle text={p.product.product.name} />
          <PriceAndCart
            product={p.product}
            showBuyButton={p.showBuyButton}
            showLastPrice={showLastPrice}
            addToCart={cs.checkInCart(p.product.product.id)}
          />
          {p.showBuyButton && (
            <GradientButton
              addToCart={cs.checkInCart(p.product.product.id)}
              label={t("Купити")}
              showIcon={false}
              className={`!rounded-full w-full sm:mt-auto mt-[6px] sm:flex !py-2 justify-center ${
                p.showBuyButton ? "flex" : "hidden"
              }hidden`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                //cs.addToCart(p.product.product, p.product);
              }}
            />
          )}

            <Instock stockType={p.product.product.internalStorageTotal>0?"inStore":p.product.product.outerStorageTotal>0?"inWarehouse":"outOfStock"} />
        </Link>
      )}
    </article>
  );
};

export default observer(ProductCard);

const ProductButtonsOnMobile = () => {
  const { t } = useTranslation('catalog_page');
  return (
    <div className="flex justify-between xl:hidden lg:hidden">
      <RoundedButton
        text={t("Акція")}
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
