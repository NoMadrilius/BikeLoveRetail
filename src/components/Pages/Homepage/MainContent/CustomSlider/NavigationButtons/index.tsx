import React from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import SliderButtons from "./SliderButtons";
import Link from "next/link";

interface NavigationButtonsProps {
  goNext?: () => void;
  goPrev?: () => void;
  isBeginning?: boolean;
  isEnd?: boolean;
  rightText?: string;
  showButtons?: boolean;
  justShowTitle?: boolean;
  title: string;
  titleStyles?: string;
}

const NavigationButtons = ({
  goNext,
  goPrev,
  isBeginning,
  isEnd,
  rightText,
  showButtons = true,
  justShowTitle = false,
  title,
  titleStyles,
}: NavigationButtonsProps) => {
  return (
    <div className="sm:mb-6 mb-8 flex sm:items-start items-center lg:justify-start lg:gap-6 sm:gap-4">
      <SectionHeader title={title} titleStyles={titleStyles} />
      {showButtons && !justShowTitle ? (
        <SliderButtons
          onClickPrev={goPrev}
          onClickNext={goNext}
          disabledPrev={isBeginning}
          disabledNext={isEnd}
        />
      ) : null}
      {!justShowTitle ? (
        <>
          <div className="w-full h-[1px] bg-gray lg:block hidden" />
          <div className="flex gap-2 shrink-0 grow sm:py-[10.5px]">
            <Link href="#" className="text-dark leading-[19px] cursor-pointer">
              {rightText}
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
      ) : null}
    </div>
  );
};

export default NavigationButtons;
