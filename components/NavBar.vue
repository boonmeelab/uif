<template>
  <div
    class="sticky top-0 z-[100] border-b border-neutral-100 bg-white/80 backdrop-blur-lg screen-padding"
  >
    <div class="container flex h-14 items-center gap-8">
      <NuxtLink to="/">
        <div class="text-b-1 font-semibold text-neutral-900">
          <span class="text-primary">BML</span>-UIF
        </div>
      </NuxtLink>

      <div class="flex flex-1 items-center justify-center gap-6">
        <NuxtLink
          to="/styles"
          class="text-b-2 font-medium text-neutral-600 hover:text-neutral-900"
          >Styles</NuxtLink
        >
        <NuxtLink
          to="/components"
          class="text-b-2 font-medium text-neutral-600 hover:text-neutral-900"
          >Components</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-exact-active {
  @apply font-semibold text-neutral-900;
}
</style>
