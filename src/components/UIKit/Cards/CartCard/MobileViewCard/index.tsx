import CounterControl from "@/components/UIKit/Buttons/CounterControl";
import { TrashIcon, HeartIcon } from "@/components/UIKit/SVGIcons";
import { Product } from "@/dataTransferObjects/entities/Product";
import LastPrice from "../../Common/LastPrice";
import ProductImage from "../../ProductCard/ProductImage";
import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";
import {useCurrencyStore} from "@/store/CurrencyStore";
import {useCartStore} from "@/store/CartStore";

const MobileViewCard = (props:{product:Product, fullData:ProductFullData, quantity:number}) => {
  const c = useCurrencyStore()
  const cs = useCartStore()

  let img = props.fullData.productImages.find(n=>n.productId === props.product.id)

  return (
    <article className="border-b border-gray flex-col items-center p-5 sm:flex hidden">
      <div className="flex items-center justify-center gap-4">
        <div>
          <ProductImage
              src={img?img.url:""}
              classname="sm:!w-[148px] sm:!h-[132px]"
          />
          <div className="flex gap-[10px]">
            <span className="font-normal text-black text-[14px] leading-[120%]">
              Артикул:{" "}
            </span>
            <span className="font-normal text-[14px] leading-[120%] text-[#6B6B6B]">
                          {props.product.id}
            </span>
          </div>
        </div>

        <div className="flex flex-col max-w-[407px]">
          <div className="flex items-center  gap-10">
            <div className="p-2">
              <TrashIcon onClick={()=>{cs.removeFromCart(props.product.id)}} />
            </div>
            <div className="p-2 order-[-1]">
              <HeartIcon />
            </div>
          </div>
          <h3 className="text-[16px] leading-[19.36px] font-semibold font-inter text-dark">
            {props.product.name}
          </h3>
        </div>
      </div>
      <div className="flex justify-between items-center w-full gap-4">
        <div className="flex flex-col items-start gap-2">
          <LastPrice
            product={props.product}
            priceClass="!text-pink"
            discountClass="md:block hidden"
          />
          <span className="product-card-price text-[20px] leading-[120%] font-bold">
            {c.useCurrency(props.product.retailPrice*props.quantity)}
          </span>
        </div>
        <CounterControl className="mt-auto" productId={props.product.id} />
      </div>
    </article>
  );
};

export default MobileViewCard;
