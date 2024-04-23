import Image from "next/image";
import React from "react";
import {useAppStore} from "@/store/AppStore";
import {useCartStore} from "@/store/CartStore";
import {observer} from "mobx-react";

const NavigationIcons = () => {
    const cs = useCartStore()
  return (
    <div className="flex items-center ">
      <div className="p-3 sm:hidden hover:bg-[#C1C1C133] rounded-lg">
        <div className="relative size-[24px] md:block hidden lg:block xl:block 2xl:block cursor-pointer ">
          <Image src={"/images/uikit/header/person.svg"} alt={"Person"} fill />
        </div>
      </div>

      <div className="p-3 sm:hidden hover:bg-[#C1C1C133] rounded-lg">
        <div className=" relative size-[24px] md:block hidden lg:block xl:block 2xl:block cursor-pointer">
          <Image
            src={"/images/uikit/header/white-heart.svg"}
            alt={"Favorites"}
            fill
          />
        </div>
      </div>
      <div onClick={()=>cs.setVisible(true)} className="p-3 hover:bg-[#C1C1C133] rounded-lg relative select-none cursor-pointer">
        <div className="size-[28px] xl:size-[24px] lg:size-[24px] relative block cursor-pointer">
          <Image
            src={"/images/uikit/header/shopping-cart.svg"}
            alt={"Shopping cart"}
            fill
            className="shrink-0"
          />
        </div>
        {cs.cart.length>0 ? (
          <div className="size-[21px] flex items-center justify-center absolute top-0 right-0 bg-[#F9436B] rounded-full">
            <span className="text-[14px] leading-[120%]">{cs.cart.length}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default observer(NavigationIcons);
