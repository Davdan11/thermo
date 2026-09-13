/* ==================================================================
   Demande d'avis Google pour un ancien client : met UNE demande en
   file ; le robot quotidien (scripts/send-relances.ts, 9 h 30) l'envoie
   à son prochain passage. N'envoie rien lui-même.

   Usage (sur le VPS, depuis /var/www/thermopompesavendre.ca/current) :
     npx tsx scripts/demande-avis.ts --email marie@exemple.ca [--prenom Marie]

   Refusé si GOOGLE_REVIEW_URL est absent. Jamais deux fois pour la même
   adresse ; jamais pour une adresse désabonnée.
   ================================================================== */
import { config } from "dotenv";

config({ path: [".env.local", ".env"], quiet: true });

function arg(name: string): string | undefined {
  const argv = process.argv.slice(2);
  const i = argv.indexOf(name);
  if (i >= 0) return argv[i + 1];
  const eq = argv.find((a) => a.startsWith(`${name}=`));
  return eq ? eq.slice(name.length + 1) : undefined;
}

async function main() {
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log("Usage : npx tsx scripts/demande-avis.ts --email x@y.ca [--prenom Marie]");
    return;
  }
  const { z } = await import("zod");
  const parsed = z
    .object({ email: z.string().trim().toLowerCase().email().max(160), prenom: z.string().trim().max(80).optional() })
    .safeParse({ email: arg("--email"), prenom: arg("--prenom") || undefined });
  if (!parsed.success) {
    console.error("Courriel manquant ou invalide. Usage : npx tsx scripts/demande-avis.ts --email x@y.ca [--prenom Marie]");
    process.exitCode = 1;
    return;
  }
  const cfg = await import("../src/lib/relances/config");
  if (!cfg.googleReviewUrl()) {
    console.error("GOOGLE_REVIEW_URL est absent (ou n’est pas un lien https) : aucune demande d’avis n’est planifiée.");
    process.exitCode = 1;
    return;
  }
  const store = await import("../src/lib/relances/store");
  const core = await import("../src/lib/relances/core");
  const r = await store.enqueueReviewRequest({ email: parsed.data.email, firstName: parsed.data.prenom, dueAt: core.nextRunDue() });
  const when = (iso: string) => new Date(iso).toLocaleString("fr-CA", { timeZone: core.TIME_ZONE, dateStyle: "long", timeStyle: "short" });
  if (r.status === "suppressed") {
    console.log("Cette adresse s’est désabonnée : aucune demande d’avis.");
  } else if (r.status === "doublon") {
    console.log(`Déjà une demande d’avis pour cette adresse (${r.message.status}, prévue le ${when(r.message.dueAt)}) : rien de plus.`);
  } else {
    console.log(`Demande d’avis planifiée : envoi au prochain passage du robot quotidien (9 h 30, dû depuis le ${when(r.message.dueAt)}).`);
    console.log(`  file : ${store.relancesFile()}`);
    if (!cfg.businessMailingAddress()) console.log("  Attention : BUSINESS_MAILING_ADDRESS est absente. La demande restera en file tant que l’adresse postale n’est pas définie.");
  }
}

main().catch((err) => {
  console.error("Demande d’avis : erreur", err);
  process.exit(1);
});
