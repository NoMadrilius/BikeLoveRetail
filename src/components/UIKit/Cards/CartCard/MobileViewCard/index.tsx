import CounterControl from "@/components/UIKit/Buttons/CounterControl";
import { TrashIcon, HeartIcon } from "@/components/UIKit/SVGIcons";
import { Product } from "@/dataTransferObjects/entities/Product";
import LastPrice from "../../Common/LastPrice";
import ProductImage from "../../ProductCard/ProductImage";

const MobileViewCard = () => {
  return (
    <article className="border-b border-gray flex-col items-center p-5 sm:flex hidden">
      <div className="flex items-center justify-center gap-4">
        <div>
          <ProductImage
            src={"/images/homepage/static/accessories.png"}
            classname="sm:!w-[148px] sm:!h-[132px]"
          />
          <div className="flex gap-[10px]">
            <span className="font-normal text-black text-[14px] leading-[120%]">
              Артикул:{" "}
            </span>
            <span className="font-normal text-[14px] leading-[120%] text-[#6B6B6B]">
              SM-MM-TT
            </span>
          </div>
        </div>

        <div className="flex flex-col max-w-[407px]">
          <div className="flex items-center  gap-10">
            <div className="p-2">
              <TrashIcon />
            </div>
            <div className="p-2 order-[-1]">
              <HeartIcon />
            </div>
          </div>
          <h3 className="text-[16px] leading-[19.36px] font-semibold font-inter text-dark">
            Тримач гаджета GUB PRO-3 на кермо алюмінієвий для
            PowerBank/телефонів у чохлах. Чорний
          </h3>
        </div>
      </div>
      <div className="flex justify-between items-center w-full gap-4">
        <div className="flex flex-col items-start gap-2">
          <LastPrice
            product={{} as Product}
            priceClass="!text-pink"
            discountClass="md:block hidden"
          />
          <span className="product-card-price text-[20px] leading-[120%] font-bold">
            100 000 UAH
          </span>
        </div>
        <CounterControl className="mt-auto" />
      </div>
    </article>
  );
};

export default MobileViewCard;
