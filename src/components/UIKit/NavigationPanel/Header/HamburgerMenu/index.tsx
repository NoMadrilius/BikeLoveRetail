import Image from "next/image";
import React from "react";
import {useAppStore} from "@/store/AppStore";

const HamburgerMenu = () => {
  const as = useAppStore()
  return (
    <button
      className="p-2 flex md:hidden xl:hidden lg:hidden 2xl:hidden shrink-0"
      onClick={() => {as.setIsOpenSidebar(!as.isOpenSidebar)}
    }
    >
      <Image
        src={"/images/uikit/header/burger-icon.svg"}
        alt={"Burger Icon"}
        width={32}
        height={32}
      />
    </button>
  );
};

export default HamburgerMenu;
