/**
 * Utility Functions
 *
 * Formatting (prices, dates), string helpers, classname merging, etc.
 */

import { type ClassValue, clsx } from "clsx";

/**
 * Merge Tailwind classes safely.
 * Lightweight alternative — no twMerge dependency for now.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format a price in Canadian dollars.
 */
export function formatPriceCAD(cents: number): string {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}
