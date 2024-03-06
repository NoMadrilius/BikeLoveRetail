import React, {useState} from 'react';
import s from './Categories.module.scss'
import {TreeNode} from "@/dataTransferObjects/internal/TreeNode";
import {useAppStore} from "@/store/AppStore";
import {observer} from "mobx-react";
import Link from "next/link";
import {GenerateLink} from "@/helpers/GenerateLink";
import {useRouter} from "next/router";

const CategoriesItem = (p:{node:TreeNode}) => {
    const {node} = p
    const r= useRouter()
    const as = useAppStore()
    const [exp, setExp] = useState(false)

    return (
            <>
                {
                    node.childs.length > 0 ?
                        <div className={s.node}>
                            <div className={s.head} style={{marginLeft:(node.depth-1)*30}} onClick={n=>{setExp(!exp)}}>
                                {exp&&<img className={s.arrow_down} src="/icons/catArrow.svg"></img>}
                                {!exp&&<img className={s.arrow_right} src="/icons/catArrow.svg"></img>}
                                <div className={s.title}>
                                    {node.cat.name}
                                </div>
                            </div>
                            {exp &&
                                <div className={s.childs}>
                                    <Link onClick={()=>as.setIsOpenCategories(false)} href={GenerateLink(r,{basePath:"/catalog", queryParameters:{id:node.cat.id}, doNotSaveParams:true, slug:node.cat.transliterationName})} className={s.head} style={{marginLeft:(node.depth)*38, fontWeight:500}}>
                                        <div className={s.title}>
                                            {"Все в категорії >"}
                                        </div>
                                    </Link>
                                    {node.childs.map(n=><CategoriesItem node={n}/>)}
                                </div>}
                        </div>
                        :
                        <Link className={s.node} onClick={()=>as.setIsOpenCategories(false)} href={GenerateLink(r,{basePath:"/catalog", queryParameters:{id:node.cat.id}, doNotSaveParams:true, slug:node.cat.transliterationName})}>
                            <div className={s.head} style={{marginLeft:(node.depth-1)*30}}>
                                <div className={s.title} style={{marginLeft:node.depth*5}}>
                                    {node.cat.name}
                                </div>
                            </div>
                            <div className={s.childs}>
                                {exp && node.childs.map(n=><CategoriesItem node={n}/>)}
                            </div>
                        </Link>
                }
            </>
    );
};

export default observer(CategoriesItem);