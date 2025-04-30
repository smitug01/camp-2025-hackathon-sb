import { getLocale as extractLocale } from "astro-i18n-aut";
import enStrings from "./en/strings.js";
import zhStrings from "./zh/strings.js";

export const rawStrings = {
  en: enStrings,
  zh: zhStrings,
};

export const getLocale = (url) => {
  return rawStrings[extractLocale(url)];
};
