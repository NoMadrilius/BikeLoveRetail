import React, {useState} from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PhoneInput  from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";

const PersonalData = () => {
    const cls = useCheckList()

    return (
        <BlockWrapper title="Контактні дані">
            <PhoneInput value={cls.initialPhone} onChange={v=>cls.setInitialPhone(v)} className="w-3/5"/>
        </BlockWrapper>
    );
};

export default observer(PersonalData);