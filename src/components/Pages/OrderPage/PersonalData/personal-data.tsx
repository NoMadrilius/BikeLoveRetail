import React, {useState} from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PhoneInput  from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";

const PersonalData = () => {
    const [phone, setPhone] = useState("");

    return (
        <BlockWrapper title="Контактні дані">
            <PhoneInput value={phone} onChange={setPhone} className="w-3/5"/>
        </BlockWrapper>
    );
};

export default PersonalData;