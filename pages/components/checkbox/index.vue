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

    <div class="py-10">
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
              <span class="font-semibold">Data attributes</span> add
              <UBadge color="gray" variant="solid">size-*</UBadge> into
              <UBadge color="gray" variant="solid">data-size=""</UBadge> is the
              format of <span class="font-semibold">UIF</span>
              <br />
              default:
              <UBadge color="gray" variant="solid">:data-size="size-16"</UBadge>
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
            :data-size="size"
            :label="label"
            :help="help"
            :color="color"
            :disabled="disabled"
            class="maxxxxx"
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
const help = ref("Help");
const size = ref("size-16");
const optionSize = [
  "size-16",
  "size-24",
  "size-32",
  "size-36",
  "size-44",
  "size-56",
  "size-72",
];
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
