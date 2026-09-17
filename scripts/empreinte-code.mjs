#!/usr/bin/env node
/* ==================================================================
   Empreinte du code d'une copie du site, sans les fichiers de données
   que publie scripts/publier-donnees.sh.

   Le robot de nuit ne publie des données sans reconstruction que si la
   version servie a exactement le même code que la copie du robot : même
   liste de fichiers suivis par git (src, scripts, package.json, configuration ;
   pas package-lock.json, que deploy-vps.sh peut réécrire), même
   contenu. Sinon il reconstruit tout le site (deploy-vps.sh).

   Usage (dans la copie git du robot) :
     node scripts/empreinte-code.mjs <dossier>
   La liste des fichiers vient de `git ls-files` du dossier courant ; un
   fichier absent de <dossier> change l'empreinte.
   ================================================================== */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

/** Fichiers de données remplacés à chaud : exclus de l'empreinte (même liste que publier-donnees.sh). */
export const FICHIERS_DONNEES = new Set([
  "src/lib/subsidies/logisvert-official-amounts.json",
  "src/lib/subsidies/logisvert-model-index.json",
  "src/lib/subsidies/logisvert-metadata.json",
  "src/lib/data/fixtures/brands/all-auto-datasets.json",
  "src/lib/data/fixtures/brands/catalogue-build-report.json",
  "src/lib/data/energystar-types.json",
]);

const dossier = process.argv[2];
if (!dossier) {
  console.error("Usage : node scripts/empreinte-code.mjs <dossier>");
  process.exit(2);
}
const suivis = execFileSync("git", ["ls-files", "-z", "--", "src", "scripts", "package.json", "next.config.ts", "tsconfig.json", "postcss.config.mjs"], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 })
  .split("\0")
  .filter((f) => f && !FICHIERS_DONNEES.has(f))
  .sort();
const h = createHash("sha256");
for (const f of suivis) {
  const p = join(dossier, f);
  h.update(f).update("\0");
  h.update(existsSync(p) ? createHash("sha256").update(readFileSync(p)).digest("hex") : "absent").update("\n");
}
console.log(h.digest("hex"));
