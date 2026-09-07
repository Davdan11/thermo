const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(process.cwd(), 'src/lib/data/fixtures/brands_generated');
const outDir = path.join(process.cwd(), 'public/images/marques');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(dir);
const brands = files
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .map(f => f.replace('.ts', ''));

let missing = [];
for (const slug of brands) {
  const logoPath = path.join(outDir, `logo-${slug}-bleu-nuit.png`);
  if (!fs.existsSync(logoPath)) {
    missing.push(slug);
  }
}

console.log(`Starting scraper for ${missing.length} missing logos...`);

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = Buffer.alloc(0);
      res.on('data', chunk => {
        data = Buffer.concat([data, chunk]);
      });
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function scrapeLogo(slug) {
  const dest = path.join(outDir, `logo-${slug}-bleu-nuit.png`);
  if (fs.existsSync(dest)) return; // Already exists

  try {
    // 1. Get Domain from Clearbit Autocomplete
    const nameStr = encodeURIComponent(slug.replace(/-/g, ' '));
    const searchUrl = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${nameStr}`;
    
    const searchRes = await httpsGet(searchUrl);
    if (searchRes.statusCode === 200 && searchRes.data.length > 0) {
      const results = JSON.parse(searchRes.data.toString());
      if (results && results.length > 0 && results[0].domain) {
        const domain = results[0].domain;
        
        // 2. Get Favicon from Google
        const logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
        const logoRes = await httpsGet(logoUrl);
        
        if (logoRes.statusCode === 200 && logoRes.data.length > 500) { // Valid image size
          fs.writeFileSync(dest, logoRes.data);
          console.log(`[SUCCESS] Saved logo for ${slug} from ${domain}`);
          return;
        }
      }
    }
    console.log(`[FAILED] No logo found for ${slug}`);
  } catch (err) {
    console.log(`[ERROR] Failed to fetch ${slug}: ${err.message}`);
  }
}

async function run() {
  // Run sequentially to avoid rate limits
  for (const slug of missing) {
    await scrapeLogo(slug);
    // Wait 500ms between requests to be polite
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('Scraping finished!');
}

run();
