import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default defineNuxtPlugin((nuxtApp) => {
  const mc = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

  return {
    provide: {
      mc,
    },
  };
});
