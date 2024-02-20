import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { styled } from "styled-components";
import BlurWrapper from "@/components/BlurWrapper/BlurWrapper";

const SliderProducts = ({ images }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgInModal, setImgInModal] = useState<string>("");
  const topSwiper = useRef(null);

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
  const handleClickBigImg = (img: string) => {
    setModalIsOpen(true);
    setImgInModal(img);
  };
  console.log(currentSlide);
  return (
    <>
      <Swiper
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        ref={topSwiper}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        navigation
      >
        {images?.map((slide: any) => (
          <SwiperSlide
            key={slide.id}
            style={{
              width: "auto",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <BigImg
              src={slide.url}
              alt={`Slide ${slide.id}`}
              onClick={() => handleClickBigImg(slide.url)}
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
      >
        {images?.map((slide: any, index: number) => (
          <SwiperSlide
            onClick={() => handleThumbnailClick(topSwiper, index)}
            key={slide.id}
            style={{
              width: "auto",
              height: "100%",
            }}
          >
            <img
              src={slide.url}
              alt={`Slide ${slide.id}`}
              style={{
                width: "84px",
                height: "58px",
                border: currentSlide === index ? "1px solid grey" : "none",
                borderRadius: "10px",
                cursor: "pointer",
                objectFit: "contain",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {modalIsOpen && (
        <BlurWrapper setModal={setModalIsOpen}>
          <ModalImg src={imgInModal} />
        </BlurWrapper>
      )}
    </>
  );
};

export default SliderProducts;
const BigImg = styled.img`
  width: 100%;
  aspect-ratio: 469/324;
  object-fit: contain;
`;
const ModalImg = styled.img`
  max-width: 100%;
  max-height: 100vh;
  padding: 10px 0;
`;
