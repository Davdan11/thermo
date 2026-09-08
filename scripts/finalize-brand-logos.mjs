/**
 * À partir des candidats validés (public/images/marques/_candidats/<slug>.png) :
 * - fond blanc opaque → transparent ; recadrage sur le contenu ; hauteur 200 px
 * - logo-<slug>.png (couleurs) et logo-<slug>-bleu-nuit.png (monochrome #172126)
 * - SOURCES.json fusionné avec la provenance
 * Usage : node scripts/finalize-brand-logos.mjs slug1 slug2 ...
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIR = path.join(process.cwd(), "public/images/marques");
const CAND = path.join(DIR, "_candidats");
const src = JSON.parse(fs.readFileSync(path.join(CAND, "SOURCES.json"), "utf8"));
const outManifestPath = path.join(DIR, "SOURCES.json");
const outManifest = fs.existsSync(outManifestPath) ? JSON.parse(fs.readFileSync(outManifestPath, "utf8")) : {};
const NAVY = [23, 33, 38];

for (const slug of process.argv.slice(2)) {
  const file = path.join(CAND, `${slug}.png`);
  if (!fs.existsSync(file)) { console.log(`✗ ${slug}: candidat absent`); continue; }
  let { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  // Fond opaque quasi blanc → transparent
  let opaque = true;
  for (let i = 3; i < data.length; i += 4) if (data[i] < 250) { opaque = false; break; }
  if (opaque) for (let i = 0; i < data.length; i += 4) if (data[i] > 238 && data[i + 1] > 238 && data[i + 2] > 238) data[i + 3] = 0;
  // Boîte englobante du contenu
  let top = height, left = width, bottom = 0, right = 0;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) if (data[(y * width + x) * 4 + 3] > 16) { if (y < top) top = y; if (y > bottom) bottom = y; if (x < left) left = x; if (x > right) right = x; }
  if (right <= left || bottom <= top) { console.log(`✗ ${slug}: vide`); continue; }
  const cropped = sharp(data, { raw: { width, height, channels: 4 } }).extract({ left, top, width: right - left + 1, height: bottom - top + 1 }).resize({ height: 200, withoutEnlargement: false });
  const colorBuf = await cropped.clone().png().toBuffer();
  await sharp(colorBuf).toFile(path.join(DIR, `logo-${slug}.png`));
  const { data: c, info: ci } = await sharp(colorBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  // Monochrome marine : alpha conservé ; les pixels clairs (logos blancs) comptent comme pleins
  const mono = Buffer.alloc(c.length);
  for (let i = 0; i < c.length; i += 4) { mono[i] = NAVY[0]; mono[i + 1] = NAVY[1]; mono[i + 2] = NAVY[2]; mono[i + 3] = c[i + 3]; }
  await sharp(mono, { raw: { width: ci.width, height: ci.height, channels: 4 } }).png().toFile(path.join(DIR, `logo-${slug}-bleu-nuit.png`));
  outManifest[slug] = src[slug];
  console.log(`✓ ${slug} ${ci.width}×${ci.height}`);
}
fs.writeFileSync(outManifestPath, JSON.stringify(outManifest, null, 2));
