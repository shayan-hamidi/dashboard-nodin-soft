import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translationEN.json";
import translationPE from "./locales/pe/translationPE.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pe: {
    translation: translationPE,
  },
};

i18n.use(initReactI18next)
.init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
