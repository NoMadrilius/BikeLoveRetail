import {loadAppState} from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import HomeScreen from "@/components/Screens/HomeScreen/HomeScreen";
import { setStateBase } from "@/helpers/setState/setStateBase";

export async function getStaticProps() {
  return {props: {as:await loadAppState()}, revalidate:10}
}

export default function Home(props:{as:AppState|null}) {

  if(props.as) setStateBase(props.as)

  return <HomeScreen />;
}
