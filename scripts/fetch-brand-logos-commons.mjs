/**
 * Récupère les logos officiels des marques depuis Wikimedia Commons (API publique),
 * enregistre la provenance (titre, URL, licence) et produit deux variantes PNG :
 *   logo-<slug>.png            (couleurs d'origine, fond transparent)
 *   logo-<slug>-bleu-nuit.png  (monochrome marine #172126 pour les bandeaux)
 * Usage : node scripts/fetch-brand-logos-commons.mjs '[["daikin","DAIKIN"],...]' [--force]
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = path.join(process.cwd(), "public/images/marques");
const MANIFEST = path.join(OUT, "SOURCES.json");
const brands = JSON.parse(process.argv[2]);
const force = process.argv.includes("--force");
const UA = "ThermopompesAVendre/1.0 (site de comparaison; contact via thermopompesavendre.ca)";
const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};

const ALIASES = {
  "ge-appliances": "GE Appliances", ge: "General Electric", "direct-air": "Direct Air HVAC", "quebec-vair": "Québec Vair",
  "maxi-air": "Maxi Air", "mitsubishi-electric": "Mitsubishi Electric", "american-standard": "American Standard", tempstar: "Tempstar",
};

async function api(params) {
  const url = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({ format: "json", origin: "*", ...params });
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
}

function score(title, name) {
  const t = title.toLowerCase(), n = name.toLowerCase();
  let s = 0;
  if (t.includes(n)) s += 10; else return -1;
  if (t.includes("logo")) s += 5;
  if (t.endsWith(".svg")) s += 4; else if (t.endsWith(".png")) s += 2;
  if (/(park|stadium|arena|building|factory|store|shop|cup|award|van|truck|hq|headquarters|tower|sign|photo|1[0-9]{3}|20[0-2][0-9])/i.test(t)) s -= 6;
  s -= Math.max(0, t.length - 30) / 10;
  return s;
}

for (const [slug, rawName] of brands) {
  const name = ALIASES[slug] ?? rawName.split(" ").map((w) => w[0] + w.slice(1).toLowerCase()).join(" ");
  const target = path.join(OUT, `logo-${slug}.png`);
  if (!force && fs.existsSync(target)) { console.log(`skip ${slug}`); continue; }
  try {
    const res = await api({ action: "query", list: "search", srsearch: `${name} logo`, srnamespace: "6", srlimit: "20" });
    const cands = (res.query?.search ?? []).map((x) => ({ title: x.title, s: score(x.title, name) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s);
    if (cands.length === 0) { console.log(`✗ ${slug}: aucun logo trouvé`); continue; }
    const title = cands[0].title;
    const info = await api({ action: "query", titles: title, prop: "imageinfo", iiprop: "url|extmetadata|mime", iiurlwidth: "800" });
    const page = Object.values(info.query.pages)[0];
    const ii = page.imageinfo?.[0];
    if (!ii) { console.log(`✗ ${slug}: pas d'imageinfo`); continue; }
    const url = ii.thumburl ?? ii.url;
    const buf = Buffer.from(await (await fetch(url, { headers: { "User-Agent": UA } })).arrayBuffer());
    const base = sharp(buf).ensureAlpha().resize({ width: 800, withoutEnlargement: true });
    await base.clone().png().toFile(target);
    // Variante marine : on garde l'alpha, on remplace la couleur par #172126
    const { data, info: meta } = await sharp(await base.clone().png().toBuffer()).raw().toBuffer({ resolveWithObject: true });
    const out = Buffer.alloc(data.length);
    for (let i = 0; i < data.length; i += 4) { out[i] = 23; out[i + 1] = 33; out[i + 2] = 38; out[i + 3] = data[i + 3]; }
    await sharp(out, { raw: { width: meta.width, height: meta.height, channels: 4 } }).png().toFile(path.join(OUT, `logo-${slug}-bleu-nuit.png`));
    const em = ii.extmetadata ?? {};
    manifest[slug] = { title, source: `https://commons.wikimedia.org/wiki/${encodeURIComponent(title)}`, file: ii.url, license: em.LicenseShortName?.value ?? null, credit: em.Artist?.value?.replace(/<[^>]+>/g, "") ?? null, fetchedAt: new Date().toISOString().slice(0, 10) };
    console.log(`✓ ${slug}: ${title} [${manifest[slug].license}]`);
  } catch (e) {
    console.log(`✗ ${slug}: ${e.message}`);
  }
  await new Promise((r) => setTimeout(r, 400));
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
