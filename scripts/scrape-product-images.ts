import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

// Define directories
const brandsDir = path.join(__dirname, '../src/lib/data/fixtures/brands_generated');
const imagesDir = path.join(__dirname, '../public/images/series');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function scrapeImages() {
  const files = fs.readdirSync(brandsDir).filter(f => f.endsWith('.ts'));

  for (const file of files) {
    if (file === 'index.ts') continue;
    // TEMP: Limit to just ameristar for testing
    // if (file !== 'ameristar.ts') continue;

    console.log(`Processing file: ${file}`);
    const filePath = path.join(brandsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const seriesBlockRegex = /\{\s*"id":\s*"series-([^"]+)",[\s\S]*?"name":\s*"([^"]+)",[\s\S]*?"brandId":\s*"brand-([^"]+)",[\s\S]*?"imageUrl":\s*"\/images\/placeholder-heatpump\.png"[\s\S]*?\}/g;
    
    let match;
    let modified = false;

    while ((match = seriesBlockRegex.exec(content)) !== null) {
      const seriesSlugFull = match[1];
      const seriesName = match[2];
      const brandSlug = match[3];
      
      const brandName = brandSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const query = `${brandName} "${seriesName}" heat pump`;
      
      console.log(`  Scraping image for: ${query}`);
      
      try {
        const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
        const res = await axios.get(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });
        
        const $ = cheerio.load(res.data);
        const images = [];
        
        $('a.iusc').each((i, el) => {
          try {
            const m = JSON.parse($(el).attr('m') || '{}');
            if (m.murl) images.push(m.murl);
          } catch(e) {}
        });

        // Filter out obviously bad images
        const validImages = images.filter(url => 
          !url.includes('svg') && !url.includes('logo') && !url.includes('apraxia')
        );

        if (validImages.length > 0) {
          const imageUrl = validImages[0];
          console.log(`    Found image: ${imageUrl}`);
          
          const response = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 5000 });
          const buffer = Buffer.from(response.data);
          
          const filename = `${brandSlug}-${seriesSlugFull}.jpg`;
          const savePath = path.join(imagesDir, filename);
          
          fs.writeFileSync(savePath, buffer);
          console.log(`    Saved to: ${filename}`);
          
          const oldUrlString = `"imageUrl": "/images/placeholder-heatpump.png"`;
          const newUrlString = `"imageUrl": "/images/series/${filename}"`;
          
          content = content.substring(0, match.index) + 
                    content.substring(match.index).replace(oldUrlString, newUrlString);
          modified = true;
        } else {
          console.log(`    No suitable image found.`);
        }
      } catch (e: any) {
        console.error(`    Error: ${e.message}`);
      }
      
      // Delay to avoid bans
      await new Promise(r => setTimeout(r, 1000));
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`  Updated ${file}`);
    }
  }
}

scrapeImages().catch(console.error);
