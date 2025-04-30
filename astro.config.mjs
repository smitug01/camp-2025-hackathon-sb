// @ts-check
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sitcon.camp",
  base: "/2025",
  output: "static",
  integrations: [astroIcon()],
});
