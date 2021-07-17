import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi) // passes i18n down to react-i18next
.init({
  supportedLngs: ['en','de'],
  fallbackLng: "en",
  detection: {
    order: ['cookie', 'htmlTag', 'localStorage', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
    caches: ['cookie'],
  },
  backend: {
    loadPath: '/assets/locales/{{lng}}/translation.json',
  }
});

export default i18n;