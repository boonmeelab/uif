<template>
  <div>
    <Header title="Checkbox">
      Based on UI Framework
      <a
        href="https://ui.nuxt.com/components/checkbox"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">NuxtUI/Checkbox</UBadge></a
      >
      , design systems by UXD
      <a
        href="https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=2330-1943&t=zQzEyTtomdoknkeV-4"
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

        <UFormGroup label="Size">
          <USelectMenu v-model="size" :options="optionSize" />

          <template #help>
            <p>
              Custom checkbox size by ui config
              <UBadge color="gray" variant="solid">
                <code class="whitespace-pre">{{ size.value }}</code>
              </UBadge>
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

      <div class="mt-6 flex flex-col gap-2">
        <h6 class="font-semibold">Preview</h6>
      </div>

      <section class="mt-6">
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

definePageMeta({
  layout: "components",
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
</script>

<style scoped></style>
