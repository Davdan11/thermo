/* Chantier T — aides des tests : dossier temporaire, environnement fictif (numéros 555-01xx), Twilio et Gemini simulés.
   Aucun appel, texto ni courriel réel : fetch est toujours remplacé. */
import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { vi } from "vitest";
import { testEnv } from "@/lib/textos/__tests__/helpers";

/** Cellulaire du propriétaire (fictif) : ne doit jamais sortir du serveur. */
export const OWNER_CELL = "+15145550199";
export const OWNER_DIGITS = "5145550199";
/** Client fictif. */
export const CLIENT_PHONE = "+15145550142";
export const SITE = "+14389003224";

export function telEnv(dir: string, extra: Record<string, string> = {}): NodeJS.ProcessEnv {
  const env = testEnv(dir, { TWILIO_FORWARD_CELL: OWNER_CELL, ALERT_SMS_TO: OWNER_CELL, RELANCES_FILE: path.join(dir, "relances.json"), GEMINI_API_KEY: "", ...extra });
  delete env.ADMIN_SESSION_SECRET;
  delete env.TELEPHONIE_DATA_DIR;
  delete env.TELEPHONIE_CRON_SECRET;
  delete env.AUTOMATISATIONS_CRON_SECRET;
  return env;
}

/** Une demande dans le journal : crée le client dans le CRM. */
export async function addJournal(dir: string, kind: string, lead: Record<string, unknown>, at = new Date()): Promise<string> {
  const id = randomUUID();
  const file = path.join(dir, "leads", `${at.toISOString().slice(0, 7)}.jsonl`);
  await mkdir(path.dirname(file), { recursive: true });
  const prev = await readFile(file, "utf8").catch(() => "");
  await writeFile(file, prev + JSON.stringify({ id, at: at.toISOString(), kind, lead }) + "\n");
  return id;
}

export interface Captured {
  url: string;
  method: string;
  body: string;
  headers: Record<string, string>;
}

/** fetch simulé : Twilio (appels, textos, enregistrements) et Gemini. Chaque requête est gardée. */
export function mockFetch(handlers: { gemini?: (c: Captured) => Response; twilio?: (c: Captured) => Response | undefined } = {}) {
  const calls: Captured[] = [];
  let n = 0;
  const fn = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = String(input);
    const headers: Record<string, string> = {};
    new Headers(init?.headers).forEach((v, k) => (headers[k] = v));
    const c: Captured = { url, method: init?.method ?? "GET", body: typeof init?.body === "string" ? init.body : "", headers };
    calls.push(c);
    if (url.includes("generativelanguage.googleapis.com")) return handlers.gemini ? handlers.gemini(c) : new Response("{}", { status: 500 });
    const custom = handlers.twilio?.(c);
    if (custom) return custom;
    n++;
    if (url.endsWith("/Calls.json")) return Response.json({ sid: `CA${String(n).padStart(32, "0")}`, status: "queued" }, { status: 201 });
    if (url.endsWith("/Messages.json")) return Response.json({ sid: `SM${String(n).padStart(32, "0")}`, status: "queued" }, { status: 201 });
    if (url.endsWith(".mp3")) return new Response(new Uint8Array([1, 2, 3, 4]), { status: 200, headers: { "content-type": "audio/mpeg", "content-length": "4" } });
    if (c.method === "DELETE") return new Response(null, { status: 204 });
    if (/\/Calls\/CA[0-9a-f]{32}\.json$/.test(url)) return Response.json({ from: "+15145550142", direction: "inbound" });
    return new Response("{}", { status: 404 });
  });
  vi.stubGlobal("fetch", fn);
  const form = (c: Captured) => new URLSearchParams(c.body);
  return {
    fn,
    calls,
    sms: () => calls.filter((c) => c.url.endsWith("/Messages.json")).map((c) => ({ to: form(c).get("To"), from: form(c).get("From"), body: form(c).get("Body") ?? "" })),
    restCalls: () => calls.filter((c) => c.url.endsWith("/Calls.json")).map(form),
  };
}

export const geminiReply = (o: Record<string, unknown>) => Response.json({ candidates: [{ content: { parts: [{ text: JSON.stringify(o) }] } }] });

/** Toutes les lignes écrites dans la console pendant `fn`. */
export async function captureLogs<T>(fn: () => Promise<T>): Promise<{ result: T; text: string }> {
  const lines: string[] = [];
  const spies = (["log", "warn", "error", "info"] as const).map((m) => vi.spyOn(console, m).mockImplementation((...a: unknown[]) => void lines.push(a.map((x) => (x instanceof Error ? x.message : typeof x === "string" ? x : JSON.stringify(x))).join(" "))));
  try {
    const result = await fn();
    return { result, text: lines.join("\n") };
  } finally {
    for (const s of spies) s.mockRestore();
  }
}
