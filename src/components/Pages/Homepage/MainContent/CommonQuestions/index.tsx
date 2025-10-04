import NavigationButtons from "../CustomSlider/NavigationButtons";
import Accordion from "./Accordion";
import { useTranslation } from "next-i18next";

const CommonQuestions = () => {
  const {t} = useTranslation("home_page")

  return (
    <section>
      <NavigationButtons justShowTitle={true} title={"Часті питання"} />
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid gap-5 items-start w-full">
        <Accordion
          question={t("Чи можу я протестувати велосипед перед покупкою?")}
          answer={
            t("Так, ми надаємо можливість протестувати велосипед перед покупкою. Зверніться до наших консультантів для отримання додаткової інформації та узгодження часу тестування.")
          }
        />
        <Accordion
          question={t("Які аксесуари потрібно придбати разом із велосипедом")}
          answer={
            t("Відповідь1")
          }
        />
        <Accordion
          question={
            t("Як доглядати за велосипедом, щоб забезпечити його тривалу експлуатацію?")
          }
          answer={
            t("Відповідь2")
          }
        />
        <Accordion
          question={
            t("Чи можливо замовити велосипед із індивідуальними характеристиками")
          }
          answer={
            t("Звичайно, зв'яжітся з нами зручним для вас методом і ми підберемо ідеальний велосипед для вас!")
          }
        />
      </div>
    </section>
  );
};

export default CommonQuestions;
