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
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";

const SearchCard = (p:{prod:CatalogPageProduct}) => {
    const c = useCurrencyStore()
    const ss = useSearchStore()
    const cs = useCartStore()
    const as = useAppStore();

    return (
          <article className="p-3 bg-white border-b border-gray flex items-center justify-between gap-2 w-full select-text border hover:border-black">
              <Link href={p.prod.url} onClick={()=>{
                  ss.setIsOpenSearch(false)
                  as.setIsOpenSidebar(false)
              }} className={"cursor-pointer"}>
              <ProductImage
                  src={p.prod.image||""}
                  classname="!w-[116px] !h-[100px] sm:!w-[80px] sm:!h-[68px] shrink-0 !mb-0"
              />
              </Link>
              <div className={"flex-grow"}>
                  <Link href={p.prod.url} onClick={()=>{ss.setIsOpenSearch(false)}} className={"cursor-pointer"}>
                  <ProductTitle
                      disableBorder={true}
                      className="py-0"
                      text={
                          p.prod.name
                      }
                  />
                  </Link>
                  <div className="flex items-end justify-between">
                      <div className="flex items-center gap-3">
                <span className="product-card-price text-[20px] leading-[120%] font-bold">
                {p.prod.price}
                </span>

                          <LastPrice
                              product={p.prod as unknown as CatalogPageProduct}
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
                                  cs.addToCartRequest(p.prod.id);
                              }}
                          />
                      </div>
                  </div>
              </div>
          </article>
  );
};

export default observer(SearchCard);
