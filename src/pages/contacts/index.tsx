import ContactsScreen from "@/components/Screens/ContactsScreen/ContactsScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { loadAppState } from "@/functions/loadAppState";
import workshopStore from "@/store/WorkshopStore";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AppState } from "@/dataTransferObjects/internal/AppState";
import { WorkshopDataResponse } from "@/dataTransferObjects/response/WorkshopDataResponse";
import { useEffect } from "react";
import appStore from "@/store/AppStore";
import currencyStore from "@/store/CurrencyStore";
import bikeSelectionStore from "@/store/BikeSelectionStore";
import { setStateBase } from "@/helpers/setState/setStateBase";

export async function getStaticProps(context:any) {
  return {props: {as:await loadAppState(), data:await workshopStore.loadData(), locale: context.locale, ...(await serverSideTranslations(context.locale, ['common','contacts_page'])) }, revalidate:864000}
}

const Contacts = (props:{as:AppState|null, data:WorkshopDataResponse|null}) => {

  useEffect(() => {
    if(props.as) setStateBase(props.as)
  }, [props.as]);
  return (
    <>
      <PaddingWrapper>
        <ContactsScreen />
      </PaddingWrapper>
    </>
  );
};
export default Contacts;
