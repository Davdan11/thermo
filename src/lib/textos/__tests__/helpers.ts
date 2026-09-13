/* Aides des tests des textos : requêtes Twilio signées comme Twilio le fait, dossier temporaire. */
import { createHmac } from "node:crypto";
import { mkdtemp, readdir, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { SITE_URL } from "@/lib/seo";

export const TOKEN = "jeton-de-test-twilio";

/** base64(HMAC-SHA1(jeton, URL complète + paramètres triés nom+valeur)). */
export function twilioSignature(url: string, params: Record<string, string>, token = TOKEN): string {
  const data = url + Object.keys(params).sort().map((k) => k + params[k]).join("");
  return createHmac("sha1", token).update(data).digest("base64");
}

/** Requête POST telle que Twilio l'envoie (signée pour l'adresse publique), reçue par le serveur local. */
export function twilioRequest(pathWithQuery: string, params: Record<string, string>, signature?: string | null): Request {
  const sig = signature === undefined ? twilioSignature(`${SITE_URL}${pathWithQuery}`, params) : signature;
  return new Request(`http://localhost:3001${pathWithQuery}`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded", ...(sig ? { "x-twilio-signature": sig } : {}) },
    body: new URLSearchParams(params).toString(),
  });
}

let seq = 0;
export function inboundParams(from: string, body: string, extra: Record<string, string> = {}): Record<string, string> {
  seq++;
  return { MessageSid: `SM${String(seq).padStart(32, "0")}`, AccountSid: "ACtest", From: from, To: "+14389003224", Body: body, NumMedia: "0", ...extra };
}

/** Texte du <Message> de la réponse TwiML, ou null si <Response/> est vide. */
export function replyOf(xmlText: string): string | null {
  return xmlText.match(/<Message>([\s\S]*)<\/Message>/)?.[1] ?? null;
}

export async function tempDir(): Promise<string> {
  return mkdtemp(path.join(tmpdir(), "thermo-textos-"));
}

export async function journalLines(dir: string): Promise<Array<Record<string, unknown>>> {
  const files = await readdir(dir).catch(() => [] as string[]);
  const out: Array<Record<string, unknown>> = [];
  for (const f of files.filter((x) => x.endsWith(".jsonl"))) {
    for (const line of (await readFile(path.join(dir, f), "utf8")).split("\n")) if (line.trim()) out.push(JSON.parse(line));
  }
  return out;
}

export function testEnv(dir: string, extra: Record<string, string> = {}): NodeJS.ProcessEnv {
  return {
    ...process.env,
    NODE_ENV: "test",
    TWILIO_AUTH_TOKEN: TOKEN,
    TWILIO_ACCOUNT_SID: "ACtest",
    TWILIO_PHONE_NUMBER: "+14389003224",
    TEXTOS_DATA_DIR: dir,
    GESTION_DATA_DIR: dir,
    LEAD_JOURNAL_DIR: path.join(dir, "leads"),
    TEXTOS_ENVOIS_DEV: "1",
    ADMIN_EMAILS: "proprio@exemple.ca",
    ...extra,
  };
}
