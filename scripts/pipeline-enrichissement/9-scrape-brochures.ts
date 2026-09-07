import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { parse } from "csv-parse/sync";

const CSV_PATH = path.join(process.cwd(), "src/lib/data/fixtures/documents/brochures-source.csv");
const PUBLIC_DIR = path.join(process.cwd(), "public/brochures");
const MAPPING_PATH = path.join(process.cwd(), "src/lib/data/fixtures/documents/brochures-mapping.json");

function cleanSlug(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      } else if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirects
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
    });

    req.on("error", (err) => reject(err));
    // Timeout after 15 seconds
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function main() {
  console.log("🚀 Démarrage du téléchargement des brochures...");
  const content = fs.readFileSync(CSV_PATH, "utf-8");
  const records = parse(content, { columns: true, skip_empty_lines: true, bom: true });

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  let count = 0;
  let errors = 0;
  const mapping: Record<string, string> = {};

  for (const record of records) {
    const marque = record["Marque"];
    let url = record["URL du document officiel ou portail"];
    const modeleExterieur = record["Modèle extérieur"];

    if (!url || typeof url !== "string") continue;
    url = url.trim();

    // We only process direct PDF links for now
    if (!url.toLowerCase().includes(".pdf")) {
      continue;
    }

    if (!marque) continue;
    const brandSlug = cleanSlug(marque);
    const brandDir = path.join(PUBLIC_DIR, brandSlug);

    if (!fs.existsSync(brandDir)) {
      fs.mkdirSync(brandDir, { recursive: true });
    }

    let filename = path.basename(new URL(url).pathname);
    filename = decodeURIComponent(filename);
    const dest = path.join(brandDir, filename);
    const localUrl = `/brochures/${brandSlug}/${filename}`;

    // Link the outdoor model to this brochure
    if (modeleExterieur && modeleExterieur !== "") {
      mapping[cleanSlug(`${marque}-${modeleExterieur}`)] = localUrl;
    }

    if (!fs.existsSync(dest)) {
      console.log(`⬇️ Téléchargement : ${filename} (${marque})...`);
      try {
        await downloadFile(url, dest);
        count++;
      } catch (err: any) {
        console.error(`❌ Erreur sur ${url}:`, err.message);
        errors++;
      }
    } else {
      // Already downloaded
    }
  }

  // Save the mapping so our auto-generator can pick it up
  fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2));

  console.log(`\n✅ Terminé ! ${count} nouvelles brochures téléchargées.`);
  if (errors > 0) console.log(`⚠️ ${errors} erreurs de téléchargement.`);
  console.log(`📄 Mapping sauvegardé dans : brochures-mapping.json (${Object.keys(mapping).length} modèles liés)`);
}

main().catch(console.error);
