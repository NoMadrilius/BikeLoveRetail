import React from 'react';

interface PenIconProps {
    color?: string
}

const PenIcon = (props: PenIconProps) => {
    const {color="#FFF"} = props

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 22.5H23M3.5 16L18 1.5C20.4853 1.5 22.5 3.51474 22.5 6.00002L8 20.5H7C5.02575 20.5 3.62343 21.0844 1.98076 22.1795L1.5 22.5L1.8205 22.0193C2.91562 20.3766 3.5 18.9743 3.5 17V16Z"
                stroke={color}/>
        </svg>
    );
};

export default PenIcon;