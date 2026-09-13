/* ==================================================================
   Avis Google (composant serveur) : va chercher les vrais avis de la
   fiche (Places API (New), revalidés chaque jour) et les confie à la
   mise en scène de la page. Ne rend RIEN si l'API n'est pas configurée,
   en cas d'erreur ou s'il n'y a aucun avis. Aucune donnée structurée
   d'avis (JSON-LD) n'est ajoutée.
   ================================================================== */
import { getGoogleReviews } from "@/lib/avis/google-places";
import { ReviewsAccueil } from "./ReviewsAccueil";
import { ReviewsLivret } from "./ReviewsLivret";

export async function GoogleReviews({ variant }: { variant: "accueil" | "a-propos" }) {
  const data = await getGoogleReviews();
  if (!data || data.reviews.length === 0) return null;
  return variant === "accueil" ? <ReviewsAccueil data={data} /> : <ReviewsLivret data={data} />;
}
