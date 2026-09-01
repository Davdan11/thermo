/**
 * Auto-crop brand logos to their content bounds.
 * Uses alpha channel ONLY to detect content (any non-transparent pixel = content).
 * This handles white text on transparent backgrounds correctly.
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOGOS_DIR = path.join(__dirname, "..", "public", "images", "marques");

const logos = [
  "logo-daikin-bleu-nuit.png",
  "logo-mitsubishi-electric-bleu-nuit.png",
  "logo-fujitsu-bleu-nuit.png",
  "logo-gree-bleu-nuit.png",
  "logo-midea-bleu-nuit.png",
  "logo-lg-bleu-nuit.png",
  "logo-samsung-bleu-nuit.png",
  "logo-moovair-bleu-nuit.png",
];

const TARGET_HEIGHT = 200;

for (const logo of logos) {
  const src = path.join(LOGOS_DIR, logo);
  const dest = path.join(LOGOS_DIR, logo.replace(".png", "-cropped.png"));

  try {
    // First check if the image actually has an alpha channel
    const origMeta = await sharp(src).metadata();
    const hasAlpha = origMeta.channels === 4;

    const { data, info } = await sharp(src)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;

    let top = height, left = width, bottom = 0, right = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * channels;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        // Pixel is content if:
        // - Alpha is > 20 (not fully transparent) AND
        // - It's not a near-white pixel with full alpha (background fill)
        //   We consider background as: fully opaque + very close to white
        const isBackground = a > 250 && r > 250 && g > 250 && b > 250;
        const isTransparent = a < 20;

        if (!isTransparent && !isBackground) {
          if (y < top) top = y;
          if (y > bottom) bottom = y;
          if (x < left) left = x;
          if (x > right) right = x;
        }
      }
    }

    console.log(`${logo}: content bounds [${left},${top} → ${right},${bottom}] (${right - left + 1}x${bottom - top + 1})`);

    const pad = 15;
    const cropLeft = Math.max(0, left - pad);
    const cropTop = Math.max(0, top - pad);
    const cropWidth = Math.min(width - cropLeft, right - left + 1 + pad * 2);
    const cropHeight = Math.min(height - cropTop, bottom - top + 1 + pad * 2);

    await sharp(src)
      .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
      .resize({ height: TARGET_HEIGHT, fit: "inside" })
      .png()
      .toFile(dest);

    const finalMeta = await sharp(dest).metadata();
    console.log(`  → saved ${finalMeta.width}x${finalMeta.height}`);
  } catch (err) {
    console.error(`Error processing ${logo}:`, err.message);
  }
}

console.log("\nDone!");
