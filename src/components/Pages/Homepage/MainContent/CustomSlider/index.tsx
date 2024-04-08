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
}

const SwiperSlider = ({ title, rightText }: SwiperSliderProps) => {
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
    <section className="px-5 lg:px-0">
      <NavigationButtons
        goNext={goNext}
        goPrev={goPrev}
        isBeginning={isBeginning}
        isEnd={isEnd}
        rightText={rightText}
        title={title}
      />

      <div className="max-w-[988px] relative">
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
          }}
          className="swiper-custom"
        >
          {[1, 2, 3, 4].map((el, index) => (
            <SwiperSlide
              key={index}
              style={{ maxWidth: "316px", width: "100%" }}
              className="!max-w-[159px] lg:!max-w-[316px]"
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
