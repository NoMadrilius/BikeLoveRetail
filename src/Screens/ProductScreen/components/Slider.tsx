import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

const SliderProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const topSwiper = useRef(null);

  const slidesData = [
    // Замените это вашими данными для слайдов
    { id: 1, image: "/mock/testCardByPropose.png" },
    { id: 2, image: "/mock/testNews.png" },
    { id: 3, image: "/mock/testCardByPropose.png" },
    { id: 4, image: "/mock/testNews.png" },
    { id: 5, image: "/mock/testCardByPropose.png" },
    { id: 6, image: "/mock/testNews.png" },
  ];

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };
  const handleThumbnailClick = (swiper: any, index: number) => {
    setCurrentSlide(index);
    //@ts-ignore
    if (swiper.current && swiper.current.swiper) {
      //@ts-ignore
      swiper.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        ref={topSwiper}
      >
        {slidesData.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{
              width: "auto",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              width={"70%"}
              style={{ margin: "0 auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={"auto"} // Измените количество отображаемых слайдов по вашему усмотрению
        onSlideChange={handleSlideChange}
        loop
        pagination={{ clickable: true }}
        navigation
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            onClick={() => handleThumbnailClick(topSwiper, index)}
            key={slide.id}
            style={{
              width: "auto",
              height: "100%",
            }}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              style={{
                width: "110px",
                height: "75px",
                border:
                  currentSlide === slide.id - 1 ? "1px solid grey" : "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderProducts;
