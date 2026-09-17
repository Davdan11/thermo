#!/usr/bin/env node
/* ==================================================================
   scrape-logisvert.mjs

   Télécharge la liste LogisVert EN VIGUEUR et écrit
   src/lib/subsidies/logisvert-official-amounts.json (montants officiels,
   jamais recalculés), l'index par unité extérieure et les métadonnées.

   Source (depuis le 26 novembre 2025, voir scripts/lib/logisvert-energystar.mjs) :
   le fichier quotidien ENERGY STAR que lit l'outil officiel de recherche
   d'Hydro-Québec, proprietaire-habitation-existante-AAAAMMJJ.csv.gz.
   Si le fichier du jour n'est pas encore publié, on recule jour par jour
   jusqu'à 7 jours.
   L'ancienne liste (proprio-maison-fr-17-07-2025.csv.gz, liste-fichiers.json)
   ne vaut plus que pour les installations du 17 juillet au 25 novembre 2025.

   Enrichissement par numéro AHRI exact (jamais par numéro de modèle) :
   jeu ENERGY STAR data.energystar.gov 83eb-xbyy (série, SEER2, HSPF2,
   COP et puissance à −15 °C, type de système).

   Usage : node scripts/scrape-logisvert.mjs [--check] [--csv <proprietaire-habitation-existante-AAAAMMJJ.csv.gz>]
     --check : 0 = liste inchangée, 3 = nouvelle liste à intégrer, autre = vérification impossible.
   ================================================================== */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { createHash } from "crypto";
import { gunzipSync } from "zlib";
import { basename, dirname, join } from "path";
import { fileURLToPath } from "url";
import {
  ES_BASE_URL,
  ES_TOOL_URL,
  TAUX,
  anomaliesEs,
  buildEsEntries,
  contentFingerprint,
  fetchLatestEsFile,
  isoFromYmd,
  readEnergyStarCsv,
  ymdFromFileName,
} from "./lib/logisvert-energystar.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SUBSIDIES = join(__dirname, "../src/lib/subsidies");
const OUTPUT_PATH = join(SUBSIDIES, "logisvert-official-amounts.json");
const INDEX_PATH = join(SUBSIDIES, "logisvert-model-index.json");
const META_PATH = join(SUBSIDIES, "logisvert-metadata.json");

const ES_API = "https://data.energystar.gov/resource/83eb-xbyy.json";
const ES_PAGE = 50000;
const sha256Hex = (s) => createHash("sha256").update(s).digest("hex");

