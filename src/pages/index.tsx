import {useAppStore} from "@/store/AppStore";
import {loadAppState} from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {useCurrencyStore} from "@/store/CurrencyStore";
import HomeScreen from "@/components/Screens/HomeScreen/HomeScreen";
import {useBikeSelectionStore} from "@/store/BikeSelectionStore";

export async function getStaticProps() {
  return {props: {as:await loadAppState()}, revalidate:1}
}

export default function Home(props:{as:AppState|null}) {
  console.log("appState:",props)
  if(props.as){
    useAppStore().setServerData(props.as)
    useCurrencyStore().setServerData(props.as)
    useBikeSelectionStore().setOptions(props.as.bikeSelectState)
  }
  return <HomeScreen />;
}
