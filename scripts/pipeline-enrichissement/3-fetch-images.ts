import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

// This script reads all-auto-datasets.json, finds series with placeholder images,
// scrapes a real image from Bing, downloads it, and updates the JSON file.

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const IMAGES_DIR = path.join(process.cwd(), "public/images/catalogue");

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function fetchImages() {
  throw new Error(
    "Collecte désactivée: la première image Bing ne prouve ni le modèle exact, " +
    "ni la provenance officielle, ni le droit d'utilisation."
  );
  console.log("Loading datasets...");
  const datasets = JSON.parse(fs.readFileSync(DATASETS_FILE, "utf8"));
  let modifiedCount = 0;

  for (const [brandSlug, dataset] of Object.entries(datasets)) {
    const d = dataset as any;
    for (const series of d.series) {
      if (series.imageUrl === "/images/placeholder-heatpump.png") {
        const query = `${d.brand.name} "${series.name}" heat pump`;
        console.log(`[SCRAPING] Image for ${query}`);

        try {
          const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
          const res = await axios.get(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
          });
          
          const $ = cheerio.load(res.data);
          const images: string[] = [];
          
          $('a.iusc').each((i, el) => {
            try {
              const m = JSON.parse($(el).attr('m') || '{}');
              if (m.murl) images.push(m.murl);
            } catch(e) {}
          });

          // Filter out bad images
          const validImages = images.filter(url => 
            !url.includes('svg') && !url.includes('logo') && !url.includes('apraxia')
          );

          if (validImages.length > 0) {
            const imageUrl = validImages[0];
            console.log(`   -> Found image: ${imageUrl}`);
            
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 5000 });
            const buffer = Buffer.from(response.data);
            
            const extMatch = imageUrl.match(/\.(jpg|jpeg|png|webp)/i);
            const ext = extMatch ? extMatch[1] : 'jpg';
            const filename = `${brandSlug}-${series.slug}.${ext}`;
            const savePath = path.join(IMAGES_DIR, filename);
            
            fs.writeFileSync(savePath, buffer);
            console.log(`   -> Saved to: ${filename}`);
            
            series.imageUrl = `/images/catalogue/${filename}`;
            modifiedCount++;
            
            // Periodically save to avoid losing progress
            if (modifiedCount % 5 === 0) {
              fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
              console.log("   [SAVED PROGRESS]");
            }
          } else {
            console.log(`   -> No suitable image found.`);
          }
        } catch (e: any) {
          console.error(`   -> Error: ${e.message}`);
        }
        
        // Delay to avoid bans
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }

  if (modifiedCount > 0) {
    fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
    console.log(`\nFinished scraping. Updated ${modifiedCount} images.`);
  } else {
    console.log(`\nNo new images to scrape.`);
  }
}

fetchImages().catch(console.error);
