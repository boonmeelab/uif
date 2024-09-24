<script setup></script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-[100]">
      <NavBar />
    </header>

    <div class="flex flex-1">
      <Aside />

      <main class="flex-1 px-6">
        <slot />
      </main>
    </div>

    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
