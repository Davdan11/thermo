/* ==================================================================
   Vrais avis Google de l'entreprise, par Places API (New) :
   GET https://places.googleapis.com/v1/places/{GOOGLE_PLACE_ID}
   (clé GOOGLE_PLACES_API_KEY, champs demandés : nom, fiche Maps,
   note, nombre d'avis, avis). Réponse mise en cache par Next et
   revalidée une fois par jour.

   Renvoie null (et la section ne s'affiche pas) si les variables sont
   absentes, si Google répond une erreur, ou s'il n'y a aucun avis.
   Jamais d'avis d'exemple ici : les données d'aperçu sont dans
   src/components/avis/fixtures.ts, lues seulement par /dev/avis-google.
   ================================================================== */
import type { GoogleReview, GoogleReviewsData } from "./types";

/** Revalidation quotidienne. Note : les règles de Google limitent la mise en cache du contenu Places (voir le rapport). */
export const REVIEWS_REVALIDATE_SECONDS = 86_400;
const FIELD_MASK = "displayName,googleMapsUri,rating,userRatingCount,reviews";
const DAY_MS = 24 * 60 * 60 * 1000;

export function placesConfig(): { key: string; placeId: string } | null {
  const key = (process.env.GOOGLE_PLACES_API_KEY ?? "").trim();
  const placeId = (process.env.GOOGLE_PLACE_ID ?? "").trim().replace(/^places\//, "");
  if (!key || !placeId || !/^[A-Za-z0-9_-]+$/.test(placeId)) return null;
  return { key, placeId };
}

function https(u: unknown): string | null {
  if (typeof u !== "string" || !u) return null;
  try {
    const url = new URL(u);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

/** « aujourd’hui », « hier », « il y a 3 semaines », « le mois dernier », « il y a 2 ans ». */
export function relativeTimeFr(iso: string, now = new Date()): string {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return "";
  const days = Math.max(0, Math.floor((now.getTime() - t) / DAY_MS));
  const rtf = new Intl.RelativeTimeFormat("fr-CA", { numeric: "auto" });
  if (days < 7) return rtf.format(-days, "day");
  if (days < 30) return rtf.format(-Math.floor(days / 7), "week");
  if (days < 365) return rtf.format(-Math.max(1, Math.floor(days / 30.44)), "month");
  return rtf.format(-Math.floor(days / 365.25), "year");
}

interface RawReview {
  name?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  publishTime?: string;
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
}

/** Réponse de Place Details (New) → données affichables, ou null si inutilisable ou sans avis. */
export function parsePlaceDetails(json: unknown, now = new Date()): GoogleReviewsData | null {
  if (!json || typeof json !== "object") return null;
  const j = json as { displayName?: { text?: string }; googleMapsUri?: string; rating?: number; userRatingCount?: number; reviews?: RawReview[] };
  const mapsUri = https(j.googleMapsUri);
  if (!mapsUri) return null;
  const reviews: GoogleReview[] = [];
  for (const [i, r] of (Array.isArray(j.reviews) ? j.reviews : []).entries()) {
    const rating = typeof r?.rating === "number" ? Math.round(r.rating) : NaN;
    if (!(rating >= 1 && rating <= 5)) continue;
    // Le texte d'origine : jamais la traduction automatique.
    const original = r.originalText?.text?.trim() ? r.originalText : r.text;
    reviews.push({
      id: r.name || `avis-${i}`,
      author: r.authorAttribution?.displayName?.trim() || "Utilisateur Google",
      authorUri: https(r.authorAttribution?.uri),
      authorPhotoUri: https(r.authorAttribution?.photoUri),
      rating,
      text: original?.text?.trim() ?? "",
      lang: original?.languageCode ?? null,
      publishTime: typeof r.publishTime === "string" ? r.publishTime : null,
      relativeTime: (typeof r.publishTime === "string" && relativeTimeFr(r.publishTime, now)) || r.relativePublishTimeDescription || "",
      reviewUri: https(r.googleMapsUri),
    });
  }
  if (reviews.length === 0) return null;
  return {
    placeName: j.displayName?.text?.trim() || null,
    mapsUri,
    rating: typeof j.rating === "number" && j.rating >= 1 && j.rating <= 5 ? j.rating : null,
    count: typeof j.userRatingCount === "number" && j.userRatingCount > 0 ? j.userRatingCount : null,
    reviews,
  };
}

/** Avis Google de la fiche, ou null (non configuré, erreur, aucun avis). Ne lance jamais. */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const cfg = placesConfig();
  if (!cfg) return null;
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(cfg.placeId)}?languageCode=fr&regionCode=CA`, {
      headers: { "X-Goog-Api-Key": cfg.key, "X-Goog-FieldMask": FIELD_MASK },
      next: { revalidate: REVIEWS_REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`[avis google] Places API : réponse ${res.status}`);
      return null;
    }
    return parsePlaceDetails(await res.json());
  } catch (err) {
    console.error("[avis google] Places API injoignable :", err);
    return null;
  }
}
