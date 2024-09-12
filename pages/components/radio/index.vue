<template>
  <div>
    <Header title="Radio">
      Based on UI Framework
      <a
        href="https://ui.nuxt.com/components/checkbox"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">NuxtUI/RadioGroup</UBadge></a
      >
      , design systems by UXD
      <a
        href="https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=2434-4043&t=Hqa4spYA5VItecTa-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">Figma</UBadge></a
      >
    </Header>

    <div class="pb-20 pt-10">
      <section>
        <div class="font-semibold text-b-1">Default</div>

        <div class="mt-3 flex gap-10">
          <URadio
            :label="label"
            :help="help"
            :disabled="disabled"
            :ui="size.value"
          />
        </div>
      </section>

      <section class="mt-8">
        <div class="font-semibold text-b-1">Radio Group</div>

        <div class="mt-4 flex gap-10">
          <URadioGroup
            v-model="selected"
            :options="options"
            :legend="legend"
            :disabled="disabled"
          />
        </div>
      </section>

      <section class="mt-16 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>

        <div class="grid grid-cols-5 gap-4">
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

          <UFormGroup label="Legend">
            <template #help>
              Add a legend to the
              <span class="font-semibold">RadioGroup</span>.
            </template>
            <UInput v-model="legend" />
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
        </div>
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Usage</h5>

        <div class="flex flex-col gap-2">
          <div class="font-semibold text-h6">Radio</div>
          <CodeBlock :content="codeRadio" />

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
        </div>

        <div class="flex flex-col gap-2">
          <div class="font-semibold text-h6">RadioGroup</div>
          <CodeBlock :content="codeRadioGroup" />
        </div>
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Config</h5>

        <div class="flex flex-col gap-2">
          <div class="font-semibold text-h6">Radio</div>
          <CodeBlock :content="configRadio" />
        </div>

        <div class="flex flex-col gap-2">
          <div class="font-semibold text-h6">RadioGroup</div>
          <CodeBlock :content="configRadioGroup" />
        </div>

        <div class="flex flex-col gap-2">
          <div class="font-semibold text-h6">Template Radio</div>
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
} from "~/config/ui/radio/template/size";
import { radio } from "~/config/ui/radio";
import { radioGroup } from "~/config/ui/radioGroup";

definePageMeta({
  layout: "components",
});

const selected = ref("");
const disabled = ref(false);
const label = ref("Label");
const help = ref("Description help");
const legend = ref("Choose something");
const optionSize = [
  { label: "16", value: size16 },
  { label: "24", value: size24 },
  { label: "32", value: size32 },
  { label: "36", value: size36 },
  { label: "44", value: size44 },
  { label: "56", value: size56 },
  { label: "72", value: size72 },
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

const options = computed(() => [
  {
    value: "email",
    label: "Email",
    help: help.value,
  },
  {
    value: "sms",
    label: "Phone (SMS)",
    help: help.value,
  },
  {
    value: "push",
    label: "Push notification",
    help: help.value,
  },
]);

const configRadio = `\`\`\`js
// config/ui/radio/index.ts

export const radio = ${JSON.stringify(radio, null, 2)}`;

const configRadioGroup = `\`\`\`js
// config/ui/radioGroup/index.ts

export const radioGroup = ${JSON.stringify(radioGroup, null, 2)}`;

const configTemplate = `\`\`\`js
// config/ui/radioGroup/template/size.ts

export const size16 = ${JSON.stringify(size16, null, 2)}
export const size24 = ${JSON.stringify(size24, null, 2)}
export const size32 = ${JSON.stringify(size32, null, 2)}
export const size36 = ${JSON.stringify(size36, null, 2)}
export const size44 = ${JSON.stringify(size44, null, 2)}
export const size56 = ${JSON.stringify(size56, null, 2)}
export const size72 = ${JSON.stringify(size72, null, 2)}`;

const codeRadio = computed(() => {
  let code = `
<URadio label="${label.value}" help="${help.value}"`;

  if (size.value.label !== "16") code += ` :ui="size${size.value.label}"`;
  if (disabled.value) code += ` disabled`;
  return `\`\`\`html ${code}/>`;
});
const codeRadioGroup = computed(() => {
  let code = `
<URadioGroup v-model="selected" :options="options" legend="${legend.value}"`;

  if (disabled.value) code += ` disabled`;
  return `\`\`\`html ${code}/>`;
});
</script>

<style scoped></style>
