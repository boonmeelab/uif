<template>
  <div>
    <Header
      title="Checkbox"
      :attributes="[
        {
          name: 'Component type',
          value: 'NuxtUI/Checkbox',
          link: 'https://ui.nuxt.com/components/checkbox',
        },
        {
          name: 'Design Systems',
          value: 'UXD',
          link: 'https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=2330-1943&t=zQzEyTtomdoknkeV-4',
        },
      ]"
    >
    </Header>

    <div class="pb-20 pt-10">
      <section>
        <div class="mt-3 flex gap-10">
          <UCheckbox
            :ui="size.value"
            :label="label"
            :help="help"
            :color="color"
            :disabled="disabled"
          />
        </div>
      </section>

      <div class="mb-3 mt-16 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>
      </div>

      <section class="grid grid-cols-5 gap-4">
        <UFormGroup
          label="Label"
          help="Enter label to display a label on the right."
        >
          <UInput v-model="label" />
        </UFormGroup>

        <UFormGroup
          label="Help"
          help="Enter help to display some text under the Checkbox."
        >
          <UInput v-model="help" />
        </UFormGroup>

        <UFormGroup>
          <template #label>
            Size
            <UBadge variant="soft">template</UBadge></template
          >
          <USelectMenu v-model="size" :options="optionSize" />

          <template #help>
            <p>
              Custom checkbox size by
              <UBadge color="gray" variant="solid">template/size</UBadge>
              <br />
              default:
              <UBadge color="gray" variant="solid">16</UBadge>
              <!-- Customize the size of the checkbox from the object
              <UBadge color="gray" variant="solid">ui</UBadge> settings in the
              components prop
              <span class="text-tertiary-500">*not required</span> -->
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Color">
          <USelectMenu v-model="color" :options="optionColor" />

          <template #help>
            <p>
              Change the visual style of the Checkbox. <br />
              default: <UBadge color="gray" variant="solid">primary</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="disabled" name="Disabled" label="disabled" />
          </template>
        </UFormGroup>
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Usage</h5>

        <CodeBlock :content="code" />

        <div>
          <div class="font-semibold text-neutral-800 text-b-1">
            Custom ui props by template?
          </div>
          <p class="text-neutral-700 text-b-1">
            You can customize the whole template by using the ui prop.<br />
            Example: Set the size by importing the size from the template
            <UBadge color="gray" variant="solid"
              >import { size16 } from
              "~/config/ui/...component.../template/size"</UBadge
            >
          </p>
        </div>

        <AlertUseTemplate />
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Config</h5>

        <CodeBlock :content="configDefault" />

        <div class="flex flex-col gap-3 pb-10 pt-6">
          <div class="font-semibold text-h6">Template</div>

          <CodeBlock :content="configTemplate" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  size16,
  size24,
  size32,
  size36,
  size44,
  size56,
  size72,
} from "~/config/ui/checkbox/template/size";
import { checkbox as configCheckbox } from "~/config/ui/checkbox";

definePageMeta({
  layout: "components",
});

defineRouteRules({
  prerender: true,
});

const disabled = ref(false);
const label = ref("Label");
const help = ref("Description help");
const optionSize = [
  {
    label: "16",
    value: size16,
  },
  {
    label: "24",
    value: size24,
  },
  {
    label: "32",
    value: size32,
  },
  {
    label: "36",
    value: size36,
  },
  {
    label: "44",
    value: size44,
  },
  {
    label: "56",
    value: size56,
  },
  {
    label: "72",
    value: size72,
  },
];
const size = ref(optionSize[0]);
const color = ref("primary");
const optionColor = [
  "neutral",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
];

const configDefault = `\`\`\`js
// config/ui/checkbox/index.ts

export const checkbox = ${JSON.stringify(configCheckbox, null, 2)}`;

const configTemplate = `\`\`\`js
// config/ui/checkbox/template/size.ts

export const size16 = ${JSON.stringify(size16, null, 2)}
export const size24 = ${JSON.stringify(size24, null, 2)}
export const size32 = ${JSON.stringify(size32, null, 2)}
export const size36 = ${JSON.stringify(size36, null, 2)}
export const size44 = ${JSON.stringify(size44, null, 2)}
export const size56 = ${JSON.stringify(size56, null, 2)}
export const size72 = ${JSON.stringify(size72, null, 2)}`;

const code = computed(() => {
  let code = `
<UCheckbox
  label="${label.value}"
  color="${color.value}"`;

  if (help.value) code += `\n  help="${help.value}"`;
  if (size.value.label !== "16") code += `\n  :ui="size${size.value.label}"`;
  if (disabled.value) code += `\n  disabled`;

  return `\`\`\`html ${code}
/>`;
});
</script>

<style scoped></style>
