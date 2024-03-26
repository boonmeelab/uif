<script setup></script>

<template>
  <div class="flex min-h-screen flex-col">
    <NavBar />

    <div class="flex-1">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
