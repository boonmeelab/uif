export const button = {
  default: {
    size: "36",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-svg-spinners-90-ring-with-bg",
  },
  rounded: "rounded-lg",
  size: {
    "24": "text-sm min-h-6",
    "32": "text-sm min-h-8",
    "36": "text-sm min-h-9",
    "44": "text-base min-h-11",
    "56": "text-base min-h-14",
    "72": "text-base min-h-[72px]",
  },
  gap: {
    "24": "gap-x-2",
    "32": "gap-x-2",
    "36": "gap-x-2.5",
    "44": "gap-x-2.5",
    "56": "gap-x-2.5",
    "72": "gap-x-2.5",
  },
  padding: {
    "24": "py-1 px-4",
    "32": "py-1.5 px-4",
    "36": "py-2 px-4",
    "44": "py-3 px-4",
    "56": "py-[18px] px-4",
    "72": "py-[26px] px-4",
  },
  square: {
    "24": "p-2",
    "32": "p-2",
    "36": "p-2",
    "44": "p-2",
    "56": "p-2",
    "72": "p-2",
  },
  icon: {
    base: "flex-shrink-0",
    loading: "",
    size: {
      "24": "h-2.5 w-2.5",
      "32": "h-3.5 w-3.5",
      "36": "h-[18px] w-[18px]",
      "44": "h-[22px] w-[22px]",
      "56": "h-[22px] w-[22px]",
      "72": "h-[22px] w-[22px]",
    },
  },
  color: {
    gray: {
      icon: "text-neutral-600 hover:text-neutral-700",
    },
  },
  variant: {
    text: "text-{color}-500 bg-transparent hover:text-white hover:bg-{color}-200 active:bg-{color}-400 active:text-white forcus-visible:text-white focus-visible:text-white focus-visible:bg-{color}-500 disabled:bg-transparent disabled:text-neutral-300",
    solid: "text-white bg-{color}-500 hover:bg-{color}-700 disabled:text-white disabled:bg-neutral-300 active:bg-{color}-800 focus-visible:text-{color}-500 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-current focus-visible:ring-{color}-500 focus-visible:bg-{color}-200",
    outline: "ring-1 ring-inset ring-current text-{color}-500 hover:text-{color}-700 active:text-{color}-800 disabled:text-neutral-300 focus-visible:text-{color}-500",
    icon: "h-fit min-h-fit text-{color}-500 hover:text-{color}-700 active:text-{color}-400 focus-visible:text-{color}-500 disabled:text-neutral-300",
  }
}