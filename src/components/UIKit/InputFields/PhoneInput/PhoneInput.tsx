import React, {createContext, memo, ReactNode, useContext, useEffect, useRef} from 'react';
import InputMask from 'react-input-mask';

interface PhoneInputProps {
    autoFocus?:boolean
    value: string
    onChange: (value: string) => void
    className?: string
}

const PhoneInput = memo((props: PhoneInputProps) => {
    const {value,onChange,className, autoFocus} = props
    const ref = useRef<HTMLInputElement>()

    useEffect(() => {
        if (autoFocus && ref.current) {
            ref.current?.focus();
        }
    }, []);

    return (
        <div className={`w-full relative flex flex-col gap-2 ${className}`}>
            <label className="text-t-grey font-light leading-[120%]">Номер телефону *</label>

            <div className="flex relative">
                <InputMask
                    mask="+(380)99 999 99 99"
                    onChange={v=>props.onChange(v.target.value)}
                    value={props.value}
                    disabled={false} autoFocus placeholder={"Телефон"}
                    maskChar=""
                    // @ts-ignore
                    children={(inputProps) => <input {...inputProps}
                                                     className="px-5 py-3 border border-gray rounded-lg text-t-grey font-light w-full bg-white"
                    />}
                />
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