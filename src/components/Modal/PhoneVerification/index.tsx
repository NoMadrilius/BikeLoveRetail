import { useState, useEffect } from "react";
import axiosInstance from "@/api/axiosInstance";
import * as S from "./index.styles";
import usePhoneNumberConfirmed from "@/helpers/hooks/usePhoneNumberConfirmed";

const PhoneVerification = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const [accessToken, setAccessToken] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);
  const phoneNumberConfirmed = usePhoneNumberConfirmed();

  useEffect(() => {
    try {
      const authStoreData = JSON.parse(localStorage.getItem("AuthStore") || "");
      if (authStoreData && authStoreData.accessToken && authStoreData.user) {
        setAccessToken(authStoreData.accessToken);
        setPhoneNumber(authStoreData.user.phoneNumber);
      } else {
        console.error("Invalid AuthStore data format:", authStoreData);
      }
    } catch (error) {
      console.error("Error parsing AuthStore data:", error);
    }
  }, []);

  const handleButtonClick = () => {
    axiosInstance
      .post("/auth/selfverif?verifType=BinoCall", null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Request successful, show verification inputs
        setShowVerification(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  const handleSendNumbers = () => {
    const code = verificationCode.join("");
    axiosInstance
      .post(`/auth/confirmselfverif?verifType=BinoCall&code=${code}`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);

        setShowVerification(false);
        setConfirmationSuccess(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return !phoneNumberConfirmed ? (
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
            <S.Text>{`Будь ласка, підтвердіть свій номер ${phoneNumber}`}</S.Text>
            <S.GetCodeButton onClick={handleButtonClick}>
              Отримати код
            </S.GetCodeButton>
          </>
        )}
      </>
    </S.Container>
  ) : null;
};

export default PhoneVerification;
