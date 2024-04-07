import Image from "next/image";
import React from "react";

interface GradientButtonProps {
  bgColor?: string;
  showIcon?: boolean;
  label: string;
  className?: string;
  onClick?: () => void;
}

const GradientButton = ({
  bgColor,
  showIcon = true,
  label,
  className,
  onClick,
}: GradientButtonProps) => {
  const buttonStyle = bgColor
    ? { backgroundColor: bgColor }
    : {
        backgroundImage: "linear-gradient(to bottom right, #F01B74, #FF6064)",
      };

  return (
    <button
      className={`flex items-center rounded-lg gap-3  py-3 px-5 leading-[19.36px] justify-center ${className}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {showIcon ? (
        <Image
          src={"/images/uikit/buttons/catalog.svg"}
          alt={"Каталог товарів"}
          width={16}
          height={16}
        />
      ) : null}

      {label}
    </button>
  );
};

export default GradientButton;
