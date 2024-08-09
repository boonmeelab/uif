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
      <div class="mb-3 flex flex-col gap-3">
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

        <UFormGroup label="Legend">
          <template #help>
            Add a legend to the
            <span class="font-semibold">RadioGroup</span>.
          </template>
          <UInput v-model="legend" />
        </UFormGroup>

        <UFormGroup label="Size">
          <USelectMenu v-model="size" :options="optionSize" />

          <template #help>
            <p>
              Custom radio size by ui config
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
      </section>

      <div class="mt-6 flex flex-col gap-2">
        <h6 class="font-semibold">Preview</h6>
      </div>

      <section class="mt-6">
        <div class="font-semibold text-b-1">Default</div>

        <div class="mt-3 flex gap-10">
          <URadio
            :label="label"
            :help="help"
            :size="size"
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
</script>

<style scoped></style>
