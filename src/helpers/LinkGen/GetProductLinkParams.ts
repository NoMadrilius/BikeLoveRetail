import {ProductLinkParams} from "@/dataTransferObjects/internal/linkParams/ProductLinkParams";

export function GetProductLinkParams(slug:string[]|undefined):ProductLinkParams|null{
    if(slug === undefined) return null

    let res:ProductLinkParams = {id:0}

    slug.forEach(n=>{
        const match = n.match(/^id=(\d+)/);
        if (match) res.id = parseInt(match[1])

        if(n.startsWith('opt=')) res.variants = n.substring(4).split(',').map(n=>{
            const parsedValue = parseInt(n);
            return isNaN(parsedValue) ? null : parsedValue;
        }).filter(n=>n != null) as number[]
    })

    if(res.id === 0) return null

    return res;
}