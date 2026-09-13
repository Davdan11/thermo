/* ==================================================================
   Réglages des relances et des avis Google, lus au moment de l'appel
   (jamais figés au build) :
   - BUSINESS_MAILING_ADDRESS : adresse postale exigée par la LCAP dans
     tout message commercial. Sans elle, rien ne part.
   - GOOGLE_REVIEW_URL : lien « Laisser un avis » de la fiche Google.
     Sans lui, aucune demande d'avis n'est planifiée ni envoyée.
   ================================================================== */

/** Adresse postale de l'entreprise, ou null si absente. */
export function businessMailingAddress(): string | null {
  const v = (process.env.BUSINESS_MAILING_ADDRESS ?? "").trim().replace(/\s+/g, " ");
  return v.length >= 8 ? v : null;
}

/** Lien d'avis Google (https seulement), ou null si absent ou invalide. */
export function googleReviewUrl(): string | null {
  const raw = (process.env.GOOGLE_REVIEW_URL ?? "").trim();
  if (!raw) return null;
  try {
    const u = new URL(raw);
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
}
