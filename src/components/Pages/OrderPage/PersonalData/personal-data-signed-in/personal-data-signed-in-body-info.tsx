import React from 'react';
import PenIcon from "@/components/UIKit/SVGIcons/pen-icon";
import AutorizationDataInfo from "@/components/Pages/OrderPage/PersonalData/autorization-data-info";
import {useAuthStore} from "@/store/AuthStore";

interface PersonalDataSignedInBodyInfoProps {
    onEdit: () => void
}

const PersonalDataSignedInBodyInfo = (props: PersonalDataSignedInBodyInfoProps) => {
    const {onEdit} = props
    const as = useAuthStore()
    if(!as.user) return null
    return (
        <div className="flex justify-between">
            <AutorizationDataInfo phone={as.user.phoneNumber} name={as.user.lastName+" "+as.user.firstName+" "+as.user.patronymic} className="w-full"/>
             <div className="flex items-end cursor-pointer sm2:hidden" onClick={onEdit}>
                <PenIcon color="#074FA5"/>
                <span className="text-[#074FA5] ml-3 text-[16px]">Редагувати</span>
            </div>
        </div>
    );
};

export default PersonalDataSignedInBodyInfo;