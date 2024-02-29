import { css, styled } from "styled-components";
import { Text } from "../Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { FC } from "react";
import { INewsItem } from "@/types/types";
import { metrics } from "../../../theme/metrics";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Paragraph, Subtitle } from "../Screens/HomeScreen/HomeScreenStyles";

const NewsItem: FC<INewsItem> = ({
  date,
  title,
  description,
  image,
  blog,
  id,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Wrapper onClick={() => router.push(`/blog/${id}`)}>
      <Text
        color={colors.grayBorder}
        size="13px"
        fontStyle={fonts.f400}
        margin="0 0 20px 0"
      >
        {date}
      </Text>
      <Picture src={image} blog={!!blog} />
      <Subtitle
        $color={colors.black}
        $fontSize="24px"
        $fontStyle={fonts.f600}
        $margin="20px 0 8px 0"
      >
        {title}
      </Subtitle>
      <Paragraph $color={colors.black} $fontSize="16px" $fontStyle={fonts.f400}>
        {description}
      </Paragraph>
      <Text
        color={colors.grayBorder}
        size="13px"
        fontStyle={fonts.f400}
        margin="8px 0 0 0"
        hoverColor={colors.redHover}
      >
        {t("newsItem.moreDetails")}
      </Text>
    </Wrapper>
  );
};
export default NewsItem;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  /* max-width: 430px; */
  cursor: pointer;
  @media (max-width: ${metrics.mobile}) {
    width: 322px;
  }
`;
const Picture = styled.img<{ blog: boolean }>`
  width: 100%;

  border-radius: 12px;
  height: 266px;
  @media (max-width: ${metrics.mobile}) {
    height: 212px;
  }
  ${(p) =>
    p.blog &&
    css`
      aspect-ratio: 430/226;
      height: 100%;
      @media (max-width: ${metrics.desktop}) {
        height: 100%;
      }
    `}
`;
