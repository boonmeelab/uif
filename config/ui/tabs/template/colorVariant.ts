export type Variant = 'solid' | 'underline' | 'line' | string
type Props = { color?: string, variant?: Variant }

export default function ({ color = 'white', variant = 'solid' }: Props = {}) {
  const solid = {
    white: {
      list: {
        background: 'bg-neutral-50',
        marker: {
          background: 'bg-white',
        },
        tab: {
          active: 'text-neutral-900',
          inactive: 'text-neutral-700 hover:text-neutral-900',
        },
      }
    },
    black: {
      list: {
        background: 'bg-neutral-700',
        marker: {
          background: 'bg-neutral-900',
        },
        tab: {
          active: 'text-white',
          inactive: 'text-neutral-50 hover:text-white',
        },
      }
    },
    custom: {
      list: {
        marker: {
          background: `bg-${color}-500`,
        },
        tab: {
          inactive: `hover:text-${color}`,
        },
      }
    }
  }

  const defaultLineUnderline = {
    list: {
      background: 'bg-transparent',
      rounded: 'rounded-none',
      padding: 'p-0',
      marker: {
        wrapper: 'z-10',
        base: 'h-1 mt-auto',
        rounded: 'rounded-none',
        shadow: 'shadow-none',
      },
      tab: {
        base: '',
        rounded: 'rounded-none',
        active: '',
        inactive: '',
      }
    }
  }

  const line = {
    white: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: 'bg-white'
        },
        tab: {
          base: 'border-b',
          active: 'text-white',
          inactive: 'text-neutral-50 hover:text-white'
        }
      }
    }),
    black: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: 'bg-neutral-900'
        },
        tab: {
          base: 'border-b',
          active: 'text-neutral-900',
          inactive: 'text-neutral-800 hover:text-neutral-900'
        }
      }
    }),
    custom: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: `bg-${color}-500`
        },
        tab: {
          base: 'border-b',
          active: `text-${color}-500`,
          inactive: `hover:text-${color}`
        }
      }
    })
  }

  const underline = {
    white: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: 'bg-white'
        },
        tab: {
          active: 'text-white',
          inactive: 'text-neutral-50 hover:text-white'
        }
      }
    }),
    black: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: 'bg-neutral-900'
        },
        tab: {
          active: 'text-neutral-900',
          inactive: 'text-neutral-800 hover:text-neutral-900'
        }
      }
    }),
    custom: _merge(_cloneDeep(defaultLineUnderline), {
      list: {
        marker: {
          background: `bg-${color}-500`
        },
        tab: {
          active: `text-${color}-500`,
          inactive: `hover:text-${color}`
        }
      }
    })
  }

  const key = color === 'white' || color === 'black' ? `${variant}.${color}` : `${variant}.custom`

  return _get({ solid, line, underline }, key, solid.white)
}