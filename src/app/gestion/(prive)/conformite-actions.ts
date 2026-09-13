"use server";

/* ==================================================================
   Conformité C2 — Server Actions de /gestion/conformite. Chacune :
   requireAdmin() → validation zod → écriture → journal d'audit →
   refresh(). Joignables par un POST direct : la session est vérifiée
   ici. Aucun envoi réel.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { audit } from "@/lib/gestion/securite/audit";
import { mutateAutomations, normalizeAutomationSettings, normalizeReferralProgram } from "@/lib/gestion/automatisations/store";
import { mutateConformite } from "@/lib/consentements/reglages";
import { recordWithdrawal } from "@/lib/consentements/store";
import { confirmReferralFact, type OwnerFact } from "@/lib/reference/store";

export type CfResult = { ok: true; message?: string } | { ok: false; error: string } | undefined;

const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();
const YMD = /^\d{4}-\d{2}-\d{2}$/;
const firstIssue = (e: z.ZodError) => e.issues[0]?.message ?? "Demande invalide.";

/** « 50 », « 50,00 », « 1 250 $ » → cents ; null si vide ; NaN si illisible. */
function cents(v: string): number | null {
  const s = v.replace(/[\s$ ]/g, "").replace(",", ".");
  if (!s) return null;
  if (!/^\d+(\.\d{1,2})?$/.test(s)) return Number.NaN;
  return Math.round(Number(s) * 100);
}

export async function savePolicyDateAction(_prev: CfResult, fd: FormData): Promise<CfResult> {
  const s = await requireAdmin();
  const p = z.object({ date: z.string().regex(YMD, "Choisissez une date.").or(z.literal("")) }).safeParse({ date: str(fd, "date") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  await mutateConformite((d) => {
    d.politiqueEnVigueurLe = p.data.date || null;
    d.updatedAt = new Date().toISOString();
    d.updatedBy = s.email;
    return { result: undefined, changed: true };
  });
  await audit("conformite.reglages", { quoi: "politique : date d’entrée en vigueur", valeur: p.data.date || "retirée" }, { qui: s.email });
  refresh();
  return { ok: true, message: p.data.date ? "Date enregistrée : la politique de la trousse s’affiche si l’identité est complète." : "Date retirée : la politique actuelle reste en ligne." };
}

export async function saveRetentionAction(_prev: CfResult, fd: FormData): Promise<CfResult> {
  const s = await requireAdmin();
  const p = z.object({ mode: z.enum(["essai", "reel"]), mois: z.coerce.number().int().min(12, "12 mois au moins.").max(120) }).safeParse({ mode: str(fd, "mode"), mois: str(fd, "mois") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  await mutateConformite((d) => {
    d.anonymisation.mode = p.data.mode;
    d.anonymisation.moisInactivite = p.data.mois;
    d.updatedAt = new Date().toISOString();
    d.updatedBy = s.email;
    return { result: undefined, changed: true };
  });
  await audit("conformite.reglages", { quoi: "anonymisation des prospects", mode: p.data.mode, mois: p.data.mois }, { qui: s.email });
  refresh();
  return { ok: true, message: p.data.mode === "reel" ? "Mode réel : les prospects inactifs seront anonymisés au prochain passage quotidien." : "Mode essai : rien n’est modifié, le bilan dit ce qui le serait." };
}

export async function runDailyNowAction(): Promise<CfResult> {
  await requireAdmin();
  const { runConformiteDaily } = await import("@/lib/consentements/quotidien");
  const r = await runConformiteDaily(new Date(), { force: true });
  refresh();
  const b = r.bilan;
  return b ? { ok: true, message: `Passage ${b.mode === "reel" ? "réel" : "d’essai"} : ${b.prospects} prospect(s) inactif(s) ; exclus ${b.exclus.contrat} contrat(s), ${b.exclus.garantie} garantie(s), ${b.exclus.litige} litige(s).` } : { ok: true, message: "Rien à faire." };
}

export async function saveReferralProgramAction(_prev: CfResult, fd: FormData): Promise<CfResult> {
  const s = await requireAdmin();
  const reward = cents(str(fd, "montant"));
  const capKind = str(fd, "plafondType") === "montant" ? "montant" : "nombre";
  const capRaw = str(fd, "plafond");
  const capValue = capKind === "montant" ? cents(capRaw) : capRaw ? Number.parseInt(capRaw, 10) : null;
  const launch = str(fd, "lancement");
  const delay = str(fd, "annulation");
  if (Number.isNaN(reward) || Number.isNaN(capValue as number)) return { ok: false, error: "Montant illisible : écrivez par exemple 50 ou 50,00." };
  if (launch && !YMD.test(launch)) return { ok: false, error: "Date de lancement invalide." };
  if (delay && !/^\d{1,3}$/.test(delay)) return { ok: false, error: "Délai d’annulation : un nombre de jours." };
  const program = normalizeReferralProgram({
    rewardCents: reward,
    form: str(fd, "forme"),
    annualCap: capValue ? { kind: capKind, value: capValue } : null,
    launchDate: launch || null,
    cancellationDays: delay ? Number(delay) : null,
  });
  await mutateAutomations((d) => {
    d.settings = normalizeAutomationSettings({ ...d.settings, referralProgram: program, updatedAt: new Date().toISOString(), updatedBy: s.email });
    return { result: undefined, changed: true };
  });
  await audit("conformite.reglages", { quoi: "programme de recommandation", montant: program.rewardCents, plafond: program.annualCap?.value ?? null, lancement: program.launchDate }, { qui: s.email });
  refresh();
  return { ok: true, message: program.rewardCents ? "Réglages enregistrés." : "Enregistré sans montant : le programme n’est pas offert." };
}

export async function referralFactAction(id: unknown, fact: unknown): Promise<CfResult> {
  const s = await requireAdmin();
  const p = z.object({ id: z.string().regex(/^rf_[A-Za-z0-9_-]{8,16}$/), fact: z.enum(["paiement", "remboursement", "versement", "refus"]) }).safeParse({ id, fact });
  if (!p.success) return { ok: false, error: "Demande invalide." };
  const r = await confirmReferralFact(p.data.id, p.data.fact as OwnerFact, s.email);
  if (!r.ok) return { ok: false, error: r.error ?? "Impossible." };
  await audit("conformite.reglages", { quoi: "recommandation", fait: p.data.fact, recommandation: p.data.id }, { qui: s.email });
  refresh();
  return { ok: true, message: "Noté. Le statut est recalculé au prochain passage quotidien (ou « Lancer maintenant »)." };
}

export async function withdrawConsentAction(_prev: CfResult, fd: FormData): Promise<CfResult> {
  const s = await requireAdmin();
  const contact = str(fd, "contact").slice(0, 160);
  const method = z.enum(["telephone", "courriel", "gestion"]).safeParse(str(fd, "methode"));
  if (!contact || !method.success) return { ok: false, error: "Indiquez le courriel ou le téléphone et la façon dont la personne l’a demandé." };
  const w = await recordWithdrawal({ email: contact, phone: contact, purposes: ["rappels", "promotions"], method: method.data, by: s.email });
  if (!w) return { ok: false, error: "Courriel ou téléphone illisible." };
  await audit("conformite.reglages", { quoi: "retrait de consentement noté", methode: method.data }, { qui: s.email });
  refresh();
  return { ok: true, message: "Retrait noté : prise d’effet immédiate (rappels et messages commerciaux)." };
}
