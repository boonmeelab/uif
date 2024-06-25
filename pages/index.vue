<template>
  <div class="py-12 screen-padding">
    <div class="container flex flex-col gap-14">
      <StylesColorPalettes />
      <hr />
      <StylesTypography />
      <hr />
      <StylesScreenSize />
      <hr />
      <StylesScreenPadding />
      <!-- <hr />
      <StylesContainer /> -->
      <hr />
      <StylesBorderRadius />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  path: "/",
  alias: "/styles",
});
</script>
