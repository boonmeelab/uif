// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    inlineRouteRules: true,
  },

  app: {
    head: {
      title: "BML UI Framework",
    },
  },

  css: ["~/assets/style/main.scss"],

  imports: {
    dirs: [
      "composables",
      "composables/*",
      "composables/*.{d.ts,ts,js,mjs,mts}",
    ],
  },

  components: {
    dirs: [{ path: "~/components/Ui", pathPrefix: false }, "~/components"],
  },

  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-lodash", "@vueuse/nuxt"],

  colorMode: {
    preference: "light",
  },

  ui: {
    safelistColors: [
      "neutral",
      "primary",
      "secondary",
      "tertiary",
      "success",
      "warning",
      "error",
    ],
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

  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },

  compatibilityDate: "2024-08-05",
});
