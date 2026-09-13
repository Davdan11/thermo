"use server";

/* ==================================================================
   Conformité C1 — Server Actions des réglages du contrat :
   identité de l'entreprise, sous-catégories RBQ exigées, offre
   automatique, et, dans la fiche d'un partenaire, ses modes de
   paiement, son échéancier et ses sous-catégories connues.
   PROPRIÉTAIRE seulement (requireAdmin) ; journal d'audit.
   ================================================================== */

import { refresh } from "next/cache";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { audit } from "@/lib/gestion/securite/audit";
import { INSTALLER_ID_RE } from "@/lib/gestion/partenaires/types";
import { paymentProfileFromForm, paymentProblems } from "@/lib/contrats/paiement";
import { cleanCodes } from "@/lib/contrats/rbq";
import { saveContratsSettings, savePartnerRbq, savePaymentProfile, saveRbqRules } from "@/lib/contrats/service";
import { RULE_ID_RE, WORK_KINDS, type RbqRule } from "@/lib/contrats/types";
import { platformIssues, savePlatformIdentity } from "@/lib/plateforme/identite";
import type { PaResult } from "./partenaires-actions";

const str = (fd: FormData, k: string, max = 300) => String(fd.get(k) ?? "").trim().slice(0, max);

export async function saveIdentityAction(_prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const saved = await savePlatformIdentity(
    {
      legalName: str(fd, "legalName"),
      legalForm: str(fd, "legalForm", 120),
      tradeName: str(fd, "tradeName"),
      neq: str(fd, "neq", 20),
      address: str(fd, "address"),
      tps: str(fd, "tps", 30),
      tvq: str(fd, "tvq", 30),
      phone: str(fd, "phone", 40),
      emailLegal: str(fd, "emailLegal"),
      emailService: str(fd, "emailService"),
      emailPrivacy: str(fd, "emailPrivacy"),
      privacyOfficer: { name: str(fd, "poName"), title: str(fd, "poTitle", 120), email: str(fd, "poEmail"), phone: str(fd, "poPhone", 40) },
      representative: { name: str(fd, "repName"), title: str(fd, "repTitle", 120) },
    },
    s.email,
  );
  await audit("plateforme.identite", { champs: 15 }, { qui: s.email });
  refresh();
  const left = platformIssues(saved).length;
  return { ok: true, message: left ? `Enregistré. Encore ${left} élément${left > 1 ? "s" : ""} à compléter avant tout envoi.` : "Identité complète : les envois sont possibles." };
}

export async function saveRbqRulesAction(_prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const rules: RbqRule[] = [];
  for (let i = 0; i < 20; i++) {
    const id = str(fd, `r${i}_id`, 30);
    if (!id) continue;
    const work = str(fd, `r${i}_work`, 30);
    if (!RULE_ID_RE.test(id) || !(WORK_KINDS as readonly string[]).includes(work)) continue;
    if (fd.get(`r${i}_delete`) === "1") continue;
    rules.push({ id, work: work as RbqRule["work"], label: str(fd, `r${i}_label`, 120), systemTypes: fd.getAll(`r${i}_types`).map(String).slice(0, 12), anyOf: cleanCodes(str(fd, `r${i}_codes`, 120)), active: fd.get(`r${i}_active`) === "1", status: str(fd, `r${i}_status`, 20) === "confirmee" ? "confirmee" : "a-confirmer", note: str(fd, `r${i}_note`, 400), updatedAt: null, updatedBy: null });
  }
  const newLabel = str(fd, "new_label", 120);
  const newWork = str(fd, "new_work", 30);
  if (newLabel && (WORK_KINDS as readonly string[]).includes(newWork)) {
    rules.push({ id: `rg_${Date.now().toString(36)}`, work: newWork as RbqRule["work"], label: newLabel, systemTypes: [], anyOf: cleanCodes(str(fd, "new_codes", 120)), active: false, status: "a-confirmer", note: "", updatedAt: null, updatedBy: null });
  }
  const saved = await saveRbqRules(rules, s.email);
  await audit("plateforme.rbq", { regles: saved.length, actives: saved.filter((r) => r.active).length }, { qui: s.email });
  refresh();
  return { ok: true, message: `${saved.length} règle${saved.length > 1 ? "s" : ""} enregistrée${saved.length > 1 ? "s" : ""} (${saved.filter((r) => r.active).length} active${saved.filter((r) => r.active).length > 1 ? "s" : ""}).` };
}

export async function saveOfferSettingsAction(_prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  const count = Number(str(fd, "autoOfferCount", 3));
  const hours = Number(str(fd, "offerHours", 3));
  await saveContratsSettings({ autoOffer: fd.get("autoOffer") === "1", autoOfferCount: Number.isFinite(count) ? Math.min(20, Math.max(1, Math.round(count))) : 5, offerHours: [24, 48, 72].includes(hours) ? hours : 48 }, s.email);
  refresh();
  return { ok: true, message: fd.get("autoOffer") === "1" ? "Offre automatique activée : dès que le client va de l’avant, l’offre anonymisée part aux admissibles disponibles." : "Offre automatique désactivée : vous gardez la main." };
}

export async function savePaymentProfileAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  if (!INSTALLER_ID_RE.test(installerId)) return { ok: false, error: "Installateur introuvable." };
  const p = await savePaymentProfile(installerId, paymentProfileFromForm(fd), s.email);
  await audit("plateforme.paiement", { installateur: installerId }, { qui: s.email });
  refresh();
  const problems = paymentProblems(p);
  return problems.length ? { ok: true, message: `Enregistré, mais l’approbation restera bloquée : ${problems.join(" ; ")}.` } : { ok: true, message: "Paiement enregistré : bénéficiaire, modes et échéancier conformes." };
}

export async function savePartnerRbqAction(installerId: string, _prev: PaResult, fd: FormData): Promise<PaResult> {
  const s = await requireAdmin();
  if (!INSTALLER_ID_RE.test(installerId)) return { ok: false, error: "Installateur introuvable." };
  const codes = await savePartnerRbq(installerId, str(fd, "codes", 200), str(fd, "note", 300), s.email);
  await audit("plateforme.rbq", { installateur: installerId, codes: codes.join(" ") }, { qui: s.email });
  refresh();
  return { ok: true, message: codes.length ? `Sous-catégories enregistrées : ${codes.join(", ")}.` : "Aucune sous-catégorie valide (ex. 15.10, 16)." };
}
