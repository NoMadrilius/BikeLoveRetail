import { Text } from "@/components/Text/Text";
import { useAuthStore } from "@/store/AuthStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import {
	AuthContainer,
	ColumnContainer,
	Icon,
	IconContainer,
	RowContainer,
} from "../SidebarStyles";
import Loader from "@/helpers/Loader/Loader";

const SideBarAuth = ({ setVisible }: any) => {
	const authStore = useAuthStore();
	const [_isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const router = useRouter();
	const goToAuth = () => {
		router.push("/auth");
		setVisible(false);
	};
	const goToAcc = () => {
		router.push("/account");
		setVisible(false);
	};
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const _isAuth = authStore.checkAuth();
			//@ts-ignore
			setIsAuth(_isAuth);
			if (!_isAuth) {
				try {
					// Попытка обновить токен
					console.log("success");
					await authStore.refreshToken();
					setIsLoading(false);
				} catch (refreshError) {
					// Обработка ошибки обновления токена
					console.log("Failed to refresh token:", refreshError);
					setIsLoading(false);
				}

				// После обновления токена, обновляем данные корзины и списка желаемого
			} else {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [router.pathname]);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : _isAuth ? (
				<AuthContainer
					style={{ justifyContent: "start", cursor: "pointer" }}
					onClick={() => goToAcc()}>
					<IconContainer style={{ marginRight: "8px" }}>
						<Text color={colors.white} size='16px' fontStyle={fonts.f500}>
							{authStore.loginUserResponse?.user?.firstName.substring(0, 1)}
						</Text>
					</IconContainer>
					<ColumnContainer style={{ marginLeft: "14px" }}>
						<RowContainer style={{ columnGap: "14px" }}>
							<Text color={colors.black} size='16px' fontStyle={fonts.f500}>
								{authStore.loginUserResponse?.user?.firstName}
							</Text>
						</RowContainer>
						<Text color={colors.grayMain} size='13px' fontStyle={fonts.f400}>
							{authStore.loginUserResponse?.user?.phoneNumber}
						</Text>
					</ColumnContainer>
				</AuthContainer>
			) : (
				<AuthContainer>
					<IconContainer>
						<Icon src='/images/home/icons/accountIcon.svg' />
					</IconContainer>
					<ColumnContainer style={{ marginLeft: "14px" }}>
						<RowContainer style={{ columnGap: "14px" }}>
							<Text
								color={colors.black}
								size='16px'
								fontStyle={fonts.f500}
								hoverColor={colors.redHover}
								func={() => goToAuth()}>
								Вход
							</Text>
							<Text color={colors.black} size='16px' fontStyle={fonts.f500}>
								|
							</Text>
							<Text
								color={colors.black}
								size='16px'
								fontStyle={fonts.f500}
								hoverColor={colors.redHover}
								func={() => goToAuth()}>
								Регистрация
							</Text>
						</RowContainer>
						<Text color={colors.black} size='13px' fontStyle={fonts.f400}>
							Авторизуйтесь для получения расширеніх возможностей
						</Text>
					</ColumnContainer>
				</AuthContainer>
			)}
		</>
	);
};
export default SideBarAuth;
