/**
 * Data Layer — Public API
 *
 * All product data access goes through this module.
 * Import from "@/lib/data" in components and pages.
 */

/* ---- Types (re-export for convenience) ---- */
export type * from "./types";

/* ---- Queries ---- */
export * from "./queries";

/* ---- Registry (for advanced use / testing) ---- */
export { registry } from "./registry";
