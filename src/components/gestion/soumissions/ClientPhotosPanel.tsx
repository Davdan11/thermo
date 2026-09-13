"use client";

/* ==================================================================
   Chantier D — panneau « Photos du client » du créateur.
   Montre les visites photo de la soumission (ou du client relié, ou
   de ses coordonnées) : photos par étape, réponses du client et
   suggestions de la lecture automatique, avec leur confiance et leur
   photo source. « Appliquer » pose la valeur dans UN champ, sur clic
   seulement : jamais rien d'appliqué tout seul. Les détails
   facultatifs (accès, contraintes, présence) écrits par le client
   remplissent les champs encore vides (le propriétaire les voit et
   les modifie).
   ================================================================== */

import { useCallback, useEffect, useRef, useState } from "react";
import { Camera, Check, RefreshCw, Sparkles, X } from "lucide-react";
import { decideSuggestionAction, retryVisionAction, visitsPanelAction } from "@/app/gestion/soumissions/visites/actions";
import type { VisitAdminDTO } from "@/lib/visites/service";
import { STEP_IDS, stepOf, type VisitAnswers } from "@/lib/visites/types";
import "./photos-client.css";

export type ApplyField = "panelCapacity" | "wallMaterial" | "outdoorLocation" | "oldSystem" | "propertyType" | "yearBuilt" | "floors" | "basement" | "rooms" | "heating";
export type ApplyValue = string | number | boolean | string[];

export interface ClientPhotosPanelProps {
  quoteId: string | null;
  clientId: string | null;
  phone: string;
  email: string;
  /** Change à chaque nouvelle demande : le panneau se recharge. */
  refreshKey: number;
  onApply: (field: ApplyField, value: ApplyValue, label: string) => void;
  /** Réponses d'une visite reçue (une fois par visite) : détails facultatifs encore vides. */
  onAnswers: (visitId: string, answers: VisitAnswers) => void;
}

const when = (iso: string | null) => (iso ? new Date(iso).toLocaleString("fr-CA", { day: "numeric", month: "long", hour: "numeric", minute: "2-digit" }) : "");
const tone = (s: VisitAdminDTO["status"]) => (s === "recue" ? "ok" : s === "ouverte" ? "orange" : s === "supprimee" || s === "expiree" ? "muted" : undefined);

/** Réponses du client proposées comme suggestions (un clic chacune). */
function answerSuggestions(a: VisitAnswers | null): Array<{ key: string; field: ApplyField; label: string; shown: string; value: ApplyValue }> {
  if (!a) return [];
  const out: Array<{ key: string; field: ApplyField; label: string; shown: string; value: ApplyValue }> = [];
  if (a.propertyType) out.push({ key: "propertyType", field: "propertyType", label: "Type de propriété", shown: a.propertyType, value: a.propertyType });
  if (a.yearBuilt) out.push({ key: "yearBuilt", field: "yearBuilt", label: "Année de construction", shown: a.yearBuilt, value: a.yearBuilt });
  if (a.floors !== null) out.push({ key: "floors", field: "floors", label: "Niveaux hors sol", shown: String(a.floors), value: a.floors });
  if (a.basement) out.push({ key: "basement", field: "basement", label: "Sous-sol", shown: a.basement === "oui" ? "Oui" : "Non", value: a.basement === "oui" });
  if (a.rooms.length) out.push({ key: "rooms", field: "rooms", label: "Pièces des têtes", shown: a.rooms.map((r, i) => `${i + 1}. ${r}`).join(", "), value: a.rooms });
  if (a.heating.length) out.push({ key: "heating", field: "heating", label: "Chauffage actuel (notes internes)", shown: a.heating.join(", "), value: a.heating });
  return out;
}

