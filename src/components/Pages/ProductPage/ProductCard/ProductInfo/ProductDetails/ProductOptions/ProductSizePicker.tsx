import { useState } from "react";
import { useProductPageStore } from "@/store/ProductPageStore";
import { observer } from "mobx-react";
import Link from "next/link";
import { GenerateProductLink } from "@/helpers/LinkGen/GenerateProductLink";

const ProductSizePicker = (p: { id: number; name: string }) => {
  const ps = useProductPageStore();
  if(!ps.product) return null
  const pr = ps.product;
  const variants = ps.uniqueVariants.filter((n) => n.optionId === p.id);

  if (variants.length < 2) return null;

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-robot-c font-bold text-[20px] leading-[24px] text-dark">
        {p.name}
      </h3>
      <div className="flex gap-3 flex-wrap">
        {variants.map((v) => (
          <Link
            key={v.variantId}
            className={"cursor-pointer select-none"}
            href={GenerateProductLink(
              pr.product.id,
              pr.product.transliteration,
              ps.addVariant(v)
            )}
          >
            <div
              className={`border border-gray p-1 h-7 shrink-0 font-semibold rounded flex items-center justify-center ${
                ps.selectedVariants.includes(v.variantId)
                  ? "bg-dark text-white border-dark"
                  : "bg-white text-dark hover:border-dark"
              } ${
                false
                  ? "cursor-not-allowed text-gray bg-white border-gray hover:border-gray"
                  : ""
              }`}
            >
              {v.variantName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default observer(ProductSizePicker);
