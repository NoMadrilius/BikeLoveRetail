import Pagination from "@/components/UIKit/NavigationPanel/Pagination";
import useSlider from "@/helpers/hooks/useSlider";
import { Swiper, SwiperSlide } from "swiper/react";
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

  const fb = [
    {
      name: "Юрій",
      img: "/images/homepage/feedback/ss.png",
      rating: 5,
      desc: "Сподобалося все - і те, що підібрали ровер з урахуванням всіх основних моїх побажань, і те, що  отримали, зібрали, підтягнули, прокатали, через тиждень знову підтягнули, і те що запропонували основні девайси, поморочились з моїм вибагливим багажником. І все це для майстра своєї справи Дениса легко і швидко при тобі на місці. Врешті їздить воно гарно. Підкачка колес для мене навічно безкоштовно, і 7 днів на тиждень, і з ранку до вечора. Коротше - класно! Заходьте і побачите, що це справді Майстерня Біля Дому.",
    },
    {
      name: "Денис",
      img: "/images/homepage/feedback/p.png",
      rating: 4,
      desc: "Заїхав на терміновий ремонт. Майстер все швидко та кваліфіковано полагодив. Порадувала ціна, незважаючи на високу якість обслуговування, цінник був приємний. Тепер це моя улюблена майстерня/магазин, тут обслуговуватиму велосипед на постійній основі. Всім рекомендую.",
    },
    {
      name: "Serhii Lytvyn",
      img: "/images/homepage/feedback/tt.png",
      rating: 5,
      desc: "Чудове місце, заїхав без запису зняти каретку з надією що це займе кілька хвилин, а натомість довелося нагрівати раму, використовувати вд-40 і лише тоді майстру вдалося відкрутити каретку. Нову деталь придбав тут і також запитав встановити. Деталь встановили, вже встиг протестувати на бреветі 200 км - все добре. Рекомендую даний магазин і майстерню.",
    },
    {
      name: "Геннадій Дихта",
      img: "/images/homepage/feedback/gd.png",
      rating: 5,
      desc: "Вперше заїхав сюди на обслуговування, після першої поїздки знайшовся 1 недолік і вилізла 1 не явна проблема, довелось приїхати ще раз. Хлопці швидко все виправили та запропонували гарну компенсацію. Моє ставлення таке що кожен має право на помилку, але її потрібно визнавати і виправляти як тут і було зроблено.",
    },
    {
      name: "Sergey Sawenkow",
      img: "/images/homepage/feedback/i.png",
      rating: 4,
      desc:
        "Всім раджу цей заклад.\n" +
        "За мінімум часу мені знайшли деталі на не найновішу і найдешевшу модель SCOTT. Відвідав не одне вело СТО, скрізь відмовляли. Загалом у кого не стандартні варіанти складання їдьте туди.",
    },
  ];

  return (
    <section className="max-w-[988px] overflow-hidden flex xl:flex-row lg:flex-row flex-col gap-6 xl:mt-[-13px] lg:mt-[-24px] lg:gap-[65px]">
      <div className="flex flex-col justify-between shrink-0">
        <SectionHeader title={"Відгуки про магазин"} />
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
