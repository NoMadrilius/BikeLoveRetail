"use client";
import { FC, useState } from "react";
import {
  BurgerIcon,
  Icon,
  IconsContainer,
  Logo,
  TitlesContainer,
  Trigger,
  Wrapper,
} from "./HeaderStyles";
import { Text } from "../Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import Input from "./components/Input";
import { ButtonCustom } from "../ButtonCustom/ButtonCustom";

const TITLES = ["каталог", "о магазине", "мастерская", "велоблог", "контакты"];
const ICONS = [
  "/images/home/icons/icon1.svg",
  "/images/home/icons/icon2.svg",
  "/images/home/icons/icon3.svg",
];

type Props = {
  opacityBg?: boolean;
};

const Header: FC<Props> = ({ opacityBg }) => {
  const [inputText, setInputText] = useState("");
  return (
    <Wrapper opacityBg={opacityBg}>
      <Logo src="/images/logo/logo.svg" />

      <TitlesContainer>
        {TITLES.map((el, index) => (
          <Text
            key={index}
            color={colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
          >
            {el}
          </Text>
        ))}
      </TitlesContainer>

      <Input value={inputText} onChange={setInputText} />
      <IconsContainer>
        {ICONS.map((el, index) => (
          <Icon src={el} key={index} />
        ))}
      </IconsContainer>
      <Trigger>
        <ButtonCustom width={"107px"} height={"40px"}>
          <Text color={colors.white} size="16px" fontStyle={fonts.f400}>
            Войти
          </Text>
        </ButtonCustom>
      </Trigger>

      <BurgerIcon src="/images/home/icons/burger.svg" />
    </Wrapper>
  );
};
export default Header;
