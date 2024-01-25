import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import { footerItems } from "@/mock/data";
import { Text } from "../Text/Text";
import { fonts } from "../../../theme/fonts";
import { metrics } from "../../../theme/metrics";
import { Logo } from "../Header/HeaderStyles";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const socialIcons = [
	"/icons/social/viber.svg",
	"/icons/social/tg.svg",
	"/icons/social/inst.svg",
	"/icons/social/fb.svg",
	"/icons/social/tiktok.svg",
	"/icons/social/youtube.svg",
];

const Footer = () => {
	const { t } = useTranslation();
	const currentLang: "ua" | "ru" = i18next.language as "ua" | "ru";

	const rights = ["@ 2023", t("footer.allRights"), t("footer.publicAffert")];
	return (
		<Wrapper>
			<ItemsContainer>
				<Logo
					width={70}
					height={70}
					alt='Logo'
					style={{
						border: "2px solid white",
						borderRadius: "50%",
						marginBottom: "20px",
					}}
					src='/images/logo/logo.svg'
				/>
				{rights.map((el, index) => (
					<Text
						key={index}
						color={colors.white}
						size='14px'
						fontStyle={fonts.f400}>
						{el}
					</Text>
				))}
			</ItemsContainer>
			<Res1Container>
				{footerItems[currentLang].map((el: any, index: any) => (
					<ItemsContainer key={index}>
						<Text
							color={colors.white}
							size='14px'
							fontStyle={fonts.f400}
							textTransform='uppercase'
							margin='0 0 20px 0'>
							{el.title}
						</Text>
						{el.items.map((el: any, index: any) => (
							<Text
								key={index}
								color={colors.white}
								size='14px'
								fontStyle={fonts.f400}
								hoverColor={colors.redHover}>
								{el}
							</Text>
						))}
						{index === footerItems[currentLang].length - 1 && (
							<SocialContainer>
								{socialIcons.map((el, index) => (
									<Image
										width={23}
										height={23}
										alt='Social Icon'
										src={el}
										key={index}
										style={{ cursor: "pointer" }}
									/>
								))}
							</SocialContainer>
						)}
					</ItemsContainer>
				))}
			</Res1Container>
			<Res2Container>
				{footerItems[currentLang].slice(-2).map((el: any, index: any) => (
					<ItemsContainer key={index}>
						<Text
							color={colors.white}
							size='14px'
							fontStyle={fonts.f400}
							textTransform='uppercase'
							margin='0 0 20px 0'>
							{el.title}
						</Text>
						{el.items.map((el: any, index: any) => (
							<Text
								key={index}
								color={colors.white}
								size='14px'
								fontStyle={fonts.f400}
								hoverColor={colors.redHover}>
								{el}
							</Text>
						))}
						{index === footerItems[currentLang].slice(-2).length - 1 && (
							<SocialContainer>
								{socialIcons.map((el, index) => (
									<Image
										width={23}
										height={23}
										alt='Social Icon'
										src={el}
										key={index}
										style={{ cursor: "pointer" }}
									/>
								))}
							</SocialContainer>
						)}
					</ItemsContainer>
				))}
			</Res2Container>
			<></>
		</Wrapper>
	);
};
export default Footer;

const Res1Container = styled.div`
	width: 100%;
	background-color: rgba(17, 17, 17, 1);
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: 47px 124px;
	@media (max-width: ${metrics.desktop}) {
		padding: 47px 24px;
	}
	@media (max-width: 1000px) {
		display: none;
	}
	@media (max-width: ${metrics.mobile}) {
		padding: 47px 20px;
	}
`;
const Res2Container = styled.div`
	width: 100%;
	background-color: rgba(17, 17, 17, 1);
	display: none;
	justify-content: flex-end;
	align-items: start;
	column-gap: 40px;
	padding: 47px 124px;
	@media (max-width: ${metrics.desktop}) {
		padding: 47px 24px;
	}
	@media (max-width: 1000px) {
		display: flex;
	}
	@media (max-width: ${metrics.mobile}) {
		padding: 47px 20px;
	}
`;

const SocialContainer = styled.div`
	display: grid;
	margin-top: 36px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	row-gap: 10px;
	column-gap: 15px;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 366px;
	background-color: rgba(17, 17, 17, 1);
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: 47px 124px;
	@media (max-width: ${metrics.desktop}) {
		padding: 47px 24px;
	}
	@media (max-width: ${metrics.mobile}) {
		padding: 47px 20px;
	}
`;
const ItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;
