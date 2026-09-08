/**
 * Utility Functions
 *
 * Formatting (prices, dates), string helpers, classname merging, etc.
 */

// Une seule implémentation de cn (avec tailwind-merge) : src/lib/utils.ts
export { cn } from "../utils";

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
