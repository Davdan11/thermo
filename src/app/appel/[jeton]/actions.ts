"use server";

/* ==================================================================
   Chantier T — lien du texto d'alerte au propriétaire (/appel/<jeton>).
   Le jeton signé et à durée limitée est revérifié à chaque action ;
   limite de fréquence par adresse IP. L'appel est masqué : le client
   voit le numéro du site. Aucune donnée personnelle renvoyée.
   ================================================================== */

import { headers } from "next/headers";
import { z } from "zod";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { getCallView, startMaskedCall, type CallView } from "@/lib/telephonie/masked-call";
import { LINK_TOKEN_RE } from "@/lib/telephonie/links";
import { appelLinkView } from "@/lib/telephonie/speed";
import { CALL_ID_RE, readTelephonie } from "@/lib/telephonie/store";

const launchIp = createLimiter({ limit: 6, windowMs: 10 * 60_000 });
const pollIp = createLimiter({ limit: 400, windowMs: 10 * 60_000 });

type Out = { ok: true; view: CallView } | { ok: false; error: string };

export async function launchFromLinkAction(token: unknown): Promise<Out> {
  const t = z.string().regex(LINK_TOKEN_RE).safeParse(token);
  if (!t.success) return { ok: false, error: "Lien invalide." };
  if (!launchIp.hit(ipFromHeaders(await headers()))) return { ok: false, error: "Trop d’essais. Réessayez dans quelques minutes." };
  const v = await appelLinkView(t.data);
  if (v.state !== "ok") return { ok: false, error: v.state === "expire" ? "Ce lien a expiré : ouvrez la fiche du client dans /gestion." : "Lien invalide." };
  return startMaskedCall({ kind: "lead", id: v.leadId }, "lien texto");
}

export async function linkCallStatusAction(token: unknown, callId: unknown): Promise<Out> {
  const p = z.object({ token: z.string().regex(LINK_TOKEN_RE), callId: z.string().regex(CALL_ID_RE) }).safeParse({ token, callId });
  if (!p.success) return { ok: false, error: "Demande invalide." };
  if (!pollIp.hit(ipFromHeaders(await headers()))) return { ok: false, error: "Trop de demandes." };
  const v = await appelLinkView(p.data.token);
  // Un appel ne se consulte qu'avec le jeton de SA demande.
  const call = v.state === "ok" ? (await readTelephonie()).calls.find((c) => c.id === p.data.callId && c.target.kind === "lead" && c.target.ref === v.leadId) : undefined;
  if (!call) return { ok: false, error: "Appel introuvable." };
  const view = await getCallView(call.id);
  return view ? { ok: true, view } : { ok: false, error: "Appel introuvable." };
}
