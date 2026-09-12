/* ==================================================================
   Alertes LogisVert — envoi des avis de changement.

   Pour chaque alerte confirmée, compare l'instantané gardé avec la
   liste LogisVert en place (src/lib/subsidies/*.json du dossier courant),
   envoie un courriel si le montant a changé (ancien → nouveau, lien vers
   la fiche, lien de désabonnement), puis enregistre le nouvel instantané.
   Efface aussi les demandes jamais confirmées depuis 30 jours.

   Usage (depuis la racine du projet) :
     npx tsx scripts/notify-logisvert-alerts.ts            envoi réel
     npx tsx scripts/notify-logisvert-alerts.ts --dry-run  affiche ce qui partirait ; n'envoie rien, n'écrit rien

   Lancé chaque nuit par scripts/nightly-bot.sh, juste après la
   régénération des données LogisVert. Fichier des abonnés : voir
   src/lib/alerts/logisvert-alerts-store.ts (shared/data sur le VPS).

   Sans transport de courriel (SMTP_HOST, SMTP_USER/SMTP_PASS ou
   RESEND_API_KEY) : rien ne part et les instantanés restent tels quels,
   les changements seront annoncés au prochain passage configuré.
   Codes de sortie : 0 = passage normal, 2 = au moins un envoi en échec, 1 = erreur.
   ================================================================== */
import { config } from "dotenv";

// Variables du site : .env.local en développement, .env (lien vers shared/.env) dans une version du VPS.
// Le robot de nuit les a déjà chargées ; dotenv n'écrase jamais une variable existante.
config({ path: [".env.local", ".env"], quiet: true });

function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  return `${user.slice(0, 1)}***@${domain ?? "?"}`;
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  // Imports après dotenv : email.ts lit l'expéditeur à l'import.
  const core = await import("../src/lib/alerts/logisvert-alerts-core");
  const store = await import("../src/lib/alerts/logisvert-alerts-store");
  const data = await import("../src/lib/alerts/logisvert-alerts-data");
  const templates = await import("../src/lib/crm/templates/logisvert-alert-email");
  const email = await import("../src/lib/crm/email");

  const all = await store.listSubscriptions();
  const confirmed = all.filter((s) => s.confirmedAt);
  const transport = email.emailTransportName();

  console.log(`Alertes LogisVert${dryRun ? " — essai à blanc : rien n’est envoyé ni écrit" : ""}`);
  console.log(`  fichier des abonnés : ${store.alertsFile()}`);
  console.log(`  liste Hydro-Québec en place : ${core.formatListDate(data.currentListDate()) ?? "date inconnue"}`);
  console.log(`  ${confirmed.length} alerte(s) confirmée(s), ${all.length - confirmed.length} en attente de confirmation`);
  if (!transport) {
    console.log(`  courriel : aucun transport configuré (SMTP_HOST, SMTP_USER/SMTP_PASS ou RESEND_API_KEY)${dryRun ? "" : " — aucun envoi, instantanés conservés"}`);
  }

  type Current = { resolved: NonNullable<ReturnType<typeof data.resolveTarget>>; snapshot: ReturnType<typeof data.snapshotFor> };
  const cache = new Map<string, Current | null>();
  const n = { sent: 0, wouldSend: 0, failed: 0, held: 0, unchanged: 0, refreshed: 0, orphan: 0 };

  for (const sub of confirmed) {
    const key = core.targetKey(sub.target);
    if (!cache.has(key)) {
      const resolved = data.resolveTarget(sub.target);
      cache.set(key, resolved ? { resolved, snapshot: data.snapshotFor(resolved) } : null);
    }
    const cur = cache.get(key);
    if (!cur) {
      n.orphan++;
      console.log(`  ! ${key} n’est plus au catalogue (alerte ${sub.id}) : ignorée`);
      continue;
    }

    const changes = core.diffSnapshots(sub.lastSnapshot, cur.snapshot);
    if (changes.length === 0) {
      n.unchanged++;
      // Rien d'annonçable (ex. un appariement de plus au même montant) : la référence suit quand même la liste.
      if (!dryRun && !core.sameAmounts(sub.lastSnapshot, cur.snapshot)) {
        await store.updateSubscription(sub.id, { lastSnapshot: cur.snapshot });
        n.refreshed++;
      }
      continue;
    }

    const names = Object.fromEntries(cur.resolved.models.map((m) => [m.id, { name: m.name, slug: m.slug }]));
    const msg = templates.alertChangeEmail({
      firstName: sub.firstName,
      target: sub.target,
      label: sub.label,
      path: sub.path,
      token: sub.token,
      changes,
      names,
      listUpdatedAt: cur.snapshot.listUpdatedAt,
    });
    const who = maskEmail(sub.email);

    if (dryRun) {
      n.wouldSend++;
      console.log(`  → ${who} · ${msg.subject}`);
      for (const c of changes.slice(0, 8)) console.log(`      ${templates.describeChange(c, names[c.modelId]?.name ?? c.modelId)}`);
      if (changes.length > 8) console.log(`      … et ${changes.length - 8} autre(s)`);
      continue;
    }
    if (!transport) {
      n.held++;
      continue;
    }
    const ok = await email.sendClientEmail(sub.email, msg.subject, msg.html, { headers: templates.listUnsubscribeHeaders(sub.token), label: "alerte LogisVert" });
    if (ok) {
      await store.updateSubscription(sub.id, { lastSnapshot: cur.snapshot, lastNotifiedAt: new Date().toISOString() });
      n.sent++;
      console.log(`  ✓ ${who} · ${msg.subject}`);
    } else {
      n.failed++;
      console.log(`  ✗ ${who} · envoi en échec, nouvel essai au prochain passage`);
    }
  }

  const cutoff = Date.now() - store.PENDING_TTL_MS;
  const expired = all.filter((s) => !s.confirmedAt && Date.parse(s.createdAt) < cutoff).length;
  const purged = !dryRun && expired > 0 ? await store.purgePendingSubscriptions() : 0;

  const parts = dryRun
    ? [`${n.wouldSend} avis à envoyer`, `${n.unchanged} sans changement`, `${expired} demande(s) expirée(s) à effacer`]
    : [`${n.sent} avis envoyé(s)`, `${n.failed} en échec`, `${n.held} en attente d’un transport de courriel`, `${n.unchanged} sans changement`, `${purged} demande(s) expirée(s) effacée(s)`];
  if (n.orphan) parts.push(`${n.orphan} cible(s) introuvable(s)`);
  console.log(`Bilan : ${parts.join(", ")}.`);
  process.exitCode = n.failed > 0 ? 2 : 0;
}

main().catch((err) => {
  console.error("Alertes LogisVert : erreur", err);
  process.exit(1);
});
