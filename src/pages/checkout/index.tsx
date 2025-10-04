import PersonalData from "@/components/Pages/OrderPage/PersonalData/personal-data";
import PersonalDataNeedToAuthentificate from "@/components/Pages/OrderPage/PersonalData/personal-data-need-to-authentificate";
import PersonalDataNotRegister from "@/components/Pages/OrderPage/PersonalData/personal-data-not-register";
import PersonalDataSignedIn from "@/components/Pages/OrderPage/PersonalData/personal-data-signed-in/personal-data-signed-in";
import OrderInfo from "@/components/Pages/OrderPage/OrderInfo/OrderInfo";
import ContactAndSocial from "@/components/Pages/Homepage/Aside/Sections/ContactAndSocial";
import DarkFooter from "@/components/UIKit/NavigationPanel/Header/MobileHeader/Sections/Footer/darkFooter";
import DeliveryInfo from "@/components/Pages/OrderPage/DeliveryInfo/DeliveryInfo";
import { useAuthStore } from "@/store/AuthStore";
import { observer } from "mobx-react";
import { useCheckList } from "@/store/CheckListStore";
import OrderConfirmation from "@/components/Pages/OrderPage/OrderConfirmation/OrderConfirmation";
import { loadAppState, loadAppState2 } from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import {useEffect} from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AppStore from "@/store/AppStore";
import { setStateBase } from "@/helpers/setState/setStateBase";
import { useTranslation } from "next-i18next";

export async function getStaticProps(context: any) {
  return {props: {as:await loadAppState2(),locale:context.locale, ...(await serverSideTranslations(context.locale, ['common','checkout_page']))}, revalidate:60}
}

const Order = (props:{as:AppState|null, locale:string}) => {
  const { t } = useTranslation('checkout_page');

  if(props.locale === "ru") AppStore.setLocale("RU")
  else AppStore.setLocale("UA")

  useEffect(() => {
    if(props.as) setStateBase(props.as)
  }, [props.as]);


  const authStore = useAuthStore();
  const cls = useCheckList();
  return (
    <div className="scroll-smooth max-w-[1324px] xl:max-w-[1200px] w-full m-auto items-start pt-[60px] pb-10 flex flex-col gap-8 text-black bg-red sm2:px-5 font-inter">
      <h1 className="text-[40px] sm2:text-[32px] font-medium font-robot-c xl1:sticky top-0">
        {t("Оформлення замовлення")}
      </h1>

      <div className="w-full grid grid-cols-[1.3fr_1fr] xl:grid-cols-[1.4fr_1fr] md1:grid-cols-1 gap-8 xl:gap-5 ">
        <div className="col-span-1 gap-x-5 gap-y-8 flex flex-col xl1:sticky top-[68px] h-fit">
          {authStore.isAuth ? (
            <PersonalDataSignedIn />
          ) : (
            <>
              {cls.initialPhoneCorrect ? (
                <>
                  {cls.isInitialUserExist ? (
                    <PersonalDataNeedToAuthentificate />
                  ) : (
                    <PersonalDataNotRegister />
                  )}
                </>
              ) : (
                <PersonalData />
              )}
            </>
          )}
          <DeliveryInfo />
        </div>
        <div className="col-span-1  xl1:sticky top-4 h-fit">
          <OrderInfo />
          <div className="flex gap-8 xl:gap-5 mt-8 sm2:hidden">
            <ContactAndSocial className="w-full" />
            <DarkFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(Order);
