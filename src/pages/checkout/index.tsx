import PersonalData from "@/components/Pages/OrderPage/PersonalData/personal-data";
import PersonalDataNeedToAuthentificate
    from "@/components/Pages/OrderPage/PersonalData/personal-data-need-to-authentificate";
import PersonalDataNotRegister from "@/components/Pages/OrderPage/PersonalData/personal-data-not-register";
import PersonalDataSignedIn from "@/components/Pages/OrderPage/PersonalData/personal-data-signed-in/personal-data-signed-in";
import OrderInfo from "@/components/Pages/OrderPage/OrderInfo/OrderInfo";
import ContactAndSocial from "@/components/Pages/Homepage/Aside/Sections/ContactAndSocial";
import DarkFooter from "@/components/UIKit/NavigationPanel/Header/MobileHeader/Sections/Footer/darkFooter";
import DeliveryInfo from "@/components/Pages/OrderPage/DeliveryInfo/DeliveryInfo";
import {useAuthStore} from "@/store/AuthStore";
import {observer} from "mobx-react";
import {useCheckList} from "@/store/CheckListStore";

const Order = () => {
    const authStore = useAuthStore()
    const cls = useCheckList()
    return (
        <div
            className="scroll-smooth max-w-[1324px] xl:max-w-[1200px] w-full m-auto items-start pt-[60px] pb-10 flex flex-col gap-8 text-black bg-red sm2:px-5 font-inter">
            <h1 className="text-[40px] sm2:text-[32px] font-medium font-robot-c">Оформлення замовлення</h1>

            <div className="w-full grid grid-cols-[1.3fr_1fr] xl:grid-cols-[1.4fr_1fr] md1:grid-cols-1 gap-8 xl:gap-5 ">
                <div className="col-span-1 gap-x-5 gap-y-8 flex flex-col">
                    {authStore.isAuth ?
                        <PersonalDataSignedIn/>
                        :
                        <>
                            {
                                cls.initialPhoneCorrect?
                                    <>
                                        {cls.isInitialUserExist?
                                            <PersonalDataNeedToAuthentificate/>
                                            :
                                            <PersonalDataNotRegister/>
                                        }
                                    </>
                                    :
                                    <PersonalData/>
                            }
                        </>
                    }
                    <DeliveryInfo/>
                </div>
                <div className="col-span-1">
                    <OrderInfo/>
                    <div className="flex gap-8 xl:gap-5 mt-8 sm2:hidden">
                        <ContactAndSocial className="w-full"/>
                        <DarkFooter />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default observer(Order);