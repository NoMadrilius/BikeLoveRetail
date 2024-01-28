import { useState } from "react";
import { css, keyframes, styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { templates } from "../../../../theme/templates";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { Checkbox } from "@mui/material";
import { useAuthStore } from "@/store/AuthStore";
import { showToast } from "@/helpers/alertService/alertService";
import { useRouter } from "next/router";
import Loader from "@/helpers/Loader/Loader";
import { observer } from "mobx-react";
import InputMask from "react-input-mask";
import RenewPassword from "./components/RenewPassword";
import { useTranslation } from "react-i18next";

const Auth = () => {
	const { t } = useTranslation();
	const router = useRouter();
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
	//errors
	const [passwordsError, setPasswordsError] = useState(false);
	const [emailError, setEmailError] = useState(false);

	const label = { inputProps: { "aria-label": "Checkbox demo" } };
	const validateEmail = (email: string) => {
		// Пример простого регулярного выражения для проверки почты
		const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegExp.test(email);
	};
	const isLoginPhoneValid = loginPhone.replace(/[^0-9]/g, "").length >= 12;
	const isRegPhoneValid = regPhone.replace(/[^0-9]/g, "").length >= 12;

	const registerHandle = () => {
		if (regPassword !== regConfirmPassword) {
			setPasswordsError(true);
			setTimeout(() => {
				setPasswordsError(false);
			}, 3000);
			return showToast({
				info: t("auth.toast.passwordError"),
				title: t("auth.toast.error"),
				type: "error",
			});
		}
		if (!validateEmail(regEmail)) {
			setEmailError(true);
			setTimeout(() => {
				setEmailError(false);
			}, 3000);
			return showToast({
				info: t("auth.toast.emailError"),
				title: t("auth.toast.error"),
				type: "error",
			});
		}
		try {
			authStore.register({
				email: regEmail,
				firstName: regName,
				lastName: regLastName,
				password: regPassword,
				patronymic: regPatronymic,
				phone: regPhone.replace(/\s/g, ""),
			});
		} catch (error) {
			console.log(error);
		}
	};
	const loginHandle = () => {
		try {
			authStore.login({
				password: loginPassword,
				phone: loginPhone.replace(/\s/g, ""),
			});
		} catch (error) {
			console.log(error);
		}
	};

	const loginDisabled =
		!loginPassword.length || !isLoginPhoneValid || authStore.loadingLogin;

	const registerDisabled =
		!regEmail ||
		!regName ||
		!regLastName ||
		!isRegPhoneValid ||
		!regPassword ||
		!regConfirmPassword ||
		authStore?.loadingRegister;
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
						{t("auth.enter")}
					</Text>
					<InputMask
						mask='+380 99 999 99 99'
						value={loginPhone}
						onChange={(e) => setLoginPhone(e.target.value)}>
						{/*@ts-ignore*/}
						{(inputProps) => (
							<InputField placeholder={t("auth.tel")} {...inputProps} />
						)}
					</InputMask>
					<InputField
						placeholder={t("auth.password")}
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
							{t("auth.rememberMe")}
						</Text>
						<Text
							color={colors.grayMain}
							size='13px'
							fontStyle={fonts.f400}
							margin='0 0 0 auto'
							func={() => setStep(2)}
							hoverColor={colors.redMain}>
							{t("auth.remindPassword")}
						</Text>
					</RowContainer>
					<Button disabled={loginDisabled} onClick={() => loginHandle()}>
						<Text color={colors.white} size='15px' fontStyle={fonts.f400}>
							{authStore.loadingLogin ? <Loader /> : t("auth.enter")}
						</Text>
					</Button>
					<Text
						color={colors.grayMain}
						size='13px'
						fontStyle={fonts.f400}
						margin='10px 0'>
						{t("auth.pressOnThis")}
						<span style={{ color: "black", cursor: "pointer" }}>
							{t("auth.publicAff")}
						</span>
					</Text>
					<RowContainer>
						<Line />
						<Text
							color={colors.black}
							size='14px'
							fontStyle={fonts.f400}
							margin='0 20px'>
							{t("auth.or")}
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
						{t("auth.toRegister")}
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
						{t("auth.registration")}
					</Text>
					<InputField
						placeholder={t("auth.name")}
						value={regName}
						onChange={(e) => setRegName(e.target.value)}
					/>
					<InputField
						placeholder={t("auth.surname")}
						value={regLastName}
						onChange={(e) => setRegLastName(e.target.value)}
					/>
					<InputField
						placeholder={t("auth.patronomic")}
						value={regPatronymic}
						onChange={(e) => setRegPatronymic(e.target.value)}
					/>
					<InputMask
						mask='+380 99 999 99 99'
						value={regPhone}
						onChange={(e) => setRegPhone(e.target.value)}>
						{/*@ts-ignore*/}
						{(inputProps) => (
							<InputField placeholder={t("auth.tel")} {...inputProps} />
						)}
					</InputMask>
					<InputField
						error={emailError}
						placeholder='Email'
						value={regEmail}
						onChange={(e) => setRegEmail(e.target.value)}
					/>
					<InputField
						error={passwordsError}
						placeholder={t("auth.password")}
						value={regPassword}
						onChange={(e) => setRegPassword(e.target.value)}
						type='password'
					/>
					<InputField
						error={passwordsError}
						placeholder={t("auth.rePassword")}
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
							{t("auth.rememberMe")}
						</Text>
						<Text
							color={colors.grayMain}
							size='13px'
							fontStyle={fonts.f400}
							margin='0 0 0 auto'
							func={() => console.log("hello")}
							hoverColor={colors.redMain}>
							{t("auth.remindPassword")}
						</Text>
					</RowContainer>
					<Button onClick={() => registerHandle()} disabled={registerDisabled}>
						<Text color={colors.white} size='15px' fontStyle={fonts.f400}>
							{t("auth.toRegister")}
						</Text>
					</Button>
					<Text
						color={colors.grayMain}
						size='13px'
						fontStyle={fonts.f400}
						margin='10px 0'>
						{t("auth.pressOnThis")}
						<span
							style={{ color: "black", cursor: "pointer", marginLeft: "5px" }}>
							{t("auth.publicAff")}
						</span>
					</Text>
					<RowContainer>
						<Line />
						<Text
							color={colors.black}
							size='14px'
							fontStyle={fonts.f400}
							margin='0 20px'>
							{t("auth.or")}
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
						{t("auth.iamAlredyRegister")}
					</Text>
				</Wrapper>
			)}
			{step === 2 && <RenewPassword setMainStep={setStep} />}
			<></>
		</>
	);
};
export default observer(Auth);

