<script setup></script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-[100]">
      <NavBar />
    </header>

    <main class="flex-1">
      <slot />
    </main>
  </div>

  <Footer />
</template>

<style lang="scss" scoped></style>
