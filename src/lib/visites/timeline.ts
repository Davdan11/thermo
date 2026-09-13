/* Chantier D — événements des visites photo pour la chronologie de la fiche client (« Photos demandées », « Photos reçues »). */
import { stamp } from "@/lib/gestion/crm/time";
import type { TimelineItem } from "@/lib/gestion/crm/timeline";
import { SEND_LABELS } from "@/lib/gestion/partenaires/types";
import { matchesVisit, type VisitMatch } from "./service";
import { readVisites } from "./store";
import type { VisitRequest } from "./types";

const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

export function visitItems(visits: VisitRequest[], now: Date): Array<TimelineItem & { when: string }> {
  const out: Array<TimelineItem & { when: string }> = [];
  for (const v of visits) {
    const href = v.quoteId ? `/gestion/soumissions/${v.quoteId}/modifier#photos-client` : `/gestion/soumissions/visites#${v.id}`;
    v.sends.forEach((s, i) => {
      const chans = [s.sms ? `texto ${SEND_LABELS[s.sms]}` : null, s.email ? `courriel ${SEND_LABELS[s.email]}` : null].filter(Boolean).join(", ");
      out.push({ key: `v:${v.id}:s${i}`, at: s.at, kind: "courriel", title: "Photos demandées au client", detail: chans ? chans.charAt(0).toUpperCase() + chans.slice(1) : undefined, href, tone: "muted", when: stamp(s.at, now) });
    });
    if (v.submittedAt) {
      const sugg = v.suggestions.length;
      out.push({
        key: `v:${v.id}:recue`,
        at: v.submittedAt,
        kind: "photos",
        title: "Photos reçues",
        detail: v.purgedAt ? "Supprimées depuis (durée de conservation)" : [plural(v.photos.length, "photo", "photos"), sugg ? plural(sugg, "suggestion à confirmer", "suggestions à confirmer") : null].filter(Boolean).join(" · "),
        href,
        tone: "orange",
        when: stamp(v.submittedAt, now),
      });
    }
  }
  return out;
}

/** Chronologie de la fiche + événements des visites, du plus récent au plus ancien. */
export async function withVisitItems<T extends TimelineItem & { when: string }>(timeline: T[], match: VisitMatch, now = new Date()): Promise<Array<TimelineItem & { when: string }>> {
  const data = await readVisites().catch(() => null);
  if (!data) return timeline;
  const extra = visitItems(data.requests.filter((v) => matchesVisit(v, match)), now);
  return extra.length ? [...timeline, ...extra].sort((a, b) => b.at.localeCompare(a.at)) : timeline;
}
