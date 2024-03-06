import { FC, useEffect, useState } from "react";
import {
  BurgerIcon,
  Icon,
  IconsContainer,
  Logo,
  TitlesContainer,
  Trigger,
  Wrapper,
} from "./HeaderStyles";
import { Text } from "../../Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import Input from "./components/Input";
import { ButtonCustom } from "../../ButtonCustom/ButtonCustom";
import SideBar from "../../SideBar/Sidebar";
import { useRouter } from "next/router";
import Cart from "../../Modal/Cart/Cart";
import { styled } from "styled-components";
import { templates } from "../../../../theme/templates";
import { observer } from "mobx-react";
import { useCartStore } from "@/store/CartStore";
import { useAuthStore } from "@/store/AuthStore";
import GearSelect from "./components/GearSelect";
import { useTranslation } from "react-i18next";
import MenuTitle from "./components/MenuTitle";
import Link from "next/link";
import { useAppStore } from "@/store/AppStore";
import Categories from "@/components/Modal/Categories";
import CartIcon from "@/components/Layout/Header/components/CartIcon";
import {GenerateLink} from "@/helpers/GenerateLink";

const ICONS = [
  { id: 1, icon: "/images/home/icons/icon1.svg" },
  { id: 2, icon: "/images/home/icons/icon2.svg" },
  { id: 3, icon: "/images/home/icons/icon3.svg" },
];

type Props = {
  opacityBg?: boolean;
};

interface ActiveMenuState {
  id: string | null;
  rect: DOMRect | null;
}

const Header: FC<Props> = ({ opacityBg }) =>{

  const { t } = useTranslation();

  const TITLES = [
    t("header.catalog").toString(),
    t("header.about").toString(),
    t("header.workshop").toString(),
    t("header.blog").toString(),
    t("header.contacts").toString(),
  ];

  const [inputText, setInputText] = useState("");

  const as = useAppStore();
  const cart = useCartStore()
  const router = useRouter();
  const cartStore = useCartStore();

  const onClickIcons = (id: number) => {
    if (id === 1) {
      router.push("/wish-list");
    }
    if (id === 2) {
      cartStore.setVisible(true);
    }
    if (id === 3) {
      as.setIsOpenSettings(!as.isOpenSettings);
    }
  };

  const authStore = useAuthStore();

  const [activeMenu, setActiveMenu] = useState<ActiveMenuState>({
    id: null,
    rect: null,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;
      const target = event.target as HTMLElement;
      if (
        !target.closest(".menu-title") &&
        !target.closest("#categories-component")
      ) {
        timer = setTimeout(() => {
          closeMenu();
        }, 100);
      } else {
        clearTimeout(timer);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      clearTimeout(timer);
    };
  }, []);


  const openMenu = (id: string, rect: DOMRect) => {
    setActiveMenu({ id, rect });
    as.setIsOpenCategories(true);
  };

  // Handler to close the menu
  const closeMenu = () => {
    setActiveMenu({ id: null, rect: null });
    as.setIsOpenCategories(false);
  };

  return (
    <header>
      <Wrapper opacityBg={opacityBg as boolean}>
        <Logo
          width={70}
          height={70}
          alt="Logo"
          src="/images/logo/logo.svg"
          onClick={() => router.push("/")}
        />

        <TitlesContainer>
          <MenuTitle
            func={() => {
              const element = document.getElementById(TITLES[0]);
              if (element) {
                const rect = element.getBoundingClientRect();
                openMenu(TITLES[0], rect);
              }
            }}
            categoriesVisible={as.isOpenCategories}
            activeMenu={activeMenu}
            title={TITLES[0]}
            hover={true}
          />
          <Link href="/about">
            <MenuTitle title={TITLES[1]} />
          </Link>
          <Link href={GenerateLink(router,{basePath:'/workshop'})}>
            <MenuTitle title={TITLES[2]} />
          </Link>
          <Link href="/blog">
            <MenuTitle title={TITLES[3]} />
          </Link>
          <Link href="/contacts">
            <MenuTitle title={TITLES[4]} />
          </Link>
        </TitlesContainer>

        <Input value={inputText} onChange={setInputText} />
        <ResNumberWrapper>
          <Text color={colors.white} fontStyle={fonts.f500}>
            (093) 211 - 89 - 30
          </Text>
        </ResNumberWrapper>

        <IconsContainer>
          <CounterContainer>
            <Icon
              width={23}
              height={23}
              alt="Header Icon"
              src={ICONS[0].icon}
              onClick={() => onClickIcons(ICONS[0].id)}
            />
            {[]?.length ? (
              <Counter>
                <Text color={colors.white} size="13px" fontStyle={fonts.f500}>
                  {[]?.length}
                </Text>
              </Counter>
            ) : null}
          </CounterContainer>
          {<CartIcon/>
          }
          <Icon
            width={23}
            height={23}
            alt="Header Icon"
            src={ICONS[2].icon}
            onClick={() => onClickIcons(ICONS[2].id)}
          />
        </IconsContainer>
        <Trigger>
          {authStore.isAuth ? (
            <UserContainer onClick={() => router.push("/account")}>
              <UserAvatar>
                {authStore.user?.firstName.substring(0, 1)}
              </UserAvatar>
              <Text color={colors.white} size="13px" fontStyle={fonts.f500}>
                {authStore.user?.firstName}
                <br />
                {authStore.user?.lastName}
              </Text>
            </UserContainer>
          ) : (
            <ButtonCustom
              width={"107px"}
              height={"40px"}
              type="default"
              func={() => router.push("/auth")}
            >
              <Text color={colors.white} size="16px" fontStyle={fonts.f400}>
                {t("header.enter")}
              </Text>
            </ButtonCustom>
          )}
        </Trigger>

        <BurgerIcon
          width={20}
          height={20}
          alt="Burger Icon"
          src="/images/home/icons/burger.svg"
          onClick={() => as.setIsOpenSidebar(!as.isOpenSidebar)}
        />
      </Wrapper>

        <Categories activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {as.isOpenSidebar && <SideBar />}
      {cartStore.visible && <Cart />}
      {as.isOpenSettings && <GearSelect/>}
    </header>
  );
};
export default observer(Header);
const CounterContainer = styled.div`
  position: relative;
`;
const Counter = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${colors.redMain};
  ${templates.centerContent};
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
`;
const UserContainer = styled.div`
  display: flex;
  column-gap: 7px;
  cursor: pointer;
`;
const UserAvatar = styled.div`
  ${templates.centerContent};
  width: 32px;
  height: 32px;
  background-color: ${colors.redMain};
  border-radius: 50%;
`;
const ResNumberWrapper = styled.div`
  ${templates.centerContent};
  @media (max-width: 870px) {
    display: none;
  }
`;




