import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import { ColumnContainer } from "@/components/SideBar/SidebarStyles";
import { useEffect, useState } from "react";
import SliderProducts from "./components/Slider";
import { observer } from "mobx-react";
import { useCartStore } from "@/store/CartStore";
import { useWishListStore } from "@/store/WishListStore";
import {
  CustomP,
  FakeBlock,
  H1Name,
  InfoContainer,
  LikeBtn,
  MainContainer,
  Res1Text,
  Res2Text,
  RowContainer,
  SliderContainer,
  Wrapper,
} from "./ProductScreenStyles";
import InfoUnderSlider from "./components/InfoUnderSlider";
import { styled } from "styled-components";
import Discount from "./components/Discount";
import OptionsProduct from "./components/Options";
import DescChar from "./components/DescChar";
import { showToast } from "@/helpers/alertService/alertService";
import axios from "axios";
import { useCurrencyStore } from "@/store/CurrencyStore";
import SideBar from "./components/SideBar";
import Image from "next/image";
import { useProductPageStore } from "@/store/ProductPageStore";
import { nameProductMetaTemplate } from "@/helpers/metaTamplates/nameProductMetaTemplate";
import { descriptionProductMetaTemplate } from "@/helpers/metaTamplates/descriptionProductMetaTemplate";

const ProductScreen = () => {
  const state = useProductPageStore();
  const cart = useCartStore();

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [productInWishList, setProductInWishList] = useState<boolean>();
  const [priceStr, setPriceStr] = useState<any>();

  const productData = state.product!;

  const onClickCart = () => {
    cart.addToCart(state.possibleProducts[0], state.product!);
  };

  return (
    <>
      <UseMetaData
        title={productData.product.metaTitle || nameProductMetaTemplate(productData.product.name)}
        img={productData.productImages[0]?.url}
        description={productData.product.metaDescription ||descriptionProductMetaTemplate(productData.product.name)}
      />
      <Wrapper>
        <BreadCrumbs product={productData.product} categoryId={productData.product.categoryId}/>
        <MainContainer>
          <Res2Text>
            <H1Name>{productData.product.name}</H1Name>
            <RowContainer style={{ margin: "15px 0" }}>
              <Image
                width={18}
                height={18}
                src="/images/product/icons/CopyIcon.png"
                alt="copyIcon"
              />
              <Text
                color={colors.grayMain}
                size="16px"
                fontStyle={fonts.f500}
                margin="0 0 0 5px"
              >
                {productData.product?.barcode}
              </Text>
            </RowContainer>
          </Res2Text>
          <SliderContainer
            images={
              productData.productImages.length > 0 &&
              productData.productImages.length !== 1
            }
          >
            <FakeBlock>
              {productData.productImages.length ? (
                <SliderProducts images={productData.productImages} />
              ) : (
                <Image
                  width={160}
                  height={100}
                  alt="NoPhoto"
                  src="/mock/NoPhoto.png"
                  style={{
                    width: "100%",
                    height: "fit-content",
                    borderRadius: "10px",
                  }}
                />
              )}
            </FakeBlock>
            <InfoUnderSlider />
          </SliderContainer>

          {/* ======Info Container===== */}
          <InfoContainer style={{ width: "100%" }}>
            <Res1Text>
              <H1Name>{productData.product.name}</H1Name>
              <RowContainer style={{ marginTop: "15px" }}>
                <Image
                  width={15}
                  height={18}
                  src="/images/product/icons/CopyIcon.png"
                  alt="copyIcon"
                />
                <Text
                  color={colors.grayMain}
                  size="16px"
                  fontStyle={fonts.f500}
                  margin="0 0 0 5px"
                >
                  {productData.product?.id}
                </Text>
              </RowContainer>
            </Res1Text>
            <OptionsProduct />
            {/*
            <RowContainer style={{ alignItems: "center", marginTop: "27px" }}>
              <Text color={colors.black} size="14px" fontStyle={fonts.f500}>
                Таблица размеров
              </Text>
              <Image
                width={63}
                height={9}
                alt="Ruler"
                src="/images/product/icons/Ruler.png"
                style={{
                  width: "63px",
                  height: "9px",
                  marginLeft: "21px",
                  cursor: "pointer",
                }}
              />
            </RowContainer>
            */}
            <Discount
              oldPrice={productData.product.oldRetailPrice}
              newPrice={productData.product.retailPrice}
            />

            <Text
              color={colors.black}
              size="30px"
              fontStyle={fonts.f500}
              margin="16px 0 0 0"
            >
              {priceStr}
            </Text>
            <RowContainer
              onClick={() => setSideBarOpen(true)}
              style={{
                columnGap: "8px",
                alignItems: "center",
                marginTop: "32px",
                cursor: "pointer",
              }}
            >
              <Image
                width={26}
                height={26}
                alt="Location"
                src="/images/product/icons/location.png"
                style={{ width: "26px", height: "26px" }}
              />
              <Text color={colors.black} size="18px" fontStyle={fonts.f400}>
                Наличие в магазинах
              </Text>
              <Image
                width={11}
                height={6}
                alt="Arrow Bottom"
                src="/images/product/icons/Arrow_Bottom.png"
                style={{ width: "11px", height: "6px", cursor: "pointer" }}
              />
            </RowContainer>
            <ButtonsContainer>
              <ButtonCustom
                type="default"
                width={"191px"}
                height={"56px"}
                func={() => onClickCart()}
                funcIfDisable={() => {
                  showToast({
                    info: "Оберіть усі опції",
                    title: "Не всі опції обрано",
                    type: "error",
                  });
                }}
                buttonActive={state.possibleProducts.length === 1}
              >
                <>
                  <Image
                    width={18}
                    height={18}
                    alt="Cart Icon"
                    src="/images/product/icons/cart.png"
                    style={{ marginRight: "10px" }}
                  />
                  <Text color={colors.white} size="16px" fontStyle={fonts.f700}>
                    В корзину
                  </Text>
                </>
              </ButtonCustom>
              <ButtonCustom type="white" width={"229px"} height={"56px"}>
                <>
                  <Image
                    width={21}
                    height={20}
                    alt="Order"
                    src="/images/product/icons/order.png"
                    style={{ marginRight: "10px" }}
                  />
                  <CustomP>Заказ в 1 клик</CustomP>
                </>
              </ButtonCustom>
              <LikeBtn liked={!!productInWishList} onClick={() => {}}>
                <Image
                  width={22}
                  height={20}
                  alt="Cart"
                  src="/images/product/icons/like.png"
                />
              </LikeBtn>
            </ButtonsContainer>
          </InfoContainer>
          {/* ======Info Container===== */}
        </MainContainer>
        <DescChar />
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
      {sideBarOpen && <SideBar setVisible={setSideBarOpen} />}
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
