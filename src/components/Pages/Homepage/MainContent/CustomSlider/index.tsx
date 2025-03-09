import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/UIKit/Cards/ProductCard";
import NavigationButtons from "./NavigationButtons";
import useSlider from "@/helpers/hooks/useSlider";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CatalogPageProduct } from "@/dataTransferObjects/response/catalogPage/CatalogPageProduct";
import CatalogPageProductCard from "@/components/Screens/CatalogPage/CatalogPageProductCard";

interface SwiperSliderProps {
  title: string;
  rightText: string;
  lineStyles?: string;
  products: CatalogPageProduct[];
  justShowTitle?: boolean;
  hideText?: boolean;
  className?: string;
}

const SwiperSlider = ({
  title,
  rightText,
  lineStyles,
  products,
  justShowTitle,
  hideText,
  className,
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
    <section className="overflow-hidden">
      <NavigationButtons
        goNext={goNext}
        goPrev={goPrev}
        isBeginning={isBeginning}
        isEnd={isEnd}
        rightText={rightText}
        title={title}
        lineStyles={lineStyles}
        justShowTitle={justShowTitle}
        hideText={hideText}
      />

      <div
        className={`max-w-[988px]  md:!max-w-full sm:max-w-full xl:max-w-[864px] relative ${className}`}
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={16}
          onSlideChange={handleSlideChange}
          breakpoints={{
            375: { slidesPerView: 2 },
            744: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          className="overflow-hidden"
        >
          {products.map((el, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[159px] w-full md:!max-w-[322px] lg:!max-w-[316px] xl:max-w-[274.67px]"
            >
              <CatalogPageProductCard p={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperSlider;
