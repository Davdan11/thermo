/* ==================================================================
   Suivi Pipedrive des soumissions (aides existantes de
   src/lib/crm/pipedrive.ts, importées ; ce fichier-ci ne modifie pas
   pipedrive.ts).

   - Envoi : personne trouvée ou créée, affaire liée (déjà connue, ou
     numéro saisi dans l'outil) ou créée avec le préfixe [TAV] et le
     champ « Site web » du site, valeur = total de la soumission ;
     note avec le numéro et le lien.
   - Ouverture, acceptation, refus, question, relance : une note.
   - Acceptation : valeur de l'affaire = total accepté (taxes comprises).
   - Étape : déplacée SEULEMENT si le propriétaire a choisi une étape
     dans les réglages ET qu'elle existe dans le pipeline des ventes
     (getStages). Sinon l'affaire reste où elle est.
   - Jamais d'exception vers l'appelant : le résultat (ok ou erreur) est
     renvoyé pour être noté dans la soumission et affiché dans l'outil.
   ================================================================== */

import { createDeal, createNote, findOrCreatePerson, getStages, isPipedriveConfigured, pipelineId, PIPEDRIVE_FIELDS, THIS_SITE } from "@/lib/crm/pipedrive";
import { escapeHtml } from "@/lib/security/escape";
import { formatDay } from "./dates";
import { money } from "./money";
import type { PipedriveLogEntry, PipedriveStages, QuoteDocument, Totals } from "./types";

export interface SyncOutcome {
  entry: PipedriveLogEntry;
  personId?: number;
  dealId?: number;
}

type Event = PipedriveLogEntry["event"];

const errMsg = (e: unknown) => (e instanceof Error ? e.message : String(e)).slice(0, 200);

/** Mise à jour d'une affaire (valeur, étape). pipedrive.ts n'expose pas de mise à jour : appel PUT minimal, mêmes conventions (jeton en en-tête). */
async function updateDeal(dealId: number, body: Record<string, unknown>): Promise<void> {
  const token = process.env.PIPEDRIVE_API_TOKEN;
  if (!token) throw new Error("PIPEDRIVE_API_TOKEN absent");
  const res = await fetch(`https://api.pipedrive.com/v1/deals/${dealId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Accept: "application/json", "x-api-token": token },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Pipedrive ${res.status}`);
}

/** Étape choisie dans les réglages, seulement si elle existe dans le pipeline des ventes. */
async function validStage(id: number | null): Promise<{ id: number; name: string } | null> {
  if (!id) return null;
  const stages = await getStages();
  const s = stages.find((x) => x.id === id && x.pipeline_id === pipelineId());
  return s ? { id: s.id, name: s.name } : null;
}

const dollars = (cents: number) => Math.round(cents) / 100;

function noteHtml(title: string, rows: Array<[string, string]>, link?: string): string {
  const e = escapeHtml;
  return `<p><strong>${e(title)}</strong></p><ul>${rows.filter(([, v]) => v).map(([k, v]) => `<li>${e(k)} : ${e(v)}</li>`).join("")}</ul>${link ? `<p><a href="${e(link)}">${e(link)}</a></p>` : ""}`;
}

function done(event: Event, ok: boolean, detail: string, extra: Partial<SyncOutcome> = {}): SyncOutcome {
  return { entry: { at: new Date().toISOString(), event, ok, detail }, ...extra };
}

