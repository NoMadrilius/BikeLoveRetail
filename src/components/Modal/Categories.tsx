import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { useState } from "react";

import * as S from "./Categories.styles";
import { LinkItem } from "../LinkItem";
import {GenerateLink} from "@/helpers/GenerateLink";
import {useRouter} from "next/router";
import {useAppStore} from "@/store/AppStore";
import {styled} from "styled-components";
import CategoriesTree from "@/components/Modal/CategoriesTree";
import {TreeNode} from "@/dataTransferObjects/internal/TreeNode";
import {observer} from "mobx-react";
import {GenerateCatalogLink} from "@/helpers/GenerateCatalogLink";

const Categories = (p:{activeMenu:any,setActiveMenu:any }) => {
  const [selectedTitle, setSelectedTitle] = useState<TreeNode|null>(null);
  const [submenuCategories, setSubmenuCategories] = useState(0);

  const r = useRouter()
  const as = useAppStore()

  return (
      <CategoriesContainer
          activeMenu={p.activeMenu}
          categoriesVisible={as.isOpenCategories}
      >
        <Overlay categoriesVisible={as.isOpenCategories} />
        <S.Wrapper
      id="categories-component"
      onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
    >
      <S.MainColumn>
        {as.categoryTree.filter(n=>n.depth === 0).sort((a, b) => b.cat.sortOrder - a.cat.sortOrder).map((el) => (
          <S.ListItem key={el.cat.id}>
            <LinkItem
                href={GenerateCatalogLink({id:el.cat.id, sort:null, filters:[], page:1},el.cat.transliterationName)}
                color={el.cat.id === selectedTitle?.cat.id ? colors.redMain : colors.black}
                hoverColor={colors.redHover}
                size="15px"
                fontStyle={fonts.f600}
                textTransform="uppercase"
                onMouseEnter={(e) => {
                  if(el.childs.length != 0) {
                    setSubmenuCategories(e.clientY - p.activeMenu.rect.bottom);
                    setSelectedTitle(el);
                  }
                }}
                func={() =>as.setIsOpenCategories(false)}
            >
              {el.cat.name}
            </LinkItem>
          </S.ListItem>
        ))}
      </S.MainColumn>
      {selectedTitle != null && <CategoriesTree offset={submenuCategories} parent={selectedTitle}/>}
    </S.Wrapper>
      </CategoriesContainer>
  );
};
export default observer(Categories);

const CategoriesContainer = styled.div<{
  activeMenu: any;
  categoriesVisible: any;
}>`
  position: absolute;
  /* top: ${({ activeMenu }) =>
    activeMenu.rect ? activeMenu.rect.bottom + "px" : "0"}; */
  left: ${({ activeMenu }) =>
    activeMenu.rect ? activeMenu.rect.left + "px" : "0"};
  opacity: ${({ categoriesVisible }) => (categoriesVisible ? 1 : 0)};
  /* visibility: ${({ categoriesVisible }) =>
    categoriesVisible ? "visible" : "hidden"}; */
  transition: all 0.3s ease-in-out;

  /* Additional styles */
  pointer-events: ${({ categoriesVisible }) =>
    categoriesVisible ? "auto" : "none"};
`;
const Overlay = styled.div<{ categoriesVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: ${({ categoriesVisible }) => (categoriesVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;