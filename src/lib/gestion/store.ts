/* ==================================================================
   Fichiers de l'outil de gestion, à côté de relances.json, donc hors
   des dossiers de version :
     - VPS : /var/www/thermopompesavendre.ca/shared/data/
       (LEAD_JOURNAL_DIR = shared/data/leads, défini dans shared/.env) ;
     - développement : data/ (hors dépôt, voir .gitignore).
   Dossier imposable avec GESTION_DATA_DIR.

     gestion.json               installateurs et jobs
     gestion-candidatures.json  candidatures reçues par /partenaires
     gestion-connexion.json     liens de connexion (empreintes seulement)
     gestion-secret.key         clé de signature des sessions (générée)

   Chaque écriture relit le fichier sous verrou (en mémoire pour le
   processus, fichier .lock entre processus), puis le remplace d'un
   coup (fichier temporaire + rename). Droits 600 : renseignements
   personnels des clients.
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { journalDir } from "@/lib/crm/lead-journal";
import { withFileLock } from "@/lib/alerts/logisvert-alerts-store";
import type { Candidature, GestionData } from "./types";

export function gestionDataDir(): string {
  return process.env.GESTION_DATA_DIR || path.dirname(journalDir());
}

export const gestionFile = () => path.join(gestionDataDir(), "gestion.json");
export const candidaturesFile = () => path.join(gestionDataDir(), "gestion-candidatures.json");
export const authFile = () => path.join(gestionDataDir(), "gestion-connexion.json");
export const secretFile = () => path.join(gestionDataDir(), "gestion-secret.key");

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

/* File d'attente par fichier : jamais partagée avec d'autres magasins, donc pas d'interblocage. */
const queues = new Map<string, Promise<unknown>>();

function serialize<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const prev = queues.get(key) ?? Promise.resolve();
  const run = prev.then(fn, fn);
  queues.set(key, run.catch(() => undefined));
  return run;
}

/** Lecture, modification et réécriture sous verrou. `fn` renvoie le résultat et s'il faut écrire. */
async function mutateJson<D, T>(file: string, empty: () => D, normalize: (d: D) => D, fn: (data: D) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return serialize(file, () =>
    withFileLock(file, async () => {
      const data = normalize(await readJson(file, empty));
      const { result, changed } = await fn(data);
      if (changed) await writeJson(file, data);
      return result;
    }),
  );
}

/* ---------------- gestion.json ---------------- */

const emptyGestion = (): GestionData => ({ version: 1, installers: [], jobs: [] });
const normalizeGestion = (d: Partial<GestionData>): GestionData => ({
  version: 1,
  installers: Array.isArray(d?.installers) ? d.installers : [],
  jobs: Array.isArray(d?.jobs) ? d.jobs : [],
  ...(d?.seed ? { seed: true } : {}),
});

export async function readGestion(): Promise<GestionData> {
  return normalizeGestion(await readJson<Partial<GestionData>>(gestionFile(), emptyGestion));
}

export function mutateGestion<T>(fn: (data: GestionData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<GestionData, T>(gestionFile(), emptyGestion, normalizeGestion, fn);
}

/* ---------------- gestion-candidatures.json ---------------- */

export interface CandidaturesData {
  version: 1;
  candidatures: Candidature[];
}

const emptyCandidatures = (): CandidaturesData => ({ version: 1, candidatures: [] });
const normalizeCandidatures = (d: Partial<CandidaturesData>): CandidaturesData => ({
  version: 1,
  candidatures: Array.isArray(d?.candidatures) ? d.candidatures : [],
});

export async function readCandidatures(): Promise<CandidaturesData> {
  return normalizeCandidatures(await readJson<Partial<CandidaturesData>>(candidaturesFile(), emptyCandidatures));
}

export function mutateCandidatures<T>(fn: (data: CandidaturesData) => { result: T; changed: boolean }): Promise<T> {
  return mutateJson<CandidaturesData, T>(candidaturesFile(), emptyCandidatures, normalizeCandidatures, fn);
}

/* ---------------- gestion-connexion.json ---------------- */

export interface MagicLinkRecord {
  /** SHA-256 du jeton envoyé par courriel. */
  hash: string;
  email: string;
  createdAt: string;
  expiresAt: string;
  usedAt?: string;
}

export interface AuthData {
  version: 1;
  links: MagicLinkRecord[];
}

const emptyAuth = (): AuthData => ({ version: 1, links: [] });
const normalizeAuth = (d: Partial<AuthData>): AuthData => ({ version: 1, links: Array.isArray(d?.links) ? d.links : [] });

export async function readAuth(): Promise<AuthData> {
  return normalizeAuth(await readJson<Partial<AuthData>>(authFile(), emptyAuth));
}

export function mutateAuth<T>(fn: (data: AuthData) => { result: T; changed: boolean }): Promise<T> {
  return mutateJson<AuthData, T>(authFile(), emptyAuth, normalizeAuth, fn);
}
