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
import { useCatalogStore } from "@/store/CatalogStore";
import { observe } from "mobx";
import { observer } from "mobx-react";
import Link from "next/link";
import { GenerateLink } from "@/helpers/GenerateLink";

const Filter = () => {
  const { t } = useTranslation();
  const state = useCatalogStore();
  const router = useRouter();

  let availableVariants = state.catalogState!.options.filter(
    (n) => !state.catalogState!.filterSettings.includes(n.id)
  );
  const uniqueOptions = availableVariants.reduce(
    (accumulator: { id: number; name: string }[], i) => {
      let ent = accumulator.find((n) => n.id === i.optionId);
      if (ent === undefined) {
        accumulator.push({ id: i.optionId, name: i.optionName });
      }
      return accumulator;
    },
    []
  );

  return (
    <Wrapper mobile={false} onClick={(e) => e.stopPropagation()}>
      {!!state.catalogState!.filterSettings.length && (
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
            {state.catalogState!.filterSettings.map((el, index) => {
              let option = state.catalogState!.options.find((n) => n.id === el);
              return (
                <RowContainer key={index} style={{ columnGap: "29px" }}>
                  <Text
                    color={colors.grayMain}
                    size="16px"
                    fontStyle={fonts.f400}
                    whiteSpace
                  >
                    {option!.optionName} :
                  </Text>
                  <Text
                    color={colors.black}
                    size="16px"
                    fontStyle={fonts.f500}
                    margin="0 0 0 auto"
                    textAlign="right"
                  >
                    {option!.name}
                  </Text>
                  <Link
                    href={GenerateLink("/catalog", {
                      page: state.query.page,
                      id: state.query.id,
                      filter: state.query.filters.filter((n) => n != el),
                    })}
                  >
                    <IconClose src="/images/catalog/icons/close.png" />
                  </Link>
                </RowContainer>
              );
            })}
            <RowContainer style={{ columnGap: "29px", marginTop: "10px" }}>
              <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
                {t("catalog.results")}
              </Text>
              <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
                {state.catalogState?.totalProducts}
              </Text>
            </RowContainer>
          </ColumnContainer>
        </>
      )}

      {uniqueOptions.map((el, index: number) => {
        let variants = availableVariants.filter((n) => n.optionId === el.id);
        return (
          <FieldWrapper key={index}>
            <RowContainer>
              <Text
                color={colors.black}
                size="16px"
                fontStyle={fonts.f600}
                func={() => {
                  state.toggleOption(el.id);
                }}
              >
                {el.name}
              </Text>
              <Text
                color={colors.black}
                size="16px"
                fontStyle={fonts.f400}
                margin="0 0 0 auto"
                func={() => {
                  state.toggleOption(el.id);
                }}
              >
                +
              </Text>
            </RowContainer>
            <SelectArea open={state.openedOptions.includes(el.id)}>
              <>
                {variants.map((opt, itemIndex: number) => {
                  let filters = [...state.query.filters, opt.id];
                  return (
                    <Link
                      href={GenerateLink("/catalog", {
                        page: state.query.page,
                        id: state.query.id,
                        filter: filters,
                      })}
                    >
                      <Text
                        key={itemIndex}
                        color={colors.black}
                        size="16px"
                        fontStyle={fonts.f400}
                        hoverColor={colors.redHover}
                        func={() => {}}
                      >
                        {opt.name}
                      </Text>
                    </Link>
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

export default observer(Filter);
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
