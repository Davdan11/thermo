/**
 * Planche-contact : assemble des vignettes numérotées pour revue visuelle.
 * Usage : node scripts/contact-sheet.mjs <liste.txt> <sortie-prefix> [parPlanche=48]
 * liste.txt : un chemin d'image par ligne (relatif au projet).
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const [listFile, outPrefix, perSheetArg] = process.argv.slice(2);
const perSheet = Number(perSheetArg ?? 48);
const files = fs.readFileSync(listFile, "utf8").split("\n").map((l) => l.trim()).filter(Boolean);
const COLS = 8, W = 200, H = 170, LABEL = 22;
const cellH = H + LABEL;

for (let s = 0; s * perSheet < files.length; s++) {
  const batch = files.slice(s * perSheet, (s + 1) * perSheet);
  const rows = Math.ceil(batch.length / COLS);
  const composites = [];
  for (let i = 0; i < batch.length; i++) {
    const idx = s * perSheet + i;
    const x = (i % COLS) * W, y = Math.floor(i / COLS) * cellH;
    let thumb;
    try {
      thumb = await sharp(batch[i]).resize(W - 8, H - 8, { fit: "inside", background: "#fff" }).png().toBuffer();
    } catch {
      thumb = await sharp({ create: { width: W - 8, height: H - 8, channels: 3, background: "#f88" } }).png().toBuffer();
    }
    const meta = await sharp(thumb).metadata();
    composites.push({ input: thumb, left: x + 4 + Math.floor((W - 8 - meta.width) / 2), top: y + 4 + Math.floor((H - 8 - meta.height) / 2) });
    const label = Buffer.from(`<svg width="${W}" height="${LABEL}"><rect width="100%" height="100%" fill="#0C1821"/><text x="4" y="16" font-family="Arial" font-size="12" fill="#fff">#${idx} ${path.basename(batch[i]).slice(0, 26)}</text></svg>`);
    composites.push({ input: label, left: x, top: y + H });
  }
  const out = `${outPrefix}-${s}.png`;
  await sharp({ create: { width: COLS * W, height: rows * cellH, channels: 3, background: "#e5e5e5" } }).composite(composites).png().toFile(out);
  console.log(out, batch.length);
}
