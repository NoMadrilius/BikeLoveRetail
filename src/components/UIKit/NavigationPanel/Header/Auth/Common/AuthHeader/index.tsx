import React from "react";
import CloseIcon from "../../../MobileView/CloseIcon";
import {observer} from "mobx-react";
import {useAppStore} from "@/store/AppStore";

interface AuthHeaderProps {
  title: string;
}

const AuthHeader = ({ title }: AuthHeaderProps) => {
    const as = useAppStore()

  return (
    <div className="flex items-center px-5 py-5 justify-between">
      <h3 className="text-[20px] font-bold leading-[120%] text-dark-text">
        {title}
      </h3>
      <CloseIcon
        imgSrc="/images/homepage/icons/black-cross.svg"
        onClick={() => as.setIsOpenAuthModal(false)}
      />
    </div>
  );
};

export default observer(AuthHeader);
