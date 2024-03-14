<template>
  <div class="grid grid-cols-12 gap-x-8 gap-y-12">
    <div class="sticky top-8 col-span-3 flex h-fit flex-col gap-5 pb-28">
      <h4 class="font-bold uppercase">Colors</h4>

      <div class="w-fit max-w-full shadow-md shadow-ciPrimary-100">
        <div
          class="aspect-1 w-[100px] rounded border-2 border-ciPrimary-400 p-3"
        >
          <div
            class="text-b-1 font-bold uppercase text-ciPrimary opacity-50"
            style="writing-mode: vertical-lr; text-orientation: upright"
          >
            paintone
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-8 flex flex-col gap-4 text-neutral-900">
      <div v-for="item in colorPalettes" :key="item.id">
        <div class="text-b-1 font-bold capitalize">
          {{ item.label }}
        </div>

        <div class="mt-1 flex flex-wrap gap-[6px]">
          <div>
            <div
              :class="[
                'h-10 w-20 rounded-md',
                { 'border border-neutral-100': item.default },
                item.default,
              ]"
            />

            <div v-if="item.default" class="mt-1">
              <div class="text-xs font-semibold text-neutral-800">
                {{
                  `Default${Object.keys(item.colors).length > 0 ? `(500)` : ""}`
                }}
              </div>
            </div>
          </div>

          <div v-for="(val, key, index) in item.colors">
            <div
              class="h-10 w-14 rounded-md border border-neutral-100"
              :class="val"
            />
            <div class="mt-1">
              <div class="text-xs">
                {{ key }}
              </div>
              <div class="text-[10px] text-neutral-500">
                {{ themeColors[item.id][key] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tailwindConfig from "~/tailwind.config";

const themeColors = tailwindConfig.theme.extend.colors;

const colorPalettes = [
  {
    id: "neutral",
    label: "neutral",
    default: "",
    colors: {
      50: "bg-neutral-50",
      100: "bg-neutral-100",
      200: "bg-neutral-200",
      300: "bg-neutral-300",
      400: "bg-neutral-400",
      500: "bg-neutral-500",
      600: "bg-neutral-600",
      700: "bg-neutral-700",
      800: "bg-neutral-800",
      900: "bg-neutral-900",
    },
  },
  {
    id: "ciPrimary",
    label: "primary",
    default: "bg-ciPrimary",
    colors: {
      50: "bg-ciPrimary-50",
      100: "bg-ciPrimary-100",
      200: "bg-ciPrimary-200",
      300: "bg-ciPrimary-300",
      400: "bg-ciPrimary-400",
      500: "bg-ciPrimary-500",
      600: "bg-ciPrimary-600",
      700: "bg-ciPrimary-700",
      800: "bg-ciPrimary-800",
      900: "bg-ciPrimary-900",
    },
  },
  {
    id: "secondary",
    label: "secondary",
    default: "bg-secondary",
    colors: {
      50: "bg-secondary-50",
      100: "bg-secondary-100",
      200: "bg-secondary-200",
      300: "bg-secondary-300",
      400: "bg-secondary-400",
      500: "bg-secondary-500",
      600: "bg-secondary-600",
      700: "bg-secondary-700",
      800: "bg-secondary-800",
      900: "bg-secondary-900",
    },
  },
  {
    id: "tertiary",
    label: "tertiary",
    default: "bg-tertiary",
    colors: {
      50: "bg-tertiary-50",
      100: "bg-tertiary-100",
      200: "bg-tertiary-200",
      300: "bg-tertiary-300",
      400: "bg-tertiary-400",
      500: "bg-tertiary-500",
      600: "bg-tertiary-600",
      700: "bg-tertiary-700",
      800: "bg-tertiary-800",
      900: "bg-tertiary-900",
    },
  },
  {
    id: "success",
    label: "success",
    default: "bg-success",
    colors: {
      50: "bg-success-50",
      100: "bg-success-100",
      200: "bg-success-200",
      300: "bg-success-300",
      400: "bg-success-400",
      500: "bg-success-500",
      600: "bg-success-600",
      700: "bg-success-700",
      800: "bg-success-800",
      900: "bg-success-900",
    },
  },
  {
    id: "error",
    label: "error",
    default: "bg-error",
    colors: {
      50: "bg-error-50",
      100: "bg-error-100",
      200: "bg-error-200",
      300: "bg-error-300",
      400: "bg-error-400",
      500: "bg-error-500",
      600: "bg-error-600",
      700: "bg-error-700",
      800: "bg-error-800",
      900: "bg-error-900",
    },
  },
  {
    id: "accent",
    label: "accent",
    default: "bg-accent",
    colors: {},
  },
];
</script>

<style lang="scss" scoped></style>
