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
});
