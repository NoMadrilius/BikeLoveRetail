import { FC } from "react";
import { styled } from "styled-components";
import { metrics } from "../../../../theme/metrics";
import { templates } from "../../../../theme/templates";
import { colors } from "../../../../theme/colors";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { useTranslation } from "react-i18next";

type Props = {
	bg: string;
};

const Subscribe: FC<Props> = ({ bg }) => {
	const { t } = useTranslation();
	return (
		<Wrapper bg={bg}>
			<Text
				size='40px'
				fontStyle={fonts.f700}
				color={colors.white}
				maxWidth='100%'
				preline>
				{t("home.subscribe.1")}
			</Text>
			<InputWrapper>
				<InputField placeholder='E-mail' />
				<RespContainer>
					<ButtonCustom
						type='default'
						width={"100%"}
						height={"57px"}
						buttonActive
						label={t("home.subscribe.2")}
					/>
				</RespContainer>
				<ResContainer>
					<ButtonCustom
						type='default'
						width={"250px"}
						height={"57px"}
						buttonActive
						label={t("home.subscribe.2")}
					/>
				</ResContainer>
			</InputWrapper>
		</Wrapper>
	);
};
export default Subscribe;

const Wrapper = styled.div<{ bg: string }>`
	${templates.centerContent};
	justify-content: space-between;
	margin-top: 120px;
	width: 100%;
	height: 366px;
	padding: 0 124px;
	background-image: url(${(p) => p.bg});
	box-sizing: border-box;
	@media (max-width: ${metrics.desktop}) {
		padding: 0 24px;
		flex-direction: column;
		justify-content: center;
		row-gap: 28px;
	}
	@media (max-width: ${metrics.mobile}) {
		margin-top: 60px;
		padding: 0 20px;
	}
`;
const InputWrapper = styled.div`
	display: flex;
	width: 50%;
	height: 57px;
	border-radius: 5px;
	@media (max-width: ${metrics.desktop}) {
		width: 60%;
		flex-direction: column;
		height: auto;
		row-gap: 10px;
	}
	@media (max-width: ${metrics.mobile}) {
		flex-direction: column;
		row-gap: 10px;
		width: 100%;
	}
`;
const InputField = styled.input`
	all: unset;
	width: 100%;
	margin-left: 2px;
	padding: 20px 31px;
	box-sizing: border-box;
	background-color: ${colors.white};
`;
const ResContainer = styled.div`
	display: block;
	@media (max-width: ${metrics.desktop}) {
		display: none;
	}
`;
const RespContainer = styled.div`
	display: none;
	@media (max-width: ${metrics.desktop}) {
		display: block;
	}
`;
