/* ==================================================================
   Importe la trousse contractuelle dans trousse.json (dossier de
   gestion). Le texte est confidentiel : le fichier source n'est JAMAIS
   dans le dépôt ; il est lu ici, puis peut être supprimé.

   Usage (racine du projet) :
     npx tsx scripts/importer-trousse.ts <fichier.txt> [--par <courriel>]

   Le .txt est l'extraction du .docx : un paragraphe par ligne, titres
   préfixés par « ## », « ### » ou « #### ».
   ================================================================== */
import { readFileSync } from "node:fs";
import { config } from "dotenv";

config({ path: [".env.local", ".env"], quiet: true });

function fail(msg: string): never {
  console.error(`importer-trousse : ${msg}`);
  process.exit(1);
}

async function main() {
  const file = process.argv[2];
  if (!file || file.startsWith("--")) fail("indiquez le fichier .txt à importer.");
  const i = process.argv.indexOf("--par");
  const by = i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : "import";
  const text = readFileSync(file, "utf8");
  const { parseTrousse, saveTrousse, trousseFile } = await import("../src/lib/plateforme/trousse");
  const parsed = parseTrousse(text);
  if (parsed.sections.length < 20) fail(`seulement ${parsed.sections.length} sections : fichier inattendu, rien n'est écrit.`);
  const saved = await saveTrousse(parsed, by);
  console.log(`Trousse ${saved.version || "(version inconnue)"} importée : ${saved.sections.length} sections, empreinte ${saved.sha256?.slice(0, 12)}…, dans ${trousseFile()}.`);
}

main().catch((e) => fail(e instanceof Error ? e.message : String(e)));
