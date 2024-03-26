import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const twUxd = plugin(
  function ({ addBase, addUtilities, theme }) {
    addBase({
      h1: {
        "font-size": "96px",
        "line-height": "112px",
        "@media screen(mobile)": {
          "font-size": "60px",
          "line-height": "72px",
        },
      },
      h2: {
        "font-size": "60px",
        "line-height": "72px",
        "@media screen(mobile)": {
          "font-size": "48px",
          "line-height": "56px",
        },
      },
      h3: {
        "font-size": "48px",
        "line-height": "56px",
        "@media screen(mobile)": {
          "font-size": "34px",
          "line-height": "42px",
        },
      },
      h4: {
        "font-size": "34px",
        "line-height": "42px",
        "@media screen(mobile)": {
          "font-size": "24px",
          "line-height": "32px",
        },
      },
      h5: {
        "font-size": "24px",
        "line-height": "32px",
        "@media screen(mobile)": {
          "font-size": "20px",
          "line-height": "30px",
        },
      },
      h6: {
        "font-size": "20px",
        "line-height": "30px",
        "@media screen(mobile)": {
          "font-size": "18px",
          "line-height": "24px",
        },
      },
    });

    addUtilities({
      ".screen-padding": {
        paddingLeft: "96px",
        paddingRight: "96px",
        "@media screen(desktop!)": {
          paddingLeft: "48px",
          paddingRight: "48px",
        },
        "@media screen(tablet!)": {
          paddingLeft: "32px",
          paddingRight: "32px",
        },
        "@media screen(mobile)": {
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      },
      container: {},
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "0",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "Prompt",
          "Noto Sans JP",
          ...defaultTheme.fontFamily.sans,
        ],
        prompt: ["Prompt", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
      },
      extend: {
        screens: {
          "xl-desktop": { min: "1890px" },
          "l-desktop": { max: "1889px" },
          "l-desktop!": { min: "1440px", max: "1889px" },
          desktop: { max: "1439px" },
          "desktop!": { min: "1024px", max: "1439px" },
          tablet: { max: "1023px" },
          "tablet!": { min: "768px", max: "1023px" },
          mobile: { max: "767px" },
          "mobile!": { min: "480px", max: "767px" },
          "s-mobile": { max: "479px" },
        },
        colors: {
          neutral: {
            50: "#f2f2f2",
            100: "#d6d6d6",
            200: "#c2c2c2",
            300: "#a6a6a6",
            400: "#959595",
            500: "#7a7a7a",
            600: "#6f6f6f",
            700: "#575757",
            800: "#434343",
            900: "#333333",
          },
          primary: {
            DEFAULT: "#ed2e7c",
            50: "#fdeaf2",
            100: "#f9bed6",
            200: "#F79FC3",
            300: "#f373a7",
            400: "#f15896",
            500: "#ed2e7c",
            600: "#d82a71",
            700: "#a82158",
            800: "#821944",
            900: "#641334",
          },
          uiPrimary: {
            DEFAULT: "#ed2e7c",
            50: "#fdeaf2",
            100: "#f9bed6",
            200: "#F79FC3",
            300: "#f373a7",
            400: "#f15896",
            500: "#ed2e7c",
            600: "#d82a71",
            700: "#a82158",
            800: "#821944",
            900: "#641334",
          },
          secondary: {
            DEFAULT: "#21296e",
            50: "#e9eaf1",
            100: "#babdd2",
            200: "#999DBC",
            300: "#6a709e",
            400: "#4d548b",
            500: "#21296e",
            600: "#1e2564",
            700: "#171d4e",
            800: "#12173d",
            900: "#0e112e",
          },
          tertiary: {
            DEFAULT: "#ff5c36",
            50: "#ffefeb",
            100: "#ffccc1",
            200: "#ffb4a3",
            300: "#ff9278",
            400: "#ff7d5e",
            500: "#ff5c36",
            600: "#e85431",
            700: "#b54126",
            800: "#8c331e",
            900: "#6b2717",
          },
          success: {
            DEFAULT: "#22c55e",
            50: "#e9f9ef",
            100: "#baedcd",
            200: "#99e4b5",
            300: "#6bd893",
            400: "#4ed17e",
            500: "#22c55e",
            600: "#1fb356",
            700: "#188c43",
            800: "#136c34",
            900: "#0e5327",
          },
          warning: {
            DEFAULT: "#f59e0b",
            50: "#fef5e7",
            100: "#fce1b3",
            200: "#fad28f",
            300: "#f8be5c",
            400: "#f7b13c",
            500: "#f59e0b",
            600: "#df900a",
            700: "#ae7008",
            800: "#875706",
            900: "#674205",
          },
          error: {
            DEFAULT: "#EF4444",
            50: "#fdecec",
            100: "#fac5c5",
            200: "#f8a9a9",
            300: "#f48282",
            400: "#f26969",
            500: "#EF4444",
            600: "#d93e3e",
            700: "#aa3030",
            800: "#832525",
            900: "#641d1d",
          },
          accent: "#00FF85",
        },
        fontSize: {
          "sh-1": [
            "34px",
            {
              lineHeight: "42px",
            },
          ],
          "sh-2": [
            "24px",
            {
              lineHeight: "32px",
            },
          ],
          "b-1": [
            "16px",
            {
              lineHeight: "24px",
            },
          ],
          "b-2": [
            "14px",
            {
              lineHeight: "20px",
            },
          ],
          "b-3": [
            "12px",
            {
              lineHeight: "18px",
            },
          ],
          btn: [
            "16px",
            {
              lineHeight: "24px",
            },
          ],
          caption: "14px",
          overline: "12px",
        },
        borderRadius: {
          DEFAULT: "6px",
          2: "2px",
          4: "4px",
          6: "6px",
          8: "8px",
          10: "10px",
          12: "12px",
          16: "16px",
          20: "20px",
          24: "24px",
          28: "28px",
          32: "32px",
          36: "36px",
          40: "40px",
          44: "44px",
          48: "48px",
          full: "9999px",
        },
      },
    },
  },
);

export default twUxd;