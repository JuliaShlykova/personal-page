import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from './translations/en';
import translationRu from './translations/ru';

const myDetector = {
  name: 'myDetector',
  lookup() {
    if (window.location.pathname === '/ru'){
      return 'ru';
    }
    return 'en';
  }
}

const languageDetector = new LanguageDetector();
languageDetector.addDetector(myDetector);

const detectorOptions = {
  order: ['querystring', 'myDetector', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
};

const resources = {
  en: {
    translation: translationEn
  },
  ru: {
    translation: translationRu
  }
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(languageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    detection: detectorOptions,
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources
  });

export default i18n;