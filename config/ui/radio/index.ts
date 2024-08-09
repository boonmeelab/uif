export const radio = {
  container: 'h-auto',
  // base: 'relative cursor-pointer after:invisible after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-1/2 after:rounded-full checked:after:visible checked:after:block',
  base: 'relative cursor-pointer',
  border: 'border-neutral-200',
  // color: 'text-transparent after:bg-{color}-500 disabled:after:bg-neutral-500 disabled:text-neutral-500 disabled:bg-neutral-100 ',
  color: 'text-{color}-500 disabled:text-neutral-200 disabled:bg-neutral-200',
  // ring: 'hover:border-{color}-500 checked:border-{color}-500 disabled:border-neutral-400',
  label: 'text-black font-normal leading-tight',
  help: 'text-xs text-gray-600 leading-tight',
}