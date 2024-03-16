import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function leadingZero(num: number) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}
