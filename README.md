# 🎏 UIF - UI Framework

BML UIF is a workflow for front-end developers, playing a crucial role in creating UI layouts. It's based on the fundamental design principles of BML UXD, utilizing Tailwind CSS and Nuxt UI as the foundational framework to define styles and patterns as specified by BML UXD.

It consists of two key components:

1. **Elements derived from BML UXD** (guidelines for commission project work), such as colors, fonts, layouts, and various components.
2. **UI components** that have potential for reuse or are expected to function effectively, efficiently, and prove useful in future projects.

## 📌 Require

- Nuxt 3 (currently v3.13.2)
- Nuxt UI (currently v2.18.4)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI documentation](https://ui.nuxt.com/getting-started) to learn more.

## 🎨 Theme Configuration

UIF themes can be used by setting theme config in file `tailwind.config.ts` [View Code](https://github.com/boonmeelab/uif/blob/main/tailwind.config.ts)

## 💻 Setup

### Tailwind

[Content Configuration](https://tailwindcss.com/docs/content-configuration)

```js
# tailwind.config.ts

export default {
  content: [
    ...
    ...
    "./config/ui/**/*.{js,ts}",
  ],
  ...
} satisfies Config;
```

### App Config

The `uiConfig()` function takes two parameters: strategy (NuxtUI Config) and customConfig for additional customization of NuxtUI component configurations.

```js
# app.config.ts

import uiConfig from "./config/ui"

const customConfig = {}
const config = uiConfig(customConfig);

export default defineAppConfig({
  ui: {
    // Other Config Ex.
    // strategy: "override",
    // primary: "uiPrimary",
    ...config,
  }
});
```

### UI Config

Compiles the basic UI styles for UIF, exported as a function that returns the Component Config format for NuxtUi.

> Importing only the necessary files is recommended, and the Config code for each component can be viewed individually.

```js
# config/ui/index.ts

import type { Strategy } from '#ui/types';
import { mergeConfig } from "#ui/utils";

// import component
import { badge } from './badge';

const defaultConfig = {
  badge,
  ...
}

type Props = { strategy?: Strategy; customConfig?: { [key: string]: any } }

export default function ({ strategy = 'merge', customConfig }: Props = {}) {
  type Ui = typeof defaultConfig & typeof customConfig

  return mergeConfig<Ui>(strategy, customConfig, defaultConfig)
}
```
