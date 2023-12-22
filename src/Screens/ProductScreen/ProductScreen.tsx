import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../theme/fonts";
import { templates } from "../../../theme/templates";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import { ColumnContainer } from "@/components/SideBar/SidebarStyles";
import { useEffect, useState } from "react";
import Slider from "../HomeScreen/components/Slider";
import { sliderData, sliderTags } from "@/mock/data";
import SliderProducts from "./components/Slider";
import { useProductStore } from "@/store/ProductStore";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { useCartStore } from "@/store/CartStore";

const CHARACTERISTICS = [
	{ title: "Бренд", value: "Указать бренд" },
	{ title: "Год", value: "2022" },
	{ title: "Пол и возраст", value: "Для взрослых, Для мужчин" },
	{ title: "Вес", value: "22кг" },
	{ title: "Электрооборудование", value: "" },
	{ title: "Тип мотора", value: "Переднее мотор-колесо" },
	{ title: "Тип батареи", value: "Литий-ионная" },
	{ title: "Максимальная нагрузка", value: "до 100кг" },
	{ title: "Максимальный пробег", value: "до 29км" },
	{ title: "Управление электротягой", value: "Ручка акселератора (Throttle)" },
];

const ProductScreen = () => {
	const router = useRouter();
	const prodId = router.query.id;
	const productStore = useProductStore();
	const cart = useCartStore();
	const [product, setProduct] = useState<any>();
	const breadCrumbs = [
		{ title: "Каталог", link: "/" },
		{ title: "Велосипеды", link: "/" },
		{ title: "Горные", link: "/" },
	];

	const [activeTab, setActiveTab] = useState(0);

	useEffect(() => {
		productStore.fetchProduct(+prodId!);
	}, [prodId]);

	useEffect(() => {
		setProduct(productStore.product);
	}, [productStore.product]);
	///
	console.log(product);
	console.log(prodId);
	///

	return (
		<>
			<UseMetaData title={product?.name} img={""} description={"ASDASD"} />
			<Wrapper>
				<BreadCrumbs road={breadCrumbs} />
				<RowContainer style={{ columnGap: "60px" }}>
					<ColumnContainer style={{ width: "50%" }}>
						<FakeBlock>
							<SliderProducts />
						</FakeBlock>
						<RowContainer
							style={{
								width: "100%",
								justifyContent: "space-between",
								padding: "0 42px",
								marginTop: "69px",
							}}>
							<ColumnContainer style={{ alignItems: "center" }}>
								<IconServices src='/images/product/icons/official.png' />
								<Text
									color={colors.black}
									size='15px'
									fontStyle={fonts.f400}
									margin='7px 0 0 0'
									maxWidth='139px'
									textAlign='center'>
									Официальное представительство
								</Text>
							</ColumnContainer>
							<ColumnContainer style={{ alignItems: "center" }}>
								<IconServices src='/images/product/icons/service.png' />
								<Text
									color={colors.black}
									size='15px'
									fontStyle={fonts.f400}
									margin='7px 0 0 0'
									maxWidth='121px'
									textAlign='center'>
									Гарантийное обслуживание
								</Text>
							</ColumnContainer>
							<ColumnContainer style={{ alignItems: "center" }}>
								<IconServices src='/images/product/icons/bike.png' />
								<Text
									color={colors.black}
									size='15px'
									fontStyle={fonts.f400}
									margin='7px 0 0 0'
									maxWidth='121px'
									textAlign='center'>
									Test Ride велосипедов
								</Text>
							</ColumnContainer>
							<ColumnContainer style={{ alignItems: "center" }}>
								<IconServices src='/images/product/icons/money.png' />
								<Text
									color={colors.black}
									size='15px'
									fontStyle={fonts.f400}
									margin='7px 0 0 0'
									maxWidth='121px'
									textAlign='center'>
									Кешбэк на товары
								</Text>
							</ColumnContainer>
						</RowContainer>
					</ColumnContainer>

					{/* ======Info Container===== */}
					<InfoContainer style={{ width: "100%" }}>
						<Text color={colors.black} size='42px' fontStyle={fonts.f500}>
							{product?.name}
						</Text>
						<RowContainer style={{ marginTop: "15px" }}>
							<img src='/images/product/icons/CopyIcon.png' />
							<Text
								color={colors.grayMain}
								size='16px'
								fontStyle={fonts.f500}
								margin='0 0 0 5px'>
								{product?.barcode}
							</Text>
						</RowContainer>
						<Text
							color={colors.black}
							size='15px'
							fontStyle={fonts.f400}
							margin='35px 0 22px 0'>
							Цвет
						</Text>
						<RowContainer style={{ gap: "8px" }}>
							<ColorCircle color='red' />
							<ColorCircle color={colors.redMain} />
						</RowContainer>

						<Text
							color={colors.black}
							size='15px'
							fontStyle={fonts.f400}
							margin='35px 0 22px 0'>
							Размер
						</Text>
						<RowContainer
							style={{ gap: "8px", width: "60%", flexWrap: "wrap" }}>
							<SizeContainer>
								<Text color={colors.black} size='14px' fontStyle={fonts.f500}>
									15
								</Text>
							</SizeContainer>
							<SizeContainer>
								<Text color={colors.black} size='14px' fontStyle={fonts.f500}>
									20
								</Text>
							</SizeContainer>
							<SizeContainer>
								<Text color={colors.black} size='14px' fontStyle={fonts.f500}>
									20
								</Text>
							</SizeContainer>
							<SizeContainer>
								<Text color={colors.black} size='14px' fontStyle={fonts.f500}>
									20
								</Text>
							</SizeContainer>
							<SizeContainer>
								<Text color={colors.black} size='14px' fontStyle={fonts.f500}>
									20
								</Text>
							</SizeContainer>
						</RowContainer>
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
						<RowContainer style={{ alignItems: "center", marginTop: "22px" }}>
							<Text
								color={colors.grayMain}
								size='20px'
								fontStyle={fonts.f500}
								textDecoration='trought'>
								{prettyPrice("54 000")}UAH
							</Text>
							<SalePatch>-30%</SalePatch>
						</RowContainer>
						<Text
							color={colors.black}
							size='30px'
							fontStyle={fonts.f500}
							margin='16px 0 0 0'>
							{prettyPrice("54 000")}UAH
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
						<RowContainer style={{ columnGap: "18px", marginTop: "30px" }}>
							<ButtonCustom type='default' width={"191px"} height={"56px"}>
								<>
									<img
										src='/images/product/icons/cart.png'
										style={{ marginRight: "10px" }}
									/>
									<Text
										color={colors.white}
										size='16px'
										fontStyle={fonts.f700}
										func={() => cart?.addToCart(product)}>
										В корзину
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
							<LikeBtn>
								<img src='/images/product/icons/like.png' />
							</LikeBtn>
						</RowContainer>
					</InfoContainer>
					{/* ======Info Container===== */}
				</RowContainer>
				<RowContainer style={{ width: "100%", columnGap: "60px" }}>
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
									Совершенно новый Turbo Levo представляет собой невообразимое
									сочетание человека и машины. Обуздай технологии и преврати
									каждую поездку в незабываемое приключение. Больше скорости.
									Больше расстояния. Больше свободы. Больше маршрутов, больше
									незабываемых впечатлений..
								</Text>
								<Text
									color={colors.black}
									size='16px'
									fontStyle={fonts.f400}
									margin='33px 0 0 0'>
									С момента своего появления Turbo Levo установил стандарт, на
									который ориентируются многие другие производители
									электровелосипедов, и обновлённый Levo в этом смысле ничуть не
									отстаёт от своих предшественников.
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
								{CHARACTERISTICS.map((el, index) => (
									<CharacteristicContainer key={index} index={index}>
										<Text
											color={colors.black}
											size='15px'
											fontStyle={fonts.f400}
											hoverColor={colors.redHover}
											maxWidth='100%'>
											{el.title}
										</Text>
										<Text
											color={colors.black}
											size='15px'
											fontStyle={fonts.f400}
											hoverColor={colors.redHover}>
											{el.value}
										</Text>
									</CharacteristicContainer>
								))}
							</>
						)}
					</ColumnContainer>
				</RowContainer>
				<ColumnContainer style={{ rowGap: "100px", margin: "100px 0" }}>
					<Slider
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
					/>
				</ColumnContainer>
			</Wrapper>
		</>
	);
};
export default observer(ProductScreen);

