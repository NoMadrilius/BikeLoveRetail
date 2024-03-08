import CatalogScreen from "@/components/Screens/CatalogScreen/CatalogScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { colors } from "../../../theme/colors";
import NotFound from "@/components/Screens/CatalogScreen/components/NotFound";
import catalogStore, { useCatalogStore } from "@/store/CatalogStore";
import { CatalogPageResponse } from "@/dataTransferObjects/response/CatalogPageResponse";

export const getServerSideProps = async (context: any) => {
  const filtersVariantIds = context.query.filter
    ? context.query.filter.split(",").map(Number)
    : [];

  const sort = context.query.sort
      ? context.query.sort.split(",")
      : [];

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
    }
  };
};

const Page = (props: {
  iniState: CatalogPageResponse;
}) => {
  const state = useCatalogStore();
  state.setCatalogState(props.iniState);

  return (
    <>
      <PaddingWrapper style={{ backgroundColor: colors.grayBg }}>
        {state.catalogState === null ? <NotFound /> : <CatalogScreen />}
      </PaddingWrapper>
    </>
  );
};

export default Page;
