/* ------------------------------------------------------------------
   Format des métadonnées de la liste LogisVert, sans accès disque :
   importable par les composants client. Les valeurs elles-mêmes se lisent
   au serveur (logisvert-meta.ts) et arrivent au client par les props, pour
   qu'une mise à jour de nuit des données s'affiche sans reconstruire le site.
   ------------------------------------------------------------------ */

/** Contenu de src/lib/subsidies/logisvert-metadata.json (écrit par scripts/scrape-logisvert.mjs). */
export interface LogisVertMetaFichier {
  updatedAt?: string;
  source?: string;
  toolUrl?: string;
  sourceFile?: string;
  sourceUrl?: string;
  /** AAAA-MM-JJ : date du fichier officiel. */
  listDate?: string;
  sourceSha256?: string;
  contentSha256?: string;
  rows?: number;
  /** Combinaisons (numéros AHRI uniques). */
  count?: number;
  bonificationMultilogements?: number;
  enrichedFromEnergyStar?: number;
}

/** Ce qu'un composant client reçoit de la liste en vigueur. */
export interface ListeLogisVertClient {
  count: number;
  /** AAAA-MM-JJ, null si inconnue. */
  listDateIso: string | null;
  /** Horodatage ISO de notre dernière lecture de la liste. */
  updatedAt: string | null;
}

/**
 * AAAA-MM-JJ de la liste : champ listDate des métadonnées, sinon tiré du nom du fichier source
 * (« proprietaire-habitation-existante-20260917.csv.gz », ou l'ancien « proprio-maison-fr-17-07-2025.csv.gz »).
 */
export function listDateIsoFromMeta(m: { listDate?: string; sourceFile?: string }): string | null {
  if (typeof m.listDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(m.listDate)) return m.listDate;
  const file = String(m.sourceFile ?? "");
  const ymd = file.match(/-(\d{4})(\d{2})(\d{2})\.csv/);
  if (ymd) return `${ymd[1]}-${ymd[2]}-${ymd[3]}`;
  const dmy = file.match(/(\d{2})-(\d{2})-(\d{4})/);
  return dmy ? `${dmy[3]}-${dmy[2]}-${dmy[1]}` : null;
}

/** « 17 septembre 2026 » à partir de AAAA-MM-JJ (même rendu au serveur et au client). */
export const frDateIso = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
