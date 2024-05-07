import React from 'react';
import * as S from "@/components/Modal/Categories.styles";
import {LinkItem} from "@/components/LinkItem";
import {colors} from "../../../theme/colors";
import {fonts} from "../../../theme/fonts";
import {useRouter} from "next/router";
import {useAppStore} from "@/store/AppStore";
import CategoriesItem from "@/components/Modal/CategoriesItem";
import s from './Categories.module.scss'
import {TreeNode} from "@/dataTransferObjects/internal/TreeNode";
import {observer} from "mobx-react";
import {GenerateLink} from "@/helpers/LinkGen/GenerateLink";

const CategoriesTree = (p:{offset:number, parent:TreeNode}) => {
    const r = useRouter()
    const as = useAppStore()

    const childClick = () => {
        as.setIsOpenCategories(false)
    };


    console.log("rerender tree")

    return (
        <S.DetailsContainer
            $top={p.offset}
            $removePadding={p.parent.cat.id}
        >
            <S.ListItem>
                <LinkItem
                    href={GenerateLink(r,{basePath:'/catalog', queryParameters:{id:p.parent.cat.id}, slug:p.parent.cat.transliterationName})}
                    color={colors.black}
                    hoverColor={colors.redHover}
                    size="16px"
                    fontStyle={fonts.f600}
                    func={() => childClick()}
                >
                    {p.parent.cat.name}
                </LinkItem>
            </S.ListItem>
            <div className={s.tree}>
                {p.parent.childs.map((el) => {
                    return <CategoriesItem node={el} key={el.cat.id}/>
                })}
            </div>

        </S.DetailsContainer>
    );
};

export default observer(CategoriesTree);