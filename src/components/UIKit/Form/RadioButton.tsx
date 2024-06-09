import React from 'react';
import classnames from "classnames";

export interface RadioButtonProps {
    label: string
    checked: boolean
    onClick?: () => void
}

const RadioButton = (props: RadioButtonProps) => {
    const {label, checked,onClick} = props
    return (
        <div className="flex gap-2 items-start" onClick={onClick}>
            <div className="grid place-items-center mt-1">
                <input type="radio" id={"id"} checked={checked}
                       className={classnames("col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-[1px] rounded-full", {
                           "peer border-link-pink": checked
                       })}
                />
                <div className="col-start-1 row-start-1 w-2.5 h-2.5 rounded-full peer-checked:bg-link-pink"/>
            </div>
            <label htmlFor={"id"}
                   className="text-start">{label}</label>
        </div>
    );
};

export default RadioButton;