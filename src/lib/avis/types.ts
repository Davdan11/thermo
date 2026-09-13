/* Avis Google (Places API (New)) tels qu'affichés sur le site. Types seulement : importable partout. */

export interface GoogleReview {
  id: string;
  /** Nom affiché de l'auteur (attribution obligatoire). */
  author: string;
  /** Profil Google de l'auteur, à lier quand il est fourni. */
  authorUri: string | null;
  authorPhotoUri: string | null;
  /** Note de 1 à 5. */
  rating: number;
  /** Texte d'origine, jamais modifié ni traduit (vide : note sans commentaire). */
  text: string;
  /** Langue du texte d'origine (« fr », « en »…). */
  lang: string | null;
  publishTime: string | null;
  /** « il y a 3 semaines », calculé au rendu. */
  relativeTime: string;
  /** L'avis sur Google Maps. */
  reviewUri: string | null;
}

export interface GoogleReviewsData {
  placeName: string | null;
  /** Fiche Google Maps de l'entreprise. */
  mapsUri: string;
  rating: number | null;
  count: number | null;
  reviews: GoogleReview[];
}
