/* ==================================================================
   Chantier R — écritures du propriétaire : levée manuelle d'un
   blocage RBQ, réglages, accueil des nouveaux partenaires.
   AUCUNE vérification d'accès ici : les Server Actions passent par
   requireAdmin() et zod (reseau-actions.ts).
   ================================================================== */

import { logPartner, mutatePartenaires } from "../partenaires/store";
import { readGestion } from "../store";
import { isBlocking, withOverride } from "./rbq/verify";
import { mutateReseau, normalizeReseauSettings, onboardingOf } from "./store";
import { NEQ_RE } from "./accueil";

export type ReseauResult = { ok: true; message?: string } | { ok: false; error: string };

const installerExists = async (id: string) => (await readGestion()).installers.some((i) => i.id === id);

export async function overrideRbq(installerId: string, note: string, by: string, now = new Date()): Promise<ReseauResult> {
  return mutatePartenaires<ReseauResult>((d) => {
    const rec = d.partners[installerId];
    const v = rec?.rbqVerification;
    if (!rec || !v) return { result: { ok: false as const, error: "Aucune vérification à lever." }, changed: false };
    if (!isBlocking(v, now)) return { result: { ok: false as const, error: "La licence n’est pas bloquée." }, changed: false };
    rec.rbqVerification = withOverride(v, by, note, now);
    logPartner(d, installerId, { at: now.toISOString(), by, action: "licence RBQ : blocage levé à la main (registre public vérifié)", detail: note.slice(0, 300) });
    return { result: { ok: true as const, message: "Blocage levé pour 30 jours. La prochaine vérification qui trouve la licence active le rend inutile." }, changed: true };
  });
}

export async function clearRbqOverride(installerId: string, by: string, now = new Date()): Promise<ReseauResult> {
  return mutatePartenaires<ReseauResult>((d) => {
    const v = d.partners[installerId]?.rbqVerification;
    if (!v?.override) return { result: { ok: false as const, error: "Aucune levée en cours." }, changed: false };
    d.partners[installerId].rbqVerification = { ...v, override: null };
    logPartner(d, installerId, { at: now.toISOString(), by, action: "licence RBQ : levée manuelle annulée" });
    return { result: { ok: true as const, message: "Levée annulée : le verdict du fichier s’applique de nouveau." }, changed: true };
  });
}

export async function saveReseauSettings(input: { relevantSubcategories: string[]; recruitMinDemands: number; recruitDays: number }, by: string, now = new Date()): Promise<ReseauResult> {
  await mutateReseau((d) => {
    d.settings = normalizeReseauSettings({ ...input, updatedAt: now.toISOString(), updatedBy: by });
    return { result: undefined, changed: true };
  });
  return { ok: true, message: "Réglages enregistrés." };
}

export async function saveLegal(installerId: string, input: { legalName: string; neq: string; address: string }, by: string, now = new Date()): Promise<ReseauResult> {
  if (!(await installerExists(installerId))) return { ok: false, error: "Installateur introuvable." };
  const neq = input.neq.replace(/\D/g, "");
  if (neq && !NEQ_RE.test(neq)) return { ok: false, error: "Le NEQ compte 10 chiffres." };
  await mutateReseau((d) => {
    onboardingOf(d, installerId).legal = { legalName: input.legalName.trim(), neq, address: input.address.trim(), updatedAt: now.toISOString(), updatedBy: by };
    return { result: undefined, changed: true };
  });
  return { ok: true, message: "Identité légale enregistrée." };
}

export async function saveAvailability(installerId: string, input: { days: number[]; weeklyCapacity: number | null; note: string }, by: string, now = new Date()): Promise<ReseauResult> {
  if (!(await installerExists(installerId))) return { ok: false, error: "Installateur introuvable." };
  await mutateReseau((d) => {
    onboardingOf(d, installerId).availability = { days: [...new Set(input.days)].sort(), weeklyCapacity: input.weeklyCapacity, note: input.note.trim(), updatedAt: now.toISOString(), updatedBy: by };
    return { result: undefined, changed: true };
  });
  return { ok: true, message: "Disponibilités enregistrées." };
}
