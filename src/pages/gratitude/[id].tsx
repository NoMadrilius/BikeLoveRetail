import GratitudeScreen from "@/components/Screens/GratitudeScreen/GratitudeScreen";
import { useRouter } from "next/router";
import {loadAppState} from "@/functions/loadAppState";
import {useAppStore} from "@/store/AppStore";
import {useCurrencyStore} from "@/store/CurrencyStore";
import {useBikeSelectionStore} from "@/store/BikeSelectionStore";
import {AppState} from "@/dataTransferObjects/internal/AppState";

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

  if(props.as){
    useAppStore().setServerData(props.as)
    useCurrencyStore().setServerData(props.as)
    useBikeSelectionStore().setOptions(props.as.bikeSelectState)
  }

  return (
      <GratitudeScreen/>
  );
};
export default Gratitude;
