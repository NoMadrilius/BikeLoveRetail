import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageLink = () => {
  return (
    <>
      <div className="relative w-full sm:w-[335px] sm:h-[194px] max-w-[382px] h-[415px] md:w-[322px] md:h-[327px] mx-auto xl:-left-[44px] xl:my-[60.5px] 2xl:my-[60.5px] lg:my-[60.5px] ">
        <Image
          src={"/images/homepage/static/guy.jpg"}
          alt={"Про нас"}
          fill
          className="rounded-lg shrink-0 h-[415px] object-cover mx-auto"
        />
      </div>
      <div className="hidden lg:flex xl:flex 2xl:flex items-center gap-2 shrink-0 mt-auto ml-auto">
        <Link href="#" className="text-dark leading-[19px] cursor-pointer">
          Дізнатись більше
        </Link>
        <Image
          src={"/images/homepage/icons/right-arrow.svg"}
          alt={"Right Arrow"}
          width={6}
          height={12}
          className="ml-auto shrink-0"
        />
      </div>
    </>
  );
};

export default ImageLink;
