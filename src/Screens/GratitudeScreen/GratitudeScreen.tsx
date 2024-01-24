import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { styled } from "styled-components";
import { metrics } from "../../../theme/metrics";
import { templates } from "../../../theme/templates";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";
import Image from "next/image";
import axios from "axios";
import { FC } from "react";

type Props = {
	id?: string;
};

const GratitudeScreen: FC<Props> = ({ id }) => {
	const onPress = async () => {
		try {
			const response = await axios.post("/api/create-payment");
			console.log(response.data);
			if (typeof window !== "undefined") {
				window.location.href = response.data;
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<>
				<UseMetaData title={"Спасибо !"} img={""} description={""} />
				<Wrapper>
					<Modal>
						<Text
							size='32px'
							fontStyle={fonts.f500}
							color={colors.white}
							textAlign='center'>
							Замовлення створено
						</Text>
						<Text
							size='32px'
							fontStyle={fonts.f500}
							color={colors.white}
							textAlign='center'>
							№ {id}
						</Text>
						<Container>
							<Text
								size='20px'
								fontStyle={fonts.f500}
								color={colors.white}
								textAlign='center'>
								ЧЕКАЄМО НА ОПЛАТУ:
							</Text>
							<Button onClick={() => onPress()}>
								<Image
									alt='LiqPay'
									width={64}
									height={32}
									src='/images/account/icons/liqpay.svg'
									style={{ marginRight: "10px" }}
								/>
							</Button>
						</Container>
						<Text
							size='16px'
							fontStyle={fonts.f400}
							color={colors.white}
							textAlign='center'>
							Детальну інформацію про замовлення можете побачити в особистому
							кабінеті. Ви будете проінформовані про зміну інформації по
							замовленню додатково
						</Text>
					</Modal>
				</Wrapper>
			</>
		</>
	);
};
export default GratitudeScreen;

const Wrapper = styled.div`
	${templates.centerContent};
	background-image: url("/images/gratitude/bg.png");
	background-size: cover;
	background-position: center;
	width: 100%;
	height: calc(100vh - 90px);
	margin-top: 90px;
	@media (max-width: ${metrics.mobile}) {
		margin-top: 74px;
		height: calc(100vh - 74px);
	}
`;
const Modal = styled.div`
	width: 671px;
	height: 370px;
	border-radius: 15px;
	background-color: rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(10px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 20px;
	padding: 75px;
`;
const Container = styled.div`
	${templates.centerContent};
	column-gap: 10px;
`;
const Button = styled.div`
	width: 188px;
	height: 52px;
	${templates.centerContent};
	background-color: ${colors.white};
	border: 1px solid ${colors.grayBorder};
	border-radius: 5px;
	cursor: pointer;
	@media (max-width: 640px) {
		width: 100%;
	}
`;
