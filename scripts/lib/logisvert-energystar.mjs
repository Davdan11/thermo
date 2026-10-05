/* ==================================================================
   Liste LogisVert en vigueur : fichier quotidien ENERGY STAR
   (propriétaire d'une habitation existante)

   Depuis le 26 novembre 2025, une thermopompe doit être certifiée
   ENERGY STAR pour être admissible (page « Archives des listes de
   thermopompes » d'Hydro-Québec). L'outil officiel de recherche
   (hydroquebec.com/themes/mieux-consommer/recherche-themopompes-efficaces/
   dist/js/main.js) ne lit plus les CSV « proprio-maison-fr-JJ-MM-AAAA »
   à partir de DATE_ENERGY_STAR_SWITCH = 2025-11-26 : il lit
     https://codaservicesprod-back.devtechnucom.com/energystar/depot-csv/
       proprietaire-habitation-existante-AAAAMMJJ.csv.gz
   publié chaque jour.

   Format : « ; », fins de ligne CRLF, décimales à virgule (« 12000,0 »),
   champs entre guillemets possibles (« "EA(C;U)1P48B+TDR+TXV" »).

   Signification des colonnes de montant (vérifiée le 17 septembre 2026) :
   - TTG_AF_EffAlone : « Subvention » (libellé de l'outil pour la clientèle
     proprio-maison). Guide de participation résidentiel v1.10 (15 sept. 2026),
     annexe I, Thermopompe : 50 $ par 1 000 BTU/h à −8 °C (ENERGY STAR) ou
     120 $ par 1 000 BTU/h à −8 °C (ENERGY STAR « climat froid »). Vérifié sur
     les 278 512 lignes du 17 septembre 2026 : montant = taux × puissance à −8 °C.
   - program_fecc_admissible : « VRAI » si la combinaison est admissible à la
     bonification Multilogements (filtre de l'outil : « Afficher uniquement les
     thermopompes admissibles à la bonification Multilogements »). FECC = Fonds
     d'électrification et de changements climatiques (FAQ de la page
     « Bonification Multilogements » d'Hydro-Québec).
   - TTG_Ext5 : montant qui inclut la bonification Multilogements. L'outil
     affiche « Bonification – Multilogements » = TTG_Ext5 − TTG_AF_EffAlone,
     seulement si program_fecc_admissible = VRAI. Guide, annexe II : 100 $ de
     plus par 1 000 BTU/h à −8 °C, soit 220 $, pour une thermopompe murale
     ENERGY STAR climat froid dans un multilogement admissible (zone de
     précarité énergétique, construit en 1995 ou avant, etc.), installations
     à compter du 15 juin 2026. Ce n'est PAS un montant pour une maison.
   ================================================================== */

import { parseCsv, cleanText, toNumber } from "./logisvert-csv.mjs";

export const ES_BASE_URL = "https://codaservicesprod-back.devtechnucom.com/energystar/depot-csv/";
/** Nom du fichier de la clientèle « proprio-maison » dans l'outil officiel (clé csves de liste-fichiers.json). */
export const ES_FILE_PREFIX = "proprietaire-habitation-existante-";
/** Date à partir de laquelle l'outil officiel lit la liste ENERGY STAR (main.js : DATE_ENERGY_STAR_SWITCH). */
export const DATE_ENERGY_STAR_SWITCH = "2025-11-26";
/** Page officielle qui décrit ce fichier et ses montants. */
export const ES_TOOL_URL = "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/recherche-themopompes-efficaces.html";

/** Colonnes exigées ; une colonne absente fait échouer la lecture. */
export const ES_COLUMNS = [
  "pd_id",
  "ahri_reference_number",
  "model_number",
  "indoor_unit_model_number",
  "cooling_capacity_btu_h",
  "heating_capacity_at_17_f_btu_h",
  "outdoor_unit_brand_name",
  "cold_climate",
  "furnace_model_number",
  "date_es",
  "TTG_AF_EffAlone",
  "program_fecc_admissible",
  "TTG_Ext5",
];
const NUMERIC = ["cooling_capacity_btu_h", "heating_capacity_at_17_f_btu_h", "TTG_AF_EffAlone", "TTG_Ext5"];

