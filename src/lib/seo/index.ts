/**
 * SEO Utilities
 *
 * Metadata generation helpers, structured data (JSON-LD), sitemap helpers, etc.
 */

import type { Metadata } from "next";

const SITE_NAME = "ThermopompesÀVendre.ca";
const SITE_DESCRIPTION =
  "Comparez les thermopompes, comprenez les prix et les subventions, et trouvez la machine adaptée à votre propriété au Québec.";

/**
 * Generate page metadata with consistent defaults.
 */
export function createMetadata(overrides: Metadata = {}): Metadata {
  return {
    title: overrides.title ?? SITE_NAME,
    description: overrides.description ?? SITE_DESCRIPTION,
    ...overrides,
  };
}
