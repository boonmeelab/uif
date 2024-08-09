export const input = {
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
  }
}