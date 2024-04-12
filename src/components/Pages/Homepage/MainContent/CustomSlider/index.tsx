import React, { useRef, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import ProductCard from "@/components/UIKit/Cards/ProductCard";
import NavigationButtons from "./NavigationButtons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination as P } from "swiper/modules";
import Pagination from "@/components/UIKit/NavigationPanel/Pagination";
import useSlider from "@/helpers/hooks/useSlider";
SwiperCore.use([P]);

interface SwiperSliderProps {
  title: string;
  rightText: string;
  lineStyles?: string;
}

const SwiperSlider = ({ title, rightText, lineStyles }: SwiperSliderProps) => {
  const {
    swiperRef,
    isBeginning,
    isEnd,
    currentIndex,
    goNext,
    goPrev,
    handleSlideChange,
  } = useSlider(0, 6);

  return (
    <section>
      <NavigationButtons
        goNext={goNext}
        goPrev={goPrev}
        isBeginning={isBeginning}
        isEnd={isEnd}
        rightText={rightText}
        title={title}
        lineStyles={lineStyles}
      />

      <div className="max-w-[988px] xl:max-w-[864px] relative">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          style={{ display: "flex", gap: "2px" }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 3,
            },
          }}
          className="swiper-custom"
        >
          {[1, 2, 3, 4, 5, 6].map((el, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[159px] w-full lg:!max-w-[316px] xl:max-w-[274.67px]"
            >
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
        <Pagination currentIndex={currentIndex} totalSlides={4} />
      </div>
    </section>
  );
};

export default SwiperSlider;
