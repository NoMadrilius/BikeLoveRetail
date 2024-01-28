import { Text } from "@/components/Text/Text";

import { styled } from "styled-components";
import { fonts } from "../../../../theme/fonts";
import { colors } from "../../../../theme/colors";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Navigation = ({ setStep, step }: any) => {
	const { t } = useTranslation();
	const router = useRouter();
	const TABS = [
		{
			title: t("account.navigation.presonalData"),
			step: 0,
			img: "/images/account/icons/account.svg",
			link: "",
		},
		{
			title: t("account.navigation.orders"),
			step: 1,
			img: "/images/account/icons/invoice.svg",
			link: "",
		},
		{
			title: t("account.navigation.wishList"),
			step: 2,
			img: "/images/account/icons/heart.svg",
			link: "/wish-list",
		},
		{
			title: t("account.navigation.sawProducts"),
			step: 3,
			img: "/images/account/icons/eye.svg",
			link: "",
		},
		{
			title: t("account.navigation.feedBack"),
			step: 4,
			img: "/images/account/icons/chat.svg",
			link: "",
		},
	];
	const onClick = (step: number, link: string) => {
		setStep(step);

		if (link) {
			router.push(link);
		}
	};

	return (
		<>
			<Wrapper>
				<Text
					color={colors.black}
					size='15px'
					fontStyle={fonts.f500}
					textTransform='uppercase'>
					{t("account.navigation.feedBack")}
				</Text>
				<ItemsWrapper>
					{TABS.map((el, index) => (
						<NavItem key={index} onClick={() => onClick(el.step, el.link)}>
							<Icon src={el.img} />
							<Text
								color={step === el.step ? colors.redMain : colors.black}
								size='15px'
								fontStyle={fonts.f600}
								whiteSpace>
								{el.title}
							</Text>
						</NavItem>
					))}
				</ItemsWrapper>
			</Wrapper>
		</>
	);
};
export default Navigation;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 750px) {
		align-items: start;
	}
`;
const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 25px;
	margin-top: 43px;
	@media (max-width: 750px) {
		flex-direction: row;
		column-gap: 20px;
		row-gap: 10px;
		flex-wrap: wrap;
		margin-top: 15px;
		margin-bottom: 40px;
	}
`;

const NavItem = styled.div`
	display: flex;
	align-items: center;
	column-gap: 15px;
	cursor: pointer;
`;
const Icon = styled.img`
	width: 21px;
	height: 21px;
	@media (max-width: 750px) {
		display: none;
	}
`;
