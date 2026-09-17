/**
 * Propage la photo d'un modèle vers ses jumeaux OEM : même unité extérieure (numéro de modèle
 * identique une fois normalisé) vendue sous une autre marque (Carrier → Bryant / Payne /
 * Weathermaker / Midea, Gree → ADP, American Standard → Trane…). Aucune ressemblance de nom :
 * seul un numéro strictement identique déclenche la copie.
 *
 * Attention : le boîtier est le même, le logo imprimé dessus ne l'est pas. Une photo au logo
 * Payne n'a rien à faire sur une fiche Bryant. La copie ne part donc que si le manifeste des
 * photos l'autorise — en pratique, seules les photos sans logo lisible voyagent d'une marque
 * à l'autre. Les autres fiches restent sans photo, ce qui est honnête.
 *
 * Usage : node scripts/propagate-oem-images.mjs [--dry-run]
 */
import fs from "node:fs";
import path from "node:path";
import { refusPhoto } from "./lib/photos-manifeste.mjs";

const DATA = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const dry = process.argv.includes("--dry-run");
const d = JSON.parse(fs.readFileSync(DATA, "utf8"));
const norm = (s) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");

// Première passe : une photo par numéro normalisé (les photos posées à la main gagnent sur les héritées).
const photo = new Map();
for (const [brand, b] of Object.entries(d)) {
  for (const m of b.models) if (m.imageUrl) photo.set(norm(m.modelNumber), { url: m.imageUrl, from: brand });
}

let copied = 0;
const refused = new Map();
const pairs = new Map();
for (const [brand, b] of Object.entries(d)) {
  const touched = new Map(); // seriesId → url
  for (const m of b.models) {
    if (m.imageUrl) continue;
    const src = photo.get(norm(m.modelNumber));
    if (!src || src.from === brand) continue;
    const refus = refusPhoto(src.url, brand, m.modelNumber, m.systemType);
    if (refus) { refused.set(refus, (refused.get(refus) ?? 0) + 1); continue; }
    m.imageUrl = src.url;
    copied++;
    const k = `${src.from} → ${brand}`;
    pairs.set(k, (pairs.get(k) ?? 0) + 1);
    if (!touched.has(m.seriesId)) touched.set(m.seriesId, src.url);
  }
  // La série hérite si elle n'a pas déjà de photo et n'est pas un fourre-tout.
  for (const s of b.series) {
    const url = touched.get(s.id);
    if (url && !s.imageUrl && !/s[ée]rie standard|s[ée]rie non identifi/i.test(s.name)) s.imageUrl = url;
  }
}
console.log({ copied, refusees: [...refused.values()].reduce((n, v) => n + v, 0), pairs: Object.fromEntries(pairs) });
if (!dry) fs.writeFileSync(DATA, JSON.stringify(d, null, 2));
