<template>
  <div>
    <Header title="Multi Select Item">
      Multi Select Item is a component that groups
      <NuxtLink to="/components/button">
        <UBadge variant="subtle">button</UBadge>
      </NuxtLink>
      to display as options for storing multiple selection values. It allows
      selecting more than one value and is suitable for use as a filter tag.
    </Header>

    <div class="pb-20 pt-10">
      <div class="mb-3 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>
      </div>

      <section class="grid grid-cols-5 gap-4">
        <UFormGroup label="Class Name" class="col-span-2">
          <UInput v-model="classWrapper" placeholder="flex flex-wrap gap-2" />

          <template #help> Custom class wrapper item Tailwind </template>
        </UFormGroup>

        <UFormGroup label="Limit Select">
          <UInput v-model="limitSelect" type="number" placeholder="0" />
          <template #help> Set limitations of select item </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="disabled" label="Disabled All" />
          </template>
        </UFormGroup>
      </section>

      <div class="mb-3 mt-5 flex flex-col gap-3">
        <div class="font-semibold text-b-1">Initial state of Button</div>
      </div>

      <section class="grid grid-cols-5 gap-4">
        <UFormGroup label="Size">
          <USelectMenu v-model="size" :options="optionSize" />

          <template #help>
            <p>
              Change the size of the Button.<br />
              default: <UBadge color="gray" variant="solid">32</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Color">
          <USelectMenu v-model="colorStyle" :options="optionColor" />

          <template #help>
            <p>
              Change the visual style of the Button. <br />
              default: <UBadge color="gray" variant="solid">primary</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Variant">
          <USelectMenu
            v-model="variantStyle"
            :options="optionVariant"
            value-attribute="value"
          />

          <template #help>
            <p>
              Change the visual style of the Button. <br />
              default: <UBadge color="gray" variant="solid">outline</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="rounded" label="Rounded" />
          </template>
        </UFormGroup>
      </section>

      <div class="mb-3 mt-5 flex flex-col gap-3">
        <div class="font-semibold text-b-1">
          Active state when a button is selected
        </div>
      </div>

      <section class="grid grid-cols-5 gap-4">
        <UFormGroup label="Color">
          <USelectMenu v-model="colorActive" :options="optionColor" />

          <template #help>
            <p>
              Change the visual style of the Button. <br />
              default: <UBadge color="gray" variant="solid">primary</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Variant">
          <USelectMenu
            v-model="variantActive"
            :options="optionVariant"
            value-attribute="value"
          />

          <template #help>
            <p>
              Change the visual style of the Button. <br />
              default: <UBadge color="gray" variant="solid">solid</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Class Name" class="col-span-2">
          <UInput v-model="classActive" placeholder="Ex. bg-black" />

          <template #help>
            Custom button class on active state Tailwind</template
          >
        </UFormGroup>
      </section>

      <div class="mt-6 flex flex-col gap-2">
        <h6 class="font-semibold">Preview</h6>
      </div>

      <section class="mt-6">
        <div class="font-semibold text-b-1">Default</div>

        <div class="mt-3 flex gap-10">
          <MultiSelectItem
            v-model="select1"
            :options="optionsDefault"
            :limitSelect="limitSelect"
            :rounded="rounded"
            :size="size"
            :color="colorStyle"
            :variant="variantStyle"
            :colorActive="colorActive"
            :variantActive="variantActive"
            :class="classWrapper"
            :classActive="classActive"
            :disabled="disabled"
          />
        </div>
      </section>

      <section class="mt-6">
        <div class="font-semibold text-b-1">Item Disabled</div>

        <div class="mt-3 flex gap-10">
          <MultiSelectItem
            v-model="select2"
            :options="optionsDisabled"
            :limitSelect="limitSelect"
            :rounded="rounded"
            :size="size"
            :color="colorStyle"
            :variant="variantStyle"
            :colorActive="colorActive"
            :variantActive="variantActive"
            :class="classWrapper"
            :classActive="classActive"
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

const limitSelect = ref<number>();
const disabled = ref(false);

const select1 = ref([]);
const select2 = ref(["bug"]);
const optionsDefault = [
  {
    label: "bug",
    value: "bug",
  },
  {
    label: "documentation",
    value: "documentation",
  },
  {
    label: "duplicate",
    value: "duplicate",
  },
  {
    label: "enhancement",
    value: "enhancement",
  },
  {
    label: "good first issue",
    value: "good first issue",
  },
  {
    label: "help wanted",
    value: "help wanted",
  },
];
const optionsDisabled = [
  {
    label: "bug",
    value: "bug",
  },
  {
    label: "documentation",
    value: "documentation",
  },
  {
    label: "duplicate",
    value: "duplicate",
  },
  {
    label: "enhancement",
    value: "enhancement",
  },
  {
    label: "good first issue",
    value: "good first issue",
    disabled: true,
  },
  {
    label: "help wanted",
    value: "help wanted",
    disabled: true,
  },
];

const rounded = ref(false);
const classWrapper = ref("");
const classActive = ref("");
const colorStyle = ref("primary");
const colorActive = ref("primary");
const optionColor = [
  "neutral",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
];
const variantStyle = ref("outline");
const variantActive = ref("solid");
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
];
const size = ref("32");
const optionSize = ["24", "32", "36", "44", "56", "72"];
</script>

<style scoped></style>
