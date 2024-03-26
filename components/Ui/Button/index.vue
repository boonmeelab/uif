<script setup lang="ts">
import type { Button } from "#ui/types";

export interface Props extends Button {}

const props = withDefaults(defineProps<Props>(), {
  // color: "primary",
  label: "Button",
});

const { mc } = useNuxtApp();

const ui = /*ui*/ {
  // padding: "px-4",
};
</script>

<template>
  <UButton :ui="ui" :label="props.label" :color="props.color">
    <slot />
  </UButton>
</template>
