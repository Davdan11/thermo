/* ==================================================================
   Conformité C2 — données de la page /gestion/conformite : état de la
   trousse et de l'identité (ce qui manque pour que chaque texte soit
   en vigueur), anonymisation des prospects, programme de
   recommandation, preuves de consentement (recherche par courriel ou
   téléphone : texte exact, cases, date, IP, source, retraits).
   Serveur seulement ; la page vérifie la session (requireAdmin).
   ================================================================== */

import { isPlatformIdentityComplete, platformIssues, readPlatformIdentity } from "@/lib/plateforme/identite";
import { readTrousse } from "@/lib/plateforme/trousse";
import { SITE_URL } from "@/lib/seo";
import { readAutomations } from "@/lib/gestion/automatisations/store";
import type { ReferralProgram } from "@/lib/gestion/automatisations/types";
import { programState } from "@/lib/reference/regles";
import { readReferences, type ReferralRecord } from "@/lib/reference/store";
import { readConformite, type ConformiteSettings } from "./reglages";
import { identityKeys, readConsents } from "./store";
import { buildConsentBundle, buildPolicy, commercialFooter, inboundCallNotice, outboundCallNotice, type ConsentPurpose } from "./textes";

export interface ProofView {
  id: string;
  localTime: string;
  ip: string | null;
  form: string;
  source: string;
  email: string | null;
  phone: string | null;
  sender: string;
  version: string;
  trousseVersion: string;
  items: Array<{ purpose: ConsentPurpose; section: string; kind: string; checked: boolean; channels: string[]; text: string | null }>;
  withdrawals: Array<{ at: string; method: string; purposes: ConsentPurpose[] }>;
}

export interface ConformiteView {
  trousse: { loaded: boolean; version: string; sha: string | null; importedAt: string | null };
  identity: { complete: boolean; issues: string[] };
  ready: { formulaires: boolean; appelEntrant: boolean; appelSortant: boolean; pied: boolean; politique: boolean };
  missing: { formulaires: string[]; politique: string[] };
  settings: ConformiteSettings;
  programme: { settings: ReferralProgram | null; offered: boolean; missing: string[]; records: ReferralRecord[] };
  preuves: { records: number; withdrawals: number; calls: { total: number; refus: number; accepte: number; poursuite: number } };
  lookup: { query: string; proofs: ProofView[] } | null;
}

export async function conformiteView(query = ""): Promise<ConformiteView> {
  const [trousse, identity, settings, auto, refs, consents] = await Promise.all([readTrousse(), readPlatformIdentity(), readConformite(), readAutomations(), readReferences(), readConsents()]);
  const ctx = { identity, siteUrl: SITE_URL.replace(/\/$/, "") };
  const bundle = buildConsentBundle(trousse, ctx);
  const policy = buildPolicy(trousse, ctx, { effectiveDate: settings.politiqueEnVigueurLe });
  const p = auto.settings.referralProgram ?? null;
  const ps = programState(p);
  const q = query.trim().slice(0, 160);
  let lookup: ConformiteView["lookup"] = null;
  if (q) {
    const keys = new Set(identityKeys({ email: q, phone: q }));
    const proofs = consents.records
      .filter((r) => r.keys.some((k) => keys.has(k)))
      .sort((a, b) => b.at.localeCompare(a.at))
      .slice(0, 20)
      .map((r) => ({
        id: r.id,
        localTime: r.localTime,
        ip: r.ip,
        form: r.form,
        source: r.source,
        email: r.email,
        phone: r.phone,
        sender: r.sender,
        version: r.version,
        trousseVersion: r.trousse.version,
        items: r.items.map((i) => ({ purpose: i.purpose, section: i.section, kind: i.kind, checked: i.checked, channels: i.channels, text: consents.texts[i.textSha]?.text ?? null })),
        withdrawals: consents.withdrawals.filter((w) => w.keys.some((k) => r.keys.includes(k))).map((w) => ({ at: w.effectiveAt, method: w.method, purposes: w.purposes })),
      }));
    lookup = { query: q, proofs };
  }
  return {
    trousse: { loaded: trousse.sections.length > 0, version: trousse.version, sha: trousse.sha256, importedAt: trousse.importedAt },
    identity: { complete: isPlatformIdentityComplete(identity), issues: platformIssues(identity).map((i) => `${i.label}${i.problem === "format" ? " (format)" : ""}`) },
    ready: {
      formulaires: bundle.ready,
      appelEntrant: inboundCallNotice(trousse, ctx).ok,
      appelSortant: outboundCallNotice(trousse, ctx, "un conseiller").ok,
      pied: commercialFooter(trousse, ctx, { typeMessages: "des offres", unsubscribeUrl: `${ctx.siteUrl}/` }) !== null,
      politique: "ok" in policy,
    },
    missing: { formulaires: bundle.ready ? [] : bundle.missing, politique: "ok" in policy ? [] : settings.politiqueEnVigueurLe ? policy.missing : ["Date d’entrée en vigueur de la politique à régler ci-dessous", ...policy.missing.filter((m) => !m.includes("DATE"))] },
    settings,
    programme: { settings: p, offered: ps.offered, missing: ps.missing, records: [...refs.records].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 100) },
    preuves: {
      records: consents.records.length,
      withdrawals: consents.withdrawals.length,
      calls: {
        total: consents.calls.length,
        refus: consents.calls.filter((c) => c.decision === "refus-touche" || c.decision === "refus" || c.decision === "sans-reponse").length,
        accepte: consents.calls.filter((c) => c.decision === "accepte-touche-1").length,
        poursuite: consents.calls.filter((c) => c.decision === "poursuite").length,
      },
    },
    lookup,
  };
}
