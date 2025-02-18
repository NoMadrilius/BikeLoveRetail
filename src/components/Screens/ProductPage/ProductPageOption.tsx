import React from "react";
import Link from "next/link";
import { GenerateProductLink } from "@/helpers/LinkGen/GenerateProductLink";
import { ProductPageDataOption } from "@/dataTransferObjects/response/productPage/ProductPageDataOption";
import { ProductPageDataBinds } from "@/dataTransferObjects/response/productPage/ProductPageDataBinds";

const ProductPageOption = ({active,variants,binds,preferred}:{active:ProductPageDataOption,variants:ProductPageDataOption[], binds:ProductPageDataBinds[], preferred:ProductPageDataOption[]}) => {

  let uniqVariants : {name:string, id:number} [] = []

  variants.forEach(variant => {
    if(!uniqVariants.find(n=>n.id == variant.variantId)) uniqVariants.push({name:variant.name, id:variant.variantId})
  })

  if(!uniqVariants.find(n=>n.id == active.variantId))uniqVariants.push({name:active.name, id:active.variantId})

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-robot-c font-bold text-[20px] leading-[24px] text-dark">
        {active.optionName}
      </h3>
      <div className="flex gap-3 flex-wrap">
        {uniqVariants.sort((a,b)=>a.id-b.id).map((v) => {
          let isProductWithAll = false
          let url = "/"

          let conq :{o:ProductPageDataBinds, l:number}[]=[]
          binds.filter(n=>n.requiredVariants.map(g=>g.variantId).includes(v.id)).forEach(n=>{
            let vars = n.requiredVariants.map(h=>h.variantId)
            let l = preferred.filter(n=>vars.includes(n.variantId)).length
            conq.push({o:n,l:l})
          })
          url = conq.sort((a,b)=>b.l-a.l)[0]?.o.url??"/"


          let wantToFindInAnotherBinds = preferred.filter(n=>n.variantId != active.variantId).map(g=>g.variantId)
          wantToFindInAnotherBinds.push(v.id)

          binds.forEach(n=>{
            let isProductContainsAll = true
            let vars = n.requiredVariants.map(g=>g.variantId)
            wantToFindInAnotherBinds.forEach(n=>{if(!vars.includes(n)) isProductContainsAll = false})
            if(isProductContainsAll) isProductWithAll = true
          })


          return(
            <Link
              key={v.id}
              className={"cursor-pointer select-none"}
              href={url}
            >
              <div
                className={`border border-gray p-1 h-7 shrink-0 font-semibold rounded flex items-center justify-center ${
                  active.variantId === v.id
                    ? "bg-dark text-white border-dark"
                    : "bg-white text-dark hover:border-dark"
                } ${
                  (!isProductWithAll && active.variantId != v.id)
                    ? "text-gray bg-white border-gray hover:border-gray"
                    : ""
                }`}
              >
                {v.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default ProductPageOption;