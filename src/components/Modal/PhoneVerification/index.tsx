import { useState, useEffect } from "react";
import * as S from "./index.styles";
import authStore, {useAuthStore} from "@/store/AuthStore";
import {AuthAPI} from "@/api/AuthAPI";
import {observer} from "mobx-react";

const PhoneVerification = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);


  const st = useAuthStore()

  const handleButtonClick = () => {
    AuthAPI.SelfVerification().then((response) => {
        // Request successful, show verification inputs
        setShowVerification(true);
      })
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  const handleSendNumbers = () => {
    const code = verificationCode.join("");
    AuthAPI.ConfirmSelfVerification(code).then((response) => {
        setShowVerification(false);
      })
  };

  return (st.isAuth && !(st.user?.phoneNumberConfirmed??true)) ? (
    <S.Container>
      <>
        {showVerification ? (
          <>
            <S.Text>Ми вам телефонуємо! Вкажіть останні 4 цифри:</S.Text>
            <S.NumberInputContainer>
              {verificationCode.map((digit, index) => (
                <S.Input
                  key={index}
                  type="text"
                  value={digit}
                  maxLength={1}
                  onChange={(e: { target: { value: string } }) =>
                    handleInputChange(index, e.target.value)
                  }
                />
              ))}
            </S.NumberInputContainer>
            <S.ConfirmButton onClick={handleSendNumbers}>
              Підтвердити
            </S.ConfirmButton>
          </>
        ) : (
          <>
            <S.Text>{`Будь ласка, підтвердіть свій номер ${st.user?.phoneNumber}`}</S.Text>
            <S.GetCodeButton onClick={handleButtonClick}>
              Отримати код
            </S.GetCodeButton>
          </>
        )}
      </>
    </S.Container>
  ) : null;
};

export default observer(PhoneVerification);
