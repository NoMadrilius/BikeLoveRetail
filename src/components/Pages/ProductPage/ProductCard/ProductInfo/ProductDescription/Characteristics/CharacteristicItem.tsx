import Link from "next/link";
import React from "react";

interface CharacteristicItemProps {
  isLink: boolean;
  linkText?: string;
  href?: string;
  name: string;
}

const CharacteristicItem = ({
  isLink,
  linkText,
  href,
  name,
}: CharacteristicItemProps) => {
  return (
    <div className="flex gap-3 justify-between w-full">
      <span className="text-dark font-inter font-light leading-[19.2px] grow md:max-w-[160px]">
        {name}
      </span>
      {isLink && href ? (
        <Link
          href={href}
          className="cursor-pointer text-[#074FA5] font-inter leading-[19.36px] md:grow"
        >
          {linkText}
        </Link>
      ) : (
        <span className="text-dark font-inter leading-[19.2px] md:grow">
          {linkText}
        </span>
      )}
    </div>
  );
};

export default CharacteristicItem;
