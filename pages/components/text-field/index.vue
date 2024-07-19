<template>
  <div>
    <Header title="Text Field">
      Based on UI Framework
      <a
        href="https://ui.nuxt.com/components/input"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">NuxtUI/Input</UBadge></a
      >
      , design systems by UXD
      <a
        href="https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=2500-33895&t=PZTqOxG9xRT4tvaQ-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">Figma</UBadge></a
      >
    </Header>

    <div class="pb- pb-20 pt-10">
      <div class="mb-3 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>
      </div>

      <section class="grid grid-cols-5 gap-4">
        <UFormGroup label="Placeholder">
          <UInput v-model="placeholder" />
        </UFormGroup>

        <UFormGroup label="Size">
          <USelectMenu v-model="size" :options="optionSize" />

          <template #help>
            <p>
              Change the size of the Input. The unit is
              <UBadge color="gray" variant="solid">px</UBadge> <br />
              default: <UBadge color="gray" variant="solid">32px</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Color">
          <USelectMenu v-model="color" :options="optionColor" />

          <template #help>
            <p>
              Change the visual style of the Input. <br />
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
              Change the visual style of the Input. <br />
              default: <UBadge color="gray" variant="solid">outline</UBadge>
            </p>
          </template>
        </UFormGroup>

        <div />

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="loading" label="loading" />
          </template>
          <template #help>
            Use the <UBadge color="gray" variant="solid">loading</UBadge> prop
            to show a loading icon and disable the Input. <br />
            <Icon name="i-svg-spinners-90-ring-with-bg"></Icon> install
            <UBadge color="gray" variant="solid"
              >@iconify-json/svg-spinners</UBadge
            >
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="trailing" name="Trailing" label="trailing" />
          </template>

          <template #help>
            <p>
              set the icon position. default:
              <UBadge color="gray" variant="solid">leading</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup help="remove the padding of the Input.">
          <template #label>
            <UCheckbox v-model="padded" name="Padded" label="padded" />
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
          <UInput
            v-model="inputValue"
            :size="size"
            :trailing="trailing"
            :color="color"
            :variant="variant"
            :placeholder="placeholder"
            :disabled="disabled"
            :padded="padded"
            :loading="loading"
          >
          </UInput>

          <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            v-model="inputValue"
            :size="size"
            :trailing="trailing"
            :color="color"
            :variant="variant"
            :placeholder="placeholder"
            :disabled="disabled"
            :padded="padded"
            :loading="loading"
          />
        </div>
      </section>

      <section class="mt-6">
        <div>
          <div class="font-semibold text-b-1">Leading</div>
          <div class="mt-2 flex flex-col gap-2 text-neutral-700 text-b-2">
            <p>
              Use the
              <UBadge color="gray" variant="solid">#leading</UBadge> slot to set
              the content of the leading icon.
            </p>
          </div>
        </div>

        <div class="mt-3 flex gap-10">
          <UInput
            v-model="inputValue2"
            :size="size"
            :trailing="trailing"
            :color="color"
            :variant="variant"
            :placeholder="placeholder"
            :disabled="disabled"
            :padded="padded"
            :loading="loading"
          >
            <template #leading>
              <UAvatar
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                size="2xs"
              />
            </template>
          </UInput>
        </div>
      </section>

      <section class="mt-6">
        <div>
          <div class="font-semibold text-b-1">Trailing</div>
          <div class="mt-2 flex flex-col gap-2 text-neutral-700 text-b-2">
            <p>
              Use the
              <UBadge color="gray" variant="solid">#trailing</UBadge> slot to
              set the content of the trailing icon.
            </p>
          </div>
        </div>

        <div class="mt-3 flex gap-10">
          <UInput
            v-model="inputValue2"
            :size="size"
            :trailing="trailing"
            :color="color"
            :variant="variant"
            :placeholder="placeholder"
            :disabled="disabled"
            :padded="padded"
            :loading="loading"
          >
            <template #trailing>
              <span class="text-xs text-gray-500 dark:text-gray-400">EUR</span>
            </template>
          </UInput>
        </div>
      </section>

      <section class="mt-6">
        <div>
          <div class="font-semibold text-b-1">Action Button</div>
          <div class="mt-2 flex flex-col gap-2 text-neutral-700 text-b-2">
            <p>
              You can for example create a clearable Input by injecting a Button
              in the trailing slot that displays when some text is entered.
            </p>
          </div>

          <UAlert color="neutral" variant="soft" class="mt-4">
            <template #description>
              As leading and trailing icons are wrapped around a
              <UBadge color="gray" variant="solid">pointer-events-none</UBadge>
              class, if you inject a clickable element in the slot, you need to
              remove this class to make it clickable by adding
              <UBadge color="gray" variant="solid"
                >:ui="{ icon: { trailing: { pointer: '' } } }"</UBadge
              >
              to the Input.
            </template>
          </UAlert>
        </div>

        <div class="mt-6 flex gap-10">
          <UInput
            v-model="inputValue3"
            :size="size"
            :trailing="trailing"
            :color="color"
            :variant="variant"
            :placeholder="placeholder"
            :disabled="disabled"
            :padded="padded"
            :loading="loading"
            icon="i-heroicons-magnifying-glass-20-solid"
            :ui="{ icon: { trailing: { pointer: '' } } }"
          >
            <template #trailing>
              <UButton
                v-show="inputValue3 !== ''"
                color="gray"
                variant="icon"
                icon="i-heroicons-x-mark-20-solid"
                :padded="false"
                @click="inputValue3 = ''"
              />
            </template>
          </UInput>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "components",
});

const inputValue = ref("");
const inputValue2 = ref("");
const inputValue3 = ref("");
const trailing = ref(false);
const placeholder = ref("Search...");
const loading = ref(false);
const disabled = ref(false);
const padded = ref(true);
const size = ref("32");
const optionSize = ["24", "28", "32", "36", "40", "44"];
const color = ref("white");
const optionColor = [
  "white",
  "gray",
  "neutral",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
];
const variant = ref("outline");
const optionVariant = [
  {
    label: "outline (uxd, nuxtUi)",
    value: "outline",
  },
  {
    label: "none (nuxtUi)",
    value: "none",
  },
  {
    label: "filled (uxd)",
    value: "filled",
  },
  {
    label: "underline (uxd)",
    value: "underline",
  },
];
</script>

<style scoped></style>
