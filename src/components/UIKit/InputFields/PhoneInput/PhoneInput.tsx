import React, {createContext, memo, useContext, useEffect} from 'react';
import MaskedInput from "react-text-mask";
import {useMask} from "@react-input/mask";

interface PhoneInputProps {
    autoFocus?:boolean
    value: string
    onChange: (value: string) => void
    className?: string
}

const PhoneInput = memo((props: PhoneInputProps) => {
    const {value,onChange,className, autoFocus} = props
    const ref = useMask({ mask: '+38 (___) ___-__-__', replacement: { _: /\d/ }, showMask:true })

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current?.focus();
        }
    }, []);
    return (
        <div className={`w-full relative flex flex-col gap-2 ${className}`}>
            <label className="text-t-grey font-light leading-[120%]">Номер телефону *</label>

            <div className="flex relative">
                <input ref={ref}
                       key={"phoneInputOrder"}
                       value={value}
                       onChange={event => onChange(event.target.value)}
                       type={"text"}
                       placeholder={"Введіть номер телефону"}
                       className="px-5 py-3 border border-gray rounded-lg text-t-grey font-light w-full bg-white"
                />
            </div>
        </div>

    )
        ;
});

export default PhoneInput;