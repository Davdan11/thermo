/**
 * Photos extraites des brochures officielles → modèles du registre.
 * Chaque paire (image, pdf) a été validée visuellement ; les modèles couverts par le pdf
 * viennent de src/lib/data/fixtures/documents/brochures-mapping.json (modèle extérieur → pdf).
 * Usage : node scripts/map-brochure-images.mjs <dossier-images-extraites>
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = process.argv[2];
const DATA = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const MAP = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src/lib/data/fixtures/documents/brochures-mapping.json"), "utf8"));
const d = JSON.parse(fs.readFileSync(DATA, "utf8"));
const OUT = path.join(process.cwd(), "public/images/products/brochures");

// [marque, image extraite (relative à SRC), nom de sortie]
const PICKS = [
  ["american-standard", "american-standard/TT_10-1113-R-42_AMSD_Heat_Pump-Brochure_SV-p1-2.png", "american-standard-amsd-heat-pump"],
  ["daikin", "daikin/SM-SiUS122410EA-p1-0.png", "daikin-aurora-multi-exterieure"],
  ["daikin", "daikin/ss-dh5se-r32-p1-0.png", "daikin-dh5se-exterieure"],
  ["daikin", "daikin/ss-dh7vs-r32-p1-0.png", "daikin-dh7vsa-exterieure"],
  ["goodman", "goodman/68ee64f3ed182SS-GZV7S-R32-p1-0.png", "goodman-gzv7s-exterieure"],
  ["gree", "gree/multi-r32-submittal-60mbh-a-p1-0.png", "gree-multi-r32-60-exterieure"],
  ["lennox", "lennox/sbmtl_mmpd036s6s-1p_mmd036s6-1p_2501-p1-0.png", "lennox-mmpd-exterieure"],
  ["mitsubishi-electric", "mitsubishi-electric/DB_PUMY-(H)P-NKMU(2)(4)_M-P0891A_202309-p2-0.png", "mitsubishi-pumy-exterieure"],
  ["rheem", "rheem/RHM6044-2026-ACD-Rheem-Consumer-Literature-Heat-Pump-RP17AY-R3a-Digtial-p3-0.png", "rheem-rp17-exterieure"],
  ["ruud", "ruud/Ruud_HP_RP14AY_R2b-Digital-p1-1.png", "ruud-rp14-exterieure"],
  ["york", "york/yd5_brochure-p2-2.png", "york-yd5-exterieure"],
  ["york", "york/ydv_brochure-p1-1.png", "york-ydv-exterieure"],
  ["york", "york/yh5_brochure-p4-1.png", "york-yh5-exterieure"],
];

const norm = (s) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");
let models = 0, series = 0;
for (const [brand, rel, name] of PICKS) {
  const pdfBase = rel.split("/")[1].replace(/-p\d+-\d+\.png$/, "");
  const modelsForPdf = Object.entries(MAP).filter(([, p]) => path.basename(p, ".pdf") === pdfBase).map(([m]) => norm(m.replace(/\*/g, "")));
  const b = d[brand]; if (!b) { console.log("marque absente", brand); continue; }
  fs.mkdirSync(path.join(OUT, brand), { recursive: true });
  const outRel = `/images/products/brochures/${brand}/${name}.webp`;
  await sharp(path.join(SRC, rel)).flatten({ background: "#ffffff" }).resize({ width: 1000, height: 800, fit: "inside", withoutEnlargement: true }).webp({ quality: 88 }).toFile(path.join(process.cwd(), "public", outRel));
  const touched = new Set(); let n = 0;
  for (const m of b.models) {
    const key = norm(m.modelNumber.replace(/\*/g, ""));
    if (!modelsForPdf.some((k) => key === k || key.startsWith(k) || k.startsWith(key))) continue;
    if (!m.imageUrl) { m.imageUrl = outRel; n++; }
    touched.add(m.seriesId);
  }
  for (const s of b.series) if (touched.has(s.id) && !s.imageUrl && !/s[ée]rie standard|s[ée]rie non identifi/i.test(s.name)) { s.imageUrl = outRel; series++; }
  models += n;
  console.log(`${name}: ${n} modèles (pdf ${pdfBase}, ${modelsForPdf.length} numéros)`);
}
fs.writeFileSync(DATA, JSON.stringify(d, null, 2));
console.log({ models, series });
