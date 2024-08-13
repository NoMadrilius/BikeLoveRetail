import GratitudeScreen from "@/components/Screens/GratitudeScreen/GratitudeScreen";
import { useRouter } from "next/router";
import {loadAppState} from "@/functions/loadAppState";
import appStore, {useAppStore} from "@/store/AppStore";
import currencyStore, {useCurrencyStore} from "@/store/CurrencyStore";
import bikeSelectionStore, {useBikeSelectionStore} from "@/store/BikeSelectionStore";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {useEffect} from "react";

export const getStaticPaths = async () => {
  // Fetch the dynamic paths from your API or any data source
  const paths = [] as string[];

  return {
    paths,
    fallback: true // or 'blocking' if you want to use incremental static regeneration
  };
};
export async function getStaticProps() {
  return {props: {as:await loadAppState()}, revalidate:60}
}

const Gratitude = (props:{as:AppState|null}) => {

  useEffect(() => {
    if(props.as){
      appStore.setServerData(props.as)
      currencyStore.setServerData(props.as)
      bikeSelectionStore.setOptions(props.as.bikeSelectState)
    }
  }, []);


  return (
      <GratitudeScreen/>
  );
};
export default Gratitude;
