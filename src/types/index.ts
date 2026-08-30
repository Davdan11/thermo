/**
 * Shared TypeScript Types
 *
 * Domain types for products, brands, leads, subsidies, etc.
 */

/**
 * @deprecated Use `ProductModel` from `@/lib/data/types` instead.
 * This type will be removed in a future version.
 */
export interface Thermopompe {
  slug: string;
  name: string;
  brand: string;
  type: "murale" | "centrale" | "bibloc" | "gainable";
  btuCooling: number;
  btuHeating: number;
  seer2?: number;
  hspf2?: number;
  /** Price in cents CAD — undefined means "à confirmer" */
  priceCAD?: number;
  imageUrl?: string;
}

/**
 * @deprecated Use `Brand` from `@/lib/data/types` instead.
 * This type will be removed in a future version.
 */
export interface Marque {
  slug: string;
  name: string;
  logoUrl?: string;
  description?: string;
}

/** A lead / quote request */
export interface SoumissionRequest {
  name: string;
  email: string;
  phone?: string;
  city: string;
  postalCode: string;
  propertyType: "maison" | "condo" | "duplex" | "triplex" | "commercial";
  message?: string;
}
