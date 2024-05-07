import {CatalogLinkParams} from "@/dataTransferObjects/internal/linkParams/CatalogLinkParams";
import {CatalogPageResponse} from "@/dataTransferObjects/response/CatalogPageResponse";
import satori from "next/dist/compiled/@vercel/og/satori";

export function GenerateCatalogLink(st?:CatalogPageResponse, p?:{id?:number, slug?:string, page?:number, sort?:string|null, filters?:number[], minPrice?:number, maxPrice?:number}):string{
    //Как использовать
    //Передаем стейт, если хотим сохранить настройки страницы и переопределить только некоторые элементы
    //Не передаем стейт, если стираем настройки, но нужно передать хотя бы айди в параметры, слаг желателен для сео, если нету стейта, остальное по необходимости

    try {
        let data:CatalogLinkParams = {id:0}

        if(!st && (!p || !p.id)) return '/catalog'

        let slug:null|string = null

        if(st){
            if(st.category)
            {
                data.id = st.category.id
                slug = st.category.transliterationName
            }

            data.filters = st.filterSettings
            data.sort = st.sortingSettings
            data.page = st.page
            data.minPrice = 0
            data.maxPrice = 0
        }

        if(p != undefined){
            if(p.id != undefined) data.id = p.id
            if(p.filters != undefined) data.filters = p.filters
            if(p.sort != undefined) data.sort = p.sort
            if(p.page != undefined) data.page = p.page
            if(p.minPrice != undefined) data.minPrice = p.minPrice
            if(p.maxPrice != undefined) data.maxPrice = p.maxPrice
        }

        if(p != undefined && p.slug != undefined) slug = p.slug

        let res = '/catalog'
        res+='/id='+data.id
        if(slug) res+='='+slug
        if(data.page && data.page>1) res+='/page='+data.page
        if(data.sort && data.sort.length > 0) res+='/sort='+data.sort
        if(data.filters && data.filters.length > 0)res+='/filters='+data.filters.join('%2C')
        if(data.minPrice) res+='/minPrice='+data.minPrice
        if(data.maxPrice) res+='/maxPrice='+data.maxPrice

        return res
    }catch (e) {
        return '/404'
    }

}