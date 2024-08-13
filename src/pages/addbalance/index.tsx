import React, {useEffect, useState} from 'react';
import {loadAppState} from "@/functions/loadAppState";
import {AppState} from "@/dataTransferObjects/internal/AppState";
import appStore, {useAppStore} from "@/store/AppStore";
import currencyStore, {useCurrencyStore} from "@/store/CurrencyStore";
import bikeSelectionStore, {useBikeSelectionStore} from "@/store/BikeSelectionStore";
import PersonalDataSignedIn
    from "@/components/Pages/OrderPage/PersonalData/personal-data-signed-in/personal-data-signed-in";
import PersonalDataNeedToAuthentificate
    from "@/components/Pages/OrderPage/PersonalData/personal-data-need-to-authentificate";
import PersonalDataNotRegister from "@/components/Pages/OrderPage/PersonalData/personal-data-not-register";
import PersonalData from "@/components/Pages/OrderPage/PersonalData/personal-data";
import {useAuthStore} from "@/store/AuthStore";
import {useCheckList} from "@/store/CheckListStore";
import { observer } from 'mobx-react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import InputWithPlaceholder from "@/components/UIKit/InputFields/InputWithPlaceholder";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";

export async function getStaticProps() {
    return {props: {as:await loadAppState()}, revalidate:60}
}

const Pay = (props:{as:AppState|null}) => {


    useEffect(() => {
        if(props.as){
            appStore.setServerData(props.as)
            currencyStore.setServerData(props.as)
            bikeSelectionStore.setOptions(props.as.bikeSelectState)
        }
    }, []);

    const [sum, setSum] = useState<number|null>(null)

    const authStore = useAuthStore();
    const cls = useCheckList();

    return (
        <div
            className="scroll-smooth max-w-[1324px] xl:max-w-[1200px] w-full m-auto items-start pt-[60px] pb-10 flex flex-col gap-8 text-black bg-red sm2:px-5 font-inter">
            <h1 className="text-[40px] sm2:text-[32px] font-medium font-robot-c xl1:sticky top-0">
                Поповнення балансу
            </h1>

            <div className="w-full gap-8 xl:gap-5 ">
                <div className="col-span-1 gap-x-5 gap-y-8 flex flex-col xl1:sticky top-[68px] h-fit">
                    {authStore.isAuth ? (
                        <>
                        <PersonalDataSignedIn/>
                        <BlockWrapper title="Вкажіть сумму" className="flex flex-col gap-5">
                            <div className={"flex mob:flex-col gap-2"}>
                                <InputWithPlaceholder value={sum?.toString()} setValue={v=>{
                                    let g = parseFloat(v)

                                    setSum(isNaN(g)?null:g)
                                }} placeholder={"Сумма"} type={"number"}/>
                                <GradientButton disabled={(sum??0) < 5} className={"text-white w-full"} showIcon={false} onClick={()=>{
                                    window.open(`http://api.bikelove.com.ua/api/payments/liqpaybalance?UserId=${authStore.user!.id}&Amount=${sum!}&CurrencyId=2`, "_blanc")
                                }} label={"Поповнити баланс"}/>
                            </div>
                        </BlockWrapper>
                        </>
                    ) : (
                        <>
                            {cls.initialPhoneCorrect ? (
                                <>
                                    {cls.isInitialUserExist ? (
                                        <PersonalDataNeedToAuthentificate/>
                                    ) : (
                                        <PersonalDataNotRegister/>
                                    )}
                                </>
                            ) : (
                                <PersonalData/>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default observer(Pay);