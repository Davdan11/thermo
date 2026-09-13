/* ==================================================================
   IndexNow : signale à Bing, Yandex, Naver et Seznam les adresses du
   plan du site ajoutées, modifiées ou retirées depuis le dernier envoi.

   Usage (depuis la racine du projet) :
     npx tsx scripts/indexnow.ts             passage normal (premier : tout le plan ; ensuite : différentiel)
     npx tsx scripts/indexnow.ts --complet   renvoie tout le plan du site
     npx tsx scripts/indexnow.ts --dry-run   affiche ce qui partirait ; n'envoie rien, n'écrit rien

   Lancé chaque matin par scripts/indexnow-cron.sh (après le robot de nuit)
   et après chaque déploiement. Les adresses sont lues dans le code du plan
   du site (aucune requête vers le site). Envoi réel seulement si
   NODE_ENV=production ; sinon simulé. La clé (INDEXNOW_KEY) n'est jamais affichée.
   Codes de sortie : 0 normal, 1 sans clé ou erreur, 2 au moins un lot refusé.
   ================================================================== */
import { config } from "dotenv";

// Variables du site : .env.local en développement, .env (lien vers shared/.env) dans une version du VPS.
config({ path: [".env.local", ".env"], quiet: true });

async function main() {
  const argv = process.argv.slice(2);
  const { collectSitemapEntries } = await import("../src/lib/seo/indexnow-sitemap");
  const { runIndexNow } = await import("../src/lib/seo/indexnow");
  const { SITE_URL } = await import("../src/lib/seo");
  const entries = await collectSitemapEntries();
  const { lines, exitCode } = await runIndexNow({ entries, siteUrl: SITE_URL, full: argv.includes("--complet"), dryRun: argv.includes("--dry-run") });
  for (const l of lines) console.log(l);
  process.exit(exitCode);
}

main().catch((e) => {
  console.error(`IndexNow : erreur (${(e as Error)?.message ?? e})`);
  process.exit(1);
});
