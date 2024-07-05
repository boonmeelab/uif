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
  ],
  "label",
  "asc",
);

const links = [components];
</script>

<style scoped></style>
