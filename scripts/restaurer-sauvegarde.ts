/* ==================================================================
   Chantier S — vérification et restauration d'une sauvegarde .tavsauv.

   La clé vient de BACKUP_ENCRYPTION_KEY (shared/.env, ou saisie sans écho :
     read -rs BACKUP_ENCRYPTION_KEY && export BACKUP_ENCRYPTION_KEY).

   Usage (depuis la racine d'une version) :
     npx tsx scripts/restaurer-sauvegarde.ts --liste
     npx tsx scripts/restaurer-sauvegarde.ts --derniere                     vérifie la plus récente (S3)
     npx tsx scripts/restaurer-sauvegarde.ts --s3 <clé> --vers <dossier>    télécharge, vérifie, restaure
     npx tsx scripts/restaurer-sauvegarde.ts --fichier <f.tavsauv> [--vers <dossier>]

   Sans --vers : vérification seulement (déchiffrement, étiquette GCM, chaque
   fichier contre le manifeste). Avec --vers : le dossier doit être vide ;
   shared/data n'est JAMAIS écrasé directement. Pour remettre les données :
     pm2 stop thermo && mv shared/data shared/data.avant-restauration \
       && mv <dossier> shared/data && pm2 start thermo
   Codes de sortie : 0 = intègre (et restaurée), 1 = erreur ou sauvegarde altérée.
   ================================================================== */
import { config } from "dotenv";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

config({ path: [".env.local", ".env"], quiet: true });

function arg(argv: string[], name: string): string | null {
  const i = argv.indexOf(name);
  return i >= 0 ? (argv[i + 1] ?? null) : null;
}

async function main() {
  const argv = process.argv.slice(2);
  const { parseBackupKey, verifyBackup } = await import("../src/lib/gestion/securite/sauvegarde/chiffrement");
  const { S3Client, s3ConfigFromEnv } = await import("../src/lib/gestion/securite/sauvegarde/s3");
  const { classify, DEFAULT_PREFIX } = await import("../src/lib/gestion/securite/sauvegarde/rotation");

  const s3 = () => {
    const c = s3ConfigFromEnv();
    if (!c.ok) throw new Error(c.error ?? `Variables S3 manquantes : ${c.missing.join(", ")}`);
    return new S3Client(c.config);
  };

  if (argv.includes("--liste")) {
    const keys = (await s3().list(DEFAULT_PREFIX)).filter((k) => classify(k, DEFAULT_PREFIX)).sort();
    console.log(keys.length ? keys.join("\n") : "Aucune sauvegarde trouvée.");
    return;
  }

  let file = arg(argv, "--fichier");
  let tmp: string | null = null;
  const s3Key = argv.includes("--derniere")
    ? (await s3().list(DEFAULT_PREFIX)).filter((k) => classify(k, DEFAULT_PREFIX)?.kind === "quotidien").sort().pop() ?? null
    : arg(argv, "--s3");
  if (!file && !s3Key) {
    console.error("Indiquez --fichier, --s3, --derniere ou --liste (voir l’en-tête du script).");
    process.exit(1);
  }
  // Clé vérifiée avant tout téléchargement : un mauvais format échoue tout de suite.
  const key = parseBackupKey(process.env.BACKUP_ENCRYPTION_KEY);
  if (!file && s3Key) {
    tmp = await fs.mkdtemp(path.join(os.tmpdir(), "thermo-restauration-"));
    file = path.join(tmp, "sauvegarde.tavsauv");
    console.log(`Téléchargement de ${s3Key}…`);
    await s3().getToFile(s3Key, file);
  }
  if (!file) {
    console.error("Indiquez --fichier, --s3, --derniere ou --liste (voir l’en-tête du script).");
    process.exit(1);
  }
  const dest = arg(argv, "--vers");
  try {
    const r = await verifyBackup(file, key, { restoreTo: dest ? path.resolve(dest) : undefined });
    console.log(`Sauvegarde intègre : ${r.files} fichiers, ${r.bytes} octets, créée le ${r.manifest.createdAt}.`);
    if (dest) console.log(`Restaurée dans ${path.resolve(dest)} (droits 600). shared/data n’a pas été touché.`);
  } finally {
    if (tmp) await fs.rm(tmp, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error(`Échec : ${(e as Error)?.message ?? e}`);
  process.exit(1);
});
