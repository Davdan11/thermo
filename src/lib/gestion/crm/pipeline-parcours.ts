/* ==================================================================
   Refonte R2 — page Pipeline : objet d'affichage (DTO) du parcours en
   12 étapes. Prénom, initiale, ville, région, montants, étapes : jamais
   de courriel ni de numéro. Construit sur l'index REÇU : un vendeur
   passe son index restreint (equipe/scope.ts), il ne voit que ses
   dossiers et leurs notes.
   Les filtres (vendeur, région, montant) s'appliquent dans le
   navigateur : quelques centaines de cartes légères, sans aller-retour.
   ================================================================== */

import { CHANNEL_LABELS } from "@/lib/attribution/core";
import { resolvePostalOffline } from "../geo";
import { isRegionCode, regionName } from "../regions";
import { taskDTO } from "./dashboard";
import type { ClientComputed, CrmIndex } from "./model";
import { ACTOR_LABELS, ACTORS, deadlineOf, elapsedFr, JOURNEY_STATES, LOSS_CAUSE_LABELS, LOSS_MOTIF_LABELS, MOVABLE, parcoursSettingsOf, stepDelay, stepLabel, stepNumber, STEP_TOTAL, type Actor, type JourneyState } from "./parcours";
import { priorityIndex, rankClients } from "./priorite";
import { daysBetweenYmd, localYmd } from "./time";

export interface JourneyCard {
  id: string;
  name: string;
  city: string;
  region: string | null;
  regionName: string | null;
  valueCents: number | null;
  state: JourneyState;
  /** 1 à 12 ; 0 : perdu. */
  n: number;
  since: string;
  /** « 6 h », « 4 jours ». */
  inStep: string;
  /** Délai d'alerte de l'étape dépassé. */
  late: boolean;
  actor: Actor | null;
  actorWhy: string;
  next: { title: string; due: string; overdue: boolean; href: string } | null;
  score: number | null;
  scoreLabel: string;
  urgency: number;
  blockers: string[];
  manual: boolean;
  reactivated: boolean;
  channel: string | null;
  vendorId: string | null;
  /** Ordre de priorité (0 : le plus prioritaire). */
  rank: number;
  /** Perdu : « Prix · Soumission refusée ». */
  lost: string | null;
}

export interface PipelineParcoursView {
  states: Array<{ state: JourneyState; label: string; n: number; cents: number; hidden: number; movable: boolean }>;
  actors: Array<{ actor: Actor; label: string; n: number; cents: number }>;
  /** Dossiers en cours sans action attendue (suivi sans tâche). */
  idle: number;
  cards: JourneyCard[];
  regions: Array<{ code: string; name: string }>;
  labels: Record<JourneyState, string>;
  /** Nombre d'étapes (12). */
  total: number;
  active: { n: number; cents: number };
}

/** Étapes fermées : au-delà de 90 jours, la carte n'est plus montrée (comptée à part), comme le pipeline d'origine. */
const CLOSED: ReadonlySet<JourneyState> = new Set(["paye", "suivi", "perdu"]);
const CLOSED_WINDOW_DAYS = 90;

function regionOf(c: ClientComputed): string | null {
  const j = c.journey?.jobId ? c.b.jobs.find((x) => x.id === c.journey!.jobId) : undefined;
  const fromJob = j?.region ?? c.b.jobs.find((x) => x.region)?.region ?? null;
  if (fromJob && isRegionCode(fromJob)) return fromJob;
  const geo = c.b.postalCode ? resolvePostalOffline(c.b.postalCode) : null;
  return geo?.region && isRegionCode(geo.region) ? geo.region : null;
}

export function buildPipelineView(index: CrmIndex): PipelineParcoursView {
  const now = index.now;
  const today = localYmd(now);
  const ps = parcoursSettingsOf(index.src.crm);
  const pr = priorityIndex(index);
  const labels = Object.fromEntries(JOURNEY_STATES.map((s) => [s, stepLabel(s, ps)])) as Record<JourneyState, string>;
  const ranked = rankClients(index).filter((c) => c.journey);
  const counts = new Map<JourneyState, { n: number; cents: number; hidden: number }>(JOURNEY_STATES.map((s) => [s, { n: 0, cents: 0, hidden: 0 }]));
  const regions = new Map<string, string>();
  const cards: JourneyCard[] = [];
  ranked.forEach((c, rank) => {
    const j = c.journey!;
    const row = counts.get(j.state)!;
    row.n++;
    row.cents += c.valueCents ?? 0;
    if (CLOSED.has(j.state) && daysBetweenYmd(localYmd(j.since), today) > CLOSED_WINDOW_DAYS) {
      row.hidden++;
      return;
    }
    const p = pr.get(c.b.id);
    const d = j.state === "perdu" ? null : stepDelay(j.state, ps, index.settings);
    const first = c.tasks[0];
    const t = first ? taskDTO(first, index, now) : null;
    const region = regionOf(c);
    if (region) regions.set(region, regionName(region));
    cards.push({
      id: c.b.id,
      name: c.b.firstName ? `${c.b.firstName}${c.b.lastName ? ` ${c.b.lastName.charAt(0)}.` : ""}` : "Sans nom",
      city: c.b.city,
      region,
      regionName: region ? regionName(region) : null,
      valueCents: c.valueCents,
      state: j.state,
      n: stepNumber(j.state),
      since: j.since,
      inStep: elapsedFr(j.since, now),
      late: Boolean(d && deadlineOf(j.since, d).getTime() <= now.getTime()),
      actor: j.actor,
      actorWhy: j.actorWhy,
      next: t ? { title: t.title, due: t.due, overdue: t.overdue, href: t.href } : j.state === "perdu" ? null : { title: j.actorWhy, due: "", overdue: false, href: `/gestion/clients/${c.b.id}` },
      score: p?.score ?? null,
      scoreLabel: p?.label ?? "À définir",
      urgency: p?.urgency ?? 1,
      blockers: j.blockers,
      manual: j.manual,
      reactivated: j.reactivated,
      channel: c.b.firstChannel ? CHANNEL_LABELS[c.b.firstChannel] : null,
      vendorId: c.b.record?.assignedTo?.userId ?? null,
      rank,
      lost: j.lost ? [j.lost.cause ? LOSS_CAUSE_LABELS[j.lost.cause] : null, LOSS_MOTIF_LABELS[j.lost.motif]].filter(Boolean).join(" · ") : null,
    });
  });
  const open = ranked.filter((c) => c.journey!.state !== "perdu");
  const actors = ACTORS.map((a) => {
    const list = open.filter((c) => c.journey!.actor === a);
    return { actor: a, label: ACTOR_LABELS[a], n: list.length, cents: list.reduce((s, c) => s + (c.valueCents ?? 0), 0) };
  });
  const active = open.filter((c) => !CLOSED.has(c.journey!.state));
  return {
    states: JOURNEY_STATES.map((s) => ({ state: s, label: labels[s], ...counts.get(s)!, movable: MOVABLE.includes(s) })),
    actors,
    idle: open.filter((c) => !c.journey!.actor).length,
    cards,
    regions: [...regions.entries()].map(([code, name]) => ({ code, name })).sort((a, b) => a.name.localeCompare(b.name, "fr-CA")),
    labels,
    total: STEP_TOTAL,
    active: { n: active.length, cents: active.reduce((s, c) => s + (c.valueCents ?? 0), 0) },
  };
}
