import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { styled } from "styled-components";
import { useTranslation } from "react-i18next";

const BoldText = ({ text }: any) => {
  return (
    <Text
      color={colors.black}
      size="40px"
      fontStyle={fonts.f700}
      margin="60px 0 25px 0"
    >
      {text}
    </Text>
  );
};
const SimpleText = ({ text }: any) => {
  return (
    <>
      <Text
        color={colors.black}
        size="16px"
        fontStyle={fonts.f400}
        margin="17px 0 0 0"
      >
        {text}
      </Text>
    </>
  );
};
const BoldSmallText = ({ text }: any) => {
  return (
    <Text
      color={colors.black}
      size="16px"
      fontStyle={fonts.f500}
      margin="17px 0 0 0"
    >
      {text}
    </Text>
  );
};

const TextBlock = () => {
  const { t } = useTranslation();
  const DOT_TEXT = [
    t("catalog.textBlock.dot1"),
    t("catalog.textBlock.dot2"),
    t("catalog.textBlock.dot3"),
    t("catalog.textBlock.dot4"),
    t("catalog.textBlock.dot5"),
    t("catalog.textBlock.dot6"),
    t("catalog.textBlock.dot7"),
    t("catalog.textBlock.dot8"),
  ];
  return (
    <Wrapper>
      <BoldText text={t("catalog.textBlock.boldText1")} />
      <SimpleText text={t("catalog.textBlock.simpleText1")} />
      <SimpleText text={t("catalog.textBlock.simpleText2")} />
      <List>
        {DOT_TEXT.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </List>
      <SimpleText text={t("catalog.textBlock.simpleText3")} />
      <SimpleText text={t("catalog.textBlock.simpleText4")} />
      <BoldText text={t("catalog.textBlock.boldText2")} />
      <SimpleText text={t("catalog.textBlock.simpleText5")} />
      <BoldSmallText text={t("catalog.textBlock.boldText3")} />
      <SimpleText text={t("catalog.textBlock.simpleText6")} />
      <BoldSmallText text={t("catalog.textBlock.boldText4")} />
      <SimpleText text={t("catalog.textBlock.simpleText7")} />
      <BoldSmallText text={t("catalog.textBlock.boldText5")} />
      <SimpleText text={t("catalog.textBlock.simpleText8")} />
      <BoldSmallText text={t("catalog.textBlock.boldText6")} />
      <SimpleText text={t("catalog.textBlock.simpleText9")} />
      <BoldText text={t("catalog.textBlock.boldText7")} />
      <SimpleText text={t("catalog.textBlock.simpleText10")} />
      <SimpleText text={t("catalog.textBlock.simpleText11")} />
      <BoldText text={t("catalog.textBlock.boldText8")} />
      <SimpleText text={t("catalog.textBlock.simpleText12")} />
      <SimpleText text={t("catalog.textBlock.simpleText13")} />
    </Wrapper>
  );
};
export default TextBlock;

const Wrapper = styled.section`
  margin-top: 194px;
`;
const List = styled.ul`
  color: ${colors.black};
  font-family: ${fonts.f400.fontFamily};
`;
