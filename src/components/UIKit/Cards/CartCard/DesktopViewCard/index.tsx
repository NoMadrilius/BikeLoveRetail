import CounterControl from "@/components/UIKit/Buttons/CounterControl";
import { TrashIcon, HeartIcon } from "@/components/UIKit/SVGIcons";
import { Product } from "@/dataTransferObjects/entities/Product";
import LastPrice from "../../Common/LastPrice";
import ProductTitle from "../../Common/ProductTitle";
import ProductImage from "../../ProductCard/ProductImage";

const DesktopViewCard = () => {
  return (
    <article className="border-b border-gray flex items-center px-5 relative sm:hidden">
      <ProductImage
        src={"/images/homepage/static/accessories.png"}
        classname="!w-[200px] !h-[160px] sm:!w-[148px] sm:!h-[132px] shrink-0 !mb-0 mr-4"
      />
      <div className="flex flex-col gap-[30px] max-w-[407px] mr-5">
        <ProductTitle
          disableBorder={true}
          className="py-2 max-w-[419px]"
          maxCharacters={1200}
          text={
            "Тримач гаджета GUB PRO-3 на кермо алюмінієвий для PowerBank/телефонів у чохлах. Чорний"
          }
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

      <CounterControl />
      <div className="flex items-center absolute top-0 right-[20px]">
        <div className="p-2">
          <TrashIcon />
        </div>
        <div className="p-2">
          <HeartIcon />
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 ml-4">
        <LastPrice
          product={{} as Product}
          priceClass="!text-pink"
          discountClass="md:block hidden"
        />
        <span className="product-card-price text-[20px] leading-[120%] font-bold">
          100 000 UAH
        </span>
      </div>
    </article>
  );
};

export default DesktopViewCard;
