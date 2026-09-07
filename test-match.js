const fs = require('fs');
const path = require('path');

const manualContent = fs.readFileSync(path.join(process.cwd(), 'src/lib/data/fixtures/brands/daikin.ts'), 'utf8');
const autoContent = fs.readFileSync(path.join(process.cwd(), 'src/lib/data/fixtures/brands_generated/daikin.ts'), 'utf8');

const manualMatches = [...manualContent.matchAll(/id:\s*"model-([^"]+)",[^}]*seriesId:\s*"([^"]+)"[^}]*nominalCapacityBtu:\s*(\d+)/g)];
console.log('Manual models with capacity:', manualMatches.length);
