<template>
  <div class="flex flex-col gap-2 border-b border-neutral-100 pb-6 pt-12">
    <h4 class="font-semibold">{{ title }}</h4>
    <p v-if="$slots.default" class="text-neutral-600 text-b-1">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
const porps = defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
