<template>
  <div>
    <div class="grid grid-cols-12 gap-x-8 gap-y-12">
      <div class="sticky top-20 col-span-3 flex h-fit flex-col gap-5 pb-28">
        <h4 class="font-bold uppercase">Border Radius</h4>

        <div
          class="relative h-36 w-36 outline-dashed outline-2 outline-offset-[-2px] outline-neutral-200"
        >
          <div
            class="absolute inset-0 rounded-bl-48 rounded-br-28 rounded-tl-12 rounded-tr-44 bg-primary-500/70"
          ></div>
        </div>
      </div>

      <div class="col-span-9 grid grid-cols-8 gap-4">
        <div
          v-for="(val, key, index) in borderRadius"
          :key="index"
          class="flex flex-col gap-2"
        >
          <div class="aspect-1 w-full bg-primary-100" :class="val"></div>

          <p class="text-b-3 text-neutral-700">{{ `${val} (${key})` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "~/tailwind.config";

// const fullConfig = resolveConfig(tailwindConfig);
// const configBorderRadius = _flow(
//   () => _get(fullConfig, "theme.borderRadius"),
//   (data) => _omit(data, ["lg", "md", "none", "sm", "xl", "2xl", "3xl"]),
// )();

// console.log("🚀 ~ configBorderRadius:", configBorderRadius);

let borderRadius = {
  "2px": "rounded-2",
  "4px": "rounded-4",
  "6px": "rounded-6",
  "8px": "rounded-8",
  "10px": "rounded-10",
  "12px": "rounded-12",
  "16px": "rounded-16",
  "20px": "rounded-20",
  "24px": "rounded-24",
  "28px": "rounded-28",
  "32px": "rounded-32",
  "36px": "rounded-36",
  "40px": "rounded-40",
  "44px": "rounded-44",
  "48px": "rounded-48",
  default: "rounded",
  "9999px": "rounded-full",
};
// for (const key in configBorderRadius) {
//   const value = key === "DEFAULT" ? "rounded" : `rounded-${key}`;
//   const data = {
//     class: value,
//     label: `${value} (${configBorderRadius[key]})`,
//   };

//   borderRadius.push(data);
// }
// console.log("🚀 ~ borderRadius:", borderRadius);
</script>

<style scoped></style>
