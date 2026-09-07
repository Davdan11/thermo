const fs = require('fs');

const file = 'scripts/pipeline-enrichissement/5-rename-models.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'let newName = `${brandName} ${realSeriesName} ${capacityStr}`.replace(/\\s+/g, " ").trim();',
  'let newName = `${realSeriesName} ${capacityStr}`.replace(/\\s+/g, " ").trim();'
);

content = content.replace(
  'if (!newName || newName === brandName) {\n          newName = `${brandName} ${modelNum}`;\n      }',
  'if (!newName) {\n          newName = `${modelNum}`;\n      }'
);

fs.writeFileSync(file, content);

const file2 = 'scripts/generate-all-brands-from-hq.mjs';
let content2 = fs.readFileSync(file2, 'utf8');

content2 = content2.replace(
  'let newName = (brandName + " " + seriesName + " " + capacityStr).replace(/\\s+/g, " ").trim();',
  'let newName = (seriesName + " " + capacityStr).replace(/\\s+/g, " ").trim();'
);

content2 = content2.replace(
  'if (!newName || newName === brandName) newName = brandName + " " + modelNum;',
  'if (!newName) newName = modelNum;'
);

fs.writeFileSync(file2, content2);
console.log("Patched rename scripts");
