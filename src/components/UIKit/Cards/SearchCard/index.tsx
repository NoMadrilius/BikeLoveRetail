import React from "react";
import ProductTitle from "../Common/ProductTitle";
import LastPrice from "../Common/LastPrice";
import ProductImage from "../ProductCard/ProductImage";
import RoundedButton from "../../Buttons/RoundedIconButton";
import { Product } from "@/dataTransferObjects/entities/Product";
import {ProductSearchPreview} from "@/dataTransferObjects/response/ProductSearchPreview";
import {observer} from "mobx-react";
import {useCurrencyStore} from "@/store/CurrencyStore";
import Link from "next/link";
import {useSearchStore} from "@/store/SearchStore";
import {GenerateProductLink} from "@/helpers/LinkGen/GenerateProductLink";
import {useCartStore} from "@/store/CartStore";
import {useAppStore} from "@/store/AppStore";

const SearchCard = (p:{prod:ProductSearchPreview}) => {
    const c = useCurrencyStore()
    const ss = useSearchStore()
    const cs = useCartStore()
    const as = useAppStore();

    const link = GenerateProductLink(p.prod.productId, "product")

    return (
          <article className="p-3 bg-white border-b border-gray flex items-center justify-between gap-2 w-full select-text border hover:border-black">
              <Link href={link} onClick={()=>{
                  ss.setIsOpenSearch(false)
                  as.setIsOpenSidebar(false)
              }} className={"cursor-pointer"}>
              <ProductImage
                  src={p.prod.image||""}
                  classname="!w-[116px] !h-[100px] sm:!w-[80px] sm:!h-[68px] shrink-0 !mb-0"
              />
              </Link>
              <div className={"flex-grow"}>
                  <Link href={link} onClick={()=>{ss.setIsOpenSearch(false)}} className={"cursor-pointer"}>
                  <ProductTitle
                      disableBorder={true}
                      className="py-0"
                      text={
                          p.prod.productName
                      }
                  />
                  </Link>
                  <div className="flex items-end justify-between">
                      <div className="flex items-center gap-3">
                <span className="product-card-price text-[20px] leading-[120%] font-bold">
                {c.useCurrency(p.prod.retailPrice)}
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
                              onClick={(e) => {
                                  cs.addToCartRequest(p.prod.productId);
                              }}
                          />
                      </div>
                  </div>
              </div>
          </article>
  );
};

export default observer(SearchCard);
