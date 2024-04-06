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
}: NavigationButtonsProps) => {
  return (
    <div className="mb-8 flex items-center justify-between lg:justify-start lg:gap-6">
      <SectionHeader title={title} />
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
          <div className="flex items-center gap-2 shrink-0">
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
