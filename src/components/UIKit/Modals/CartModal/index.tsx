import React from "react";
import GradientButton from "../../Buttons/GradientButton";
import CartCard from "../../Cards/CartCard";
import CloseIcon from "../../NavigationPanel/Header/MobileView/CloseIcon";
import { observer } from "mobx-react";
import { useAppStore } from "@/store/AppStore";
import { useCartStore } from "@/store/CartStore";
import { useCurrencyStore } from "@/store/CurrencyStore";

const CartModal = () => {
  const cs = useCartStore();
  const c = useCurrencyStore();
  const closeModal = () => {
    cs.setVisible(false);

    document.body.style.overflow = "auto";
  };

  if (cs.visible) {
    document.body.style.overflow = "hidden";
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[1000000] overflow-hidden sm:rounded-none rounded-lg">
      <div className="bg-white rounded-lg w-full max-w-[957px] sm:h-full sm:flex sm:flex-col sm:rounded-none">
        <div className="flex justify-between items-center py-2 px-5  border-b border-gray">
          <div className="flex items-center gap-5">
            <h2 className="text-[20px] font-bold leading-[120%] font-robot-c text-dark-text">
              Кошик
            </h2>
            <span className="text-t-grey text-[14px] leading-[120%] font-inter">
              {cs.cart.length +
                " поз. | " +
                cs.cart.reduce((acc, item) => acc + item.quantity, 0) +
                " шт."}
            </span>
          </div>
          <div
            className="p-[18px] cursor-pointer hover:bg-[#C1C1C133] rounded-lg"
            onClick={closeModal}
          >
            <CloseModalIcon />
          </div>
        </div>
        <div className="h-[483px] sm:h-[531px] overflow-y-scroll sm:px-5">
          {cs.cart.map((n) => (
            <CartCard {...n} />
          ))}
        </div>
        <div className="bg-dark py-3 px-10 sm:py-4 sm:px-5 flex items-center justify-between overflow-hidden sm:rounded-b-none rounded-b-lg sm:mt-auto">
          <div className="flex flex-col gap-5 sm:gap-2">
            <div className="flex sm:flex-col flex-row items-center sm:items-start gap-2">
              <span className="text-white text-[18px] leading-[22px] sm:text-[16px] sm:leading-[19.2px]">
                Всього:
              </span>
              <span className="text-white text-[32px] sm:font-bold sm:text-[20px] sm:leading-[120%] font-medium leading-[38px]">
                {c.useCurrency(cs.totalPrice)}
              </span>
            </div>
            {cs.totalDiscount > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-[#DEDEDE] text-[14px] leading-[120%]">
                  Ви економите:
                </span>
                <span className="text-link-pink text-[14px] font-medium leading-[120%]">
                  {c.useCurrency(cs.totalDiscount)}
                </span>
              </div>
            )}
          </div>
          <GradientButton
            label={"Оформити замовлення"}
            showIcon={false}
            className="max-w-[220px] w-full sm:max-w-[133px]"
            textstyles="!w-max "
          />
        </div>
      </div>
    </div>
  );
};

export default observer(CartModal);

const CloseModalIcon = () => {
  return (
    <svg
      width="13.000000"
      height="13.000000"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <path
        id="Vector"
        d="M12 0L0 12M0 0L12 12"
        stroke="#6B6B6B"
        stroke-opacity="1.000000"
        stroke-width="1.000000"
        stroke-linejoin="round"
      />
    </svg>
  );
};
