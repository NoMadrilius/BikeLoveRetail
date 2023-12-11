import { Text } from "@/components/Text/Text";
import { TITLES } from "../Sidebar";
import { ColumnContainer, Line, RowContainer } from "../SidebarStyles";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { CATEGORIES, CATEGORIES_TITLES } from "@/mock/data";
import { useState } from "react";

const SidebarCatalog = ({ setMainStep }: any) => {
  const [title, setTitle] = useState("Каталог");
  const [step, setStep] = useState(0);

  const onPress = (title: string) => {
    setTitle(title);
    setStep((prev) => prev + 1);
  };
  const backPress = () => {
    if (step !== 0) {
      setStep((prev) => prev - 1);
    } else {
      setMainStep(0);
    }
  };
  return (
    <>
      <RowContainer
        style={{ padding: "30px 0 0 25px" }}
        onClick={() => backPress()}
      >
        <img
          src="/images/home/icons/sidebarArrow.png"
          style={{ width: "4px", height: "8px", marginRight: "10px" }}
        />
        <Text
          color={colors.black}
          size="14px"
          fontStyle={fonts.f400}
          hoverColor={colors.redHover}
        >
          Назад
        </Text>
      </RowContainer>
      <Text
        color={colors.redMain}
        size="16px"
        fontStyle={fonts.f500}
        margin="10px 0 0 25px"
      >
        {title}
      </Text>
      <Line style={{ marginTop: "14px" }} />
      <ColumnContainer style={{ rowGap: "20px", padding: "23px 26px 33px" }}>
        {step === 0 && (
          <>
            {CATEGORIES_TITLES.map((el, index) => (
              <RowContainer
                key={index}
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  color={colors.black}
                  size="16px"
                  fontStyle={fonts.f500}
                  hoverColor={colors.redHover}
                  func={() => onPress(el)}
                >
                  {el}
                </Text>
              </RowContainer>
            ))}
          </>
        )}
        {step === 1 && (
          <>
            {CATEGORIES.map((el, index) => (
              <RowContainer
                key={index}
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  color={colors.black}
                  size="16px"
                  fontStyle={fonts.f500}
                  hoverColor={colors.redHover}
                  func={() => onPress(el.title)}
                >
                  {el.title}
                </Text>
              </RowContainer>
            ))}
          </>
        )}
        {step === 2 && (
          <>
            {CATEGORIES[0].categories.map((el, index) => (
              <RowContainer
                key={index}
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  color={colors.black}
                  size="16px"
                  fontStyle={fonts.f500}
                  hoverColor={colors.redHover}
                  func={() => onPress(el.title)}
                >
                  {el.title}
                </Text>
              </RowContainer>
            ))}
          </>
        )}
      </ColumnContainer>
    </>
  );
};
export default SidebarCatalog;
