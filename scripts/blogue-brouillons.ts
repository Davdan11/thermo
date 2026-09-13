/* ==================================================================
   Prépare les brouillons du blogue à partir des données du site
   (mêmes gabarits que le bouton « Préparer les brouillons » de
   /gestion/presence/articles). Rien n'est publié : les articles
   arrivent « à approuver », la question de la semaine en brouillon.
   N'écrase jamais un article existant.

   Usage (dossier du site) :
     npx tsx scripts/blogue-brouillons.ts
   Sur le VPS, pointer vers les données partagées :
     GESTION_DATA_DIR=/var/www/thermopompesavendre.ca/shared/data npx tsx scripts/blogue-brouillons.ts
   ================================================================== */

import { prepareDrafts } from "../src/lib/blogue/service";
import { blogueFile, readBlogue } from "../src/lib/blogue/store";

async function main() {
  const r = await prepareDrafts("script (scripts/blogue-brouillons.ts)", { revalidate: () => undefined });
  console.log(r.ok ? r.message : `Erreur : ${r.error}`);
  const data = await readBlogue();
  console.log(`Fichier : ${blogueFile()}`);
  for (const a of data.articles) console.log(`- [${a.status}] ${a.title}  (/blogue/${a.slug})`);
  if (!r.ok) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
