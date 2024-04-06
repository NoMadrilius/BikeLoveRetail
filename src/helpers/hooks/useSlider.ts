import { useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

const useSlider = (initialIndex = 0, totalSlides = 0) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

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
      setCurrentIndex(swiperRef.current.swiper.realIndex);
    }
  };

  return {
    swiperRef,
    isBeginning,
    isEnd,
    currentIndex,
    goNext,
    goPrev,
    handleSlideChange,
  };
};

export default useSlider;
