import React, { useRef, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/UIKit/Cards/ProductCard";
import NavigationButtons from "./NavigationButtons";
import Pagination from "@/components/UIKit/NavigationPanel/Pagination";
import useSlider from "@/helpers/hooks/useSlider";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination as P } from "swiper/modules";
SwiperCore.use([P]);

interface SwiperSliderProps {
  title: string;
  rightText: string;
  lineStyles?: string;
  products: ProductFullData[];
}

const SwiperSlider = ({
  title,
  rightText,
  lineStyles,
  products,
}: SwiperSliderProps) => {
  const {
    swiperRef,
    isBeginning,
    isEnd,
    currentIndex,
    goNext,
    goPrev,
    handleSlideChange,
  } = useSlider(0, products.length - 1);

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

      <div className="max-w-[988px]  md:!max-w-[664px] sm:max-w-[335px] xl:max-w-[864px] relative">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={16}
          onSlideChange={handleSlideChange}
          breakpoints={{
            375: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {products.map((el, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[159px] w-full  md:!max-w-[322px] lg:!max-w-[316px] xl:max-w-[274.67px]"
            >
              <ProductCard product={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Pagination
        currentIndex={currentIndex}
        totalSlides={products.length - 1}
      />
    </section>
  );
};

export default SwiperSlider;
