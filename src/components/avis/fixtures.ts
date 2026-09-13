/* ==================================================================
   Données FICTIVES pour l'aperçu de développement /dev/avis-google.
   Importées seulement par cette page, qui répond 404 hors de
   `next dev` (NODE_ENV=development) : elles ne peuvent jamais
   s'afficher sur le site en ligne. Aucun vrai client, aucun vrai avis.
   ================================================================== */
import type { GoogleReviewsData } from "@/lib/avis/types";

const lorem = "Texte d’exemple pour vérifier la mise en page : longueur, retour à la ligne et coupure du texte. Ce n’est pas un vrai avis.";

export const REVIEW_FIXTURES: GoogleReviewsData = {
  placeName: "Aperçu (données fictives)",
  mapsUri: "https://maps.google.com/",
  rating: 4.6,
  count: 12,
  reviews: [
    { id: "f1", author: "Exemple A.", authorUri: null, authorPhotoUri: null, rating: 5, text: `Avis fictif court. ${lorem}`, lang: "fr", publishTime: null, relativeTime: "il y a 2 semaines", reviewUri: null },
    { id: "f2", author: "Exemple B.", authorUri: null, authorPhotoUri: null, rating: 4, text: `Avis fictif long. ${lorem} ${lorem} ${lorem}`, lang: "fr", publishTime: null, relativeTime: "le mois dernier", reviewUri: null },
    { id: "f3", author: "Exemple C.", authorUri: null, authorPhotoUri: null, rating: 5, text: "", lang: null, publishTime: null, relativeTime: "il y a 3 mois", reviewUri: null },
    { id: "f4", author: "Exemple D.", authorUri: null, authorPhotoUri: null, rating: 5, text: `Avis fictif moyen. ${lorem} ${lorem}`, lang: "fr", publishTime: null, relativeTime: "il y a 5 mois", reviewUri: null },
    { id: "f5", author: "Exemple E.", authorUri: null, authorPhotoUri: null, rating: 3, text: `Sample review, not real. ${lorem}`, lang: "en", publishTime: null, relativeTime: "l’année dernière", reviewUri: null },
  ],
};