/** Taux officiels (guide de participation résidentiel v1.10, annexes I et II), en $ par 1 000 BTU/h à −8 °C. */
export const TAUX = { energyStar: 50, climatFroid: 120, multilogements: 220 };

/** Nombre minimal de lignes d'un fichier normal (278 512 le 17 septembre 2026). */
export const MIN_ROWS = 150000;
/** Part maximale de lignes qui peuvent s'écarter du calcul officiel avant de refuser le fichier. */
export const MAX_ECART_REGLE = 0.01;
/** Montant par combinaison au-delà duquel une valeur est invraisemblable (une puissance lue comme un montant). */
export const MAX_PLAUSIBLE_AMOUNT = 15000;

/** AAAAMMJJ d'une date (fuseau de Montréal : le fichier du jour suit le calendrier québécois). */
export function ymdMontreal(date) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", year: "numeric", month: "2-digit", day: "2-digit" })
      .formatToParts(date)
      .map((x) => [x.type, x.value]),
  );
  return `${p.year}${p.month}${p.day}`;
}

/** Nom du fichier quotidien pour AAAAMMJJ. */
export const esFileName = (ymd) => `${ES_FILE_PREFIX}${ymd}.csv.gz`;

/** « AAAAMMJJ » tiré d'un nom de fichier ENERGY STAR, sinon null. */
export function ymdFromFileName(name) {
  const m = String(name ?? "").match(new RegExp(`${ES_FILE_PREFIX}(\\d{8})\\.csv(?:\\.gz)?$`));
  return m ? m[1] : null;
}

/** « AAAAMMJJ » → « AAAA-MM-JJ ». */
export const isoFromYmd = (ymd) => `${ymd.slice(0, 4)}-${ymd.slice(4, 6)}-${ymd.slice(6, 8)}`;

/** Jours candidats, du plus récent au plus ancien : aujourd'hui, puis jusqu'à `maxDaysBack` jours avant. */
export function candidateDays(today, maxDaysBack = 7) {
  const out = [];
  for (let i = 0; i <= maxDaysBack; i++) out.push(ymdMontreal(new Date(today.getTime() - i * 86400000)));
  return [...new Set(out)];
}

/**
 * Télécharge le fichier du jour, ou recule jour par jour (jusqu'à 7 jours) s'il n'est pas encore publié.
 * `fetchImpl` est injectable pour les tests. Lève une erreur si aucun fichier n'est trouvé ou si le
 * serveur répond autre chose que 200 ou 404 (panne : on ne recule pas sur une erreur 500).
 *
 * @returns {Promise<{ file: string, url: string, ymd: string, buffer: Buffer, tried: string[] }>}
 */
export async function fetchLatestEsFile({ fetchImpl = fetch, today = new Date(), maxDaysBack = 7 } = {}) {
  const tried = [];
  for (const ymd of candidateDays(today, maxDaysBack)) {
    const file = esFileName(ymd);
    const url = `${ES_BASE_URL}${file}`;
    tried.push(file);
    const res = await fetchImpl(url);
    if (res.status === 404) continue;
    if (!res.ok) throw new Error(`Liste ENERGY STAR : ${url} a répondu ${res.status}.`);
    const buffer = Buffer.from(await res.arrayBuffer());
    return { file, url, ymd, buffer, tried };
  }
  throw new Error(`Liste ENERGY STAR introuvable sur ${maxDaysBack + 1} jours (${tried.join(", ")}).`);
}

/**
 * Lit le CSV quotidien : un objet par ligne (colonnes exigées seulement, textes nettoyés).
 * Lève une erreur si une colonne manque, si une ligne n'a pas le bon nombre de champs ou si une
 * colonne numérique, cold_climate ou program_fecc_admissible contient une valeur inattendue.
 *
 * @param {string} text
 * @returns {Array<Record<string, string>>}
 */
