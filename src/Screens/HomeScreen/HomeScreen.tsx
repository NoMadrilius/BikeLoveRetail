"use client";
import {
	BgImage,
	IconBottom,
	MainContainer,
	Wrapper,
} from "./HomeScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import ByPropose from "./components/ByPropose";
import { byProposeData, newsData, sliderData, sliderTags } from "@/mock/data";
import { ResponsiveBlockGroup } from "./components/ResponsiveBlockGroup";
import Subscribe from "./components/Subscribe";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { useProductStore } from "@/store/ProductStore";
import { observer } from "mobx-react";
import { useEffect } from "react";
import Slider from "./components/Slider";
import { useTranslation } from "react-i18next";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { useAuthStore } from "@/store/AuthStore";

const ITEMS = [
	{
		title: "Гірські",
		picture: "/images/home/byPropose/1.png",
		link: "/catalog/166",
		count: 250,
	},
	{
		title: "Шоссе",
		picture: "/images/home/byPropose/2.png",
		link: "/catalog/170",
		count: 250,
	},
	{
		title: "Гібридні",
		picture: "/images/home/byPropose/3.png",
		link: "/catalog/168",
		count: 250,
	},
	{
		title: "Гравійні",
		picture: "/images/home/byPropose/4.png",
		link: "/catalog/169",
		count: 250,
	},
	{
		title: "Дитячі",
		picture: "/images/home/byPropose/5.png",
		link: "/catalog/164",
		count: 250,
	},
	{
		title: "Підліткові",
		picture: "/images/home/byPropose/6.png",
		link: "/catalog/165",
		count: 250,
	},
	{
		title: "Жіночі",
		picture: "/images/home/byPropose/7.png",
		link: "/catalog/171",
		count: 250,
	},
	{
		title: "Електричні",
		picture: "/images/home/byPropose/8.png",
		link: "/catalog/197",
		count: 250,
	},
];

const HomeScreen = () => {
	const productStore = useProductStore();
	const currencyStore = useCurrencyStore();
	const handleScrollToBottom = () => {
		if (typeof window !== "undefined") {
			window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
		}
	};

	useEffect(() => {
		productStore.fetchSales();
		productStore.fetchForYou();
	}, []);
	const { t } = useTranslation();
	const authStore = useAuthStore();
	const refresh = () => {
		authStore.refreshToken();
	};
	return (
		<>
			<UseMetaData title={"Home"} img={""} description={"asd"} />
			<Wrapper>
				<BgImage bgImage='/images/home/bannerImage.png'>
					<MainContainer>
						<Text
							color={colors.white}
							size='54px'
							margin='20% 0'
							fontStyle={fonts.f500}
							preline>
							{t("home.mainText")}
						</Text>
					</MainContainer>
					<IconBottom
						alt='Arrow Scroll Bottom'
						width={50}
						height={50}
						src='/icons/mainArrowBottom.svg'
						onClick={() => handleScrollToBottom()}
					/>
				</BgImage>
				<MainContainer>
					<ByPropose items={ITEMS} />

					<ResponsiveBlockGroup variant='1' />
					{productStore?.forYou.length && (
						<Slider
							title={"Для тебя"}
							items={productStore?.forYou}
							variant='cards'
						/>
					)}
					{productStore?.sales.length && (
						<Slider
							title={"Популярные аксуссуары"}
							items={productStore?.sales}
							variant='cards'
						/>
					)}

					<ResponsiveBlockGroup variant='2' />
					{/*<Slider
						title={"Велоблог"}
						tags={[]}
						items={newsData}
						variant='news'
					/> */}
					<ResponsiveBlockGroup variant='3' />
				</MainContainer>

				<Subscribe bg={"/images/home/form-background.png"} />
			</Wrapper>
		</>
	);
};
export default observer(HomeScreen);
