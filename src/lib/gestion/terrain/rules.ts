/* ==================================================================
   Règles du chantier (fonctions pures) :
     - ce qui manque pour « Fermer la job » : une photo par étape
       requise, au moins un numéro de série extérieur ET intérieur,
       chaque point de la liste de contrôle répondu (fait / sans
       objet quand c'est permis), la signature du client ;
     - opérations envoyées par le téléphone (file hors ligne) :
       validées, bornées dans le temps, appliquées une seule fois.
   Les mêmes vérifications tournent au serveur à la fermeture : le
   bouton grisé du téléphone n'est qu'un confort.
   ================================================================== */

import { z } from "zod";
import { CHECKLIST, OP_ID_RE, PHOTO_STEPS, type ChecklistId, type FieldRecord } from "./types";

const MIN = 60_000;
const DAY = 86_400_000;

/* ---------------- Numéros de série ---------------- */

/** Majuscules, espaces réduits ; lettres, chiffres, tiret, barre oblique, point. */
export function normalizeSerial(v: string): string {
  return v.normalize("NFKC").toUpperCase().replace(/\s+/g, " ").trim().slice(0, 40);
}

export const SERIAL_RE = /^[A-Z0-9][A-Z0-9 ./-]{2,39}$/;
export const isSerial = (v: string) => SERIAL_RE.test(normalizeSerial(v));

/* ---------------- Fermeture ---------------- */

export interface MissingItem {
  code: string;
  label: string;
}

export function missingForClose(r: Pick<FieldRecord, "photos" | "serials" | "checklist" | "clientSignature">): MissingItem[] {
  const out: MissingItem[] = [];
  for (const s of PHOTO_STEPS) if (!r.photos.some((p) => p.step === s.id)) out.push({ code: `photo:${s.id}`, label: `Photo : ${s.label.toLowerCase()}` });
  if (!r.serials.outdoor.some(isSerial)) out.push({ code: "serie:exterieur", label: "Numéro de série de l’unité extérieure" });
  if (!r.serials.indoor.some(isSerial)) out.push({ code: "serie:interieur", label: "Numéro de série de l’unité intérieure" });
  for (const c of CHECKLIST) {
    const v = r.checklist[c.id];
    if (!v || (v.value === "sans-objet" && !c.naAllowed)) out.push({ code: `controle:${c.id}`, label: `Liste de contrôle : ${c.label.toLowerCase()}` });
  }
  if (!r.clientSignature) out.push({ code: "signature", label: "Signature du client" });
  return out;
}

/** Heure envoyée par le téléphone : acceptée si elle est plausible (7 jours au plus dans le passé, 5 minutes au plus dans le futur). */
export function clampAt(clientAt: string | undefined, now: Date): string {
  const t = clientAt ? Date.parse(clientAt) : Number.NaN;
  if (!Number.isFinite(t) || t > now.getTime() + 5 * MIN || t < now.getTime() - 7 * DAY) return now.toISOString();
  return new Date(t).toISOString();
}

/* ---------------- Opérations (file hors ligne) ---------------- */

const opBase = { id: z.string().regex(OP_ID_RE), at: z.string().max(40).optional() };

export const fieldOpSchema = z.discriminatedUnion("type", [
  z.object({ ...opBase, type: z.literal("en-route"), etaAt: z.string().max(40).nullable() }),
  z.object({ ...opBase, type: z.literal("arrive") }),
  z.object({ ...opBase, type: z.literal("checklist"), item: z.string().max(20), value: z.enum(["fait", "sans-objet"]).nullable() }),
  z.object({ ...opBase, type: z.literal("serials"), outdoor: z.array(z.string().max(60)).max(4), indoor: z.array(z.string().max(60)).max(8), readByVision: z.boolean().optional() }),
  z.object({ ...opBase, type: z.literal("signature"), name: z.string().trim().min(2).max(120), image: z.string().max(600_000) }),
  z.object({ ...opBase, type: z.literal("fermer") }),
]);

export type FieldOp = z.infer<typeof fieldOpSchema>;

export const fieldOpsSchema = z.object({ ops: z.array(fieldOpSchema).max(60) });

export type OpOutcome =
  | { ok: true; effect?: "en-route" | "ferme" }
  | { ok: false; error: string; missing?: MissingItem[] };

/**
 * Applique une opération simple (tout sauf la signature et la fermeture, qui passent par le service : fichier
 * de la signature, écriture du job). Renvoie une erreur lisible sans rien changer si l'opération est refusée.
 */
export function applySimpleOp(r: FieldRecord, op: Exclude<FieldOp, { type: "signature" } | { type: "fermer" }>, by: string, now: Date): OpOutcome {
  const at = clampAt(op.at, now);
  switch (op.type) {
    case "en-route": {
      let etaAt: string | null = null;
      if (op.etaAt) {
        const t = Date.parse(op.etaAt);
        if (!Number.isFinite(t) || t < Date.parse(at) - 10 * MIN || t > Date.parse(at) + 12 * 60 * MIN) return { ok: false, error: "Heure d’arrivée estimée invalide." };
        etaAt = new Date(t).toISOString();
      }
      r.enRoute = { ...(r.enRoute?.sms ? { sms: r.enRoute.sms } : {}), at, etaAt };
      r.events.push({ at, by, action: "en route", detail: etaAt ? `arrivée estimée ${etaAt}` : undefined });
      return { ok: true, effect: "en-route" };
    }
    case "arrive":
      if (!r.arrivedAt) {
        r.arrivedAt = at;
        r.events.push({ at, by, action: "arrivé, travaux commencés" });
      }
      return { ok: true };
    case "checklist": {
      const item = CHECKLIST.find((c) => c.id === op.item);
      if (!item) return { ok: false, error: "Point de contrôle inconnu." };
      if (op.value === "sans-objet" && !item.naAllowed) return { ok: false, error: `« ${item.label} » ne peut pas être sans objet.` };
      if (op.value === null) delete r.checklist[item.id as ChecklistId];
      else r.checklist[item.id as ChecklistId] = { value: op.value, at };
      return { ok: true };
    }
    case "serials": {
      const outdoor = op.outdoor.map(normalizeSerial).filter(Boolean);
      const indoor = op.indoor.map(normalizeSerial).filter(Boolean);
      const bad = [...outdoor, ...indoor].find((s) => !SERIAL_RE.test(s));
      if (bad) return { ok: false, error: `Numéro de série invalide : « ${bad} » (lettres, chiffres, tirets ; 3 caractères au moins).` };
      r.serials = { outdoor, indoor, updatedAt: at, ...(op.readByVision ? { readByVision: true } : {}) };
      r.events.push({ at, by, action: "numéros de série", detail: `ext. ${outdoor.join(", ") || "—"} · int. ${indoor.join(", ") || "—"}` });
      return { ok: true };
    }
  }
}

/** Retient l'opération (idempotence), en gardant les 500 dernières. */
export function markApplied(r: FieldRecord, opId: string): void {
  r.appliedOps.push(opId);
  if (r.appliedOps.length > 500) r.appliedOps.splice(0, r.appliedOps.length - 500);
}

/** Étapes franchies, pour la jauge de progression (photos par étape + séries + contrôle + signature). */
export function progressOf(r: Pick<FieldRecord, "photos" | "serials" | "checklist" | "clientSignature">): { done: number; total: number } {
  const total = PHOTO_STEPS.length + 2 + CHECKLIST.length + 1;
  return { done: total - missingForClose(r).length, total };
}
