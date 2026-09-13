/* ==================================================================
   Chantier S — opérations sur la session courante (Server Actions
   seulement : elles écrivent des cookies).
     - markSecondFactorDone : après un bon code, le jeton est re-signé
       avec la marque « 2e étape faite » (même identifiant, même
       expiration) ; appareil de confiance en option.
     - reissueAfterRevokeAll : après « Déconnecter partout », la session
       courante reçoit un nouveau jeton pour rester ouverte.
     - requireRecentSecondFactor : accès sensibles (clés, désactivation).
   ================================================================== */

import { randomBytes } from "node:crypto";
import { cookies, headers } from "next/headers";
import { getSessionSecret } from "../auth/secret";
import { SESSION_COOKIE, signSessionPayload, type SessionPayload } from "../auth/session-token";
import { getSessionState, sessionCookieOptions } from "../auth/dal";
import { ipFromHeaders } from "../rate-limit";
import { hasRecentSecondFactor } from "./deux-etapes";
import { createTrustedDevice, DEVICE_COOKIE, recordSession, type RequestMeta } from "./sessions";
import type { MfaMethod } from "./store";

export async function requestMeta(): Promise<RequestMeta> {
  const h = await headers();
  return { ip: ipFromHeaders(h), ua: h.get("user-agent") };
}

async function setSessionCookie(p: SessionPayload, nowSec: number): Promise<void> {
  const token = signSessionPayload(p, await getSessionSecret());
  (await cookies()).set(SESSION_COOKIE, token, { ...sessionCookieOptions(), maxAge: Math.max(60, p.exp - nowSec) });
}

/** La 2e étape vient d'être réussie : marque la session (et, si demandé, fait confiance à l'appareil). */
export async function markSecondFactorDone(method: MfaMethod, opts: { trustDevice?: boolean; now?: Date } = {}): Promise<boolean> {
  const state = await getSessionState();
  if (state.status === "none") return false;
  const now = opts.now ?? new Date();
  const nowSec = Math.floor(now.getTime() / 1000);
  const p: SessionPayload = { ...state.payload, mfa: nowSec, mm: method };
  await setSessionCookie(p, nowSec);
  const meta = await requestMeta();
  await recordSession(p, meta, now.getTime(), method);
  if (opts.trustDevice) {
    const dev = await createTrustedDevice(p.email, meta, now);
    if (dev) (await cookies()).set(DEVICE_COOKIE, dev.token, { ...sessionCookieOptions(), sameSite: "strict", maxAge: dev.maxAge });
  }
  return true;
}

/** Après « Déconnecter partout » : nouveau jeton (nouvel identifiant) pour la session courante. */
export async function reissueAfterRevokeAll(now = new Date()): Promise<void> {
  const state = await getSessionState();
  if (state.status !== "ok") return;
  const nowSec = Math.floor(now.getTime() / 1000);
  const p: SessionPayload = { ...state.payload, sid: randomBytes(9).toString("base64url"), iat: nowSec };
  await setSessionCookie(p, nowSec);
  await recordSession(p, await requestMeta(), now.getTime());
  (await cookies()).set(DEVICE_COOKIE, "", { ...sessionCookieOptions(), maxAge: 0 });
}

/** Session courante avec une 2e étape par code il y a moins de 10 minutes. */
export async function hasRecentStepUp(now = Date.now()): Promise<boolean> {
  const state = await getSessionState();
  return state.status === "ok" && hasRecentSecondFactor(state.payload, now);
}
