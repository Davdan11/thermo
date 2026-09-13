/* ==================================================================
   Identité d'un client : téléphone (E.164, via toE164 de sms.ts) et
   courriel (normalizeEmail des relances). Les valeurs génériques
   (numéro de l'entreprise, test@…, 000-000-0000) ne rapprochent
   jamais personne. Les empreintes (SHA-256) sont ce que garde crm.json.
   ================================================================== */

import { createHash } from "node:crypto";
import { normalizeEmail } from "@/lib/relances/core";
import { toE164 } from "../sms";

/** Numéro du site (textos et appels) : jamais celui d'un client. */
export const BUSINESS_NUMBERS = ["+14389003224"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_LOCAL = /^(test|tests|testing|essai|demo|noreply|no-reply|donotreply|do-not-reply|nepasrepondre|ne-pas-repondre|aucun|aucune|none|null|nil|na|n-a|x+|a|abc|asdf|qwerty|client|nom)$/;
const GENERIC_DOMAIN = /^(example|test|invalid|localhost)(\.[a-z]{2,})?$|(^|\.)example\.(com|org|net)$/;

/** « 418 555-1234 », « +1 (418) 555-1234 », « 1-418-555-1234 » → « +14185551234 » ; null si générique ou illisible. */
export function phoneOf(raw: unknown): string | null {
  if (typeof raw !== "string" || !raw.trim()) return null;
  const cleaned = raw.replace(/\s*(poste|ext\.?|x)\s*\d{1,6}\s*$/i, "");
  const e164 = toE164(cleaned);
  if (!e164) return null;
  const d = e164.slice(2);
  // Indicatif régional impossible (0 ou 1), dix chiffres identiques, suite 1234567890.
  if (/^[01]/.test(d) || /^(\d)\1{9}$/.test(d) || d === "1234567890") return null;
  return e164;
}

/** Courriel en minuscules ; null si générique (test@…, example.com) ou illisible. */
export function emailOf(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const e = normalizeEmail(raw);
  if (!e || e.length > 200 || !EMAIL_RE.test(e)) return null;
  const at = e.lastIndexOf("@");
  if (GENERIC_LOCAL.test(e.slice(0, at)) || GENERIC_DOMAIN.test(e.slice(at + 1))) return null;
  return e;
}

/** Clés génériques à ignorer : numéros et adresses de l'entreprise, en plus du numéro du site. */
export function genericKeys(values: Array<string | null | undefined>): Set<string> {
  const out = new Set<string>();
  for (const v of [...BUSINESS_NUMBERS, ...values]) {
    if (!v) continue;
    const p = phoneOf(v);
    if (p) out.add(`p:${p}`);
    const e = emailOf(v);
    if (e) out.add(`e:${e}`);
  }
  return out;
}

/** Clés d'un point de contact (p:+1…, e:…), sans les génériques. Téléphone d'abord. */
export function identityKeys(tp: { phone?: string; email?: string }, generic: ReadonlySet<string> = new Set()): string[] {
  const out: string[] = [];
  const p = tp.phone ? phoneOf(tp.phone) : null;
  if (p && !generic.has(`p:${p}`)) out.push(`p:${p}`);
  const e = tp.email ? emailOf(tp.email) : null;
  if (e && !generic.has(`e:${e}`)) out.push(`e:${e}`);
  return out;
}

/** Ordre des clés pour choisir la « plus ancienne » : téléphone, courriel, puis clé de secours. */
export function sortKeys(keys: string[]): string[] {
  const w = (k: string) => (k.startsWith("p:") ? 0 : k.startsWith("e:") ? 1 : 2);
  return [...keys].sort((a, b) => w(a) - w(b) || a.localeCompare(b));
}

export const hashKey = (key: string): string => createHash("sha256").update(key).digest("hex");

/** Identifiant stable d'un client : « c_ » + 12 premiers caractères du SHA-256 de sa plus ancienne clé. */
export const clientIdFor = (key: string): string => `c_${hashKey(key).slice(0, 12)}`;

/** Quatre derniers chiffres (recherche, listes). */
export function last4(phone: string | undefined | null): string {
  const d = (phone ?? "").replace(/\D/g, "");
  return d.length >= 4 ? d.slice(-4) : "";
}

/** « 514 555-1234 » pour la fiche client. */
export function formatPhone(e164: string): string {
  const d = e164.replace(/\D/g, "");
  const ten = d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
  return ten.length === 10 ? `${ten.slice(0, 3)} ${ten.slice(3, 6)}-${ten.slice(6)}` : e164;
}
