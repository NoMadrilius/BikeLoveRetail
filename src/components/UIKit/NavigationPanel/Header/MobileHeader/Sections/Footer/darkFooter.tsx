import React from 'react';
import Footer from "@/components/UIKit/NavigationPanel/Header/MobileHeader/Sections/Footer/index";

const DarkFooter = () => {
    return (
        <Footer className="!bg-dark w-full" textColor="text-white" paymentSrc="/images/homepage/icons/payment.svg" logoSrc="/images/uikit/header/Logo.svg"/>
    );
};

export default DarkFooter;