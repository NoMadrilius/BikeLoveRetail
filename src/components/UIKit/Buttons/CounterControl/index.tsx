import React, { useState } from "react";
import {useCartStore} from "@/store/CartStore";
import {observer} from "mobx-react";

const CounterControl = ({ className,productId }: { className?: string, productId:number }) => {

  const cs = useCartStore()
  const item = cs.cart.find(n=>n.product.id === productId)

  if(!item) return null

  const incrementCount = () => {
    cs.updateProductQuantity(productId,item.quantity+1)
  };

  const decrementCount = () => {
    if (item.quantity > 1) {
      cs.updateProductQuantity(productId,item.quantity-1)
    }
  };



  return (
    <div
      className={`relative flex items-center grow justify-center gap-2 ${className}`}
    >
      <button
        type="button"
        className="size-[32px] flex items-center justify-center hover:bg-[#C1C1C1] rounded-lg transition duration-100 easy-in-out"
        onClick={decrementCount}
      >
        <svg
          width="14"
          height="2"
          viewBox="0 0 14 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H15"
            stroke="#2C2727"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <input
        type="text"
        className="flex-shrink-0 size-[32px] font-bold text-center rounded-md border border-gray p-1 text-[20px] leading-[120%] text-number-text"
        placeholder=""
        value={item.quantity}
        required
      />
      <button
        type="button"
        className="size-[32px] flex items-center justify-center hover:bg-[#C1C1C1] rounded-lg transition duration-100 easy-in-out"
        onClick={incrementCount}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1V15M1 8H15"
            stroke="#2C2727"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default observer(CounterControl);
