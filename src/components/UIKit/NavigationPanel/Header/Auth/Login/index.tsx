import React from "react";
import AuthHeader from "../Common/AuthHeader";
import Form from "../Common/Form";

const Login = () => {
  return (
    <section className="bg-white">
      <AuthHeader title={"Вхід"} />
      <Form authType={"login"} />
    </section>
  );
};

export default Login;
