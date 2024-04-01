import React from "react";
import GradientButton from "../../Buttons/GradientButton";
import SearchInput from "../../InputFields/SearchInput";
import HamburgerMenu from "./HamburgerMenu";
import LogoImage from "./LogoImage";
import NavigationIcons from "./NavigationIcons";
import PhoneNumberWithImage from "./PhoneNumberWithIcon";

const Header = () => {
  return (
    <>
      <header className="py-5 bg-dark px-5 sm2:px-10 md:px-0">
        <div className="max-w-[1324px] mx-auto flex items-center gap-3 sm2:gap-8">
          <HamburgerMenu />
          <LogoImage />
          <div className="hidden sm2:flex h-full items-center gap-3 ">
            <GradientButton label={"Каталог товарів"} />
            <GradientButton
              bgColor="#5D5555"
              label={"Майстерня"}
              showIcon={false}
            />
          </div>
          <SearchInput />
          <NavigationIcons />
          <PhoneNumberWithImage />
        </div>
      </header>
      <div className="hidden  grid-cols-2 lg:hidden sm:grid h-full items-center gap-3 pt-3 px-10">
        <GradientButton label={"Каталог товарів"} />
        <GradientButton
          bgColor="#5D5555"
          label={"Майстерня"}
          showIcon={false}
        />
      </div>
    </>
  );
};

export default Header;
