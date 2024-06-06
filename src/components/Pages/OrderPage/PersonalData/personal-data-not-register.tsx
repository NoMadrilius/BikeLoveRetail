import React, {useState} from "react";
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PersonOrderForm from "./person-order-form";

const PersonalDataNotRegister = () => {
    const [phone, setPhone] = useState("");

    return (
        <BlockWrapper title="Контактні дані">
           <PersonOrderForm confirm={{
               label:"Продовжити",
           }}/>
        </BlockWrapper>

    );
};
export default PersonalDataNotRegister;