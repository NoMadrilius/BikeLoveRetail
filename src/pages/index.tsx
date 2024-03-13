import HomeScreen from "@/components/Screens/HomeScreen/HomeScreen";
import appStore, {useAppStore} from "@/store/AppStore";
import {Shop} from "@/dataTransferObjects/entities/Shop";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";

export async function getServerSideProps() {

  const r = await appStore.serverInitialize()

  return {
    props: r,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}

export default function Home(props:{s:Shop[],c:ProductCategory[]}) {
  console.log("appState:",props)
  const c = useAppStore()
  c.setServerData(props)
  return <HomeScreen />;
}
