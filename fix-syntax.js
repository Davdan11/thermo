const fs = require('fs');
const path = require('path');

function fixDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.ts')) continue;
    
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (content.includes('1activeInQuebec1: false')) {
      content = content.replace(/1activeInQuebec1:\s*false/g, 'activeInQuebec: false');
      fs.writeFileSync(filePath, content);
      console.log('Fixed:', file);
    }
    else if (content.includes('"1activeInQuebec1": false')) {
      content = content.replace(/"1activeInQuebec1":\s*false/g, '"activeInQuebec": false');
      fs.writeFileSync(filePath, content);
      console.log('Fixed:', file);
    }
  }
}

fixDir(path.join(process.cwd(), 'src/lib/data/fixtures/brands_generated'));
fixDir(path.join(process.cwd(), 'src/lib/data/fixtures/brands'));
