import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import SearchInput from "@/components/UIKit/InputFields/SearchInput";
import React from "react";
import LogoImage from "../LogoImage";
import NavigationIcons from "../NavigationIcons";
import PhoneNumberWithImage from "../PhoneNumberWithIcon";
import HamburgerMenu from "@/components/UIKit/NavigationPanel/Header/HamburgerMenu";

const DesktopView = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (n: boolean) => void;
}) => {
  return (
    <div className={"flex justify-between w-full"}>
        <HamburgerMenu />
        <LogoImage />

        <div className="flex gap-[12px] mob:hidden tab:hidden">
        <GradientButton
          label={"Каталог товарів"}
          onClick={() => {
            setIsModalOpen(true);
          }}
          textstyles="!w-full "
          className="xl:shrink-0 lg:shrink-0 xl:py-3 xl:px-4 xl:py-3 xl:px-4 max-w-[193px] lg:max-w-[201px]"
        />
        <GradientButton
          bgColor="bg-[#5D5555]"
          label={"Майстерня"}
          showIcon={false}
          type={"secondary"}
          textstyles="!w-full xl:shrink-0"
          className="xl:!py-[14.5px] hover:bg-[#767070] xl:!px-4 xl:!max-w-[119px] lg:!py-[14.5px] lg:!px-4 lg:!max-w-[127px]"
          // textstyles="w-auto"
        />
      </div>


      <SearchInput />
      <NavigationIcons />
      <PhoneNumberWithImage />
    </div>
  );
};

export default DesktopView;
