<template>
  <div>
    <Header
      title="Toggle Switch"
      :attributes="[
        {
          name: 'Component type',
          value: 'NuxtUI/Toggle',
          link: 'https://ui.nuxt.com/components/toggle',
        },
        {
          name: 'Design Systems',
          value: 'UXD',
          link: 'https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=2314-22213&t=zQzEyTtomdoknkeV-4',
        },
      ]"
    >
    </Header>

    <div class="pb-20 pt-10">
      <section>
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
              size="24"
              variant="link"
              to="https://icones.js.org/"
              target="_blank"
            />
            by setting the
            <UBadge color="gray" variant="solid">on-icon</UBadge> and
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

      <section class="mt-16 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>

        <div class="grid grid-cols-5 gap-4">
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
        </div>
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Usage</h5>

        <CodeBlock :content="code" />
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Config</h5>

        <CodeBlock :content="config" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ToggleSize } from "#ui/types";
import { toggle as configToggle } from "~/config/ui/toggle";

definePageMeta({
  layout: "components",
});

const toggle_1 = ref(false);
const toggle_2 = ref(false);
const disabled = ref(false);
const loading = ref(false);
const size = ref<ToggleSize>("24");
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

const config = `\`\`\`js
// config/ui/toggle/index.ts

export const toggle = ${JSON.stringify(configToggle, null, 2)}`;

const code = computed(() => {
  let code = `
<UToggle
  v-model="toggle_2"
  color="${color.value}"
  size="${size.value}"
  on-icon="i-heroicons-check-20-solid"
  off-icon="i-heroicons-x-mark-20-solid"`;

  if (disabled.value) code += `\n disabled`;

  return `\`\`\`html ${code}/>`;
});
</script>

<style scoped></style>
