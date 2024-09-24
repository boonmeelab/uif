<template>
  <div>
    <Header title="Introduction"> </Header>

    <div class="pb-20 pt-10">
      <p class="text-neutral-800">
        BML UIF is a workflow for frontend developers, playing a crucial role in
        creating UI layouts. It's based on the fundamental design principles of
        BML UXD, utilizing Tailwind CSS and Nuxt UI as the foundational
        framework to define styles and patterns as specified by BML UXD.
      </p>
      <div class="mt-3 text-neutral-800">
        It consists of two key components:<br />
        <ol class="mt-3 list-decimal pl-4">
          <li>
            Elements derived from BML UXD (guidelines for commission project
            work), such as colors, fonts, layouts, and various components.
          </li>
          <li>
            UI components that have potential for reuse or are expected to
            function effectively, efficiently, and prove useful in future
            projects.
          </li>
        </ol>
      </div>

      <h4 class="mt-6 font-semibold">Require</h4>
      <ul class="mt-3 list-disc pl-5 text-neutral-800">
        <!-- Installation of the @nuxt/ui module is necessary<br /> -->
        <li>
          <ULink
            to="https://ui.nuxt.com/getting-started"
            target="_blank"
            inactive-class="hover:text-primary"
          >
            @nuxt/ui (v.2.18.4)
          </ULink>
        </li>
        <li>
          <ULink
            to="https://nuxt.com/docs/getting-started/introduction"
            inactive-class="hover:text-primary"
            target="_blank"
          >
            nuxt (v.3.13.2)
          </ULink>
        </li>
      </ul>

      <h4 class="mt-6 font-semibold">Setup</h4>

      <div>
        <h6 class="my-3 font-semibold">Tailwind</h6>
        <CodeBlock :content="tailwind" />
      </div>
      <div>
        <h6 class="mt-6 font-semibold">App Config</h6>
        <p class="my-3 text-neutral-800 text-b-1">
          The <UBadge variant="soft">uiConfig()</UBadge> function takes two
          parameters: strategy (NuxtUi Config) and customConfig for additional
          customization of NuxtUi component configurations.
        </p>
        <CodeBlock :content="appConfig" />
      </div>

      <div>
        <h6 class="mt-6 font-semibold">UI Config</h6>
        <p class="my-3 text-neutral-800 text-b-1">
          Compiles the basic UI styles for UIF, exported as a function that
          returns the Component Config format for NuxtUi.<br />
          ** It's recommended to import only the necessary files, and the Config
          code for each component can be viewed individually.
        </p>
        <CodeBlock :content="uiConfig" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "components",
});

defineRouteRules({
  prerender: true,
});

const tailwind = `
\`\`\`js
// tailwind.config.ts

export default {
  content: [
    ...
    ...
    "./config/ui/**/*.{js,ts}",
  ],
  ...
} satisfies Config;
\`\`\`
`;

const appConfig = `
\`\`\`js
// app.config.ts

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
\`\`\`
`;

const uiConfig = `
\`\`\`js
// config/ui/index.ts

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
\`\`\`
`;
</script>

<style scoped></style>
