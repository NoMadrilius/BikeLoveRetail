import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import ProductColorPicker from "./ProductColorPicker";
import ProductSizePicker from "./ProductSizePicker";
import { productPageStore, useProductPageStore } from "@/store/ProductPageStore";
import {useCartStore} from "@/store/CartStore";
import {observer} from "mobx-react";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";

const ProductOptions = ({p}:{p:ProductFullData}) => {
    const cs = useCartStore()

  return (
    <div className="flex flex-col gap-8 border-b pb-3 border-gray">
        {productPageStore.getUniqOptions(p).map(n=><ProductSizePicker {...n}/>)}
        {productPageStore.getUniqOptions(p).map(n=><ProductSizePicker {...n}/>)}
      <div className="flex gap-3">
        <GradientButton
            addToCart={cs.checkInCart(p.product.id)}
            label={"Купити"}
            showIcon={false}
          textstyles="!w-max"
          className="justify-center grow"
          onClick={() => {
              //cs.addToCart(p.product, p);
          }}
          buttonIcon="/images/homepage/icons/shopping-cart.svg"
        />
        <GradientButton
          bgColor="bg-[#5D5555]"
          label={"В кредит"}
          textstyles="!w-max"
          className="justify-center grow"
          showIcon={false}
          type="secondary"
        />
      </div>
    </div>
  );
};

export default observer(ProductOptions);
