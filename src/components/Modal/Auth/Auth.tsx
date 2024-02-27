import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { useAuthStore } from "@/store/AuthStore";
import { observer } from "mobx-react";
import RenewPassword from "./components/RenewPassword";
import Login from "@/components/Modal/Auth/components/Login";
import Register from "@/components/Modal/Auth/components/Register";
import {styled} from "styled-components";

const Auth = () => {
  const authStore = useAuthStore();

  return (
    <Wrapper>
      <UseMetaData
        title={authStore.step === 0 ? "Login" : "Registration"}
        img={""}
        description={""}
      />
      {authStore.step === 0 && <Login/>}
      {authStore.step === 1 && <Register/>}
      {authStore.step === 2 && <RenewPassword/>}
    </Wrapper>
  );
};
export default observer(Auth);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;