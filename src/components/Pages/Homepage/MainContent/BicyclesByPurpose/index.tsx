import { SvgRightIcon } from "@/components/UIKit/SVGIcons";
import Link from "next/link";
import React from "react";
import NavigationButtons from "../CustomSlider/NavigationButtons";
import BicyclePurpose from "./BicyclePurpose";
import { useAppStore } from "@/store/AppStore";
import { useRouter } from "next/router";
import { observer } from "mobx-react";
import {GenerateCatalogLink} from "@/helpers/LinkGen/GenerateCatalogLink";

const BicyclesByPurpose = () => {
  const as = useAppStore();
  const r = useRouter();
  const cats = [0, 1, 2, 3, 4].map((n, index) => {
    let set = as.bikePorpouseCategories[index];
    let cat = as.categories.find((g) => g.id === set);
    if(!cat) return null
    return {
      name: cat.name,
      link: GenerateCatalogLink(undefined, {id:cat.id, slug:cat.transliterationName}),
      img: cat.iconUrl,
    };
  }).filter(n=>n!=null) as {img: string | undefined, name: string, link: string}[];

  return (
    <section className="mt-2 lg:mt-0">
      <NavigationButtons
        justShowTitle={true}
        title={"Велосипеди за призначенням"}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-3 gap-5 flex-wrap">
        {cats.map((p, index) => (
          <BicyclePurpose
            key={index}
            purpose={{
              name: p.name,
              image: p.img || "/",
              count: 250,
              link: p.link,
            }}
          />
        ))}

        <Link
          href="#"
          className="lg:flex items-center gap-2 shrink-0 mt-auto ml-auto hidden group"
        >
          <span className="text-dark leading-[19px] cursor-pointer group-hover:text-link-pink">
            Перейти до катологу
          </span>
          <SvgRightIcon className="group-hover:hidden block" />
          <SvgRightIcon color="#F9436B" className="group-hover:block hidden" />
        </Link>
      </div>
    </section>
  );
};

export default observer(BicyclesByPurpose);
