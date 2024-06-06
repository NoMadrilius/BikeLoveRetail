import React, {useRef} from 'react';
import ArrowTop from "@/components/UIKit/SVGIcons/arrow-top";
import ArrowDown from "@/components/UIKit/SVGIcons/arrow-down";
import RadioButton from "@/components/UIKit/Form/RadioButton";
import {useClickOutside} from "@/hooks/useClickOutside";
import classnames from "classnames";

export interface SelectorOption {
    label: string
    value: string
}

interface SelectorProps {
    label: string
    items: SelectorOption[]
    value: string
    onChange?: (value: string, item: SelectorOption) => void
    disabled?: boolean
}

const Selector = (props: SelectorProps) => {
    const {label, items, value, onChange, disabled = false} = props
    const [open, setOpen] = React.useState(false)

    const selectedItems = items.find((item) => item.value === value)
    const selector = useRef(null)

    useClickOutside(selector, () => {
        setOpen(false)
    })

    const onChangeHandler = (value: string, item: SelectorOption) => {
        onChange?.(value, item)
        setOpen(false)
    }

    return (
        <div className={classnames("text-base font-light", {
            "pointer-events-none text-gray": disabled
        })} ref={selector}>
            <label id="listbox-label" className="block">{label}</label>
            <div className="relative mt-2">
                <button onClick={() => setOpen(!open)}
                        type="button"
                        className="relative w-full cursor-default rounded-md py-2.5 px-5 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray focus:outline-none focus:ring-2 focus:ring-link-pink sm:text-sm sm:leading-6"
                        aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                    <span >{selectedItems?.label}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                         {open ? <ArrowTop/> : <ArrowDown color={ disabled? "#DADADA":undefined}/>}
                     </span>
                </button>


                {open && <SelectorBody items={items} value={value} onChange={onChangeHandler}/>}
            </div>
        </div>
    );
};

interface SelectorBodyProps {
    items: SelectorOption[]
    value: string
    onChange?: (value: string, item: SelectorOption) => void
}

const SelectorBody = (props: SelectorBodyProps) => {
    const {items, value, onChange} = props

    return (
        <div className="absolute z-10 mt-1  py-3 px-5 w-full bg-white shadow-lg rounded-md ">
            <ul className="max-h-[250px] overflow-auto text-base focus:outline-none sm:text-sm"
                tabIndex={-1} role="listbox" aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3">

                <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                    id="listbox-option-0" role="option">
                    {items.map(x => <RadioButton key={x.value} label={x.label} checked={x.value === value}
                                                 onClick={() => onChange?.(x.value, x)}/>)}
                </li>
            </ul>
        </div>

    )
}

export default Selector;