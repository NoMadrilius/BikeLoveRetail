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
    <Image
      src={imgSrc}
      alt={"Cross"}
      width={12}
      height={12}
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};

export default CloseIcon;
