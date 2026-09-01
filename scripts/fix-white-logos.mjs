/**
 * Fix logos with white text: convert white/near-white pixels to dark color
 * so they're visible on light backgrounds.
 * Only processes Moovair and LG which have white text.
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGOS_DIR = path.join(__dirname, "..", "public", "images", "marques");

// Dark color to replace white text with (matches site brand)
const DARK = { r: 23, g: 33, b: 38 }; // #172126

// Logos that have white text
const logos = [
  "logo-moovair-bleu-nuit.png",
  "logo-lg-bleu-nuit.png",
];

for (const logo of logos) {
  const src = path.join(LOGOS_DIR, logo);
  const dest = path.join(LOGOS_DIR, logo.replace("-bleu-nuit.png", "-light.png"));

  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const output = Buffer.from(data);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    // If pixel is white/near-white AND not fully transparent → make it dark
    if (r > 230 && g > 230 && b > 230 && a > 20) {
      output[i] = DARK.r;
      output[i + 1] = DARK.g;
      output[i + 2] = DARK.b;
      // Keep alpha as-is
    }
  }

  // Save the color-fixed version
  await sharp(output, { raw: { width, height, channels } })
    .png()
    .toFile(dest);

  console.log(`${logo} → ${path.basename(dest)}`);

  // Now crop the fixed version
  const cropDest = path.join(LOGOS_DIR, logo.replace("-bleu-nuit.png", "-light-cropped.png"));

  const { data: data2, info: info2 } = await sharp(dest)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let top = info2.height, left = info2.width, bottom = 0, right = 0;
  for (let y = 0; y < info2.height; y++) {
    for (let x = 0; x < info2.width; x++) {
      const idx = (y * info2.width + x) * info2.channels;
      const a2 = data2[idx + 3];
      const r2 = data2[idx], g2 = data2[idx + 1], b2 = data2[idx + 2];
      const isBg = a2 > 250 && r2 > 250 && g2 > 250 && b2 > 250;
      const isTransp = a2 < 20;
      if (!isTransp && !isBg) {
        if (y < top) top = y;
        if (y > bottom) bottom = y;
        if (x < left) left = x;
        if (x > right) right = x;
      }
    }
  }

  const pad = 15;
  const cropLeft = Math.max(0, left - pad);
  const cropTop = Math.max(0, top - pad);
  const cropWidth = Math.min(info2.width - cropLeft, right - left + 1 + pad * 2);
  const cropHeight = Math.min(info2.height - cropTop, bottom - top + 1 + pad * 2);

  await sharp(dest)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .resize({ height: 200, fit: "inside" })
    .png()
    .toFile(cropDest);

  const finalMeta = await sharp(cropDest).metadata();
  console.log(`  → cropped: ${finalMeta.width}x${finalMeta.height}`);
}

console.log("\nDone!");
