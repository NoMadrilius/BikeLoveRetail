import { Text } from "@/components/Text/Text";
import { css, styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { useEffect, useState } from "react";
import {
  ColumnContainer,
  RowContainer,
} from "@/components/SideBar/SidebarStyles";
import { templates } from "../../../../../theme/templates";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const FILTER_ITEMS = [
  {
    title: "Подкатегория",
    type: "string",
    items: ["Все", "Кросс-кантри", "Трейл", "Скоростной спуск", "Дерт"],
  },
  {
    title: "Опыт",
    type: "string",
    items: ["Все", "Кросс-кантри", "Трейл", "Скоростной спуск", "Дерт"],
  },
  { title: "Размер", type: "container", items: ["16", "12", "14", "20", "10"] },
  {
    title: "Цвет",
    type: "color",
    items: ["red", "yellow", "blue", "green", "black"],
  },
];

const Filter = ({ mobile, setVisible, options, numberTotal }: any) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [currentFilters, setCurrentFilters] = useState<
    { title: string; value: any }[]
  >([]);

  const [params, setParams] = useState<any>([]);
  useEffect(() => {
    const filterParam = router.query.filter;
    if (filterParam) {
      if (filterParam.includes(",")) {
        const paramsArray = filterParam
          //@ts-ignore
          .split(",")
          .map((param: any) => parseInt(param, 10));
        setParams(paramsArray);
      } else {
        //@ts-ignore
        const singleParam = parseInt(filterParam, 10);
        setParams([singleParam]);
      }
    } else {
      setCurrentFilters([]);
      setParams([]);
    }
  }, [router.query.filter, router]);

  useEffect(() => {
    if (params.length) {
      const foundFilters: { title: string; value: string }[] = [];
      options.forEach((el: any) => {
        el.name.forEach((item: any) => {
          if (params.includes(item.optionVariantId)) {
            foundFilters.push({
              title: el.optionName,
              value: item.name,
            });
          }
        });
      });
      console.log(foundFilters);

      //   setCurrentFilters(foundFilters);
    } else {
      setCurrentFilters([]);
    }
  }, [params, options]);
  const [isOpen, setIsOpen] = useState(
    new Array(FILTER_ITEMS.length).fill(false)
  );

  const toggleSelectArea = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };
  const addItem = (title: string, value: string, optionVariantId: any) => {
    setCurrentFilters((prev) => [...prev, { title: title, value: value }]);

    const currentFilter = Array.isArray(router.query.filter)
      ? router.query.filter
      : typeof router.query.filter === "string"
      ? router.query.filter.split(",")
      : [];

    const updatedFilter = [...currentFilter, optionVariantId].join(",");

    router.push({
      ...router,
      query: {
        ...router.query,
        filter: updatedFilter,
      },
    });
  };
  const removeItem = (indexToRemove: number, optionVariantId: any) => {
    const updatedFilters = currentFilters.filter(
      (_, index) => index !== indexToRemove
    );
    setCurrentFilters(updatedFilters);
    const currentFilter = Array.isArray(router.query.filter)
      ? router.query.filter
      : typeof router.query.filter === "string"
      ? router.query.filter.split(",")
      : [];

    const updatedFilter = currentFilter
      .filter((_, index) => index !== indexToRemove)
      .join(",");

    const query = { ...router.query };

    if (updatedFilter) {
      query.filter = updatedFilter;
    } else {
      delete query.filter;
    }

    router.push({
      ...router,
      query: query,
    });
  };
  console.log(currentFilters);

  return (
    <Wrapper mobile={mobile} onClick={(e) => e.stopPropagation()}>
      {!!currentFilters.length && (
        <>
          <Text
            color={colors.black}
            size="15px"
            fontStyle={fonts.f600}
            textTransform="uppercase"
          >
            {t("catalog.currentFilters")}
          </Text>

          <ColumnContainer style={{ rowGap: "12px", marginTop: "23px" }}>
            {currentFilters.map((el, index) => (
              <RowContainer key={index} style={{ columnGap: "29px" }}>
                <Text
                  color={colors.grayMain}
                  size="16px"
                  fontStyle={fonts.f400}
                  whiteSpace
                >
                  {el.title} :
                </Text>
                <Text
                  color={colors.black}
                  size="16px"
                  fontStyle={fonts.f500}
                  margin="0 0 0 auto"
                  textAlign="right"
                >
                  {el.value}
                </Text>
                <IconClose
                  src="/images/catalog/icons/close.png"
                  onClick={() => removeItem(index, el.value.optionVariantId)}
                />
              </RowContainer>
            ))}
            <RowContainer style={{ columnGap: "29px", marginTop: "10px" }}>
              <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
                {t("catalog.results")}
              </Text>
              <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
                {numberTotal}
              </Text>
            </RowContainer>
          </ColumnContainer>
        </>
      )}

      {options?.map((el: any, index: number) => {
        const uniqueNames = Array.from(
          new Set(el.name.map((item: any) => item.name))
        );
        return (
          <FieldWrapper key={index}>
            <RowContainer>
              <Text color={colors.black} size="16px" fontStyle={fonts.f600}>
                {el.optionName}
              </Text>
              <Text
                color={colors.black}
                size="16px"
                fontStyle={fonts.f400}
                margin="0 0 0 auto"
                func={() => toggleSelectArea(index)}
              >
                +
              </Text>
            </RowContainer>
            <SelectArea open={isOpen[index]}>
              <>
                {uniqueNames.map((itemName: any, itemIndex: number) => {
                  const uniqueItem = el.name.find(
                    (item: any) => item.name === itemName
                  );
                  return (
                    <Text
                      key={itemIndex}
                      color={colors.black}
                      size="16px"
                      fontStyle={fonts.f400}
                      hoverColor={colors.redHover}
                      func={() =>
                        addItem(
                          el.optionName,
                          uniqueItem.name,
                          uniqueItem.optionVariantId
                        )
                      }
                    >
                      {uniqueItem.name}
                    </Text>
                  );
                })}
              </>
            </SelectArea>
          </FieldWrapper>
        );
      })}
    </Wrapper>
  );
};
export default Filter;
const Wrapper = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 43px 18px 0 24px;
  min-width: 300px;
  max-width: 300px;
  z-index: 5;
  ${(p) =>
    p.mobile &&
    css`
      position: absolute;
      left: 0;
      background-color: ${colors.white};
      height: 100vh;
      overflow-y: scroll;
    `}
`;
const IconClose = styled.img`
  cursor: pointer;
`;
const FieldWrapper = styled.div`
  padding-bottom: 23px;
  margin-top: 20px;
  border-bottom: 1px solid ${colors.grayBorder};
`;
const SelectArea = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? "flex" : "none")};
  flex-direction: column;
  row-gap: 12px;
  margin-top: 23px;
`;
const ColorPicker = styled.div<{ color: string }>`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: ${(p) => p.color};
  cursor: pointer;
`;
const ContainerSelect = styled.div`
  ${templates.centerContent};
  width: 64px;
  height: 34px;
  border-radius: 5px;
  background-color: ${colors.white};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.redBlur};
  }
`;
{
  /* {el.type === "color" && (
							<RowContainer style={{ flexWrap: "wrap", gap: "8px" }}>
								{el.items.map((item, index) => (
									<ColorPicker
										key={index}
										color={item}
										onClick={() => addItem(el.title, item)}
									/>
								))}
							</RowContainer>
						)}

						{el.type === "container" && (
							<RowContainer style={{ flexWrap: "wrap", gap: "8px" }}>
								{el.items.map((item, index) => (
									<ContainerSelect
										key={index}
										onClick={() => addItem(el.title, item)}>
										<Text
											key={index}
											color={colors.black}
											size='16px'
											fontStyle={fonts.f400}>
											{item}
										</Text>
									</ContainerSelect>
								))}
							</RowContainer>
						)} */
}