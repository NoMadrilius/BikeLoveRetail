import { styled } from "styled-components";
import { templates } from "../../../../../theme/templates";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { FC, useState } from "react";
import Item from "./Item";
import { IOrderViewData } from "@/types/types";
import { useTranslation } from "react-i18next";

const testData = [
	{
		orderNumber: "785214",
		status: 1,
		date: "19.09.2024",
		items: [
			{
				title: "S-Works Tarmac SL7 - SRAM Red eTap AXS",
				price: "93000",
				img: "/mock/testCardByPropose.png",
			},
			{
				title: "S-Works Tarmac SL7 - SRAM Red eTap AXS",
				price: "93000",
				img: "/mock/testCardByPropose.png",
			},
			{
				title: "S-Works Tarmac SL7 - SRAM Red eTap AXS",
				price: "93000",
				img: "/mock/testCardByPropose.png",
			},
		],
	},
];
type Props = {
	data: IOrderViewData[];
};

const Step2: FC<Props> = ({ data }) => {
	const { t } = useTranslation();
	const [orderTab, setOrderTab] = useState(0);
	const TITLES = [
		{ title: t("account.step2.title1"), tab: 0 },
		{ title: t("account.step2.title2"), tab: 1 },
		{ title: t("account.step2.title3"), tab: 2 },
		{ title: t("account.step2.title4"), tab: 3 },
	];
	return (
		<>
			<>
				<Header>
					{TITLES.map((el, index) => (
						<Button
							key={index}
							active={el.tab === orderTab}
							onClick={() => setOrderTab(el.tab)}>
							<Text color={colors.black} size='15px' fontStyle={fonts.f400}>
								{el.title}
							</Text>
						</Button>
					))}
				</Header>
				{data && (
					<MainContainer>
						{data.map((el: any, index: number) => (
							<Item key={index} data={el} />
						))}
					</MainContainer>
				)}
			</>
		</>
	);
};
export default Step2;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Header = styled.div`
	display: flex;
	column-gap: 13px;
	@media (max-width: 1150px) {
		column-gap: 5px;
	}
	@media (max-width: 770px) {
		flex-wrap: wrap;
		row-gap: 5px;
	}
`;
const Button = styled.div<{ active: boolean }>`
	width: 179px;
	height: 56px;
	background-color: ${(p) => (p.active ? colors.redBlur : "transparent")};
	${templates.centerContent};
	border-radius: 5px;
	border: 1px solid ${colors.grayBorder};
	cursor: pointer;
	@media (max-width: 1150px) {
		width: 106px;
		height: 46px;
	}
`;
