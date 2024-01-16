import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { styled } from "styled-components";
import Image from "next/image";

const SliderProducts = ({ images }: any) => {
	const [currentSlide, setCurrentSlide] = useState(0);
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

	return (
		<>
			<Swiper
				slidesPerView={1}
				onSlideChange={handleSlideChange}
				ref={topSwiper}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				navigation>
				{images?.map((slide: any) => (
					<SwiperSlide
						key={slide.id}
						style={{
							width: "auto",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<BigImg src={slide.url} alt={`Slide ${slide.id}`} />
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={10}
				slidesPerView={"auto"} // Измените количество отображаемых слайдов по вашему усмотрению
				onSlideChange={handleSlideChange}
				loop>
				{images?.map((slide: any, index: number) => (
					<SwiperSlide
						onClick={() => handleThumbnailClick(topSwiper, index)}
						key={slide.id}
						style={{
							width: "auto",
							height: "100%",
						}}>
						<Image
							width={84}
							height={54}
							src={slide.url}
							alt={`Slide ${slide.id}`}
							style={{
								width: "84px",
								height: "58px",
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
const BigImg = styled.img`
	width: 100%;
	aspect-ratio: 469/324;
`;
