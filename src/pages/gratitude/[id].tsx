import GratitudeScreen from "@/components/Screens/GratitudeScreen/GratitudeScreen";
import { loadAppState, loadAppState2 } from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {useEffect} from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppStore from "@/store/AppStore";
import { setStateBase } from "@/helpers/setState/setStateBase";

export const getStaticPaths = async () => {
  // Fetch the dynamic paths from your API or any data source
  const paths = [] as string[];

  return {
    paths,
    fallback: true // or 'blocking' if you want to use incremental static regeneration
  };
};
export async function getStaticProps(context: any) {
  return {props: {as:await loadAppState2(),locale:context.locale, ...(await serverSideTranslations(context.locale, ['common']))}, revalidate:60}
}

const Gratitude = (props:{as:AppState|null, locale:string}) => {

  if(props.locale === "ru") AppStore.setLocale("RU")
  else AppStore.setLocale("UA")

  useEffect(() => {
    if(props.as) setStateBase(props.as)
  }, [props.as]);


  return (
      <GratitudeScreen/>
  );
};
export default Gratitude;
