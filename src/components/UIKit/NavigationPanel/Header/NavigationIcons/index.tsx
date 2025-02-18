"use client";
import Image from "next/image";
import React from "react";
import {useAppStore} from "@/store/AppStore";
import {useCartStore} from "@/store/CartStore";
import {observer} from "mobx-react";
import {useAuthStore} from "@/store/AuthStore";
import GeneratedUserIcon from "@/components/UIKit/GeneratedUserIcon/GeneratedUserIcon";
import {useRouter} from "next/router";

import personImage from "/public/images/uikit/header/person.svg";
import heartImage from "/public/images/uikit/header/white-heart.svg";
import cartImage from "/public/images/uikit/header/shopping-cart.svg";

const NavigationIcons = () => {
    const cs = useCartStore()
    const as = useAppStore()
    const us = useAuthStore()
    const r = useRouter()

    let cl = 0
    cl = cs.cart.length

  return (
    <div className="flex items-center ">
        {
            us.isAuth?
                <div onClick={n=>r.push("/account")}>
                    {
                        us.user&&<GeneratedUserIcon user={us.user}/>
                    }
                </div>
                :
                <div onClick={v=>as.setIsOpenAuthModal(true)} className="p-3 sm:hidden hover:bg-[#C1C1C133] rounded-lg">
                    <div className="relative size-[24px] md:block hidden lg:block xl:block 2xl:block cursor-pointer ">
                        <Image src={personImage} alt={"Person"} fill />
                    </div>
                </div>
        }
      <div className="p-3 sm:hidden hover:bg-[#C1C1C133] rounded-lg">
        <div className=" relative size-[24px] md:block hidden lg:block xl:block 2xl:block cursor-pointer">
          <Image
            src={heartImage}
            alt={"Favorites"}
            fill
          />
        </div>
      </div>
      <div onClick={()=>cs.setVisible(true)} className="p-3 hover:bg-[#C1C1C133] rounded-lg relative select-none cursor-pointer">
        <div className="size-[28px] xl:size-[24px] lg:size-[24px] relative block cursor-pointer">
          <Image
            src={cartImage}
            alt={"Shopping cart"}
            fill
            className="shrink-0"
          />
        </div>
        {cl>0 ? (
          <div className="size-[21px] flex items-center justify-center absolute top-0 right-0 bg-[#F9436B] rounded-full">
            <span className="text-[14px] leading-[120%]">{cl}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default observer(NavigationIcons);
