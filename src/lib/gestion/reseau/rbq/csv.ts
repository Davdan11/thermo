/* ==================================================================
   Chantier R — lecture en flux du fichier CSV des licences actives de
   la RBQ (Données Québec). Pur : aucun réseau, aucun disque.

   Colonnes documentées (API de Données Québec, schéma seulement) :
     Numero de licence · Statut de la licence · Type de licence ·
     Date de delivrance · Restriction · Date de debut de la
     restriction · Date de fin de la restriction · Association ou
     compagnie fournissant le cautionnement · Montant de la caution ·
     Date du paiement annuel · Mandataire · Courriel · Adresse · NEQ ·
     Nom de l'intervenant · Numero de telephone · Municipalite ·
     Statut juridique · Code de region administrative · Region
     administrative · Nombre de sous-categorie autorisees · Categorie ·
     Sous-categories · Autre nom
   Les en-têtes sont comparés sans accents ni ponctuation : « Numéro
   de licence » et « Numero de licence » sont la même colonne.

   Robuste : séparateur deviné (virgule, point-virgule, tabulation,
   barre), champs entre guillemets (avec retours de ligne), encodage
   UTF-8 (avec ou sans BOM), UTF-16 ou Windows-1252 deviné au premier
   bloc. Seules les licences recherchées sont gardées en mémoire ; le
   courriel, le téléphone et l'adresse ne sont jamais conservés.
   ================================================================== */

import { foldText } from "../../regions";
import type { RbqRecord } from "./types";

/* ---------------- Encodage ---------------- */

export type RbqEncoding = "utf-8" | "utf-16le" | "windows-1252";

/** Décodeur choisi d'après le premier bloc : BOM, sinon UTF-8 strict, sinon Windows-1252. */
export function pickDecoder(first: Uint8Array): { encoding: RbqEncoding; decoder: TextDecoder } {
  if (first[0] === 0xef && first[1] === 0xbb && first[2] === 0xbf) return { encoding: "utf-8", decoder: new TextDecoder("utf-8") };
  if (first[0] === 0xff && first[1] === 0xfe) return { encoding: "utf-16le", decoder: new TextDecoder("utf-16le") };
  try {
    // stream: true : une séquence coupée à la fin du bloc n'est pas une erreur.
    new TextDecoder("utf-8", { fatal: true }).decode(first, { stream: true });
    return { encoding: "utf-8", decoder: new TextDecoder("utf-8") };
  } catch {
    return { encoding: "windows-1252", decoder: new TextDecoder("windows-1252") };
  }
}

/* ---------------- CSV en flux ---------------- */

const CANDIDATES = [",", ";", "\t", "|"] as const;

/** Séparateur le plus fréquent hors guillemets dans la ligne d'en-tête (virgule par défaut). */
export function detectDelimiter(line: string): string {
  const counts = new Map<string, number>(CANDIDATES.map((c) => [c, 0]));
  let quoted = false;
  for (const ch of line) {
    if (ch === '"') quoted = !quoted;
    else if (!quoted && counts.has(ch)) counts.set(ch, counts.get(ch)! + 1);
  }
  let best = ",";
  let n = 0;
  for (const [c, k] of counts) if (k > n) [best, n] = [c, k];
  return best;
}

/** Analyseur CSV (RFC 4180) qui reçoit le texte par morceaux. `onRow` renvoie false pour arrêter. */
export class CsvParser {
  delimiter: string | null;
  stopped = false;
  private head = "";
  private field = "";
  private row: string[] = [];
  private inQuotes = false;
  private pendingQuote = false;

  constructor(
    private readonly onRow: (row: string[]) => boolean | void,
    delimiter?: string,
  ) {
    this.delimiter = delimiter ?? null;
  }

  push(text: string): void {
    if (this.stopped || !text) return;
    if (this.delimiter === null) {
      this.head += text;
      const nl = this.head.indexOf("\n");
      if (nl < 0 && this.head.length < 65_536) return;
      this.delimiter = detectDelimiter(nl < 0 ? this.head : this.head.slice(0, nl));
      text = this.head;
      this.head = "";
    }
    this.scan(text);
  }

