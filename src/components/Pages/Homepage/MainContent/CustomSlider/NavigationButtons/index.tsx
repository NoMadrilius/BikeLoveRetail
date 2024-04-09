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
  lineStyles?: string;
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
  lineStyles,
}: NavigationButtonsProps) => {
  return (
    <div className="sm:mb-6 mb-8 flex sm:items-start items-center lg:justify-start xl:gap-6 lg:gap-6 sm:gap-4">
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
          <div
            className={`w-full h-[1px] bg-gray xl:block lg:block hidden max-w-[226px] ${lineStyles}`}
          />
          <div className="flex gap-[18px] shrink-0 grow sm:py-[10.5px] py-2 px-3">
            <Link href="#" className="text-dark leading-[19px] cursor-pointer">
              {rightText}
            </Link>
            <Image
              src={"/images/homepage/icons/right-arrow.svg"}
              alt={"Right Arrow"}
              width={6}
              height={12}
              className="shrink-0"
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default NavigationButtons;
