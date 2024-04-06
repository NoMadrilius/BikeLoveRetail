import React, { useState } from "react";
import GradientButton from "../../Buttons/GradientButton";
import HamburgerMenu from "./HamburgerMenu";
import MobileHeader from "./MobileHeader";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import useBurgerMenuStore from "@/store/zustand/header.store";

const Header = () => {
  const isOpen = useBurgerMenuStore((state) => state.isOpen);

  return (
    <>
      <header className="py-5 bg-dark px-5 sm2:px-10 md:px-0 sm:justify-between">
        <div className="max-w-[1324px] mx-auto flex items-center gap-3 sm2:gap-8">
          {!isOpen ? <HamburgerMenu /> : null}

          {isOpen ? <MobileView /> : <DesktopView />}
        </div>
      </header>
      <div className="hidden grid-cols-2 lg:hidden md:grid h-full items-center gap-3 pt-3 px-10">
        <GradientButton label={"Каталог товарів"} />
        <GradientButton
          bgColor="#5D5555"
          label={"Майстерня"}
          showIcon={false}
        />
      </div>
      {isOpen ? <MobileHeader /> : null}
    </>
  );
};

export default Header;
