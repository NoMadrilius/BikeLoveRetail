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
import Cart from "../Modal/Cart/Cart";

const TITLES = ["каталог", "о магазине", "мастерская", "велоблог", "контакты"];
const ICONS = [
  { id: 1, icon: "/images/home/icons/icon1.svg" },
  { id: 2, icon: "/images/home/icons/icon2.svg" },
  { id: 3, icon: "/images/home/icons/icon3.svg" },
];

type Props = {
  opacityBg?: boolean;
};

const Header: FC<Props> = ({ opacityBg }) => {
  const [inputText, setInputText] = useState("");
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const router = useRouter();

  const path = router.pathname;

  const onClickIcons = (id: number) => {
    if (id === 1) {
      router.push("/wish-list");
    }
    if (id === 2) {
      setCartVisible(true);
    }
  };

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
            color={path === "/about" ? colors.redMain : colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => router.push("/about")}
          >
            {TITLES[1]}
          </Text>
          <Text
            color={path === "/workshop" ? colors.redMain : colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => router.push("/workshop")}
          >
            {TITLES[2]}
          </Text>
          <Text
            color={path === "/blog" ? colors.redMain : colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => router.push("/blog")}
          >
            {TITLES[3]}
          </Text>
          <Text
            color={path === "/contacts" ? colors.redMain : colors.white}
            fontStyle={fonts.f600}
            hoverColor={colors.redHover}
            func={() => router.push("/contacts")}
          >
            {TITLES[4]}
          </Text>
        </TitlesContainer>

        <Input value={inputText} onChange={setInputText} />
        <IconsContainer>
          {ICONS.map((el, index) => (
            <Icon
              src={el.icon}
              key={index}
              onClick={() => onClickIcons(el.id)}
            />
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
      {cartVisible && <Cart setVisible={setCartVisible} />}
    </>
  );
};
export default Header;
