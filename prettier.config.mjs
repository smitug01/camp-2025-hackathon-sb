export default {
  printWidth: 70,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "always",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "never",
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
