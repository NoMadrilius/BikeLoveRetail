import { css, styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { metrics } from "../../../../theme/metrics";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { Children } from "react";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import { useTranslation } from "react-i18next";

const GROUP1 = [
	{
		bg: "/images/home/workshop.png",
		size: false,
	},
	{
		title: "BIKELOVE WORKSHOP",
		subTitle:
			"Веломастерская, в которой мы оказываем услуги гарантийного и послегарантийного обслуживания и ремонта велосипедов.",
		bgColor: "rgba(74, 84, 80, 1)",
		size: false,
	},
];
const GROUP2 = [
	{
		title: "BikeLove",
		subTitle:
			"Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
		bgColor: "gray",
		size: true,
	},
	{
		title: "Новая коллекция осенней одежды Northwave",
		subTitle:
			"Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
		bg: "/images/home/mountains.png",
		size: true,
	},
	{
		title: "Выбери велосипед мечты",
		subTitle: "какак  кака ка",
		bg: "/images/home/women.png",
		size: false,
	},
	{
		title: "Новая коллекция осенней одежды Northwave",
		subTitle:
			"Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
		bg: "/images/home/manOnBIke.png",
		size: false,
	},
	{
		title: "Новая коллекция осенней одежды Northwave",
		subTitle:
			"Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
		bgColor: "rgba(57, 54, 24, 1)",
		size: false,
	},
];
const Block = ({ title, subTitle, bgColor, bg, size, children }: any) => {
	return (
		<BlockWrapper bg={bg} size={size} bgColor={bgColor}>
			<>{children}</>
		</BlockWrapper>
	);
};

export const ResponsiveBlockGroup = ({ variant }: any) => {
	const { t } = useTranslation();
	return (
		<MainWrapper>
			{variant === "1" && (
				<>
					<Container>
						<Text color={colors.black} size='42px' fontStyle={fonts.f500}>
							{t("home.blockGroups.text1")}
						</Text>
						<ContainerRow>
							<Block {...GROUP1[0]} />
							<Block {...GROUP1[1]}>
								<Text color={colors.white} size='39px' fontStyle={fonts.f700}>
									{t("home.blockGroups.text2")}
								</Text>
								<Text color={colors.white} size='19px' fontStyle={fonts.f500}>
									{t("home.blockGroups.text3")}
								</Text>
								<Input placeholder={t("home.blockGroups.text12")} />
								<ButtonCustom
									width={"264px"}
									height={"50px"}
									type={"default"}
									label={t("home.blockGroups.text14")}
								/>
							</Block>
						</ContainerRow>
					</Container>
				</>
			)}
			{variant === "2" && (
				<>
					<Container>
						<Text color={colors.black} size='42px' fontStyle={fonts.f500}>
							{t("home.blockGroups.text4")}
						</Text>
						<ContainerRow>
							<Block {...GROUP2[0]}>
								<Text color={colors.white} size='39px' fontStyle={fonts.f700}>
									{t("home.blockGroups.text5")}
								</Text>
								<Text color={colors.white} size='19px' fontStyle={fonts.f500}>
									{t("home.blockGroups.text6")}
								</Text>
								<Text
									color={"rgba(255, 255, 255, 0.5)"}
									size='16px'
									fontStyle={fonts.f700}>
									{t("home.blockGroups.text7")}
								</Text>
							</Block>
							<Block {...GROUP2[1]} />
						</ContainerRow>
						<Block {...GROUP2[2]}>
							<Text color={colors.white} size='39px' fontStyle={fonts.f700}>
								{t("home.blockGroups.text9")}
							</Text>
							<Text
								color={colors.white}
								size='21px'
								fontStyle={fonts.f500}
								preline>
								{t("home.blockGroups.text8")}
							</Text>
							<ButtonCustom
								width={"264px"}
								height={"50px"}
								type={"default"}
								label={t("home.blockGroups.text9")}
							/>
						</Block>
					</Container>
				</>
			)}
			{variant === "3" && (
				<>
					<Block {...GROUP2[3]}>
						<Text color={colors.white} size='39px' fontStyle={fonts.f700}>
							{t("home.blockGroups.text10")}
						</Text>
						<Text
							color={colors.white}
							size='21px'
							fontStyle={fonts.f500}
							preline>
							{t("home.blockGroups.text11")}
						</Text>
						<Container3>
							<Input
								placeholder={t("home.blockGroups.text12")}
								variant={true}
							/>
							<ButtonCustom
								width={"264px"}
								height={"50px"}
								type={"default"}
								label={t("home.blockGroups.text13")}
							/>
						</Container3>
					</Block>
				</>
			)}
		</MainWrapper>
	);
};

const BlockWrapper = styled.div<{
	bg?: string;
	size: boolean;
	bgColor?: string;
}>`
	width: 100%;
	height: ${(p) => (p.size ? "550px" : "330px")};
	padding: 30px 50px 48px 50px;
	background-image: url(${(p) => p.bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-color: ${(p) => p.bg || p.bgColor};
	border-radius: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: ${metrics.mobile}) {
		height: ${(p) => (p.size ? "402px" : "330px")};
		padding: 24px 24px 24px 24px;
	}
`;
const MainWrapper = styled.div`
	margin-top: 31px;
	@media (max-width: ${metrics.mobile}) {
		margin-top: 30px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 30px;
`;

const ContainerRow = styled.div`
	display: flex;
	column-gap: 30px;
	@media (max-width: 1100px) {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
	}
`;
const Container3 = styled.div`
	display: flex;
	column-gap: 30px;
	@media (max-width: 550px) {
		flex-direction: column;
		row-gap: 10px;
	}
`;
const ResContainer = styled.div`
	display: none;
	@media (max-width: 950px) {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
	}
`;
const Input = styled.input<{ variant?: boolean }>`
	all: unset;
	width: 100%;
	border: 1px solid ${(p) => (p.variant ? colors.white : colors.grayBorder)};
	border-radius: 5px;
	height: 48px;
	padding: 0 30px;
	box-sizing: border-box;
	${(p) =>
		p.variant &&
		css`
			width: 360px;
			@media (max-width: 800px) {
				width: 100%;
			}
			&::placeholder {
				color: white;
			}
		`}
`;
