import Pagination from "@/components/UIKit/NavigationPanel/Pagination";
import useSlider from "@/helpers/hooks/useSlider";
import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SliderButtons from "../CustomSlider/NavigationButtons/SliderButtons";
import SectionHeader from "../CustomSlider/SectionHeader";
import FeedbackItem from "./FeedbackItem";

const Feedbacks = () => {
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
    <section className="max-w-[988px] overflow-hidden flex lg:flex-row flex-col gap-6 px-5 lg:px-0">
      <div className="flex flex-col justify-between shrink-0">
        <SectionHeader title={"Відгуки про магазин"} />
        <div className="hidden lg:flex flex-col">
          <SliderButtons
            onClickPrev={goPrev}
            onClickNext={goNext}
            disabledPrev={isBeginning}
            disabledNext={isEnd}
          />
          <Pagination
            currentIndex={currentIndex}
            totalSlides={5}
            className="lg:!block w-full mx-0"
          />
        </div>
      </div>
      <div className="max-w-[650px]">
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={20}
          onSlideChange={handleSlideChange}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            1440: {
              slidesPerView: 2,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((article, index) => (
            <SwiperSlide key={index}>
              <FeedbackItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Pagination
        currentIndex={currentIndex}
        totalSlides={5}
        className="block lg:!hidden w-full mx-0"
      />
    </section>
  );
};

export default Feedbacks;