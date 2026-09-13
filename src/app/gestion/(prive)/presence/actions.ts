"use server";

/* ==================================================================
   Server Actions du studio de présence. Chacune : requireAdmin() →
   validation (identifiant, dates) → service → refresh(). Une action est
   joignable par un POST direct : la session est vérifiée ici.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import * as svc from "@/lib/presence/service";
import { SERIES_INFO } from "@/lib/presence/series";
import { POST_ID_RE, SERIES, type SeriesId } from "@/lib/presence/types";

export type PresenceResult = { ok: true; message: string } | { ok: false; error: string } | undefined;

const postId = z.string().regex(POST_ID_RE);
const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "");

function done(r: svc.Result): PresenceResult {
  refresh();
  return r.ok ? { ok: true, message: r.message } : { ok: false, error: r.error };
}

export async function prepareAction(): Promise<PresenceResult> {
  const s = await requireAdmin();
  return done(await svc.prepareDays(s.email));
}

export async function approveAction(id: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = postId.safeParse(id);
  return p.success ? done(await svc.approvePost(p.data, s.email)) : INVALID;
}

export async function rejectAction(id: unknown, reason: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = z.object({ id: postId, reason: z.string().max(300) }).safeParse({ id, reason });
  return p.success ? done(await svc.rejectPost(p.data.id, p.data.reason, s.email)) : INVALID;
}

export async function restoreAction(id: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = postId.safeParse(id);
  return p.success ? done(await svc.restorePost(p.data, s.email)) : INVALID;
}

export async function rescheduleAction(id: unknown, date: unknown, time: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = z.object({ id: postId, date: z.string().max(10), time: z.string().max(5) }).safeParse({ id, date, time });
  return p.success ? done(await svc.reschedulePost(p.data.id, p.data.date, p.data.time, s.email)) : INVALID;
}

export async function regenerateAction(id: unknown, mode: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = z.object({ id: postId, mode: z.enum(["tournure", "sujet"]) }).safeParse({ id, mode });
  return p.success ? done(await svc.regeneratePost(p.data.id, p.data.mode, s.email)) : INVALID;
}

export async function publishNowAction(id: unknown): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = postId.safeParse(id);
  if (!p.success) return INVALID;
  const r = await svc.publishNow(p.data, s.email);
  refresh();
  return r.ok ? { ok: true, message: r.message } : { ok: false, error: r.error };
}

export async function saveTextAction(_prev: PresenceResult, fd: FormData): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = z.object({ id: postId, text: z.string().max(svc.TEXT_MAX + 200), hashtags: z.string().max(400) }).safeParse({ id: str(fd, "id"), text: str(fd, "text"), hashtags: str(fd, "hashtags") });
  return p.success ? done(await svc.saveText(p.data.id, p.data.text, p.data.hashtags, s.email)) : INVALID;
}

export async function saveQuestionAction(_prev: PresenceResult, fd: FormData): Promise<PresenceResult> {
  const s = await requireAdmin();
  const p = z.object({ id: postId, question: z.string().max(600), answer: z.string().max(1800) }).safeParse({ id: str(fd, "id"), question: str(fd, "question"), answer: str(fd, "answer") });
  return p.success ? done(await svc.saveQuestion(p.data.id, p.data.question, p.data.answer, s.email)) : INVALID;
}

export async function saveSettingsAction(_prev: PresenceResult, fd: FormData): Promise<PresenceResult> {
  const s = await requireAdmin();
  const series: svc.SettingsInput["series"] = {};
  for (const id of SERIES as readonly SeriesId[]) {
    if (!SERIES_INFO[id].available) continue;
    series[id] = { enabled: fd.get(`${id}_enabled`) === "on", auto: fd.get(`${id}_auto`) === "on", time: str(fd, `${id}_time`).slice(0, 5), story: fd.get(`${id}_story`) === "on" };
  }
  const weeks = Number.parseInt(str(fd, "rotationWeeks"), 10);
  return done(await svc.saveSettings({ autoPublish: fd.get("autoPublish") === "on", rotationWeeks: Number.isFinite(weeks) ? weeks : 8, series, applyTimes: fd.get("applyTimes") === "on" }, s.email));
}
