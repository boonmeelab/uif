<template>
  <div>
    <Header title="Toggle Switch">
      Based on UI Framework
      <a
        href="https://ui.nuxt.com/components/toggle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">NuxtUI/Toggle</UBadge></a
      >
      , design systems by UXD
      <a
        href="https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=2314-22213&t=zQzEyTtomdoknkeV-4"
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
        <UFormGroup label="Size">
          <USelectMenu v-model="size" :options="optionSize" />

          <template #help>
            <p>
              Change the size of the Toggle Switch. The unit is
              <UBadge color="gray" variant="solid">px</UBadge> <br />
              default: <UBadge color="gray" variant="solid">24px</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Color">
          <USelectMenu v-model="color" :options="optionColor" />

          <template #help>
            <p>
              Change the visual style of the Toggle Switch. <br />
              default: <UBadge color="gray" variant="solid">primary</UBadge>
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
              <span class="font-semibold">disable</span> the Toggle Switch.
              <Icon name="i-svg-spinners-ring-resize"></Icon> need to install
              <UBadge color="gray" variant="solid"
                >@iconify-json/svg-spinners</UBadge
              >
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
          <UToggle
            v-model="toggle_1"
            :color="color"
            :size="size"
            :loading="loading"
            :disabled="disabled"
          />
        </div>
      </section>

      <section class="mt-6">
        <div class="font-semibold text-b-1">Icon</div>
        <div class="mt-2 flex flex-col gap-2 text-neutral-700 text-b-2">
          <p>
            Use any icon from
            <UButton
              label="Iconify"
              size="24px"
              variant="link"
              to="https://icones.js.org/"
              target="_blank"
            />
            by setting the
            <UBadge color="gray" variant="solid">on-icon and</UBadge>
            <UBadge color="gray" variant="solid">off-icon</UBadge> props by
            using this pattern:
            <UBadge color="gray" variant="solid"
              >i-{collection_name}-{icon_name}</UBadge
            >
            or change it globally in
            <UBadge color="gray" variant="solid"
              >ui.toggle.default.onIcon</UBadge
            >
            and
            <UBadge color="gray" variant="solid"
              >ui.toggle.default.offIcon</UBadge
            >.
          </p>
        </div>

        <div class="mt-3 flex gap-10">
          <UToggle
            v-model="toggle_2"
            on-icon="i-heroicons-check-20-solid"
            off-icon="i-heroicons-x-mark-20-solid"
            :color="color"
            :size="size"
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

const toggle_1 = ref(false);
const toggle_2 = ref(false);
const disabled = ref(false);
const loading = ref(false);
const size = ref("24");
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
</script>

<style scoped></style>
