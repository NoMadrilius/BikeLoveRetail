import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SvgRightIcon } from "@/components/UIKit/SVGIcons";

const ImageLink = () => {
  return (
    <>
      <div className="relative w-full sm:w-[335px] sm:h-[194px] xl:max-w-[382px] max-w-[382px] h-[415px] md:w-[322px] md:h-[327px] mx-auto xl:-left-[44px] xl:my-[60.5px] 2xl:my-[60.5px] lg:my-[60.5px] ">
        <Image
          src={"/images/homepage/static/guy.jpg"}
          alt={"Про нас"}
          fill
          className="rounded-lg shrink-0 h-[415px] object-cover mx-auto"
        />
      </div>
      <Link
        href="#"
        className="group hidden cursor-pointer lg:flex xl:flex 2xl:flex items-center gap-2 shrink-0 mt-auto ml-auto xl:absolute lg:absolute lg:right-[31px] lg:bottom-[30px] xl:right-[31px] xl:bottom-[30px]"
      >
        <span className="text-dark leading-[19px] cursor-pointer group-hover:text-link-pink">
          Дізнатись більше
        </span>
        <SvgRightIcon className="group-hover:hidden block" />
        <SvgRightIcon color="#F9436B" className="group-hover:block hidden" />
      </Link>
    </>
  );
};

export default ImageLink;
