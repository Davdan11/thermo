/* ==================================================================
   Trousse contractuelle (texte juridique fourni par le propriétaire).

   Le texte est CONFIDENTIEL et le dépôt est public : il vit seulement
   dans trousse.json (dossier de gestion, shared/data en production),
   jamais dans le code ni dans les commits. Import :
     npx tsx scripts/importer-trousse.ts <fichier .txt>
   Le .txt est l'extraction du .docx : une ligne par paragraphe, titres
   préfixés par « ## », « ### » ou « #### ».

   Identifiants de section : le numéro quand il existe (« 2.11 »,
   « 3.2 », « Annexe A »), sinon parent + « / » + titre simplifié
   (« 3.2/paiement », « 2/entre-les-parties »). Chaque consommateur
   (contrat, entente, politique, messages) lit ses sections par
   identifiant et remplit les champs entre crochets avec
   src/lib/plateforme/identite.ts.
   ================================================================== */

import { createHash } from "node:crypto";
import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";

export interface TrousseSection {
  id: string;
  level: 2 | 3 | 4;
  number: string | null;
  title: string;
  parent: string | null;
  paragraphs: string[];
}

export interface TrousseData {
  /** « 1.0 » d'après « VERSION DE TRAVAIL 1.0 ». */
  version: string;
  /** Date indiquée sur la page titre, telle quelle. */
  sourceDate: string | null;
  /** Empreinte SHA-256 du texte importé : preuve de la version exacte. */
  sha256: string | null;
  importedAt: string | null;
  importedBy: string | null;
  /** Lignes avant le premier titre (page titre). */
  preamble: string[];
  sections: TrousseSection[];
}

export const trousseFile = () => path.join(gestionDataDir(), "trousse.json");

export const emptyTrousse = (): TrousseData => ({ version: "", sourceDate: null, sha256: null, importedAt: null, importedBy: null, preamble: [], sections: [] });

const HEADING_RE = /^(#{2,4})\s+(.+)$/;
const NUMBERED_RE = /^(\d+(?:\.\d+)*)\s+(.+)$/;
const ANNEX_RE = /^(Annexe\s+[A-Z])\s+(.+)$/;
const DATE_RE = /^\d{1,2}\s+\p{L}+\s+\d{4}$/u;

export function slugTitle(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function parseTrousse(text: string): Omit<TrousseData, "importedAt" | "importedBy"> {
  const lines = text
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const sections: TrousseSection[] = [];
  const preamble: string[] = [];
  const stack: { 2?: TrousseSection; 3?: TrousseSection; 4?: TrousseSection } = {};
  const used = new Set<string>();
  let current: TrousseSection | null = null;

  for (const line of lines) {
    const h = HEADING_RE.exec(line);
    if (!h) {
      (current ? current.paragraphs : preamble).push(line);
      continue;
    }
    const level = h[1].length as 2 | 3 | 4;
    const raw = h[2].trim();
    const m = NUMBERED_RE.exec(raw) ?? ANNEX_RE.exec(raw);
    const number = m ? m[1].replace(/\s+/g, " ") : null;
    const title = (m ? m[2] : raw).trim();
    const parent = level === 2 ? null : level === 3 ? (stack[2] ?? null) : (stack[3] ?? stack[2] ?? null);
    let id = number ?? `${parent ? `${parent.id}/` : ""}${slugTitle(title)}`;
    if (used.has(id)) {
      let k = 2;
      while (used.has(`${id}~${k}`)) k++;
      id = `${id}~${k}`;
    }
    used.add(id);
    current = { id, level, number, title, parent: parent ? parent.id : null, paragraphs: [] };
    sections.push(current);
    stack[level] = current;
    if (level === 2) {
      delete stack[3];
      delete stack[4];
    } else if (level === 3) {
      delete stack[4];
    }
  }

  const version = /VERSION DE TRAVAIL\s+([\d.]+)/i.exec(preamble.join(" "))?.[1] ?? "";
  const sourceDate = preamble.find((l) => DATE_RE.test(l)) ?? null;
  return { version, sourceDate, sha256: createHash("sha256").update(text, "utf8").digest("hex"), preamble, sections };
}

export function normalizeTrousse(v: unknown): TrousseData {
  const d = v && typeof v === "object" && !Array.isArray(v) ? (v as Partial<TrousseData>) : {};
  const sections = Array.isArray(d.sections)
    ? d.sections.filter(
        (s): s is TrousseSection =>
          Boolean(s) && typeof s.id === "string" && typeof s.title === "string" && [2, 3, 4].includes(s.level) && Array.isArray(s.paragraphs),
      )
    : [];
  return {
    version: typeof d.version === "string" ? d.version : "",
    sourceDate: typeof d.sourceDate === "string" ? d.sourceDate : null,
    sha256: typeof d.sha256 === "string" ? d.sha256 : null,
    importedAt: typeof d.importedAt === "string" ? d.importedAt : null,
    importedBy: typeof d.importedBy === "string" ? d.importedBy : null,
    preamble: Array.isArray(d.preamble) ? d.preamble.filter((x): x is string => typeof x === "string") : [],
    sections,
  };
}

export const trousseLoaded = (d: TrousseData) => d.sections.length > 0;

export const sectionById = (d: TrousseData, id: string): TrousseSection | null => d.sections.find((s) => s.id === id) ?? null;

export const childrenOf = (d: TrousseData, id: string): TrousseSection[] => d.sections.filter((s) => s.parent === id);

/** Texte d'une section (paragraphes séparés par une ligne vide), avec ses sous-sections titrées si demandé. */
export function sectionText(d: TrousseData, id: string, opts: { withChildren?: boolean } = {}): string {
  const s = sectionById(d, id);
  if (!s) return "";
  const parts = [s.paragraphs.join("\n\n")];
  if (opts.withChildren !== false) {
    for (const c of childrenOf(d, id)) parts.push(`${c.number ? `${c.number} ` : ""}${c.title}\n\n${sectionText(d, c.id, opts)}`);
  }
  return parts.filter(Boolean).join("\n\n");
}

export async function readTrousse(): Promise<TrousseData> {
  return normalizeTrousse(await readJson<unknown>(trousseFile(), () => null));
}

export function saveTrousse(parsed: Omit<TrousseData, "importedAt" | "importedBy">, by: string, now = new Date()): Promise<TrousseData> {
  return mutateJson<TrousseData, TrousseData>(trousseFile(), emptyTrousse, normalizeTrousse, (cur) => {
    const next: TrousseData = { ...parsed, importedAt: now.toISOString(), importedBy: by };
    Object.assign(cur, next);
    return { result: next, changed: true };
  });
}
