import React from 'react';
import RadioButton, {RadioButtonProps} from "@/components/UIKit/Form/RadioButton";
import classnames from "classnames";

interface DeliveryRowInfoRadioProps {
    radiobutton: RadioButtonProps,
    price?: number
    children?: React.ReactNode
    className?: string
}

const DeliveryRowInfoRadio = (props: DeliveryRowInfoRadioProps) => {
    const {radiobutton, price,children,className} = props

    return (
        <div className={classnames("w-full border border-gray flex flex-col gap-3 p-4 rounded-lg",{
            "border-link-pink":radiobutton.checked
        })}>
            <div className="flex justify-between items-center">
                <RadioButton {...radiobutton}/>
                <span className="font-bold text-sm">{price ? `${price} UAH` : "Безкоштовно"}</span>
            </div>
            {radiobutton.checked && <div className={classnames("w-full", className)}>
                {children}
            </div>}
        </div>
    );
};

export default DeliveryRowInfoRadio;