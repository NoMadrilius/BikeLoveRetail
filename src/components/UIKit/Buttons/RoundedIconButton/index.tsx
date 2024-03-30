import React from "react";
import Image from "next/image";

interface RoundedButtonProps {
  bgColor: string;
  imageUrl?: string;
  altText?: string;
  text?: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  bgColor,
  imageUrl,
  altText,
  text = "",
}: RoundedButtonProps) => {
  return (
    <div className={`z-[1] p-[13px] rounded-full ${bgColor}`}>
      {text.length === 0 && imageUrl && altText ? (
        <Image src={imageUrl} alt={altText} width={21.5} height={21.5} />
      ) : (
        <span className="text-white text-base leading-[19px font-semibold">
          {text}
        </span>
      )}
    </div>
  );
};

export default RoundedButton;
