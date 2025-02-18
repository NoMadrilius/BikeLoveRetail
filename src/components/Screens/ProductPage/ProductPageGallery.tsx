import React, { useRef, useState } from "react";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import { ProductPageData } from "@/dataTransferObjects/response/productPage/ProductPageData";
import { LeftIconSVG, RightIconSVG } from "@/components/UIKit/SVGIcons";
import Image from "next/image";
import Pagination from "@/components/UIKit/NavigationPanel/Pagination";
import ModalBase from "@/components/Modal/ModalBase/ModalBase";
import FullScreenGallery from "@/components/Pages/ProductPage/ProductCard/ProductImage/FullScreenGallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import noImage from "/public/images/no-image.svg";

const ProductPageGallery = ({p}:{p:ProductPageData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex);
  };

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
    setThumbsSwiper(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="p-2  sm:bg-white md:bg-white md2:bg-transparent rounded-lg w-full  md2:max-w-[568px] xl:max-w-[700px] lg:max-w-[768px] md2:p-0 md2:sticky top-20 ">
      <div className="flex flex-col gap-1 items-start md:flex-row md:items-center md:justify-between md2:hidden">
        {p.product.oldPrice > p.product.price && (
          <RoundedButton
            text="Акція"
            altText={"Shopping Cart"}
            bgColor={
              "bg-pink shadow-product-card py-[6.5px] px-2 md:order-1 z-[0]"
            }
            onClick={function(): void {
            }}
          />
        )}
        <h1 className="text-dark leading-[28.13px] text-[24px] font-robot-c font-medium">
          {p.product.name}
        </h1>
      </div>
      <>
        <section className="w-full">
          <div className=" w-full h-full xl:mx-auto max-w-6xl">
            {/* Main Image Swiper */}
            <div className="h-[500px] w-full flex items-center justify-center bg-white md:bg-transparent md2:bg-white md2:px-1 relative rounded-lg ">
              {(p.product.oldPrice??0) >
                (p.product.price??0) && (
                  <RoundedButton
                    text="Акція"
                    altText={"Shopping Cart"}
                    bgColor={
                      "bg-pink shadow-product-card py-[6.5px] px-2 md:order-1 absolute top-5 left-5 z-[5] sm:hidden md:hidden md2:block"
                    }
                    onClick={function (): void {}}
                  />
                )}
              <div
                ref={prevRef}
                className="sm:hidden p-3 hover:bg-gray rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
              >
                <LeftIconSVG />
              </div>
              <Swiper
                loop={false}
                pagination={{ clickable: true }}
                centeredSlides={true}
                grabCursor={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                // onBeforeInit={(swiper: any) => {
                //   swiper.params.navigation.prevEl = prevRef.current;
                //   swiper.params.navigation.nextEl = nextRef.current;
                // }}
                onSlideChange={handleSlideChange}
                className="cursor-pointer !w-full "
                onClick={openModal}
              >
                {p.images.map((p, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full desc:m-auto">
                      <Image priority={true}
                             src={p.url??noImage}
                             alt="image"
                             fill
                             className="object-contain"
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
              {p.images.map((p, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative w-full h-[100px] bg-white rounded-lg overflow-hidden ${
                      index === currentIndex
                        ? "border border-[#6B6B6B]"
                        : "rounded-lg"
                    }`}
                  >
                    <Image src={p.url} alt="kwa" fill className="object-contain"/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {p.images?.length??0 > 1 ? (
            <Pagination
              currentIndex={currentIndex}
              totalSlides={p.images.length}
              className="block md2:!hidden w-full mx-0 sm:mb-4 md:mb-4 sm:mt-0 md:mt-0"
            />
          ) : null}
        </section>

        <ModalBase open={isModalOpen} setOpen={setIsModalOpen}>
          <FullScreenGallery
            isOpen={isModalOpen}
            onClose={closeModal}
            images={p.images}
            currentIndex={currentIndex}
            handleSlideChange={handleSlideChange}
          />
        </ModalBase>
      </>
    </section>
  );
};

export default ProductPageGallery;