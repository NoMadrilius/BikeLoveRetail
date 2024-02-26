import { colors } from "../../../theme/colors";
import { Text } from "../Text/Text";
import { fonts } from "../../../theme/fonts";
import { useEffect, useState } from "react";

import * as S from "./Categories.styles";
import Link from "next/link";
import { LinkItem } from "../LinkItem";

const Categories = ({ setVisible, categories, rect }: any) => {
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const [submenuCategories, setSubmenuCategories] = useState(0);
  const [categoryTitle, setCategoryTitle] = useState("");

  const filteredCategory = categories.parentCategories.filter(
    (el: any) => el.id === selectedTitle
  )[0];

  const childCategories = categories.categories?.filter(
    (el: any) => el.parentId === selectedTitle
  );

  const smallChildCategories = (el: any) => {
    const ids =
      el && el.childrenIds ? el.childrenIds.split(";").map(Number) : [];
    return categories.categories?.filter((el: any) => ids.includes(el.id));
  };

  const childClick = () => {
    setVisible(false);
  };

  const handleCategoryClick = (categoryId: number) => {
    setExpandedCategories((prevExpanded) => {
      if (prevExpanded.includes(categoryId)) {
        return prevExpanded.filter((id) => id !== categoryId);
      } else {
        return [...prevExpanded, categoryId];
      }
    });
  };

  return (
    <S.Wrapper
      id="categories-component"
      onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
    >
      <S.MainColumn>
        {categories?.parentCategories?.map((el: any) => (
          <S.ListItem key={el.id}>
            {el.childrenIds !== "" ? (
              <LinkItem
                href={`/catalog/${el?.id}`}
                color={el.id === selectedTitle ? colors.redMain : colors.black}
                hoverColor={colors.redHover}
                size="15px"
                fontStyle={fonts.f600}
                textTransform="uppercase"
                onMouseEnter={(e) => {
                  setSubmenuCategories(e.clientY - rect.bottom);
                  setSelectedTitle(el.id);
                  setCategoryTitle(el.name);
                }}
              >
                {el.name}
              </LinkItem>
            ) : (
              <LinkItem
                href={`/catalog/${el.id}`}
                color={el.id === selectedTitle ? colors.redMain : colors.black}
                hoverColor={colors.redHover}
                size="15px"
                fontStyle={fonts.f600}
                func={() => setVisible(false)}
                textTransform="uppercase"
              >
                {el.name}
              </LinkItem>
            )}
          </S.ListItem>
        ))}
      </S.MainColumn>
      {selectedTitle && filteredCategory ? (
        <S.DetailsContainer
          $top={submenuCategories}
          $removePadding={selectedTitle}
        >
          <S.ListItem>
            <LinkItem
              href={`/catalog/${filteredCategory?.id}`}
              color={colors.black}
              hoverColor={colors.redHover}
              size="16px"
              fontStyle={fonts.f600}
              func={() => childClick()}
            >
              {categoryTitle}
            </LinkItem>
          </S.ListItem>

          {childCategories.map((el: any, index: any) => {
            const isExpanded = expandedCategories.includes(el.id);

            return (
              <>
                <S.TitleWrapper key={index}>
                  {el.childrenIds && el.childrenIds !== "" && (
                    <S.TitleIcon
                      open={isExpanded}
                      src="/icons/catArrow.svg"
                      style={{ marginTop: "16px" }}
                      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.stopPropagation();
                        handleCategoryClick(el.id);
                      }}
                    />
                  )}

                  {el.childrenIds && el.childrenIds !== "" ? (
                    <Text
                      color={colors.black}
                      hoverColor={colors.redHover}
                      size="15px"
                      margin="16px 0 0 0"
                      fontStyle={fonts.f400}
                      func={() => {
                        handleCategoryClick(el.id);
                      }}
                    >
                      {el.name}
                    </Text>
                  ) : (
                    <LinkItem
                      href={`/catalog/${el.id}`}
                      style={{ marginTop: "8px" }}
                      color={colors.black}
                      hoverColor={colors.redHover}
                      size="15px"
                      margin="16px 0 0 0"
                      fontStyle={fonts.f400}
                      func={() => {
                        childClick();
                      }}
                    >
                      {el.name}
                    </LinkItem>
                  )}
                </S.TitleWrapper>

                {isExpanded && el.childrenIds && el.childrenIds !== "" && (
                  <>
                    <S.ListItem>
                      <LinkItem
                        href={`/catalog/${el.id}`}
                        func={() => setVisible(false)}
                        color={colors.black}
                        hoverColor={colors.redHover}
                        size="15px"
                        fontStyle={fonts.f400}
                        margin="0 0 0 8px"
                      >
                        Все в категорії
                      </LinkItem>
                    </S.ListItem>

                    {smallChildCategories(el)?.map(
                      (child: any, childIndex: number, array: any[]) => {
                        const isExpanded = expandedCategories.includes(
                          child.id
                        );
                        const isLastChild = childIndex === array.length - 1;

                        return (
                          <>
                            <S.LeftBorder
                              key={childIndex}
                              $isExpanded={child.childrenIds === ""}
                              style={{ marginLeft: "10px" }}
                              $lastChild={isLastChild}
                            >
                              <S.HorizontalLine
                                $isExpanded={child.childrenIds === ""}
                              />
                              {child.childrenIds !== "" && (
                                <S.TitleIcon
                                  open={isExpanded}
                                  src="/icons/catArrow.svg"
                                  onClick={(
                                    e: React.MouseEvent<HTMLDivElement>
                                  ) => {
                                    e.stopPropagation();
                                    handleCategoryClick(child.id);
                                  }}
                                />
                              )}
                              {child.childrenIds && child.childrenIds !== "" ? (
                                <Text
                                  color={colors.black}
                                  hoverColor={colors.redHover}
                                  size="15px"
                                  fontStyle={fonts.f400}
                                  func={() => {
                                    handleCategoryClick(child.id);
                                  }}
                                >
                                  {child.name}
                                </Text>
                              ) : (
                                <LinkItem
                                  href={`/catalog/${el.id}`}
                                  color={colors.black}
                                  hoverColor={colors.redHover}
                                  size="15px"
                                  fontStyle={fonts.f400}
                                  func={() => {
                                    childClick();
                                  }}
                                >
                                  {child.name}
                                </LinkItem>
                              )}
                            </S.LeftBorder>

                            {isExpanded && child.childrenIds !== "" && (
                              <>
                                {smallChildCategories(child)?.map(
                                  (
                                    childer: any,
                                    childerIndex: any,
                                    array: any[]
                                  ) => {
                                    const isLastChild =
                                      childerIndex === array.length - 1;

                                    return (
                                      <S.LeftBorder
                                        $isExpanded={child.childrenIds !== ""}
                                        style={{ marginLeft: "45px" }}
                                        key={childerIndex}
                                        $leftMargin={0}
                                        $lastChild={isLastChild}
                                      >
                                        <S.HorizontalLine
                                          $isExpanded={child.childrenIds !== ""}
                                        />
                                        <LinkItem
                                          href={`/catalog/${childer.id}`}
                                          color={colors.black}
                                          hoverColor={colors.redHover}
                                          size="15px"
                                          fontStyle={fonts.f400}
                                          func={() => childClick()}
                                        >
                                          {childer.name}
                                        </LinkItem>
                                      </S.LeftBorder>
                                    );
                                  }
                                )}
                              </>
                            )}
                          </>
                        );
                      }
                    )}
                  </>
                )}
              </>
            );
          })}
        </S.DetailsContainer>
      ) : null}
    </S.Wrapper>
  );
};
export default Categories;