export function ClientPhotosPanel(p: ClientPhotosPanelProps) {
  const [visits, setVisits] = useState<VisitAdminDTO[] | null>(null);
  const [zoom, setZoom] = useState<string | null>(null);
  const [done, setDone] = useState<Record<string, "appliquee" | "ignoree">>({});
  const [msg, setMsg] = useState<string | null>(null);
  const seen = useRef(new Set<string>());
  const { quoteId, clientId, phone, email, onAnswers } = p;

  const fetchVisits = useCallback(() => visitsPanelAction({ quoteId, clientId, phone, email }).catch(() => null), [quoteId, clientId, phone, email]);
  const accept = useCallback(
    (r: Awaited<ReturnType<typeof visitsPanelAction>> | null) => {
      if (!r?.ok) return;
      setVisits(r.visits);
      for (const v of r.visits) {
        if (v.answers && v.submittedAt && !seen.current.has(v.id)) {
          seen.current.add(v.id);
          onAnswers(v.id, v.answers);
        }
      }
    },
    [onAnswers],
  );
  const load = useCallback(() => fetchVisits().then(accept), [fetchVisits, accept]);

  useEffect(() => {
    let alive = true;
    void fetchVisits().then((r) => {
      if (alive) accept(r);
    });
    return () => {
      alive = false;
    };
  }, [fetchVisits, accept, p.refreshKey]);

  // Tant qu'une visite attend le client ou la lecture : nouvelle vérification toutes les 30 s.
  const waiting = visits?.some((v) => ((v.status === "envoyee" || v.status === "ouverte") && !v.submittedAt) || v.ai.state === "attente" || v.ai.state === "en-cours");
  useEffect(() => {
    if (!waiting) return;
    const t = window.setInterval(() => void load(), 30_000);
    return () => window.clearInterval(t);
  }, [waiting, load]);

  if (!visits || !visits.length) return null;

  const decide = async (visitId: string, s: VisitAdminDTO["suggestions"][number], decision: "appliquee" | "ignoree") => {
    if (decision === "appliquee") p.onApply(s.field as ApplyField, s.value, s.label);
    setDone((d) => ({ ...d, [s.id]: decision }));
    const r = await decideSuggestionAction({ visitId, suggestionId: s.id, decision }).catch(() => null);
    if (r && !r.ok) setMsg(r.error);
  };

  return (
    <section id="photos-client" className="sq-step" aria-labelledby="photos-client-t">
      <div className="sq-step__head">
        <span className="sq-step__n" aria-hidden>
          <Camera size={16} />
        </span>
        <div>
          <h2 id="photos-client-t" className="sq-step__title">
            Photos du client
          </h2>
          <p className="sq-step__hint">Rien n’est appliqué tout seul : « Appliquer » pose une valeur dans un champ, que vous pouvez encore changer. Aucune mesure n’est devinée.</p>
        </div>
      </div>
      {msg ? <p className="g-error">{msg}</p> : null}
      {visits.map((v, vi) => {
        const answerSugg = answerSuggestions(v.answers);
        return (
          <article key={v.id} className="sq-d-visit" style={{ ["--i" as string]: vi }}>
            <div className="sq-d-visit__head">
              <span className="sq-d-chip" data-tone={tone(v.status)}>
                {v.statusLabel}
              </span>
              <span className="g-hint" style={{ margin: 0 }}>
                {v.submittedAt ? `Reçues le ${when(v.submittedAt)}` : v.openedAt ? `Ouverte le ${when(v.openedAt)}` : `Demandée le ${when(v.createdAt)}`}
                {v.purgedAt ? "" : ` · supprimées le ${new Date(v.purgeAt).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric" })}`}
              </span>
            </div>

            {v.photos.length ? (
              STEP_IDS.map((step) => {
                const list = v.photos.filter((ph) => ph.step === step);
                if (!list.length) return null;
                const units = [...new Set(list.map((ph) => ph.unit))];
                return units.map((u) => (
                  <div key={`${step}-${u ?? "x"}`} className="sq-d-group">
                    <p className="sq-d-group__t">{stepOf(step).perUnit ? `Pièce ${(u ?? 0) + 1}${v.answers?.rooms[u ?? 0] ? ` · ${v.answers.rooms[u ?? 0]}` : ""}` : stepOf(step).short}</p>
                    <div className="sq-d-photos">
                      {list
                        .filter((ph) => ph.unit === u)
                        .map((ph, i) => (
                          <button key={ph.id} type="button" className="sq-d-photo" style={{ ["--i" as string]: i }} onClick={() => setZoom(ph.url)} aria-label={`Agrandir : ${ph.stepLabel}`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ph.url} alt="" loading="lazy" />
                          </button>
                        ))}
                    </div>
                  </div>
                ));
              })
            ) : v.submittedAt ? (
              <p className="g-hint">Aucune photo {v.purgedAt ? "(supprimées : durée de conservation)" : ""}.</p>
            ) : (
              <p className="g-hint">En attente du client.</p>
            )}

            {v.submittedAt ? (
              <p className="g-hint" style={{ margin: "10px 0 0", display: "flex", alignItems: "center", gap: 6 }}>
                <Sparkles size={14} aria-hidden /> {v.ai.label}
                {v.ai.state === "echec" || v.ai.state === "sans-cle" || v.ai.state === "desactive" ? (
                  <button type="button" className="g-btn g-btn--quiet" onClick={async () => { await retryVisionAction(v.id); void load(); }}>
                    <RefreshCw size={14} aria-hidden /> Relancer
                  </button>
                ) : null}
              </p>
            ) : null}

            {v.suggestions.length || answerSugg.length ? (
              <ul className="sq-d-sugg">
                {v.suggestions.map((s, i) => {
                  const d = done[s.id] ?? s.decision;
                  return (
                    <li key={s.id} data-done={d === "appliquee"} style={{ ["--i" as string]: i }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="sq-d-sugg__img" src={s.photoUrl} alt="Photo source" loading="lazy" onClick={() => setZoom(s.photoUrl)} />
                      <span>
                        <span className="sq-d-sugg__k">{s.label} · lecture automatique</span>
                        <span className="sq-d-sugg__v">{s.value}</span>
                        <span className="sq-d-sugg__why">Confiance {Math.round(s.confidence * 100)} % · à vérifier sur la photo</span>
                      </span>
                      <span className="sq-d-sugg__btns">
                        {d === "appliquee" ? (
                          <span className="sq-d-chip" data-tone="ok">
                            <Check size={13} aria-hidden /> Appliquée
                          </span>
                        ) : d === "ignoree" ? (
                          <span className="sq-d-chip" data-tone="muted">
                            Ignorée
                          </span>
                        ) : null}
                        <button type="button" className="g-btn g-btn--quiet" onClick={() => void decide(v.id, s, "appliquee")}>
                          <Check size={15} aria-hidden /> Appliquer
                        </button>
                        {d !== "ignoree" ? (
                          <button type="button" className="g-btn g-btn--quiet" onClick={() => void decide(v.id, s, "ignoree")}>
                            <X size={15} aria-hidden /> Ignorer
                          </button>
                        ) : null}
                      </span>
                    </li>
                  );
                })}
                {answerSugg.map((s) => {
                  const key = `${v.id}:${s.key}`;
                  return (
                    <li key={key} data-done={done[key] === "appliquee"} style={{ gridTemplateColumns: "1fr" }}>
                      <span>
                        <span className="sq-d-sugg__k">{s.label} · réponse du client</span>
                        <span className="sq-d-sugg__v">{s.shown}</span>
                      </span>
                      <span className="sq-d-sugg__btns">
                        {done[key] === "appliquee" ? (
                          <span className="sq-d-chip" data-tone="ok">
                            <Check size={13} aria-hidden /> Appliquée
                          </span>
                        ) : null}
                        <button
                          type="button"
                          className="g-btn g-btn--quiet"
                          onClick={() => {
                            p.onApply(s.field, s.value, s.label);
                            setDone((dd) => ({ ...dd, [key]: "appliquee" }));
                          }}
                        >
                          <Check size={15} aria-hidden /> Appliquer
                        </button>
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : null}

            {v.answers && (v.answers.access || v.answers.constraints || v.answers.presence || v.answers.notes) ? (
              <dl className="sq-d-answers">
                {v.answers.access ? (
                  <div>
                    <dt>Accès</dt>
                    <dd>{v.answers.access}</dd>
                  </div>
                ) : null}
                {v.answers.constraints ? (
                  <div>
                    <dt>Contraintes</dt>
                    <dd>{v.answers.constraints}</dd>
                  </div>
                ) : null}
                {v.answers.presence ? (
                  <div>
                    <dt>Présence</dt>
                    <dd>{v.answers.presence}</dd>
                  </div>
                ) : null}
                {v.answers.notes ? (
                  <div>
                    <dt>Message</dt>
                    <dd>{v.answers.notes}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
          </article>
        );
      })}
      {zoom ? (
        <button type="button" className="sq-d-zoom" onClick={() => setZoom(null)} aria-label="Fermer la photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={zoom} alt="Photo du client" />
        </button>
      ) : null}
    </section>
  );
}
