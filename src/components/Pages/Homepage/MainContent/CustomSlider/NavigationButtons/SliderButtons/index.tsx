import React from "react";
import Image from "next/image";

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
    <div className="flex items-center gap-4">
      <button
        className={`w-[48px] h-[48px] shrink-0 flex items-center justify-center rounded-full transform scale-[-1] ${
          disabledPrev
            ? "border border-gray bg-transparent"
            : "shadow-custom bg-white"
        }`}
        onClick={onClickPrev}
        disabled={disabledPrev}
        style={{ opacity: disabledPrev ? 0.5 : 1 }}
      >
        <Image
          src={"/images/homepage/icons/right-arrow.svg"}
          alt={"Left Arrow"}
          width={10}
          height={10}
          className="shrink-0"
        />
      </button>
      <button
        className={`size-[48px] shrink-0 flex items-center justify-center rounded-full ${
          disabledNext
            ? "border border-gray bg-transparent"
            : "shadow-custom bg-white"
        }`}
        onClick={onClickNext}
        disabled={disabledNext}
        style={{ opacity: disabledNext ? 0.5 : 1 }}
      >
        <Image
          src={"/images/homepage/icons/right-arrow.svg"}
          alt={"Right Arrow"}
          width={10}
          height={10}
          className="shrink-0"
        />
      </button>
    </div>
  );
};

export default SliderButtons;
