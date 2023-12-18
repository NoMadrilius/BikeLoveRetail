import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { styled } from "styled-components";

const text1 = [
  "Доставка заказов до отделения Новой Почты является БЕСПЛАТНОЙ для заказов на суму свыше 2000 гривен, при условии полной предоплаты.",
  "· Отправка заказов на сумму до 500 гривен осуществляется при условии полной предоплаты. Доставка осуществляется за счёт клиента.",
  "· Отправка заказов на сумму свыше 500 гривен может осуществляется как при условии полной предоплаты, так и на условиях наложенного платежа.",
  "· Доставка товара до отделения Новой Почты на условиях наложенного платежа выполняется за счёт Покупателя с учётом тарифов Перевозчика.",
  "· Адресная доставка осуществляется за счёт Покупателя по расценкам и тарифам компании Новая Почта.· Отправка велосипедов осуществляется только в собранном состоянии, на условиях полной предоплаты.",
];
const text2 = [
  "· Самовывоз товара осуществляется после получения Покупателем SMS-сообщения или телефонного звонка от Продавца с подтверждением готовности Заказа к выдаче",
  "· В случае, если Покупатель не забирает Заказ на протяжении 3-х календарных дней с даты получения сообщения от Продавца, Заказ аннулируется.",
];

const AboutDeliveryScreen = () => {
  const road = [
    { title: "Магазин", link: "/about" },
    { title: "Доставка", link: "/" },
  ];
  return (
    <>
      <UseMetaData title={"Досатвка"} img={""} description={""} />
      <BreadCrumbs road={road} />
      <Text color={colors.black} size="42px" fontStyle={fonts.f500}>
        ДОСТАВКА
      </Text>
      <RowContainer>
        <Picture bg="/images/about/delivery/image1.png">
          <Text color={colors.white} size="28px" fontStyle={fonts.f700}>
            ЧТО ВАЖНО ЗНАТЬ
          </Text>
          <Text color={colors.white} size="16px" fontStyle={fonts.f400}>
            В BIKELOVE наш главный принцип работы – “Райдер – это Босс.” Наша
            главная цель - обеспечить райдеров самой инновационной
            велопродукцией в мире и отвечать за её качество. Поэтому мы рады
            представить одну из самых щедрых и дружелюбных к райдерам
            гарантийных политик в индустрии.
          </Text>
        </Picture>
        <Picture bg="/images/about/delivery/image2.png"></Picture>
      </RowContainer>
      <TextContainer>
        <Text
          color={colors.black}
          size="28px"
          fontStyle={fonts.f600}
          textAlign="center"
        >
          Быстро. <span style={{ color: colors.redMain }}>Надежно.</span>{" "}
          Профессионально.
        </Text>
        <Text
          color={colors.black}
          size="16px"
          fontStyle={fonts.f400}
          textAlign="center"
        >
          Полное описание нашей политики со всеми положениями и условиями вы
          найдёте ниже. Пожалуйста, ознакомьтесь со всеми пунктами, политика
          применима ко всем продуктам Specialized, проданным после 1 июля 2018.
          Сравните сами – она одна из лучших на рынке
        </Text>
      </TextContainer>
      <PictureLarge bg="/images/about/delivery/large.png">
        <Text color={colors.white} size="28px" fontStyle={fonts.f700}>
          Локация не
          <br /> имеет значения
        </Text>
        <Text color={colors.white} size="16px" fontStyle={fonts.f400}>
          Только вы и только ваш байк.
        </Text>
      </PictureLarge>
      <Text
        color={colors.black}
        size="31px"
        fontStyle={fonts.f600}
        margin="0 0 22px 0"
      >
        Доставка товара Новой Почтой (по Украине).
      </Text>
      {text1.map((el, index) => (
        <Text
          key={index}
          color={colors.black}
          size="16px"
          fontStyle={fonts.f400}
          margin="10px 0 0 0"
        >
          {el}
        </Text>
      ))}
      <Text
        color={colors.black}
        size="31px"
        fontStyle={fonts.f600}
        margin="45px 0 22px 0"
      >
        Самовывоз товара
      </Text>
      {text2.map((el, index) => (
        <Text
          key={index}
          color={colors.black}
          size="16px"
          fontStyle={fonts.f400}
          margin="10px 0 0 0"
        >
          {el}
        </Text>
      ))}
      <div style={{ marginBottom: "90px" }}></div>
    </>
  );
};
export default AboutDeliveryScreen;

const RowContainer = styled.div`
  display: flex;
  column-gap: 30px;
  margin-top: 50px;
  margin-bottom: 80px;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    margin-bottom: 45px;
  }
`;
const Picture = styled.div<{ bg: string }>`
  width: 660px;
  height: 323px;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  row-gap: 43px;
  padding: 0 65px;
  background-color: rgba(54, 57, 36, 1);
  @media (max-width: 1000px) {
    padding: 0 40px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    height: 367px;
    padding: 0 25px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 29px;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const PictureLarge = styled.div<{ bg: string }>`
  width: 100%;
  height: 370px;
  position: relative;
  background-image: url(${(p) => p.bg});
  margin-bottom: 100px;
  background-position: center;
  background-size: cover;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 50px;
  row-gap: 20px;
  margin-top: 84px;

  @media (max-width: 900px) {
    margin-bottom: 85px;
    padding: 0 37px;
    height: 295px;
  }
  @media (max-width: 700px) {
    margin-top: 40px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный цвет */
      border-radius: 24px;
    }
  }
`;
