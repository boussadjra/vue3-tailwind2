
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ja",
  messages: {
    en: {
      message: {
        language: "English",
        greeting: "Hello !"
      }
    },
    ar: {
      message: {
        language: "العربية",
        greeting: "السلام عليكم"
      }
    },
    es: {
      message: {
        language: "Español",
        greeting: "Hola !"
      }
    }
  }
});


export default i18n;