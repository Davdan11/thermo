import fs from "fs";
import path from "path";

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const FIXTURES_DIR = path.join(process.cwd(), "src/lib/data/fixtures/brands");

export async function updateTsFiles() {
  const datasets = JSON.parse(fs.readFileSync(DATASETS_FILE, "utf8"));
  let updatedCount = 0;

  for (const [brandSlug, dataset] of Object.entries(datasets)) {
    const d = dataset as any;
    const tsFilePath = path.join(FIXTURES_DIR, `${brandSlug}-auto.ts`);
    
    if (!fs.existsSync(tsFilePath)) continue;
    
    let tsContent = fs.readFileSync(tsFilePath, "utf8");
    let fileModified = false;

    // In the current architecture, both the series and the model have the same name.
    // The previous name was often "Série commerciale à vérifier — MODEL*"
    for (const model of d.models) {
      if (!model.name) continue;
      
      const newName = model.name;
      const modelId = model.id;
      
      // We look for the block defining this model or series
      // It looks like:
      // id: "MODEL_ID",
      // slug: "MODEL_ID",
      // name: "OLD_NAME",
      
      const regex = new RegExp(`(id:\\s*"${modelId.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}",[\\s\\S]*?name:\\s*")([^"]+)(")`, 'g');
      
      tsContent = tsContent.replace(regex, (match, p1, oldName, p3) => {
          if (oldName !== newName) {
              fileModified = true;
              return `${p1}${newName}${p3}`;
          }
          return match;
      });

      // Also update the series which has the id = model.seriesId
      const seriesId = model.seriesId;
      if (seriesId) {
          const regexSeries = new RegExp(`(id:\\s*"${seriesId.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}",[\\s\\S]*?name:\\s*")([^"]+)(")`, 'g');
          tsContent = tsContent.replace(regexSeries, (match, p1, oldName, p3) => {
              if (oldName !== newName) {
                  fileModified = true;
                  return `${p1}${newName}${p3}`;
              }
              return match;
          });
      }
    }

    if (fileModified) {
        fs.writeFileSync(tsFilePath, tsContent);
        updatedCount++;
    }
  }

  console.log(`Updated ${updatedCount} TypeScript fixture files with the new names.`);
}

if (require.main === module) {
  updateTsFiles().catch(console.error);
}
