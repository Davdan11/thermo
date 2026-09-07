import fs from "fs";
import path from "path";
import axios from "axios";
import * as cheerio from "cheerio";
import { registry } from "../src/lib/data/registry";

const logosDir = path.join(process.cwd(), "public/images/marques");

async function scrapeBrandLogos() {
  console.log("Starting brand logo scraping...");

  if (!fs.existsSync(logosDir)) {
    fs.mkdirSync(logosDir, { recursive: true });
  }

  // Get all unique brands that are published
  const publishedModels = registry.models.filter((m) => m.status === "published" && m.isActive2026);
  const brandIds = new Set(publishedModels.map((m) => m.brandId));
  const brands = Array.from(brandIds).map((id) => registry.brandById.get(id)!).filter(Boolean);

  console.log(`Found ${brands.length} active brands.`);

  for (const brand of brands) {
    const slug = brand.slug;
    const targetFilename = `logo-${slug}-bleu-nuit.png`;
    const targetPath = path.join(logosDir, targetFilename);

    if (fs.existsSync(targetPath)) {
      console.log(`[SKIP] Logo already exists for: ${brand.name}`);
      continue;
    }

    console.log(`[FETCH] Searching logo for: ${brand.name}...`);

    try {
      // Use Bing Image Search
      const query = encodeURIComponent(`"${brand.name}" logo png transparent background HVAC`);
      const searchUrl = `https://www.bing.com/images/search?q=${query}&form=HDRSC2&first=1&cw=1177&ch=741&qft=+filterui:imagesize-large+filterui:photo-transparent`;

      const response = await axios.get(searchUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      });

      const $ = cheerio.load(response.data);
      let imgUrl = null;

      // Parse Bing's m="" attribute which contains the JSON data for the image
      $("a.iusc").each((i, el) => {
        if (imgUrl) return; // already found
        const mAttr = $(el).attr("m");
        if (mAttr) {
          try {
            const m = JSON.parse(mAttr);
            // prefer png or svg
            if (m.murl && (m.murl.toLowerCase().includes(".png") || m.murl.toLowerCase().includes(".svg"))) {
              imgUrl = m.murl;
            } else if (m.murl && i === 0) {
              // fallback to first if no png/svg specifically found in URL but Bing says it's transparent
              imgUrl = m.murl;
            }
          } catch (e) {
            // ignore JSON parse errors
          }
        }
      });

      if (!imgUrl) {
        console.log(`  ❌ No suitable logo found for ${brand.name}.`);
        continue;
      }

      console.log(`  Downloading from: ${imgUrl}`);
      
      // Download image
      const imgResponse = await axios.get(imgUrl, {
        responseType: "arraybuffer",
        timeout: 10000,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
      });
      
      fs.writeFileSync(targetPath, imgResponse.data);
      console.log(`  ✅ Saved to: ${targetFilename}`);

      // polite delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e: any) {
      console.log(`  ❌ Error for ${brand.name}: ${e.message}`);
    }
  }

  console.log("Finished scraping brand logos.");
}

scrapeBrandLogos().catch(console.error);
