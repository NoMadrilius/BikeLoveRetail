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
	SecondContainer,
	SliderContainer,
	Wrapper,
} from "./ProductScreenStyles";
import InfoUnderSlider from "./components/InfoUnderSlider";
import { styled } from "styled-components";
import Discount from "./components/Discount";
import OptionsProduct from "./components/Options";
import DescChar from "./components/DescChar";

const ProductScreen = ({ productData, options, images }: any) => {
	const cart = useCartStore();
	const wishStore = useWishListStore();
	const [activeTab, setActiveTab] = useState(0);
	const [productInCart, setProductInCart] = useState<boolean>();
	const [productInWishList, setProductInWishList] = useState<boolean>();
	const [prepareOptions, setPrepareOptions] = useState([]);
	const [selectedOptionsId, setSelectedOptionsId] = useState<number>(
		productData.product.id
	);
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(
		productData.bindedProducts
	);
	const categoryPath = productData.productCategory.way.split("->");
	const breadCrumbs = categoryPath
		.slice(-2)
		.map((category: any, index: any, array: any) => {
			let link = "/catalog/";
			if (index === 0) {
				link += productData.productCategory.parentId;
			} else if (index === 1) {
				link += productData.productCategory.id;
			}

			return {
				title: category,
				link: link,
			};
		});
	breadCrumbs.push({
		title: productData.product.name,
		link: "",
	});

	useEffect(() => {
		setProductInCart(cart.cart?.some((i) => i.id === productData.product?.id));
		setProductInWishList(
			wishStore.wishList?.some((i) => i.id === productData.product?.id)
		);
	}, [
		cart.cart?.map((item) => item.id),
		wishStore.wishList?.map((item) => item.id),
	]);

	const clickLike = () => {
		productInWishList
			? wishStore.removeFromWishList(productData.product?.id)
			: wishStore.addToWishList(
					productData.product,
					productData.productImages[0]?.url
			  );
	};

	useEffect(() => {
		if (productData.product) {
			const filteredOptions = options.reduce((acc: any, option: any) => {
				const filteredName = option.name.filter(
					(name: any) => name.id === selectedOptionsId
				);
				if (filteredName.length > 0) {
					acc.push(filteredName);
				}
				return acc;
			}, []);

			setPrepareOptions(filteredOptions);
		}
	}, [productData.product, options, selectedOptionsId]);

	useEffect(() => {}, [selectedOptions]);
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
					<SliderContainer images={images.length > 0 && images.length !== 1}>
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
						<OptionsProduct
							options={options}
							productData={productData}
							prepareOptions={prepareOptions}
							selectedOptionsId={selectedOptionsId}
							setSelectedOptionsId={setSelectedOptionsId}
							selectedOptions={selectedOptions}
							setSelectedOptions={setSelectedOptions}
						/>

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
						<Discount
							oldPrice={productData.product.oldRetailPrice}
							newPrice={productData.product.retailPrice}
						/>

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
								func={() =>
									cart?.addToCart(
										productData.product,
										productData.productImages[0]?.url
									)
								}>
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
					<DescChar
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						productData={productData}
						options={options}
					/>
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
const ButtonsContainer = styled.div`
	display: flex;
	column-gap: 18px;
	margin-top: 30px;
	@media (max-width: 1000px) {
		flex-wrap: wrap;
		row-gap: 18px;
	}
`;
