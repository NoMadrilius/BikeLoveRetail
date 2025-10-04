import React, {createContext, memo, ReactNode, useContext, useEffect, useRef} from 'react';
import { InputMask } from "@react-input/mask";
import { useMask } from '@react-input/mask';
import { useTranslation } from "next-i18next";
interface PhoneInputProps {
    autoFocus?:boolean
    value: string
    onChange: (value: string) => void
    className?: string
}

const PhoneInput = memo((props: PhoneInputProps) => {
    const {value,onChange,className, autoFocus} = props
    const { t } = useTranslation('common');
    const ref = useRef<HTMLInputElement>()

    const inputRef = useMask({
        mask: '+38 (___) ___-__-__',
        replacement: { _: /\d/ },
    });

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current?.focus();
        }
    }, []);

    return (
        <div className={`w-full relative flex flex-col gap-2 ${className}`}>
            <label className="text-t-grey font-light leading-[120%]">{t("Номер телефону")} *</label>

            <div className="flex relative">
                <input value={props.value} placeholder={t("Телефон")} onChange={v => props.onChange(v.target.value)} ref={inputRef} className="px-5 py-3 border border-gray rounded-lg text-t-grey font-light w-full bg-white" />
            </div>
        </div>

    )
      ;
});
/*
<input ref={ref}
                           key={"phoneInputOrder"}
                           onChange={event => onChange(event.target.value)}
                           type={"text"}
                           placeholder={"Введіть номер телефону"}
                           className="px-5 py-3 border border-gray rounded-lg text-t-grey font-light w-full bg-white"
                    />
 */

export default PhoneInput;