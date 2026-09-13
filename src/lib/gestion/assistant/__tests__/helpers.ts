/* Chantier A — aides des tests de l'assistant : données FICTIVES (numéros 555-01xx, adresses @exemple.ca), contexte en
   mémoire, fetch simulé qui rejoue des réponses de l'API Messages. Aucun appel réseau réel. */
import { vi } from "vitest";
import { DEFAULT_COMMISSION_SETTINGS } from "../../commissions/types";
import { buildBundles, computeIndex } from "../../crm/model";
import { conv, daysAgo, entry, hoursAgo, iso, job, msg, NOW, quote, src } from "../../crm/__tests__/fixtures";
import type { SourceData } from "../../crm/types";
import type { SpendEntry } from "../../rentabilite/types";
import type { Block, MessagesRequest, MessagesResponse } from "../anthropic";
import { contextFrom } from "../context";

export { NOW };

export const JULIE = { firstName: "Julie", lastName: "Tremblay", email: "julie.tremblay@exemple.ca", phone: "514 555-0142" };
export const MARC = { firstName: "Marc", lastName: "Gagnon", email: "marc@exemple.ca", phone: "450 555-0177" };

/** Clé fictive : jamais une vraie clé. */
export const PROD = { NODE_ENV: "production", ANTHROPIC_API_KEY: "sk-ant-test-fictive-0000" } as const;

/** Sources du CRM avec des renseignements personnels dans le texte libre (notes, messages, textos). */
export function fixtureSource(): SourceData {
  const s = src({
    journal: [
      entry("soumission", daysAgo(12), { ...JULIE, postalCode: "H7N1A1", municipality: "Laval", message: "Rappelez-moi au 514-555-0142 ou à julie.tremblay@exemple.ca" }, { attribution: { channel: "google-ads", gclid: true } }),
      entry("thermomatch", daysAgo(9), { firstName: "Marc", email: MARC.email, phone: MARC.phone, postalCode: "J4K1A1" }, { attribution: { channel: "google-naturel", refHost: "google.com" } }),
      entry("contact", hoursAgo(1), { firstName: "Sophie", email: "sophie@exemple.ca", phone: "514 555-0188", message: "Mon numéro : 514-555-0188" }, { attribution: { channel: "direct" } }),
    ],
    quotes: [quote({ client: JULIE, sentAt: daysAgo(8), viewedAt: daysAgo(7), acceptedAt: daysAgo(5), mode: "cession" }), quote({ client: MARC, sentAt: daysAgo(6), viewedAt: daysAgo(5) })],
    jobs: [job({ client: JULIE, status: "planifie", scheduledFor: "2026-09-16", assignedInstallerId: "i_testinst001" })],
    installers: { i_testinst001: "Climatisation Exemple" },
    textos: [conv("+15145550166", [msg("in", hoursAgo(4), "Bonjour, mon courriel est nina@exemple.ca et mon cell 438 555-0111")], { unread: 1 })],
  });
  // Note d'appel sur la fiche de Julie (numéro et courriel dans le texte).
  const julie = buildBundles(s).find((b) => b.firstName === "Julie")!;
  s.crm.clients[julie.id] = {
    id: julie.id,
    keys: julie.keys,
    stageLog: [],
    tags: [],
    notes: [{ id: "n_testnote0001", at: iso(daysAgo(3)), by: "proprio@exemple.ca", text: "Rappeler au 514 555-0142 ou écrire à julie.tremblay@exemple.ca", kind: "appel" }],
    createdAt: iso(daysAgo(3)),
    updatedAt: iso(daysAgo(3)),
  };
  return s;
}

export function fixtureContext(spends: SpendEntry[] = []) {
  const s = fixtureSource();
  const index = computeIndex(buildBundles(s), s, NOW);
  const ctx = contextFrom(index, { invoices: [], settings: { ...DEFAULT_COMMISSION_SETTINGS } }, spends, NOW);
  const idOf = (first: string) => index.clients.find((c) => c.b.firstName === first)!.b.id;
  return { s, index, ctx, idOf };
}

/* ---------------- Fetch simulé (API Messages) ---------------- */

export const toolUse = (id: string, name: string, input: Record<string, unknown>): Block => ({ type: "tool_use", id, name, input });
export const text = (t: string): Block => ({ type: "text", text: t });

export function reply(content: Block[], stop: string = "tool_use", usage = { input_tokens: 1000, output_tokens: 200, cache_read_input_tokens: 0, cache_creation_input_tokens: 0 }): MessagesResponse {
  return { model: "claude-opus-5", content, stop_reason: stop, usage };
}

export interface Captured {
  url: string;
  headers: Record<string, string>;
  body: MessagesRequest;
  raw: string;
}

/** Rejoue les étapes dans l'ordre (la dernière se répète). Une étape peut renvoyer un statut HTTP d'erreur. */
export function scriptedFetch(steps: Array<MessagesResponse | { status: number; body?: string } | ((body: MessagesRequest) => MessagesResponse)>) {
  const calls: Captured[] = [];
  let i = 0;
  const fn = vi.fn(async (url: string | URL | Request, init?: RequestInit) => {
    const raw = String(init?.body ?? "");
    const body = JSON.parse(raw) as MessagesRequest;
    calls.push({ url: String(url), headers: Object.fromEntries(Object.entries((init?.headers ?? {}) as Record<string, string>)), body, raw });
    const step = steps[Math.min(i++, steps.length - 1)];
    if (typeof step === "function") return new Response(JSON.stringify(step(body)), { status: 200, headers: { "content-type": "application/json" } });
    if ("status" in step) return new Response(step.body ?? "{}", { status: step.status });
    return new Response(JSON.stringify(step), { status: 200, headers: { "content-type": "application/json" } });
  });
  return { fetch: fn as unknown as typeof fetch, spy: fn, calls };
}

/** Enlève les identifiants opaques (c_…, q_…, j_…) avant de chercher des suites de chiffres. */
export const withoutIds = (s: string) => s.replace(/\b[a-z]_[A-Za-z0-9_-]{8,16}\b/g, "ID");
export const PHONE_LIKE = /\d{3}[ .-]?\d{3}[ .-]?\d{4}/;
