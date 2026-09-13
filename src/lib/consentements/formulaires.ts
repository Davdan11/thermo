/* ==================================================================
   Conformité C2 — consentements des formulaires publics, côté serveur.

     const gate = await gateFormConsents(json, { jumelage: true });
     if (gate.mode === "refus") return 4xx;
     … journal de la demande …
     const proof = await saveFormConsents(gate, { req, form, source, email, phone, journalId });

   « actuel » : trousse ou identité incomplète, le formulaire garde son
   comportement et ses textes actuels (aucune preuve C2).
   « c2 » : la version affichée est connue du serveur ; la case 3.1 est
   exigée pour une demande de jumelage (soumission) ; les cases 5.2 et
   5.3 sont facultatives. La preuve (5.4) est gardée dans le magasin des
   consentements, avec l'adresse IP (preuve seulement).
   ================================================================== */

import { z } from "zod";
import { clientIp } from "@/lib/security/rate-limit";
import { currentConsentBundle } from "./serveur";
import { readConsents, recordConsent, type ConsentForm, type ConsentRecord } from "./store";
import type { ConsentBundle } from "./textes";
import type { RelanceConsent } from "@/lib/relances/core";

export const consentAnswersSchema = z.object({
  version: z.string().regex(/^[0-9a-f]{16}$/),
  rappels: z.boolean().optional().default(false),
  promotions: z.boolean().optional().default(false),
  jumelage: z.boolean().optional(),
});
export type ParsedConsentAnswers = z.infer<typeof consentAnswersSchema>;

export type FormConsentGate =
  | { mode: "actuel" }
  | { mode: "c2"; bundle: ConsentBundle; answers: ParsedConsentAnswers; jumelage: boolean }
  | { mode: "refus"; status: number; error: string; field?: string };

export const RELOAD_MESSAGE = "Les textes de consentement de ce formulaire ont été mis à jour. Rechargez la page, puis renvoyez votre demande.";
export const JUMELAGE_MESSAGE = "Cochez la case de demande de jumelage pour envoyer votre demande.";

/** Vérifie les consentements reçus avec le formulaire, avant tout enregistrement de la demande. */
export async function gateFormConsents(json: unknown, o: { jumelage: boolean }): Promise<FormConsentGate> {
  const bundle = await currentConsentBundle({ register: true });
  if (!bundle.ready) return { mode: "actuel" };
  const raw = json && typeof json === "object" ? (json as Record<string, unknown>).consentements : undefined;
  const parsed = consentAnswersSchema.safeParse(raw);
  if (!parsed.success) return { mode: "refus", status: 409, error: RELOAD_MESSAGE };
  const answers = parsed.data;
  if (answers.version !== bundle.version) {
    // Texte affiché juste avant une mise à jour : la version doit être connue du serveur (texte exact gardé).
    const known = (await readConsents().catch(() => null))?.bundles[answers.version];
    if (!known) return { mode: "refus", status: 409, error: RELOAD_MESSAGE };
  }
  if (o.jumelage && answers.jumelage !== true) return { mode: "refus", status: 400, error: JUMELAGE_MESSAGE, field: "jumelage" };
  return { mode: "c2", bundle, answers, jumelage: o.jumelage };
}

/** Garde la preuve (5.4). Jamais bloquant : un échec d'écriture est noté, la demande reste reçue. */
export async function saveFormConsents(
  gate: FormConsentGate,
  o: { req: Request; form: ConsentForm; source: string; email?: string | null; phone?: string | null; journalId?: string },
): Promise<ConsentRecord | null> {
  if (gate.mode !== "c2") return null;
  try {
    const r = await recordConsent({
      version: gate.answers.version,
      form: o.form,
      source: o.source,
      email: o.email,
      phone: o.phone,
      ip: clientIp(o.req),
      journalId: o.journalId,
      jumelage: gate.jumelage,
      checks: { rappels: gate.answers.rappels, promotions: gate.answers.promotions, jumelage: gate.answers.jumelage },
    });
    if (!r.ok) console.error(`[consentements] preuve non gardée (${o.form}) : version inconnue.`);
    return r.ok ? r.record : null;
  } catch (e) {
    console.error(`[consentements] preuve non gardée (${o.form}) :`, (e as Error)?.message ?? e);
    return null;
  }
}

/** Case 5.2 cochée : consentement des rappels ThermoMatch (texte exact de la version affichée, lien vers la preuve). */
export async function relanceConsentOf(r: ConsentRecord | null): Promise<RelanceConsent | null> {
  const item = r?.items.find((i) => i.purpose === "rappels" && i.checked);
  if (!r || !item) return null;
  const text = (await readConsents().catch(() => null))?.texts[item.textSha]?.text;
  return text ? { at: r.at, page: r.source, text, version: item.textSha, recordId: r.id } : null;
}

/** Page d'origine : chemin du site seulement (jamais une adresse complète venue du navigateur). */
export function safePath(v: unknown, fallback: string): string {
  return typeof v === "string" && /^\/[A-Za-z0-9/_-]{0,190}$/.test(v) ? v : fallback;
}

/** Résumé pour la note CRM et l'alerte interne. */
export function consentSummary(r: ConsentRecord | null): Array<[string, string]> {
  if (!r) return [];
  const on = (p: string) => (r.items.find((i) => i.purpose === p)?.checked ? "oui" : "non");
  return [
    ["Rappels (5.2)", on("rappels")],
    ["Conseils et promotions (5.3)", on("promotions")],
    ...(r.items.some((i) => i.purpose === "jumelage") ? ([["Jumelage demandé (3.1)", on("jumelage")]] as Array<[string, string]>) : []),
    ["Preuve de consentement", `${r.id} · version ${r.version}`],
  ];
}
