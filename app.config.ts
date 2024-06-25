export default defineAppConfig({
  ui: {
    strategy: "override",
    primary: "uiPrimary",
    gray: "neutral",
    button: {
      default: {
        size: "36",
      },
      size: {
        "24": "text-sm h-6",
        "32": "text-sm h-8",
        "36": "text-sm h-9",
        "44": "text-base h-11",
        "56": "text-base h-14",
        "72": "text-base h-[72px]",
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
        "24": "py-0 px-4",
        "32": "py-0 px-4",
        "36": "py-0 px-4",
        "44": "py-0 px-4",
        "56": "py-0 px-4",
        "72": "py-0 px-4",
      },
      square: {
        "24": "py-1.5 px-2.5",
        "32": "p-2.5",
        "36": "p-2.5",
        "44": "p-3",
        "56": "p-4",
        "72": "p-4",
      },
      variant: {
        solid:
          "text-white dark:text-gray-900 bg-{color}-500 dark:bg-{color}-400 disabled:bg-{color}-500 dark:disabled:bg-{color}-400 hover:bg-{color}-700 dark:hover:bg-{color}-500 active:bg-{color}-800 focus-visible:bg-{color}-200 focus-visible:border focus-visible:border-{color}-500 focus-visible:text-{color}-500 dark:focus-visible:outline-{color}-400",
        ghost:
          "text-{color}-500 hover:text-white hover:bg-{color}-200 disabled:bg-transparent disabled:text-neutral-300 active:bg-{color}-400 focus-visible:bg-{color}-500",
      },
    },
  },
});
