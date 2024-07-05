<script setup></script>

<template>
  <div class="flex min-h-screen flex-col">
    <NavBar />

    <div class="flex flex-1">
      <Aside />

      <div class="flex-1 px-6">
        <slot />
      </div>
    </div>

    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
