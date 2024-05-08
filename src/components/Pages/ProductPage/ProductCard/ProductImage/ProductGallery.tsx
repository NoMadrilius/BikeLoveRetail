import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Pagination from "@/components/UIKit/NavigationPanel/Pagination";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { LeftIconSVG, RightIconSVG } from "@/components/UIKit/SVGIcons";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";

const ProductGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="">
      <div className="xl:mx-auto max-w-6xl">
        {/* Main Image Swiper */}
        <div className="flex items-center justify-center bg-white md:bg-transparent md2:bg-white md2:px-1 relative rounded-lg">
          <RoundedButton
            text="Акція"
            altText={"Shopping Cart"}
            bgColor={
              "bg-pink shadow-product-card py-[6.5px] px-2 md:order-1 absolute top-5 left-5 z-[10000] sm:hidden md:hidden md2:block"
            }
            onClick={function (): void {}}
          />
          <div
            ref={prevRef}
            className="sm:hidden p-3 hover:bg-gray rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
          >
            <LeftIconSVG />
          </div>
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            centeredSlides={true}
            grabCursor={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={handleSlideChange}
            className="breakpoint"
          >
            {[1, 2, 3, 4, 5, 6].map((p, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[380px] md2:max-w-[432px] md2:m-auto">
                  <Image
                    src={"/images/homepage/static/bike.png"}
                    alt=""
                    layout="fill"
                    className="sm:object-contain md:object-contain object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            ref={nextRef}
            className="sm:hidden p-3 hover:bg-gray rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
          >
            <RightIconSVG />
          </div>
        </div>
        {/* Thumbnails Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mt-5 hidden sm:!hidden md:!hidden md2:!block"
        >
          {[1, 2, 3, 4, 5, 6].map((p, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative w-full h-[100px] bg-white rounded-lg overflow-hidden ${
                  index === currentIndex
                    ? "border border-[#6B6B6B]"
                    : "rounded-lg"
                }`}
              >
                <Image
                  src={"/images/homepage/static/bike.png"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Pagination
        currentIndex={currentIndex}
        totalSlides={6}
        className="block md2:!hidden w-full mx-0 sm:mb-4 md:mb-4 sm:mt-0 md:mt-0"
      />
    </section>
  );
};

export default ProductGallery;
