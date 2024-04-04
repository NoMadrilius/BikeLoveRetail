import useBurgerMenuStore from "@/store/zustand/header.store";
import Image from "next/image";
import React from "react";

const UserProfile = () => {
  const saveAuthType = useBurgerMenuStore((state) => state.saveAuthType);

  return (
    <div className="flex items-center gap-2">
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
            className="leading-[19px] border-none text-white"
            onClick={() => saveAuthType("login")}
          >
            Вхід
          </button>
          <div className="w-[1px] bg-border-grey" />
          <button
            className="leading-[19px] border-none text-white"
            onClick={() => saveAuthType("registration")}
          >
            Реєстрація
          </button>
        </div>
        <p className="text-grey-text-header text-[14px] leading-[120%]">
          Авторизуйтесь для отримання розширених можливостей
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
