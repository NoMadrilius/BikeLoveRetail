import CounterControl from "@/components/UIKit/Buttons/CounterControl";
import { TrashIcon, HeartIcon } from "@/components/UIKit/SVGIcons";
import { Product } from "@/dataTransferObjects/entities/Product";
import LastPrice from "../../Common/LastPrice";
import ProductImage from "../../ProductCard/ProductImage";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { useCartStore } from "@/store/CartStore";
import {useRouter} from "next/router";
import Link from "next/link";
import {GenerateProductLink} from "@/helpers/LinkGen/GenerateProductLink";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";

const MobileViewCard = (props: {
  product: CatalogPageProduct;
  quantity: number;
}) => {
  const c = useCurrencyStore();
  const cs = useCartStore();
  const r= useRouter()


  return (
    <article className="border-b border-gray gap-4 p-5 sm:flex hidden">
      <div className="flex flex-col items-start justify-center gap-4">
        <div>
          <Link href={props.product.url} onClick={()=>{cs.setVisible(false)}} className={"cursor-pointer"}>
          <ProductImage src={props.product.image??"/"} classname="sm:!w-[148px] sm:!h-[132px]" />
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

        <div className="flex flex-col items-start gap-2 grow">
          <LastPrice
            product={props.product}
            priceClass="!text-pink"
            discountClass="md:block hidden"
          />
          <span className="product-card-price text-[20px] leading-[120%] font-bold">
            {props.product.price * props.quantity}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col max-w-[407px]">
          <div className="flex items-center justify-center gap-10">
            <div className="p-2 cursor-pointer hover:bg-[#C1C1C133] rounded-lg">
              <TrashIcon
                onClick={() => {
                  cs.removeFromCart(props.product.id);
                }}
              />
            </div>
            <div className="p-2 order-[-1] cursor-pointer hover:bg-[#C1C1C133] rounded-lg">
              <HeartIcon />
            </div>
          </div>
          <Link href={props.product.url} onClick={()=>{cs.setVisible(false)}} className={"cursor-pointer"}>
          <h3 className="text-[16px] leading-[19.36px] font-semibold font-inter text-dark">
            {props.product.name}
          </h3>
          </Link>
        </div>
        <CounterControl className="mt-auto" productId={props.product.id} />
      </div>
    </article>
  );
};

export default MobileViewCard;
