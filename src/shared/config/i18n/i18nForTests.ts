import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    ns: ['translationsNS'],
    defaultNS: 'translationsNS',

    debug: true,

    interpolation: {
      escapeValue: false,
    },

    resources: { en: { translationsNS: {} } },
  });

export default i18n;
