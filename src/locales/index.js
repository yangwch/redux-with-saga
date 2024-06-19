import en from "./en";
import zhCN from "./zh-CN";

const locales = {
  en,
  "zh-CN": zhCN,
};

export default locales;

const languageMap = {
  "zh-CN": ["zh-CN"],
  en: ["en-US", "en-GB"],
};
const getSupportLanguage = (language, langMap = languageMap) => {
  let lan = "zh-CN";
  const langKeys = Object.keys(langMap);
  for (let index = 0; index < langKeys.length; index++) {
    const key = langKeys[index];
    if (language === key || langMap[key].includes(language)) {
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
