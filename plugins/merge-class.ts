import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default defineNuxtPlugin((nuxtApp) => {
  const cl = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

  return {
    provide: {
      cl,
    },
  };
});
