export const popover = {
  wrapper: 'group',
  container: 'group',
  width: 'max-w-[260px]',
  rounded: 'rounded-md',
  background: 'bg-neutral-700',
  ring: 'ring-0',
  base: 'p-2 text-white text-[12px]',
  arrow: {
    base: 'z-10 before:w-2 before:h-2',
    shadow: 'before:shadow-none',
    ring: `before:ring-0 before:border before:border-neutral-500 group-data-[popper-placement*='right']:before:border-t-transparent group-data-[popper-placement*='right']:before:border-r-transparent group-data-[popper-placement*='left']:before:border-l-transparent group-data-[popper-placement*='left']:before:border-b-transparent group-data-[popper-placement*='top']:before:border-t-transparent group-data-[popper-placement*='top']:before:border-l-transparent group-data-[popper-placement*='bottom']:before:border-r-transparent group-data-[popper-placement*='bottom']:before:border-b-transparent`,
    background: 'before:bg-neutral-700',
  }
}