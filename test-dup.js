const fs = require('fs');
const path = require('path');

const manualPath = path.join(process.cwd(), 'src/lib/data/fixtures/brands/daikin.ts');
const autoPath = path.join(process.cwd(), 'src/lib/data/fixtures/brands_generated/daikin-auto.ts');

const manualContent = fs.readFileSync(manualPath, 'utf8');
const autoContent = fs.readFileSync(autoPath, 'utf8');

const manualNames = [...manualContent.matchAll(/name:\s*"([^"]+)"/g)].map(m => m[1]);
const autoNames = [...autoContent.matchAll(/"name":\s*"([^"]+)"/g)].map(m => m[1]);

const duplicates = [];
for (const name of autoNames) {
  if (name.includes('Aurora') || name.includes('ATMOSPHERA') || name.includes('OTERA') || name.includes('Otera')) {
    console.log('Found in auto:', name);
  }
}
