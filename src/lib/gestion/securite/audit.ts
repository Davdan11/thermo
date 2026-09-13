/* ==================================================================
   Chantier S — journal d'audit de /gestion.

     audit("paiement.marque", { facture: "f_…", moyen: "virement" });

   Une ligne JSON par événement dans gestion-journal/AAAA-MM.jsonl
   (dossier des données, droits 600). Qui (courriel de la session) et
   d'où (adresse IP) sont ajoutés tout seuls quand l'appel vient d'une
   requête. Jamais bloquant : une erreur d'écriture est notée dans la
   console et l'action continue.

   AUCUN SECRET : les détails sont nettoyés (clés au nom sensible,
   valeurs qui ressemblent à une clé d'API ou à un jeton, textes longs).
   Les appelants ne passent que des identifiants et des noms de variables.
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { gestionDataDir } from "../store";

export const AUDIT_ACTIONS = {
  "connexion.lien": "Lien de connexion demandé",
  "connexion.reussie": "Connexion",
  "connexion.echec": "Connexion refusée",
  deconnexion: "Déconnexion",
  "2fa.reussie": "2e étape réussie",
  "2fa.echec": "2e étape refusée",
  "2fa.bloquee": "2e étape bloquée (trop d’essais)",
  "2fa.texto": "Code envoyé par texto",
  "2fa.activee": "2e étape activée",
  "2fa.desactivee": "2e étape désactivée",
  "2fa.codes": "Codes de secours régénérés",
  "2fa.appareil": "Appareil de confiance retiré",
  "2fa.reglages": "Réglages de sécurité modifiés",
  "sessions.revoquees": "Déconnexion partout",
  "session.revoquee": "Session fermée",
  "soumission.envoyee": "Soumission envoyée",
  "crm.etape": "Étape changée",
  "paiement.marque": "Paiement marqué",
  "campagne.envoyee": "Campagne envoyée",
  "cle.modifiee": "Clé modifiée",
  "cle.retiree": "Clé retirée",
  export: "Export de données",
  "sauvegarde.echec": "Sauvegarde en échec",
  // Chantier V : équipe (invitations, rôles, statuts), attribution des clients, relevés des vendeurs.
  "equipe.invitation": "Membre invité",
  "equipe.acceptee": "Invitation acceptée",
  "equipe.role": "Rôle changé",
  "equipe.desactive": "Membre désactivé",
  "equipe.reactive": "Membre réactivé",
  "equipe.supprime": "Membre supprimé",
  "equipe.modifie": "Fiche d’un membre modifiée",
  "equipe.reglages": "Réglages de l’équipe modifiés",
  "crm.attribution": "Client attribué",
  "crm.reattribution": "Client réattribué",
  "vendeurs.releve": "Relevé de commission payé",
  // Conformité C3 : entente maître, conformité des partenaires, fin de partenariat, service après-vente.
  "entente.version": "Entente : version modifiée",
  "entente.envoi": "Entente envoyée",
  "entente.signature": "Entente signée",
  "partenaire.conformite": "Conformité d’un partenaire modifiée",
  "partenaire.fin": "Fin de partenariat",
  "partenaire.reglages": "Réglages des partenaires modifiés",
  "sav.delais": "Service après-vente : priorité ou accusé",
} as const;

export type AuditAction = keyof typeof AUDIT_ACTIONS;

/** Familles pour le filtre de la page Sécurité. */
export const AUDIT_FAMILIES: Record<string, { label: string; match: (a: string) => boolean }> = {
  connexion: { label: "Connexions", match: (a) => a.startsWith("connexion.") || a === "deconnexion" || a.startsWith("session") },
  "2fa": { label: "2e étape", match: (a) => a.startsWith("2fa.") },
  cles: { label: "Clés", match: (a) => a.startsWith("cle.") },
  ventes: { label: "Ventes et paiements", match: (a) => a.startsWith("soumission.") || a.startsWith("crm.") || a.startsWith("paiement.") || a.startsWith("campagne.") },
  equipe: { label: "Équipe et attributions", match: (a) => a.startsWith("equipe.") || a.startsWith("crm.attribution") || a.startsWith("crm.reattribution") || a.startsWith("vendeurs.") }, // Chantier V
  partenaires: { label: "Partenaires et entente", match: (a) => a.startsWith("entente.") || a.startsWith("partenaire.") || a.startsWith("sav.") }, // Conformité C3
  export: { label: "Exports", match: (a) => a === "export" },
  echecs: { label: "Échecs seulement", match: (a) => /echec|bloquee/.test(a) },
};

export type AuditValue = string | number | boolean | null;

export interface AuditEntry {
  at: string;
  action: AuditAction | string;
  qui?: string;
  ip?: string;
  details?: Record<string, AuditValue>;
}

export const auditDir = () => path.join(gestionDataDir(), "gestion-journal");

/* ---------------- Nettoyage (aucun secret) ---------------- */

/** Nom de champ sensible : sa valeur n'est jamais écrite. */
const SENSITIVE_KEY = /(secret|token|jeton|pass|mdp|cl[eé]$|^cle|key|code|valeur|value|otp|totp|signature|auth|cookie|session)/i;
/** Valeur qui ressemble à une clé d'API, un jeton ou une clé privée. */
const SECRET_VALUE = [
  /\b(sk|rk|pk)[-_](live|test|ant|proj)[-_]?[A-Za-z0-9_-]{8,}/i,
  /\bwhsec_[A-Za-z0-9]{8,}/,
  /\bEAA[A-Za-z0-9]{20,}/,
  /\bAIza[0-9A-Za-z_-]{20,}/,
  /\b(ghp|gho|xox[abp])[_-][A-Za-z0-9-]{10,}/,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
  /\b[A-Fa-f0-9]{32,}\b/,
  /[A-Za-z0-9+/_-]{36,}={0,2}/,
];

