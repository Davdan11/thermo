/* ==================================================================
   Lecture de la liste officielle LogisVert (CSV d'Hydro-Québec).

   Le fichier est un CSV conforme RFC 4180 avec « ; » comme séparateur :
   un champ qui contient un « ; », une tabulation ou un guillemet est
   placé entre guillemets (ex. "EA(C;U)1P24A+TDR+TXV", "MAXI AIR CENTRAL\t").
   L'ancien découpage naïf (split(";")) ignorait ces guillemets : colonnes
   décalées et puissance lue comme montant (39 000 $ au lieu de 800 $).

   Utilisé par scripts/scrape-logisvert.mjs et
   scripts/restore-logisvert-configurations.mjs ; testé par
   src/lib/subsidies/__tests__/logisvert-csv.test.ts.
   ================================================================== */

/**
 * Analyse un texte CSV (RFC 4180) en tableau d'enregistrements.
 * - champs entre guillemets : séparateur, tabulation et saut de ligne permis à l'intérieur ;
 * - guillemet doublé ("") dans un champ entre guillemets = un guillemet ;
 * - fins de ligne CRLF, LF ou CR ; BOM UTF-8 initial ignoré ; lignes vides ignorées ;
 * - un guillemet au milieu d'un champ non entre guillemets est gardé tel quel.
 * Lève une erreur si un champ entre guillemets n'est pas refermé ou si un
 * caractère suit le guillemet fermant (structure ambiguë : mieux vaut échouer).
 *
 * @param {string} text
 * @param {{ delimiter?: string }} [options]
 * @returns {string[][]}
 */
export function parseCsv(text, { delimiter = "," } = {}) {
  if (typeof delimiter !== "string" || delimiter.length !== 1 || /["\r\n]/.test(delimiter)) {
    throw new TypeError("Le séparateur doit être un seul caractère, autre qu'un guillemet ou un saut de ligne.");
  }
  let s = String(text);
  if (s.charCodeAt(0) === 0xfeff) s = s.slice(1);

  /** @type {string[][]} */
  const records = [];
  /** @type {string[]} */
  let record = [];
  let field = "";
  let inQuotes = false; // dans un champ entre guillemets
  let closed = false; // le champ courant vient de fermer ses guillemets
  let fieldStart = true; // aucun caractère lu pour le champ courant
  let touched = false; // l'enregistrement courant contient quelque chose
  let line = 1;
  let quoteLine = 1;

  const endField = () => {
    record.push(field);
    field = "";
    closed = false;
    fieldStart = true;
  };
  const endRecord = () => {
    if (touched) {
      endField();
      records.push(record);
    }
    record = [];
    field = "";
    closed = false;
    fieldStart = true;
    touched = false;
  };

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
          closed = true;
        }
      } else {
        if (c === "\n" || (c === "\r" && s[i + 1] !== "\n")) line++;
        field += c;
      }
      continue;
    }
    if (c === delimiter) {
      touched = true;
      endField();
      continue;
    }
    if (c === "\r" || c === "\n") {
      if (c === "\r" && s[i + 1] === "\n") i++;
      endRecord();
      line++;
      continue;
    }
    if (closed) {
      throw new Error(`CSV ligne ${line} : caractère ${JSON.stringify(c)} après un guillemet fermant.`);
    }
    touched = true;
    if (c === '"' && fieldStart) {
      inQuotes = true;
      quoteLine = line;
      fieldStart = false;
      continue;
    }
    field += c;
    fieldStart = false;
  }
  if (inQuotes) throw new Error(`CSV ligne ${quoteLine} : guillemet ouvrant jamais refermé.`);
  endRecord();
  return records;
}

/** Colonnes attendues dans la liste LogisVert d'Hydro-Québec. */
export const LOGISVERT_COLUMNS = [
  "ahri",
  "marque",
  "modele_exterieur",
  "modele_interieur",
  "fournaise",
  "puissance_nominale",
  "puissance_moins_8",
  "aide_financiere_a",
  "aide_financiere_b",
  "haut_rendement",
];
const NUMERIC_COLUMNS = ["puissance_nominale", "puissance_moins_8", "aide_financiere_a", "aide_financiere_b"];

