const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(process.cwd(), 'src/lib/data/fixtures/brands_generated');
const outDir = path.join(process.cwd(), 'public/images/marques');

const files = fs.readdirSync(dir);
const brands = files
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .map(f => f.replace('.ts', ''));

let current = 0;

function downloadLogo(slug, cb) {
  const url = 'https://logo.clearbit.com/' + slug + '.com';
  const dest = path.join(outDir, 'logo-' + slug + '-bleu-nuit.png');
  
  if (fs.existsSync(dest)) {
    return cb();
  }

  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded ' + slug);
        cb();
      });
    } else {
      res.resume();
      cb();
    }
  }).on('error', () => {
    cb();
  });
}

function next() {
  if (current >= brands.length) {
    return;
  }
  const slug = brands[current++];
  downloadLogo(slug, next);
}

for (let i = 0; i < 5; i++) next();
