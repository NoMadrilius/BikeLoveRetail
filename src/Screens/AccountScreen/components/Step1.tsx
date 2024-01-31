import { Text } from "@/components/Text/Text";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { useEffect, useState } from "react";
import { templates } from "../../../../theme/templates";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import { useAuthStore } from "@/store/AuthStore";
import { observer } from "mobx-react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Step1 = ({ step }: any) => {
	const { t } = useTranslation();
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [openSelectLang, setOpenSelectLang] = useState(false);
	const [openSelectGender, setOpenSelectGender] = useState(false);
	const [birthday, setBirthday] = useState<any>("");
	const [lang, setLang] = useState<"English" | "Russian" | "Ukrainin" | string>(
		""
	);
	const [patronymic, setPatronymic] = useState("");
	const [bike, setBike] = useState("");
	const [gender, setGender] = useState<"Male" | "Female" | string>("");

	const authStore = useAuthStore();
	const [isAuth, setIsAuth] = useState(false);

	const languageLabels: Record<string, string> = {
		English: "en",
		Russian: "ru",
		Ukrainin: "ua",
		"": "lang",
	};
	const genderLabels: Record<string, string> = {
		Male: "male",
		Female: "female",
		"": "gender",
	};

	const selectedLang = () => {
		const langKey = languageLabels[lang] || ""; // По умолчанию возвращаем пустую строку
		return t(`account.step1.${langKey}`);
	};
	const selectedGender = () => {
		const genderKey = genderLabels[gender] || ""; // По умолчанию возвращаем пустую строку
		return t(`account.step1.${genderKey}`);
	};

	useEffect(() => {
		const fetchData = async () => {
			const _isAuth = authStore.checkAuth();
			//@ts-ignore
			setIsAuth(_isAuth);
			if (!_isAuth) {
				try {
					// Попытка обновить токен
					console.log("success");
					await authStore.refreshToken();
				} catch (refreshError) {
					// Обработка ошибки обновления токена
					console.log("Failed to refresh token:", refreshError);
				}

				// После обновления токена, обновляем данные корзины и списка желаемого
			}
		};

		fetchData();
	}, []);
	useEffect(() => {
		if (isAuth) {
			setName(authStore.loginUserResponse.user.firstName);
			setEmail(authStore.loginUserResponse.user.email);
			setLastName(authStore.loginUserResponse.user.lastName);
			setBike(authStore.loginUserResponse.user.bike);
			setPatronymic(authStore.loginUserResponse.user.patronymic);
			setBirthday(dayjs(authStore.loginUserResponse.user.birth));
		}
	}, [isAuth, step, authStore.loginUserResponse.user]);

	const updateInfo = async () => {
		const body = {
			email,
			firstName: name,
			lastName,
			patronymic,
			bike,
			gender,
			birth: birthday.$d,
			language: lang,
		};
		authStore.selfUpdate(body);
	};
	const onClickSelectLang = (lang: string) => {
		setLang(lang);
		setOpenSelectLang(false);
	};
	const onClickSelectGender = (gen: string) => {
		setGender(gen);
		setOpenSelectGender(false);
	};

	return (
		<>
			<Wrapper>
				<Text color={colors.black} size='22px' fontStyle={fonts.f600}>
					{t("account.step1.mainData")}
				</Text>
				<InputsContainer>
					<InputField
						placeholder={t("account.step1.surname")}
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<InputField
						placeholder={t("account.step1.name")}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<InputField
						placeholder={t("account.step1.patronomic")}
						value={patronymic}
						onChange={(e) => setPatronymic(e.target.value)}
					/>
					<InputField
						placeholder={t("account.step1.bike")}
						value={bike}
						onChange={(e) => setBike(e.target.value)}
					/>

					<SelectField>
						<Text
							color={gender ? colors.black : colors.grayBorder}
							size='16px'
							fontStyle={fonts.f400}>
							{selectedGender()}
						</Text>
						<Arrow
							width={20}
							height={20}
							alt='Arrow'
							src='/icons/catArrow.svg'
							onClick={() => setOpenSelectGender(!openSelectGender)}
						/>
						{openSelectGender && (
							<SelectArea>
								<SelectItem>
									<Text
										color={colors.black}
										size='16px'
										fontStyle={fonts.f400}
										func={() => onClickSelectGender("Male")}>
										{t("account.step1.male")}
									</Text>
								</SelectItem>

								<SelectItem>
									<Text
										color={colors.black}
										size='16px'
										fontStyle={fonts.f400}
										func={() => onClickSelectGender("Female")}>
										{t("account.step1.female")}
									</Text>
								</SelectItem>
							</SelectArea>
						)}
					</SelectField>

					<SelectField>
						<Text
							color={lang ? colors.black : colors.grayBorder}
							size='16px'
							fontStyle={fonts.f400}>
							{selectedLang()}
						</Text>
						<Arrow
							width={20}
							height={20}
							alt='Arrow'
							src='/icons/catArrow.svg'
							onClick={() => setOpenSelectLang(!openSelectLang)}
						/>
						{openSelectLang && (
							<SelectArea>
								<SelectItem>
									<Text
										color={colors.black}
										size='16px'
										fontStyle={fonts.f400}
										func={() => onClickSelectLang("Ukrainin")}>
										{t("account.step1.ua")}
									</Text>
								</SelectItem>

								<SelectItem>
									<Text
										color={colors.black}
										size='16px'
										fontStyle={fonts.f400}
										func={() => onClickSelectLang("English")}>
										{t("account.step1.en")}
									</Text>
								</SelectItem>
								<SelectItem>
									<Text
										color={colors.black}
										size='16px'
										fontStyle={fonts.f400}
										func={() => onClickSelectLang("Russian")}>
										{t("account.step1.ru")}
									</Text>
								</SelectItem>
							</SelectArea>
						)}
					</SelectField>

					<InputField
						placeholder='E-mail'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							sx={{ width: "100%" }}
							label={t("account.step1.birthDate")}
							value={birthday || ""}
							onChange={(newValue) => setBirthday(newValue)}
						/>
					</LocalizationProvider>
				</InputsContainer>
				<ButtonsContainer>
					<ButtonCustom
						width={"188px"}
						height={"56px"}
						type={"default"}
						label={t("account.step1.save")}
						func={() => updateInfo()}
					/>
					<ButtonCustom
						width={"188px"}
						height={"56px"}
						type={"default"}
						label={"Выйти"}
						func={() => authStore.logout()}
					/>
				</ButtonsContainer>
			</Wrapper>
		</>
	);
};
export default observer(Step1);

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const InputsContainer = styled.div`
	margin-top: 42px;
	display: flex;
	flex-direction: column;
	row-gap: 14px;
	width: 368px;
	margin: 42px 0 60px;
	@media (max-width: 756px) {
		margin-left: 0;
		width: 100%;
		align-items: center;
	}
`;
const ButtonsContainer = styled.div`
	display: flex;
	column-gap: 10px;
`;
const InputField = styled.input`
	all: unset;
	width: 100%;
	height: 48px;
	border: 1px solid ${colors.grayBorder};
	padding: 15px 30px;
	box-sizing: border-box;
	border-radius: 5px;
	color: ${colors.black};
`;
const SelectArea = styled.div`
	position: absolute;
	width: calc(100% + 2px);
	background-color: white;
	border: 1px solid ${colors.grayBorder};
	border-top: none;
	left: -1px;
	height: auto;
	top: 40px;
	padding: 0 0 15px 0;
	border-radius: 0 0 10px 10px;
	z-index: 5;
`;
const SelectField = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 48px;
	border: 1px solid ${colors.grayBorder};
	padding: 15px 30px;
	box-sizing: border-box;
	border-radius: 5px;
	color: ${colors.grayBorder};
`;
const SelectItem = styled.div`
	${templates.centerContent};
	height: 20px;
	padding: 15px 30px;
	cursor: pointer;
	&:hover {
		background-color: ${colors.redBlur};
	}
`;
const Arrow = styled(Image)`
	width: 20px;
	height: 20px;
	cursor: pointer;
`;
