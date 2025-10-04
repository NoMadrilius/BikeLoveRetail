import React, {useEffect, useState} from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PhoneInput  from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import { useTranslation } from "next-i18next";

const PersonalData = () => {
    const cls = useCheckList()
  const { t } = useTranslation('checkout_page');

    return (
        <BlockWrapper title={t("Контактні дані")}>
            <PhoneInput autoFocus value={cls.initialPhone} onChange={v=>cls.setInitialPhone(v)} className="w-3/5"/>
        </BlockWrapper>
    );
};

export default observer(PersonalData);