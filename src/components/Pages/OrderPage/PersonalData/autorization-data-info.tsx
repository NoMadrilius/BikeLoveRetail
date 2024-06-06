import React from 'react';
import RoundedButton from "@/components/UIKit/Buttons/RoundedIconButton";
import classnames from "classnames";

interface AutorizationDataInfoProps {
    phone?: string,
    className?: string
}

const AutorizationDataInfo = (props:AutorizationDataInfoProps) => {
    const {phone,className} = props

    return (
        <div className={classnames("flex items-center",className)}>
            <RoundedButton imageUrl={"/icons/userIcon.svg"} altText="User icon" bgColor="bg-[#5D5555]" onClick={(e)=>console.log(e)} size={24}/>
            <div >
                <p className="ml-3 text-[18px] font-normal">Фамілія Імʼя По-батькові</p>
                {phone && <p className="ml-3 text-[18px] font-normal">{phone}</p>}
            </div>
        </div>
    );
};

export default AutorizationDataInfo;