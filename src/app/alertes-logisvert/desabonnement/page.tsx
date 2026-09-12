/* ==================================================================
   /alertes-logisvert/desabonnement?token=… — désabonnement en un clic
   (Loi 25, LCAP) : ouvrir le lien suffit, l'alerte est effacée.
   Les messageries utilisent plutôt POST /api/alertes-logisvert/desabonnement.
   ================================================================== */
import type { Metadata } from "next";
import { after } from "next/server";
import { isToken } from "@/lib/alerts/logisvert-alerts-core";
import { unsubscribe } from "@/lib/alerts/logisvert-alerts-store";
import { journalLead } from "@/lib/crm/lead-journal";
import { AlertStatusHero } from "../AlertStatusHero";

export const metadata: Metadata = {
  title: "Désabonnement de l’alerte LogisVert",
  robots: { index: false, follow: false },
};

export default async function DesabonnementAlertePage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { token } = await searchParams;
  const removed = isToken(token) ? await unsubscribe(token) : null;
  if (!removed) {
    return (
      <main>
        <AlertStatusHero variant="unsubscribe-invalid" />
      </main>
    );
  }
  after(() => journalLead("alerte-logisvert", { event: "desabonnement", via: "lien", email: removed.email, target: removed.target, alertId: removed.id }));
  return (
    <main>
      <AlertStatusHero variant="unsubscribed" label={removed.label} kind={removed.target.kind} path={removed.path} />
    </main>
  );
}
