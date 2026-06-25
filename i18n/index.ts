import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ptBR from './locales/pt-BR.json'
import enUK from './locales/en-UK.json'

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: ptBR },
      en: { translation: enUK },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })
}

export default i18n
