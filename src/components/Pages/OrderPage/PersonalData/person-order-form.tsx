import React, {useState} from "react";
import PhoneInput from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";
import GradientButton, {GradientButtonProps} from "@/components/UIKit/Buttons/GradientButton";
import InputWithPlaceholder from "@/components/UIKit/InputFields/InputWithPlaceholder";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";

interface PersonOrderForm {
    confirm:GradientButtonProps
    cancel?:Omit<GradientButtonProps,"label">
}

const PersonOrderForm = (props:PersonOrderForm) => {
    const cls = useCheckList()

    const {confirm,cancel} = props

    return (
        <div className="grid grid-cols-4 gap-4 sm2:grid-cols-1 auto-rows-auto">
            <div className="col-span-2 sm2:col-auto">
                <PhoneInput value={cls.initialPhone} onChange={v=>cls.setInitialPhone(v)}/>
            </div>
            <div className="col-span-2 col-start-3 sm2:col-auto">
                <InputWithPlaceholder value={cls.name} setValue={v=>cls.setName(v)}  label="Імʼя *"/>
            </div>
            <div className="col-span-2 row-start-2 sm2:col-auto">
                <InputWithPlaceholder value={cls.lastName} setValue={v=>cls.setLastName(v)} label="Прізвище *"/>
            </div>
            <div className="col-span-2 col-start-3 row-start-2 sm2:col-auto sm2:row-auto">
                <InputWithPlaceholder value={cls.patronymic} setValue={v=>cls.setPatronymic(v)} label="По-батькові" />
            </div>
            <div className="col-start-1 row-start-3 sm2:col-auto sm2:row-auto">
                <GradientButton showIcon={false} className="text-white w-full h-[40px]" {...confirm}/>
            </div>
            <div className="col-start-2 row-start-3 sm2:col-auto sm2:row-auto">
                {cancel&&<GradientButton label="Відмінити" showIcon={false} type="secondary"
                                         className="text-white w-full h-[40px]" {...cancel}/>}
            </div>

        </div>


    );
};
export default observer(PersonOrderForm);