import { readFileSync } from "node:fs";
import { join } from "node:path";
import { frDateIso, listDateIsoFromMeta, type ListeLogisVertClient, type LogisVertMetaFichier } from "./logisvert-meta-format";

/* ------------------------------------------------------------------
   Métadonnées de la liste LogisVert en vigueur : nombre de combinaisons,
   dates (liste, dernière vérification), source. Serveur seulement.

   Lues sur le disque à l'exécution, jamais importées : le robot de nuit
   remplace le fichier dans la version servie puis redémarre le serveur
   (scripts/publier-donnees.sh). Un import JSON serait figé dans le code
   compilé jusqu'à la prochaine reconstruction.
   ------------------------------------------------------------------ */

export { listDateIsoFromMeta, frDateIso, type ListeLogisVertClient, type LogisVertMetaFichier };

const META_PATH = join(process.cwd(), "src/lib/subsidies/logisvert-metadata.json");
let cache: LogisVertMetaFichier | null = null;

/** Contenu du fichier de métadonnées (lu une fois par processus). */
export function lireMetaLogisVert(): LogisVertMetaFichier {
  if (!cache) {
    try {
      cache = JSON.parse(readFileSync(META_PATH, "utf8")) as LogisVertMetaFichier;
    } catch {
      cache = {};
    }
  }
  return cache;
}

export interface LogisVertListInfo {
  /** Nombre de combinaisons (numéros AHRI) de la liste officielle, null si inconnu. */
  count: number | null;
  /** Date de la liste, ex. « 17 septembre 2026 ». */
  listDate: string | null;
  /** Date de la liste, AAAA-MM-JJ. */
  listDateIso: string | null;
  /** Date de notre dernière vérification de la liste. */
  checkedDate: string | null;
}

export function getLogisVertListInfo(): LogisVertListInfo {
  const m = lireMetaLogisVert();
  const iso = listDateIsoFromMeta(m);
  return {
    count: typeof m.count === "number" && m.count > 0 ? m.count : null,
    listDate: iso ? frDateIso(iso) : null,
    listDateIso: iso,
    checkedDate: m.updatedAt
      ? new Date(m.updatedAt).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Toronto" })
      : null,
  };
}

/** Données de la liste à passer à un composant client (props). */
export function listeLogisVertPourClient(): ListeLogisVertClient {
  const m = lireMetaLogisVert();
  return { count: typeof m.count === "number" ? m.count : 0, listDateIso: listDateIsoFromMeta(m), updatedAt: m.updatedAt ?? null };
}
