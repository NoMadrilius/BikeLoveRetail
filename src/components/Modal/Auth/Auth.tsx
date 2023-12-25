import { useState } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { templates } from "../../../../theme/templates";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { Checkbox } from "@mui/material";
import { useAuthStore } from "@/store/AuthStore";
import { showToast } from "@/helpers/alertService/alertService";

const Auth = () => {
	const authStore = useAuthStore();
	const [step, setStep] = useState(0);
	const [ok, setOk] = useState(false);
	/// Login Data
	const [loginPhone, setLoginPhone] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	/// Register Data
	const [regName, setRegName] = useState("");
	const [regLastName, setRegLastName] = useState("");
	const [regPatronymic, setRegPatronymic] = useState("");
	const [regEmail, setRegEmail] = useState("");
	const [regPhone, setRegPhone] = useState("");
	const [regPassword, setRegPassword] = useState("");
	const [regConfirmPassword, setRegConfirmPassword] = useState("");

	const label = { inputProps: { "aria-label": "Checkbox demo" } };

	const registerHandle = () => {
		try {
			authStore.register({
				email: regEmail,
				firstName: regName,
				lastName: regLastName,
				password: regPassword,
				patronymic: regPatronymic,
				phone: regPhone,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<UseMetaData
				title={step === 0 ? "Login" : "Registration"}
				img={""}
				description={""}
			/>
			{step === 0 && (
				<Wrapper>
					<Text
						color={colors.black}
						size='22px'
						fontStyle={fonts.f600}
						margin='0 auto 16px 0'>
						ВХОД
					</Text>
					<InputField
						placeholder='Телефон'
						value={loginPhone}
						onChange={(e) => setLoginPhone(e.target.value)}
					/>
					<InputField
						placeholder='Пароль'
						value={loginPassword}
						onChange={(e) => setLoginPassword(e.target.value)}
						type='password'
					/>
					<RowContainer style={{ margin: "10px 0" }}>
						<Checkbox
							{...label}
							defaultChecked
							sx={{
								color: colors.redMain,
								"&.Mui-checked": {
									color: colors.redMain,
								},
							}}
						/>
						<Text color={colors.black} size='13px' fontStyle={fonts.f400}>
							Запомнить меня
						</Text>
						<Text
							color={colors.grayMain}
							size='13px'
							fontStyle={fonts.f400}
							margin='0 0 0 auto'
							func={() => console.log("hello")}
							hoverColor={colors.redMain}>
							Напомнить пароль
						</Text>
					</RowContainer>
					<Button active>
						<Text color={colors.white} size='15px' fontStyle={fonts.f400}>
							Войти
						</Text>
					</Button>
					<Text
						color={colors.grayMain}
						size='13px'
						fontStyle={fonts.f400}
						margin='10px 0'>
						Нажимая на эту кнопку я соглашаюсь с
						<span style={{ color: "black", cursor: "pointer" }}>
							{" "}
							публичной офертой
						</span>
					</Text>
					<RowContainer>
						<Line />
						<Text
							color={colors.black}
							size='14px'
							fontStyle={fonts.f400}
							margin='0 20px'>
							ИЛИ
						</Text>
						<Line />
					</RowContainer>
					<Text
						color={colors.grayMain}
						size='14px'
						fontStyle={fonts.f400}
						func={() => setStep(1)}
						margin='5px auto'
						hoverColor={colors.redMain}>
						Зарегистрироваться
					</Text>
				</Wrapper>
			)}
			{step === 1 && (
				<Wrapper>
					<Text
						color={colors.black}
						size='22px'
						fontStyle={fonts.f600}
						margin='0 auto 16px 0'>
						РЕГИСТАРЦИЯ
					</Text>
					<InputField
						placeholder='Имя'
						value={regName}
						onChange={(e) => setRegName(e.target.value)}
					/>
					<InputField
						placeholder='Фамилия'
						value={regLastName}
						onChange={(e) => setRegLastName(e.target.value)}
					/>
					<InputField
						placeholder='Отчество'
						value={regPatronymic}
						onChange={(e) => setRegPatronymic(e.target.value)}
					/>
					<InputField
						placeholder='Телефон'
						value={regPhone}
						onChange={(e) => setRegPhone(e.target.value)}
					/>
					<InputField
						placeholder='Email'
						value={regEmail}
						onChange={(e) => setRegEmail(e.target.value)}
					/>
					<InputField
						placeholder='Пароль'
						value={regPassword}
						onChange={(e) => setRegPassword(e.target.value)}
						type='password'
					/>
					<InputField
						placeholder='Повторите пароль'
						value={regConfirmPassword}
						onChange={(e) => setRegConfirmPassword(e.target.value)}
						type='password'
					/>
					<RowContainer style={{ margin: "10px 0" }}>
						<Checkbox
							{...label}
							defaultChecked
							sx={{
								color: colors.redMain,
								"&.Mui-checked": {
									color: colors.redMain,
								},
							}}
						/>
						<Text color={colors.black} size='13px' fontStyle={fonts.f400}>
							Запомнить меня
						</Text>
						<Text
							color={colors.grayMain}
							size='13px'
							fontStyle={fonts.f400}
							margin='0 0 0 auto'
							func={() => console.log("hello")}
							hoverColor={colors.redMain}>
							Напомнить пароль
						</Text>
					</RowContainer>
					<Button
						active={!authStore.loadingRegister}
						onClick={() => registerHandle()}>
						<Text color={colors.white} size='15px' fontStyle={fonts.f400}>
							Зарегистрироваться
						</Text>
					</Button>
					<Text
						color={colors.grayMain}
						size='13px'
						fontStyle={fonts.f400}
						margin='10px 0'>
						Нажимая на эту кнопку я соглашаюсь с
						<span style={{ color: "black", cursor: "pointer" }}>
							{" "}
							публичной офертой
						</span>
					</Text>
					<RowContainer>
						<Line />
						<Text
							color={colors.black}
							size='14px'
							fontStyle={fonts.f400}
							margin='0 20px'>
							ИЛИ
						</Text>
						<Line />
					</RowContainer>
					<Text
						color={colors.grayMain}
						size='14px'
						fontStyle={fonts.f400}
						func={() => setStep(0)}
						margin='5px auto'
						hoverColor={colors.redMain}>
						Я уже зарегистрирован
					</Text>
				</Wrapper>
			)}
			<></>
		</>
	);
};
export default Auth;

const Wrapper = styled.div`
	width: 479px;
	padding: 40px 55px;
	background-color: white;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	margin: 120px auto;
`;
const InputField = styled.input`
	all: unset;
	padding: 15px 30px;
	margin-top: 14px;
	border: 1px solid ${colors.grayBorder};
	border-radius: 5px;
	color: ${colors.black};
	font-family: ${fonts.f400.fontFamily};
	font-weight: 500;
`;
const RowContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Button = styled.div<{ active: boolean }>`
	${templates.centerContent};
	width: 368px;
	height: 50px;
	border-radius: 5px;
	background-color: ${(p) => (p.active ? colors.redMain : colors.white)};
	cursor: pointer;
`;
const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${colors.black};
`;
