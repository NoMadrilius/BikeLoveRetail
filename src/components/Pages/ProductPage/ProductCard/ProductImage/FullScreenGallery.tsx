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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[1]">
      <div className="relative w-[80%] max-w-[1170px] bg-white p-5 rounded-lg">
        <div
          className="p-3 hover:bg-gray rounded-lg absolute top-4 right-4 z-[2000] cursor-pointer shrink-0"
          onClick={() => {
            onClose();
            setThumbsSwiper(null);
          }}
        >
          <RxCross2 className="text-black" />
        </div>

        <div className="xl:mx-auto max-w-6xl">
          {/* Main Image Swiper */}
          <div className="flex items-center justify-center bg-white md:bg-transparent md2:bg-white md2:px-1 relative rounded-lg">
            <div
              ref={prevRef}
              className="sm:hidden size-12 rounded-full arrow-shadow flex items-center justify-center hover:bg-gray cursor-pointer transition-all duration-300 ease-in-out shrink-0"
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
                  <div className="relative w-full h-[380px] md2:max-w-[432px] md2:m-auto">
                    <Image
                      src={p.url}
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
            className="mt-5 hidden sm:!hidden md:!hidden md2:!block"
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
    </div>
  );
};

export default FullScreenGallery;
