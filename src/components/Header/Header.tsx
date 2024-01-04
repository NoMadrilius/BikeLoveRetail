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
import { useAuth0 } from "@auth0/auth0-react";
import { useCategoriesStore } from "@/store/CategoriesStore";
import { styled } from "styled-components";
import { templates } from "../../../theme/templates";
import { observer } from "mobx-react";
import { useCartStore } from "@/store/CartStore";
import { useWishListStore } from "@/store/WishListStore";
import { useAuthStore } from "@/store/AuthStore";

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
	}, [cart]);
	useEffect(() => {
		setWishData(wish.wishList);
	}, [wish]);
	useEffect(() => {
		const _isAuth = authStore.checkAuth();
		setIsAuth(_isAuth);
	}, [router.pathname]);
	///
	////

	return (
		<>
			<Wrapper opacityBg={opacityBg}>
				<Logo src='/images/logo/logo.svg' onClick={() => router.push("/")} />

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
					<Icon src={ICONS[2].icon} onClick={() => onClickIcons(ICONS[2].id)} />
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
								Войти
							</Text>
						</ButtonCustom>
					)}
				</Trigger>

				<BurgerIcon
					src='/images/home/icons/burger.svg'
					onClick={() => setSideBarVisible(!sideBarVisible)}
				/>
			</Wrapper>
			{categoriesVisible && (
				<Categories setVisible={setCategoriesVisible} categories={categories} />
			)}
			{sideBarVisible && <SideBar setVisible={setSideBarVisible} />}
			{cartVisible && <Cart setVisible={setCartVisible} />}
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
