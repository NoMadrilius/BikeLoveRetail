import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  LeftIconArrow,
  LeftIconSVG,
  RightIconArrow,
  RightIconSVG,
} from "@/components/UIKit/SVGIcons";
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import { RxCross2 } from "react-icons/rx";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import { useProductPageStore } from "@/store/ProductPageStore";

interface FullScreenGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string }[];
  currentIndex: number;
  handleSlideChange: (swiper: any) => void;
}

const FullScreenGallery: React.FC<FullScreenGalleryProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  handleSlideChange,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const ps = useProductPageStore();

  if (!ps.product || ps.product.productImages.length < 1) return null;

  return (
    <div className="w-[80%] max-w-[1170px] h-[80%] bg-white p-5 rounded-lg relative z-[10]">
      <div
        className="p-3 hover:bg-gray rounded-lg absolute top-4 right-4 z-[2000] cursor-pointer shrink-0"
        onClick={() => {
          setThumbsSwiper(null);
        }}
      >
        <RxCross2 className="text-black" />
      </div>

      <div
        className="h-full flex flex-col xl:mx-auto max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image Swiper */}
        <div className="flex flex-grow h-full items-center justify-center bg-white md:bg-transparent md2:bg-white md2:px-1 relative rounded-lg">
          <div
            ref={prevRef}
            className=" sm:hidden size-12 rounded-full arrow-shadow flex items-center justify-center hover:bg-gray cursor-pointer transition-all duration-300 ease-in-out shrink-0"
          >
            <LeftIconArrow />
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
            onSlideChange={handleSlideChange}
            className="breakpoint"
          >
            {ps.product?.productImages.map((p, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full desc:m-auto">
                  <Image
                    src={p.url}
                    alt=""
                    layout="fill"
                    className="sm:object-contain md:object-contain object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={nextRef}
            className="sm:hidden size-12 rounded-full flex items-center arrow-shadow justify-center hover:bg-gray cursor-pointer transition-all duration-300 ease-in-out shrink-0"
          >
            <RightIconArrow />
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
          className="!h-[120px]  hidden sm:!hidden md:!hidden md2:!block"
        >
          {ps.product?.productImages.map((p, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative h-[100px] w-[144px] bg-white rounded-lg overflow-hidden ${
                  index === currentIndex
                    ? "border border-[#6B6B6B]"
                    : "rounded-lg"
                }`}
              >
                <Image src={p.url} alt="" layout="fill" objectFit="contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FullScreenGallery;
