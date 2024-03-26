import type { Config } from "tailwindcss";
import twUxd from "./tw-config-uxd";
// import defaultTheme from "tailwindcss/defaultTheme";
// import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [twUxd],
} satisfies Config;
