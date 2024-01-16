import { styled } from "styled-components";
import { Header, NumberContainer } from "./Registration";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { templates } from "../../../../theme/templates";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import Image from "next/image";
import { useState } from "react";

const PayInfo = () => {
	const [selectedPayMethod, setSelectedPayMethod] = useState<"PP" | "L" | "P">(
		"PP"
	);
	return (
		<Wrapper>
			<Header>
				<NumberContainer>
					<Text color={colors.black} size='15px' fontStyle={fonts.f500}>
						3
					</Text>
				</NumberContainer>
				<Text color={colors.black} size='22px' fontStyle={fonts.f600}>
					ИНФОРМАЦИЯ ОБ ОПЛАТЕ
				</Text>
			</Header>
			<Container>
				<ButtonsContainer>
					<Button
						selected={selectedPayMethod === "PP"}
						onClick={() => setSelectedPayMethod("PP")}>
						<Text color={colors.black} size='15px' fontStyle={fonts.f500}>
							При получении
						</Text>
					</Button>
					<Button
						selected={selectedPayMethod === "L"}
						onClick={() => setSelectedPayMethod("L")}>
						<Image
							alt='LiqPay'
							width={64}
							height={32}
							src='/images/account/icons/liqpay.svg'
							style={{ marginRight: "10px" }}
						/>
					</Button>
					<Button
						selected={selectedPayMethod === "P"}
						onClick={() => setSelectedPayMethod("P")}>
						<Image
							alt='Portmone.com'
							width={119}
							height={34}
							src='/images/account/icons/portmone.svg'
							style={{ marginRight: "10px" }}
						/>
					</Button>
				</ButtonsContainer>
				<ButtonCustom
					width={"223px"}
					height={"56px"}
					type={"default"}
					label='Перейти к оплате'
				/>
				<Text
					color={colors.grayBorder}
					size='15px'
					fontStyle={fonts.f500}
					margin='41px 0 0 0'>
					Нажимая на эту кнопку я соглашаюсь с публичной офертой
				</Text>
				<Text
					color={colors.grayBorder}
					size='15px'
					fontStyle={fonts.f500}
					margin='24px 0 0 0'>
					© 2032 Интернет-магазин “BIKELOVE”
				</Text>
			</Container>
		</Wrapper>
	);
};
export default PayInfo;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 78px;
	@media (max-width: 756px) {
		margin-left: 0;
		align-items: center;
	}
`;
const ButtonsContainer = styled.div`
	display: flex;
	column-gap: 13px;
	margin: 42px 0 54px 0;
	@media (max-width: 640px) {
		flex-direction: column;
		row-gap: 12px;
		width: 100%;
	}
`;
const Button = styled.div<{ selected: boolean }>`
	width: 188px;
	height: 52px;
	${templates.centerContent};
	border: 1px solid ${(p) => (p.selected ? colors.redMain : colors.grayBorder)};
	border-radius: 5px;
	cursor: pointer;
	@media (max-width: 640px) {
		width: 100%;
	}
`;
