import React, {useState} from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PhoneInput from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";
import AutorizationDataInfo from "@/components/Pages/OrderPage/PersonalData/autorization-data-info";
import InputTypePassword from "@/components/UIKit/InputFields/InputTypePassword";
import SignInWithPersonalData from "@/components/Pages/OrderPage/PersonalData/send-sms-personal-data";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import authStore, {useAuthStore} from "@/store/AuthStore";
import { Button, TextField } from "@mui/material";
import classNames from "classnames";

type SignType = "SMS" | "password"
const PersonalDataNeedToAuthentificate = () => {
    const cls = useCheckList()
    const as = useAuthStore()
    const [code, setCode] = useState("");
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const [signInType, setSignInType] = useState<SignType>("password")

    return (
        <BlockWrapper  title="Контактні дані" className={"flex flex-col gap-10"}>

          <div className={"flex gap-6 items-end justify-between w-full mob:flex-col"}>
            <PhoneInput value={cls.initialPhone} onChange={v=>cls.setInitialPhone(v)} className="w-full"/>
            <AutorizationDataInfo name={cls.initialUser?.lastName+" "+cls.initialUser?.firstName+" "+cls.initialUser?.patronymic} className="w-full"/>
          </div>


            <div className={"flex w-full gap-6 mob:flex-col"}>
              <div className={"flex w-full flex-col gap-4"}>
                <InputTypePassword value={as.loginPassword} setValue={v=>as.setLoginPassword(v)} className="w-1/3"
                                   label="Увійти за допомогою пароля"/>
                <Button className={"w-full"} variant={"contained"} onClick={()=>{
                  as.setLoginPhone(cls.initialPhone)
                  as.login(()=>{})
                }}>Увійти</Button>
              </div>
              <div className={classNames("w-full flex flex-col gap-4", codeSent?"":"pt-7")}>

                {
                  codeSent?
                    <div className={"w-full flex flex-col gap-2 text-neutral-500"}>
                      Ми надіслали вам код!
                      <TextField className={"w-full"} value={code} onChange={e=>setCode(e.target.value)} placeholder={"КОД"} type="number"/>
                    </div>
                    :
                    <Button variant={"outlined"} onClick={()=>{
                      as.setLoginPhone(cls.initialPhone)
                      authStore.loginCode(()=>{setCodeSent(true)})
                    }}>Надіслати код</Button>
                }
                <Button variant={"contained"} className={"w-full"} disabled={!codeSent} onClick={()=>{
                  authStore.confirmLoginCode(code, ()=>{console.log('ok')})
                }}>Увійти з кодом</Button>
              </div>
            </div>
        </BlockWrapper>

    );
};

export default observer(PersonalDataNeedToAuthentificate);