import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import enTranslation from './en.json';
import esTranslation from './es.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });
