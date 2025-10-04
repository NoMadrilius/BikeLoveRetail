import React from 'react';
import PersonOrderForm from "@/components/Pages/OrderPage/PersonalData/person-order-form";
import { useTranslation } from "next-i18next";

interface PersonalDataSignedInBodyFormProps {
    onCancel: () => void
}

const PersonalDataSignedInBodyForm = (props: PersonalDataSignedInBodyFormProps) => {
    const {onCancel} = props
  const { t } = useTranslation('checkout_page');

    return (
        <PersonOrderForm
            confirm={{
                label:t("Редагувати"),
            }}
            cancel={{
                onClick: onCancel,
            }}
        />
    );
};

export default PersonalDataSignedInBodyForm;