async function main() {
  const check = process.argv.includes("--check");
  const csvArg = process.argv.indexOf("--csv");
  const localCsv = csvArg >= 0 ? process.argv[csvArg + 1] : null;
  if (csvArg >= 0 && !localCsv) throw new Error("--csv attend le chemin d'un fichier proprietaire-habitation-existante-AAAAMMJJ.csv.gz");

  // ── 1. Fichier du jour (ou le plus récent des 7 derniers jours) ──────
  let file, url, ymd, gzBuffer;
  if (localCsv) {
    file = basename(localCsv);
    ymd = ymdFromFileName(file);
    if (!ymd) throw new Error(`Nom de fichier inattendu : ${file} (attendu proprietaire-habitation-existante-AAAAMMJJ.csv.gz)`);
    url = `${ES_BASE_URL}${file}`;
    gzBuffer = readFileSync(localCsv);
    console.log(`📥 Copie locale de ${file}`);
  } else {
    const got = await fetchLatestEsFile();
    ({ file, url, ymd } = got);
    gzBuffer = got.buffer;
    console.log(`📥 ${file}${got.tried.length > 1 ? ` (essayés : ${got.tried.join(", ")})` : ""}`);
  }
  const sourceSha256 = createHash("sha256").update(gzBuffer).digest("hex");
  const csvText = /\.gz$/.test(file) ? gunzipSync(gzBuffer).toString("utf8") : gzBuffer.toString("utf8");

  // ── 2. Lecture et garde-fou : rien n'est écrit si le fichier est anormal ──
  const rows = readEnergyStarCsv(csvText);
  const anomalies = anomaliesEs(rows);
  if (anomalies.length) throw new Error(`fichier ${file} refusé, rien n'est écrit :\n  - ${anomalies.join("\n  - ")}`);
  const contentSha256 = contentFingerprint(rows, sha256Hex);
  console.log(`   Lignes : ${rows.length} · empreinte du contenu ${contentSha256.slice(0, 12)}…`);

  // --check (robot de nuit) : même contenu que la liste en place → 0, sinon 3.
  if (check) {
    const prev = existsSync(META_PATH) ? JSON.parse(readFileSync(META_PATH, "utf8")) : {};
    const same = prev.contentSha256 === contentSha256;
    console.log(same ? `   Liste inchangée (${contentSha256.slice(0, 12)}…)` : `   Nouvelle liste : ${contentSha256.slice(0, 12)}… (en place : ${String(prev.contentSha256 ?? prev.sourceSha256 ?? "aucune").slice(0, 12)})`);
    process.exit(same ? 0 : 3);
  }

  const entries = buildEsEntries(rows);
  console.log(`   Combinaisons (AHRI uniques) : ${entries.size}`);

  // ── 3. Enrichissement ENERGY STAR par AHRI exact ─────────────────────
  console.log("🌟 Enrichissement ENERGY STAR (83eb-xbyy)…");
  const esData = new Map();
  for (let offset = 0; ; offset += ES_PAGE) {
    const q = `${ES_API}?$select=ahri_reference_number,series_name,seer2_btu_wh,hspf2_btu_wh,product_type,cop_at_5_f,heating_capacity_at_5_f_btu_h,cooling_capacity_btu_h&$order=ahri_reference_number,pd_id&$limit=${ES_PAGE}&$offset=${offset}`;
    const res = await fetch(q);
    if (!res.ok) throw new Error(`ENERGY STAR a répondu ${res.status} : enrichissement incomplet, rien n'est écrit.`);
    const page = await res.json();
    for (const r of page) {
      const k = String(r.ahri_reference_number ?? "").trim();
      if (k && entries.has(k) && !esData.has(k)) esData.set(k, r);
    }
    process.stdout.write(`   ${offset + page.length} lignes lues\r`);
    if (page.length < ES_PAGE) break;
  }
  console.log(`\n   Combinaisons retrouvées dans ENERGY STAR : ${esData.size}/${entries.size}`);
  if (esData.size < 0.8 * entries.size) throw new Error(`seulement ${esData.size} combinaisons retrouvées dans ENERGY STAR sur ${entries.size} : rien n'est écrit.`);

  // ── 4. JSON publié (mêmes clés compactes qu'avant) ───────────────────
  const result = {};
  const modelIndex = {};
  let typeFromEs = 0, typeFromFurnace = 0, bonifiables = 0;
  const num = (v) => { const x = parseFloat(v); return Number.isFinite(x) ? x : undefined; };
  for (const [ahri, e] of entries) {
    const final = { b: e.b, m: e.m, im: e.im, f: e.f, a: e.a, h17: e.h17, hn: e.hn, hr: e.hr };
    if (e.bml) { final.bml = e.bml; bonifiables++; }
    const es = esData.get(ahri);
    if (es) {
      if (es.series_name) final.s = es.series_name;
      if (num(es.seer2_btu_wh)) final.seer2 = num(es.seer2_btu_wh);
      if (num(es.hspf2_btu_wh)) final.hspf2 = num(es.hspf2_btu_wh);
    }
    final.cc = e.cc; // climat froid : colonne cold_climate du fichier officiel
    if (es) {
      if (num(es.cop_at_5_f)) final.cop5 = num(es.cop_at_5_f);
      if (num(es.heating_capacity_at_5_f_btu_h)) final.h5 = Math.trunc(num(es.heating_capacity_at_5_f_btu_h));
      if (num(es.cooling_capacity_btu_h)) final.c = Math.trunc(num(es.cooling_capacity_btu_h));
    }
    // Type : celui d'ENERGY STAR pour ce numéro AHRI (même règle que scripts/build-catalogue.mjs et
    // scripts/energystar-types.mjs : « HP - Mini or Multi Split » = M, « Split System » ou « Single Package » = C).
    // Sans type ENERGY STAR : fournaise présente = C, unité intérieure nommée = M (dernier recours).
    if (es?.product_type === "HP - Mini or Multi Split") { final.t = "M"; typeFromEs++; }
    else if (es?.product_type === "HP - Split System" || es?.product_type === "HP - Single Package") { final.t = "C"; typeFromEs++; }
    else if (e.f && e.f.length > 1) { final.t = "C"; typeFromFurnace++; }
    else if (e.im && e.im.length > 2) final.t = "M";
    result[ahri] = final;
    const nm = e.m.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (nm) (modelIndex[nm] ??= []).push(ahri);
  }
  console.log(`   Type ENERGY STAR : ${typeFromEs} · par fournaise : ${typeFromFurnace} · bonification Multilogements : ${bonifiables}`);

  writeFileSync(OUTPUT_PATH, JSON.stringify(result));
  writeFileSync(INDEX_PATH, JSON.stringify(modelIndex));
  const listDate = isoFromYmd(ymd);
  writeFileSync(
    META_PATH,
    JSON.stringify(
      {
        updatedAt: new Date().toISOString(),
        source: "Liste des thermopompes admissibles au programme LogisVert (certifiées ENERGY STAR), clientèle propriétaire d'une habitation existante, lue par l'outil de recherche d'Hydro-Québec",
        toolUrl: ES_TOOL_URL,
        sourceFile: file,
        sourceUrl: url,
        listDate,
        sourceSha256,
        contentSha256,
        rows: rows.length,
        count: Object.keys(result).length,
        bonificationMultilogements: bonifiables,
        enrichedFromEnergyStar: esData.size,
        amountRules: {
          a: `TTG_AF_EffAlone, « Subvention » : ${TAUX.energyStar} $ par 1 000 BTU/h à −8 °C (ENERGY STAR) ou ${TAUX.climatFroid} $ (ENERGY STAR climat froid)`,
          bml: `TTG_Ext5 − TTG_AF_EffAlone si program_fecc_admissible = VRAI, « Bonification – Multilogements » : total de ${TAUX.multilogements} $ par 1 000 BTU/h à −8 °C, multilogements admissibles seulement, installations à compter du 15 juin 2026`,
          guide: "https://www.hydroquebec.com/data/logisvert/logisvert-guide-participation-residentiel-fr.pdf",
        },
      },
      null,
      2,
    ) + "\n",
  );

  const amounts = Object.values(result).map((e) => e.a);
  console.log(`\n✅ ${Object.keys(result).length} combinaisons · ${Object.keys(modelIndex).length} unités extérieures · liste du ${listDate}`);
  console.log(`   Montants : ${amounts.reduce((x, y) => Math.min(x, y), Infinity)} $ à ${amounts.reduce((x, y) => Math.max(x, y), 0)} $ · marques ${new Set(Object.values(result).map((e) => e.b)).size}`);
}

main().catch((e) => {
  console.error("❌ Erreur :", e.message);
  process.exit(1);
});