export function looksSecret(value: string): boolean {
  return SECRET_VALUE.some((re) => re.test(value));
}

export function sanitizeDetails(details: Record<string, unknown> | undefined): Record<string, AuditValue> | undefined {
  if (!details) return undefined;
  const out: Record<string, AuditValue> = {};
  for (const [k, v] of Object.entries(details).slice(0, 20)) {
    const key = k.slice(0, 40);
    if (v === undefined) continue;
    if (SENSITIVE_KEY.test(key) && !/^(variable|nom)$/i.test(key)) {
      out[key] = "[masqué]";
    } else if (typeof v === "string") {
      const s = v.replace(/[\r\n\t]+/g, " ").slice(0, 160);
      out[key] = looksSecret(v) ? "[masqué]" : s;
    } else if (typeof v === "number" || typeof v === "boolean" || v === null) {
      out[key] = typeof v === "number" && !Number.isFinite(v) ? null : v;
    } else {
      out[key] = "[ignoré]";
    }
  }
  return Object.keys(out).length ? out : undefined;
}

/* ---------------- Écriture ---------------- */

export interface AuditContext {
  qui?: string | null;
  ip?: string | null;
  now?: Date;
}

/** Qui et d'où, lus de la requête en cours (hors requête : rien). */
async function requestContext(): Promise<{ qui?: string; ip?: string }> {
  try {
    const [{ headers }, { ipFromHeaders }] = await Promise.all([import("next/headers"), import("../rate-limit")]);
    const h = await headers();
    const ip = ipFromHeaders(h);
    let qui: string | undefined;
    try {
      const { peekSession, SESSION_COOKIE } = await import("../auth/session-token");
      const { cookies } = await import("next/headers");
      // Lecture seule du courriel : la session a déjà été vérifiée par l'action qui appelle audit().
      qui = peekSession((await cookies()).get(SESSION_COOKIE)?.value)?.email;
    } catch {
      /* hors requête */
    }
    return { qui, ip };
  } catch {
    return {};
  }
}

export async function writeAuditEntry(entry: AuditEntry): Promise<void> {
  const dir = auditDir();
  await fs.mkdir(dir, { recursive: true, mode: 0o700 });
  const file = path.join(dir, `${entry.at.slice(0, 7)}.jsonl`);
  await fs.appendFile(file, JSON.stringify(entry) + "\n", { mode: 0o600 });
}

/**
 * Note une action sensible. Ne lève jamais d'erreur.
 * `details` : identifiants et noms seulement ; tout ce qui ressemble à un secret est masqué.
 */
export async function audit(action: AuditAction, details?: Record<string, unknown>, ctx: AuditContext = {}): Promise<void> {
  try {
    const auto = ctx.qui !== undefined && ctx.ip !== undefined ? {} : await requestContext();
    const qui = ctx.qui ?? auto.qui;
    const ip = ctx.ip ?? auto.ip;
    const entry: AuditEntry = {
      at: (ctx.now ?? new Date()).toISOString(),
      action,
      ...(qui ? { qui: String(qui).slice(0, 200) } : {}),
      ...(ip ? { ip: String(ip).slice(0, 64) } : {}),
      ...(sanitizeDetails(details) ? { details: sanitizeDetails(details) } : {}),
    };
    await writeAuditEntry(entry);
  } catch (e) {
    console.error("[audit] écriture impossible :", (e as Error)?.message ?? e);
  }
}

/* ---------------- Lecture (page Sécurité) ---------------- */

export interface AuditQuery {
  famille?: string;
  q?: string;
  /** Nombre de jours en arrière (défaut 30, max 400). */
  jours?: number;
  limit?: number;
  now?: Date;
}

function monthsBack(now: Date, days: number): string[] {
  const out = new Set<string>();
  for (let d = 0; d <= days; d += 1) out.add(new Date(now.getTime() - d * 86_400_000).toISOString().slice(0, 7));
  return [...out];
}

export async function readAudit(query: AuditQuery = {}): Promise<{ entries: AuditEntry[]; total: number }> {
  const now = query.now ?? new Date();
  const days = Math.min(400, Math.max(1, query.jours ?? 30));
  const since = now.getTime() - days * 86_400_000;
  const fam = query.famille ? AUDIT_FAMILIES[query.famille] : undefined;
  const q = (query.q ?? "").trim().toLowerCase().slice(0, 80);
  const all: AuditEntry[] = [];
  for (const ym of monthsBack(now, days)) {
    let raw = "";
    try {
      raw = await fs.readFile(path.join(auditDir(), `${ym}.jsonl`), "utf8");
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
      continue;
    }
    for (const line of raw.split("\n")) {
      if (!line.trim()) continue;
      try {
        const e = JSON.parse(line) as AuditEntry;
        if (typeof e.at !== "string" || typeof e.action !== "string") continue;
        if (Date.parse(e.at) < since) continue;
        if (fam && !fam.match(e.action)) continue;
        if (q && !JSON.stringify([e.action, AUDIT_ACTIONS[e.action as AuditAction] ?? "", e.qui ?? "", e.ip ?? "", e.details ?? {}]).toLowerCase().includes(q)) continue;
        all.push(e);
      } catch {
        /* ligne abîmée : ignorée */
      }
    }
  }
  all.sort((a, b) => b.at.localeCompare(a.at));
  return { entries: all.slice(0, Math.min(500, query.limit ?? 200)), total: all.length };
}

export function auditLabel(action: string): string {
  return AUDIT_ACTIONS[action as AuditAction] ?? action;
}
