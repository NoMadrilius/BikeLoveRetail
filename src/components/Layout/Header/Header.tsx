"use client";
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
import Categories from "../../Modal/Categories";
import SideBar from "../../SideBar/Sidebar";
import { useRouter } from "next/router";
import Cart from "../../Modal/Cart/Cart";
import { useCategoriesStore } from "@/store/CategoriesStore";
import { styled } from "styled-components";
import { templates } from "../../../../theme/templates";
import { observer } from "mobx-react";
import { useCartStore } from "@/store/CartStore";
import { useWishListStore } from "@/store/WishListStore";
import { useAuthStore } from "@/store/AuthStore";
import { useCurrencyStore } from "@/store/CurrencyStore";
import GearSelect from "./components/GearSelect";
import { useTranslation } from "react-i18next";
import MenuTitle from "./components/MenuTitle";
import Link from "next/link";

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

const Header: FC<Props> = ({ opacityBg }) => {
  const { t } = useTranslation();

  const TITLES = [
    t("header.catalog"),
    t("header.about"),
    t("header.workshop"),
    t("header.blog"),
    t("header.contacts"),
  ];
  const currensyStore = useCurrencyStore();
  const [inputText, setInputText] = useState("");
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [gearVisible, setGearVisible] = useState(false);
  const router = useRouter();
  useEffect(() => {
    currensyStore.getCurrency();
    currensyStore.selectCurrensy(currensyStore.selectedCurrency);
  }, []);

  const path = router.pathname;

  const onClickIcons = (id: number) => {
    if (id === 1) {
      router.push("/wish-list");
    }
    if (id === 2) {
      setCartVisible(true);
    }
    if (id === 3) {
      setGearVisible(!gearVisible);
    }
  };
  const selectCurrency = (currency: string) => {
    currensyStore.selectCurrensy(currency);
  };
  const categories = useCategoriesStore();
  const cart = useCartStore();
  const wish = useWishListStore();
  const authStore = useAuthStore();
  const [cartData, setCartData] = useState<any>();
  const [wishData, setWishData] = useState<any>();
  const [isAuth, setIsAuth] = useState(false);
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

  useEffect(() => {
    categories.fetchCategories();
    setCartData(cart.cart);
  }, [cart.cart, router.pathname]);
  useEffect(() => {
    setWishData(wish.wishList);
  }, [wish, router.pathname]);
  // Проверка на авторизацию
  useEffect(() => {
    const fetchData = async () => {
      const _isAuth = authStore.checkAuth();
      console.log("success");
      console.log(_isAuth);
      //@ts-ignore
      setIsAuth(_isAuth);
      if (!_isAuth) {
        try {
          // Попытка обновить токен
          await authStore.refreshToken();
          console.log("success");
        } catch (refreshError) {
          // Обработка ошибки обновления токена
          console.log("Failed to refresh token:", refreshError);
        }

        // После обновления токена, обновляем данные корзины и списка желаемого
      } else {
        cart.initializeCartFromServer();
        wish.initializeWishListFromServer();
      }
    };

    fetchData();
  }, [
    router.pathname,
    authStore?.loginUserResponse?.user?.id,
    authStore.tokenIsRefresh,
  ]);

  ///
  console.log(isAuth);
  ////
  const openMenu = (id: string, rect: DOMRect) => {
    setActiveMenu({ id, rect });
    setCategoriesVisible(true);
  };

  // Handler to close the menu
  const closeMenu = () => {
    setActiveMenu({ id: null, rect: null });
    setCategoriesVisible(false);
  };
  return (
    <>
      <Wrapper opacityBg={opacityBg}>
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
            activeMenu={activeMenu}
            title={TITLES[0]}
            hover={true}
          />
          <Link href="/about">
            <MenuTitle title={TITLES[1]} />
          </Link>
          <Link href="/workshop">
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
            {wishData?.length ? (
              <Counter>
                <Text color={colors.white} size="13px" fontStyle={fonts.f500}>
                  {wishData?.length}
                </Text>
              </Counter>
            ) : null}
          </CounterContainer>
          <CounterContainer>
            <Icon
              width={23}
              height={23}
              alt="Header Icon"
              src={ICONS[1].icon}
              onClick={() => onClickIcons(ICONS[1].id)}
            />
            {cartData?.length ? (
              <Counter>
                <Text color={colors.white} size="13px" fontStyle={fonts.f500}>
                  {cartData?.length}
                </Text>
              </Counter>
            ) : null}
          </CounterContainer>
          <Icon
            width={23}
            height={23}
            alt="Header Icon"
            src={ICONS[2].icon}
            onClick={() => onClickIcons(ICONS[2].id)}
          />
        </IconsContainer>
        <Trigger>
          {isAuth ? (
            <UserContainer onClick={() => router.push("/account")}>
              <UserAvatar>
                {authStore.loginUserResponse?.user?.firstName.substring(0, 1)}
              </UserAvatar>
              <Text color={colors.white} size="13px" fontStyle={fonts.f500}>
                {authStore.loginUserResponse?.user?.firstName}
                <br />
                {authStore.loginUserResponse?.user?.lastName}
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
          onClick={() => setSideBarVisible(!sideBarVisible)}
        />
      </Wrapper>
      {categoriesVisible ? (
        <>
          <Overlay categoriesVisible={categoriesVisible} />
          <CategoriesContainer
            activeMenu={activeMenu}
            categoriesVisible={categoriesVisible}
          >
            <Categories
              setVisible={setCategoriesVisible}
              categories={categories}
              rect={activeMenu.rect}
            />
          </CategoriesContainer>
        </>
      ) : null}

      {sideBarVisible && (
        <SideBar setVisible={setSideBarVisible} cartVisible={setCartVisible} />
      )}
      {cartVisible && <Cart setVisible={setCartVisible} />}
      {gearVisible && (
        <GearSelect onClick={selectCurrency} setVisible={setGearVisible} />
      )}
    </>
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

const Overlay = styled.div<{ categoriesVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: ${({ categoriesVisible }) => (categoriesVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const CategoriesContainer = styled.div<{
  activeMenu: any;
  categoriesVisible: any;
}>`
  position: absolute;
  /* top: ${({ activeMenu }) =>
    activeMenu.rect ? activeMenu.rect.bottom + "px" : "0"}; */
  left: ${({ activeMenu }) =>
    activeMenu.rect ? activeMenu.rect.left + "px" : "0"};
  opacity: ${({ categoriesVisible }) => (categoriesVisible ? 1 : 0)};
  /* visibility: ${({ categoriesVisible }) =>
    categoriesVisible ? "visible" : "hidden"}; */
  transition: all 0.3s ease-in-out;

  /* Additional styles */
  pointer-events: ${({ categoriesVisible }) =>
    categoriesVisible ? "auto" : "none"};
`;
