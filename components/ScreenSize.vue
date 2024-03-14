<template>
  <div>
    <div class="grid grid-cols-12 gap-x-8 gap-y-12">
      <div class="sticky top-8 col-span-3 flex h-fit flex-col gap-5 pb-28">
        <h4 class="font-bold uppercase">Screens sizes</h4>

        <div class="bg-neutral-50 opacity-50">
          <div class="mx-auto h-32 w-2/3 animate-pulse bg-neutral-100"></div>
        </div>
      </div>

      <div class="col-span-9 flex flex-col gap-8">
        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div
              class="w-fit rounded-sm bg-ciPrimary-50 px-2 py-0.5 text-b-3 font-semibold text-ciPrimary"
            >
              Default
            </div>
            <div class="text-sh-2 font-bold text-neutral-900">
              Small Mobile (0-479px)
            </div>
            <div class="text-b-2 text-neutral-600">s-mobile:</div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              screen size less than
              <b>{{ `  ${screens["s-mobile"].max}` }}</b>
            </div>

            <div class="bg-neutral-50">
              <div
                class="mx-auto h-72 w-[320px] max-w-full bg-neutral-100"
              ></div>
            </div>
          </div>
        </div>

        <hr class="border-neutral-50" />

        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div class="text-sh-2 font-bold text-neutral-900">
              Mobile (480-767px)
            </div>
            <div class="text-b-2 text-neutral-600">
              <div>-mobile:</div>
              <div>mobile:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">-mobile:</div>
              <div>Only mobile (480-767px)</div>

              <div class="font-bold">mobile:</div>
              <div>Screen size less than and equal to <u>mobile</u></div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['-mobile'].min}`"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-neutral-50" />

        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div
              class="w-fit rounded-sm bg-ciPrimary-50 px-2 py-0.5 text-b-3 font-semibold text-ciPrimary"
            >
              Default
            </div>
            <div class="text-sh-2 font-bold text-neutral-900">
              Tablet (768-1023px)
            </div>
            <div class="text-b-2 text-neutral-600">
              <div>-tablet:</div>
              <div>tablet:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">-tablet:</div>
              <div>Only tablet (768-1023px)</div>

              <div class="font-bold">tablet:</div>
              <div>
                Screen size less than and equal to
                <u>tablet</u>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['-tablet'].min}`"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-neutral-50" />

        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div
              class="w-fit rounded-sm bg-ciPrimary-50 px-2 py-0.5 text-b-3 font-semibold text-ciPrimary"
            >
              Default
            </div>
            <div class="text-sh-2 font-bold text-neutral-900">
              Small Desktop (1024-1439px)
            </div>
            <div class="text-b-2 text-neutral-600">
              <div>-s-desktop:</div>
              <div>s-desktop:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">-s-desktop:</div>
              <div>Only small desktop (1024-1439px)</div>

              <div class="font-bold">s-desktop:</div>
              <div>
                Screen size less than and equal to
                <u>small desktop</u>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['-s-desktop'].min}`"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-neutral-50" />

        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div class="text-sh-2 font-bold text-neutral-900">
              Large Desktop (1440-1889px)
            </div>
            <div class="text-b-2 text-neutral-600">
              <div>-s-desktop:</div>
              <div>s-desktop:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">-l-desktop:</div>
              <div>Only small desktop (1440-1889px)</div>

              <div class="font-bold">l-desktop:</div>
              <div>
                Screen size less than and equal to
                <u>large desktop</u>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['-l-desktop'].min}`"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-neutral-50" />

        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div class="text-sh-2 font-bold text-neutral-900">
              Extra large Desktop (1890px and up)
            </div>
            <div class="text-b-2 text-neutral-600">
              <div>xl-desktop:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">xl-desktop:</div>
              <div>
                Screen size less than and equal to
                <u>extra large desktop</u>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['xl-desktop'].min}`"
                ></div>
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

const screens = tailwindConfig.theme.extend.screens;
</script>

<style scoped></style>
