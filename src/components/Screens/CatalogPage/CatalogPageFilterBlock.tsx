import React from "react";
import { CatalogPageData } from "@/dataTransferObjects/response/catalogPage/CatalogPageData";
import CatalogPageFilters from "@/components/Screens/CatalogPage/CatalogPageFilters";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import catalogStore from "@/store/CatalogStore";
import { router } from "next/client";
import { useTranslation } from "next-i18next";

const CatalogPageFilterBlock = ({c}:{c:CatalogPageData}) => {

  const uniqOpts:{id:number,name:string}[]=[]
  c.options.forEach(n=>{if(uniqOpts.find(g=>g.id === n.optionId)===undefined)uniqOpts.push({id:n.optionId, name:n.optionName})});

  const { t } = useTranslation('catalog_page');

  return (
    <>
      <FormControl fullWidth>
        <InputLabel sx={{ color: 'black',top: '-8px', // or adjust as needed
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -2px) scale(0.75)',
          }, }} id="demo-simple-select-label">
          {t("Сортування")}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={t("Сортування")}
          size={"small"}
          value={c.sortingSettings??"default"}
          onChange={(e)=>{
            if(e.target.value != "default"){
              router.push([...c.segments.filter(n=>n!="price-des").filter(n=>n!="price-asc").filter(n=>n!="sale").filter(n=>!n.includes("page")), e.target.value].join('/'))
            }else {
              router.push(c.segments.filter(n => n != "price-des").filter(n => n != "price-asc").filter(n => n != "sale").filter(n=>!n.includes("page")).join('/'))
            }
          }}
        >
          <MenuItem value={"default"}>{t("Рекомендоване")}</MenuItem>
          <MenuItem value={"price-des"}>{t("Дорожче")}</MenuItem>
          <MenuItem value={"price-asc"}>{t("Дешевше")}</MenuItem>
          <MenuItem value={"sale"}>{t("Акції")}</MenuItem>
        </Select>
      </FormControl>
      {c.brands.length > 0 && <CatalogPageFilters indx={0} title={t("Бренд")} variants={c.brands.map(b=>{return{name:b.name, url:b.url, id:b.id}})} actual={c.filterSettings} segments={c.segments}/>}

      {uniqOpts.map((opt, index) => {
        let variants = c.options.filter((n) => n.optionId === opt.id);
        return (
          <CatalogPageFilters indx={index} key={index} title={opt.name} variants={variants.filter(n=>n.quantity > 0)} actual={c.filterSettings} segments={c.segments}/>
        );
      })}
    </>
  );
};

export default CatalogPageFilterBlock;