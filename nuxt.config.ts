// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "nuxt-svgo"],
  alias: {
    "@components": path.resolve(__dirname, "./components"),
    "@assets": path.resolve(__dirname, "./assets"),
  },
  css: ["@/assets/css/index.css"],
  // svgo
  svgo: {
    autoImportPath: "./assets/icons/",
  },
  // i18n
  i18n: {
    // Module Options
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.js", // Tên file dịch ngôn ngữ tiếng Anh
      },
      {
        code: "vi",
        iso: "vi-VN",
        name: "Vietnamese",
        file: "vn.js", // Tên file dịch ngôn ngữ tiếng Việt
      },
    ],
  },
});
