import { ColumnContainer } from "@/components/SideBar/SidebarStyles";
import { styled } from "styled-components";
import {
  CharacteristicContainer,
  ContainerWithBG,
  RowContainer,
  SecondContainer,
} from "../ProductScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { useState } from "react";
import { useProductPageStore } from "@/store/ProductPageStore";
import { SecondaryTitle } from "../../HomeScreen/HomeScreenStyles";

const DescChar = () => {
  const isImages = false;
  const [activeTab, setActiveTab] = useState(0);
  const state = useProductPageStore();
  const productData = state.product!;

  return (
    <>
      {isImages && (
        <SecondContainer style={{ width: "100%", columnGap: "60px" }}>
          <ColumnContainer style={{ width: "100%" }}>
            {" "}
            <ContainerWithBG bg="/images/product/images/image_bg.png">
              <Text
                color={colors.white}
                size="40px"
                fontStyle={fonts.f500}
                margin="20% 0 0 10%"
              >
                Легкий
              </Text>
            </ContainerWithBG>
            <ContainerWithBG bg="/images/product/images/image_bg.png">
              <Text
                color={colors.white}
                size="40px"
                fontStyle={fonts.f500}
                margin="20% 0 0 10%"
              >
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
              }}
            >
              <SecondaryTitle
                $color={activeTab === 0 ? "black" : "#8B8B8B"}
                $fontSize="40px"
                $fontStyle={fonts.f500}
                onClick={() => setActiveTab(0)}
              >
                Опис
              </SecondaryTitle>
              <Text
                color={activeTab === 1 ? colors.black : colors.grayMain}
                size="40px"
                fontStyle={fonts.f500}
                func={() => setActiveTab(1)}
              >
                Характеристики
              </Text>
            </RowContainer>
            {activeTab === 0 && (
              <>
                <Text
                  color={colors.black}
                  size="16px"
                  fontStyle={fonts.f400}
                  margin="0 0 0 0"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productData.productCard.description,
                    }}
                  />
                </Text>

                <Text
                  color={colors.grayMain}
                  size="13px"
                  fontStyle={fonts.f400}
                  margin="26px 0 0 0"
                  hoverColor={colors.redHover}
                >
                  Читать далее
                </Text>
              </>
            )}
            {activeTab === 1 && (
              <>
                {state.uniqueOptions.map((el, index: any) => {

                    return (
                      <CharacteristicContainer key={index} index={index}>
                        <Text
                          color={colors.black}
                          size="15px"
                          fontStyle={fonts.f400}
                          hoverColor={colors.redHover}
                          maxWidth="100%"
                        >
                          {el.name}
                        </Text>
                        <Text
                          color={colors.black}
                          size="15px"
                          fontStyle={fonts.f400}
                          hoverColor={colors.redHover}
                        >
                          {productData.productOptions.filter(n=>n.optionId === el.id)
                            .map((item) => item.name)
                            .join(", ")}
                        </Text>
                      </CharacteristicContainer>
                    );

                })}
              </>
            )}
          </ColumnContainer>
        </SecondContainer>
      )}
      {/* Second Variant */}
      {!isImages && (
        <>
          <DesktopRes>
            <SecondContainer style={{ width: "100%", columnGap: "60px" }}>
              <RowContainer style={{ width: "100%", marginTop: "60px" }}>
                <ColumnContainer style={{ width: "100%" }}>
                  <SecondaryTitle
                    $color="black"
                    $fontSize="40px"
                    $fontStyle={fonts.f500}
                    onClick={() => setActiveTab(0)}
                  >
                    Опис
                  </SecondaryTitle>
                  <Text
                    color={colors.black}
                    size="16px"
                    fontStyle={fonts.f400}
                    margin="0 0 0 0"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: productData.productCard.description,
                      }}
                    />
                  </Text>
                </ColumnContainer>
                <ColumnContainer style={{ width: "100%" }}>
                  <SecondaryTitle
                    $color="black"
                    $fontSize="40px"
                    $fontStyle={fonts.f500}
                    onClick={() => setActiveTab(1)}
                  >
                    Характеристики
                  </SecondaryTitle>
                  <RowContainer style={{ width: "100%" }}>
                    <ColumnContainer style={{ width: "100%" }}>
                      {state.uniqueOptions.map((el, index) => {
                        return (
                          <CharacteristicContainer key={index} index={index}>
                            <Text
                              color={colors.black}
                              size="15px"
                              fontStyle={fonts.f400}
                              hoverColor={colors.redHover}
                              maxWidth="100%"
                            >
                              {el.name}
                            </Text>
                            <Text
                              color={colors.black}
                              size="15px"
                              fontStyle={fonts.f400}
                              hoverColor={colors.redHover}
                            >
                              {state.uniqueVariants
                                .filter((n) => n.optionId === el.id)
                                .map((n) => n.variantName)
                                .join(", ")}
                            </Text>
                          </CharacteristicContainer>
                        );
                      })}
                    </ColumnContainer>
                  </RowContainer>
                </ColumnContainer>
              </RowContainer>
            </SecondContainer>
          </DesktopRes>
          <MobileRes>
            <ColumnContainer style={{ width: "100%" }}>
              <RowContainer
                style={{
                  marginTop: "60px",
                  columnGap: "34px",
                  marginBottom: "33px",
                }}
              >
                <Text
                  color={activeTab === 0 ? colors.black : colors.grayMain}
                  size="40px"
                  fontStyle={fonts.f500}
                  func={() => setActiveTab(0)}
                >
                  Опис
                </Text>
                <Text
                  color={activeTab === 1 ? colors.black : colors.grayMain}
                  size="40px"
                  fontStyle={fonts.f500}
                  func={() => setActiveTab(1)}
                >
                  Характеристики
                </Text>
              </RowContainer>
              {activeTab === 0 && (
                <>
                  <Text
                    color={colors.black}
                    size="16px"
                    fontStyle={fonts.f400}
                    margin="0 0 0 0"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: productData.productCard.description,
                      }}
                    />
                  </Text>
                </>
              )}
              {activeTab === 1 && (
                <>
                  {state.uniqueOptions.map((el, index: any) => {

                    return (
                        <CharacteristicContainer key={index} index={index}>
                          <Text
                              color={colors.black}
                              size="15px"
                              fontStyle={fonts.f400}
                              hoverColor={colors.redHover}
                              maxWidth="100%"
                          >
                            {el.name}
                          </Text>
                          <Text
                              color={colors.black}
                              size="15px"
                              fontStyle={fonts.f400}
                              hoverColor={colors.redHover}
                          >
                            {productData.productOptions.filter(n=>n.optionId === el.id)
                                .map((item) => item.name)
                                .join(", ")}
                          </Text>
                        </CharacteristicContainer>
                    );

                  })}
                </>
              )}
            </ColumnContainer>
          </MobileRes>
        </>
      )}
    </>
  );
};

export default DescChar;

const DesktopRes = styled.div`
  display: block;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileRes = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
`;