export function readEnergyStarCsv(text) {
  const [header, ...records] = parseCsv(text, { delimiter: ";" });
  if (!header) throw new Error("Liste ENERGY STAR vide.");
  const names = header.map((h) => cleanText(h));
  const idx = {};
  const missing = ES_COLUMNS.filter((c) => !names.includes(c));
  if (missing.length) throw new Error(`Liste ENERGY STAR : colonne(s) absente(s) ${missing.join(", ")} (en-tête : ${names.join(", ")}).`);
  for (const col of ES_COLUMNS) idx[col] = names.indexOf(col);
  return records.map((cells, r) => {
    if (cells.length !== header.length) {
      throw new Error(`Liste ENERGY STAR, enregistrement ${r + 1} : ${cells.length} champs au lieu de ${header.length}.`);
    }
    const row = {};
    for (const col of ES_COLUMNS) row[col] = cleanText(cells[idx[col]]);
    const where = `Liste ENERGY STAR, AHRI ${row.ahri_reference_number || "?"}`;
    for (const col of NUMERIC) {
      if (row[col] !== "" && !/^\d+(?:[.,]\d+)?$/.test(row[col].replace(/\s/g, ""))) throw new Error(`${where} : « ${row[col]} » n'est pas un nombre (colonne ${col}).`);
    }
    if (!/^(yes|no)?$/i.test(row.cold_climate)) throw new Error(`${where} : cold_climate « ${row.cold_climate} » inattendu.`);
    if (!/^(vrai|faux)?$/i.test(row.program_fecc_admissible)) throw new Error(`${where} : program_fecc_admissible « ${row.program_fecc_admissible} » inattendu.`);
    return row;
  });
}

/** Montant calculé par la règle officielle pour une ligne (sert au contrôle du fichier, jamais à l'affichage). */
export function montantSelonRegle(h17, climatFroid) {
  return ((climatFroid ? TAUX.climatFroid : TAUX.energyStar) * h17) / 1000;
}

/**
 * Lignes → entrées par numéro AHRI, avec les clés compactes du JSON publié :
 *   b marque · m unité extérieure · im unité intérieure · f fournaise
 *   a « Subvention » (TTG_AF_EffAlone, $) · h17 puissance à −8 °C · hn puissance nominale (climatisation)
 *   cc et hr climat froid ENERGY STAR (cold_climate ; hr gardé pour les anciens lecteurs)
 *   bml « Bonification – Multilogements » ($) = TTG_Ext5 − TTG_AF_EffAlone, seulement si program_fecc_admissible = VRAI
 * Une ligne sans AHRI ou sans montant est ignorée. Un AHRI en double (même combinaison sous deux pd_id)
 * garde le montant le plus élevé.
 *
 * @param {Array<Record<string, string>>} rows
 */
export function buildEsEntries(rows) {
  const entries = new Map();
  for (const row of rows) {
    const ahri = row.ahri_reference_number;
    if (!ahri) continue;
    const a = toNumber(row.TTG_AF_EffAlone);
    if (!(a > 0)) continue;
    const existing = entries.get(ahri);
    if (existing && existing.a >= a) continue;
    const cc = /^yes$/i.test(row.cold_climate);
    const entry = {
      ahri,
      b: row.outdoor_unit_brand_name,
      m: row.model_number,
      im: row.indoor_unit_model_number,
      f: row.furnace_model_number,
      a,
      h17: Math.trunc(toNumber(row.heating_capacity_at_17_f_btu_h)),
      hn: Math.trunc(toNumber(row.cooling_capacity_btu_h)),
      hr: cc,
      cc,
    };
    if (/^vrai$/i.test(row.program_fecc_admissible)) {
      const bonus = toNumber(row.TTG_Ext5) - a;
      if (bonus > 0) entry.bml = Math.round(bonus * 100) / 100;
    }
    entries.set(ahri, entry);
  }
  return entries;
}

