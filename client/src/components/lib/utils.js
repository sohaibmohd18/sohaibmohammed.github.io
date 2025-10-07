// lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names safely, with Tailwind's conflict resolution.
 *
 * Usage:
 *  cn("p-4", condition && "bg-red-500")
 *  → "p-4 bg-red-500"
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}