// Anim
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(3px); }
`;

const Wrapper = styled.div`
	width: 479px;
	padding: 40px 55px;
	background-color: white;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	margin: 120px auto;
	margin-bottom: 0;
	padding-bottom: 120px;
	@media (max-width: 600px) {
		width: 100%;
		padding: 30px 15px;
	}
`;
const InputField = styled.input<{ error?: boolean }>`
	all: unset;
	padding: 15px 30px;
	margin-top: 14px;
	border: 1px solid
		${({ error }) => (error ? colors.redMain : colors.grayBorder)};
	border-radius: 5px;
	color: ${({ error }) => (error ? colors.redMain : colors.black)};
	font-family: ${fonts.f400.fontFamily};
	font-weight: 500;
	transition: border-color 0.3s ease, color 0.3s ease;

	&:focus {
		border-color: ${({ error }) =>
			error ? colors.redMain : colors.grayBorder};
	}

	${({ error }) =>
		error &&
		css`
			animation: ${shakeAnimation} 0.4s ease-in-out;
		`}
`;
const RowContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Button = styled.button`
	${templates.centerContent};
	width: 368px;
	height: 50px;
	border-radius: 5px;
	background-color: ${colors.redMain};
	cursor: pointer;
	@media (max-width: 600px) {
		width: 100%;
	}
	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${colors.black};
`;
