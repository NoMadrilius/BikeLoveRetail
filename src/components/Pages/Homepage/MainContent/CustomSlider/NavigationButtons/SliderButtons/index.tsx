import React from "react";
import Image from "next/image";
import { SvgRightIcon } from "@/components/UIKit/SVGIcons";

interface SliderButtonsProps {
  onClickPrev?: () => void;
  onClickNext?: () => void;
  disabledPrev?: boolean;
  disabledNext?: boolean;
}

const SliderButtons = ({
  onClickPrev,
  onClickNext,
  disabledPrev,
  disabledNext,
}: SliderButtonsProps) => {
  return (
    <div className="sm:hidden flex items-center gap-4">
      <button
        className={`w-[48px] h-[48px] shrink-0 flex items-center justify-center rounded-full transform scale-[-1] group ${
          disabledPrev
            ? "border border-gray bg-transparent "
            : "shadow-custom bg-white hover:bg-[#FA6989] "
        }`}
        onClick={onClickPrev}
        disabled={disabledPrev}
        style={{ opacity: disabledPrev ? 0.5 : 1 }}
      >
        <SvgRightIcon
          color="black"
          className={`${
            disabledPrev ? "group-hover:block" : "group-hover:hidden block"
          }  ml-0`}
          h={12}
          w={6}
        />
        <SvgRightIcon
          color="#fff"
          className={`${
            disabledPrev ? "group-hover:hidden" : "group-hover:block hidden"
          } hidden ml-0`}
          h={12}
          w={6}
        />
      </button>
      <button
        className={`size-[48px] shrink-0 flex items-center justify-center rounded-full group ${
          disabledNext
            ? "border border-gray bg-transparent hover:shadow-custom"
            : "shadow-custom bg-white hover:bg-[#FA6989] "
        }`}
        onClick={onClickNext}
        disabled={disabledNext}
        style={{ opacity: disabledNext ? 0.5 : 1 }}
      >
        <SvgRightIcon
          color="black"
          className={`${
            disabledNext ? "group-hover:block" : "group-hover:hidden block"
          }  ml-0 transform rotate-[-180]`}
          h={12}
          w={6}
        />
        <SvgRightIcon
          color="#fff"
          className={`${
            disabledNext ? "group-hover:hidden" : "group-hover:block hidden"
          } hidden ml-0 transform rotate-[-180]`}
          h={12}
          w={6}
        />
      </button>
    </div>
  );
};

export default SliderButtons;
