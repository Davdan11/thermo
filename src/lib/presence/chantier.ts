/* ==================================================================
   Série « chantier » : RÉSERVÉE, DÉSACTIVÉE (SERIES_INFO.chantier.available = false).

   Point d'extension pour l'outil terrain de la phase 2 du CRM :
   1. l'outil terrain enregistre les photos de fin de chantier et la case
      de consentement du client (date et texte du consentement) ;
   2. il fournit un ChantierSource qui ne renvoie QUE des photos
      consenties, sans nom, adresse ni numéro (Loi 25) : ville seulement ;
   3. on remplace `chantierSource` ci-dessous, on écrit buildChantier()
      dans templates.ts (vraies photos seulement, jamais d'image générée
      présentée comme un chantier) et on passe `available` à true dans
      series.ts : le vendredi bascule alors de « comparatif » à « chantier ».
   La série restera en approbation manuelle (autoAllowed: false).
   ================================================================== */

export interface ChantierPhoto {
  /** Chemin public de la photo réelle (servie par le site). */
  path: string;
  takenAt: string;
  /** Ville seulement, jamais l'adresse. */
  city: string | null;
  /** Consentement du client à la publication (horodaté). */
  consentAt: string;
  jobId: string;
  /** Modèle installé, s'il est connu (slug du catalogue). */
  modelSlug?: string | null;
}

export interface ChantierSource {
  /** Photos consenties depuis cette date (AAAA-MM-JJ). */
  consentedPhotos(since: string): Promise<ChantierPhoto[]>;
}

/** Aucune source tant que l'outil terrain n'existe pas. */
export const chantierSource: ChantierSource = {
  async consentedPhotos() {
    return [];
  },
};
