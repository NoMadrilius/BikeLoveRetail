import { loadAppState, loadAppState2 } from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import HomeScreen from "@/components/Screens/HomeScreen/HomeScreen";
import { setStateBase } from "@/helpers/setState/setStateBase";
import Layout from "@/components/Layout";
import AppStore from "@/store/AppStore";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps(context:any) {

  return {props: {as:await loadAppState2(context.locale, 2), locale:context.locale, ...(await serverSideTranslations(context.locale, ['home_page'])),}, revalidate:10}
}

export default function Home(props:{as:AppState|null, locale:string, }) {
  if(props.locale === "ru") AppStore.setLocale("RU")
  else AppStore.setLocale("UA")

  if(props.as) setStateBase(props.as)

  return  <HomeScreen state={props.as!} />

}
