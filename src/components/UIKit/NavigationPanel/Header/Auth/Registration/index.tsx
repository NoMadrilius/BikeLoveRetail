import React from "react";
import AuthHeader from "../Common/AuthHeader";
import Form from "../Common/Form";

const Registration = () => {
  return (
    <section className="bg-white">
      <AuthHeader title={"Реєстрація"} />
      <Form authType={"registration"} />
    </section>
  );
};

export default Registration;
