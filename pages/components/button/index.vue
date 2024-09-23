<template>
  <Header
    title="Button"
    :attributes="[
      {
        name: 'Component type',
        value: 'NuxtUI/Button',
        link: 'https://ui.nuxt.com/components/button',
      },
      {
        name: 'Design Systems',
        value: 'UXD',
        link: 'https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=2310-19772&t=73wIgnZyW4Y0CbpJ-4',
      },
    ]"
  >
    Display a short text to represent a status or a category.
  </Header>

  <div class="pb-20 pt-10">
    <section>
      <div class="font-semibold text-b-1">Default</div>

      <div class="mt-3 flex gap-10">
        <UButton
          :color="color"
          :variant="variant"
          :label="text_button"
          :size="size"
          :trailing="trailing"
          :loading="loading"
          :padded="padded"
          :square="square"
          :disabled="disabled"
          icon="i-heroicons-chevron-down-solid"
        ></UButton>

        <UButton
          :color="color"
          :variant="variant"
          :label="text_button"
          :size="size"
          :trailing="trailing"
          :loading="loading"
          :padded="padded"
          :square="square"
          :disabled="disabled"
        ></UButton>
      </div>
    </section>

    <section class="mt-6">
      <div>
        <div class="font-semibold text-b-1">Action Button</div>
        <div class="mt-2 flex flex-col gap-2 text-neutral-700 text-b-2">
          <p>
            action button of UXD design buttons should have an attribute
            <UBadge variant="subtle">square</UBadge>
          </p>
        </div>
      </div>

      <div class="mt-3">
        <UButton
          :color="color"
          :variant="variant"
          :size="size"
          :padded="padded"
          :loading="loading"
          :disabled="disabled"
          square
          icon="i-heroicons-arrow-up-on-square-solid"
        ></UButton>
      </div>
    </section>

    <section class="mt-6">
      <div>
        <div class="font-semibold text-b-1">Icon Button</div>
        <div class="mt-2 flex flex-col gap-2 text-neutral-700 text-b-2">
          <p>variant should be <UBadge variant="subtle">icon</UBadge></p>
          <p>
            Use any icon from
            <UButton
              label="Iconify"
              size="24"
              variant="link"
              to="https://icones.js.org/"
              target="_blank"
              :padding="false"
            ></UButton>
            by setting the icon prop by using this pattern:
            <UBadge color="gray" variant="solid"
              >i-{collection_name}-{icon_name}.</UBadge
            >
          </p>
        </div>
      </div>

      <div class="mt-3">
        <UButton
          :color="color"
          variant="icon"
          :size="size"
          :padded="padded"
          :square="square"
          :disabled="disabled"
          icon="i-heroicons-archive-box-solid"
        ></UButton>
      </div>
    </section>

    <section class="mt-16 flex flex-col gap-3">
      <h5 class="font-semibold">Config Settings</h5>

      <div class="grid grid-cols-5 gap-4">
        <UFormGroup
          label="Label"
          help="Enter text to change the text in the button."
        >
          <UInput
            v-model="text_button"
            @blur="text_button === '' ? (text_button = 'Button') : false"
          />
        </UFormGroup>

        <UFormGroup label="Size">
          <USelectMenu v-model="size" :options="optionSize" />

          <template #help>
            <p>
              Change the size of the Button. Affects to
              <UBadge color="gray" variant="solid">height</UBadge> and
              <UBadge color="gray" variant="solid">font-size</UBadge>, unit is
              <UBadge color="gray" variant="solid">px</UBadge> <br />
              default: <UBadge color="gray" variant="solid">36</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Color">
          <USelectMenu v-model="color" :options="optionColor" />

          <template #help>
            <p>
              Change the visual style of the Button. <br />
              default: <UBadge color="gray" variant="solid">primary</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Variant" class="col-span-2">
          <USelectMenu
            v-model="variant"
            :options="optionVariant"
            value-attribute="value"
          />

          <template #help>
            <p>
              Change the visual style of the Button. <br />
              <UBadge color="gray" variant="solid">text</UBadge>(uxd),
              <UBadge color="gray" variant="solid">contained</UBadge
              >(uxd)/<UBadge color="gray" variant="solid">solid</UBadge
              >(nuxtUi),
              <UBadge color="gray" variant="solid">outline</UBadge>(uxd,nuxtUi),
              <UBadge color="gray" variant="solid">soft</UBadge>(nuxtUi),
              <UBadge color="gray" variant="solid">ghost</UBadge>(nuxtUi),
              <UBadge color="gray" variant="solid">link</UBadge>(nuxtUi),
              <UBadge color="gray" variant="solid">icon</UBadge>(uxd)
              <br />
              default: <UBadge color="gray" variant="solid">solid</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="loading" name="Loading" label="loading" />
          </template>

          <template #help>
            <p>
              Show a loading icon and
              <span class="font-semibold">disable</span> the Button.
              <Icon name="i-svg-spinners-90-ring-with-bg"></Icon> need to
              install
              <UBadge color="gray" variant="solid"
                >@iconify-json/svg-spinners</UBadge
              >
            </p>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="padded" name="Padded" label="padded" />
          </template>

          <template #help>
            Remove the padding of the Button. suitable for variant
            <UBadge color="gray" variant="solid">icon</UBadge>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="square" name="Square" label="square" />
          </template>

          <template #help>
            Force the Button to have the same padding horizontally and
            vertically. suitable for variant
            <UBadge color="gray" variant="solid">Action Button</UBadge>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="trailing" name="Trailing" label="trailing" />
          </template>

          <template #help>
            <p>
              set the icon position. default:
              <UBadge color="gray" variant="solid">leading</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="disabled" name="Disabled" label="disabled" />
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
</template>

<script setup lang="ts">
import type { ButtonColor, ButtonVariant, ButtonSize } from "#ui/types";
import { button as configButton } from "~/config/ui/button";

definePageMeta({
  layout: "components",
});

const text_button = ref("Button");

const trailing = ref(false);
const disabled = ref(false);
const loading = ref(false);
const padded = ref(true);
const square = ref(false);
const color = ref<ButtonColor>("primary");
const optionColor = [
  "neutral",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
];
const variant = ref<ButtonVariant>("solid");
const optionVariant = [
  {
    label: "text",
    value: "text",
  },
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
    label: "ghost",
    value: "ghost",
  },
  {
    label: "link",
    value: "link",
  },
  {
    label: "icon",
    value: "icon",
    disabled: true,
  },
];
const size = ref<ButtonSize>("36");
const optionSize = ["24", "32", "36", "44", "56", "72"];

const code = computed(() => {
  let code = `
<UButton
  label="${text_button.value}"
  color="${color.value}"
  variant="${variant.value}"
  size="${size.value}"`;
  if (!padded.value) code += `\n  :padded="false"`;
  if (square.value) code += `\n  square`;
  if (trailing.value) code += `\n  trailing`;
  if (loading.value) code += `\n  loading`;
  if (disabled.value) code += `\n  disabled`;

  return `\`\`\`html ${code} 
/>`;
});

const config = `
\`\`\`js
// config/ui/button/index.ts

export const button = ${JSON.stringify(configButton, null, 2)}`;
</script>

<style scoped></style>
