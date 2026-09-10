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
  // Moovair série M 2025 (brochure officielle) : Morelis = MSHHA, Meridian = MSHMA, Mistral = MSHEA.
  ["moovair", /^MSHHA(12|18)C2AN/, (k) => `/images/products/moovair-morelis-${k}k.webp`, "/images/products/official/moovair-morelis-exterieure-officielle.webp"],
  ["moovair", /^MSHMA(09|12|15|18|24|33)C2AN/, (k) => ({ 9: "/images/products/moovair-meridian-9k.webp", 12: "/images/products/moovair-meridian-12k.webp", 18: "/images/products/moovair-meridian-18k.webp", 24: "/images/products/moovair-meridian-24k.webp" }[k] ?? null), "/images/products/official/moovair-meridian-exterieure-officielle.webp"],
  ["moovair", /^MSHEA(09|12|15|18|24)C2AN/, (k) => ({ 9: "/images/products/moovair-mistral-9k.webp", 12: "/images/products/moovair-mistral-12k.webp" }[k] ?? null), "/images/products/official/moovair-mistral-exterieure-officielle.webp"],
  // Fujitsu Airstage XLTH (LZAH1) : photo par capacité + photo de famille.
  ["fujitsu", /^AOUG(09|12|15|18|24)LZAH1/, (k) => `/images/products/fujitsu-xlth-${k}k.webp`, "/images/products/official/fujitsu-xlth-lzah1-officiel.webp"],
  // Daikin FIT 17 SEER (DZ17VSA) : même famille que la photo FIT ; 18/24/36k par capacité.
  ["daikin", /^DZ17VSA(18|24|30|36|42|48)/, (k) => ({ 18: "/images/products/daikin-fit-aurora-18k.webp", 24: "/images/products/daikin-fit-aurora-24k.webp", 36: "/images/products/daikin-fit-aurora-36k.webp" }[k] ?? null), "/images/products/official/daikin-fit-aurora-officiel.webp"],
  // Midea EVOX G3 (gainable, DLC?RBH) : photo officielle + 36k/48k par capacité.
  ["midea", /^DLC[SE]RBH(18|24|30|36|48|60)/, (k) => ({ 36: "/images/products/midea-evox-36k.webp", 48: "/images/products/midea-evox-48k.webp" }[k] ?? null), "/images/products/official/midea-evox-g3-officiel.webp"],
  // LG Standard : la règle couvre aussi la révision HSV4.
  ["lg", /^LSU(090|120)HSV4/, (k) => ({ 9: "/images/products/lg-standard-9k.webp", 12: "/images/products/lg-standard-12k.webp" }[k] ?? null), null],
  // Photos extraites des brochures officielles (revues visuellement) : famille complète.
  ["rheem", /^RP17/, null, "/images/products/brochures/rheem/rheem-rp17-exterieure.webp"],
  ["gree", /^MUL(18|24|30|36|42|48|60)HP230V1R32/, null, "/images/products/brochures/gree/gree-multi-r32-60-exterieure.webp"],
  // TOSOT — catalogue officiel 2026 (public/brochures/tosot), photos par famille de produits :
  // monozone murale entrée de gamme (p. 5), monozone haut de gamme (p. 8), condenseur multizone (p. 10),
  // centrales gainables UNIX (p. 22, deux tailles d'unité extérieure).
  ["tosot", /^(TW|TS-|SU-)/, null, "/images/products/brochures/tosot/tosot-monozone-entree-exterieure.webp"],
  ["tosot", /^TWH/, null, "/images/products/brochures/tosot/tosot-monozone-haut-de-gamme-exterieure.webp"],
  ["tosot", /^TM(S|SCI)?\d/, null, "/images/products/brochures/tosot/tosot-multizone-condenseur-exterieure.webp"],
  ["tosot", /^TUD?(18|24|30|36)/, null, "/images/products/brochures/tosot/tosot-unix-central-exterieure.webp"],
  ["tosot", /^TUD?(42|48|60)/, null, "/images/products/brochures/tosot/tosot-unix-central-grande-capacite-exterieure.webp"],
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
      if (s && !s.imageUrl && !/s[ée]rie standard|s[ée]rie non identifi/i.test(s.name)) { s.imageUrl = seriesImg; series++; }
    }
  }
}
console.log({ models, series, missing: [...missing] });
if (!dry) fs.writeFileSync(DATA, JSON.stringify(d, null, 2));
