import AboutShopScreen from "@/components/Screens/AboutShopScreen/AboutShopScreen";
import { PaddingWrapper } from "../../../theme/templates";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps(context:any) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common', 'about_page'])),
    },
  };
}

const About = () => {
  return (
    <PaddingWrapper>
      <AboutShopScreen />
    </PaddingWrapper>
  );
};
export default About;