  end(): void {
    if (this.stopped) return;
    if (this.delimiter === null) {
      if (!this.head) return;
      this.delimiter = detectDelimiter(this.head.split("\n")[0]);
      const t = this.head;
      this.head = "";
      this.scan(t);
    }
    if (this.pendingQuote) this.pendingQuote = false;
    this.inQuotes = false;
    if (this.field !== "" || this.row.length) {
      this.endField();
      this.endRow();
    }
  }

  private endField() {
    this.row.push(this.field);
    this.field = "";
  }

  private endRow() {
    const r = this.row;
    this.row = [];
    if (r.length === 1 && r[0].trim() === "") return; // ligne vide
    if (this.onRow(r) === false) this.stopped = true;
  }

  private scan(t: string) {
    const d = this.delimiter!;
    const n = t.length;
    let i = 0;
    let run = 0;
    while (i < n) {
      const c = t[i];
      if (this.pendingQuote) {
        this.pendingQuote = false;
        if (c === '"') {
          this.field += '"'; // guillemet doublé dans un champ entre guillemets
          i++;
          run = i;
          continue;
        }
        this.inQuotes = false;
        run = i;
      }
      if (this.inQuotes) {
        if (c === '"') {
          this.field += t.slice(run, i);
          this.pendingQuote = true;
          run = i + 1;
        }
        i++;
        continue;
      }
      if (c === d || c === "\n") {
        this.field += t.slice(run, i);
        this.endField();
        if (c === "\n") {
          this.endRow();
          if (this.stopped) return;
        }
        i++;
        run = i;
        continue;
      }
      if (c === "\r") {
        this.field += t.slice(run, i);
        i++;
        run = i;
        continue;
      }
      if (c === '"' && run === i && this.field === "") {
        this.inQuotes = true;
        i++;
        run = i;
        continue;
      }
      i++;
    }
    if (!this.pendingQuote) this.field += t.slice(run, n);
    else if (run < n) this.field += t.slice(run, n);
  }
}

/* ---------------- Colonnes ---------------- */

export const COLUMNS = {
  number: ["numero de licence", "no de licence", "numero licence"],
  status: ["statut de la licence", "statut licence"],
  licenceType: ["type de licence"],
  category: ["categorie"],
  subcategories: ["sous categories", "sous categorie"],
  restriction: ["restriction"],
  restrictionStart: ["date de debut de la restriction"],
  restrictionEnd: ["date de fin de la restriction"],
  name: ["nom de l intervenant"],
  municipality: ["municipalite"],
  region: ["region administrative"],
  issuedOn: ["date de delivrance"],
} as const;
export type ColumnKey = keyof typeof COLUMNS;

/** Sans ces colonnes, le fichier est refusé : aucun statut n'est déduit. */
export const REQUIRED_COLUMNS: readonly ColumnKey[] = ["number", "status"];
export const COLUMN_LABELS: Record<ColumnKey, string> = {
  number: "Numero de licence",
  status: "Statut de la licence",
  licenceType: "Type de licence",
  category: "Categorie",
  subcategories: "Sous-categories",
  restriction: "Restriction",
  restrictionStart: "Date de debut de la restriction",
  restrictionEnd: "Date de fin de la restriction",
  name: "Nom de l'intervenant",
  municipality: "Municipalite",
  region: "Region administrative",
  issuedOn: "Date de delivrance",
};

/** « 0000-0000-01 » → « 0000000001 ». */
export const normalizeLicence = (v: string): string => String(v ?? "").replace(/\D/g, "");

/** Numéro plausible : 8 à 12 chiffres. */
export const plausibleLicence = (v: string): boolean => /^\d{8,12}$/.test(normalizeLicence(v));

/** Code d'une sous-catégorie : « 15.10 Réfrigération » → « 15.10 ». */
export function subcategoryCode(s: string): string | null {
  const m = /^\s*(\d{1,2}(?:\.\d{1,2}){0,2})\b/.exec(s);
  return m ? m[1] : null;
}

