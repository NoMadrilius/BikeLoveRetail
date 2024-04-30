import {CatalogLinkParams} from "@/dataTransferObjects/internal/linkParams/CatalogLinkParams";

export function GenerateCatalogLink(p:CatalogLinkParams, slug?:string):string{
    let res = '/catalog'
    res+='/id='+p.id
    if(slug) res+='='+slug
    if(p.page>1) res+='/page='+p.page
    if(p.sort && p.sort.length > 0) res+='/sort='+p.sort
    if(p.filters.length > 0)res+='/filters='+p.filters.join('%2C')

    return res
}