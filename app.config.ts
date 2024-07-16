export default defineAppConfig({
  ui: {
    strategy: "override",
    primary: "uiPrimary",
    button: {
      default: {
        size: "36",
        variant: 'solid',
        color: 'primary',
        loadingIcon: 'i-svg-spinners-90-ring-with-bg',
      },
      rounded: 'rounded-8',
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
        base: 'flex-shrink-0',
        loading: '',
        size: {
          "24": "h-2.5 w-2.5",
          "32": 'h-3.5 w-3.5',
          "36": 'h-[18px] w-[18px]',
          "44": "h-[22px] w-[22px]",
          "56": "h-[22px] w-[22px]",
          "72": "h-[22px] w-[22px]",
        },
      },
      variant: {
        text: 'text-{color}-500 bg-transparent hover:text-white hover:bg-{color}-200 active:bg-{color}-400 active:text-white forcus-visible:text-white focus-visible:text-white focus-visible:bg-{color}-500 disabled:bg-transparent disabled:text-neutral-300',
        solid: 'text-white bg-{color}-500 hover:bg-{color}-700 disabled:text-white disabled:bg-neutral-300 active:bg-{color}-800 focus-visible:text-{color}-500 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-current focus-visible:ring-{color}-500 focus-visible:bg-{color}-200',
        outline: 'ring-1 ring-inset ring-current text-{color}-500 hover:text-{color}-700 active:text-{color}-800 disabled:text-neutral-300 focus-visible:text-{color}-500',
        icon: 'h-fit min-h-fit text-{color}-500 hover:text-{color}-300 active:text-{color}-400 focus-visible:text-{color}-500 disabled:text-neutral-300',
      },
    },
    toggle: {
      base: 'relative inline-flex flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:bg-neutral-200 focus:outline-none hover:bg-{color}-700 active:bg-{color}-800 focus-visible:bg-{color}-200',
      inactive: 'bg-neutral-500',
      size: {
        '16': 'h-4 w-7',
        '24': 'h-6 w-11',
        '32': 'h-8 w-[60px]',
        '36': 'h-9 w-[68px]',
        '44': 'h-11 w-[84px]',
        '56': 'h-14 w-[108px]',
        '72': 'h-[72px] w-[140px]',
      },
      container: {
        base: 'pointer-events-none relative inline-block rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 disabled:bg-neutral-100',
        active: {
          '16': 'translate-x-3 rtl:-translate-x-3',
          '24': 'translate-x-5 rtl:-translate-x-5',
          '32': 'translate-x-7 rtl:-translate-x-7',
          '36': 'translate-x-8 rtl:-translate-x-8',
          '44': 'translate-x-10 rtl:-translate-x-10',
          '56': 'translate-x-[52px] rtl:-translate-x-[52px]',
          '72': 'translate-x-[68px] rtl:-translate-x-[68px]',
        },
        size: {
          '16': 'size-3',
          '24': 'size-5',
          '32': 'size-7',
          '36': 'size-8',
          '44': 'size-10',
          '56': 'size-[52px]',
          '72': 'size-[68px]',
        },
      },
      icon: {
        base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        size: {
          '16': 'size-3',
          '24': 'size-3.5',
          '32': 'size-[22px]',
          '36': 'size-[25px]',
          '44': 'size-7',
          '56': 'size-9',
          '72': 'size-11',
        },
        on: 'text-{color}-500 disabled:text-neutral-500',
        off: 'text-neutral-500',
        loading: 'text-{color}-500 disabled:text-neutral-500',
      },
      default: {
        loadingIcon: 'i-svg-spinners-ring-resize',
        color: 'primary',
        size: '24',
      },
    },
    checkbox: {
      wrapper: 'relative flex items-start group',
      container: 'flex items-center h-auto',
      base: 'h-4 w-4 data-[size=size-16]:size-4 data-[size=size-24]:size-6 data-[size=size-32]:size-8 data-[size=size-36]:size-9 data-[size=size-44]:size-11 data-[size=size-56]:size-14 data-[size=size-72]:size-[72px] dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent cursor-pointer',
      rounded: 'rounded-4 data-[size=size-16]:rounded-4 data-[size=size-24]:rounded-6 data-[size=size-32]:rounded-6 data-[size=size-36]:rounded-8 data-[size=size-44]:rounded-8 data-[size=size-56]:rounded-8 data-[size=size-72]:rounded-8',
      color: 'text-{color}-500 hover:border-{color}-500',
      background: 'bg-white disabled:bg-neutral-100',
      border: 'border border-neutral-200 disabled:border-neutral-200 disabled:bg-neutral-500',
      label: 'text-sm text-black',
      help: 'text-xs text-neutral-600',
      default: {
        color: 'primary',
      },
    },
    radio: {
      wrapper: 'relative flex items-start',
      container: 'flex items-center h-auto',
      base: 'h-4 w-4 data-[size=size-16]:size-4 data-[size=size-24]:size-6 data-[size=size-32]:size-8 data-[size=size-36]:size-9 data-[size=size-44]:size-11 data-[size=size-56]:size-14 data-[size=size-72]:size-[72px] group-data-[size=size-16]:size-4 group-data-[size=size-24]:size-6 group-data-[size=size-32]:size-8 group-data-[size=size-36]:size-9 group-data-[size=size-44]:size-11 group-data-[size=size-56]:size-14 group-data-[size=size-72]:size-[72px] disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent cursor-pointer',
      border: 'border border-neutral-200 disabled:border-neutral-200 hover:border-{color}-500',
      color: 'text-{color}-500 hover:drop-shadow-[0_0_10px_#F9BED6] disabled:drop-shadow-none disabled:text-neutral-500',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      label: 'text-sm text-black leading-tight group-data-[size=size-16]:text-sm group-data-[size=size-24]:text-sm group-data-[size=size-32]:text-base group-data-[size=size-36]:text-xl group-data-[size=size-44]:text-2xl group-data-[size=size-56]:text-[34px] group-data-[size=size-72]:text-[60px]',
      help: 'text-xs text-gray-600 leading-tight group-data-[size=size-16]:text-xs group-data-[size=size-24]:text-xs group-data-[size=size-32]:text-sm group-data-[size=size-36]:text-base group-data-[size=size-44]:text-base group-data-[size=size-56]:text-xl group-data-[size=size-72]:text-2xl',
    },
    radioGroup: {
      fieldset: 'group flex flex-col gap-0.5',
    },
    popover: {
      wrapper: 'relative group',
      container: 'z-50 group',
      width: 'max-w-[260px]',
      rounded: 'rounded-6',
      background: 'bg-neutral-700 group-data-[color=white]:bg-white group-data-[color=black]:bg-neutral-700',
      ring: 'group-data-[color=white]:ring-1 group-data-[color=white]:ring-neutral-500',
      base: 'overflow-hidden focus:outline-none relative p-2 text-white group-data-[color=white]:text-neutral-700 group-data-[color=black]:text-white text-b-3',
      arrow: {
        base: 'invisible z-10 before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
        shadow: '',
        ring: `before:border before:border-neutral-500 group-data-[popper-placement*='right']:before:border-t-transparent group-data-[popper-placement*='right']:before:border-r-transparent group-data-[popper-placement*='left']:before:border-l-transparent group-data-[popper-placement*='left']:before:border-b-transparent group-data-[popper-placement*='top']:before:border-t-transparent group-data-[popper-placement*='top']:before:border-l-transparent group-data-[popper-placement*='bottom']:before:border-r-transparent group-data-[popper-placement*='bottom']:before:border-b-transparent`,
        background: 'before:bg-neutral-700 group-data-[color=white]:before:bg-white group-data-[color=black]:before:bg-neutral-700',
        rounded: 'before:rounded-sm',
      },
    },
    badge: {
      size: {
        '20': 'text-xs px-1.5 py-0.5',
        '24': 'text-xs px-2 py-1',
        '28': 'text-sm px-2 py-1',
        '32': 'text-sm px-2.5 py-1.5',
      },
      variant: {
        'color-white': 'text-{color}-500 bg-white',
        'balck-color': 'text-neutral-950 bg-{color}-500',
      },
      default: {
        size: '24',
      },
    }
  },
});
