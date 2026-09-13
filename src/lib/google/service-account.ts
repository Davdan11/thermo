/* ==================================================================
   Compte de service Google : jeton d'accès OAuth 2.0 par assertion JWT
   signée RS256 (node:crypto, sans dépendance).
   https://developers.google.com/identity/protocols/oauth2/service-account

   Utilisé par la Search Console (lecture seule). Identifiants, dans l'ordre :
     1. GSC_SERVICE_ACCOUNT_JSON : le fichier JSON de la clé (texte ou base64) ;
     2. GSC_SERVICE_ACCOUNT_EMAIL + GSC_SERVICE_ACCOUNT_KEY ;
     3. GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_SERVICE_ACCOUNT_KEY (le compte
        de l'agenda, déjà en place : réutilisé tel quel).
   Pas de « sub » : le compte de service lit la Search Console en son nom,
   comme utilisateur ajouté à la propriété (aucune délégation de domaine).
   Aucune clé n'apparaît dans un message d'erreur ni dans un journal.
   Aucun appel réseau hors production.
   ================================================================== */

import { createSign } from "node:crypto";

export const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";

export type AccountSource = "GSC_SERVICE_ACCOUNT_JSON" | "GSC_SERVICE_ACCOUNT_EMAIL" | "GOOGLE_SERVICE_ACCOUNT_EMAIL";

export interface ServiceAccount {
  clientEmail: string;
  privateKey: string;
  source: AccountSource;
}

/** PEM en clair (« \n » échappés acceptés) ou encodé en base64. */
export function normalizePem(raw: string | undefined | null): string {
  let k = (raw ?? "").trim().replace(/^"|"$/g, "");
  if (k && !k.includes("BEGIN")) {
    try {
      k = Buffer.from(k, "base64").toString("utf8");
    } catch {
      /* laissé tel quel */
    }
  }
  return k.replace(/\\n/g, "\n").trim();
}

function parseJson(raw: string): { client_email?: string; private_key?: string } | null {
  const txt = raw.trim();
  for (const candidate of [txt, (() => { try { return Buffer.from(txt, "base64").toString("utf8"); } catch { return ""; } })()]) {
    try {
      const j = JSON.parse(candidate) as { client_email?: string; private_key?: string };
      if (j && typeof j === "object") return j;
    } catch {
      /* essai suivant */
    }
  }
  return null;
}

/** Compte de service utilisable par la Search Console, ou null s'il manque l'adresse ou la clé. */
export function searchConsoleAccount(env: NodeJS.ProcessEnv = process.env): ServiceAccount | null {
  const json = env.GSC_SERVICE_ACCOUNT_JSON?.trim();
  if (json) {
    const j = parseJson(json);
    const key = normalizePem(j?.private_key);
    if (j?.client_email && key.includes("PRIVATE KEY")) return { clientEmail: j.client_email.trim(), privateKey: key, source: "GSC_SERVICE_ACCOUNT_JSON" };
  }
  const gscEmail = env.GSC_SERVICE_ACCOUNT_EMAIL?.trim();
  const gscKey = normalizePem(env.GSC_SERVICE_ACCOUNT_KEY);
  if (gscEmail && gscKey.includes("PRIVATE KEY")) return { clientEmail: gscEmail, privateKey: gscKey, source: "GSC_SERVICE_ACCOUNT_EMAIL" };
  const email = env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const key = normalizePem(env.GOOGLE_SERVICE_ACCOUNT_KEY);
  if (email && key.includes("PRIVATE KEY")) return { clientEmail: email, privateKey: key, source: "GOOGLE_SERVICE_ACCOUNT_EMAIL" };
  return null;
}

/** Adresse du compte de service à afficher (même si la clé manque), sinon null. */
export function serviceAccountEmail(env: NodeJS.ProcessEnv = process.env): string | null {
  const json = env.GSC_SERVICE_ACCOUNT_JSON?.trim();
  const fromJson = json ? parseJson(json)?.client_email?.trim() : undefined;
  return fromJson || env.GSC_SERVICE_ACCOUNT_EMAIL?.trim() || env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() || null;
}

export const b64url = (input: string | Buffer): string => Buffer.from(input).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");

/** Assertion JWT signée RS256 pour l'échange contre un jeton d'accès. */
export function signAssertion(account: Pick<ServiceAccount, "clientEmail" | "privateKey">, scope: string, nowSeconds: number): string {
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({ iss: account.clientEmail, scope, aud: GOOGLE_TOKEN_URL, iat: nowSeconds, exp: nowSeconds + 3600 }));
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  return `${header}.${claims}.${b64url(signer.sign(account.privateKey))}`;
}

const tokens = new Map<string, { token: string; exp: number }>();

/** Pour les tests. */
export function resetTokenCache(): void {
  tokens.clear();
}

export class GoogleAuthError extends Error {
  constructor(message: string, readonly status: number | null) {
    super(message);
    this.name = "GoogleAuthError";
  }
}

/** Jeton d'accès, gardé en mémoire jusqu'à une minute de son expiration. Refuse hors production. */
export async function accessToken(account: ServiceAccount, scope: string, o: { fetchImpl?: typeof fetch; env?: NodeJS.ProcessEnv; now?: () => number } = {}): Promise<string> {
  if ((o.env ?? process.env).NODE_ENV !== "production") throw new GoogleAuthError("hors production : aucune requête vers Google", null);
  const now = o.now ?? Date.now;
  const id = `${account.clientEmail}|${scope}`;
  const cached = tokens.get(id);
  if (cached && cached.exp > now() + 60_000) return cached.token;
  const assertion = signAssertion(account, scope, Math.floor(now() / 1000));
  const res = await (o.fetchImpl ?? fetch)(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }),
    cache: "no-store",
    signal: AbortSignal.timeout(20_000),
  });
  const data = (await res.json().catch(() => ({}))) as { access_token?: string; expires_in?: number; error?: string; error_description?: string };
  if (!res.ok || !data.access_token) {
    throw new GoogleAuthError(`jeton Google refusé (${res.status}) : ${data.error ?? ""} ${data.error_description ?? ""}`.trim(), res.status);
  }
  tokens.set(id, { token: data.access_token, exp: now() + (data.expires_in ?? 3600) * 1000 });
  return data.access_token;
}
