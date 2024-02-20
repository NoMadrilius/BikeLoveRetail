import { Text } from "@/components/Text/Text";
import { ColumnContainer, Line, RowContainer } from "../SidebarStyles";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { CATEGORIES } from "@/mock/data";
import { useEffect, useState } from "react";
import { useCategoriesStore } from "@/store/CategoriesStore";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SidebarCatalog = ({ setMainStep, setVisible }: any) => {
  const { t } = useTranslation();
  const router = useRouter();
  const catalogStore = useCategoriesStore();
  const [id, setId] = useState<any>();
  const [title, setTitle] = useState<any>("Каталог");
  const [titlesHistory, setTitlesHistory] = useState<string[]>(["Каталог"]);
  const [step, setStep] = useState(0);

  const onPress = (el: any) => {
    if (el.childrenIds !== "") {
      setTitlesHistory([...titlesHistory, title]);
      setTitle(el?.name);
      setId(el?.id as any);
      setStep((prev) => prev + 1);
    } else {
      router.push(`/catalog/${el.id}`);
      setVisible(false);
    }
  };
  const onPressChildren = (el: any) => {
    if (el.childrenIds !== "") {
      setTitlesHistory([...titlesHistory, title]);
      setTitle(el?.name);
      setStep(2);
      return;
    }
    router.push(`/catalog/${el.id}`);
    setVisible(false);
  };
  const onPressSmallChildren = (el: any) => {
    router.push(`/catalog/${el.id}`);
    setVisible(false);
  };
  const backPress = () => {
    if (titlesHistory.length > 1) {
      const previousTitle = titlesHistory[titlesHistory.length - 2];
      setTitle(previousTitle);
      setTitlesHistory(titlesHistory.slice(0, -1));
      setStep((prev) => prev - 1);
    } else {
      setMainStep(0);
    }
  };
  //TODO fix this
  useEffect(() => {
    catalogStore.fetchCategories();
  }, []);
  const filteredCategory = catalogStore.parentCategories.filter(
    (el: any) => el.id === id
  )[0];
  const childrenId =
    filteredCategory && filteredCategory.childrenIds
      ? filteredCategory.childrenIds.split(";").map(Number)
      : [];

  const childCategories = catalogStore.categories?.filter((el: any) =>
    childrenId.includes(el.id)
  );
  const smallChildCategories = () => {
    const ids =
      childCategories && childCategories[0]?.childrenIds
        ? childCategories[0]?.childrenIds.split(";").map(Number)
        : [];
    return catalogStore.categories?.filter((el: any) => ids.includes(el.id));
  };
  ///
  ///
  return (
    <>
      <RowContainer
        style={{ padding: "30px 0 0 25px" }}
        onClick={() => backPress()}
      >
        <Image
          alt="Sidebar Arrow Icon"
          width={4}
          height={8}
          src="/images/home/icons/sidebarArrow.png"
          style={{
            width: "4px",
            height: "8px",
            marginRight: "10px",
            transform: "rotate(180deg)",
          }}
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
            {catalogStore?.parentCategories?.map((el: any, index: any) => (
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
                  {el.name}
                </Text>
                {el.childrenIds !== "" && (
                  <Image
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    src="/icons/catArrow.svg"
                    style={{
                      transform: "rotate(270deg)",
                      marginLeft: "5px",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                )}
              </RowContainer>
            ))}
          </>
        )}
        {step === 1 && (
          <>
            {childCategories.map((el, index) => (
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
                  func={() => onPressChildren(el)}
                >
                  {el.name}
                </Text>
                {el.childrenIds !== "" && (
                  <Image
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    src="/icons/catArrow.svg"
                    style={{
                      transform: "rotate(270deg)",
                      marginLeft: "5px",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                )}
              </RowContainer>
            ))}
          </>
        )}
        {step === 2 && (
          <>
            <RowContainer
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
                func={() => onPressSmallChildren(childCategories[0])}
              >
                {t("sidebar.catalog.allIn")}
              </Text>
              <Image
                alt="Arrow Icon"
                width={20}
                height={20}
                src="/icons/catArrow.svg"
                style={{
                  transform: "rotate(270deg)",
                  marginLeft: "5px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </RowContainer>
            {smallChildCategories().map((el, index) => (
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
                  {el.name}
                </Text>
              </RowContainer>
            ))}
          </>
        )}
      </ColumnContainer>
    </>
  );
};
export default observer(SidebarCatalog);
