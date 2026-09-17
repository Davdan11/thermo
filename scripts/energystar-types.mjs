#!/usr/bin/env node
/* ==================================================================
   Type de système ENERGY STAR : centrale (conduits) ou mini-split

   La liste LogisVert d'Hydro-Québec ne dit pas de façon fiable si une
   combinaison est une centrale : son code « C » suit surtout la présence
   d'une fournaise, et une centrale sur son propre cabinet (Bryant 280ANV +
   FE4) y est « M ». ENERGY STAR le dit, par numéro AHRI : « HP - Split
   System » (unité intérieure sur conduits), « HP - Mini or Multi Split »,
   « HP - Single Package ».

   Ce script lit tout le jeu « ENERGY STAR Certified Heat Pumps » et écrit
   src/lib/data/energystar-types.json, lu par scripts/build-catalogue.mjs :
   - types : le type de chaque numéro AHRI de la liste LogisVert (S, M ou P) ;
   - indoorFamilies : le type d'une famille d'unités intérieures (préfixe du
     numéro : « CAP », « AHVE », « MSZ »…), quand ENERGY STAR la classe de la
     même façon dans au moins 90 % d'au moins 5 combinaisons. Sert aux
     combinaisons LogisVert absentes d'ENERGY STAR (modèles retirés) : un
     cabinet reste un cabinet, quelle que soit l'unité extérieure.
   Correspondance par AHRI exact, ou par préfixe de numéro d'unité intérieure.

   node scripts/energystar-types.mjs
   ================================================================== */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const LV_PATH = path.join(ROOT, "src/lib/subsidies/logisvert-official-amounts.json");
const OUT = path.join(ROOT, "src/lib/data/energystar-types.json");
const DATASET = "https://data.energystar.gov/resource/83eb-xbyy.json";
const PAGE = 50000;
const CODE = { "HP - Split System": "S", "HP - Mini or Multi Split": "M", "HP - Single Package": "P" };
const PREFIX_MIN = 3;
const PREFIX_MAX = 8;
const FAMILY_MIN_ROWS = 5;
const FAMILY_AGREEMENT = 0.9;

/** Racine d'un numéro d'unité intérieure : majuscules, jusqu'au premier joker ou séparateur, lettres et chiffres seulement. */
export const indoorStem = (raw) =>
  String(raw ?? "")
    .toUpperCase()
    .split(/[*(+,/&\s]/)[0]
    .replace(/[^A-Z0-9]/g, "");

const lv = JSON.parse(fs.readFileSync(LV_PATH, "utf8"));
const wanted = new Set(Object.keys(lv));
const types = {};
const prefixCounts = new Map(); // préfixe → { S, M, P }
let rows = 0;

for (let offset = 0; ; offset += PAGE) {
  const url = `${DATASET}?$select=ahri_reference_number,product_type,indoor_unit_model_number&$order=ahri_reference_number&$limit=${PAGE}&$offset=${offset}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`ENERGY STAR a répondu ${res.status} (${url})`);
  const page = await res.json();
  rows += page.length;
  for (const r of page) {
    const code = CODE[r.product_type];
    if (!code) continue;
    const ahri = String(r.ahri_reference_number ?? "").trim();
    if (wanted.has(ahri)) {
      // Deux lignes pour le même AHRI avec des types différents : aucun type plutôt qu'un choix arbitraire.
      types[ahri] = types[ahri] && types[ahri] !== code ? "?" : code;
    }
    const stem = indoorStem(r.indoor_unit_model_number);
    for (let len = PREFIX_MIN; len <= Math.min(PREFIX_MAX, stem.length); len++) {
      const p = stem.slice(0, len);
      const c = prefixCounts.get(p) ?? { S: 0, M: 0, P: 0 };
      c[code]++;
      prefixCounts.set(p, c);
    }
  }
  if (page.length < PAGE) break;
}
if (rows < 100000) throw new Error(`Seulement ${rows} lignes reçues d'ENERGY STAR : fichier non écrit.`);
for (const k of Object.keys(types)) if (types[k] === "?") delete types[k];

// Familles : un type net (≥ 90 % d'au moins 5 combinaisons ; « P » compté avec « S », tous deux sur conduits).
// On ne garde un préfixe plus long que s'il contredit le préfixe plus court retenu : le plus court suffit sinon.
const verdict = (c) => {
  const total = c.S + c.M + c.P;
  if (total < FAMILY_MIN_ROWS) return null;
  if ((c.S + c.P) / total >= FAMILY_AGREEMENT) return "S";
  if (c.M / total >= FAMILY_AGREEMENT) return "M";
  return "mixte";
};
const indoorFamilies = {};
for (const p of [...prefixCounts.keys()].sort((a, b) => a.length - b.length || a.localeCompare(b))) {
  const v = verdict(prefixCounts.get(p));
  if (!v) continue;
  let parent = null;
  for (let len = p.length - 1; len >= PREFIX_MIN && parent === null; len--) {
    const q = p.slice(0, len);
    if (q in indoorFamilies) parent = indoorFamilies[q];
    else if (verdict(prefixCounts.get(q) ?? { S: 0, M: 0, P: 0 }) === "mixte") parent = "mixte";
  }
  if (v !== parent) indoorFamilies[p] = v;
}
for (const k of Object.keys(indoorFamilies)) if (indoorFamilies[k] === "mixte") delete indoorFamilies[k];

const sorted = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
const counts = Object.values(types).reduce((a, c) => ((a[c] = (a[c] ?? 0) + 1), a), {});
fs.writeFileSync(
  OUT,
  JSON.stringify({ source: DATASET, updatedAt: new Date().toISOString().slice(0, 10), counts, types: sorted(types), indoorFamilies: sorted(indoorFamilies) }) + "\n",
);
console.log(`ENERGY STAR : ${rows} lignes lues ; ${Object.keys(types).length} numéros AHRI de la liste LogisVert typés sur ${wanted.size}.`);
console.log(`Split System ${counts.S ?? 0} · Mini ou multi ${counts.M ?? 0} · Monobloc ${counts.P ?? 0} · familles d'unités intérieures : ${Object.keys(indoorFamilies).length}`);
