<template>
  <div>
    <Header
      title="Tooltip/Popover"
      :attributes="[
        {
          name: 'Component type',
          value: 'NuxtUI/Popover',
          link: 'https://ui.nuxt.com/components/popover',
        },
        {
          name: 'Design Systems',
          value: 'UXD',
          link: 'https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=1284-26272&t=PZTqOxG9xRT4tvaQ-4',
        },
      ]"
    >
      Display a non-modal dialog that floats around a trigger element.
    </Header>

    <div class="pb-20 pt-10">
      <section class="flex flex-col items-center justify-center gap-20">
        <div class="flex items-center gap-3">
          <!-- :ui="color.value" -->
          <UPopover
            v-if="renderUi"
            :mode="mode"
            :overlay="overlay"
            :popper="{ arrow, placement, offsetDistance: offset }"
            :ui="color.value"
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
      </section>

      <section class="mt-16 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>

        <div class="grid grid-cols-5 gap-4">
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

          <UFormGroup>
            <template #label>
              Color
              <UBadge variant="soft">template</UBadge></template
            >
            <USelectMenu v-model="color" :options="optionColor" />

            <template #help>
              <p>
                default: <UBadge color="gray" variant="solid">black</UBadge>
              </p>
            </template>
          </UFormGroup>

          <UFormGroup label="Placement">
            <USelectMenu v-model="placement" :options="optionPlacement" />

            <template #help>
              <p>
                default: <UBadge color="gray" variant="solid">bottom</UBadge>
              </p>
            </template>
          </UFormGroup>

          <UFormGroup label="Offset">
            <UInput v-model="offset" placeholder="0" type="number">
              <template #trailing>
                <span class="text-xs text-neutral-500">PX</span>
              </template>
            </UInput>
          </UFormGroup>
        </div>
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Usage</h5>

        <CodeBlock :content="code" />

        <div>
          <div class="font-semibold text-neutral-800 text-b-1">
            Custom ui props by template?
          </div>
          <p class="text-neutral-700 text-b-1">
            You can customize the whole template by using the ui prop.<br />
            Example: Set the color by importing the color from the template
            <UBadge color="gray" variant="solid"
              >import { white, black } from
              "~/config/ui/popover/template/color"</UBadge
            >
          </p>
        </div>

        <AlertUseTemplate />
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Config</h5>

        <CodeBlock :content="configDefault" />

        <div class="flex flex-col gap-2">
          <div class="font-semibold text-h6">Template</div>
          <CodeBlock :content="configTemplate" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { white, black } from "~/config/ui/popover/template/color";
import { popover as configPopover } from "~/config/ui/popover";

definePageMeta({
  layout: "components",
});

defineRouteRules({
  prerender: true,
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

const configDefault = `\`\`\`js
// config/ui/popover/index.ts

export const popover = ${JSON.stringify(configPopover, null, 2)}`;

const configTemplate = `\`\`\`js
// config/ui/popover/template/color.ts

export const white = ${JSON.stringify(white, null, 2)}
export const black = ${JSON.stringify(black, null, 2)}
`;

const code = computed(() => {
  let code = `
<UPopover mode="${mode.value}"`;

  let popper = [];
  if (arrow.value) popper.push("arrow: true");
  if (placement.value !== "bottom")
    popper.push(`placement: '${placement.value}'`);
  if (offset.value !== 6) popper.push(`offsetDistance: ${offset.value}`);
  if (popper.length > 0) code += ` :popper="{ ${_join(popper, ", ")} }"`;
  if (color.value.label !== "white") code += ` :ui="${color.value.label}"`;
  if (overlay.value) code += ` overlay`;

  return `\`\`\`html ${code}>
  <Icon name="i-heroicons-information-circle" size="22px" class="text-primary"/>
  <template #panel> Tooltip </template>
</UPopover>`;
});
</script>

<style scoped></style>
