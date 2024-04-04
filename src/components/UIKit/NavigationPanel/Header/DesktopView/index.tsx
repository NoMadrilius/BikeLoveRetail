import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import SearchInput from "@/components/UIKit/InputFields/SearchInput";
import React from "react";
import LogoImage from "../LogoImage";
import NavigationIcons from "../NavigationIcons";
import PhoneNumberWithImage from "../PhoneNumberWithIcon";

const DesktopView = () => {
  return (
    <>
      <LogoImage />
      <div className="hidden sm2:flex h-full items-center gap-3">
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
    </>
  );
};

export default DesktopView;
