import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const LOGIN = "login";
const REGISTRATION = "registration";

interface FormProps {
  authType: "login" | "registration";
}

const Form = ({ authType }: FormProps) => {
  if (authType === LOGIN) {
    return <LoginForm />;
  }
  if (authType === REGISTRATION) {
    return <RegistrationForm />;
  }
  return null;
};

export default Form;
