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

const ProductScreen = ({ productData, options, images }: any) => {
  const cart = useCartStore();
  const wishStore = useWishListStore();
  const [activeTab, setActiveTab] = useState(0);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  // const [productInCart, setProductInCart] = useState<boolean>();
  const [productInWishList, setProductInWishList] = useState<boolean>();
  const [prepareOptions, setPrepareOptions] = useState([]);
  const [selectedOptionsId, setSelectedOptionsId] = useState<number[]>([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filteredProductId, setFilteredProductId] = useState<any>();
  const [buttonVisible, setButtonVisible] = useState(false);
  const currStore = useCurrencyStore();
  const [priceStr, setPriceStr] = useState<any>();
  useEffect(() => {
    setPriceStr(
      productData?.product?.retailPrice
        ? prettyPrice(productData?.product?.retailPrice)
        : 0
    );
  }, [
    productData?.product?.retailPrice,
    currStore.selectedCurrency,
    currStore,
  ]);
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
    // setProductInCart(cart.cart?.some((i) => i.id === productData.product?.id));
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
      if (selectedOptionsId.length === 0) {
        const allOptions = options.map((option: any) => ({
          optionName: option.optionName,
          names: option.name,
        }));
        setPrepareOptions(allOptions);
      } else {
        const filteredOptions = options.reduce((acc: any, option: any) => {
          const filteredNames = option.name.filter((name: any) =>
            selectedOptionsId.some((selectedId) => name.id.includes(selectedId))
          );

          if (filteredNames.length > 0) {
            acc.push({ optionName: option.optionName, names: filteredNames });
          }

          return acc;
        }, []);
        setPrepareOptions(filteredOptions);
      }
    }
  }, [productData.product, options, selectedOptionsId]);

  //выбераем id
  useEffect(() => {
    const selectedOptionsObjects = selectedOptions.map((selectedOption) => {
      const matchingOption = options.find((option: any) =>
        option.name.some((name: any) => name.optionVariantId === selectedOption)
      );
      return matchingOption
        ? matchingOption.name.find(
            (name: any) => name.optionVariantId === selectedOption
          )
        : undefined;
    });
    if (selectedOptionsObjects.length === 0) {
      console.log("No matching ID found.");
      return;
    }
    const commonIds = selectedOptionsObjects.reduce((intersection, obj) => {
      if (intersection.length === 0) {
        return obj.id;
      } else {
        return intersection.filter((id: any) => obj.id.includes(id));
      }
    }, []);

    setFilteredProductId(commonIds[0]);
  }, [selectedOptions, options]);

  useEffect(() => {
    const filteredOptions = options.filter(
      (option: any) => option.name.length > 1
    );
    const isOptionSelected = filteredOptions.every((option: any) => {
      return option.name.some((name: any) =>
        //@ts-ignore
        selectedOptions.includes(name.optionVariantId)
      );
    });
    setButtonVisible(isOptionSelected);
  }, [prepareOptions, selectedOptions]);
  ///

  ///
  const onClickCart = () => {
    if (buttonVisible) {
      get();
    } else {
      showToast({ info: "Выберите опции", title: "Внимание", type: "warn" });
    }
  };
  const get = async () => {
    const id = filteredProductId || productData.product.id;
    try {
      const response = await axios.get(`/api/products/${id}`);
      const product = response.data;
      cart?.addToCart(product.product, product.productImages[0]?.url);
    } catch (error) {
      showToast({
        info: "Что-то пошло не так",
        title: "Внимание",
        type: "error",
      });
    }
  };
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
          <SliderContainer images={images.length > 0 && images.length !== 1}>
            <FakeBlock>
              {images.length ? (
                <SliderProducts images={images} />
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
                funcIfDisable={() => onClickCart()}
                buttonActive={buttonVisible}
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
              <LikeBtn liked={!!productInWishList} onClick={() => clickLike()}>
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

        <DescChar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          productData={productData}
          options={options}
        />

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
