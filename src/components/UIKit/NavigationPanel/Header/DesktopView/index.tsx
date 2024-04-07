import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import SearchInput from "@/components/UIKit/InputFields/SearchInput";
import React from "react";
import LogoImage from "../LogoImage";
import NavigationIcons from "../NavigationIcons";
import PhoneNumberWithImage from "../PhoneNumberWithIcon";

const DesktopView = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (b: boolean) => void;
}) => {
  return (
    <>
      <LogoImage />
      <div className="hidden sm2:flex h-full gap-3 xl:flex lg:flex 2xl:flex min-h-[48px]">
        <GradientButton
          label={"Каталог товарів"}
          onClick={() => setIsModalOpen(true)}
        />
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
