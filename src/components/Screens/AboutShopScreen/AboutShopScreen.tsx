import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { styled } from "styled-components";
import { templates } from "../../../../theme/templates";
import {
  MainTitle,
  Paragraph,
  SecondaryTitle,
} from "../HomeScreen/HomeScreenStyles";

const AboutShopScreen = () => {
  const road = [{ title: "Магазин", link: "/" }];
  return (
    <>
      <UseMetaData title={"Магазин"} img={""} description={"йцуфв"} />
      <MainTitle $color={colors.black} $fontSize="42px" $fontStyle={fonts.f500}>
        МАГАЗИН
      </MainTitle>
      <RowContainer>
        <Picture bg="/images/about/image1.png">
          <SecondaryTitle
            $color="white"
            $fontSize="40px"
            $fontStyle={fonts.f700}
          >
            WHY WORK FOR US
          </SecondaryTitle>
          <Paragraph
            color={colors.white}
            $fontSize="18px"
            $fontStyle={fonts.f400}
          >
            Если и есть нечто, что объединяет всех, кто работает в нашей
            компании, так это вера в то, что велосипеды реально могут влиять на
            жизни людей
          </Paragraph>
        </Picture>
        <Picture bg="/images/about/image2.png"></Picture>
      </RowContainer>
      <Text
        color={colors.black}
        size="42px"
        fontStyle={fonts.f500}
        textAlign="center"
      >
        МЫ ВЕРИМ,
        <br /> ЧТО ВЕЛОСПОРТ МЕНЯЕТ ЖИЗНЬ
      </Text>
      <Paragraph
        $color={colors.black}
        $fontSize="16px"
        $fontStyle={fonts.f600}
        $margin="25px 0 0 0"
        $maxWidth="80%"
      >
        Вот почему мы находимся в постоянном поиске кадров из совершенно разных
        дисциплин, которые хотели бы быть причастны к тому, чтобы делать
        велоспорт популярным среди всё большего числа людей.
      </Paragraph>
      <RowTextContainer>
        <ParagraphContainer>
          <Paragraph
            $color={colors.black}
            $fontSize="16px"
            $fontStyle={fonts.f400}
          >
            В период прохождения таких супермногодневок как &quot;Тур де
            Франс&quot;, Джиро д&apos;Италия&quot;, &quot;Вуэльта&quot; и т.д. с
            новой силой вспышивают допинговые скандалы. Нужны ли допинг тесты -
            если да - то какие - это очень сложный вопрос. Но факт в том - что
            текущее состояние дел не идет на пользу велоспорту в целом. Мы
            приводим кусок интервью Валерий Карпина - президента
            профессиональной испанской велокоманды Karpin Galicia -
            кореспонденту издания СпортЭкспресс.
          </Paragraph>
          <Paragraph
            $color={colors.black}
            $fontSize="16px"
            $fontStyle={fonts.f400}
          >
            В период прохождения таких супермногодневок как &quot;Тур де
            Франс&quot;, Джиро д&apos;Италия&quot;, &quot;Вуэльта&quot; и т.д. с
            новой силой вспышивают допинговые скандалы. Нужны ли допинг тесты -
            если да - то какие - это очень сложный вопрос. Но факт в том - что
            текущее состояние дел не идет на пользу велоспорту в целом. Мы
            приводим кусок интервью Валерий Карпина - президента
            профессиональной испанской велокоманды Karpin Galicia -
            кореспонденту издания СпортЭкспресс.
          </Paragraph>
        </ParagraphContainer>
        <ParagraphContainer>
          <Paragraph
            $color={colors.black}
            $fontSize="16px"
            $fontStyle={fonts.f400}
          >
            В период прохождения таких супермногодневок как &quot;Тур де
            Франс&quot;, Джиро д&apos;Италия&quot;, &quot;Вуэльта&quot; и т.д. с
            новой силой вспышивают допинговые скандалы. Нужны ли допинг тесты -
            если да - то какие - это очень сложный вопрос. Но факт в том - что
            текущее состояние дел не идет на пользу велоспорту в целом. Мы
            приводим кусок интервью Валерий Карпина - президента
            профессиональной испанской велокоманды Karpin Galicia -
            кореспонденту издания СпортЭкспресс.
          </Paragraph>
          <Paragraph
            $color={colors.black}
            $fontSize="16px"
            $fontStyle={fonts.f400}
          >
            В период прохождения таких супермногодневок как &quot;Тур де
            Франс&quot;, Джиро д&apos;Италия&quot;, &quot;Вуэльта&quot; и т.д. с
            новой силой вспышивают допинговые скандалы. Нужны ли допинг тесты -
            если да - то какие - это очень сложный вопрос. Но факт в том - что
            текущее состояние дел не идет на пользу велоспорту в целом. Мы
            приводим кусок интервью Валерий Карпина - президента
            профессиональной испанской велокоманды Karpin Galicia -
            кореспонденту издания СпортЭкспресс.
          </Paragraph>
        </ParagraphContainer>
      </RowTextContainer>
      <PictureLarge src="/images/about/large.png" />
      <></>
    </>
  );
};
export default AboutShopScreen;

const RowContainer = styled.div`
  display: flex;
  column-gap: 30px;
  margin-top: 50px;
  margin-bottom: 154px;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    margin-bottom: 79px;
  }
`;
const Picture = styled.div<{ bg: string }>`
  width: 100%;
  height: 438px;
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
const RowTextContainer = styled.div`
  display: flex;
  column-gap: 30px;
  margin-bottom: 120px;
  margin-top: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    margin-bottom: 40px;
    margin-top: 15px;
  }
`;
const PictureLarge = styled.img`
  width: 100%;
  aspect-ratio: 1350/574;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-bottom: 85px;
  }
`;
const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
