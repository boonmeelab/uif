<template>
  <v-md-editor v-model="props.content" mode="preview"></v-md-editor>
</template>

<script setup lang="ts">
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";

interface Props {
  content: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.v-md-editor {
  .vuepress-markdown-body {
    padding: 0;
  }
  .v-md-prism-js {
    margin: 0;
  }
}
</style>
