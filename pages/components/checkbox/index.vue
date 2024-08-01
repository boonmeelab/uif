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
                <code class="whitespace-pre">{{ ui }}</code>
              </UBadge>
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
        <div class="mt-3 flex gap-10">
          <UCheckbox
            :ui="ui"
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
definePageMeta({
  layout: "components",
});

const disabled = ref(false);
const label = ref("Label");
const help = ref("Description help");
const size = ref("16");
const optionSize = ["16", "24", "32", "36", "44", "56", "72"];
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

const ui = computed(() => {
  switch (size.value) {
    case "16":
      return {
        base: "size-4 ring-0",
        rounded: "rounded-4",
        label: "text-sm",
        help: "text-xs",
      };
    case "24":
      return {
        base: "size-6",
        rounded: "rounded-6",
        label: "text-base",
        help: "text-sm",
      };
    case "32":
      return {
        base: "size-8",
        rounded: "rounded-6",
        label: "text-base",
        help: "text-sm",
      };
    case "36":
      return {
        base: "size-9",
        rounded: "rounded-8",
        label: "text-xl",
        help: "text-base",
      };
    case "44":
      return {
        base: "size-11",
        rounded: "rounded-8",
        label: "text-2xl",
        help: "text-base",
      };
    case "56":
      return {
        base: "size-14",
        rounded: "rounded-8",
        label: "text-[34px]",
        help: "text-2xl",
      };
    case "72":
      return {
        base: "size-[72px]",
        rounded: "rounded-8",
        label: "text-[60px]",
        help: "text-2xl",
      };
  }
});
</script>

<style scoped></style>
