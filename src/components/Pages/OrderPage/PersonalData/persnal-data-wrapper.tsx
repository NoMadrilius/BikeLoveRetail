import classnames from 'classnames';
import React, {ReactNode} from 'react';

interface PersnalDataWrapperProps {
    needBottomMargin?:boolean
    children:ReactNode
}

const PersnalDataRowWrapper = (props:PersnalDataWrapperProps) => {
    const {children,needBottomMargin=true} = props

    return (
        <div className={classnames("flex gap-8 items-end",{
            "mb-4":needBottomMargin
        })}>
            {children}
        </div>
    );
};

export default PersnalDataRowWrapper;