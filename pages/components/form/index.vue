<template>
  <div>
    <Header title="FormGroup">
      Display a label and additional informations around a form element. Use the
      FormGroup component around an Input, Textarea, Select or a SelectMenu with
      a label. The
      <UBadge color="gray" variant="solid"><{{ "label" }}></UBadge> will
      automatically be associated with the form element so it gets focused on
      click. <br />Based on UI Framework
      <a
        href="https://ui.nuxt.com/components/form-group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UBadge variant="subtle">NuxtUI/FormGroup</UBadge></a
      >
    </Header>

    <div class="pb-20 pt-10">
      <section>
        <div class="font-semibold text-b-1">Default</div>

        <div class="mt-3 flex gap-10">
          <UFormGroup
            :size="size"
            :label="label"
            :description="description"
            :hint="hint"
            :help="help"
            :ui="ui"
          >
            <UInput v-model="inputValue" />
          </UFormGroup>
        </div>
      </section>

      <section class="mt-6">
        <div class="font-semibold text-b-1">Custom Help</div>

        <div class="mt-3 flex gap-10">
          <UFormGroup :size="size" :label="label" :ui="ui">
            <UInput v-model="inputValue2" />

            <template #help>
              <div class="flex justify-between">
                <span>Supporting text</span>

                <span>{{ `${inputValue2.length}/500` }}</span>
              </div>
            </template>
          </UFormGroup>
        </div>
      </section>

      <section class="mt-16 flex flex-col gap-3">
        <h6 class="font-semibold">Config Settings</h6>

        <div class="grid grid-cols-5 gap-4">
          <UFormGroup label="Label">
            <UInput v-model="label" />
          </UFormGroup>

          <UFormGroup label="Hint">
            <UInput v-model="hint" />
          </UFormGroup>

          <UFormGroup label="Help">
            <UInput v-model="help" />
          </UFormGroup>

          <UFormGroup label="Description">
            <UInput v-model="description" />
          </UFormGroup>

          <div />

          <UFormGroup label="Size">
            <USelectMenu v-model="size" :options="optionSize" />

            <template #help>
              <p>
                Change the size of the label and the form element.<br />
                default: <UBadge color="gray" variant="solid">14</UBadge>
              </p>
            </template>
          </UFormGroup>

          <UFormGroup>
            <template #label>
              <UCheckbox v-model="fullWidth" label="Full Width" />
            </template>
            <template #help>
              Custom input width by ui config
              <UBadge color="gray" variant="solid">
                <code class="whitespace-pre">{wrapper: 'w-full'}</code>
              </UBadge>
            </template>
          </UFormGroup>
        </div>
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Usage</h5>

        <div>
          <div class="font-semibold text-h6">Default</div>
          <CodeBlock :content="codeDefault" />
        </div>

        <div>
          <div class="font-semibold text-h6">Custom Help</div>
          <CodeBlock :content="codeCustomHelp" />
        </div>
      </section>

      <section class="mt-10 flex flex-col gap-3">
        <h5 class="font-semibold">Config</h5>

        <CodeBlock :content="config" />
      </section>

      <!--<hr class="mt-6 border-neutral-50" />

       <div class="mt-6 flex flex-col gap-2">
        <h6 class="font-semibold">
          Preview <UBadge variant="subtle" size="28">Form</UBadge>
        </h6>

        <div class="prose max-w-full">
          <p>
            Use the Form component to validate form data using schema libraries
            such as
            <a href="https://github.com/jquense/yup" rel="nofollow">Yup</a>,
            <a href="https://github.com/colinhacks/zod" rel="nofollow">Zod</a>,
            <a href="https://github.com/hapijs/joi" rel="nofollow">Joi</a>,
            <a href="https://github.com/fabian-hiller/valibot" rel="nofollow"
              >Valibot</a
            >,
            <a href="https://github.com/vuelidate/vuelidate" rel="nofollow"
              >Vuelidate</a
            >, or your own validation logic.
          </p>
          <p>
            It works with the
            <a href="/components/form-group" class="">FormGroup</a> component to
            display error messages around form elements automatically.
          </p>
          <p>The form component requires two props:</p>
          <ul>
            <li>
              <code class="">state</code> - a reactive object holding the form's
              state.
            </li>
            <li>
              <code class="">schema</code> - a schema object from a validation
              library like
              <a href="https://github.com/jquense/yup" rel="nofollow">Yup</a>,
              <a href="https://github.com/colinhacks/zod" rel="nofollow">Zod</a
              >,
              <a href="https://github.com/hapijs/joi" rel="nofollow">Joi</a> or
              <a href="https://github.com/fabian-hiller/valibot" rel="nofollow"
                >Valibot</a
              >.
            </li>
          </ul>
        </div>
        <div
          class="prose-code:bg-white dark:prose-code:bg-gray-900 group relative my-5 block rounded-md border border-gray-200 bg-gray-50 py-3 pl-4 pr-6 text-sm/6 font-normal text-gray-700 last:mb-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
          style="
            --color-light: rgb(var(--color-primary-DEFAULT));
            --color-dark: rgb(var(--color-primary-DEFAULT));
          "
        >
          <span
            class="iconify i-heroicons:light-bulb mr-2 inline-flex h-4 w-4 items-center align-sub text-[--color-light] dark:text-[--color-dark]"
            aria-hidden="true"
          ></span
          >Note that
          <strong>no validation library is included</strong> by default, so
          ensure you <strong>install the one you need</strong>.
        </div>
      </div>

      <section class="mt-6">
        <div class="font-semibold text-b-1">Error</div>

        <div class="mt-3 flex gap-10">
          <UForm :validate="validate" :state="state" class="space-y-4">
            <UFormGroup label="Email" name="email" :size="size" :ui="ui">
              <UInput v-model="state.email" :variant="variant" />
            </UFormGroup>

            <UFormGroup label="Password" name="password" :size="size">
              <UInput
                v-model="state.password"
                type="password"
                :variant="variant"
              />
            </UFormGroup>

            <UButton type="submit"> Submit </UButton>
          </UForm>
        </div>
      </section> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormGroupSize } from "#ui/types";
import { formGroup } from "~/config/ui/formGroup";

definePageMeta({
  layout: "components",
});

const label = ref("Email");
const hint = ref("Optional");
const help = ref("We will never share your email with anyone else.");
const description = ref("We'll only use this for spam.");
const fullWidth = ref(false);
const inputValue = ref("");
const inputValue2 = ref("");
const size = ref<FormGroupSize>("14");
const optionSize = ["12", "14", "16"];

const ui = computed(() => {
  return fullWidth.value
    ? {
        wrapper: "w-full",
      }
    : {};
});

const config = `\`\`\`js
// config/ui/formGroup/index.ts

export const formGroup = ${JSON.stringify(formGroup, null, 2)}`;

const codeDefault = computed(() => {
  let code = `
<UFormGroup
  size="${size.value}"
  label="${label.value}"
  hint="${hint.value}"
  description="${description.value}"
  help="${help.value}"`;

  if (fullWidth.value) code += `\n  :ui="{wrapper: 'w-full'}"`;
  return `\`\`\`html ${code}>
  ....
</UFormGroup>`;
});

const codeCustomHelp = computed(() => {
  let code = `
<UFormGroup>
  ....

  <template #help>
    <div class="flex justify-between">
      <span>Supporting text</span>
      <span>10/500</span>
    </div>
  </template>
</UFormGroup>`;

  return `\`\`\`html ${code}`;
});
</script>

<style scoped></style>
