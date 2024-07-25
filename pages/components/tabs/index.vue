<template>
  <div>
    <Header title="Tabs">
      Based on UI Framework
      <a
        href="https://ui.nuxt.com/components/tabs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">NuxtUI/Tabs</UBadge></a
      >
    </Header>

    <div class="pb- pb-20 pt-10">
      <div class="mb-3 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>
      </div>

      <section class="grid grid-cols-4 gap-4">
        <UFormGroup label="Orientation">
          <USelectMenu v-model="orientation" :options="orientationOption" />

          <template #help>
            <p>
              You can change the orientation of the tabs by setting the
              orientation prop to vertical. <br />
              default: <UBadge color="gray" variant="solid">horizontal</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Color">
          <USelectMenu v-model="color" :options="optionColor" />

          <template #help>
            <p>
              Change the visual style of the Tabs. <br />
              default: <UBadge color="gray" variant="solid">white</UBadge>
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
              Add this
              <UBadge color="gray" variant="solid">variant="solid"</UBadge>
              to the component or if not enter any values, it will be equal to
              <UBadge color="gray" variant="solid">solid</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="fullWidth" label="Full Width" />
          </template>
          <template #help>
            The tab width spans the maximum width according to the size of the
            container. Add attribute
            <UBadge color="gray" variant="solid">fullWidth</UBadge> to the
            component
          </template>
        </UFormGroup>
      </section>

      <div class="mt-6 flex flex-col gap-2">
        <h6 class="font-semibold">Preview</h6>
      </div>

      <section class="mt-6">
        <div class="font-semibold text-b-1">Default</div>

        <div class="mt-3 flex gap-10 bg-gray-400 px-4 py-10">
          <UTabs
            :ui="ui"
            :items="items1"
            :orientation="orientation"
            :color="color"
            :variant="variant"
            :fullWidth="fullWidth"
          />
        </div>
      </section>

      <section class="mt-6">
        <div class="font-semibold text-b-1">Icon</div>

        <div class="mt-3 flex gap-10 bg-gray-400 px-4 py-10">
          <UTabs
            :ui="ui"
            :items="items2"
            :orientation="orientation"
            :color="color"
            :variant="variant"
            :fullWidth="fullWidth"
          >
            <template #default="{ item, index, selected }">
              <div class="relative flex items-center gap-2 truncate">
                <UIcon :name="item.icon" class="h-4 w-4 flex-shrink-0" />

                <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
              </div>
            </template>
          </UTabs>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "components",
});

const fullWidth = ref(false);
const orientation = ref("horizontal");
const orientationOption = ["horizontal", "vertical"];
const color = ref("white");
const optionColor = [
  "white",
  "black",
  "neutral",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
];
const variant = ref("solid");
const optionVariant = [
  {
    label: "solid",
    value: "solid",
  },
  {
    label: "underline",
    value: "underline",
  },
  {
    label: "line",
    value: "line",
  },
];
const items1 = [
  {
    label: "Tab1",
    content: "This is the content shown for Tab1",
  },
  {
    label: "Tab2",
    content: "And, this is the content for Tab2",
  },
  {
    label: "Tab3",
    content: "Finally, this is the content for Tab3",
  },
];
const items2 = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    content: "This is the content shown for Tab1",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    content: "And, this is the content for Tab2",
  },
  {
    label: "Theming",
    icon: "i-heroicons-eye-dropper",
    content: "Finally, this is the content for Tab3",
  },
];

const ui = /*ui*/ computed(() => {
  return color.value !== "white" && color.value !== "black"
    ? {
        list: {
          marker: {
            background: `bg-${color.value}-500`,
          },
          tab: {
            active: { [`text-${color.value}-500`]: variant.value !== "solid" },
            inactive: `hover:text-${color.value}-500`,
          },
        },
      }
    : {};
});
</script>

<style scoped></style>
