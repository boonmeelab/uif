<template>
  <div>
    <Header
      title="Tabs"
      :attributes="[
        {
          name: 'Component type',
          value: 'NuxtUI/Tabs',
          link: 'https://ui.nuxt.com/components/tabs',
        },
        {
          name: 'Design Systems',
          value: 'UXD',
          link: 'https://www.figma.com/design/jQpNsc72oiEP08XREsYobw/BML-UXD?node-id=2434-4043&t=Hqa4spYA5VItecTa-4',
        },
      ]"
    >
      A set of tab panels that are displayed one at a time.
    </Header>

    <div class="pb-20 pt-10">
      <section>
        <div class="font-semibold text-b-1">Default</div>

        <div class="mt-3 flex gap-10 bg-gray-400 px-4 py-10">
          <UTabs
            :ui="ui"
            :items="items1"
            :orientation="orientation"
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
            :fullWidth="fullWidth"
          >
          </UTabs>
        </div>
      </section>

      <section class="mt-16 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>

        <div class="grid grid-cols-4 gap-4">
          <UFormGroup label="Orientation">
            <USelectMenu v-model="orientation" :options="orientationOption" />

            <template #help>
              <p>
                You can change the orientation of the tabs by setting the
                orientation prop to vertical. <br />
                default:
                <UBadge color="gray" variant="solid">horizontal</UBadge>
              </p>
            </template>
          </UFormGroup>

          <UFormGroup>
            <template #label
              >Color <UBadge variant="soft">template</UBadge></template
            >

            <USelectMenu
              v-model="color"
              :options="optionColor"
              @change="onColorChange"
            />

            <template #help>
              <p>
                Change the visual style of the Tabs.<br />
                default: <UBadge color="gray" variant="solid">white</UBadge>
              </p>
            </template>
          </UFormGroup>

          <UFormGroup>
            <template #label
              >Variant <UBadge variant="soft">template</UBadge></template
            >

            <USelectMenu v-model="variant" :options="optionVariant" />

            <template #help>
              default: <UBadge color="gray" variant="solid">solid</UBadge>
            </template>
          </UFormGroup>

          <span />

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

          <UFormGroup>
            <template #label>
              <UCheckbox v-model="textWhite" label="Text White Color" />
            </template>
            <template #help>
              In case we want the text color in the tab to be white when it is
              in the active state.<br />
              <UBadge color="gray" variant="solid">ui</UBadge> props:
              <UBadge color="gray" variant="solid">
                {{ `\{list:\{tab:\{active: "text-white"\}\}\}` }}
              </UBadge>
            </template>
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
            Example: Set the color or variant by importing the colorVariant from
            the template
            <UBadge color="gray" variant="solid"
              >import colorVariant from
              "~/config/ui/tabs/template/colorVariant"</UBadge
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
import { tabs as configTabs } from "~/config/ui/tabs";
import colorVariant from "~/config/ui/tabs/template/colorVariant";

definePageMeta({
  layout: "components",
});

defineRouteRules({
  prerender: true,
});

const textWhite = ref(false);
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
const optionVariant = ["solid", "underline", "line"];
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

const ui = computed(() => {
  switch (textWhite.value) {
    case true:
      return _merge(
        colorVariant({ color: color.value, variant: variant.value }),
        {
          list: { tab: { active: "text-white" } },
        },
      );
    default:
      return colorVariant({ color: color.value, variant: variant.value });
  }
});

const onColorChange = () => {
  textWhite.value = color.value !== "white" && color.value !== "black";
};

const configDefault = `\`\`\`js
// config/ui/tabs/index.ts

export const tabs = ${JSON.stringify(configTabs, null, 2)}`;

const code = computed(() => {
  let code = `
<UTabs :items="items"`;

  let ui = [];
  if (color.value !== "white") ui.push(`color: '${color.value}'`);
  if (variant.value !== "solid") ui.push(`variant: '${variant.value}'`);
  if (ui.length > 0) code += ` :ui="colorVariant({ ${_join(ui, ", ")} })"`;
  // if (color.value !== "white" || variant.value !== "solid") code += ` :ui="ui"`;
  if (orientation.value === "vertical") code += ` orientation="vertical"`;
  if (fullWidth.value) code += ` fullWidth`;

  return `\`\`\`html ${code}/>`;
});

const configTemplate = `\`\`\`js
// config/ui/tabs/template/index.ts

export type Variant = 'solid' | 'underline' | 'line' | string
type Props = { color?: string, variant?: Variant }

export default function ({ color = 'white', variant = 'solid' }: Props = {}) {
  const solid = {
    white: {
      list: {
        background: 'bg-neutral-50',
        marker: {
          background: 'bg-white',
        },
        tab: {
          active: 'text-neutral-900',
          inactive: 'text-neutral-700 hover:text-neutral-900',
        },
      }
    },
    black: {
      list: {
        background: 'bg-neutral-700',
        marker: {
          background: 'bg-neutral-900',
        },
        tab: {
          active: 'text-white',
          inactive: 'text-neutral-50 hover:text-white',
        },
      }
    },
    custom: {
      list: {
        marker: {
          background: \`bg-\${color}-500\`,
        },
        tab: {
          inactive: \`hover:text-\${color}\`,
        },
      }
    }
  }

  const defaultLineUnderline = {
    list: {
      background: 'bg-transparent',
      rounded: 'rounded-none',
      padding: 'p-0',
      marker: {
        wrapper: 'z-10',
        base: 'h-1 mt-auto',
        rounded: 'rounded-none',
        shadow: 'shadow-none',
      },
      tab: {
        base: '',
        rounded: 'rounded-none',
        active: '',
        inactive: '',
      }
    }
  }

  const line = {
    white: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: 'bg-white'
        },
        tab: {
          base: 'border-b',
          active: 'text-white',
          inactive: 'text-neutral-50 hover:text-white'
        }
      }
    }),
    black: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: 'bg-neutral-900'
        },
        tab: {
          base: 'border-b',
          active: 'text-neutral-900',
          inactive: 'text-neutral-800 hover:text-neutral-900'
        }
      }
    }),
    custom: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: \`bg-\${color}-500\`
        },
        tab: {
          base: 'border-b',
          active: \`text-\${color}-500\`,
          inactive: \`hover:text-\${color}\`
        }
      }
    })
  }

  const underline = {
    white: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: 'bg-white'
        },
        tab: {
          active: 'text-white',
          inactive: 'text-neutral-50 hover:text-white'
        }
      }
    }),
    black: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: 'bg-neutral-900'
        },
        tab: {
          active: 'text-neutral-900',
          inactive: 'text-neutral-800 hover:text-neutral-900'
        }
      }
    }),
    custom: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: \`bg-\${color}-500\`
        },
        tab: {
          active: \`text-\${color}-500\`,
          inactive: \`hover:text-\${color}\`
        }
      }
    })
  }

  const key = color === 'white' || color === 'black' ? \`\${variant}.${color}\` : \`\${variant}.custom\`

  return _get({ solid, line, underline }, key, solid.white)
}`;
</script>

<style scoped></style>
