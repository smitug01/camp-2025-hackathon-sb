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
    const basePath =
      (currentLocale === "en") !== reverseLocale
        ? "/2025/en"
        : "/2025";

    if (path.startsWith("#") || path.startsWith("/#")) {
      // 是純錨點，直接接上去
      return basePath + path.replace(/^\//, "");
    }

    return posix.join(basePath, path).replace(/\/+$/, "");
  };
};
