<template>
  <nav
    ref="nav"
    class="border-b border-neutral-100 bg-white/80 backdrop-blur-lg screen-padding"
  >
    <div class="container flex h-14 items-center gap-8">
      <NuxtLink to="/">
        <div class="font-semibold text-neutral-900 text-b-1">
          <span class="text-primary">BML</span>-UIF
        </div>
      </NuxtLink>

      <div class="flex flex-1 items-center justify-center gap-6">
        <NuxtLink
          to="/styles"
          class="font-medium text-neutral-600 text-b-2 hover:text-neutral-900"
          >Styles</NuxtLink
        >
        <NuxtLink
          to="/components"
          class="font-medium text-neutral-600 text-b-2 hover:text-neutral-900"
          >Components</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const nav = ref<HTMLElement>();

onMounted(() => {
  document.documentElement.setAttribute(
    "style",
    `--header-height: ${nav.value?.clientHeight}px`,
  );
});
</script>

<style scoped>
.router-link-exact-active {
  @apply font-semibold text-neutral-900;
}
</style>
