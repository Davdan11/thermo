const fs = require('fs');
const path = require('path');

const nonSlugs = new Set([
  "1hvac", "ac-pro", "ac-procom", "ai-air-conditioning", "aireforce", "airquest", 
  "airtemp", "allied", "allied-commercial", "alsetria", "armstrong-air", "bluefin", 
  "blueridge", "boreal", "breeze33", "bryant", "bryant-heating-and-cooling-systems", 
  "century", "champion", "champion-heating-and-cooling", "classic", "classic-america", 
  "clima-smart", "coast-air", "concord", "conforto", "connect-m", "cooperhunter", 
  "custom-comfort", "day-night", "della", "denali-aire", "dettson", "diycool", 
  "ducane", "ductlessaire", "eco-ac", "eco-air", "ecoer", "emi", "forestair", 
  "fujieco", "ge-appliances", "genie-aire", "gibson", "gridless", "intertherm", 
  "kanionco", "karda", "kepler", "kerr", "kerr-kapstone", "kwiik", "lbg-products", 
  "lps-legacy", "maple-heat", "mdv", "multi-mfg", "multimfg", "ng-trade", "nortek", 
  "nortek-global-hvac-llc", "norton-air-conditioners", "payne", "payne-heating-and-cooling", 
  "premium-levella", "quilt", "runtru", "russell", "ruud", "sea-breeze", "smart-comfort", 
  "star-air-kontrol", "stealth", "stealth-comfort", "sum-x", "turbofin", "viessmann", 
  "wabban", "weathermaker", "westinghouse", "zero"
]);

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.ts')) continue;
    const slug = file.replace('-auto.ts', '').replace('.ts', '');
    
    if (nonSlugs.has(slug)) {
      const filePath = path.join(dir, file);
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // Update boolean whether it's quoted or not
      content = content.replace(/("?)activeInQuebec\1\s*:\s*true/g, '1activeInQuebec1: false');
      
      fs.writeFileSync(filePath, content);
      console.log('Disabled:', slug);
    }
  }
}

processDir(path.join(process.cwd(), 'src/lib/data/fixtures/brands_generated'));
processDir(path.join(process.cwd(), 'src/lib/data/fixtures/brands'));
