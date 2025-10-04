import React, {useState} from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PersonalDataSignedInBodyInfo
    from "@/components/Pages/OrderPage/PersonalData/personal-data-signed-in/personal-data-signed-in-body-info";
import PersonalDataSignedInBodyForm
    from "@/components/Pages/OrderPage/PersonalData/personal-data-signed-in/personal-data-signed-in-body-form";
import { useTranslation } from "next-i18next";

const PersonalDataSignedIn = () => {
    const [isEdit, setIsEdit] = useState(false);
    const open=()=>{
        setIsEdit(true)
    }
    const { t } = useTranslation('checkout_page');

    return (
        <BlockWrapper title={t("Контактні дані")} headerAction={!isEdit?<span className="text-[#074FA5] text-[16px] hidden sm2:block" onClick={open}>{t("Редагувати")}</span>:undefined}>
            {isEdit ?<PersonalDataSignedInBodyForm onCancel={()=>setIsEdit(false)}/> : <PersonalDataSignedInBodyInfo onEdit={open}/>}
        </BlockWrapper>
    );
};

export default PersonalDataSignedIn;