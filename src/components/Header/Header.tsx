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
import Categories from "../Modal/Categories";
import SideBar from "../SideBar/Sidebar";
import { useRouter } from "next/router";

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
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const router = useRouter();

  return (
    <>
      <Wrapper opacityBg={opacityBg}>
        <Logo src="/images/logo/logo.svg" onClick={() => router.push("/")} />

        <TitlesContainer>
          <Text
            color={colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => setCategoriesVisible(!categoriesVisible)}
          >
            {TITLES[0]}
          </Text>
          <Text
            color={colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => setCategoriesVisible(!categoriesVisible)}
          >
            {TITLES[1]}
          </Text>
          <Text
            color={colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => setCategoriesVisible(!categoriesVisible)}
          >
            {TITLES[2]}
          </Text>
          <Text
            color={colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => setCategoriesVisible(!categoriesVisible)}
          >
            {TITLES[3]}
          </Text>
          <Text
            color={colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => setCategoriesVisible(!categoriesVisible)}
          >
            {TITLES[4]}
          </Text>
          <Text
            color={colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => setCategoriesVisible(!categoriesVisible)}
          >
            {TITLES[5]}
          </Text>
        </TitlesContainer>

        <Input value={inputText} onChange={setInputText} />
        <IconsContainer>
          {ICONS.map((el, index) => (
            <Icon src={el} key={index} />
          ))}
        </IconsContainer>
        <Trigger>
          <ButtonCustom width={"107px"} height={"40px"} type="default">
            <Text color={colors.white} size="16px" fontStyle={fonts.f400}>
              Войти
            </Text>
          </ButtonCustom>
        </Trigger>

        <BurgerIcon
          src="/images/home/icons/burger.svg"
          onClick={() => setSideBarVisible(!sideBarVisible)}
        />
      </Wrapper>
      {categoriesVisible && <Categories setVisible={setCategoriesVisible} />}
      {sideBarVisible && <SideBar setVisible={setSideBarVisible} />}
    </>
  );
};
export default Header;
