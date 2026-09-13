"use server";

/* ==================================================================
   Chantier T — le client choisit son moment de rappel (/rappel/<jeton>).
   Jeton signé revérifié, limite de fréquence par adresse IP, créneau
   validé contre ceux réglés dans /gestion. Crée une tâche datée dans
   le CRM (une seule fois par demande).
   ================================================================== */

import { headers } from "next/headers";
import { z } from "zod";
import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { LINK_TOKEN_RE } from "@/lib/telephonie/links";
import { OPTION_ID_RE } from "@/lib/telephonie/plan";
import { chooseCallback } from "@/lib/telephonie/speed";

const chooseIp = createLimiter({ limit: 20, windowMs: 10 * 60_000 });

export type ChooseState = { ok: true; label: string } | { ok: false; error: string } | undefined;

export async function chooseSlotAction(token: string, _prev: ChooseState, fd: FormData): Promise<ChooseState> {
  const p = z.object({ token: z.string().regex(LINK_TOKEN_RE), option: z.string().regex(OPTION_ID_RE) }).safeParse({ token, option: String(fd.get("option") ?? "") });
  if (!p.success) return { ok: false, error: "Choisissez un moment dans la liste." };
  if (!chooseIp.hit(ipFromHeaders(await headers()))) return { ok: false, error: "Trop d’essais. Réessayez dans quelques minutes." };
  return chooseCallback(p.data.token, p.data.option);
}
