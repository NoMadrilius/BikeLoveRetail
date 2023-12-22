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
	const { loginWithRedirect, user, logout } = useAuth0();

	const categories = useCategoriesStore();
	const cart = useCartStore();

	useEffect(() => {
		categories.fetchCategories();
	}, []);
	console.log(cart.cart);
	console.log(categories);

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
					<Icon src={ICONS[0].icon} onClick={() => onClickIcons(ICONS[0].id)} />
					<CounterContainer>
						<Icon
							src={ICONS[1].icon}
							onClick={() => onClickIcons(ICONS[1].id)}
						/>
						{cart.cart.length !== 0 && (
							<Counter>
								<Text color={colors.white} size='13px' fontStyle={fonts.f500}>
									{cart.cart.length}
								</Text>
							</Counter>
						)}
					</CounterContainer>
					<Icon src={ICONS[2].icon} onClick={() => onClickIcons(ICONS[2].id)} />
				</IconsContainer>
				<Trigger>
					<ButtonCustom
						width={"107px"}
						height={"40px"}
						type='default'
						func={user ? logout : loginWithRedirect}>
						<Text color={colors.white} size='16px' fontStyle={fonts.f400}>
							{user ? user.name : "Войти"}
						</Text>
					</ButtonCustom>
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
