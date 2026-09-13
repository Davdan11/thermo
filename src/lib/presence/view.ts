/* Vues du studio (calendrier du mois, compteurs, tons des statuts). Fonctions pures. */
import type { ChipTone } from "@/components/gestion/kit/Chip";
import { addDays, montrealDate, weekdayOf } from "./time";
import type { Post, PostStatus, PresenceData } from "./types";

export const MONTH_RE = /^\d{4}-(0[1-9]|1[0-2])$/;

export function shiftMonth(month: string, n: number): string {
  const [y, m] = month.split("-").map(Number);
  const d = new Date(Date.UTC(y, m - 1 + n, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

/** Semaines du mois, du lundi au dimanche (jours du mois voisin compris pour compléter). */
export function monthGrid(month: string): string[][] {
  const first = `${month}-01`;
  const start = addDays(first, -((weekdayOf(first) + 6) % 7));
  const weeks: string[][] = [];
  for (let w = 0; w < 6; w++) {
    const week = Array.from({ length: 7 }, (_, i) => addDays(start, w * 7 + i));
    weeks.push(week);
    if (week[6].slice(0, 7) > month || addDays(week[6], 1).slice(0, 7) > month) break;
  }
  return weeks;
}

export const STATUS_TONE: Record<PostStatus, ChipTone> = {
  brouillon: "muted",
  a_approuver: "warn",
  planifiee: "blue",
  publiee: "ok",
  echec: "bad",
  rejetee: "muted",
};

export function kpis(data: PresenceData, now: Date) {
  const today = montrealDate(now);
  const in30 = addDays(today, 30);
  const month = today.slice(0, 7);
  return {
    toApprove: data.posts.filter((p) => (p.status === "a_approuver" || p.status === "brouillon") && p.date >= today).length,
    planned: data.posts.filter((p) => p.status === "planifiee" && p.date >= today && p.date <= in30).length,
    publishedMonth: data.posts.filter((p) => p.status === "publiee" && p.publishedAt && montrealDate(new Date(p.publishedAt)).slice(0, 7) === month).length,
    failed: data.posts.filter((p) => p.status === "echec").length,
  };
}

export function byDate(posts: Post[]): Map<string, Post[]> {
  const out = new Map<string, Post[]>();
  for (const p of posts) {
    const list = out.get(p.date) ?? [];
    list.push(p);
    out.set(p.date, list);
  }
  return out;
}

/** Publication en attente dont le jour est passé (à replanifier ou à rejeter). */
export const isLate = (p: Post, now: Date) => (p.status === "a_approuver" || p.status === "brouillon" || p.status === "planifiee") && Date.parse(p.scheduledAt) < now.getTime() - 36 * 3600_000;
