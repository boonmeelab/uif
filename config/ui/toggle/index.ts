export const toggle = {
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
  }
}