import Pagination from "@/components/UIKit/NavigationPanel/Pagination";
import useSlider from "@/helpers/hooks/useSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderButtons from "../CustomSlider/NavigationButtons/SliderButtons";
import SectionHeader from "../CustomSlider/SectionHeader";
import FeedbackItem from "./FeedbackItem";
import { useTranslation } from "next-i18next";

const Feedbacks = () => {
  const {t} = useTranslation("home_page")

  const {
    swiperRef,
    isBeginning,
    isEnd,
    currentIndex,
    goNext,
    goPrev,
    handleSlideChange,
  } = useSlider(0, 6);

  const fb = [
    {
      name: "Юрій",
      img: "/images/homepage/feedback/ss.png",
      rating: 5,
      desc: t("Відгук1"),
    },
    {
      name: "Денис",
      img: "/images/homepage/feedback/p.png",
      rating: 4,
      desc: t("Відгук2"),
    },
    {
      name: "Serhii Lytvyn",
      img: "/images/homepage/feedback/tt.png",
      rating: 5,
      desc: t("Відгук3"),
    },
    {
      name: "Геннадій Дихта",
      img: "/images/homepage/feedback/gd.png",
      rating: 5,
      desc: t("Відгук4"),
    },
    {
      name: "Sergey Sawenkow",
      img: "/images/homepage/feedback/i.png",
      rating: 4,
      desc:
        t("Відгук5"),
    },
  ];

  return (
    <section className="max-w-[988px] overflow-hidden flex xl:flex-row lg:flex-row flex-col gap-6 xl:mt-[-13px] lg:mt-[-24px] lg:gap-[65px]">
      <div className="flex flex-col justify-between shrink-0">
        <SectionHeader title={t("Відгуки про магазин")} />
        <div className="hidden xl:flex lg:flex flex-col">
          <SliderButtons
            onClickPrev={goPrev}
            onClickNext={goNext}
            disabledPrev={isBeginning}
            disabledNext={isEnd}
          />
          <Pagination
            currentIndex={currentIndex}
            totalSlides={5}
            className="lg:!block w-full mx-0 xl:!block"
          />
        </div>
      </div>
      <div className="max-w-[650px] sm:max-w-[335px]">
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={24}
          onSlideChange={handleSlideChange}
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            1440: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
        >
          {fb.map((article, index) => (
            <SwiperSlide key={index} className="xl:max-w-[272px] h-full">
              <FeedbackItem {...article} />
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
