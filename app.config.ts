import type { Strategy } from '#ui/types';
import { mergeConfig } from "#ui/utils";

let strategy: Strategy | undefined = undefined

const defaultConfig = {
  badge: {
    size: {
      '20': 'text-xs px-1.5 py-0.5',
      '24': 'text-xs px-2 py-1',
      '28': 'text-sm px-2 py-1',
      '32': 'text-sm px-2.5 py-1.5',
    },
    variant: {
      'color-white': 'text-{color}-500 bg-white',
      'black-color': 'text-neutral-950 bg-{color}-500',
    },
    default: {
      size: '24',
    },
  },
  button: {
    default: {
      size: "36",
      variant: 'solid',
      color: 'primary',
      loadingIcon: 'i-svg-spinners-90-ring-with-bg',
    },
    rounded: 'rounded-lg',
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
    color: {
      gray: {
        icon: 'text-neutral-600 hover:text-neutral-700',
      },
    },
    variant: {
      text: 'text-{color}-500 bg-transparent hover:text-white hover:bg-{color}-200 active:bg-{color}-400 active:text-white forcus-visible:text-white focus-visible:text-white focus-visible:bg-{color}-500 disabled:bg-transparent disabled:text-neutral-300',
      solid: 'text-white bg-{color}-500 hover:bg-{color}-700 disabled:text-white disabled:bg-neutral-300 active:bg-{color}-800 focus-visible:text-{color}-500 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-current focus-visible:ring-{color}-500 focus-visible:bg-{color}-200',
      outline: 'ring-1 ring-inset ring-current text-{color}-500 hover:text-{color}-700 active:text-{color}-800 disabled:text-neutral-300 focus-visible:text-{color}-500',
      icon: 'h-fit min-h-fit text-{color}-500 hover:text-{color}-700 active:text-{color}-400 focus-visible:text-{color}-500 disabled:text-neutral-300',
    },
  },
  checkbox: {
    wrapper: 'relative flex items-start group',
    container: 'flex items-center h-auto',
    base: 'size-4',
    color: 'text-{color}-500 hover:border-{color}-500',
    background: 'bg-white disabled:bg-neutral-100',
    border: 'border border-neutral-200 disabled:border-neutral-500',
    label: 'text-sm text-black',
    help: 'text-xs text-neutral-600',
    default: {
      color: 'primary',
    },
  },
  formGroup: {
    size: {
      "12": 'text-xs',
      "14": 'text-sm',
      "16": 'text-base',
    },
    label: {
      base: 'text-neutral-900',
    },
    description: 'text-neutral-600',
    hint: 'text-neutral-600',
    help: 'text-neutral-600',
    error: 'text-error-500',
  },
  input: {
    base: 'disabled:opacity-70',
    size: {
      "24": 'text-xs',
      "28": 'text-xs',
      "32": 'text-sm',
      "36": 'text-sm',
      "40": 'text-sm',
      "44": 'text-base',
    },
    gap: {
      '24': 'gap-x-1',
      '28': 'gap-x-1.5',
      '32': 'gap-x-1.5',
      '36': 'gap-x-2',
      '40': 'gap-x-2.5',
      '44': 'gap-x-2.5',
    },
    padding: {
      '24': 'px-2 py-1',
      '28': 'px-2.5 py-1.5',
      '32': 'px-2.5 py-1.5',
      '36': 'px-3 py-2',
      '40': 'px-3.5 py-2.5',
      '44': 'px-3.5 py-2.5',
    },
    leading: {
      padding: {
        '24': 'ps-7',
        '28': 'ps-8',
        '32': 'ps-9',
        '36': 'ps-10',
        '40': 'ps-11',
        '44': 'ps-12',
      },
    },
    trailing: {
      padding: {
        '24': 'pe-7',
        '28': 'pe-8',
        '32': 'pe-9',
        '36': 'pe-10',
        '40': 'pe-11',
        '44': 'pe-12',
      },
    },
    color: {
      white: {
        filled: 'bg-neutral-50 border-b-2 border-neutral-500 rounded-t-4 rounded-b-none hover:border-primary-300 focus:ring-0 focus:border-primary-500 disabled:border-neutral-300',
        underline: 'bg-transparent border-b-2 border-neutral-500 rounded-none hover:border-primary-300 focus:ring-0 focus:border-primary-500 disabled:border-neutral-300',
      },
      gray: {
        filled: 'bg-neutral-50 border-b-2 border-neutral-500 rounded-t-4 rounded-b-none hover:border-primary-300 focus:ring-0 focus:border-primary-500 disabled:border-neutral-300',
        underline: 'bg-transparent border-b-2 border-neutral-500 rounded-none hover:border-primary-300 focus:ring-0 focus:border-primary-500 disabled:border-neutral-300',
      }
    },
    variant: {
      outline: 'text-gray-900 disabled:border-neutral-300',
      none: 'disabled:border-neutral-300',
      filled: 'bg-neutral-50 border-b-2 border-neutral-500 rounded-t-4 rounded-b-none hover:border-{color}-300 focus:ring-0 focus:border-{color}-500 disabled:border-neutral-300',
      underline: 'bg-transparent border-b-2 border-neutral-500 rounded-none hover:border-{color}-300 focus:ring-0 focus:border-{color}-500 disabled:border-neutral-300',
    },
    icon: {
      loading: 'animate-none',
      size: {
        "24": 'h-4 w-4',
        "28": 'h-4 w-4',
        "32": 'h-5 w-5',
        "36": 'h-5 w-5',
        "40": 'h-5 w-5',
        "44": 'h-6 w-6',
      },
      leading: {
        padding: {
          "24": 'px-2',
          "28": 'px-2.5',
          "32": 'px-2.5',
          "36": 'px-3',
          "40": 'px-3.5',
          "44": 'px-3.5',
        },
      },
      trailing: {
        padding: {
          "24": 'px-2',
          "28": 'px-2.5',
          "32": 'px-2.5',
          "36": 'px-3',
          "40": 'px-3.5',
          "44": 'px-3.5',
        },
      },
    },
    default: {
      size: '32',
      color: 'white',
      variant: 'outline',
      loadingIcon: 'i-svg-spinners-90-ring-with-bg',
    },
  },
  popover: {
    wrapper: 'group',
    container: 'group',
    width: 'max-w-[260px]',
    rounded: 'rounded-md',
    background: 'bg-neutral-700 group-[&[color=white]]:bg-white group-[&[color=black]]:bg-neutral-700',
    ring: 'ring-0 group-[&[color=white]]:ring-1 ring-neutral-500',
    base: 'p-2 text-white group-[&[color=white]]:text-neutral-700 group-[&[color=black]]:text-white text-b-3',
    arrow: {
      base: 'z-10 before:w-2 before:h-2',
      shadow: 'before:shadow-none',
      ring: `before:ring-0 before:border group-[&[color=black]]:before:border-none before:border-neutral-500 group-data-[popper-placement*='right']:before:border-t-transparent group-data-[popper-placement*='right']:before:border-r-transparent group-data-[popper-placement*='left']:before:border-l-transparent group-data-[popper-placement*='left']:before:border-b-transparent group-data-[popper-placement*='top']:before:border-t-transparent group-data-[popper-placement*='top']:before:border-l-transparent group-data-[popper-placement*='bottom']:before:border-r-transparent group-data-[popper-placement*='bottom']:before:border-b-transparent`,
      background: 'before:bg-neutral-700 group-[&[color=white]]:before:bg-white group-[&[color=black]]:before:bg-neutral-700',
    },
  },
  radio: {
    wrapper: 'relative flex items-start',
    container: 'flex items-center h-auto',
    base: 'h-4 w-4 relative group-[&[size=size-16]:size-4 group-[&[size=size-24]]:size-6 group-[&[size=size-32]]:size-8 group-[&[size=size-36]]:size-9 group-[&[size=size-44]]:size-11 group-[&[size=size-56]]:size-14 group-[&[size=size-72]]:size-[72px] disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent cursor-pointer after:invisible after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-1/2 after:rounded-full checked:after:visible checked:after:block checked:border-{color}-500',
    border: 'border border-neutral-200',
    color: 'text-transparent after:bg-{color}-500 disabled:after:bg-neutral-500 hover:drop-shadow-[0_0_10px_#F9BED6] hover:border-{color}-500 disabled:drop-shadow-none disabled:text-neutral-500 disabled:bg-neutral-100 disabled:border-neutral-400',
    ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    label: 'text-sm text-black font-normal leading-tight group-[&[size=size-16]:text-sm group-[&[size=size-24]]:text-sm group-[&[size=size-32]]:text-base group-[&[size=size-36]]:text-xl group-[&[size=size-44]]:text-2xl group-[&[size=size-56]]:text-[34px] group-[&[size=size-72]]:text-[60px]',
    help: 'text-xs text-gray-600 leading-tight group-[&[size=size-16]:text-xs group-[&[size=size-24]]:text-xs group-[&[size=size-32]]:text-sm group-[&[size=size-36]]:text-base group-[&[size=size-44]]:text-base group-[&[size=size-56]]:text-xl group-[&[size=size-72]]:text-2xl',
  },
  radioGroup: {
    fieldset: 'group flex flex-col gap-0.5',
  },
  toggle: {
    base: 'group disabled:opacity-100 disabled:bg-neutral-200',
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
      base: 'bg-white shadow-md group-disabled:bg-neutral-100',
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
      loading: 'animate-none text-{color}-500 disabled:text-neutral-500',
    },
    default: {
      loadingIcon: 'i-svg-spinners-ring-resize',
      color: 'primary',
      size: '24',
    },
  },
  tabs: {
    wrapper: 'w-fit group [&[fullWidth=]]:w-full [&[fullWidth=false]]:w-fit',
    list: {
      base: 'group',
      background: 'bg-neutral-50 group-[&[color=white][variant*=solid]]:bg-neutral-50 group-[&[color=black][variant*=solid]]:bg-neutral-600 group-[&[variant*=line]]:bg-transparent',
      rounded: 'group-[&[variant*=line]]:rounded-none',
      padding: 'group-[&[variant*=line]]:p-0',
      marker: {
        wrapper: 'flex group-[&[variant=line]]:z-10',
        base: 'group-[&[variant*=line]]:h-1 group-[&[variant*=line]]:mt-auto',
        background: 'bg-neutral-white group-[&[color=white]]:bg-white group-[&[color=black]]:bg-neutral-800',
        rounded: 'group-[&[variant*=line]]:rounded-none',
        shadow: 'group-[&[variant*=line]]:shadow-none',
      },
      tab: {
        base: 'border-neutral-200 group-[&[variant=line]]:border-b',
        rounded: 'group-[&[variant*=line]]:rounded-none',
        background: '',
        active: 'text-white group-[&[color=white][variant*=solid]]:text-neutral-900 group-[&[color=white][variant*=line]]:text-white group-[&[color=black][variant*=solid]]:text-white group-[&[color=black][variant*=line]]:text-neutral-900',
        inactive: 'text-neutral-700 hover:text-neutral-900 group-[&[color=white][variant*=solid]]:text-neutral-700 group-[&[color=white][variant*=line]]:text-neutral-50 group-[&[color=white][variant*=solid]]:hover:text-neutral-900 group-[&[color=white][variant*=line]]:hover:text-white group-[&[color=black][variant*=solid]]:text-neutral-50 group-[&[color=black][variant*=solid]]:hover:text-white group-[&[color=black][variant*=line]]:text-neutral-900 group-[&[color=black][variant*=line]]:hover:text-neutral-900',
      },
    },
  },
}

const customConfig = {}

const config = mergeConfig<typeof defaultConfig>(strategy, customConfig, defaultConfig)

export default defineAppConfig({
  ui: {
    primary: "uiPrimary",
    ...config
  },
});
