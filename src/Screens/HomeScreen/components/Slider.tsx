import Card from "@/components/Card/Card";
import { FC, useState } from "react";
import { styled } from "styled-components";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation"; // Импорт стилей навигации Swiper
import "swiper/css/pagination"; // Импорт стилей пагинации Swiper
import "swiper/css/effect-coverflow";
import { Navigation, Pagination } from "swiper/modules";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { metrics } from "../../../../theme/metrics";
import NewsItem from "@/components/NewsItem/NewsItem";

type Props = {
  title: string;
  tags?: string[];
  items: any;
  variant: "cards" | "news";
};

const Slider: FC<Props> = ({ items, tags, title, variant }) => {
  return (
    <div style={{ width: "100%" }}>
      <Text
        color={colors.black}
        size="42px"
        fontStyle={fonts.f500}
        margin={tags ? "0 0 0 0" : "0 0 50px 0"}
      >
        {title}
      </Text>
      {tags && (
        <TagsContainer>
          {tags.map((el, index) => (
            <TagItem key={index}>{el}</TagItem>
          ))}
        </TagsContainer>
      )}

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation
        loop
        pagination={{ clickable: true }}
      >
        {items.map((el: any, index: React.Key | null | undefined) => (
          <SwiperSlide style={{ width: "auto", height: "100%" }} key={index}>
            {variant === "cards" && <Card {...el} />}
            {variant === "news" && <NewsItem {...el} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
const TagsContainer = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  gap: 7px;
  margin: 50px 0;
  @media (max-width: ${metrics.mobile}) {
    margin: 30px 0;
    width: 100%;
  }
`;
const TagItem = styled.div`
  padding: 9px 7px;
  background-color: ${colors.grayBorder};
  color: ${colors.black};
  font-size: 14px;
  font-weight: ${fonts.f400.fontWeight};
  font-family: ${fonts.f400.fontFamily};
`;
