import fs from "fs";
import path from "path";

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const SERIES_DIR = path.join(process.cwd(), "public/images/products/series");
const MODELS_DIR = path.join(process.cwd(), "public/images/products/products");

function extractBtuFromFilename(name: string): number | null {
  const match = name.match(/(\d+)k/i);
  if (match) {
    return parseInt(match[1]) * 1000;
  }
  return null;
}

async function main() {
  const datasetsStr = fs.readFileSync(DATASETS_FILE, "utf8");
  const datasets = JSON.parse(datasetsStr);

  const seriesFiles = fs.existsSync(SERIES_DIR) ? fs.readdirSync(SERIES_DIR) : [];
  const modelFiles = fs.existsSync(MODELS_DIR) ? fs.readdirSync(MODELS_DIR) : [];

  let seriesMatched = 0;
  let modelsMatched = 0;

  for (const brandSlug in datasets) {
    const brandData = datasets[brandSlug];

    // Map series images
    for (const series of brandData.series) {
      const expectedBase = `${brandSlug}-${series.slug}`;
      const match = seriesFiles.find((f) => {
        const ext = path.extname(f);
        const name = path.basename(f, ext);
        return name.toLowerCase() === expectedBase.toLowerCase();
      });

      if (match) {
        series.imageUrl = `/images/products/series/${match}`;
        seriesMatched++;
      }
    }

    // Map model images
    for (const model of brandData.models) {
      // Find a matching file by fuzzy logic:
      // Filename must contain brand slug, AND filename must contain part of the model name or series name, AND BTU must match.
      const modelBtu = model.nominalCapacityBtu || model.coolingCapacityMaxBtu || 0;
      
      const match = modelFiles.find((f) => {
        const ext = path.extname(f);
        const name = path.basename(f, ext).toLowerCase();
        
        if (!name.includes(brandSlug.toLowerCase())) return false;
        
        const fileBtu = extractBtuFromFilename(name);
        
        // If file specifies BTU, it must match closely
        if (fileBtu) {
           // allow slight variation like 11500 vs 12000
           if (Math.abs(fileBtu - modelBtu) > 2000) return false;
        }

        // Must contain part of the series slug or model name
        const series = brandData.series.find((s: any) => s.id === model.seriesId);
        if (series) {
          const sName = series.name.toLowerCase().replace(/[^a-z0-9]/g, "");
          const cleanName = name.replace(/[^a-z0-9]/g, "");
          if (cleanName.includes(sName)) return true;
        }

        return false;
      });

      if (match) {
        model.imageUrl = `/images/products/products/${match}`;
        modelsMatched++;
      }
    }
  }

  fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
  console.log(`✅ Image injection complete!`);
  console.log(`   - ${seriesMatched} series images mapped.`);
  console.log(`   - ${modelsMatched} model images mapped.`);
}

main().catch(console.error);
