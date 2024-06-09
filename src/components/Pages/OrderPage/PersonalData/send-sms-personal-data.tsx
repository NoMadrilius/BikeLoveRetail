import React from 'react';

interface SendSmsPersonalDataProps {
    onClick:()=>void
    text: string
}

const SignInWithPersonalData = (props: SendSmsPersonalDataProps) => {
    const {text, onClick} = props
    return (
        <div className="flex items-center h-[50px] sm:flex-col cursor-pointer" onClick={onClick}>
           <span>aбо</span>
            <span className="ml-3 text-[18px] font-semibold text-[#074FA5]">{text}</span>
        </div>
    );
};

export default SignInWithPersonalData;