import React from 'react';
import PersonOrderForm from "@/components/Pages/OrderPage/PersonalData/person-order-form";

interface PersonalDataSignedInBodyFormProps {
    onCancel: () => void
}

const PersonalDataSignedInBodyForm = (props: PersonalDataSignedInBodyFormProps) => {
    const {onCancel} = props

    return (
        <PersonOrderForm
            confirm={{
                label:"Редагувати",
            }}
            cancel={{
                onClick: onCancel,
            }}
        />
    );
};

export default PersonalDataSignedInBodyForm;