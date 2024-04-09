import React from "react";
import Image from "next/image";

interface RoundedButtonProps {
  bgColor: string;
  imageUrl?: string;
  altText?: string;
  text?: string;
  size?: number;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  bgColor,
  imageUrl,
  size = 21.5,
  altText,
  text = "",
}: RoundedButtonProps) => {
  return (
    <div className={`z-[1] p-[13px] rounded-full ${bgColor}`}>
      {text.length === 0 && imageUrl && altText ? (
        <Image src={imageUrl} alt={altText} width={size} height={size} />
      ) : (
        <span className="text-white text-[16px] leading-[19px] font-semibold font-inter">
          {text}
        </span>
      )}
    </div>
  );
};

export default RoundedButton;
