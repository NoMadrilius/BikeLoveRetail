import Image from "next/image";
import React from "react";

const CloseIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <Image
      src={"/images/homepage/icons/cross.svg"}
      alt={"Cross"}
      width={12}
      height={12}
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};

export default CloseIcon;
