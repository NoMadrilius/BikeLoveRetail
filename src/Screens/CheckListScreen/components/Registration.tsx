import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { useState } from "react";
import { templates } from "../../../../theme/templates";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";

const Registration = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");

  return (
    <>
      <Wrapper>
        <Text color={colors.black} size="50px" fontStyle={fonts.f500}>
          ОФОРМЛЕНИЕ ЗАКАЗА
        </Text>
        <Header>
          <NumberContainer>
            <Text color={colors.black} size="15px" fontStyle={fonts.f500}>
              1
            </Text>
          </NumberContainer>
          <Text
            color={activeTab === 0 ? colors.black : colors.grayMain}
            size="22px"
            fontStyle={fonts.f600}
            func={() => setActiveTab(0)}
          >
            Я НОВЫЙ ПОКУПАТЕЛЬ
          </Text>
          <Text
            color={activeTab === 1 ? colors.black : colors.grayMain}
            size="22px"
            fontStyle={fonts.f600}
            func={() => setActiveTab(1)}
          >
            У МЕНЯ УЖЕ ЕСТЬ АККАУНТ
          </Text>
        </Header>
        <InputsContainer>
          <InputField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
          />
          <InputField
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Фамилия"
          />
          <InputField
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            placeholder="Отчество"
          />
          <InputField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
          />
          <InputField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <InputField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
          />
          <InputField
            value={verifPassword}
            onChange={(e) => setVerifPassword(e.target.value)}
            placeholder="Повторите пароль"
          />
          <ButtonCustom
            width={"100%"}
            height={"50px"}
            type={"white"}
            label="Зарегистрироваться"
          />
          <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
            Нажимая на эту кнопку я соглашаюсь с публичной офертой
          </Text>
          <OrContainer>
            <Line />
            <Text color={colors.black} size="14px" fontStyle={fonts.f400}>
              или
            </Text>
            <Line />
          </OrContainer>
          <ButtonsContainer>
            <Button fill>facebook</Button>
            <Button>google</Button>
          </ButtonsContainer>
          <Text color={colors.grayMain} size="14px" fontStyle={fonts.f400}>
            Я уже зарегистрирован
          </Text>
        </InputsContainer>
      </Wrapper>
    </>
  );
};
export default Registration;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  column-gap: 33px;
  align-items: center;
  margin-top: 20px;
`;
export const NumberContainer = styled.div`
  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;
  border-radius: 50%;
  background-color: ${colors.redBlur};
  ${templates.centerContent};
`;
export const InputsContainer = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-left: 78px;
  width: 368px;
  @media (max-width: 756px) {
    margin-left: 0;
    width: 100%;
    align-items: center;
  }
`;
export const InputField = styled.input`
  all: unset;
  width: 100%;
  height: 48px;
  border: 1px solid ${colors.grayBorder};
  padding: 15px 30px;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${colors.black};
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.black};
`;
export const OrContainer = styled.div`
  width: 100%;
  column-gap: 18px;
  ${templates.centerContent};
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 756px) {
    column-gap: 12px;
  }
`;
export const Button = styled.div<{ fill?: boolean }>`
  ${templates.centerContent};
  width: 170px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(p) => (p.fill ? "rgba(59, 88, 154, 1)" : "transparent")};
  border: ${(p) => (p.fill ? "none" : `1px solid ${colors.black}`)};
`;
