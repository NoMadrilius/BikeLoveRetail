import HomeScreen from "@/components/Screens/HomeScreen/HomeScreen";
import appStore, {useAppStore} from "@/store/AppStore";
import {loadAppState} from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {useCurrencyStore} from "@/store/CurrencyStore";

export async function getServerSideProps() {
  const r = await loadAppState()

  return {
    props: {as:r},
  }
}

export default function Home(props:{as:AppState}) {
  console.log("appState:",props)
  useAppStore().setServerData(props.as)
  useCurrencyStore().setServerData(props.as)
  return <HomeScreen />;
}
