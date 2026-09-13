/* ==================================================================
   Automatisations : tout ce que l'outil fait tout seul, par groupe,
   avec son interrupteur, ses compteurs, ses derniers envois et le
   prochain envoi prévu. En tête : l'état du moteur (dernier passage,
   prochain passage) et ce qui manque pour que tout parte.
   ================================================================== */
import "@/components/gestion/argent/argent.css";
import type { Metadata } from "next";
import { AlertTriangle, Clock } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { automationsView, type AutomationRowDTO } from "@/lib/gestion/automatisations/views";
import { GROUP_LABELS, type AutomationGroup } from "@/lib/gestion/automatisations/registry";
import { formatDay } from "@/lib/soumissions/dates";
import { hm, localYmd, zoned } from "@/lib/gestion/crm/time";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { cx, plural } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { AutomationToggle, ReferralRewardForm, RunNowButton } from "@/components/gestion/argent/AutomationControls";
import { relTime, whenLabel } from "@/components/gestion/argent/labels";

export const metadata: Metadata = { title: "Automatisations" };

const STATUS_WORDS = { fait: "fait", echec: "en échec", ignore: "sans objet", "en-cours": "en cours" } as const;

function AutomationRow({ r, now, i }: { r: AutomationRowDTO; now: Date; i: number }) {
  return (
    <article className={cx("ar-auto", !r.enabled && "is-off")} style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }} aria-labelledby={`ar-${r.id}`}>
      <AutomationToggle id={r.id} enabled={r.enabled} label={r.label} />
      <div className="ar-auto__body">
        <h3 className="ar-auto__title" id={`ar-${r.id}`}>
          {r.label}
        </h3>
        <p className="ar-auto__desc">{r.description}</p>
        <div className="ar-auto__meta">
          <Chip tone={r.audience === "Client" ? "orange" : r.audience === "Installateur" ? "blue" : "ink"}>{r.audience}</Chip>
          <Chip tone="muted">{r.channels}</Chip>
          <span className="ar-auto__when">
            <Clock size={13} aria-hidden /> {r.when}
          </span>
        </div>
        {r.enabled && r.waiting ? <p className="ar-auto__wait">En attente : {r.waiting}.</p> : null}
        {r.recent.length ? (
          <details className="ar-auto__recent">
            <summary>Derniers envois</summary>
            <ol>
              {r.recent.map((e, k) => (
                <li key={`${e.at}-${k}`} className={`is-${e.status}`}>
                  <span>{whenLabel(e.at, now)}</span>
                  {e.detail} {e.status !== "fait" ? <em>({STATUS_WORDS[e.status]})</em> : null}
                </li>
              ))}
            </ol>
          </details>
        ) : (
          <p className="ar-auto__none">Aucun envoi pour l’instant.</p>
        )}
      </div>
      <dl className="ar-auto__stats">
        <div>
          <dt>Faits</dt>
          <dd>{r.done}</dd>
        </div>
        <div>
          <dt>7 jours</dt>
          <dd>{r.last7}</dd>
        </div>
        {r.failed ? (
          <div className="is-bad">
            <dt>Échecs</dt>
            <dd>{r.failed}</dd>
          </div>
        ) : null}
        {r.missed ? (
          <div>
            <dt>Manqués</dt>
            <dd>{r.missed}</dd>
          </div>
        ) : null}
        <div className="ar-auto__next">
          <dt>Prochain</dt>
          <dd>{!r.enabled ? "En pause" : r.next ? (Date.parse(r.next) <= now.getTime() ? "au prochain passage" : whenLabel(r.next, now)) : "rien de prévu"}</dd>
        </div>
      </dl>
    </article>
  );
}

export default async function AutomatisationsPage() {
  await requireAdmin();
  const now = new Date();
  const v = await automationsView(now);
  const groups = (Object.keys(GROUP_LABELS) as AutomationGroup[]).map((g) => ({ g, rows: v.rows.filter((r) => r.group === g) }));
  const active = v.rows.filter((r) => r.enabled).length;
  const last = v.lastTick;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Travail</p>
          <h1 className="k-h1">
            Automatisations <em>en marche</em>
          </h1>
          <p className="k-lead">Ce que l’outil fait tout seul, pour vous, vos clients et vos partenaires. Jamais deux fois le même message ; rien n’est envoyé à une personne désabonnée.</p>
        </div>
      </Reveal>

      <section className={cx("ar-engine", v.cronLate && "is-late")} aria-label="État du moteur">
        <svg className="ar-arcs" viewBox="0 0 260 260" aria-hidden>
          <circle cx="130" cy="130" r="126" />
          <circle cx="130" cy="130" r="92" />
          <circle cx="130" cy="130" r="58" />
        </svg>
        <div className="ar-engine__status">
          <span className="ar-engine__dot" aria-hidden />
          <div>
            <p className="ar-engine__title">{!last ? "Le moteur n’a pas encore tourné" : v.cronLate ? "Le moteur ne tourne plus" : "Le moteur tourne"}</p>
            <p className="ar-engine__sub">
              {last ? `Dernier passage ${relTime(last.at, now)} (${plural(last.done, "envoi", "envois")}${last.failed ? `, ${last.failed} en échec` : ""})` : "La tâche planifiée du serveur n’est pas encore installée."}
              {v.nextTickAt && !v.cronLate ? ` · prochain vers ${hm(zoned(new Date(v.nextTickAt)))}` : ""}
              {v.startedAt ? ` · en marche depuis le ${formatDay(localYmd(v.startedAt))}` : ""}
            </p>
          </div>
        </div>
        <dl className="ar-engine__stats">
          <div>
            <dt>Aujourd’hui</dt>
            <dd>{v.doneToday}</dd>
          </div>
          <div>
            <dt>Actives</dt>
            <dd>
              {active}/{v.rows.length}
            </dd>
          </div>
          <div>
            <dt>Envois</dt>
            <dd style={{ fontSize: 16, paddingTop: 6 }}>{v.live ? "Réels" : "Simulés"}</dd>
          </div>
        </dl>
        <RunNowButton />
      </section>

      {v.warnings.length ? (
        <ul className="ar-warn">
          {v.warnings.map((w) => (
            <li key={w}>
              <AlertTriangle size={15} aria-hidden /> {w}
            </li>
          ))}
        </ul>
      ) : null}

      {groups.map(({ g, rows }, gi) => (
        <section key={g} aria-label={GROUP_LABELS[g]}>
          <SectionHeader n={`0${gi + 1}`} title={GROUP_LABELS[g]} />
          <div className="ar-autos">
            {rows.map((r, i) => (
              <AutomationRow key={r.id} r={r} now={now} i={i} />
            ))}
          </div>
        </section>
      ))}

      <Card title="Programme de référence" sub={`${plural(v.referrals.links, "lien remis", "liens remis")} · ${plural(v.referrals.demands, "demande reçue", "demandes reçues")} par ces liens (attribution des demandes).`}>
        <ReferralRewardForm value={v.referralReward} />
      </Card>
    </>
  );
}
