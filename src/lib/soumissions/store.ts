/* ==================================================================
   Fichiers du créateur de soumissions, dans le même dossier que
   l'outil de gestion (shared/data sur le VPS, data/ en développement,
   GESTION_DATA_DIR pour l'imposer) :

     soumissions.json           soumissions, versions, acceptations
                                (instantanés figés) et métadonnées photos
     soumissions-reglages.json  entreprise, textes, liste de prix
     soumissions-vues.jsonl     une ligne par consultation d'une soumission
     soumissions-photos/        photos du chantier (compressées)

   Même méthode que src/lib/gestion/store.ts : chaque écriture relit le
   fichier sous verrou (file d'attente en mémoire + fichier .lock entre
   processus), puis le remplace d'un coup (temporaire + rename), droits
   600 : renseignements personnels des clients.
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { withFileLock } from "@/lib/alerts/logisvert-alerts-store";
import { gestionDataDir } from "@/lib/gestion/store";
import { normalizeSettings } from "./defaults";
import type { Settings, SoumissionsData } from "./types";

export const soumissionsFile = () => path.join(gestionDataDir(), "soumissions.json");
export const settingsFile = () => path.join(gestionDataDir(), "soumissions-reglages.json");
export const viewsFile = () => path.join(gestionDataDir(), "soumissions-vues.jsonl");
export const photosDir = () => path.join(gestionDataDir(), "soumissions-photos");

async function readJson<T>(file: string, empty: () => T): Promise<T> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return empty();
    throw err;
  }
}

async function writeJson(file: string, data: unknown): Promise<void> {
  await fs.mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 1), { mode: 0o600 });
  await fs.rename(tmp, file);
}

const queues = new Map<string, Promise<unknown>>();

function serialize<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const prev = queues.get(key) ?? Promise.resolve();
  const run = prev.then(fn, fn);
  queues.set(key, run.catch(() => undefined));
  return run;
}

type Mutator<D, T> = (data: D) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>;

async function mutateJson<D, T>(file: string, empty: () => D, normalize: (d: D) => D, fn: Mutator<D, T>): Promise<T> {
  return serialize(file, () =>
    withFileLock(file, async () => {
      const data = normalize(await readJson(file, empty));
      const { result, changed } = await fn(data);
      if (changed) await writeJson(file, data);
      return result;
    }),
  );
}

/* ---------------- soumissions.json ---------------- */

const emptyData = (): SoumissionsData => ({ version: 1, counters: {}, quotes: [], photos: [], templates: [] });
const normalizeData = (d: Partial<SoumissionsData>): SoumissionsData => ({
  version: 1,
  counters: d?.counters && typeof d.counters === "object" ? d.counters : {},
  quotes: Array.isArray(d?.quotes) ? d.quotes : [],
  photos: Array.isArray(d?.photos) ? d.photos : [],
  templates: Array.isArray(d?.templates) ? d.templates : [],
});

export async function readSoumissions(): Promise<SoumissionsData> {
  return normalizeData(await readJson<Partial<SoumissionsData>>(soumissionsFile(), emptyData));
}

export function mutateSoumissions<T>(fn: Mutator<SoumissionsData, T>): Promise<T> {
  return mutateJson<SoumissionsData, T>(soumissionsFile(), emptyData, normalizeData, fn);
}

/* ---------------- soumissions-reglages.json ---------------- */

export async function readSettings(): Promise<Settings> {
  return normalizeSettings(await readJson<Partial<Settings> | null>(settingsFile(), () => null));
}

export function mutateSettings<T>(fn: Mutator<Settings, T>): Promise<T> {
  return mutateJson<Settings, T>(settingsFile(), () => normalizeSettings(null), (d) => normalizeSettings(d), fn);
}

/* ---------------- soumissions-vues.jsonl ---------------- */

export interface ViewEntry {
  at: string;
  quoteId: string;
  number: string;
  v: number;
  versionId: string;
  /** Navigateur, tronqué (aucune adresse IP pour une simple consultation). */
  ua: string;
}

export async function appendView(entry: ViewEntry): Promise<void> {
  const file = viewsFile();
  await fs.mkdir(path.dirname(file), { recursive: true });
  await serialize(file, () => fs.appendFile(file, `${JSON.stringify(entry)}\n`, { mode: 0o600 }));
}

export async function readViews(quoteId?: string): Promise<ViewEntry[]> {
  let raw = "";
  try {
    raw = await fs.readFile(viewsFile(), "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
  const out: ViewEntry[] = [];
  for (const line of raw.split("\n")) {
    if (!line.trim()) continue;
    try {
      const e = JSON.parse(line) as ViewEntry;
      if (!quoteId || e.quoteId === quoteId) out.push(e);
    } catch {
      /* ligne abîmée : ignorée */
    }
  }
  return out;
}
