export const tabs = {
  wrapper: 'w-fit [&[fullWidth=]]:w-full [&[fullWidth=false]]:w-fit',
  list: {
    base: 'group',
    background: 'bg-neutral-50',
    marker: {
      wrapper: 'flex',
      background: 'bg-white',
    },
    tab: {
      base: 'border-neutral-200',
      active: 'text-neutral-900',
      inactive: 'text-neutral-700 hover:text-neutral-900',
    },
  }
}