import { colors } from "../../../theme/colors";
import { Text } from "../Text/Text";
import { fonts } from "../../../theme/fonts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import * as S from "./Categories.styles";
import Link from "next/link";

const Categories = ({ setVisible, categories, rect }: any) => {
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [expandedSmallCategoryId, setExpandedSmallCategoryId] = useState(null);
  const router = useRouter();

  const [activeParentId, setActiveParentId] = useState(null);
  const [activeChildId, setActiveChildId] = useState(null);
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
  const smallChildClick = () => {
    setVisible(false);
  };

  const style = {
    // position: "absolute",
    // top: `${rect.bottom + window.scrollY + 10}px`,
    // left: `${rect.left + window.scrollX}px`,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && !target.closest("#categories-component")) {
        setVisible(false);
        event.stopPropagation();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setVisible]);

  return (
    <S.Wrapper
      // style={style}
      id="categories-component"
      onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
    >
      <S.MainColumn>
        {categories?.parentCategories?.map((el: any) => (
          <div
            onClick={(e) => setSubmenuCategories(e.clientY - rect.bottom)}
            key={el.id}
          >
            {el.childrenIds !== "" ? (
              <Text
                color={el.id === selectedTitle ? colors.redMain : colors.black}
                hoverColor={colors.redHover}
                size="15px"
                fontStyle={fonts.f600}
                func={() => {
                  setSelectedTitle(el.id);
                  setCategoryTitle(el.name);
                }}
                textTransform="uppercase"
              >
                {el.name}
              </Text>
            ) : (
              <Link href={`/catalog/${el.id}`}>
                <Text
                  color={
                    el.id === selectedTitle ? colors.redMain : colors.black
                  }
                  hoverColor={colors.redHover}
                  size="15px"
                  fontStyle={fonts.f600}
                  func={() => setVisible(false)}
                  textTransform="uppercase"
                >
                  {el.name}
                </Text>
              </Link>
            )}
          </div>
        ))}
      </S.MainColumn>
      {selectedTitle && filteredCategory ? (
        <S.DetailsContainer
          $top={submenuCategories}
          $removePadding={selectedTitle}
        >
          <Link href={`/catalog/${filteredCategory?.id}`}>
            <Text
              color={colors.black}
              hoverColor={colors.redHover}
              size="16px"
              fontStyle={fonts.f600}
              func={() => childClick()}
            >
              {categoryTitle}
            </Text>
          </Link>
          {childCategories.map((el: any, index: any) => {
            const isExpanded = expandedCategoryId === el.id;

            return (
              <>
                <S.TitleWrapper key={index}>
                  {el.childrenIds && el.childrenIds !== "" && (
                    <S.TitleIcon
                      open={isExpanded}
                      src="/icons/catArrow.svg"
                      style={{ marginTop: "16px" }}
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
                        setExpandedCategoryId(isExpanded ? null : el.id);
                      }}
                    >
                      {el.name}
                    </Text>
                  ) : (
                    <Link href={`/catalog/${el.id}`}>
                      <Text
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
                      </Text>
                    </Link>
                  )}
                </S.TitleWrapper>

                {isExpanded && el.childrenIds && el.childrenIds !== "" && (
                  <>
                    {smallChildCategories(el)?.map(
                      (child: any, childIndex: number, array: any[]) => {
                        const isExpanded = expandedSmallCategoryId === child.id;
                        const isLastChild = childIndex === array.length - 1;

                        return (
                          <>
                            <S.TitleWrapper key={childIndex}>
                              <S.LeftBorder
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
                                  />
                                )}
                                {child.childrenIds &&
                                child.childrenIds !== "" ? (
                                  <Text
                                    color={colors.black}
                                    hoverColor={colors.redHover}
                                    size="15px"
                                    fontStyle={fonts.f400}
                                    // margin="0 0 0 8px"
                                    // func={() => smallChildClick(child.id)}
                                    func={() => {
                                      setExpandedSmallCategoryId(
                                        isExpanded ? null : child.id
                                      );
                                    }}
                                  >
                                    {child.name}
                                  </Text>
                                ) : (
                                  <Link href={`/catalog/${el.id}`}>
                                    <Text
                                      color={colors.black}
                                      hoverColor={colors.redHover}
                                      size="15px"
                                      fontStyle={fonts.f400}
                                      // margin="0 0 0 8px"
                                      // func={() => smallChildClick(child.id)}
                                      func={() => {
                                        childClick();
                                      }}
                                    >
                                      {child.name}
                                    </Text>
                                  </Link>
                                )}
                              </S.LeftBorder>
                            </S.TitleWrapper>
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
                                        <Link href={`/catalog/${childer.id}`}>
                                          <Text
                                            color={colors.black}
                                            hoverColor={colors.redHover}
                                            size="15px"
                                            fontStyle={fonts.f400}
                                            // margin="0 0 0 12px"
                                            func={() => smallChildClick()}
                                          >
                                            {childer.name}
                                          </Text>
                                        </Link>
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
