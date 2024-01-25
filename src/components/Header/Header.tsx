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
import { Text } from "../Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import Input from "./components/Input";
import { ButtonCustom } from "../ButtonCustom/ButtonCustom";
import Categories from "../Modal/Categories";
import SideBar from "../SideBar/Sidebar";
import { useRouter } from "next/router";
import Cart from "../Modal/Cart/Cart";
import { useCategoriesStore } from "@/store/CategoriesStore";
import { styled } from "styled-components";
import { templates } from "../../../theme/templates";
import { observer } from "mobx-react";
import { useCartStore } from "@/store/CartStore";
import { useWishListStore } from "@/store/WishListStore";
import { useAuthStore } from "@/store/AuthStore";
import { useCurrencyStore } from "@/store/CurrencyStore";
import GearSelect from "./components/GearSelect";
import { useTranslation } from "react-i18next";

const ICONS = [
	{ id: 1, icon: "/images/home/icons/icon1.svg" },
	{ id: 2, icon: "/images/home/icons/icon2.svg" },
	{ id: 3, icon: "/images/home/icons/icon3.svg" },
];

type Props = {
	opacityBg?: boolean;
};

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

	useEffect(() => {
		categories.fetchCategories();
		setCartData(cart.cart);
	}, [cart.cart, router.pathname]);
	useEffect(() => {
		setWishData(wish.wishList);
	}, [wish, router.pathname]);
	// Проверка на авторизацию
	useEffect(() => {
		const checkAuth = async () => {
			const _isAuth = await authStore.checkAuth();
			setIsAuth(_isAuth);

			if (_isAuth) {
				cart.initializeCartFromServer();
				wish.initializeWishListFromServer();
			}
		};

		checkAuth();
	}, [router.pathname, authStore?.loginUserResponse?.user?.id]);

	///
	console.log(isAuth);
	////

	return (
		<>
			<Wrapper opacityBg={opacityBg}>
				<Logo
					width={70}
					height={70}
					alt='Logo'
					src='/images/logo/logo.svg'
					onClick={() => router.push("/")}
				/>

				<TitlesContainer>
					<Text
						color={colors.white}
						fontStyle={fonts.f600}
						hoverColor={colors.redHover}
						func={() => setCategoriesVisible(!categoriesVisible)}>
						{TITLES[0]}
					</Text>
					<Text
						color={path === "/about" ? colors.redMain : colors.white}
						fontStyle={fonts.f600}
						hoverColor={colors.redHover}
						func={() => router.push("/about")}>
						{TITLES[1]}
					</Text>
					<Text
						color={path === "/workshop" ? colors.redMain : colors.white}
						fontStyle={fonts.f600}
						hoverColor={colors.redHover}
						func={() => router.push("/workshop")}>
						{TITLES[2]}
					</Text>
					<Text
						color={path === "/blog" ? colors.redMain : colors.white}
						fontStyle={fonts.f600}
						hoverColor={colors.redHover}
						func={() => router.push("/blog")}>
						{TITLES[3]}
					</Text>
					<Text
						color={path === "/contacts" ? colors.redMain : colors.white}
						fontStyle={fonts.f600}
						hoverColor={colors.redHover}
						func={() => router.push("/contacts")}>
						{TITLES[4]}
					</Text>
				</TitlesContainer>

				<Input value={inputText} onChange={setInputText} />
				<IconsContainer>
					<CounterContainer>
						<Icon
							width={23}
							height={23}
							alt='Header Icon'
							src={ICONS[0].icon}
							onClick={() => onClickIcons(ICONS[0].id)}
						/>
						{wishData?.length ? (
							<Counter>
								<Text color={colors.white} size='13px' fontStyle={fonts.f500}>
									{wishData?.length}
								</Text>
							</Counter>
						) : null}
					</CounterContainer>
					<CounterContainer>
						<Icon
							width={23}
							height={23}
							alt='Header Icon'
							src={ICONS[1].icon}
							onClick={() => onClickIcons(ICONS[1].id)}
						/>
						{cartData?.length ? (
							<Counter>
								<Text color={colors.white} size='13px' fontStyle={fonts.f500}>
									{cartData?.length}
								</Text>
							</Counter>
						) : null}
					</CounterContainer>
					<Icon
						width={23}
						height={23}
						alt='Header Icon'
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
							<Text color={colors.white} size='13px' fontStyle={fonts.f500}>
								{authStore.loginUserResponse?.user?.firstName}
								<br />
								{authStore.loginUserResponse?.user?.lastName}
							</Text>
						</UserContainer>
					) : (
						<ButtonCustom
							width={"107px"}
							height={"40px"}
							type='default'
							func={() => router.push("/auth")}>
							<Text color={colors.white} size='16px' fontStyle={fonts.f400}>
								{t("header.enter")}
							</Text>
						</ButtonCustom>
					)}
				</Trigger>

				<BurgerIcon
					width={20}
					height={20}
					alt='Burger Icon'
					src='/images/home/icons/burger.svg'
					onClick={() => setSideBarVisible(!sideBarVisible)}
				/>
			</Wrapper>
			{categoriesVisible && categories && (
				<Categories setVisible={setCategoriesVisible} categories={categories} />
			)}
			{sideBarVisible && <SideBar setVisible={setSideBarVisible} />}
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
