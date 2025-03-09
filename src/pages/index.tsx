import { loadAppState, loadAppState2 } from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import HomeScreen from "@/components/Screens/HomeScreen/HomeScreen";
import { setStateBase } from "@/helpers/setState/setStateBase";
import Layout from "@/components/Layout";

export async function getStaticProps(context:any) {
  return {props: {as:await loadAppState2(context.locale, 2)}, revalidate:10}
}

export default function Home(props:{as:AppState|null}) {

  if(props.as) setStateBase(props.as)

  return  <HomeScreen state={props.as!} />

}