/**
 * Garde-fou : liste des anomalies qui empêchent d'écrire quoi que ce soit.
 * - trop peu de lignes ;
 * - montant hors de 1 à MAX_PLAUSIBLE_AMOUNT $ ;
 * - TTG_Ext5 inférieur à TTG_AF_EffAlone ;
 * - plus de MAX_ECART_REGLE des lignes qui s'écartent de la règle officielle (50 ou 120 $ par 1 000 BTU/h à −8 °C) :
 *   la signification des colonnes a pu changer, il faut relire l'outil et le guide avant de publier.
 *
 * @param {Array<Record<string, string>>} rows
 * @returns {string[]}
 */
export function anomaliesEs(rows, { minRows = MIN_ROWS } = {}) {
  const out = [];
  if (rows.length < minRows) out.push(`seulement ${rows.length} lignes (minimum ${minRows})`);
  let hors = 0, ext5 = 0, ecart = 0, bonus = 0;
  const ex = { hors: [], ext5: [], ecart: [], bonus: [] };
  for (const r of rows) {
    const a = toNumber(r.TTG_AF_EffAlone);
    const e5 = toNumber(r.TTG_Ext5);
    const h17 = toNumber(r.heating_capacity_at_17_f_btu_h);
    const cc = /^yes$/i.test(r.cold_climate);
    const id = `AHRI ${r.ahri_reference_number}`;
    if (!(a > 0 && a <= MAX_PLAUSIBLE_AMOUNT)) { hors++; if (ex.hors.length < 3) ex.hors.push(`${id} = ${r.TTG_AF_EffAlone}`); }
    if (r.TTG_Ext5 !== "" && e5 < a) { ext5++; if (ex.ext5.length < 3) ex.ext5.push(`${id} : ${e5} < ${a}`); }
    if (Math.abs(montantSelonRegle(h17, cc) - a) > 1) { ecart++; if (ex.ecart.length < 3) ex.ecart.push(`${id} : ${a} $ pour ${h17} BTU/h (climat froid : ${cc ? "oui" : "non"})`); }
    if (/^vrai$/i.test(r.program_fecc_admissible) && Math.abs((TAUX.multilogements * h17) / 1000 - e5) > 1) { bonus++; if (ex.bonus.length < 3) ex.bonus.push(`${id} : ${e5} $ pour ${h17} BTU/h`); }
  }
  if (hors) out.push(`${hors} montant(s) hors de 1 à ${MAX_PLAUSIBLE_AMOUNT} $, ex. ${ex.hors.join(" ; ")}`);
  if (ext5) out.push(`${ext5} ligne(s) où TTG_Ext5 < TTG_AF_EffAlone, ex. ${ex.ext5.join(" ; ")}`);
  const n = rows.length || 1;
  if (ecart / n > MAX_ECART_REGLE) out.push(`${ecart} ligne(s) s'écartent de la règle 50 $ / 120 $ par 1 000 BTU/h à −8 °C, ex. ${ex.ecart.join(" ; ")}`);
  if (bonus / n > MAX_ECART_REGLE) out.push(`${bonus} ligne(s) admissibles à la bonification Multilogements s'écartent de 220 $ par 1 000 BTU/h, ex. ${ex.bonus.join(" ; ")}`);
  return out;
}

/**
 * Empreinte du contenu, sans la colonne date_es ni l'ordre des lignes : le fichier est republié chaque
 * jour avec la date du jour ; seule une vraie modification de la liste doit déclencher une régénération.
 *
 * @param {Array<Record<string, string>>} rows
 * @param {(s: string) => string} sha256Hex
 */
export function contentFingerprint(rows, sha256Hex) {
  const cols = ES_COLUMNS.filter((c) => c !== "date_es");
  const lines = rows.map((r) => cols.map((c) => r[c]).join(";")).sort();
  return sha256Hex(lines.join("\n"));
}
