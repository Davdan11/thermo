"use server";

/* ==================================================================
   Refonte R2 — Server Action des réglages des étapes du parcours.
   requireAdmin() → validation → écriture dans crm.json → refresh().
   ================================================================== */

import { refresh } from "next/cache";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { JOURNEY_STATES, JOURNEY_STEPS, PROBABILITY_KEYS, type ParcoursSettings, type ProbabilityKey } from "@/lib/gestion/crm/parcours";
import { saveParcoursSettings } from "@/lib/gestion/crm/parcours-service";

export type ParcoursResult = { ok: true; message: string } | { ok: false; error: string } | undefined;

const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();

export async function saveParcoursSettingsAction(_prev: ParcoursResult, fd: FormData): Promise<ParcoursResult> {
  const session = await requireAdmin();
  const labels: ParcoursSettings["labels"] = {};
  for (const s of JOURNEY_STATES) {
    const v = str(fd, `label_${s}`);
    if (v.length > 40) return { ok: false, error: "Un nom d’étape a 40 caractères au plus." };
    if (v) labels[s] = v;
  }
  const alertHours: ParcoursSettings["alertHours"] = {};
  const sms: ParcoursSettings["sms"] = {};
  const probability: ParcoursSettings["probability"] = {};
  for (const s of JOURNEY_STEPS) {
    const raw = str(fd, `delay_${s}`).replace(",", ".").replace(/\s*h$/i, "");
    if (raw) {
      const h = Number(raw);
      if (!Number.isFinite(h) || h < 0 || h > 2160) return { ok: false, error: "Un délai d’alerte est un nombre d’heures de 0 à 2160 (0 : aucune alerte ; vide : délai par défaut)." };
      alertHours[s] = h === 0 ? null : h;
    }
    sms[s] = fd.get(`sms_${s}`) === "on";
    const p = str(fd, `prob_${s}`);
    if (p) {
      if (!(PROBABILITY_KEYS as readonly string[]).includes(p)) return { ok: false, error: "Demande invalide." };
      probability[s] = p as ProbabilityKey;
    }
  }
  const int = (k: string, min: number, max: number) => {
    const n = Number(str(fd, k));
    return Number.isInteger(n) && n >= min && n <= max ? n : null;
  };
  const escalateAfterHours = int("escalateAfterHours", 0, 72);
  const quietStart = int("quietStart", 0, 23);
  const quietEnd = int("quietEnd", 0, 23);
  if (escalateAfterHours === null || quietStart === null || quietEnd === null) return { ok: false, error: "Vérifiez l’escalade (0 à 72 h) et les heures silencieuses (0 à 23 h)." };
  const r = await saveParcoursSettings({ labels, alertHours, sms, probability, escalateAfterHours, quietStart, quietEnd }, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Réglages des étapes enregistrés." };
}
