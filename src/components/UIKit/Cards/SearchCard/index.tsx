import React from "react";
import ProductTitle from "../Common/ProductTitle";
import LastPrice from "../Common/LastPrice";
import ProductImage from "../ProductCard/ProductImage";
import RoundedButton from "../../Buttons/RoundedIconButton";
import { Product } from "@/dataTransferObjects/entities/Product";
import {ProductSearchPreview} from "@/dataTransferObjects/response/ProductSearchPreview";
import {observer} from "mobx-react";

const SearchCard = (p:{prod:ProductSearchPreview}) => {
  return (
    <article className="p-3 bg-white border-b border-gray flex items-center justify-center gap-2 w-full">
      <ProductImage
        src={p.prod.image||""}
        classname="!w-[116px] !h-[100px] sm:!w-[80px] sm:!h-[68px] shrink-0 !mb-0"
      />
      <div>
        <ProductTitle
          disableBorder={true}
          className="py-0"
          text={
            p.prod.productName
          }
        />
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-3">
            <span className="product-card-price text-[20px] leading-[120%] font-bold">
              100 000 UAH
            </span>
            <LastPrice
              product={p.prod as unknown as Product}
              priceClass="!text-pink"
              discountClass="md:block hidden"
            />
          </div>
          <div className="sm:hidden flex items-center gap-3 ">
            <RoundedButton
              imageUrl={"/images/uikit/card/heart.svg"}
              altText={"Heart"}
              bgColor={"bg-white shadow-product-card"}
              onClick={() => {}}
            />
            <RoundedButton
              text="Купити"
              bgColor={
                "bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989] shadow-product-card px-[38px]"
              }
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default observer(SearchCard);
