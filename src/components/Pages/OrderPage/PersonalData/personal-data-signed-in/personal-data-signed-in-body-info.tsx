import React from 'react';
import PenIcon from "@/components/UIKit/SVGIcons/pen-icon";
import AutorizationDataInfo from "@/components/Pages/OrderPage/PersonalData/autorization-data-info";

interface PersonalDataSignedInBodyInfoProps {
    onEdit: () => void
}

const PersonalDataSignedInBodyInfo = (props: PersonalDataSignedInBodyInfoProps) => {
    const {onEdit} = props

    return (
        <div className="flex justify-between">
            <AutorizationDataInfo phone="+380313" className="w-full"/>
             <div className="flex items-end cursor-pointer sm2:hidden" onClick={onEdit}>
                <PenIcon color="#074FA5"/>
                <span className="text-[#074FA5] ml-3 text-[16px]">Редагувати</span>
            </div>
        </div>
    );
};

export default PersonalDataSignedInBodyInfo;