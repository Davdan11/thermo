/* ==================================================================
   Pricing — Formatting utilities

   Currency display, rounding, labels.
   ================================================================== */

/**
 * Format cents to a human-readable CAD amount.
 * Rounds to nearest $50 for estimates (avoids false precision).
 * @example formatCents(1234500) → "12 350 $"
 */
export function formatCents(cents: number, round = true): string {
  let dollars = cents / 100;
  if (round) {
    dollars = Math.round(dollars / 50) * 50;
  }
  return `${dollars.toLocaleString("fr-CA", { maximumFractionDigits: 0 })} $`;
}

/**
 * Format a price range.
 * @example formatRange(500000, 800000) → "5 000 $ à 8 000 $"
 */
export function formatRange(minCents: number, maxCents: number): string {
  return `${formatCents(minCents)} à ${formatCents(maxCents)}`;
}

/**
 * Round cents to nearest $50 (removes false precision).
 */
export function roundToNearest50(cents: number): number {
  return Math.round(cents / 5000) * 5000;
}
