// @ts-check
import { i18n } from "astro-i18n-aut/integration";
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sitcon.camp",
  base: "/2025",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [
    i18n({
      locales: { zh: "zh-Hant", en: "en-US" },
      defaultLocale: "zh",
      redirectDefaultLocale: true,
    }),
    astroIcon(),
  ],
});
