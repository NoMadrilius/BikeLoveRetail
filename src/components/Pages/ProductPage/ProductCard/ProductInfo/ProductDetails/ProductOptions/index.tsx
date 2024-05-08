import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import ProductColorPicker from "./ProductColorPicker";
import ProductSizePicker from "./ProductSizePicker";
import {useProductPageStore} from "@/store/ProductPageStore";
import {useCartStore} from "@/store/CartStore";
import {observer} from "mobx-react";

const ProductOptions = () => {
    const ps = useProductPageStore()
    const cs = useCartStore()
  return (
    <div className="flex flex-col gap-8 border-b pb-3 border-gray">
        {ps.uniqueOptions.map(n=><ProductSizePicker {...n}/>)}

        {//<ProductColorPicker />
        }
      <div className="flex gap-3">
        <GradientButton
            addToCart={cs.checkInCart(ps.product!.product.id)}
            label={"Купити"}
            showIcon={false}
          textstyles="!w-max"
          className="justify-center grow"
          onClick={() => {
              cs.addToCart(ps.product!.product, ps.product!);
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
