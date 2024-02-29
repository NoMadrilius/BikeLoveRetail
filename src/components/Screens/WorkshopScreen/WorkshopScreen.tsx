import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { styled } from "styled-components";
import Slider from "./components/Slider";
import { sliderGallery } from "@/mock/data";
import {
  LiItem,
  MainTitle,
  Paragraph,
  SecondaryTitle,
} from "../HomeScreen/HomeScreenStyles";
import ServiceComponent from "./components/ServiceComponent";

const servicesItems = [
  "заменить велокамеру;",
  "подкачать колеса;",
  "смазать цепь;",
  "настроить трансмиссию;",
  "перебрать амортизационную вилку;",
  "заменить сломанную деталь и др.",
  "В работе мы используем только фирменный специализированный инструмент и расходные материалы таких известных производителей как Park Tool и IceToolz",
];

const WorkshopScreen = () => {
  const road = [{ title: "Мастерская", link: "" }];
  return (
    <>
      <UseMetaData title={"Мастерская"} img={""} description={""} />

      <MainTitle $color={colors.black} $fontSize="42px" $fontStyle={fonts.f500}>
        МАСТРЕСКАЯ
      </MainTitle>
      <RowContainer>
        <Picture>
          <SecondaryTitle
            $color="white"
            $fontSize="28px"
            $fontStyle={fonts.f700}
            $textTransform="uppercase"
          >
            мы не только продаем велосипеды
          </SecondaryTitle>

          <Paragraph
            color={colors.white}
            $fontSize="16px"
            $fontStyle={fonts.f400}
          >
            В каждом магазине есть полноценная веломастерская, в которой мы
            оказываем услуги гарантийного и послегарантийного обслуживания и
            ремонта велосипедов. Преимуществом пользуются клиенты, которые
            приобрели велосипед в сети магазинов
          </Paragraph>
        </Picture>
        <Picture bg="/images/workshop/image2.png" />
      </RowContainer>

      <SecondaryTitle
        $color="black"
        $fontSize="40px"
        $fontStyle={fonts.f700}
        $margin="65px 0 25px 0"
      >
        О мастерской
      </SecondaryTitle>
      <ParagraphContainer>
        <Paragraph
          $color={colors.black}
          $fontSize="16px"
          $fontStyle={fonts.f400}
        >
          В каждом магазине есть полноценная веломастерская, в которой мы
          оказываем услуги гарантийного и послегарантийного обслуживания и
          ремонта велосипедов.
        </Paragraph>
        <Paragraph
          $color={colors.black}
          $fontSize="16px"
          $fontStyle={fonts.f400}
        >
          Все веломастерские работают по предварительной записи. Преимуществом
          пользуются клиенты, которые приобрели велосипед в сети магазинов . Для
          получения услуг, предусмотренных гарантией, необходимое наличие
          документа на велосипед (паспорт и чек).
        </Paragraph>
        <Paragraph
          $color={colors.black}
          $fontSize="16px"
          $fontStyle={fonts.f400}
        >
          Покупали не у нас, но хотите сделать техническое обслуживание
          велосипеда или ремонт? Нет ничего проще! Вам необходимо позвонить в
          магазин &quot;Велопланета&quot;, согласовать удобное время и привезти
          свой байк в нашу мастерскую. Обратите внимание, что велосипеды
          принимаются в работу только в чистом виде.
        </Paragraph>
      </ParagraphContainer>

      <SecondaryTitle
        $color="black"
        $fontSize="40px"
        $fontStyle={fonts.f700}
        $margin="65px 0 25px 0"
      >
        Гарантируем бесплатное техническое обслуживание
      </SecondaryTitle>

      <ParagraphContainer>
        <Paragraph
          $color={colors.black}
          $fontSize="16px"
          $fontStyle={fonts.f400}
        >
          Мы предлагаем техобслуживание в течение месяца с момента покупки для
          велосипедов, приобретенных в магазинах наших магазинов!
        </Paragraph>
        <Paragraph
          $color={colors.black}
          $fontSize="16px"
          $fontStyle={fonts.f400}
        >
          Если клиент не обращался к нам за это время, за ним сохраняется право
          на один бесплатный комплекс «диагностика+обслуживание» велосипеда в
          течение года с момента покупки.
        </Paragraph>
        <Paragraph
          $color={colors.black}
          $fontSize="16px"
          $fontStyle={fonts.f400}
        >
          На все последующие ТО в течение первого года со дня покупки действует
          скидка 50%. А после первого года – скидка 30%*.
        </Paragraph>
        <Paragraph
          $color={colors.black}
          $fontSize="16px"
          $fontStyle={fonts.f400}
        >
          В мастерскую необходимо обращаться:
        </Paragraph>
      </ParagraphContainer>

      <ServiceComponent
        title="Ремонт и обслуживание велосипедов:"
        items={servicesItems}
      />
      <ServiceComponent
        title="Услуги, которые не входят в гарантийный сервис:"
        items={servicesItems}
      />
      <SecondaryTitle
        $color="black"
        $fontSize="42px"
        $fontStyle={fonts.f500}
        $margin="74px 0 0 0"
      >
        ГАЛЕРЕЯ РАБОТ
      </SecondaryTitle>

      <Slider items={sliderGallery} variant="large" />
      <Slider items={sliderGallery} variant="small" />
      <div style={{ paddingBottom: "90px" }}></div>
    </>
  );
};
export default WorkshopScreen;

const RowContainer = styled.div`
  display: flex;
  column-gap: 30px;
  margin-top: 50px;
  padding-bottom: 80px;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    padding-bottom: 45px;
  }
`;
const Picture = styled.div<{ bg?: string }>`
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
  background-color: rgba(102, 96, 89, 1);
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

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
