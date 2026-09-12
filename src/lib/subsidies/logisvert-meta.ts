import meta from "./logisvert-metadata.json";

/* ------------------------------------------------------------------
   Métadonnées légères de la liste LogisVert d'Hydro-Québec : nombre de
   jumelages et dates (liste, dernière vérification). À utiliser là où
   charger les 34 Mo de montants serait disproportionné (pied de page).
   ------------------------------------------------------------------ */

export interface LogisVertListInfo {
  /** Nombre de jumelages de la liste officielle, null si inconnu. */
  count: number | null;
  /** Date de la liste (tirée du nom du fichier source), ex. « 17 juillet 2025 ». */
  listDate: string | null;
  /** Date de notre dernière vérification de la liste. */
  checkedDate: string | null;
}

const frDate = (d: Date, timeZone: string) => d.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone });

export function getLogisVertListInfo(): LogisVertListInfo {
  const m = meta as { updatedAt?: string; sourceFile?: string; count?: number };
  const dm = String(m.sourceFile ?? "").match(/(\d{2})-(\d{2})-(\d{4})/);
  return {
    count: typeof m.count === "number" && m.count > 0 ? m.count : null,
    listDate: dm ? frDate(new Date(Date.UTC(+dm[3], +dm[2] - 1, +dm[1], 12)), "UTC") : null,
    checkedDate: m.updatedAt ? frDate(new Date(m.updatedAt), "America/Toronto") : null,
  };
}
