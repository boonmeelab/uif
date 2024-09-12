<template>
  <UAlert
    color="neutral"
    variant="soft"
    title=" If you want to use a template style with additional customization"
  >
    <template #description>
      <p class="mb-4">
        you can do so by using a merge object in javascript or lodash.
      </p>

      <CodeBlock
        :content="`\`\`\`js 
_merge(...template, { list: { tab: { active: 'text-white' } } })`"
      />
    </template>
  </UAlert>
</template>
