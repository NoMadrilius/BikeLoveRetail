import React, { useState } from "react";
import GradientButton from "../../Buttons/GradientButton";
import HamburgerMenu from "./HamburgerMenu";
import MobileHeader from "./MobileHeader";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(true);
  };
  const toggleMenuVisibilityHidden = () => {
    setIsMenuVisible(false);
  };

  return (
    <>
      <header className="py-5 bg-dark px-5 sm2:px-10 md:px-0">
        <div className="max-w-[1324px] mx-auto flex items-center gap-3 sm2:gap-8">
          {!isMenuVisible ? (
            <HamburgerMenu onClick={toggleMenuVisibility} />
          ) : null}

          {isMenuVisible ? (
            <MobileView onClick={toggleMenuVisibilityHidden} />
          ) : (
            <DesktopView />
          )}
        </div>
      </header>
      <div className="hidden grid-cols-2 lg:hidden sm:grid h-full items-center gap-3 pt-3 px-10">
        <GradientButton label={"Каталог товарів"} />
        <GradientButton
          bgColor="#5D5555"
          label={"Майстерня"}
          showIcon={false}
        />
      </div>
      {isMenuVisible ? <MobileHeader /> : null}
    </>
  );
};

export default Header;
