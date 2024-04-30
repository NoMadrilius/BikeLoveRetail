import {CatalogLinkParams} from "@/dataTransferObjects/internal/linkParams/CatalogLinkParams";
import {forEach} from "@react-google-maps/api/dist/utils/foreach";

export function GetCatalogLinkParams (slug:string[]|undefined):CatalogLinkParams|null{
    if(slug === undefined) return null

    let res:CatalogLinkParams = {
        id:0,
        filters:[],
        sort:null,
        page:1,
    }

    slug.forEach(n=>{
        const match = n.match(/id=(\d+)=/);
        if (match) res.id = parseInt(match[1])

        if(n.startsWith('filters=')) res.filters = n.substring(8).split(',').map(n=>{
            console.log('split',n)
            const parsedValue = parseInt(n);
            return isNaN(parsedValue) ? null : parsedValue;
        }).filter(n=>n != null) as number[]

        if(n.startsWith('sort=')) res.sort = n.substring(5)
        if(n.startsWith('page=')) res.page = parseInt(n.substring(5))
    })

    if(res.id === null) return null

    return res;
}