// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/style/main.scss"],
  imports: {
    dirs: [
      "composables",
      "composables/*",
      "composables/*.{d.ts,ts,js,mjs,mts}",
    ],
  },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  colorMode: {
    preference: "light",
  },
  ui: {
    global: true,
  },
  googleFonts: {
    preload: true,
    display: "swap",
    download: false,
    families: {
      Prompt: [300, 400, 500, 600, 700],
      Poppins: [300, 400, 500, 600, 700],
      "Noto Sans JP": [300, 400, 500, 600, 700],
    },
  },
});
