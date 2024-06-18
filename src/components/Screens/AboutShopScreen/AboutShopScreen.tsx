import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { styled } from "styled-components";

const AboutShopScreen = () => {
  const road = [{ title: "Магазин", link: "/" }];
  return (
    <>
      <UseMetaData title={"Магазин"} img={""} description={"йцуфв"} />
      <Text
        color={colors.black}
        size="42px"
        fontStyle={fonts.f500}
        textAlign="center"
      >
        Ми віримо,
        <br /> що велоспорт змінює життя
      </Text>
      <RowTextContainer>
        <ParagraphContainer>
          <div style={{color:'black'}}
            //$color={colors.black}
            //$fontSize="16px"
            //$fontStyle={fonts.f400}
          >
            Під час проведення таких багатоденних велогонок, як "Тур де Франс", "Джиро д'Італія", "Вуельта" тощо, з новою силою спалахують допінгові скандали. Чи потрібні допінг-тести, і якщо так, то які саме — це дуже складне питання. Але факт залишається фактом: поточний стан справ не йде на користь велоспорту загалом. Ми наводимо уривок з інтерв'ю Валерія Карпіна, президента професійної іспанської велокоманди Karpin Galicia, кореспонденту видання "Спорт-Експрес".
          </div>
          <div style={{color:'black'}}
            //$color={colors.black}
            //$fontSize="16px"
            //$fontStyle={fonts.f400}
          >
            Під час проведення таких багатоденних велогонок, як "Тур де Франс", "Джиро д'Італія", "Вуельта" тощо, з новою силою спалахують допінгові скандали. Чи потрібні допінг-тести, і якщо так, то які саме — це дуже складне питання. Але факт залишається фактом: поточний стан справ не йде на користь велоспорту загалом. Ми наводимо уривок з інтерв'ю Валерія Карпіна, президента професійної іспанської велокоманди Karpin Galicia, кореспонденту видання "Спорт-Експрес".
          </div>
        </ParagraphContainer>
        <ParagraphContainer>
          <div style={{color:'black'}}
            //$color={colors.black}
            //$fontSize="16px"
            //$fontStyle={fonts.f400}
          >
            Під час проведення таких багатоденних велогонок, як "Тур де Франс", "Джиро д'Італія", "Вуельта" тощо, з новою силою спалахують допінгові скандали. Чи потрібні допінг-тести, і якщо так, то які саме — це дуже складне питання. Але факт залишається фактом: поточний стан справ не йде на користь велоспорту загалом. Ми наводимо уривок з інтерв'ю Валерія Карпіна, президента професійної іспанської велокоманди Karpin Galicia, кореспонденту видання "Спорт-Експрес".
          </div>
          <div style={{color:'black'}}
            //$color={colors.black}
            //$fontSize="16px"
            //$fontStyle={fonts.f400}
          >
            Під час проведення таких багатоденних велогонок, як "Тур де Франс", "Джиро д'Італія", "Вуельта" тощо, з новою силою спалахують допінгові скандали. Чи потрібні допінг-тести, і якщо так, то які саме — це дуже складне питання. Але факт залишається фактом: поточний стан справ не йде на користь велоспорту загалом. Ми наводимо уривок з інтерв'ю Валерія Карпіна, президента професійної іспанської велокоманди Karpin Galicia, кореспонденту видання "Спорт-Експрес".
          </div>
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
