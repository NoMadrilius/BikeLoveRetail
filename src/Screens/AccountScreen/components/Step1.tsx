import { Text } from "@/components/Text/Text";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { useEffect, useState } from "react";
import { templates } from "../../../../theme/templates";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import { useAuthStore } from "@/store/AuthStore";
import Image from "next/image";
import axios from "axios";

const Step1 = ({ step }: any) => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [birthday, setBirthday] = useState("");

	const authStore = useAuthStore();
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const _isAuth = authStore.checkAuth();
		setIsAuth(_isAuth);
	}, []);
	useEffect(() => {
		if (isAuth) {
			setName(authStore.loginUserResponse.user.firstName);
			setEmail(authStore.loginUserResponse.user.email);
			setLastName(authStore.loginUserResponse.user.lastName);
			setPhone(authStore.loginUserResponse.user.phoneNumber);
		}
	}, [isAuth, step]);

	const updateInfo = async () => {
		const body = {
			email,
			firstName: name,
			lastName: lastName,
		};
		try {
			const response = await axios.put("/api/updateSelfInfo");
			console.log(response.data);
		} catch (error) {
			console.log("error");
		}
	};
	console.log(authStore.loginUserResponse.user);

	return (
		<>
			<Wrapper>
				<Text color={colors.black} size='22px' fontStyle={fonts.f600}>
					ОСНОВНЫЕ ДАННЫЕ
				</Text>
				<InputsContainer>
					<InputField
						placeholder='Имя'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<InputField
						placeholder='Фамилия'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<InputField
						placeholder='E-mail'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<InputField
						placeholder='Номер'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<InputField
						placeholder='Дата рождения'
						value={birthday}
						onChange={(e) => setBirthday(e.target.value)}
					/>
				</InputsContainer>
				<Text color={colors.black} size='22px' fontStyle={fonts.f600}>
					Способы доставки
				</Text>
				<ButtonsContainer>
					<Button>
						<Image
							alt='Samovivoz Icon'
							width={22}
							height={22}
							src='/images/account/icons/samovivoz.svg'
							style={{ marginRight: "10px" }}
						/>
						<Text color={colors.black} size='16px' fontStyle={fonts.f400}>
							Самовывоз
						</Text>
					</Button>
					<Button>
						<Image
							alt='Nova Poshta'
							width={29}
							height={29}
							src='/images/account/icons/np.svg'
							style={{ marginRight: "10px" }}
						/>
						<Text color={colors.black} size='16px' fontStyle={fonts.f400}>
							Новая почта
						</Text>
					</Button>
				</ButtonsContainer>

				<Text color={colors.black} size='22px' fontStyle={fonts.f600}>
					Способы получения
				</Text>

				<ButtonsPayContainer>
					<ButtonPay>
						<Text color={colors.black} size='16px' fontStyle={fonts.f500}>
							При получении
						</Text>
					</ButtonPay>
					<ButtonPay>
						<Image
							alt='LiqPay'
							width={64}
							height={32}
							src='/images/account/icons/liqpay.svg'
							style={{ marginRight: "10px" }}
						/>
					</ButtonPay>
					<ButtonPay>
						<Image
							alt='Portmone.com'
							width={119}
							height={34}
							src='/images/account/icons/portmone.svg'
							style={{ marginRight: "10px" }}
						/>
					</ButtonPay>
				</ButtonsPayContainer>
				<ButtonCustom
					width={"188px"}
					height={"56px"}
					type={"default"}
					label='Сохранить'
					func={() => updateInfo()}
				/>
			</Wrapper>
		</>
	);
};
export default Step1;

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
const ButtonsContainer = styled.div`
	display: flex;
	column-gap: 13px;
	margin: 42px 0 60px;
	flex-wrap: wrap;
	row-gap: 13px;
`;
const Button = styled.div`
	width: 206px;
	height: 56px;
	${templates.centerContent};
	border: 1px solid ${colors.grayBorder};
	cursor: pointer;
	border-radius: 5px;
	@media (max-width: 700px) {
		width: 100%;
	}
`;
const ButtonsPayContainer = styled.div`
	display: flex;
	gap: 13px;
	margin: 42px 0 54px 0;
	flex-wrap: wrap;
	@media (max-width: 640px) {
		flex-direction: column;
		row-gap: 12px;
		width: 100%;
	}
`;
const ButtonPay = styled.div`
	width: 188px;
	height: 52px;
	${templates.centerContent};
	border: 1px solid ${colors.grayBorder};
	border-radius: 5px;
	@media (max-width: 640px) {
		width: 100%;
	}
`;
