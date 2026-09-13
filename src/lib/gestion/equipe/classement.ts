/* ==================================================================
   Chantier V — classement des vendeurs (calcul pur).

   Pour une période, par vendeur :
     - demandes reçues     attributions reçues (automatiques ou non) ;
     - première réponse    délai médian entre l'attribution et la
                           première action vers le client (appel noté,
                           note, étape, texto écrit, soumission envoyée) ;
     - soumissions envoyées (client attribué au vendeur au moment de
                           l'envoi) ;
     - taux de signature   signées ÷ envoyées ;
     - ventes              soumissions signées (total taxes comprises)
                           et part de commission du vendeur.
   ================================================================== */

import type { CrmIndex } from "../crm/model";
import { ownerMessages } from "../crm/textos-adapter";
import { assigneeAt, vendorLine, type Sale } from "./commission";
import type { Member } from "./types";

export interface VendorCard {
  userId: string;
  name: string;
  available: boolean;
  demandes: number;
  answered: number;
  /** Délai médian de première réponse, en minutes (null : aucune réponse encore). */
  medianMinutes: number | null;
  sent: number;
  signed: number;
  /** 0 à 1 (null : aucune soumission envoyée). */
  signRate: number | null;
  salesCents: number;
  commissionCents: number;
  open: number;
}

function median(xs: number[]): number | null {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
}

export function leaderboard(index: Pick<CrmIndex, "clients">, members: Member[], sales: Sale[], range: { from: Date; to: Date }): VendorCard[] {
  const from = range.from.toISOString();
  const to = range.to.toISOString();
  const inRange = (at: string) => at >= from && at < to;
  const vendors = members.filter((m) => m.role === "vendeur");
  const cards = new Map<string, VendorCard>(
    vendors.map((m) => [m.id, { userId: m.id, name: m.name || m.email.split("@")[0], available: m.status === "actif" && m.available, demandes: 0, answered: 0, medianMinutes: null, sent: 0, signed: 0, signRate: null, salesCents: 0, commissionCents: 0, open: 0 }]),
  );
  const delays = new Map<string, number[]>();

  for (const c of index.clients) {
    const rec = c.b.record;
    const holder = rec?.assignedTo?.userId;
    if (holder && cards.has(holder) && c.stage.stage !== "terminee" && c.stage.stage !== "perdue") cards.get(holder)!.open++;
    // Actions vers le client, pour le délai de première réponse.
    const events = [
      ...(rec?.notes ?? []).map((n) => n.at),
      ...(rec?.stageLog ?? []).map((s) => s.at),
      ...c.b.textos.flatMap((t) => ownerMessages(t).map((m) => m.at)),
      ...c.b.quotes.flatMap((q) => q.versions.flatMap((v) => v.sends.map((s) => s.at))),
    ].sort();
    for (const e of rec?.assignLog ?? []) {
      if (!e.to || e.how === "retrait" || !inRange(e.at)) continue;
      const card = cards.get(e.to);
      if (!card) continue;
      card.demandes++;
      const first = events.find((at) => at > e.at);
      if (first) {
        card.answered++;
        delays.set(e.to, [...(delays.get(e.to) ?? []), Math.max(0, Math.round((Date.parse(first) - Date.parse(e.at)) / 60_000))]);
      }
    }
    for (const q of c.b.quotes) {
      for (const v of q.versions) {
        for (const s of v.sends) {
          if (s.kind !== "envoi" || !inRange(s.at)) continue;
          const uid = assigneeAt(rec, s.at);
          const card = uid ? cards.get(uid) : undefined;
          if (card) card.sent++;
        }
      }
    }
  }
  for (const s of sales) {
    if (!s.userId || !inRange(s.acceptedAt)) continue;
    const card = cards.get(s.userId);
    if (!card) continue;
    const m = vendors.find((x) => x.id === s.userId)!;
    card.signed++;
    card.salesCents += s.totalCents;
    card.commissionCents += vendorLine(s, m.commissionPercent).vendorCents;
  }
  for (const card of cards.values()) {
    card.medianMinutes = median(delays.get(card.userId) ?? []);
    card.signRate = card.sent ? Math.min(1, card.signed / card.sent) : null;
  }
  return [...cards.values()].sort((a, b) => b.salesCents - a.salesCents || b.signed - a.signed || b.demandes - a.demandes || a.name.localeCompare(b.name));
}
