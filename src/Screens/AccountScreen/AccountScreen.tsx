import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { useEffect, useState } from "react";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { styled } from "styled-components";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import Navigation from "./components/Navigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2/Step2";
import { useAuthStore } from "@/store/AuthStore";

const AccountScreen = () => {
	const road = [
		{ title: "Личный кабинет", link: "" },
		{ title: "Персональные данные", link: "" },
	];

	const [step, setStep] = useState(0);
	return (
		<>
			<UseMetaData title={"Аккаунт"} img={""} description={"йцуйцк12к"} />
			<BreadCrumbs road={road} />
			<Text color={colors.black} size='42px' fontStyle={fonts.f500}>
				ПЕРСОНАЛЬНЫЕ ДАННЫЕ
			</Text>
			<MainWrapper>
				<Left>
					<Navigation setStep={setStep} step={step} />
				</Left>
				<Line />
				<Right>
					{step === 0 && (
						<>
							<Step1 step={step} />
						</>
					)}
					{step === 1 && <Step2 />}
				</Right>
			</MainWrapper>
		</>
	);
};
export default AccountScreen;

const MainWrapper = styled.div`
	display: flex;
	margin-top: 53px;
	margin-bottom: 100px;
	column-gap: 40px;
`;
const Left = styled.div``;
const Right = styled.div`
	width: 100%;
`;
const Line = styled.div`
	min-width: 1px;
	height: auto;
	background-color: ${colors.grayBorder};
`;
