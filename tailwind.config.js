/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        primaryLight: "#232323",
        primaryGray: "#454444",
        neutralGray: "#949494",
        neutralWhiteDark: "#CACACA",
        neutralWhiteGray: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
