import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import ProductColorPicker from "./ProductColorPicker";
import ProductSizePicker from "./ProductSizePicker";

const ProductOptions = () => {
  return (
    <div className="flex flex-col gap-8 border-b pb-3 border-gray">
      <ProductColorPicker />
      <ProductSizePicker />
      <div className="flex gap-3">
        <GradientButton
          label={"Купити"}
          textstyles="!w-max"
          className="justify-center grow"
          onClick={() => {}}
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

export default ProductOptions;
