<template>
  <div>
    <div class="grid grid-cols-12 gap-x-8 gap-y-12">
      <div class="sticky top-20 col-span-3 flex h-fit flex-col gap-5 pb-28">
        <h4 class="font-bold uppercase">Screens sizes</h4>

        <div class="bg-neutral-50 opacity-50">
          <div class="mx-auto h-32 w-2/3 animate-pulse bg-neutral-100"></div>
        </div>
      </div>

      <div class="col-span-9 flex flex-col gap-8">
        <div>
          <p class="text-b-1 text-neutral-700">
            There are a total of 6 screen sizes for the responsive website. The
            default design includes 3 sizes: <br />
            <span class="font-semibold">Small Mobile</span>,
            <span class="font-semibold">Tablet</span> and
            <span class="font-semibold">Small Desktop.</span>
            However, customers have the option to add or reduce sizes according
            to their preferences.
          </p>
        </div>

        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div
              class="w-fit rounded-sm bg-primary-50 px-2 py-0.5 text-b-3 font-semibold text-primary"
            >
              Default
            </div>
            <div class="text-sh-2 font-bold text-neutral-900">
              Small Mobile (0-479px)
            </div>
            <div class="text-b-2 text-neutral-600">smobile-only:</div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              screen size is less than equal to
              <b>{{ ` ${screens["s-mobile"].max}` }}</b>
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
              <div>mobile-only:</div>
              <div>mobile:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">mobile-only:</div>
              <div>Only mobile (480-767px)</div>

              <div class="font-bold">mobile:</div>
              <div>Screen size 0-767px</div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['mobile-only'].min}`"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-neutral-50" />

        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div
              class="w-fit rounded-sm bg-primary-50 px-2 py-0.5 text-b-3 font-semibold text-primary"
            >
              Default
            </div>
            <div class="text-sh-2 font-bold text-neutral-900">
              Tablet (768-1023px)
            </div>
            <div class="text-b-2 text-neutral-600">
              <div>tablet-only:</div>
              <div>tablet:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">tablet-only:</div>
              <div>Only tablet (768-1023px)</div>

              <div class="font-bold">tablet:</div>
              <div>Screen size 0-1023px</div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['tablet-only'].min}`"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <hr class="border-neutral-50" />

        <div class="flex flex-col gap-5">
          <div class="col-span-3">
            <div
              class="w-fit rounded-sm bg-primary-50 px-2 py-0.5 text-b-3 font-semibold text-primary"
            >
              Default
            </div>
            <div class="text-sh-2 font-bold text-neutral-900">
              Desktop (1024-1439px)
            </div>
            <div class="text-b-2 text-neutral-600">
              <div>desktop-only:</div>
              <div>desktop:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">desktop-only:</div>
              <div>Only desktop (1024-1439px)</div>

              <div class="font-bold">desktop:</div>
              <div>Screen size 0-1439px</div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['desktop-only'].min}`"
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
              <div>desktop-only:</div>
              <div>desktop:</div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <div class="text-b-1 text-neutral-900">
              <div class="font-bold">l-desktop-only:</div>
              <div>Only large desktop (1440-1889px)</div>

              <div class="font-bold">l-desktop:</div>
              <div>Screen size 0-1889px</div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-50">
                <div
                  class="mx-auto h-72 max-w-full bg-neutral-100"
                  :style="`width:${screens['l-desktop-only'].min}`"
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
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const screens = _get(fullConfig, "theme.screens", {});
</script>

<style scoped></style>
