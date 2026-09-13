/* Panneau « État du site » (serveur) : dernier passage de la surveillance, 24 dernières heures,
   certificat, disque, pm2 et derniers incidents. Données : src/lib/gestion/surveillance.ts. */
import { Check, ChevronRight, Minus, TriangleAlert, X } from "lucide-react";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import type { SiteHealthView } from "@/lib/gestion/surveillance";

export function healthSummary(h: SiteHealthView): { tone: "ok" | "warn" | "bad" | "muted"; title: string } {
  if (!h.installed) return { tone: "muted", title: "Surveillance pas encore installée" };
  if (h.stale) return { tone: "warn", title: "Surveillance muette" };
  if (h.ok === false) return { tone: "bad", title: h.failing > 1 ? `${h.failing} problèmes critiques` : "Problème critique" };
  if (h.warnings) return { tone: "warn", title: h.warnings > 1 ? `En ligne · ${h.warnings} avertissements` : "En ligne · 1 avertissement" };
  return { tone: "ok", title: "Tout fonctionne" };
}

const pct = (x: number | null) => (x === null ? "—" : `${Math.floor(x * 1000) / 10} %`);

function Icon({ ok, niveau }: { ok: boolean | null; niveau: string }) {
  if (ok === true) return <Check size={16} className="g-checkrow__ico g-checkrow__ico--ok" aria-label="Réussi" />;
  if (ok === null) return <Minus size={16} className="g-checkrow__ico g-checkrow__ico--na" aria-label="Non vérifié" />;
  if (niveau === "avertissement") return <TriangleAlert size={16} className="g-checkrow__ico g-checkrow__ico--warn" aria-label="Avertissement" />;
  return <X size={16} className="g-checkrow__ico g-checkrow__ico--ko" aria-label="Échec" />;
}

const INCIDENT: Record<string, string> = { panne: "Panne", rappel: "Toujours en panne", retabli: "Rétabli" };

export function SiteHealthPanel({ h }: { h: SiteHealthView }) {
  const { tone, title } = healthSummary(h);
  const count = h.groups.reduce((t, g) => t + g.checks.length, 0);
  const problems = h.groups.flatMap((g) => g.checks.filter((c) => c.ok === false));
  const f = h.infos;
  return (
    <div className="g-card g-card__pad g-health" id="etat-du-site">
      <div className="g-health__head">
        <div className="g-health__status">
          <span className={`g-dot g-dot--${tone}`} aria-hidden />
          <div>
            <p className="g-eyebrow" style={{ margin: 0 }}>État du site</p>
            <h2 className="g-health__title">{title}</h2>
          </div>
        </div>
        <div className="g-health__when">
          {h.demo ? <span className="g-tag">Démonstration (développement)</span> : null}
          {h.lastWhen ? (
            <span>
              Dernière vérification : {h.lastWhen} ({h.lastAgo})
            </span>
          ) : null}
        </div>
      </div>

      {!h.installed ? (
        <div style={{ marginTop: 16 }}>
          <EmptyState compact title="Aucune vérification enregistrée." body="Le panneau se remplit dès que la surveillance (tâche cron aux 5 minutes) tourne sur le serveur." />
        </div>
      ) : (
        <>
          {h.stale ? <p className="g-note g-note--warn">La dernière vérification date de plus de 15 minutes : la tâche cron de surveillance ne tourne peut-être plus.</p> : null}

          <div className="g-strip" role="img" aria-label={`Disponibilité sur 24 heures : ${pct(h.uptime24h)}`}>
            {h.strip.map((c) => (
              <span key={c.key} className={`is-${c.state}`} title={`${c.label} : ${c.state === "ok" ? "tout fonctionne" : c.state === "ko" ? "problème détecté" : "aucune vérification"}`} />
            ))}
          </div>
          <div className="g-strip__legend">
            <span>il y a 24 h</span>
            <span>
              Disponibilité : {pct(h.uptime24h)} sur 24 h · {pct(h.uptime14d)} sur 14 jours
            </span>
            <span>maintenant</span>
          </div>

          <div className="g-facts">
            <div className={`g-fact${f.sslDays !== null && f.sslDays < 14 ? " g-fact--warn" : ""}`}>
              <span className="g-fact__l">Certificat SSL</span>
              <span className="g-fact__v">{f.ssl ?? "—"}</span>
              {f.sslDays !== null ? <span className="g-fact__s">encore {f.sslDays} jours</span> : null}
            </div>
            <div className={`g-fact${f.disk !== null && f.disk < 10 ? " g-fact--bad" : f.disk !== null && f.disk < 20 ? " g-fact--warn" : ""}`}>
              <span className="g-fact__l">Espace disque libre</span>
              <span className="g-fact__v">{f.disk !== null ? `${f.disk} %` : "—"}</span>
              <span className="g-fact__s">alerte sous 10 %</span>
            </div>
            <div className={`g-fact${f.pm2 && f.pm2 !== "online" ? " g-fact--bad" : ""}`}>
              <span className="g-fact__l">Application (pm2)</span>
              <span className="g-fact__v">{f.pm2 === "online" ? "en ligne" : (f.pm2 ?? "—")}</span>
              {f.restarts !== null ? <span className="g-fact__s">{f.restarts} redémarrages au total</span> : null}
            </div>
            <div className="g-fact">
              <span className="g-fact__l">Version en service</span>
              <span className="g-fact__v g-fact__v--mono">{f.version ?? "—"}</span>
            </div>
          </div>

          {problems.length ? (
            <>
              <h3 className="g-health__sub">À surveiller</h3>
              <ul className="g-problems">
                {problems.map((c) => (
                  <li key={c.id} className="g-checkrow">
                    <Icon ok={c.ok} niveau={c.niveau} />
                    <span>
                      {c.label}
                      <span className="g-checkrow__detail">{c.detail}</span>
                    </span>
                    <span className="g-checkrow__ms">{c.niveau === "critique" ? "critique" : "avertissement"}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <details className="g-details g-health__details">
            <summary>
              <ChevronRight size={16} aria-hidden /> Les {count} vérifications du dernier passage
            </summary>
            <div className="g-checks">
              {h.groups.map((g) => (
                <div key={g.id}>
                  <h3>{g.label}</h3>
                  <ul>
                    {g.checks.map((c) => (
                      <li key={c.id} className="g-checkrow">
                        <Icon ok={c.ok} niveau={c.niveau} />
                        <span>
                          {c.label}
                          <span className="g-checkrow__detail">{c.detail}</span>
                        </span>
                        <span className="g-checkrow__ms">{c.ms !== null && c.ok !== null ? `${c.ms} ms` : ""}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>

          <h3 className="g-health__sub">Derniers incidents</h3>
          {h.incidents.length ? (
            <ul className="g-incidents">
              {h.incidents.map((i) => (
                <li key={i.key}>
                  <span className={`g-tag ${i.type === "retabli" ? "g-tag--ok" : i.critical ? "g-tag--bad" : "g-tag--warn"}`}>{i.type === "panne" && !i.critical ? "Avertissement" : INCIDENT[i.type]}</span>
                  <span>{i.label}</span>
                  <time>{i.when}</time>
                </li>
              ))}
            </ul>
          ) : (
            <p className="g-count">Aucun incident sur 14 jours.</p>
          )}
        </>
      )}
    </div>
  );
}
