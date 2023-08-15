import ar from "./ar";
import en from "./en";
import es from "./es";
import fr from "./fr";
import id from "./id";
import ja from "./ja";
import ko from "./ko";
import pt from "./pt";
import ru from "./ru";
import vi from "./vi";
import zhCN from "./zh-CN";
import zhTW from "./zh-TW";

const locales = {
  ar,
  en,
  es,
  fr,
  id,
  ja,
  ko,
  pt,
  ru,
  vi,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
};

export default locales;

const languageMap = {
  "zh-CN": ["zh-CN"],
  "zh-TW": ["zh-TW"],
  en: ["en-US", "en-GB"],
  ar: ["ar"],
  es: ["es-ES", "es", "es-419"],
  fr: ["fr-FR", "fr"],
  id: ["id-ID", "id"],
  ja: ["ja"],
  ko: ["ko", "ko-KR"],
  pt: ["pt-BR", "pt-PT"],
  ru: ["ru-RU", "ru"],
  vi: ["vi-VN", "vi"],
};
const getSupportLanguage = (language, langMap = languageMap) => {
  let lan = "zh-CN";
  const langKeys = Object.keys(langMap);
  for (let index = 0; index < langKeys.length; index++) {
    const key = langKeys[index];
    if (langMap[key].includes(language)) {
      lan = key;
      break;
    }
  }
  return lan;
};

export const getMessages = (lang = "zh-CN") => {
  const ln = getSupportLanguage(lang);
  return locales[ln];
};
