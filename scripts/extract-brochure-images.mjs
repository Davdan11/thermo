/**
 * Extrait les images embarquées des brochures PDF officielles (public/brochures/<marque>/*.pdf)
 * vers <out>/<marque>/<pdf>-p<page>-<n>.png (≥ 220 px de côté, ratio raisonnable).
 * Usage : node scripts/extract-brochure-images.mjs <dossier-sortie>
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { getDocument, OPS } from "pdfjs-dist/legacy/build/pdf.mjs";

const OUT = process.argv[2];
const ROOT = path.join(process.cwd(), "public/brochures");
let total = 0;

for (const brand of fs.readdirSync(ROOT)) {
  const dir = path.join(ROOT, brand);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const file of fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf"))) {
    const outDir = path.join(OUT, brand); fs.mkdirSync(outDir, { recursive: true });
    try {
      const data = new Uint8Array(fs.readFileSync(path.join(dir, file)));
      const doc = await getDocument({ data, useSystemFonts: true, isEvalSupported: false }).promise;
      const seen = new Set();
      for (let p = 1; p <= Math.min(doc.numPages, 40); p++) {
        const page = await doc.getPage(p);
        const ops = await page.getOperatorList();
        let k = 0;
        for (let i = 0; i < ops.fnArray.length; i++) {
          if (ops.fnArray[i] !== OPS.paintImageXObject) continue;
          const name = ops.argsArray[i][0];
          if (seen.has(name)) continue; seen.add(name);
          let img = null;
          try {
            if (page.objs.has(name)) img = page.objs.get(name);
            else if (page.commonObjs.has(name)) img = page.commonObjs.get(name);
          } catch { img = null; }
          if (!img) continue;
          if (!img?.width || img.width < 220 || img.height < 220) continue;
          const ratio = img.width / img.height; if (ratio > 3 || ratio < 0.33) continue;
          const ch = img.data.length / (img.width * img.height);
          let raw = img.data, channels = ch;
          if (ch === 3) { const a = Buffer.alloc(img.width * img.height * 4); for (let j = 0, q = 0; j < raw.length; j += 3, q += 4) { a[q] = raw[j]; a[q + 1] = raw[j + 1]; a[q + 2] = raw[j + 2]; a[q + 3] = 255; } raw = a; channels = 4; }
          if (![1, 3, 4].includes(channels)) continue;
          const out = path.join(outDir, `${file.replace(/\.pdf$/i, "")}-p${p}-${k++}.png`);
          try { await sharp(Buffer.from(raw), { raw: { width: img.width, height: img.height, channels } }).resize({ width: 1000, withoutEnlargement: true }).png().toFile(out); total++; } catch {}
        }
        page.cleanup();
      }
      console.log(`${brand}/${file}: ${doc.numPages} pages`);
    } catch (e) { console.log(`✗ ${brand}/${file}: ${e.message.slice(0, 80)}`); }
  }
}
console.log("images extraites :", total);
