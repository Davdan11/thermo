/* ==================================================================
   Rappels ThermoMatch (J+2, J+7) et demandes d'avis Google : envoi
   des messages dus de la file (shared/data/relances.json sur le VPS).

   Usage (depuis la racine du projet) :
     npx tsx scripts/send-relances.ts               envoi réel (40 courriels au plus)
     npx tsx scripts/send-relances.ts --max 10      plafond du passage
     npx tsx scripts/send-relances.ts --dry-run     affiche ce qui partirait ; n'envoie rien, n'écrit rien

   Lancé une fois par jour vers 9 h 30 (Montréal) par scripts/relances-cron.sh.
   Jamais deux fois le même message : chaque envoi est réservé sous verrou.
   Sans BUSINESS_MAILING_ADDRESS (LCAP) ou sans transport de courriel,
   rien ne part : les messages restent en file et la raison est affichée.
   Codes de sortie : 0 = passage normal, 2 = au moins un envoi en échec, 1 = erreur.
   ================================================================== */
import { config } from "dotenv";

// Variables du site : .env.local en développement, .env (lien vers shared/.env) dans une version du VPS.
config({ path: [".env.local", ".env"], quiet: true });

async function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes("--dry-run");
  const i = argv.indexOf("--max");
  const max = i >= 0 ? Math.max(0, Number.parseInt(argv[i + 1] ?? "", 10) || 0) : 40;

  // Imports après dotenv : email.ts lit l'expéditeur à l'import.
  const cfg = await import("../src/lib/relances/config");
  const store = await import("../src/lib/relances/store");
  const { runRelances } = await import("../src/lib/relances/sender");
  const { loadConversions } = await import("../src/lib/relances/conversions");
  const email = await import("../src/lib/crm/email");

  const mailingAddress = cfg.businessMailingAddress();
  const reviewUrl = cfg.googleReviewUrl();
  const transport = email.emailTransportName();

  console.log(`Rappels et demandes d’avis${dryRun ? " — essai à blanc : rien n’est envoyé ni écrit" : ""}`);
  console.log(`  file : ${store.relancesFile()}`);
  console.log(`  adresse postale : ${mailingAddress ? "définie" : "ABSENTE (BUSINESS_MAILING_ADDRESS) : aucun envoi possible"}`);
  console.log(`  lien d’avis Google : ${reviewUrl ? "défini" : "absent (GOOGLE_REVIEW_URL) : demandes d’avis gardées en file"}`);
  console.log(`  courriel : ${transport ?? "aucun transport configuré"} · plafond : ${max}`);

  // Le catalogue (35 Mo) n'est chargé que s'il y a quelque chose à rendre.
  let render: typeof import("../src/lib/relances/render") | null = null;
  const report = await runRelances({
    max,
    dryRun,
    mailingAddress,
    reviewUrl,
    transport,
    render: async (m, o) => {
      render ??= await import("../src/lib/relances/render");
      return render.renderRelance(m, o);
    },
    send: (m, mail, headers) => email.sendClientEmail(m.email, mail.subject, mail.html, { headers, text: mail.text, label: `relance ${m.kind}` }),
    loadConversions,
    log: (line) => console.log(line),
  });

  const cancelled = Object.entries(report.cancelled).map(([k, n]) => `${n} ${k}`);
  const held = Object.entries(report.held).map(([k, n]) => `${n} : ${k}`);
  const parts = dryRun
    ? [`${report.due} dû(s)`, `${report.wouldSend} à envoyer`]
    : [`${report.due} dû(s)`, `${report.sent} envoyé(s)`, `${report.failed} en échec`];
  if (cancelled.length) parts.push(`arrêtés (${cancelled.join(", ")})`);
  if (held.length) parts.push(`gardés en file (${held.join(" ; ")})`);
  if (report.deferred) parts.push(`${report.deferred} reporté(s) au prochain passage`);
  if (report.stuck) parts.push(`${report.stuck} à vérifier (passage interrompu)`);
  console.log(`Bilan : ${parts.join(", ")}.`);
  process.exitCode = report.failed > 0 ? 2 : 0;
}

main().catch((err) => {
  console.error("Rappels : erreur", err);
  process.exit(1);
});
