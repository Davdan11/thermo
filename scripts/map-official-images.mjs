/**
 * Relie les photos officielles (public/images/products/official + public/images/products/*.webp)
 * aux modèles et séries du registre, par préfixe de numéro de modèle et capacité.
 * Règles explicites, une par famille : rien n'est deviné par ressemblance de nom.
 * Usage : node scripts/map-official-images.mjs [--dry-run]
 */
import fs from "node:fs";
import path from "node:path";

const DATA = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const dry = process.argv.includes("--dry-run");
const d = JSON.parse(fs.readFileSync(DATA, "utf8"));
const exists = (p) => fs.existsSync(path.join(process.cwd(), "public", p));

// [marque, regex sur modelNumber, image par capacité (k → chemin) | null, image de série]
const RULES = [
  ["daikin", /^RXT(09|12|15|18|24)AVJU/, (k) => `/images/products/daikin-aurora-${k}k.webp`, "/images/products/official/daikin-aurora-officiel.webp"],
  ["daikin", /^RXM(09|12)WVJU/, (k) => `/images/products/daikin-atmosphera-${k}k.webp`, "/images/products/official/daikin-atmosphera-officiel.webp"],
  ["daikin", /^DZ(6VS|9VC)/, null, "/images/products/official/daikin-fit-aurora-officiel.webp"],
  ["fujitsu", /^AOUH(09|12|15|18|24)KZAH1/, (k) => `/images/products/official/fujitsu-aouh${String(k).padStart(2, "0")}kzah1-exterieure-exacte.webp`, "/images/products/official/fujitsu-airstage-orion-xlth-kzah1-officiel.webp"],
  ["fujitsu", /^AOU(9|12)RLS3/, (k) => `/images/products/fujitsu-rls3-${k}k.webp`, "/images/products/official/fujitsu-rls3y-officiel.webp"],
  ["gree", /^SAP(09|12|18|24)HP/, (k) => `/images/products/gree-sapphire-${k}k.webp`, "/images/products/official/gree-sapphire-officiel.webp"],
  ["gree", /^(FLEXX|FXE)(24|30|36|48|60)HP/, (k) => (k === 36 ? "/images/products/gree-flexx-36k.webp" : null), "/images/products/official/gree-flexx-officiel.webp"],
  ["gree", /^GUD(24|30|36|48|60)W\/A-D/, null, "/images/products/official/gree-flexx-officiel.webp"],
  ["lg", /^LAU(090|120|150|180|240)HYV3/, (k) => ({ 9: "/images/products/lg-art-cool-9k.webp", 12: "/images/products/lg-art-cool-12k.webp", 18: "/images/products/lg-art-cool-18k.webp" }[k] ?? null), "/images/products/official/lg-art-cool-mirror-officiel.webp"],
  ["lg", /^LSU(090|120|181)HSV5/, (k) => ({ 9: "/images/products/lg-standard-9k.webp", 12: "/images/products/lg-standard-12k.webp", 18: "/images/products/lg-standard-18k.webp" }[k] ?? null), null],
  ["carrier", /^37MAHAQ/, () => "/images/products/carrier-infinity-37mahaq-series.webp", "/images/products/official/carrier-37mahaq-exterieure-officielle.webp"],
  ["carrier", /^37MARAQ/, () => "/images/products/carrier-performance-37maraq-series.webp", "/images/products/official/carrier-37maraq-exterieure-officielle.webp"],
  ["carrier", /^37MGHAQ?/, () => "/images/products/carrier-infinity-37mgha-series.webp", "/images/products/official/carrier-37mgha-exterieure-officielle.webp"],
  ["carrier", /^37MHRAQ/, () => "/images/products/carrier-comfort-37mhraq-series.webp", "/images/products/official/carrier-37mhraq-exterieure-officielle.webp"],
  ["carrier", /^37MPRAQ/, () => "/images/products/carrier-infinity-37mpraq-series.webp", "/images/products/official/carrier-37mpraq-37mahaq-exterieure-officielle.webp"],
  ["mitsubishi-electric", /^MUZ-FH(06|09|12|15|18)NA/, (k) => ({ 9: "/images/products/mitsubishi-fh-9k.webp", 12: "/images/products/mitsubishi-fh-12k.webp", 18: "/images/products/mitsubishi-fh-18k.webp" }[k] ?? null), "/images/products/official/mitsubishi-fh-exterieure-archive-officielle.webp"],
  ["mitsubishi-electric", /^MUZ-FS(06|09|12)NA/, (k) => `/images/products/mitsubishi-fs-${k}k.webp`, "/images/products/official/mitsubishi-fs-06-09-12-exterieure-officielle.webp"],
  ["mitsubishi-electric", /^MUZ-FS(15|18)NA/, (k) => `/images/products/mitsubishi-fs-${k}k.webp`, "/images/products/official/mitsubishi-fs-15-18-exterieure-officielle.webp"],
  ["panasonic", /^CU-XZ(9|12|15|18|24)AKUAC/, (k) => `/images/products/panasonic-climapure-xz-${k}k.webp`, "/images/products/official/panasonic-climapure-xz-exterieure-officielle.webp"],
  ["mainline", /^ML(09|12|18|24)HP230NEX-O/, (k) => `/images/products/mainline-nexus-${k}k.webp`, "/images/products/official/mainline-nexus-officiel.webp"],
  ["mainline", /^ML(09|12|18|24)HP230NEXH-O/, (k) => `/images/products/mainline-nexus-ultra-${k}k.webp`, "/images/products/official/mainline-nexus-ultra-officiel.webp"],
];

const capK = (m) => Math.round((m.nominalCapacityBtu ?? 0) / 1000);
let models = 0, series = 0, missing = new Set();

for (const [brand, re, byCap, seriesImg] of RULES) {
  const b = d[brand]; if (!b) { console.log("marque absente", brand); continue; }
  const seriesById = new Map(b.series.map((s) => [s.id, s]));
  const touchedSeries = new Set();
  for (const m of b.models) {
    if (!re.test(m.modelNumber)) continue;
    const img = byCap ? byCap(capK(m)) : null;
    if (img && exists(img)) { m.imageUrl = img; models++; }
    else if (img) missing.add(img);
    // Un modèle qui correspond à la règle mais sans photo à sa capacité reçoit la photo de la famille.
    if (!m.imageUrl && seriesImg && exists(seriesImg)) { m.imageUrl = seriesImg; models++; }
    touchedSeries.add(m.seriesId);
  }
  if (seriesImg && !exists(seriesImg)) missing.add(seriesImg);
  // La série reçoit la photo de la famille seulement si ce n'est pas le fourre-tout « Série Standard ».
  if (seriesImg && exists(seriesImg)) {
    for (const id of touchedSeries) {
      const s = seriesById.get(id);
      if (s && !s.imageUrl && !/s[ée]rie standard/i.test(s.name)) { s.imageUrl = seriesImg; series++; }
    }
  }
}
console.log({ models, series, missing: [...missing] });
if (!dry) fs.writeFileSync(DATA, JSON.stringify(d, null, 2));
