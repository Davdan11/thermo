/* ==================================================================
   Compteur d'écrans atteints dans ThermoMatch — côté serveur.

   Un seul fichier, à côté des autres données de gestion :
     thermomatch-etapes.json   { version, jours: { "2026-09-17": { lieu: 12, … } } }

   Rien d'autre n'y entre : pas d'adresse IP, pas de réponse, pas
   d'identifiant de visiteur. Le fichier sert à voir où les gens
   s'arrêtent dans le parcours (/gestion/statistiques), sans témoin
   ni outil externe. Les jours de plus de 180 jours sont oubliés.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { SCREEN_IDS, ETAPE_RESULTATS } from "./etapes";

/** Écrans connus : rien d'autre n'est jamais écrit dans le fichier. */
export const ETAPES_CONNUES: readonly string[] = [...SCREEN_IDS, ETAPE_RESULTATS];

const JOURS_GARDES = 180;
const TZ = "America/Toronto";

export interface EtapesData {
  version: 1;
  /** Une entrée par jour (AAAA-MM-JJ), un compteur par écran atteint. */
  jours: Record<string, Record<string, number>>;
}

export const etapesFile = () => path.join(gestionDataDir(), "thermomatch-etapes.json");

const empty = (): EtapesData => ({ version: 1, jours: {} });

function normalize(d: Partial<EtapesData>): EtapesData {
  const jours: EtapesData["jours"] = {};
  const src = d?.jours && typeof d.jours === "object" ? d.jours : {};
  for (const [jour, compteurs] of Object.entries(src)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(jour) || !compteurs || typeof compteurs !== "object") continue;
    const clean: Record<string, number> = {};
    for (const [ecran, n] of Object.entries(compteurs as Record<string, unknown>)) {
      if (ETAPES_CONNUES.includes(ecran) && typeof n === "number" && Number.isFinite(n) && n > 0) clean[ecran] = Math.floor(n);
    }
    if (Object.keys(clean).length) jours[jour] = clean;
  }
  return { version: 1, jours };
}

/** Le jour courant à Montréal (AAAA-MM-JJ). */
export function jourDe(now: Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

/** Ajoute 1 à l'écran atteint aujourd'hui. Un écran inconnu est ignoré, sans erreur. */
export async function compterEtape(ecran: string, now = new Date()): Promise<void> {
  if (!ETAPES_CONNUES.includes(ecran)) return;
  const jour = jourDe(now);
  const limite = jourDe(new Date(now.getTime() - JOURS_GARDES * 86_400_000));
  await mutateJson<EtapesData, void>(etapesFile(), empty, normalize, (data) => {
    for (const j of Object.keys(data.jours)) if (j < limite) delete data.jours[j];
    const compteurs = (data.jours[jour] ??= {});
    compteurs[ecran] = (compteurs[ecran] ?? 0) + 1;
    return { result: undefined, changed: true };
  });
}

export interface EtapeAgregee {
  ecran: string;
  /** Nombre de visiteurs qui ont atteint cet écran sur la période. */
  n: number;
  /** Part de ceux qui avaient atteint le premier écran (0 à 1) ; null si personne n'y est arrivé. */
  part: number | null;
  /** Combien se sont arrêtés là plutôt que d'aller à l'écran suivant. */
  abandons: number;
}

/**
 * Le parcours des `jours` derniers jours, écran par écran, dans l'ordre.
 * Les écrans jamais atteints sont rendus à zéro : le trou se voit.
 */
export async function lireEtapes(jours: number, now = new Date()): Promise<{ etapes: EtapeAgregee[]; total: number; termines: number; depuis: string | null }> {
  const data = normalize(await readJson<Partial<EtapesData>>(etapesFile(), empty));
  const limite = jourDe(new Date(now.getTime() - jours * 86_400_000));
  const cumul: Record<string, number> = {};
  const jours_vus: string[] = [];
  for (const [jour, compteurs] of Object.entries(data.jours)) {
    if (jour < limite) continue;
    jours_vus.push(jour);
    for (const [ecran, n] of Object.entries(compteurs)) cumul[ecran] = (cumul[ecran] ?? 0) + n;
  }
  const depuis = jours_vus.length ? jours_vus.slice().sort()[0] : null;
  const ordre = ETAPES_CONNUES;
  const total = cumul[ordre[0]] ?? 0;
  const etapes: EtapeAgregee[] = ordre.map((ecran, i) => {
    const n = cumul[ecran] ?? 0;
    const suivant = i + 1 < ordre.length ? (cumul[ordre[i + 1]] ?? 0) : 0;
    return { ecran, n, part: total > 0 ? n / total : null, abandons: Math.max(0, n - suivant) };
  });
  return { etapes, total, termines: cumul[ETAPE_RESULTATS] ?? 0, depuis };
}
