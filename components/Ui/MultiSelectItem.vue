<template>
  <div v-if="renderUi" :class="useMc('flex flex-wrap gap-2', props.class)">
    <!-- <slot
      v-if="$slots.default"
      v-for="(item, index) in selectOptions"
      :key="item.value"
      :label="item.label"
      :class="{ 'cursor-not-allowed opacity-80': props.disabled }"
      @click="selectItem(item.value)"
    >
    </slot> -->

    <UButton
      v-for="item in selectOptions"
      :key="item.value ?? '2'"
      :disabled="item?.disabled"
      :color="item.color"
      :variant="item.variant"
      :size="size"
      :ui="rounded ? { rounded: 'rounded-full' } : {}"
      :class="item.className"
      @click="selectItem(item.value)"
    >
      {{ item.label }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
interface Items {
  label: string;
  value: string;
  disabled?: boolean;
}

interface Props {
  options: Items[] | string[];
  disabled?: boolean;
  class?: string;
  limitSelect?: number;
  color?: string;
  variant?: string;
  size?: string;
  rounded?: boolean;
  colorActive?: string;
  variantActive?: string;
  classActive?: string;
}

const values = defineModel<string[]>({
  required: true,
  default: [],
  type: Array<string>,
});

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  disabled: false,
  limitSelect: 0,
  color: "primary",
  variant: "outline",
  size: "32",
  variantActive: "solid",
});

const emit = defineEmits(["change", "limit"]);

const renderUi = ref(true);

const selectOverLimit = computed(
  () => props.limitSelect > 0 && values.value.length >= props.limitSelect,
);

const selectOptions = computed(() => {
  return _map(props.options, (d) => {
    const data = typeof d === "string" ? { label: d, value: d } : (d as Items);
    const currentSelect = _includes(values.value, data.value);

    const color =
      currentSelect && props.colorActive ? props.colorActive : props.color;
    const variant =
      currentSelect && props.variantActive
        ? props.variantActive
        : props.variant;

    let className = "";
    if (props.disabled || (selectOverLimit.value && !currentSelect)) {
      className += "cursor-not-allowed opacity-70";
    }
    if (currentSelect && props.classActive) {
      className += props.classActive;
    }

    return {
      ...data,
      color,
      variant,
      className,
    };
  });
});

const selectItem = (value: string) => {
  if (props.disabled) return;

  let selectVal = _clone(values.value);
  if (_includes(selectVal, value)) {
    selectVal = _filter(values.value, (d) => d !== value);
    emit("change", selectVal);
  } else if (!selectOverLimit.value) {
    selectVal.push(value);
    emit("change", selectVal);
  } else {
    emit("limit", true);
  }

  values.value = selectVal;
};

watch(
  () => props.classActive,
  () => {
    renderUi.value = false;

    setTimeout(() => {
      renderUi.value = true;
    }, 0);
  },
);
</script>

<style scoped></style>
