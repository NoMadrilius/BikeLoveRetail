import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { templates } from "../../../../theme/templates";
import { FC, useState } from "react";
import { IProduct } from "@/types/types";
import { useCartStore } from "@/store/CartStore";
import { observer } from "mobx-react";
import { useWishListStore } from "@/store/WishListStore";
import { useRouter } from "next/router";

type Props = {
	product: any;
	updateTotalPrice: any;
	setVisible: any;
};

const CartItem: FC<Props> = ({ product, updateTotalPrice, setVisible }) => {
	const cartStore = useCartStore();
	const wishStore = useWishListStore();
	const router = useRouter();

	const counterHandler = (symbol: string) => {
		if (symbol === "plus") {
			cartStore.updateProductQuantity(product.id, product.quantity + 1);
			updateTotalPrice(product.retailPrice);
		}
		if (symbol === "minus" && product.quantity > 1) {
			cartStore.updateProductQuantity(product.id, product.quantity - 1);
			updateTotalPrice(-product.retailPrice);
		}
	};
	const removeItem = () => {
		cartStore.removeFromCart(product.id);
		updateTotalPrice(-product.retailPrice * product.quantity);
	};
	const likeItem = () => {
		wishStore.addToWishList(product, product.image || null);
	};

	const productInWishList = wishStore.wishList?.some(
		(i) => i.id === product?.id
	);
	const goToProduct = () => {
		router.push(`/product/${product.id}`);
		setVisible(false);
	};
	return (
		<Wrapper>
			<Options>
				<Icon src='/images/card/can.svg' onClick={() => removeItem()} />
				{productInWishList ? (
					<Icon
						src='/images/card/heart-red.svg'
						onClick={() => wishStore?.removeFromWishList(product.id)}
					/>
				) : (
					<Icon src='/images/card/heart.svg' onClick={() => likeItem()} />
				)}
			</Options>
			<Picture
				src={product.image || "/mock/NoPhoto.png"}
				onClick={() => goToProduct()}
			/>
			<InfoContainer>
				<Text color={colors.black} size='16px' fontStyle={fonts.f600}>
					{product.name}
				</Text>
				<InfoBottomContainer>
					{/* {product.sale && (
						<SalePatch>
							<Text color={colors.white} size='14px' fontStyle={fonts.f400}>
								-{product.sale}%
							</Text>
						</SalePatch> 
					)}*/}
					{product?.oldRetailPrice && (
						<Text
							color={colors.grayMain}
							size='16px'
							fontStyle={fonts.f400}
							textDecoration='trought'>
							{prettyPrice(product?.oldRetailPrice)} UAH
						</Text>
					)}

					<Text color={colors.black} size='16px' fontStyle={fonts.f400}>
						{prettyPrice(product?.retailPrice)} UAH
					</Text>
				</InfoBottomContainer>
			</InfoContainer>
			<RightContainer>
				<CounterContainer>
					<Text
						color={colors.black}
						size='21px'
						fontStyle={fonts.f400}
						func={() => counterHandler("minus")}>
						-
					</Text>
					<CounterBox>
						<Text color={colors.black} size='17px' fontStyle={fonts.f400}>
							{product.quantity}
						</Text>
					</CounterBox>
					<Text
						color={colors.black}
						size='21px'
						fontStyle={fonts.f400}
						func={() => counterHandler("plus")}>
						+
					</Text>
				</CounterContainer>
				<Text
					color={colors.black}
					size='21px'
					fontStyle={fonts.f400}
					maxWidth='146px'
					whiteSpace>
					{prettyPrice(product.quantity * product.retailPrice)} UAH
				</Text>
			</RightContainer>
		</Wrapper>
	);
};
export default observer(CartItem);

const Options = styled.div`
	position: absolute;
	width: 75px;
	height: 35px;
	top: 5px;
	right: 5px;
	border-radius: 5px;
	${templates.centerContent};
	column-gap: 15px;
	box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
`;
const Icon = styled.img`
	cursor: pointer;
`;

const Wrapper = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	padding: 25px 0;
	border-bottom: 1px solid ${colors.grayBorder};
	@media (max-width: 765px) {
		row-gap: 13px;
		flex-wrap: wrap;
	}
`;
const Picture = styled.img`
	padding: 10px;
	width: 164px;
	height: 112px;
	border: 1px solid ${colors.grayBorder};
	border-radius: 10px;
`;
const InfoBottomContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 21px;
	align-items: center;
	gap: 6px;
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	margin: 0 auto 0 20px;
	@media (max-width: 765px) {
		margin: 0 auto 0 0;
	}
`;
const SalePatch = styled.div`
	background-color: ${colors.redMain};
	padding: 5px 7px;
	border-radius: 5px;
`;
const CounterContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 23px;
	@media (max-width: 1085px) {
		column-gap: 7px;
	}
`;
const CounterBox = styled.div`
	width: 45px;
	height: 45px;
	${templates.centerContent};
	border: 1px solid ${colors.grayBorder};
	border-radius: 5px;
	@media (max-width: 850px) {
		width: 32px;
		height: 32px;
	}
`;
const RightContainer = styled.div`
	display: flex;
	column-gap: 71px;
	align-items: center;
	@media (max-width: 1085px) {
		column-gap: 14px;
	}
`;
