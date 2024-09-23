<template>
  <div>
    <Header
      title="Badge"
      :attributes="[
        {
          name: 'Component type',
          value: 'NuxtUI/Badge',
          link: 'https://ui.nuxt.com/components/badge',
        },
        {
          name: 'Design Systems',
          value: '',
        },
      ]"
    >
      Display a short text to represent a status or a category.
    </Header>

    <div class="pb-20 pt-10">
      <section class="mt-3 flex gap-20">
        <div>
          <div class="w-60 overflow-hidden rounded-10 shadow-lg">
            <div class="flex h-36 items-start justify-end bg-neutral-100 p-2">
              <UBadge
                :label="label"
                :color="color"
                :variant="variant"
                :size="size"
                :ui="rounded ? { rounded: 'rounded-full' } : {}"
              />
            </div>

            <div class="flex flex-col items-start gap-4 p-3">
              <div class="w-full">
                <div class="h-4 rounded-4 bg-neutral-100" />
                <div class="mt-2 h-4 w-[60%] rounded-4 bg-neutral-100" />
              </div>

              <UBadge
                :color="color"
                :variant="variant"
                :size="size"
                :ui="rounded ? { rounded: 'rounded-full' } : {}"
              >
                <span class="flex items-center gap-1.5">
                  <Icon name="i-heroicons-cloud-16-solid" />
                  <span>{{ label }}</span>
                </span>
              </UBadge>
            </div>
          </div>
        </div>

        <div class="w-[500px] max-w-full">
          <div class="flex flex-col items-start gap-2">
            <div class="h-8 w-full rounded-4 bg-neutral-100" />

            <UBadge
              :label="label"
              :color="color"
              :variant="variant"
              :size="size"
              :ui="rounded ? { rounded: 'rounded-full' } : {}"
              class="mt-4"
            />

            <div
              v-for="(item, index) in 2"
              :key="index"
              class="flex w-full flex-col gap-2"
            >
              <div class="h-4 w-[70%] rounded-4 bg-neutral-100" />
              <div class="h-4 w-[40%] rounded-4 bg-neutral-100" />
              <div class="h-4 w-[50%] rounded-4 bg-neutral-100" />
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 flex flex-col gap-4">
        <h5 class="font-semibold">Config Settings</h5>

        <div class="grid grid-cols-5 gap-4">
          <UFormGroup
            label="Label"
            help="Enter text to change the text in the button."
          >
            <UInput
              v-model="label"
              @blur="label === '' ? (label = 'Badge') : false"
            />
          </UFormGroup>

          <UFormGroup label="Color">
            <USelectMenu v-model="color" :options="optionColor" />

            <template #help>
              <p>
                Change background color of the Badge. <br />
                default: <UBadge color="gray" variant="solid">primary</UBadge>
              </p>
            </template>
          </UFormGroup>

          <UFormGroup label="Variant">
            <USelectMenu
              v-model="variant"
              :options="optionVariant"
              value-attribute="value"
            />

            <template #help>
              <p>
                Change the visual style of the Badge.<br />
                NuxtUi value:
                <UBadge color="gray" variant="solid">solid</UBadge> (default),
                <UBadge color="gray" variant="solid">outline</UBadge>,
                <UBadge color="gray" variant="solid">soft</UBadge>,
                <UBadge color="gray" variant="solid">subtle</UBadge>
                <br />
                Custom:
                <UBadge color="gray" variant="solid">color-white</UBadge>,
                <UBadge color="gray" variant="solid">black-color</UBadge>
              </p>
            </template>
          </UFormGroup>

          <UFormGroup label="Size">
            <USelectMenu v-model="size" :options="optionSize" />

            <template #help>
              <p>
                Change the size of the Badge. The unit is
                <UBadge color="gray" variant="solid">px</UBadge> <br />
                default: <UBadge color="gray" variant="solid">24</UBadge>
              </p>
            </template>
          </UFormGroup>

          <UFormGroup label="Rounded">
            <template #label>
              <UCheckbox v-model="rounded" label="Rounded" />
            </template>

            <template #help>
              <p>
                To customize the border radius of the Badge, you can use the
                <UBadge color="gray" variant="solid">ui</UBadge> prop.<br />
                <UBadge color="gray" variant="solid"
                  >:ui="{ rounded: 'rounded-full' }"</UBadge
                >
              </p>
            </template>
          </UFormGroup>
        </div>
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Usage</h5>

        <CodeBlock :content="code" />
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Config</h5>

        <CodeBlock :content="config" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { badge as configBadge } from "~/config/ui/badge";
import type { BadgeColor, BadgeVariant, BadgeSize } from "#ui/types";

definePageMeta({
  layout: "components",
});

const rounded = ref(false);
const label = ref("Badge");
const size = ref<BadgeSize>("24");
const optionSize = ["20", "24", "28", "32"];
const color = ref<BadgeColor>("primary");
const optionColor = [
  "white",
  "gray",
  "black",
  "neutral",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
];
const variant = ref<BadgeVariant>("solid");
const optionVariant = [
  {
    label: "solid",
    value: "solid",
  },
  {
    label: "outline",
    value: "outline",
  },
  {
    label: "soft",
    value: "soft",
  },
  {
    label: "subtle",
    value: "subtle",
  },
  {
    label: "color-white",
    value: "color-white",
  },
  {
    label: "black-color",
    value: "black-color",
  },
];

const code = computed(() => {
  let html = `
<UBadge
  label="${label.value}"
  color="${color.value}"
  variant="${variant.value}"
  size="${size.value}"`;

  if (rounded.value) {
    html += `\n  ui=\"{rounded: 'rounded-full'}\" `;
  }
  return `\`\`\`html ${html} 
/>`;
});

const config = `
\`\`\`js
// config/ui/badge/index.ts

export const badge = ${JSON.stringify(configBadge, null, 2)}
\`\`\`
`;
</script>

<style scoped></style>
