<template>
  <div
    class="sticky top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-60 overflow-y-auto border-r border-neutral-50 px-4 py-8"
  >
    <UVerticalNavigation :links="links" />
  </div>
</template>

<script setup lang="ts">
const components = _orderBy(
  [
    {
      label: "Button",
      to: "/components/button",
    },
    {
      label: "Toggle Switch",
      to: "/components/toggle-switch",
    },
    {
      label: "Checkbox",
      to: "/components/checkbox",
    },
    {
      label: "Radio",
      to: "/components/radio",
    },
    {
      label: "Text Field",
      to: "/components/text-field",
    },
    {
      label: "Tooltip/Popover",
      to: "/components/tooltip-popover",
    },
    {
      label: "Badge",
      to: "/components/badge",
    },
    {
      label: "Tabs",
      to: "/components/tabs",
    },
    {
      label: "Form Group",
      to: "/components/form",
    },
    {
      label: "Multi Select Item",
      to: "/components/multi-select-item",
    },
  ],
  "label",
  "asc",
);

const links = [components];
</script>

<style scoped></style>
