"use client";
import { BgImage, MainContainer, Wrapper } from "./HomeScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import ByPropose from "./components/ByPropose";
import { byProposeData, newsData, sliderData, sliderTags } from "@/mock/data";
import { ResponsiveBlockGroup } from "./components/ResponsiveBlockGroup";
import Slider from "./components/Slider";
import Subscribe from "./components/Subscribe";
import { UseMetaData } from "@/helpers/hooks/useMetaData";

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
							fontStyle={fonts.f500}>
							Лови возможность <br />
							проехать больше маршрутов
						</Text>
					</MainContainer>
				</BgImage>
				<MainContainer>
					<ByPropose items={ITEMS} />

					<ResponsiveBlockGroup variant='1' />
					<Slider
						title={"Популярные велосипеды"}
						tags={sliderTags}
						items={sliderData}
						variant='cards'
					/>
					<Slider
						title={"Популярные аксуссуары"}
						tags={sliderTags}
						items={sliderData}
						variant='cards'
					/>
					<ResponsiveBlockGroup variant='2' />
					<Slider
						title={"Велоблог"}
						tags={[]}
						items={newsData}
						variant='news'
					/>
				</MainContainer>
				<Subscribe bg={"/images/home/form-background.png"} />
			</Wrapper>
		</>
	);
};
export default HomeScreen;