const Wrapper = styled.div`
	margin-top: 60px;
	display: flex;
	flex-direction: column;
`;
const RowContainer = styled.div`
	display: flex;
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const FakeBlock = styled.div`
	width: 100%;
	padding: 60px;
	height: 464px;
	background-color: ${colors.white};
`;
const ColorCircle = styled.div<{ color: string }>`
	width: 34px;
	height: 34px;
	border-radius: 50%;
	background-color: ${(p) => p.color};
	cursor: pointer;
`;
const SizeContainer = styled.div`
	${templates.centerContent};
	width: 95px;
	height: 32px;
	background-color: ${colors.white};
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: ${colors.redBlur};
	}
`;
const SalePatch = styled.div`
	padding: 6px 12px;
	${templates.centerContent};
	background-color: ${colors.redHover};
	border-radius: 5px;
	margin-left: 18px;
`;
const CustomP = styled.p`
	font-family: ${fonts.f700.fontFamily};
	font-weight: ${fonts.f700.fontWeight};
	font-size: 16px;
`;
const LikeBtn = styled.div`
	width: 56px;
	height: 56px;
	border-radius: 5px;
	border: 2px solid #cacaca;
	cursor: pointer;
	${templates.centerContent}
`;
const IconServices = styled.img`
	width: 22px;
	height: 22px;
`;
const ContainerWithBG = styled.div<{ bg: string }>`
	background-image: url(${(p) => p.bg});
	background-size: cover;
	margin-top: 60px;
	width: 100%;
	aspect-ratio: 2/1;
	border-radius: 20px;
`;
const CharacteristicContainer = styled.div<{ index: number }>`
	display: flex;
	background-color: ${(p) => (p.index % 2 === 0 ? "white" : "transparent")};
	justify-content: space-between;
	padding: 11px 16px;
`;
