import React from 'react';
import MaskedInput from "react-text-mask";

interface PhoneInputProps {
    value: string
    onChange: (value: string) => void
    className?: string
}

const PhoneInput = (props: PhoneInputProps) => {
    const {value,onChange,className} = props
    return (
        <div className={`w-full relative flex flex-col gap-2 ${className}`}>
            <label className="text-t-grey font-light leading-[120%]">Номер телефону *</label>

            <div className="flex relative">
                <MaskedInput
                    mask={['+', '3', '8', ' ', '(', '0', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]}
                    placeholder="Enter a phone number"
                    id="my-input-id"
                    value={value}
                    onChange={event => onChange(event.target.value)}
                    render={(ref, props) => (
                        <input ref={ref as any} {...props}
                               type={"text"}
                               placeholder={"+38 (0ХХ) ХХХ - ХХ - ХХ"}
                               className="px-5 py-3 border border-gray rounded-lg text-t-grey font-light w-full bg-white"
                        />
                    )}
                />

            </div>
        </div>

    )
        ;
};

export default PhoneInput;