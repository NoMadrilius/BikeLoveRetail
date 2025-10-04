import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import SearchInput from "@/components/UIKit/InputFields/SearchInput";
import React from "react";
import LogoImage from "../LogoImage";
import NavigationIcons from "../NavigationIcons";
import PhoneNumberWithImage from "../PhoneNumberWithIcon";
import HamburgerMenu from "@/components/UIKit/NavigationPanel/Header/HamburgerMenu";
import {observer} from "mobx-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const DesktopView = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (n: boolean) => void;
}) => {
  const {t} = useTranslation("common")

  return (
    <div className={"flex justify-between w-full items-center"}>
      <HamburgerMenu />
      <LogoImage />

      <div className="flex gap-[12px] mob:hidden tab:hidden">
        <GradientButton
          label={t("Каталог товарів")}
          onClick={() => {
            setIsModalOpen(true);
          }}
          textstyles="!w-full "
          className="xl:shrink-0 lg:shrink-0 xl:py-3 xl:px-4 xl:py-3 xl:px-4 max-w-[193px] lg:max-w-[201px]"
        />
        <Link href={'/workshop'}>
          <GradientButton
            bgColor="bg-[#5D5555]"
            label={t("Майстерня")}
            showIcon={false}
            type={"secondary"}
            textstyles="!w-full xl:shrink-0"
            className="xl:!py-[14.5px] hover:bg-[#767070] xl:!px-4 xl:!max-w-[119px] lg:!py-[14.5px] lg:!px-4 lg:!max-w-[127px]"
          />
        </Link>
      </div>

      <SearchInput />
      <NavigationIcons />
      <PhoneNumberWithImage />
    </div>
  );
};

export default observer(DesktopView);
