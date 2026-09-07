import fs from 'fs';
import path from 'path';
import axios from 'axios';

const brands = [
  { name: 'DAIKIN', domain: 'daikin.com' },
  { name: 'GREE', domain: 'gree.com' },
  { name: 'FUJITSU', domain: 'fujitsu.com' },
  { name: 'MITSUBISHI ELECTRIC', domain: 'mitsubishielectric.com' },
  { name: 'PANASONIC', domain: 'panasonic.com' },
  { name: 'MOOVAIR', domain: 'moovair.ca' },
  { name: 'SENOVILLE', domain: 'senville.ca' },
  { name: 'LG', domain: 'lg.com' },
  { name: 'CARRIER', domain: 'carrier.com' },
  { name: 'LENNOX', domain: 'lennox.com' },
  { name: 'TRANE', domain: 'trane.com' },
  { name: 'TOSOT', domain: 'tosot.com' },
  { name: 'DIRECT AIR', domain: 'directairhvac.com' },
  { name: 'KEEPRITE', domain: 'keeprite.com' },
  { name: 'GOODMAN', domain: 'goodmanmfg.com' }
];

const logosDir = path.join(process.cwd(), 'public/images/brands_clearbit');

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

async function fetchLogos() {
  for (const brand of brands) {
    const slug = brand.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const targetPath = path.join(logosDir, `logo-${slug}.png`);
    
    console.log(`Fetching logo for ${brand.name}...`);
    try {
      const response = await axios.get(`https://logo.clearbit.com/${brand.domain}?size=256`, {
        responseType: 'arraybuffer'
      });
      fs.writeFileSync(targetPath, response.data);
      console.log(` ✅ Saved ${slug}`);
    } catch (error) {
      console.log(` ❌ Failed for ${brand.name}`);
    }
  }
}

fetchLogos();
