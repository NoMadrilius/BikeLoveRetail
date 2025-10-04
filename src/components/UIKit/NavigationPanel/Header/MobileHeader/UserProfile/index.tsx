import Image from "next/image";
import React from "react";
import { useAppStore } from "@/store/AppStore";
import { useAuthStore } from "@/store/AuthStore";
import { observer } from "mobx-react";
import GeneratedUserIcon from "@/components/UIKit/GeneratedUserIcon/GeneratedUserIcon";
import { LogOutIconSVG } from "@/components/UIKit/SVGIcons";
import { useTranslation } from "next-i18next";

const UserProfile = () => {
  const as = useAppStore();
  const us = useAuthStore();

  const {t} = useTranslation("common")

  return us.isAuth && us.user ? (
    <div className="flex gap-3 items-center">
      <GeneratedUserIcon user={us.user} />
      <div className="flex gap-3 grow">
        <span>
          {us.user.firstName} {us.user.lastName}
        </span>
      </div>
      <div
        className="p-3 cursor-pointer hover:bg-[#C1C1C133] rounded-lg"
        onClick={() => us.logout()}
      >
        <LogOutIconSVG />
      </div>
    </div>
  ) : (
    <div
      className="flex items-center gap-2"
      onClick={() => as.setIsOpenAuthModal(true)}
    >
      <div className="shrink-0 relative w-[48px] h-[48px] bg-user-profile flex items-center justify-center rounded-full">
        <Image
          src={"/images/homepage/icons/user-profile.svg"}
          alt={"User Profile"}
          width={24}
          height={24}
        />
      </div>
      <div className="px-5 flex flex-col gap-1">
        <div className="flex gap-3">
          <button
            className="leading-[19px] border-none text-white hover:text-link-pink"
            onClick={() => as.setIsAuthRegMod(false)}
          >
            {t("Вхід")}
          </button>
          <div className="w-[1px] bg-border-grey" />
          <button
            className="leading-[19px] border-none text-white hover:text-link-pink"
            onClick={() => as.setIsAuthRegMod(true)}
          >
            {t("Реєстрація")}
          </button>
        </div>
        <p className="text-grey-text-header text-[14px] leading-[120%]">
          Авторизуйтесь для отримання розширених можливостей
        </p>
      </div>
    </div>
  );
};

export default observer(UserProfile);
