import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import Registration from "./components/Registration";
import DeliveryInfo from "./components/DeliveryInfo";
import PayInfo from "./components/PayInfo";
import ListItems from "./components/ListItems";
import { useCartStore } from "@/store/CartStore";
import { useEffect, useState } from "react";
import { IProduct } from "@/types/types";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";

const CheckListScreen = () => {
	const road = [
		{ title: "Корзина", link: "/" },
		{ title: "Оформление заказа", link: "/" },
	];

	const cartStore = useCartStore();
	const [cart, setCart] = useState<IProduct[]>([]);

	useEffect(() => {
		setCart(cartStore.cart);
	}, []);
	return (
		<>
			<UseMetaData
				title={"Оформление заказа"}
				img={""}
				description={"толдфыад"}
			/>
			<Wrapper>
				<BreadCrumbs road={road} />

				<Container>
					<Left>
						<Registration />
						<DeliveryInfo />
						<PayInfo />
					</Left>
					<Line />
					<Right>
						<Text color={colors.black} size='22px' fontStyle={fonts.f600}>
							СОСТАВ ЗАКАЗА
						</Text>
						{cart && (
							<>
								{cart?.map((el, index) => (
									<ListItems data={el} key={index} />
								))}
							</>
						)}
						<TotalPrice>
							<Text
								color={colors.black}
								size='18px'
								fontStyle={fonts.f400}
								margin='0 auto 0 0'>
								ИТОГО:
							</Text>
							<Text
								color={colors.black}
								size='18px'
								fontStyle={fonts.f400}
								margin='0 0 0 auto'>
								{prettyPrice(
									cart.reduce(
										(acc, item) => acc + item.retailPrice * item.quantity,
										0
									)
								)}{" "}
								UAH
							</Text>
						</TotalPrice>
					</Right>
				</Container>
			</Wrapper>
		</>
	);
};
export default CheckListScreen;
//
const TotalPrice = styled.div`
	display: flex;
	padding: 35px 39px;
	background-color: ${colors.redBlur};
	border-radius: 15px;
	margin-top: 60px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
`;
const Container = styled.div`
	display: flex;
	column-gap: 23px;
	@media (max-width: 1245px) {
		flex-direction: column-reverse;
		align-items: center;
		row-gap: 23px;
	}
`;
const Left = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 40px;
	width: 55%;
	@media (max-width: 1245px) {
		width: 100%;
	}
`;
const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;
	@media (max-width: 1245px) {
		width: 100%;
	}
`;
const Line = styled.div`
	width: 1px;
	height: 1327px;
	background-color: ${colors.grayBorder};
	@media (max-width: 1245px) {
		display: none;
	}
`;
