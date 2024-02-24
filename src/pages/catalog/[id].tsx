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
  const page = context.query.page || 1;

  let result = await catalogStore.loadStateCategory(
    context.params.id,
    page,
    filtersVariantIds
  );
  return {
    props: {
      iniState: result,
      query: { id: context.query.id, page: page, filters: filtersVariantIds },
    }
  };
};

const Page = (props: {
  iniState: CatalogPageResponse;
  query: { id: number; page: number; filters: number[] };
}) => {
  const state = useCatalogStore();
  state.setCatalogState(props.iniState);
  state.setQuery(props.query);

  console.log(state.catalogState);

  return (
    <>
      <PaddingWrapper style={{ backgroundColor: colors.grayBg }}>
        {state.catalogState === null ? <NotFound /> : <CatalogScreen />}
      </PaddingWrapper>
    </>
  );
};

export default Page;
