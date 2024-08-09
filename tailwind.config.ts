import type { Config } from "tailwindcss";
import twUxd from "./tw-config-uxd";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './config/ui/**/*.{js,ts}',
  ],
  safelist: [
    {
      pattern: /text-(neutral|primary|secondary|tertiary|success|warning|error)-(100|200|300|400|500|600|700|800|900)/,
      variants: [
        'hover',
        'active',
        'focus',
        'focus-visible',
      ],
    },
    {
      pattern: /bg-(neutral|primary|secondary|tertiary|success|warning|error)-(100|200|300|400|500|600|700|800|900)/,
      variants: [
        'hover',
        'active',
        'focus',
        'focus-visible',
      ],
    },
    {
      pattern: /border-(neutral|primary|secondary|tertiary|success|warning|error)-(100|200|300|400|500|600|700|800|900)/,
      variants: [
        'hover',
        'active',
        'focus',
        'focus-visible',
      ],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [twUxd],
} satisfies Config;
