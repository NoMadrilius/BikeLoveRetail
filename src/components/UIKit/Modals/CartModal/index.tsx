import React from "react";
import GradientButton from "../../Buttons/GradientButton";
import CartCard from "../../Cards/CartCard";
import { observer } from "mobx-react";
import { useCartStore } from "@/store/CartStore";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { CloseModalIcon } from "../../SVGIcons";
import ModalBase from "@/components/Modal/ModalBase/ModalBase";
import {useRouter} from "next/router";
import { prettyPrice } from "@/helpers/stringDecorate/prettyPrice";
import { Button } from "@mui/material";

const CartModal = () => {
  const cs = useCartStore();
  const c = useCurrencyStore();
  const r = useRouter()

  return (
    <ModalBase setOpen={(v) => cs.setVisible(v)} open={cs.visible}>
      <div
        className="bg-white rounded-lg w-full max-w-[957px] sm:h-full sm:flex sm:flex-col sm:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
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
            onClick={() => cs.setVisible(false)}
          >
            <CloseModalIcon />
          </div>
        </div>
        <div className="h-[483px] sm:h-[531px] overflow-y-auto sm:px-5">
          {cs.cart.map((n, index) => (
            <CartCard key={index} {...n} />
          ))}
        </div>
        <div className="bg-dark py-3 px-10 sm:py-4 sm:px-5 flex items-center justify-between overflow-hidden sm:rounded-b-none rounded-b-lg sm:mt-auto">
          <div className="flex flex-col gap-5 sm:gap-2">
            <div className="flex sm:flex-col flex-row items-center sm:items-start gap-2">
              <span className="text-white text-[18px] leading-[22px] sm:text-[16px] sm:leading-[19.2px]">
                Всього:
              </span>
              <span className="text-white text-[32px] sm:font-bold sm:text-[20px] sm:leading-[120%] font-medium leading-[38px]">
                {prettyPrice(cs.totalPrice)}
              </span>
            </div>

            {cs.totalDiscount > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-[#DEDEDE] text-[14px] leading-[120%]">
                  Ви економите:
                </span>
                <span className="text-link-pink text-[14px] font-medium leading-[120%]">
                  {prettyPrice(cs.totalDiscount)}
                </span>
              </div>
            )}
          </div>
          <Button variant={"contained"} size={"medium"} disabled={cs.cart.length === 0} onClick={()=>{r.push('/checkout');cs.setVisible(false)}}>
            Оформити замовлення</Button>
        </div>
      </div>
    </ModalBase>
  );
};

export default observer(CartModal);
