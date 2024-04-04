import Image from "next/image";
import React from "react";
import LogoImage from "../LogoImage";
import UserProfile from "../MobileHeader/UserProfile";
import CloseIcon from "./CloseIcon";

interface MobileViewProps {
  onClick: () => void;
}

const MobileView = ({ onClick }: MobileViewProps) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full py-[7px]">
        <LogoImage classname="!mx-0" />
        <CloseIcon onClick={onClick} />
      </div>
      <UserProfile />
    </div>
  );
};

export default MobileView;