/** Texte d'un champ : tabulations et sauts de ligne internes remplacés par une espace, bords nettoyés. */
export const cleanText = (v) => String(v ?? "").replace(/[\t\r\n]+/g, " ").trim();

/** Nombre au format québécois (« 1526,04 » ou « 1526.04 ») ; 0 si vide ou illisible. */
export function toNumber(v) {
  const x = parseFloat(String(v ?? "").replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(x) ? x : 0;
}

/**
 * Lit le CSV LogisVert : un objet par ligne, clés = noms de colonnes, textes nettoyés.
 * Lève une erreur si une colonne manque, si une ligne n'a pas le bon nombre de champs
 * ou si une colonne numérique contient autre chose qu'un nombre (colonnes décalées).
 *
 * @param {string} text
 * @returns {Array<Record<string, string>>}
 */
export function readLogisVertCsv(text) {
  const [header, ...records] = parseCsv(text, { delimiter: ";" });
  if (!header) throw new Error("CSV LogisVert vide.");
  const names = header.map((h) => cleanText(h).toLowerCase());
  /** @type {Record<string, number>} */
  const idx = {};
  for (const col of LOGISVERT_COLUMNS) {
    const k = names.indexOf(col);
    if (k < 0) throw new Error(`CSV LogisVert : colonne « ${col} » absente (en-tête : ${names.join(", ")}).`);
    idx[col] = k;
  }
  return records.map((cells, r) => {
    if (cells.length !== header.length) {
      throw new Error(`CSV LogisVert, enregistrement ${r + 1} (AHRI ${cleanText(cells[idx.ahri])}) : ${cells.length} champs au lieu de ${header.length}.`);
    }
    /** @type {Record<string, string>} */
    const row = {};
    for (const col of LOGISVERT_COLUMNS) row[col] = cleanText(cells[idx[col]]);
    for (const col of NUMERIC_COLUMNS) {
      if (row[col] !== "" && !/^\d+(?:[.,]\d+)?$/.test(row[col].replace(/\s/g, ""))) {
        throw new Error(`CSV LogisVert, AHRI ${row.ahri} : « ${row[col]} » n'est pas un nombre (colonne ${col}).`);
      }
    }
    return row;
  });
}

/**
 * Lignes LogisVert → entrées par référence AHRI (champs compacts du JSON publié).
 * Ignore les lignes sans AHRI ou sans montant ; en cas d'AHRI en double, garde le montant le plus élevé.
 *
 * @param {Array<Record<string, string>>} rows
 */
export function buildHqEntries(rows) {
  /** @type {Map<string, { ahri: string, b: string, m: string, im: string, f: string, hn: number, h17: number, a: number, ab: number, hr: boolean }>} */
  const entries = new Map();
  for (const row of rows) {
    const ahri = row.ahri;
    if (!ahri || ahri.toLowerCase() === "ahri") continue;
    const a = toNumber(row.aide_financiere_a);
    if (a <= 0) continue;
    const existing = entries.get(ahri);
    if (existing && existing.a >= a) continue;
    entries.set(ahri, {
      ahri,
      b: row.marque, // marque
      m: row.modele_exterieur, // unité extérieure
      im: row.modele_interieur, // unité intérieure
      f: row.fournaise, // fournaise
      hn: Math.trunc(toNumber(row.puissance_nominale)), // puissance nominale (BTU/h)
      h17: Math.trunc(toNumber(row.puissance_moins_8)), // puissance à -8 °C (BTU/h)
      a, // montant LogisVert officiel ($)
      ab: toNumber(row.aide_financiere_b),
      hr: row.haut_rendement.toUpperCase().startsWith("OUI"),
    });
  }
  return entries;
}
