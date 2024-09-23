<template>
  <div class="flex flex-col gap-3 border-b border-neutral-100 pb-6 pt-12">
    <h4 class="font-semibold">
      {{ title }}
    </h4>

    <p v-if="$slots.default" class="text-neutral-500 text-b-2">
      <slot />
    </p>

    <div
      v-if="attributes"
      class="flex w-[320px] flex-col gap-1.5 rounded-6 bg-neutral-50 p-2 text-left"
    >
      <div
        v-for="(item, index) in attributes"
        :key="index"
        class="grid grid-cols-[120px_1fr] gap-2 font-medium text-neutral-400 text-b-3"
      >
        <span>{{ item.name }}</span>
        <ULink
          v-if="item.link"
          :to="item.link"
          :target="
            item.linkOut === undefined || item.linkOut === true
              ? '_blank'
              : '_self'
          "
          inactive-class="hover:text-neutral-700 hover:underline"
          class="w-fit"
        >
          <span class="text-neutral-600">
            {{ item.value }}
          </span>
        </ULink>
        <span v-else class="text-neutral-600">
          {{ item.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const porps = defineProps<{
  title: string;
  attributes?: {
    name: string;
    value: string;
    link?: string;
    linkOut?: boolean;
  }[];
}>();
</script>

<style scoped></style>
