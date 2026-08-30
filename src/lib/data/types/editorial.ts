/* ==================================================================
   Editorial Content — consumer-facing copy, separate from specs
   ================================================================== */

export interface EditorialContent {
  modelId: string;
  /** Short consumer summary */
  summary?: string | null;
  /** "Best for" one-liner */
  bestFor?: string | null;
  /** Key strengths */
  pros?: string[] | null;
  /** Key weaknesses */
  cons?: string[] | null;
  /** Explanation for beginners */
  beginnerExplanation?: string | null;
  /** Our verdict */
  verdict?: string | null;
  /** Internal recommendation level (not displayed directly) */
  recommendation?: "highly_recommended" | "recommended" | "acceptable" | "not_recommended" | null;
  /** Internal-only notes — NEVER exposed */
  internalNotes?: string | null;
  /** FAQ entries */
  faq?: { question: string; answer: string }[] | null;
  /** SEO-specific content */
  seoTitle?: string | null;
  seoDescription?: string | null;
  /** ISO dates */
  updatedAt: string;
  authorId?: string | null;
}