export interface RbqCollectResult {
  ok: boolean;
  error?: "colonnes-manquantes" | "vide";
  missingColumns: string[];
  /** Lignes de données lues. */
  rows: number;
  /** Numéros de licence distincts. */
  licences: number;
  found: Map<string, RbqRecord>;
}

/** Garde les licences recherchées (numéros normalisés), compte les autres. */
export function createCollector(wanted: ReadonlySet<string>) {
  let idx: Partial<Record<ColumnKey, number>> | null = null;
  const all = new Set<string>();
  const found = new Map<string, RbqRecord>();
  let rows = 0;
  let missing: string[] = [];

  const onRow = (r: string[]): boolean => {
    if (!idx) {
      const folded = r.map((h) => foldText(h.replace(/^﻿/, "")));
      idx = {};
      for (const key of Object.keys(COLUMNS) as ColumnKey[]) {
        const i = folded.findIndex((f) => (COLUMNS[key] as readonly string[]).includes(f));
        if (i >= 0) idx[key] = i;
      }
      missing = REQUIRED_COLUMNS.filter((k) => idx![k] === undefined).map((k) => COLUMN_LABELS[k]);
      return missing.length === 0;
    }
    rows++;
    const get = (k: ColumnKey) => {
      const i = idx![k];
      return i === undefined ? "" : (r[i] ?? "").trim();
    };
    const num = normalizeLicence(get("number"));
    if (!num) return true;
    all.add(num);
    if (!wanted.has(num)) return true;
    const subs = get("subcategories")
      .split(/\s*[;|]\s*/)
      .map((s) => s.trim())
      .filter(Boolean);
    const rec = found.get(num);
    if (!rec) {
      found.set(num, {
        number: num,
        status: get("status"),
        licenceType: get("licenceType"),
        category: get("category"),
        subcategories: subs.slice(0, 60),
        restriction: get("restriction"),
        restrictionStart: get("restrictionStart"),
        restrictionEnd: get("restrictionEnd"),
        name: get("name").slice(0, 160),
        municipality: get("municipality").slice(0, 80),
        region: get("region").slice(0, 80),
        issuedOn: get("issuedOn"),
      });
    } else {
      for (const s of subs) if (!rec.subcategories.includes(s) && rec.subcategories.length < 60) rec.subcategories.push(s);
      if (!rec.status) rec.status = get("status");
      if (!rec.restriction) rec.restriction = get("restriction");
    }
    return true;
  };

  const result = (): RbqCollectResult => {
    if (!idx) return { ok: false, error: "vide", missingColumns: [], rows: 0, licences: 0, found };
    if (missing.length) return { ok: false, error: "colonnes-manquantes", missingColumns: missing, rows: 0, licences: 0, found: new Map() };
    return { ok: true, missingColumns: [], rows, licences: all.size, found };
  };
  return { onRow, result };
}

export interface RbqParseResult extends RbqCollectResult {
  encoding: RbqEncoding;
  delimiter: string;
}

/** Lit un flux d'octets (fichier décompressé) et renvoie les licences recherchées. */
export async function collectRbq(chunks: AsyncIterable<Uint8Array> | Iterable<Uint8Array>, wanted: ReadonlySet<string>): Promise<RbqParseResult> {
  let dec: ReturnType<typeof pickDecoder> | null = null;
  const col = createCollector(wanted);
  const parser = new CsvParser(col.onRow);
  for await (const chunk of chunks) {
    if (!chunk?.length) continue;
    dec ??= pickDecoder(chunk);
    parser.push(dec.decoder.decode(chunk, { stream: true }));
    if (parser.stopped) break;
  }
  if (dec && !parser.stopped) parser.push(dec.decoder.decode());
  parser.end();
  return { ...col.result(), encoding: dec?.encoding ?? "utf-8", delimiter: parser.delimiter ?? "," };
}
