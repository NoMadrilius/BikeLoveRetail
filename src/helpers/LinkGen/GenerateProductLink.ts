import {ProductFullData} from "@/dataTransferObjects/response/ProductFullData";

export function GenerateProductLink(id:number,slug:string,variants?:number[]){
    let res = `/product/id=${id}=${slug}`
    if(variants != undefined && variants.length > 0) res+=`/opt=${variants.join('2%C')}`
    return res
}