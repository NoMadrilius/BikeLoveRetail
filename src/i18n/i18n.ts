import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// переводы
import translationUA from './langs/ua/translation.json';
import translationRU from "./langs/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ua: {
      translation: translationUA,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: "ua", 
  fallbackLng: "ua", 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;