import { ColumnContainer } from "@/components/SideBar/SidebarStyles";
import { FC } from "react";
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

type Props = {
  activeTab: number;
  setActiveTab: any;
  productData: any;
  options: any;
};

const DescChar: FC<Props> = ({
  activeTab,
  setActiveTab,
  options,
  productData,
}) => {
  const isImages = false;

  ///

  ///
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
              <Text
                color={activeTab === 0 ? colors.black : colors.grayMain}
                size="40px"
                fontStyle={fonts.f500}
                func={() => setActiveTab(0)}
              >
                Описание
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
                {options?.map((el: any, index: any) => {
                  const matchingNames = el.name.filter((item: any) =>
                    item.id.includes(productData.product.id)
                  );

                  if (matchingNames.length > 0) {
                    return (
                      <CharacteristicContainer key={index} index={index}>
                        <Text
                          color={colors.black}
                          size="15px"
                          fontStyle={fonts.f400}
                          hoverColor={colors.redHover}
                          maxWidth="100%"
                        >
                          {el.optionName}
                        </Text>
                        <Text
                          color={colors.black}
                          size="15px"
                          fontStyle={fonts.f400}
                          hoverColor={colors.redHover}
                        >
                          {matchingNames
                            .map((item: any) => item.name)
                            .join(", ")}
                        </Text>
                      </CharacteristicContainer>
                    );
                  }

                  return null; // If no matching names, don't render anything for this option
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
                  <Text
                    color={colors.black}
                    size="40px"
                    fontStyle={fonts.f500}
                    func={() => setActiveTab(0)}
                  >
                    Описание
                  </Text>

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
                </ColumnContainer>
                <ColumnContainer style={{ width: "100%" }}>
                  <Text
                    color={colors.black}
                    size="40px"
                    fontStyle={fonts.f500}
                    func={() => setActiveTab(1)}
                  >
                    Характеристики
                  </Text>
                  <RowContainer style={{ width: "100%" }}>
                    <ColumnContainer style={{ width: "100%" }}>
                      {options?.map((el: any, index: any) => {
                        const matchingNames = el.name.filter((item: any) =>
                          item.id.includes(productData.product.id)
                        );

                        if (matchingNames.length > 0) {
                          return (
                            <CharacteristicContainer key={index} index={index}>
                              <Text
                                color={colors.black}
                                size="15px"
                                fontStyle={fonts.f400}
                                hoverColor={colors.redHover}
                                maxWidth="100%"
                              >
                                {el.optionName}
                              </Text>
                              <Text
                                color={colors.black}
                                size="15px"
                                fontStyle={fonts.f400}
                                hoverColor={colors.redHover}
                              >
                                {matchingNames
                                  .map((item: any) => item.name)
                                  .join(", ")}
                              </Text>
                            </CharacteristicContainer>
                          );
                        }

                        return null; // If no matching names, don't render anything for this option
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
                  Описание
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
                  {options?.map((el: any, index: any) => {
                    const matchingNames = el.name.filter((item: any) =>
                      item.id.includes(productData.product.id)
                    );

                    if (matchingNames.length > 0) {
                      return (
                        <CharacteristicContainer key={index} index={index}>
                          <Text
                            color={colors.black}
                            size="15px"
                            fontStyle={fonts.f400}
                            hoverColor={colors.redHover}
                            maxWidth="100%"
                          >
                            {el.optionName}
                          </Text>
                          <Text
                            color={colors.black}
                            size="15px"
                            fontStyle={fonts.f400}
                            hoverColor={colors.redHover}
                          >
                            {matchingNames
                              .map((item: any) => item.name)
                              .join(", ")}
                          </Text>
                        </CharacteristicContainer>
                      );
                    }

                    return null; // If no matching names, don't render anything for this option
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
