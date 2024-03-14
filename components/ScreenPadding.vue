<template>
  <div>
    <div class="grid grid-cols-12 gap-x-8 gap-y-12">
      <div class="sticky top-8 col-span-3 flex h-fit flex-col gap-5 pb-28">
        <h4 class="font-bold uppercase">Screen padding</h4>

        <div class="flex bg-neutral-50 opacity-80">
          <div
            class="flex-1 border-2 border-dashed border-success-200 bg-success-50"
          ></div>
          <div class="mx-auto flex h-32 w-2/3 flex-col justify-center gap-2">
            <div class="h-3 rounded-full bg-neutral-100" />
            <div class="h-3 rounded-full bg-neutral-100" />
            <div class="h-3 w-2/3 rounded-full bg-neutral-100" />
          </div>
          <div
            class="flex-1 border-2 border-dashed border-success-200 bg-success-50"
          ></div>
        </div>
      </div>

      <div class="col-span-9 flex flex-col gap-8">
        <div>
          <div class="flex flex-col gap-2">
            <div>
              <div class="text-sh-2 font-bold text-neutral-900">
                Utilities Class
              </div>
              <div class="text-b-2 text-neutral-600">.screen-padding</div>
            </div>
            <p class="text-b-1 text-neutral-700">
              Distance between content and display edge, affecting the left and
              right sides equally. It will adjust the distance responsively
              according to the screen size automatically.
            </p>
          </div>
        </div>

        <div class="relative h-72 bg-neutral-50">
          <div class="absolute inset-0 flex h-full justify-between">
            <div
              class="h-full w-[96px] border-r-2 border-dashed border-success-400 bg-success-50"
            ></div>
            <div
              class="h-full w-[96px] border-l-2 border-dashed border-success-400 bg-success-50"
            ></div>
          </div>
          <div class="absolute inset-0 flex h-full justify-between">
            <div
              class="h-full w-[48px] border-r-2 border-dashed border-success-400 bg-success-100"
            ></div>
            <div
              class="h-full w-[48px] border-l-2 border-dashed border-success-400 bg-success-100"
            ></div>
          </div>
          <div class="absolute inset-0 flex h-full justify-between">
            <div
              class="h-full w-[32px] border-r-2 border-dashed border-success-600 bg-success-200"
            ></div>
            <div
              class="h-full w-[32px] border-l-2 border-dashed border-success-600 bg-success-200"
            ></div>
          </div>
          <div class="absolute inset-0 flex h-full justify-between">
            <div
              class="h-full w-[16px] border-r-2 border-dashed border-success-600 bg-success-300"
            ></div>
            <div
              class="h-full w-[16px] border-l-2 border-dashed border-success-600 bg-success-300"
            ></div>
          </div>

          <div class="absolute inset-0 flex flex-col justify-around">
            <div
              class="mx-4 bg-success-600/80 px-2 py-1 text-center text-b-3 text-success-900"
            >
              <b>16px</b> - Small Mobile (s-mobile:), Mobile (mobile:)
            </div>

            <div
              class="mx-8 bg-success-300/70 px-2 py-1 text-center text-b-3 text-success-900"
            >
              <b>32px</b> - Tablet (tablet:)
            </div>
            <div
              class="mx-12 bg-success-100 px-2 py-1 text-center text-b-3 text-success-900"
            >
              <b>48px</b> - Small Desktop (s-desktop:)
            </div>

            <div
              class="mx-24 bg-success-50 px-2 py-1 text-center text-b-3 text-success-900"
            >
              <b>96px</b> - Large Desktop (l-desktop:), Extra large Desktop
              (xl-desktop:)
            </div>
          </div>
        </div>

        <div>
          <div class="text-b-1 font-bold">class="screen-padding"</div>
          <div class="mt-2 text-b-2 text-neutral-800">
            <p>
              padding <b>16px</b> - Small Mobile (s-mobile:), Mobile (mobile:)
            </p>
            <p>padding <b>32px</b> - Tablet (tablet:)</p>
            <p>padding <b>48px</b> - Small Desktop (s-desktop:)</p>
            <p>
              padding <b>96px</b> - Large Desktop (l-desktop:), Extra large
              Desktop (xl-desktop:)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
