<template>
  <div>
    <Header title="Tooltip/Popover">
      Display a non-modal dialog that floats around a trigger element. Based on
      UI Framework
      <a
        href="https://ui.nuxt.com/components/popover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">NuxtUI/Popover</UBadge></a
      >
      , design systems by UXD
      <a
        href="https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=1284-26272&t=PZTqOxG9xRT4tvaQ-4"
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
        <UFormGroup label="Mode">
          <template #description>
            Use the mode prop to control the behavior tooltip <br />
            default: <UBadge color="gray" variant="solid">hover</UBadge>
          </template>
          <URadioGroup
            v-model="mode"
            :options="[
              {
                value: 'hover',
                label: 'Hover',
              },
              {
                value: 'click',
                label: 'Click',
              },
            ]"
          />
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="arrow" label="Arrow" @change="changeArrow">
              <template #help>
                Show arrow tooltip, Cannot be used with
                <UBadge color="gray" variant="solid">hover</UBadge> mode
              </template>
            </UCheckbox>
          </template>
        </UFormGroup>

        <UFormGroup>
          <template #label>
            <UCheckbox v-model="overlay" label="Overlay" />
          </template>
        </UFormGroup>

        <div />
        <div />

        <UFormGroup label="Color">
          <USelectMenu v-model="color" :options="optionColor" />

          <template #help>
            <p>
              Change background color of the Checkbox Tooltip. <br />
              default: <UBadge color="gray" variant="solid">black</UBadge>
            </p>
          </template>
        </UFormGroup>

        <UFormGroup label="Placement">
          <USelectMenu v-model="placement" :options="optionPlacement" />

          <template #help>
            <p>default: <UBadge color="gray" variant="solid">bottom</UBadge></p>
          </template>
        </UFormGroup>

        <UFormGroup label="Offset">
          <UInput v-model="offset" placeholder="0" type="number">
            <template #trailing>
              <span class="text-xs text-neutral-500">PX</span>
            </template>
          </UInput>
        </UFormGroup>
      </section>

      <div class="mt-6 flex flex-col gap-2">
        <h6 class="font-semibold">Preview</h6>
      </div>

      <section class="mt-6">
        <div class="mt-3 flex flex-col items-center justify-center gap-20">
          <div class="flex items-center gap-3">
            <!-- :ui="color.value" -->
            <UPopover
              v-if="renderUi"
              :mode="mode"
              :overlay="overlay"
              :popper="{ arrow, placement, offsetDistance: offset }"
            >
              <Icon
                name="i-heroicons-information-circle"
                size="22px"
                class="text-primary"
              />
              <template #panel> Tooltip </template>
            </UPopover>

            <span> Hover or Click over the “i” </span>
          </div>

          <UPopover
            v-if="renderUi"
            :mode="mode"
            :overlay="overlay"
            :ui="color.value"
            :popper="{ arrow, placement, offsetDistance: offset }"
          >
            <UButton label="Hover or Click" />

            <template #panel>
              <div class="text-b-1">Tooltip Title</div>
              <p class="mt-2">
                Supporting text Body text string goes here psum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>

              <div class="mt-4 flex justify-between">
                <UButton label="Button" size="24" variant="link">Learn</UButton>

                <UButton label="Button" color="white" size="24" />
              </div>
            </template>
          </UPopover>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { white, black } from "~/config/ui/popover/template/color";

definePageMeta({
  layout: "components",
});

const mode = ref("hover");
const overlay = ref(false);
const arrow = ref(false);
const offset = ref(6);
const renderUi = ref(true);
const optionColor = [
  {
    label: "white",
    value: white,
  },
  {
    label: "black",
    value: black,
  },
];
const color = ref(optionColor[0]);
const placement = ref("bottom");
const optionPlacement = ref([
  "auto",
  "auto-start",
  "auto-end",
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "right",
  "right-start",
  "right-end",
  "left",
  "left-start",
  "left-end",
]);

watch([placement, offset, arrow], () => {
  renderUi.value = false;

  setTimeout(() => {
    renderUi.value = true;
  }, 0);
});

watch(mode, (val) => {
  if (val === "hover" && arrow.value) {
    arrow.value = false;
  }
});

const changeArrow = () => {
  if (arrow.value) {
    mode.value = "click";
  } else {
    mode.value = "hover";
  }
};
</script>

<style scoped></style>
