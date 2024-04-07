import React from "react";
import Image from "next/image";

const PhoneNumberWithImage = () => {
  return (
    <a
      href={`tel:+38 (093) 211 - 89 - 30`}
      className="flex items-center text-white gap-2 px-3 py-2 cursor-pointer"
    >
      <div className="relative size-[32px] sm2:w-6 sm2:h-6">
        <Image
          src="/images/uikit/header/phone.svg"
          alt="Phone Icon"
          fill
          objectFit="cover"
        />
      </div>
      <p className="text-base font-normal mr-2 md:hidden sm:hidden lt:hidden lg:block">
        +38 (093) 211 - 89 - 30
      </p>
    </a>
  );
};

export default PhoneNumberWithImage;
