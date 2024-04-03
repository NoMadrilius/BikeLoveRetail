import React, { useRef, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import ProductCard from "@/components/UIKit/Cards/ProductCard";
import NavigationButtons from "./NavigationButtons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwiperSliderProps {
  title: string;
  rightText: string;
}

const SwiperSlider = ({ title, rightText }: SwiperSliderProps) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  return (
    <section>
      <NavigationButtons
        goNext={goNext}
        goPrev={goPrev}
        isBeginning={isBeginning}
        isEnd={isEnd}
        rightText={rightText}
        title={title}
      />

      <div className="max-w-[988px]">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          style={{ display: "flex", gap: "20px" }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide style={{ maxWidth: "316px", width: "100%" }}>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "316px", width: "100%" }}>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "316px", width: "100%" }}>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "316px", width: "100%" }}>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "316px", width: "100%" }}>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperSlider;
