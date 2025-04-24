import React from "react";
import { ProductPageData } from "@/dataTransferObjects/response/productPage/ProductPageData";
import ProductDetails from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDetails";
import ProductDescription from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDescription";
import CharacteristicsMobile
  from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDescription/Characteristics/CharacteristicsMobile";
import DeliveryOptions from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDetails/DeliveryOptions";
import PaymentOptions from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDetails/PaymentOptions";
import GuaranteeDetails from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDetails/GuaranteeDetails";
import ProductSummaryCard
  from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDetails/ProductSummaryCard";
import ProductOptions from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDetails/ProductOptions";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import Instock from "@/components/UIKit/Cards/ProductCard/InStock";
import { productPageStore } from "@/store/ProductPageStore";
import ProductSizePicker
  from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDetails/ProductOptions/ProductSizePicker";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import { useTranslation } from "next-i18next";
import { useCartStore } from "@/store/CartStore";
import Description from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDescription/Description";
import Characteristics from "@/components/Pages/ProductPage/ProductCard/ProductInfo/ProductDescription/Characteristics";
import { prettyPrice } from "@/helpers/stringDecorate/prettyPrice";
import ProductPageOption from "@/components/Screens/ProductPage/ProductPageOption";
import { ProductPageDataOption } from "@/dataTransferObjects/response/productPage/ProductPageDataOption";
import { observer } from "mobx-react";
import ProductCardButton from "@/components/UIKit/Buttons/ProductCardButton/ProductCardButton";
import { PageToCatalogProduct } from "@/helpers/ProductConverter";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PublicPageInfo = ({p}:{p:ProductPageData}) => {
  const { t } = useTranslation('product_page');
  const cs = useCartStore()

  let allOpts:ProductPageDataOption[] = []

  p.binds.forEach((n)=>allOpts=[...allOpts,...n.requiredVariants])

  return (
    <div className="flex flex-col mt-6 gap-6 md2:mt-0 md2:grow md:max-w-full max-w-[628px]">
      <section className="py-5 px-4 bg-white rounded-lg w-full flex flex-col gap-7 md:px-7">
        <div
          className="flex flex-col gap-3 border-b pb-3 border-gray"
          id="about-product"
        >
          <div className="md2:flex flex-col hidden gap-3">
            <h1
              className="text-dark leading-[37.5px] text-[32px] font-robot-c font-medium xl:text-[40px] xl:leading-[46.88px] 2xl:text-[40px] 2xl:leading-[46.88px]">
              {p.product.name}
            </h1>
            <span className="font-inter text-t-grey text-[14px] leading-[16.8px]">
          {t("Код")}{" " + p.product.id}
        </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-2">
          <span
            className="font-robot-c font-medium text-dark text-[24px] leading-[28.13px] xl:text-[32px] xl:leading-[37.5px]">
            {prettyPrice(p.product.price,p.product.currencySymbol)}
          </span>
              {p.product.oldPrice > p.product.price && (
                <span className="font-inter text-t-grey text-[14px] leading-[16.8px] line-through">
              {prettyPrice(p.product.oldPrice,p.product.currencySymbol)}
            </span>
              )}
            </div>
            <RoundedButton
              imageUrl={"/images/uikit/card/heart.svg"}
              altText={"Shopping Cart"}
              size={24}
              bgColor={"bg-white shadow-product-card shrink-0 "}
              onClick={()=>{}}
            />
          </div>
          <div className="flex items-end justify-between">
            <Instock
              className="!mt-0"
              stockType={p.product.availability}
            />

            <span className="font-inter text-t-grey text-[14px] leading-[16.8px] md2:hidden">
          {t("Код")}{" " + p.product.id}
        </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-b pb-3 border-gray">

          {p.requiredVariants.map(n => <ProductPageOption preferred={p.requiredVariants} binds={p.binds} active={n} variants={allOpts.filter(g=>g.optionId === n.optionId)} />)}

          {p.product.availability != "NotInStock"&&
          <div className="flex gap-3">
              {cs.isInCart(p.product.id)?
                <Button className={"w-full"} variant={"contained"} size={"medium"} color={"info"} onClick={()=>cs.setVisible(true)} startIcon={<CheckCircleIcon />}>
                  Вже в кошику
                </Button>
                :
                <Button className={"w-full"} variant={"contained"} size={"medium"} onClick={()=>cs.addToCart(PageToCatalogProduct(p))}>
                  В кошик
                </Button>
              }
          </div>
          }
        </div>

        <DeliveryOptions />
        <PaymentOptions />
        <GuaranteeDetails />
      </section>
      <section className="p-5 bg-white rounded-lg w-full flex flex-col gap-5">
        <div
          className="flex flex-col gap-5 border-b border-gray pb-4"
          id="description"
        >
          <h3
            className="text-dark font-robot-c text-[24px] font-medium leading-[28.13px] xl:text-[32px] xl:leading-[37.5px]">
            Опис
          </h3>
          <p className="text-dark font-inter text-[16px] font-light leading-[19.2px]"
             dangerouslySetInnerHTML={{
               __html: p.product.description,
             }}
          ></p>
        </div>
      </section>
      <CharacteristicsMobile />
    </div>
  );
};

export default observer(PublicPageInfo);