import React from "react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import SliderButtons from "./SliderButtons";
import Link from "next/link";
import { SvgRightIcon } from "@/components/UIKit/SVGIcons";

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
  hideText?: boolean;
  rightTextLink?:string
}

const NavigationButtons = ({
  goNext,
  goPrev,
  isBeginning,
  isEnd,
  rightText,
  rightTextLink,
  showButtons = true,
  justShowTitle = false,
  title,
  titleStyles,
  lineStyles,
  hideText = false,
}: NavigationButtonsProps) => {
  return (
    <div className="sm:mb-6 mb-8 flex sm:items-center items-center lg:justify-start md:gap-6 xl:gap-6 lg:gap-6 sm:gap-4">
      <SectionHeader title={title} titleStyles={titleStyles} />
      {showButtons && !justShowTitle ? (
        <SliderButtons
          onClickPrev={goPrev}
          onClickNext={goNext}
          disabledPrev={isBeginning}
          disabledNext={isEnd}
        />
      ) : null}
      {!justShowTitle && !hideText ? (
        <>
          <div
            className={`w-full h-[1px] bg-gray xl:block md:block lg:block hidden max-w-[226px] lg:max-w-[590px] ${lineStyles}`}
          />
          <Link
            href={rightTextLink??"#"}
            className="flex items-center gap-[18px] shrink-0 grow sm:py-[10.5px] py-2 px-3 group"
          >
            <span className="text-dark leading-[19px] cursor-pointer group-hover:text-link-pink">
              {rightText}
            </span>
            <SvgRightIcon className="group-hover:hidden block" />
            <SvgRightIcon
              color="#F9436B"
              className="group-hover:block hidden"
            />
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default NavigationButtons;
