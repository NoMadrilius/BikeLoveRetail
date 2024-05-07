import CounterControl from "@/components/UIKit/Buttons/CounterControl";
import { TrashIcon, HeartIcon } from "@/components/UIKit/SVGIcons";
import { Product } from "@/dataTransferObjects/entities/Product";
import LastPrice from "../../Common/LastPrice";
import ProductTitle from "../../Common/ProductTitle";
import ProductImage from "../../ProductCard/ProductImage";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {useCurrencyStore} from "@/store/CurrencyStore";
import {observer} from "mobx-react";
import {useCartStore} from "@/store/CartStore";
import {useRouter} from "next/router";
import Link from "next/link";
import {GenerateLink} from "@/helpers/LinkGen/GenerateLink";

const DesktopViewCard = (props:{product:Product, fullData:ProductFullData, quantity:number}) => {
    const c = useCurrencyStore()
    const cs = useCartStore()
    const r= useRouter()

    const link = GenerateLink(r, {
        basePath: "/product",
        queryParameters: { id: props.product.id },
        slug: props.product.transliteration,
    })
    let img = props.fullData.productImages.find(n=>n.productId === props.product.id)
  return (
    <article className="border-b border-gray flex items-center px-5 relative sm:hidden">
        <Link href={link} onClick={()=>{cs.setVisible(false)}} className={"cursor-pointer"}>
        <ProductImage
        src={img?img.url:""}
        classname="!w-[200px] !h-[160px] sm:!w-[148px] sm:!h-[132px] shrink-0 !mb-0 mr-4"
      />
        </Link>
      <div className="flex w-full flex-col gap-[30px] max-w-[407px] mr-5">
          <Link href={link} onClick={()=>{cs.setVisible(false)}} className={"cursor-pointer"}>
          <ProductTitle
          disableBorder={true}
          className="py-2 max-w-[419px]"
          maxCharacters={1200}
          text={
            props.product.name
          }
        />
          </Link>
        <div className="flex gap-[10px]">
          <span className="font-normal text-black text-[14px] leading-[120%]">
            Артикул:{" "}
          </span>
          <span className="font-normal text-[14px] leading-[120%] text-[#6B6B6B]">
            {props.product.id}
          </span>
        </div>
      </div>

      <CounterControl productId={props.product.id} />
      <div className="flex items-center absolute top-0 right-[20px]">
        <div className="p-2">
          <TrashIcon onClick={()=>{cs.removeFromCart(props.product.id)}} />
        </div>
        <div className="p-2">
          <HeartIcon />
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 ml-4">
        <LastPrice
          product={props.product}
          priceClass="!text-pink"
          discountClass="md:block hidden"
        />
        <span className="product-card-price text-[20px] leading-[120%] font-bold">
          {c.useCurrency(props.product.retailPrice*props.quantity)}
        </span>
      </div>
    </article>
  );
};

export default observer(DesktopViewCard);
