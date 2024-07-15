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
        <div class="font-semibold text-b-1">Default</div>

        <div class="mt-3 flex gap-10">
          <URadio
            :label="label"
            :help="help"
            :data-size="size"
            :color="color"
            :disabled="disabled"
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
            :data-size="size"
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

const selected = ref("");
const disabled = ref(false);
const label = ref("Label");
const help = ref("Description help");
const legend = ref("Choose something");
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

const options = [
  {
    value: "email",
    label: "Email",
    help: "Please choose one",
  },
  {
    value: "sms",
    label: "Phone (SMS)",
    help: "Please choose one",
  },
  {
    value: "push",
    label: "Push notification",
    help: "Please choose one",
  },
];
</script>

<style scoped></style>
