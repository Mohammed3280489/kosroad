import i18n from "i18next";
import translationAr from "./utils/languages/local/ar.json";
import translationEN from "./utils/languages/local/en.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translations: translationEN,
  },
  ar: {
    translations: translationAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    resources,
    
    ns: ["translations"],

    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react:{
      useSuspense:true
    }
    
  });

export default i18n;
