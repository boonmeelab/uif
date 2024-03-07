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
  modules: ["@nuxt/ui"],
  ui: {
    global: true,
  },
});
