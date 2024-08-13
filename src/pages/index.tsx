import appStore, {useAppStore} from "@/store/AppStore";
import {loadAppState} from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import currencyStore, {useCurrencyStore} from "@/store/CurrencyStore";
import HomeScreen from "@/components/Screens/HomeScreen/HomeScreen";
import bikeSelectionStore, {useBikeSelectionStore} from "@/store/BikeSelectionStore";
import {useEffect} from "react";

export async function getStaticProps() {
  return {props: {as:await loadAppState()}, revalidate:10}
}

export default function Home(props:{as:AppState|null}) {

  useEffect(() => {
    if(props.as){
      appStore.setServerData(props.as)
      currencyStore.setServerData(props.as)
      bikeSelectionStore.setOptions(props.as.bikeSelectState)
    }
  }, []);

  return <HomeScreen />;
}
