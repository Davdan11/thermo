/* ==================================================================
   Chantier S — sauvegarde hors serveur de shared/data (chiffrée AES-256-GCM,
   envoyée vers S3, rotation 30 quotidiennes / 12 mensuelles).

   Usage (depuis la racine d'une version, lancé par scripts/sauvegarde-cron.sh) :
     npx tsx scripts/sauvegarde.ts                   une sauvegarde
     npx tsx scripts/sauvegarde.ts --alerte "texte"  alerte seule (utilisée par le script cron
                                                      si le passage a été tué ou a expiré)

   Variables (shared/.env) : BACKUP_ENCRYPTION_KEY, BACKUP_S3_ENDPOINT, BACKUP_S3_BUCKET,
   BACKUP_S3_KEY_ID, BACKUP_S3_SECRET, BACKUP_S3_REGION. Sans elles : inactif (code 0).
   Les secrets de shared/.env ne sont PAS dans l'archive : copie manuelle à part.
   Codes de sortie : 0 = réussie ou inactive, 1 = échec (propriétaire alerté).
   ================================================================== */
import { config } from "dotenv";

// Variables du site : .env.local en développement, .env (lien vers shared/.env) dans une version du VPS.
config({ path: [".env.local", ".env"], quiet: true });

async function alertOwner(subject: string, detail: string): Promise<void> {
  const { sendOwnerMail, sendOwnerSms } = await import("../src/lib/gestion/automatisations/send");
  const { brandedEmail, p, t } = await import("../src/lib/crm/templates/layout");
  const html = brandedEmail({
    title: subject,
    preheader: subject,
    body: p(t(detail)) + p(t("État détaillé : /gestion/securite. Journal du serveur : /var/log/thermo-sauvegarde.log.")),
    reason: "Vous recevez ce courriel parce que vous êtes administrateur de l’outil de gestion.",
    optOutText: "Sauvegardes : /gestion/securite.",
  });
  const mail = await sendOwnerMail({ subject, html, text: `${subject}\n\n${detail}\n\n/gestion/securite` }, "sauvegarde");
  const sms = await sendOwnerSms(`TAV : ${subject}. Voir /gestion/securite.`, "sauvegarde");
  console.log(`  Alerte au propriétaire : courriel ${mail}, texto ${sms}.`);
}

async function main() {
  const argv = process.argv.slice(2);
  const { audit } = await import("../src/lib/gestion/securite/audit");
  const i = argv.indexOf("--alerte");
  if (i >= 0) {
    const detail = (argv[i + 1] ?? "Le passage de sauvegarde s’est arrêté sans rapport.").slice(0, 300);
    await alertOwner("Sauvegarde hors serveur en échec", detail);
    await audit("sauvegarde.echec", { raison: detail.slice(0, 120) }, { qui: "serveur", ip: "local" });
    process.exit(0);
  }

  const { runBackup } = await import("../src/lib/gestion/securite/sauvegarde/run");
  console.log("Sauvegarde hors serveur");
  const s = await runBackup({
    alert: alertOwner,
    log: (l) => console.log(`  ${l}`),
  });
  if (s.state === "echec") {
    await audit("sauvegarde.echec", { raison: (s.message ?? "").slice(0, 120) }, { qui: "serveur", ip: "local" });
    process.exit(1);
  }
  console.log(s.state === "inactive" ? "  Inactive : aucune destination configurée." : `  Réussie : ${s.key} (${s.size} octets, ${s.files} fichiers).`);
}

main().catch(async (e) => {
  const msg = (e as Error)?.message ?? String(e);
  console.error("Sauvegarde : erreur inattendue :", msg);
  await alertOwner("Sauvegarde hors serveur en échec", `Erreur inattendue : ${msg.slice(0, 200)}`).catch(() => undefined);
  process.exit(1);
});
