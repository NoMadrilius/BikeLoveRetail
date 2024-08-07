import React from "react";
import Image from "next/image";

const PhoneNumberWithImage = () => {
  return (
    <a
      href={`tel:+38 (093) 211 - 89 - 30`}
      className="flex items-center text-white gap-2 px-3 py-2 cursor-pointer sm:ml-2 shrink-0 sm:hover:bg-[#C1C1C133] md:hover:bg-[#C1C1C133] rounded-lg"
    >
      <div className="relative size-[32px] xl:size-[24px] lg:size-[24px] sm:size-[28px]  xl:shrink-0">
        <Image src="/images/uikit/header/phone.svg" alt="Phone Icon" fill />
      </div>
      <p className="text-[16px] leading-[19.36px] font-normal xl:mr-0 mr-2 lg:mr-0 md:hidden sm:hidden lt:hidden lg:block hover:text-link-pink">
        +38 (093) 211 - 89 - 30
      </p>
    </a>
  );
};

export default PhoneNumberWithImage;
