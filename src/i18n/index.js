import { getLocale as extractLocale } from "astro-i18n-aut";
import { posix } from "node:path";
import enStrings from "./en/strings.js";
import zhStrings from "./zh/strings.js";

export const rawStrings = {
  en: enStrings,
  zh: zhStrings,
};

export const getLocale = (url) => {
  return rawStrings[extractLocale(url)];
};

export const linkTransformer = (url) => {
  const currentLocale = extractLocale(url);

  return (path, reverseLocale = false) => {
    const targetLocale = reverseLocale 
      ? (currentLocale === "en" ? "zh" : "en")
      : currentLocale;
    
    const basePath = targetLocale === "en" ? "/en" : "/";

    if (path.startsWith("#") || path.startsWith("/#")) {
      return basePath + path.replace(/^\//, "");
    }

    return posix.join(basePath, path).replace(/\/+$/, "");
  };
};
