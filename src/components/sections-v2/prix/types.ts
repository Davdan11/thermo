/* Données de « Prix : notre approche », rendues par deux mises en page (reçu, étiquette). */
export type ApprocheData = {
  keyword: string;
  /** Nombre d'appareils admissibles, déjà formaté (fr-CA). */
  count: string;
  /** Même nombre, brut (pour le compteur animé). */
  countValue: number;
  factors: ReadonlyArray<readonly [string, string]>;
  inclus: ReadonlyArray<string>;
  etapes: ReadonlyArray<readonly [string, string]>;
  faq: ReadonlyArray<{ q: string; a: string }>;
  site: string;
};
