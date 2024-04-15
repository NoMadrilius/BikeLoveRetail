import CatalogScreen from "@/components/Screens/CatalogScreen/CatalogScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { colors } from "../../../theme/colors";
import NotFound from "@/components/Screens/CatalogScreen/components/NotFound";
import catalogStore, { useCatalogStore } from "@/store/CatalogStore";
import { CatalogPageResponse } from "@/dataTransferObjects/response/CatalogPageResponse";
import {loadAppState} from "@/functions/loadAppState";
import {useAppStore} from "@/store/AppStore";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {useCurrencyStore} from "@/store/CurrencyStore";

export const getServerSideProps = async (context: any) => {
  const r = await loadAppState()
  const filtersVariantIds = context.query.filter
    ? context.query.filter.split(",").map(Number)
    : [];

  const sort = context.query.sort
      ? context.query.sort:undefined

  const page = context.query.page || 1;

  console.log('Id:',context.query)

  let result = await catalogStore.loadStateCategory(
    context.query.id,
    page,
    filtersVariantIds, sort
  );
  return {
    props: {
      iniState: result,
      as:r
    }
  };
};

const Page = (props: {
  iniState: CatalogPageResponse,
  as:AppState
}) => {
  useAppStore().setServerData(props.as)
  useCatalogStore().setCatalogState(props.iniState);
  useCurrencyStore().setServerData(props.as)

  return (
    <>
      <PaddingWrapper style={{ backgroundColor: colors.grayBg }}>
        {props.iniState === null ? <NotFound /> : <CatalogScreen />}
      </PaddingWrapper>
    </>
  );
};

export default Page;
