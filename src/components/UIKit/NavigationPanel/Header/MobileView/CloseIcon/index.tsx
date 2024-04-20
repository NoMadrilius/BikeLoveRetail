import Image from "next/image";
import React from "react";

interface CloseIconProps {
  onClick: () => void;
  imgSrc?: string;
}

const CloseIcon = ({
  onClick,
  imgSrc = "/images/homepage/icons/cross.svg",
}: CloseIconProps) => {
  return (
    <div
      className="p-2 cursor-pointer hover:bg-[#C1C1C133] rounded-lg flex items-center justify-center"
      onClick={onClick}
    >
      <Image src={imgSrc} alt={"Cross"} width={12} height={12} />
    </div>
  );
};

export default CloseIcon;
