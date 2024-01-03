import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import { ColumnContainer } from "@/components/SideBar/SidebarStyles";
import { useEffect, useState } from "react";
import SliderProducts from "./components/Slider";
import { observer } from "mobx-react";
import { useCartStore } from "@/store/CartStore";
import { useWishListStore } from "@/store/WishListStore";
import {
	CharacteristicContainer,
	ContainerWithBG,
	CustomP,
	FakeBlock,
	H1Name,
	InfoContainer,
	LikeBtn,
	MainContainer,
	Res1Text,
	Res2Text,
	RowContainer,
	SalePatch,
	SecondContainer,
	SizeContainer,
	SliderContainer,
	Wrapper,
} from "./ProductScreenStyles";
import InfoUnderSlider from "./components/InfoUnderSlider";
import { styled } from "styled-components";

const ProductScreen = ({ productData, options, images }: any) => {
	const cart = useCartStore();
	const wishStore = useWishListStore();
	const [activeTab, setActiveTab] = useState(0);
	const [productInCart, setProductInCart] = useState<boolean>();
	const [productInWishList, setProductInWishList] = useState<boolean>();

	const breadCrumbs = [
		{ title: "Каталог", link: "/" },
		{ title: "Велосипеды", link: "/" },
		{ title: "Горные", link: "/" },
	];

	useEffect(() => {
		setProductInCart(cart.cart?.some((i) => i.id === productData.product?.id));
		setProductInWishList(
			wishStore.wishList?.some((i) => i.id === productData.product?.id)
		);
		console.log("effect work");
	}, [cart, wishStore.wishList]);

	const clickLike = () => {
		productInWishList
			? wishStore.removeFromWishList(productData.product?.id)
			: wishStore.addToWishList(productData.product);
	};
	const calculateDiscount = (oldPrice: any, newPrice: any) => {
		if (oldPrice !== 0 && oldPrice > newPrice) {
			const discount = ((oldPrice - newPrice) / oldPrice) * 100;
			return (
				<RowContainer style={{ alignItems: "center", marginTop: "22px" }}>
					<Text
						color={colors.grayMain}
						size='20px'
						fontStyle={fonts.f500}
						textDecoration='trought'>
						{prettyPrice(oldPrice)}UAH
					</Text>
					<SalePatch>{`-${Math.round(discount)}%`}</SalePatch>
				</RowContainer>
			);
		}
		return null;
	};
	///

	///

	return (
		<>
			<UseMetaData
				title={productData.product?.name}
				img={images[0]?.url || undefined}
				description={"ASDASD"}
			/>
			<Wrapper>
				<BreadCrumbs road={breadCrumbs} />
				<MainContainer>
					<Res2Text>
						<H1Name>{productData.product.name}</H1Name>
						<RowContainer style={{ margin: "15px 0" }}>
							<img src='/images/product/icons/CopyIcon.png' alt='copyIcon' />
							<Text
								color={colors.grayMain}
								size='16px'
								fontStyle={fonts.f500}
								margin='0 0 0 5px'>
								{productData.product?.barcode}
							</Text>
						</RowContainer>
					</Res2Text>
					<SliderContainer images={!!images.length}>
						<FakeBlock>
							{images.length ? (
								<SliderProducts images={images} />
							) : (
								<img src='/mock/NoPhoto.png' style={{ width: "100%" }} />
							)}
						</FakeBlock>
						<InfoUnderSlider />
					</SliderContainer>

					{/* ======Info Container===== */}
					<InfoContainer style={{ width: "100%" }}>
						<Res1Text>
							<H1Name>{productData.product.name}</H1Name>
							<RowContainer style={{ marginTop: "15px" }}>
								<img src='/images/product/icons/CopyIcon.png' alt='copyIcon' />
								<Text
									color={colors.grayMain}
									size='16px'
									fontStyle={fonts.f500}
									margin='0 0 0 5px'>
									{productData.product?.barcode}
								</Text>
							</RowContainer>
						</Res1Text>

						{options?.map((el: any, index: any) => (
							<div key={index}>
								<Text
									color={colors.black}
									size='15px'
									fontStyle={fonts.f400}
									margin='35px 0 22px 0'>
									{el.optionName}
								</Text>
								<RowContainer
									style={{ gap: "8px", width: "60%", flexWrap: "wrap" }}>
									{Array.isArray(el.name) ? (
										el.name.map((name: string, idx: number) => (
											<SizeContainer key={idx}>
												<Text
													color={colors.black}
													size='14px'
													fontStyle={fonts.f500}>
													{name}
												</Text>
											</SizeContainer>
										))
									) : (
										<SizeContainer>
											<Text
												color={colors.black}
												size='14px'
												fontStyle={fonts.f500}>
												{el.name}
											</Text>
										</SizeContainer>
									)}
								</RowContainer>
							</div>
						))}

						<RowContainer style={{ alignItems: "center", marginTop: "27px" }}>
							<Text color={colors.black} size='14px' fontStyle={fonts.f500}>
								Таблица размеров
							</Text>
							<img
								src='/images/product/icons/Ruler.png'
								style={{
									width: "63px",
									height: "9px",
									marginLeft: "21px",
									cursor: "pointer",
								}}
							/>
						</RowContainer>
						{calculateDiscount(
							productData.product.oldRetailPrice,
							productData.product.retailPrice
						)}

						<Text
							color={colors.black}
							size='30px'
							fontStyle={fonts.f500}
							margin='16px 0 0 0'>
							{prettyPrice(productData.product.retailPrice)}UAH
						</Text>
						<RowContainer
							style={{
								columnGap: "8px",
								alignItems: "center",
								marginTop: "32px",
							}}>
							<img
								src='/images/product/icons/location.png'
								style={{ width: "26px", height: "26px" }}
							/>
							<Text color={colors.black} size='18px' fontStyle={fonts.f400}>
								Наличие в магазинах
							</Text>
							<img
								src='/images/product/icons/Arrow_Bottom.png'
								style={{ width: "11px", height: "6px", cursor: "pointer" }}
							/>
						</RowContainer>
						<ButtonsContainer>
							<ButtonCustom
								type='default'
								width={"191px"}
								height={"56px"}
								func={() => cart?.addToCart(productData.product)}>
								<>
									<img
										src='/images/product/icons/cart.png'
										style={{ marginRight: "10px" }}
									/>
									<Text color={colors.white} size='16px' fontStyle={fonts.f700}>
										{productInCart ? "Товар в корзине" : "В корзину"}
									</Text>
								</>
							</ButtonCustom>
							<ButtonCustom type='white' width={"229px"} height={"56px"}>
								<>
									<img
										src='/images/product/icons/order.png'
										style={{ marginRight: "10px" }}
									/>
									<CustomP>Заказ в 1 клик</CustomP>
								</>
							</ButtonCustom>
							<LikeBtn liked={!!productInWishList} onClick={() => clickLike()}>
								<img src='/images/product/icons/like.png' />
							</LikeBtn>
						</ButtonsContainer>
					</InfoContainer>
					{/* ======Info Container===== */}
				</MainContainer>
				<SecondContainer style={{ width: "100%", columnGap: "60px" }}>
					<ColumnContainer style={{ width: "100%" }}>
						{" "}
						<ContainerWithBG bg='/images/product/images/image_bg.png'>
							<Text
								color={colors.white}
								size='40px'
								fontStyle={fonts.f500}
								margin='20% 0 0 10%'>
								Легкий
							</Text>
						</ContainerWithBG>
						<ContainerWithBG bg='/images/product/images/image_bg.png'>
							<Text
								color={colors.white}
								size='40px'
								fontStyle={fonts.f500}
								margin='20% 0 0 10%'>
								Быстрый
							</Text>
						</ContainerWithBG>
					</ColumnContainer>
					<ColumnContainer style={{ width: "100%" }}>
						<RowContainer
							style={{
								marginTop: "60px",
								columnGap: "34px",
								marginBottom: "33px",
							}}>
							<Text
								color={activeTab === 0 ? colors.black : colors.grayMain}
								size='40px'
								fontStyle={fonts.f500}
								func={() => setActiveTab(0)}>
								Описание
							</Text>
							<Text
								color={activeTab === 1 ? colors.black : colors.grayMain}
								size='40px'
								fontStyle={fonts.f500}
								func={() => setActiveTab(1)}>
								Характеристики
							</Text>
						</RowContainer>
						{activeTab === 0 && (
							<>
								<Text
									color={colors.black}
									size='16px'
									fontStyle={fonts.f400}
									margin='0 0 0 0'>
									<div
										dangerouslySetInnerHTML={{
											__html: productData.productCard.description,
										}}
									/>
								</Text>

								<Text
									color={colors.grayMain}
									size='13px'
									fontStyle={fonts.f400}
									margin='26px 0 0 0'
									hoverColor={colors.redHover}>
									Читать далее
								</Text>
							</>
						)}
						{activeTab === 1 && (
							<>
								{options?.map((el: any, index: any) => (
									<CharacteristicContainer key={index} index={index}>
										<Text
											color={colors.black}
											size='15px'
											fontStyle={fonts.f400}
											hoverColor={colors.redHover}
											maxWidth='100%'>
											{el.optionName}
										</Text>
										<Text
											color={colors.black}
											size='15px'
											fontStyle={fonts.f400}
											hoverColor={colors.redHover}>
											{Array.isArray(el.name) ? el.name.join(", ") : el.name}
										</Text>
									</CharacteristicContainer>
								))}
							</>
						)}
					</ColumnContainer>
				</SecondContainer>
				<ColumnContainer style={{ rowGap: "100px", margin: "100px 0" }}>
					{/* <Slider
						title={"байки из той серии"}
						items={sliderData}
						variant={"cards"}
					/>
					<Slider
						title={"сопутсвующие товары"}
						items={sliderData}
						tags={sliderTags}
						variant={"cards"}
					/>
					<Slider
						title={"вы недавно смотрели"}
						items={sliderData}
						variant={"cards"}
					/> */}
				</ColumnContainer>
			</Wrapper>
		</>
	);
};
export default observer(ProductScreen);
//style={{ columnGap: "18px", marginTop: "30px" }}
const ButtonsContainer = styled.div`
	display: flex;
	column-gap: 18px;
	margin-top: 30px;
	@media (max-width: 1000px) {
		flex-wrap: wrap;
		row-gap: 18px;
	}
`;
