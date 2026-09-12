/* ==================================================================
   /alertes-logisvert/confirmer?token=… — lien du courriel de
   confirmation (double consentement). Active l'alerte, prévient
   l'équipe (après la réponse) et le dit en une phrase.
   ================================================================== */
import type { Metadata } from "next";
import { after } from "next/server";
import { formatListDate, isToken } from "@/lib/alerts/logisvert-alerts-core";
import { confirmSubscription } from "@/lib/alerts/logisvert-alerts-store";
import { sendInternalMessage } from "@/lib/crm/email";
import { journalLead } from "@/lib/crm/lead-journal";
import { SITE_URL } from "@/lib/crm/templates/layout";
import { snapshotSummary } from "@/lib/crm/templates/logisvert-alert-email";
import { AlertStatusHero } from "../AlertStatusHero";

export const metadata: Metadata = {
  title: "Confirmation de votre alerte LogisVert",
  robots: { index: false, follow: false },
};

export default async function ConfirmerAlertePage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { token } = await searchParams;
  const result = isToken(token) ? await confirmSubscription(token) : null;
  if (!result) {
    return (
      <main>
        <AlertStatusHero variant="confirm-invalid" />
      </main>
    );
  }

  const s = result.sub;
  const summary = snapshotSummary(s.target, s.lastSnapshot);
  if (result.status === "confirmed") {
    after(async () => {
      await journalLead("alerte-logisvert", { event: "confirmation", email: s.email, target: s.target, alertId: s.id });
      await sendInternalMessage({
        kind: "alerte-logisvert",
        subject: `Alerte LogisVert confirmée : ${s.label}`,
        replyTo: s.email,
        lines: [
          ["Courriel", s.email],
          ["Prénom", s.firstName ?? "—"],
          ["Suivi", s.target.kind === "model" ? s.label : `toutes les thermopompes ${s.label}`],
          ["Montant de référence", summary],
          ["Journal", s.journalId ?? "—"],
        ],
        links: [["Voir la page suivie", `${SITE_URL}${s.path}`]],
      });
    });
  }

  return (
    <main>
      <AlertStatusHero
        variant={result.status === "confirmed" ? "confirmed" : "already"}
        label={s.label}
        kind={s.target.kind}
        summary={summary}
        listDate={formatListDate(s.lastSnapshot.listUpdatedAt)}
        path={s.path}
        unsubscribeHref={`/alertes-logisvert/desabonnement?token=${encodeURIComponent(s.token)}`}
      />
    </main>
  );
}