/** Envoi (ou relance) : personne, affaire, valeur, note, étape « envoyée ». */
export async function syncSent(input: {
  doc: QuoteDocument;
  totals: Totals;
  link: string;
  personId: number | null;
  dealId: number | null;
  stages: PipedriveStages;
  reminder?: boolean;
}): Promise<SyncOutcome> {
  const event: Event = input.reminder ? "relance" : "envoi";
  if (!isPipedriveConfigured()) return done(event, false, "Pipedrive non configuré (PIPEDRIVE_API_TOKEN absent).");
  const { doc, totals } = input;
  const c = doc.content.client;
  try {
    let personId = input.personId;
    if (!personId) personId = (await findOrCreatePerson(c.email, c.phone, c.firstName, c.lastName)).id;
    let dealId = input.dealId;
    const parts: string[] = [];
    if (!dealId) {
      const deal = await createDeal({
        title: `${THIS_SITE.prefix} Soumission ${doc.number} · ${`${c.firstName} ${c.lastName}`.trim() || c.email}`,
        person_id: personId,
        customFields: { [PIPEDRIVE_FIELDS.SITE]: THIS_SITE.option, value: dollars(totals.totalCents), currency: "CAD" },
      });
      dealId = deal.id;
      parts.push(`affaire ${dealId} créée`);
    } else if (!input.reminder) {
      await updateDeal(dealId, { value: dollars(totals.totalCents), currency: "CAD" });
      parts.push(`affaire ${dealId} liée, valeur mise à jour`);
    }
    await createNote(
      dealId,
      noteHtml(
        input.reminder ? `Relance : soumission ${doc.number} (version ${doc.version})` : `Soumission ${doc.number} envoyée (version ${doc.version})`,
        [
          ["Total, taxes comprises", money(totals.totalCents)],
          ["Aide LogisVert", totals.logisvertCents ? `${money(totals.logisvertCents)} (${totals.logisvertMode === "cession" ? "versée à l’entreprise" : "versée au client"})` : "aucune"],
          ["Valide jusqu’au", formatDay(doc.validUntil)],
        ],
        input.link,
      ),
    );
    parts.push("note ajoutée");
    if (!input.reminder) {
      const stage = await validStage(input.stages.envoyee);
      if (stage) {
        await updateDeal(dealId, { stage_id: stage.id });
        parts.push(`étape « ${stage.name} »`);
      } else parts.push(input.stages.envoyee ? "étape configurée introuvable : affaire non déplacée" : "aucune étape configurée : affaire non déplacée");
    }
    return done(event, true, parts.join(", "), { personId, dealId });
  } catch (e) {
    console.error("[soumissions] Pipedrive (envoi) :", e);
    return done(event, false, `Erreur Pipedrive : ${errMsg(e)}`);
  }
}

/** Ouverture, acceptation, refus ou question : note, étape si configurée, valeur à l'acceptation. */
export async function syncEvent(input: {
  event: Exclude<Event, "envoi" | "relance">;
  doc: QuoteDocument;
  dealId: number | null;
  stages: PipedriveStages;
  rows: Array<[string, string]>;
  link?: string;
  acceptedTotalCents?: number;
}): Promise<SyncOutcome> {
  if (!isPipedriveConfigured()) return done(input.event, false, "Pipedrive non configuré (PIPEDRIVE_API_TOKEN absent).");
  if (!input.dealId) return done(input.event, false, "Aucune affaire liée à cette soumission.");
  const titles = { ouverture: "ouverte par le client", acceptation: "ACCEPTÉE par le client", refus: "refusée par le client", question: "question du client" } as const;
  const stageKey = { ouverture: "ouverte", acceptation: "acceptee", refus: "refusee", question: null } as const;
  try {
    const parts: string[] = [];
    await createNote(input.dealId, noteHtml(`Soumission ${input.doc.number} (version ${input.doc.version}) ${titles[input.event]}`, input.rows, input.link));
    parts.push("note ajoutée");
    const body: Record<string, unknown> = {};
    if (input.event === "acceptation" && input.acceptedTotalCents !== undefined) {
      body.value = dollars(input.acceptedTotalCents);
      body.currency = "CAD";
      parts.push(`valeur ${money(input.acceptedTotalCents)}`);
    }
    const key = stageKey[input.event];
    if (key) {
      const stage = await validStage(input.stages[key]);
      if (stage) {
        body.stage_id = stage.id;
        parts.push(`étape « ${stage.name} »`);
      } else if (input.stages[key]) parts.push("étape configurée introuvable : affaire non déplacée");
    }
    if (Object.keys(body).length) await updateDeal(input.dealId, body);
    return done(input.event, true, parts.join(", "));
  } catch (e) {
    console.error(`[soumissions] Pipedrive (${input.event}) :`, e);
    return done(input.event, false, `Erreur Pipedrive : ${errMsg(e)}`);
  }
}

/** Étapes du pipeline des ventes, pour le choix dans les réglages. */
export async function salesStages(): Promise<{ ok: true; stages: Array<{ id: number; name: string }> } | { ok: false; error: string }> {
  if (!isPipedriveConfigured()) return { ok: false, error: "Pipedrive non configuré." };
  try {
    const stages = (await getStages()).filter((s) => s.pipeline_id === pipelineId());
    return { ok: true, stages: stages.map((s) => ({ id: s.id, name: s.name })) };
  } catch (e) {
    return { ok: false, error: errMsg(e) };
  }
}
