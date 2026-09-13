"use client";

/* ==================================================================
   Document de soumission présenté au client (/devis/[jeton]) et à
   l'aperçu de l'outil. Un seul composant : les options cochées mettent
   à jour, en direct, les lignes, les totaux, l'aide LogisVert, le
   paiement et le résumé d'acceptation.
   Ordre des sections : projet, plan d'installation, machine, inclus /
   non inclus, hypothèses, date, prix, paiement, garanties, conditions,
   acceptation ; identité de l'entreprise au pied (sur chaque page
   imprimée).
   Accepter, Refuser et « J'ai une question » sont des formulaires POST
   ordinaires (fonctionnent sans JavaScript). La consultation est notée
   par un POST une fois la page affichée : l'affichage lui-même (GET)
   ne change rien.
   ================================================================== */

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, ArrowUpRight, Check, CircleHelp, Clock, Printer, ShieldCheck, X } from "lucide-react";
import { formatDateTime, formatDay } from "@/lib/soumissions/dates";
import { formatNumber, money } from "@/lib/soumissions/money";
import { extraLength, floorLabel, lengthText, qtyText, whenText } from "@/lib/soumissions/present";
import { computeTotals } from "@/lib/soumissions/totals";
import { choiceText } from "@/lib/soumissions/choices";
import { ELECTRICIAN_LABELS, STATUS_LABELS, type EffectiveStatus, type QuoteDocument } from "@/lib/soumissions/types";
import { Rise, RollingMoney } from "./motion";
import { Schematic } from "./Schematic";
import { LOGISVERT_NOTICE, PLACEHOLDER_RE, PRESENTER_FALLBACK } from "@/lib/soumissions/config";

/** Texte prêt à montrer au client : rempli et sans marqueur « [À COMPLÉTER…] ». */
const ready = (t: string | null | undefined): t is string => Boolean(t && t.trim()) && !PLACEHOLDER_RE.test(t as string);

export interface DocumentViewProps {
  doc: QuoteDocument;
  mode: "client" | "apercu";
  status: EffectiveStatus;
  canRespond: boolean;
  asOf: string;
  initialSelection: string[];
  contentHash: string;
  /** Préfixe des photos : /devis/<jeton>/photo/ ou /gestion/soumissions/photo/. */
  photoBase: string;
  /** Adresse du formulaire de réponse (POST), ou null (aperçu). */
  action: string | null;
  /** Adresse du POST de consultation, ou null. */
  beaconUrl: string | null;
  acceptance: { at: string; typedName: string; snapshotHash: string; totalCents: number } | null;
  refusal: { at: string } | null;
  replacedBy: { v: number; href: string } | null;
  flash: { tone: "ok" | "bad" | "info"; title: string; text: string } | null;
}

const WARRANTY_TYPE: Record<string, string> = { parts: "Pièces", compressor: "Compresseur", labor: "Main-d’œuvre (fabricant)", replacement: "Remplacement de l’appareil" };
const beaconSent = new Set<string>();

/** Texte sûr pour une chaîne CSS (marges de page imprimées). */
const cssText = (s: string) => s.replace(/[\\"<>\r\n]/g, " ").replace(/\s+/g, " ").trim();

/** Pied de chaque page imprimée : identité de l'entrepreneur (ou, pour une ancienne soumission, de l'entreprise) à gauche, numéro de soumission et de page à droite. */
function pageCss(doc: QuoteDocument): string {
  const co = doc.contractor ?? doc.company;
  const left = cssText([co.legalName, co.neq ? `NEQ ${co.neq}` : "", co.rbq ? `RBQ ${co.rbq}` : "", co.tps ? `TPS ${co.tps}` : "", co.tvq ? `TVQ ${co.tvq}` : "", co.phone].filter(Boolean).join(" · "));
  const right = cssText(`${doc.number} · v${doc.version} · page `);
  return `@page { @bottom-left { content: "${left}"; font: 7.5pt system-ui, sans-serif; color: #5b6770; } @bottom-right { content: "${right}" counter(page) " de " counter(pages); font: 7.5pt system-ui, sans-serif; color: #5b6770; } }`;
}

function Missing({ what, show }: { what: string; show: boolean }) {
  return show ? <span className="dv-missing">{what} à compléter</span> : null;
}

function Facts({ rows }: { rows: Array<[string, React.ReactNode]> }) {
  const kept = rows.filter(([, v]) => v !== null && v !== undefined && v !== "" && v !== false);
  if (!kept.length) return null;
  return (
    <dl className="dv-facts">
      {kept.map(([k, v]) => (
        <div key={k} className="dv-facts__row">
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Section({ id, n, title, lead, children }: { id: string; n: string; title: string; lead?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="dv-sec" aria-labelledby={`${id}-t`}>
      <Rise className="dv-sec__head">
        <span className="dv-sec__n" aria-hidden>{n}</span>
        <div>
          <h2 id={`${id}-t`} className="dv-sec__title">{title}</h2>
          {lead ? <p className="dv-sec__lead">{lead}</p> : null}
        </div>
      </Rise>
      <div className="dv-sec__body">{children}</div>
    </section>
  );
}

function Prose({ text }: { text: string }) {
  if (!text?.trim()) return null;
  return <div className="dv-prose">{text}</div>;
}

function Photos({ ids, base, doc, label }: { ids: string[]; base: string; doc: QuoteDocument; label: string }) {
  const shown = ids.filter((id) => doc.photos[id]);
  if (!shown.length) return null;
  return (
    <div className="dv-photos">
      {shown.map((id, i) => {
        const p = doc.photos[id];
        return (
          <a key={id} href={`${base}${id}`} target="_blank" rel="noreferrer" className="dv-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${base}${id}`} alt={`${label} : photo ${i + 1} de la visite`} width={p.width || undefined} height={p.height || undefined} decoding="async" />
          </a>
        );
      })}
    </div>
  );
}

export function QuoteDocumentView(props: DocumentViewProps) {
  const { doc, mode, status } = props;
  const c = doc.content;
  const m = c.machine;
  const co = doc.company;
  const preview = mode === "apercu";
  const interactive = !props.acceptance && (preview || props.canRespond);
  const [selection, setSelection] = useState<string[]>(props.initialSelection);
  const [mounted, setMounted] = useState(false);
  const totals = useMemo(() => computeTotals(c, selection, doc.taxes, props.asOf), [c, selection, doc.taxes, props.asOf]);
  const byLine = useMemo(() => new Map(totals.lines.map((l) => [l.id, l])), [totals]);
  const chosen = c.lines.filter((l) => l.optional && selection.includes(l.id));

  useEffect(() => {
    setMounted(true);
    const url = props.beaconUrl;
    if (!url || beaconSent.has(url)) return;
    beaconSent.add(url);
    fetch(url, { method: "POST", keepalive: true, cache: "no-store" }).catch(() => undefined);
  }, [props.beaconUrl]);

  const toggle = (id: string, on: boolean) => setSelection((s) => (on ? [...new Set([...s, id])] : s.filter((x) => x !== id)));

  const clientName = `${c.client.firstName} ${c.client.lastName}`.trim();
  const work = c.site.sameAsBilling ? { address: c.client.address, city: c.client.city, postalCode: c.client.postalCode } : { address: c.site.address, city: c.site.city, postalCode: c.site.postalCode };
  /* Modèle actuel (doc.contractor présent, même null en aperçu) : l'entrepreneur est l'installateur partenaire,
     Thermopompes À Vendre présente la soumission. Ancienne soumission (clé absente) : affichée comme à son envoi. */
  const modern = doc.contractor !== undefined;
  const k = doc.contractor ?? null;
  const presenter = co.tradeName || co.legalName || PRESENTER_FALLBACK;
  const company = modern ? presenter : co.tradeName || co.legalName;
  const taxCo = k ?? co;
  const unitWord = c.placement.indoor.length > 1 ? `${c.placement.indoor.length} unités intérieures` : "une unité intérieure";
  const p = m?.pairing ?? null;
  const lvLabel = totals.logisvertMode === "cession" ? "Aide LogisVert, versée par Hydro-Québec à l’entreprise" : modern ? "Aide LogisVert prévue, versée au client par Hydro-Québec après l’installation" : "Aide LogisVert, versée par Hydro-Québec au client après l’installation";
  const lvText = totals.logisvertMode === "cession" ? doc.texts.logisvertCession : totals.logisvertMode === "client" ? doc.texts.logisvertClient : "";
  const lvModern = modern && totals.logisvertMode === "client" && totals.logisvertCents > 0;
  const expiredOn = status === "expiree";
  const statusTone = status === "acceptee" ? "ok" : status === "refusee" || status === "expiree" || status === "remplacee" ? "bad" : "info";

  return (
    <div className={`dv ${preview ? "dv--apercu" : ""}`} data-status={status}>
      <div className="dv-toolbar" role="toolbar" aria-label="Outils du document">
        <span className={`dv-chip dv-chip--${statusTone}`}>{preview ? "Aperçu" : STATUS_LABELS[status]}</span>
        <button type="button" className="dv-tool" onClick={() => window.print()}>
          <Printer size={16} aria-hidden /> Télécharger / Imprimer en PDF
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: pageCss(doc) }} />
      <div className="dv-frame">
          <div>
            <div>
              {/* ---------------- Couverture ---------------- */}
              <header className="dv-cover">
                <svg className="dv-cover__arcs" viewBox="0 0 400 400" aria-hidden>
                  {[70, 130, 190, 250, 310].map((r, i) => (
                    <circle key={r} cx="400" cy="400" r={r} style={{ animationDelay: `${0.15 + i * 0.12}s` }} />
                  ))}
                </svg>
                <div className="dv-cover__in">
                  <div className="dv-cover__top">
                    <div className="dv-brand">
                      {co.logoId && doc.photos[co.logoId] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={`${props.photoBase}${co.logoId}`} alt={company} className="dv-brand__logo" />
                      ) : (
                        <span className="dv-brand__name">{company || <Missing what="Raison sociale" show />}</span>
                      )}
                    </div>
                    <p className="dv-cover__ref">
                      Soumission n° <strong>{doc.number}</strong>
                      <span aria-hidden> · </span>
                      {doc.kind === "avenant" ? `Avenant, version ${doc.version}` : `Version ${doc.version}`}
                    </p>
                  </div>

                  <div className="dv-cover__main">
                    <p className="dv-cover__kicker dv-enter" style={{ animationDelay: "0.05s" }}>{doc.kind === "avenant" ? `Avenant à la version ${doc.basedOn}` : "Soumission d’installation"}</p>
                    <h1 className="dv-cover__title dv-enter" style={{ animationDelay: "0.1s" }}>
                      <span>{m ? `${m.brand} ${m.name}` : "Votre thermopompe"}</span>
                      <em>chez {clientName || "vous"}</em>
                    </h1>
                    <span className="dv-cover__rule" aria-hidden />
                    <p className="dv-cover__addr dv-enter" style={{ animationDelay: "0.2s" }}>
                      {[work.address, work.city, work.postalCode].filter(Boolean).join(", ")}
                    </p>
                    {modern ? (
                      <p className="dv-cover__by dv-enter" style={{ animationDelay: "0.24s" }}>
                        <span>Travaux réalisés par</span>
                        <strong>{k?.legalName || <Missing what="Entrepreneur" show />}</strong>
                        {k?.rbq ? <em>Licence RBQ {k.rbq}</em> : null}
                      </p>
                    ) : null}
                  </div>

                  <div className="dv-cover__meta dv-enter" style={{ animationDelay: "0.28s" }}>
                    <div><span>Émise le</span><strong>{formatDay(doc.issuedAt.slice(0, 10))}</strong></div>
                    <div><span>Valide jusqu’au</span><strong>{formatDay(doc.validUntil)}</strong></div>
                    <div><span>Travaux</span><strong>{whenText(c.schedule)}</strong></div>
                    <div className="dv-cover__total">
                      <span>Total, taxes comprises</span>
                      <strong><RollingMoney cents={totals.totalCents} /></strong>
                      {lvModern ? (
                        <small>Aide LogisVert prévue : {money(totals.logisvertCents)}, versée au client par Hydro-Québec, non garantie</small>
                      ) : totals.logisvertCents ? (
                        <small>{totals.logisvertMode === "cession" ? "À payer après l’aide LogisVert" : "Coût net estimé après l’aide"} : <RollingMoney cents={totals.netAfterAidCents} /></small>
                      ) : null}
                    </div>
                  </div>
                </div>
              </header>

              {props.flash ? (
                <div className={`dv-flash dv-flash--${props.flash.tone}`} role="status">
                  <strong>{props.flash.title}</strong>
                  <span>{props.flash.text}</span>
                </div>
              ) : null}

              {(status === "expiree" || status === "remplacee") && !preview ? (
                <div className="dv-flash dv-flash--bad" role="alert">
                  <strong>{status === "expiree" ? `Cette soumission est expirée depuis le ${formatDay(doc.validUntil)}.` : "Cette soumission a été remplacée."}</strong>
                  <span>
                    {status === "expiree" ? "Elle ne peut plus être acceptée en ligne. Demandez-nous une version à jour." : "Elle ne peut plus être acceptée : une version plus récente vous a été envoyée."}
                    {props.replacedBy ? <> <a href={props.replacedBy.href}>Voir la version {props.replacedBy.v}</a></> : null}
                  </span>
                </div>
              ) : null}

              <div className="dv-body">
                {/* 1. Votre projet */}
                <Section id="projet" n="01" title="Votre projet" lead={c.projectSummary || `Installation d’une thermopompe ${m ? `${m.brand} ${m.name}` : ""} avec ${unitWord}, au ${[work.address, work.city].filter(Boolean).join(", ")}.`}>
                  <Rise>
                    <Facts
                      rows={[
                        ["Client", clientName],
                        ["Entrepreneur qui réalise les travaux", k ? `${k.legalName}${k.rbq ? `, licence RBQ ${k.rbq}` : ""}` : ""],
                        ["Adresse des travaux", [work.address, work.city, work.postalCode].filter(Boolean).join(", ")],
                        ["Adresse de facturation", c.site.sameAsBilling ? "La même" : [c.client.address, c.client.city, c.client.postalCode].filter(Boolean).join(", ")],
                        ["Propriété", [choiceText("propertyType", c.site.propertyType), c.site.yearBuilt ? `construite en ${c.site.yearBuilt}` : ""].filter(Boolean).join(", ")],
                        ["Niveaux", c.site.floors ? `${c.site.floors} niveau${c.site.floors > 1 ? "x" : ""} hors sol${c.site.basement ? ", plus un sous-sol" : ""}` : c.site.basement ? "Avec sous-sol" : ""],
                        ["Accès et stationnement", c.site.access],
                        ["Contraintes des occupants", c.site.constraints],
                        ["Personne présente pendant les travaux", c.site.presence],
                        ["Téléphone", c.client.phone],
                        ["Courriel", c.client.email],
                      ]}
                    />
                  </Rise>
                </Section>

                {/* 2. Plan d'installation */}
                <Section id="plan" n="02" title="Plan d’installation" lead="Où chaque appareil sera posé, par où passent les lignes, et ce que ça demande chez vous.">
                  <Rise><Schematic placement={c.placement} site={c.site} /></Rise>
                  <div className="dv-units">
                    <Rise className="dv-unit dv-unit--out">
                      <p className="dv-unit__k">Unité extérieure</p>
                      <h3 className="dv-unit__t">{c.placement.outdoor.location || <Missing what="Emplacement" show={preview} />}</h3>
                      <Facts
                        rows={[
                          ["Modèle", m?.outdoorModel],
                          ["Support", choiceText("mounting", c.placement.outdoor.mounting)],
                          ["Dégagement", c.placement.outdoor.clearance],
                          ["Neige et glace", c.placement.outdoor.snow],
                          ["Remarques", c.placement.outdoor.notes],
                        ]}
                      />
                      <Photos ids={c.placement.outdoor.photos} base={props.photoBase} doc={doc} label="Unité extérieure" />
                    </Rise>
                    {c.placement.indoor.map((u, i) => {
                      const extra = extraLength(u);
                      return (
                        <Rise key={u.id} className="dv-unit" delay={Math.min(i, 4) * 0.05}>
                          <p className="dv-unit__k">{u.label || `Unité ${i + 1}`}{u.type ? ` · ${choiceText("indoorType", u.type)}` : ""}</p>
                          <h3 className="dv-unit__t">{u.room || <Missing what="Pièce" show={preview} />}</h3>
                          <Facts
                            rows={[
                              ["Modèle", u.model],
                              ["Capacité", u.capacityBtu ? `${formatNumber(u.capacityBtu)} BTU/h` : ""],
                              ["Niveau", floorLabel(u.floor)],
                              ["Mur", u.wall],
                              ["Hauteur", u.height],
                              [
                                "Ligne de réfrigérant",
                                u.lineLength !== null ? (
                                  <>
                                    {lengthText(u.lineLength, c.placement.lengthUnit)}
                                    {u.lineIncluded !== null ? <span className="dv-soft"> · {lengthText(u.lineIncluded, c.placement.lengthUnit)} inclus{extra > 0 ? `, ${lengthText(extra, c.placement.lengthUnit)} en supplément (voir les prix)` : ""}</span> : null}
                                  </>
                                ) : (
                                  ""
                                ),
                              ],
                              ["Parcours", choiceText("route", u.lineRoute)],
                              ["Finition", choiceText("finish", u.lineFinish)],
                              ["Percements", u.penetrations !== null ? `${u.penetrations}${u.wallMaterial ? `, dans un mur en ${choiceText("wallMaterial", u.wallMaterial).toLowerCase()}` : ""}` : ""],
                              ["Drain", choiceText("drain", u.drain)],
                              ["Remarques", u.notes],
                            ]}
                          />
                          <Photos ids={u.photos} base={props.photoBase} doc={doc} label={u.label || `Unité ${i + 1}`} />
                        </Rise>
                      );
                    })}
                    <Rise className="dv-unit dv-unit--wide">
                      <p className="dv-unit__k">Électricité</p>
                      <h3 className="dv-unit__t">{choiceText("circuit", c.placement.electrical.circuit) || "Raccordement électrique"}</h3>
                      <Facts
                        rows={[
                          ["Panneau", c.placement.electrical.panelCapacity],
                          ["Disjoncteur", c.placement.electrical.breaker],
                          ["Sectionneur", choiceText("disconnect", c.placement.electrical.disconnect)],
                          ["Distance du panneau à l’unité extérieure", c.placement.electrical.panelDistance !== null ? lengthText(c.placement.electrical.panelDistance, c.placement.lengthUnit) : ""],
                          ["Maître électricien", c.placement.electrical.electrician ? ELECTRICIAN_LABELS[c.placement.electrical.electrician] : ""],
                          ["Remarques", c.placement.electrical.notes],
                        ]}
                      />
                      {c.placement.removal.remove ? (
                        <p className="dv-note"><strong>Retrait de l’ancien système :</strong> {c.placement.removal.description || "compris."}</p>
                      ) : null}
                    </Rise>
                  </div>
                </Section>

                {/* 3. La machine */}
                <Section id="machine" n="03" title="La machine" lead={m ? `${m.brand} ${m.name}, ${m.systemTypeLabel.toLowerCase()}.` : undefined}>
                  {m ? (
                    <Rise className="dv-machine">
                      <div className="dv-machine__pic">
                        {m.imageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={m.imageUrl} alt={`${m.brand} ${m.name}`} decoding="async" />
                        ) : (
                          <span className="dv-machine__mono">{m.brand}</span>
                        )}
                      </div>
                      <div>
                        {m.explanation ? <p className="dv-machine__why">{m.explanation}</p> : null}
                        <div className="dv-figs">
                          {p?.h5Btu ? <div className="dv-fig"><strong>{formatNumber(p.h5Btu)}</strong><span>BTU/h de chaleur à −15 °C, capacité certifiée</span></div> : p?.h17Btu ? <div className="dv-fig"><strong>{formatNumber(p.h17Btu)}</strong><span>BTU/h de chaleur à −8 °C, capacité certifiée</span></div> : null}
                          {p?.hspf2 ? <div className="dv-fig"><strong>{formatNumber(p.hspf2, 2)}</strong><span>HSPF2 : rendement de chauffage sur la saison (plus c’est haut, moins elle consomme)</span></div> : null}
                          {p?.seer2 ? <div className="dv-fig"><strong>{formatNumber(p.seer2, 2)}</strong><span>SEER2 : rendement en climatisation</span></div> : null}
                          {p?.cop5 ? <div className="dv-fig"><strong>{formatNumber(p.cop5, 2)}</strong><span>COP à −15 °C : chaleur produite pour chaque unité d’électricité</span></div> : null}
                          {m.noiseOutdoorDbA ? <div className="dv-fig"><strong>{formatNumber(m.noiseOutdoorDbA)} dB(A)</strong><span>Bruit de l’unité extérieure, selon le fabricant</span></div> : null}
                          {m.noiseIndoorMinDbA ? <div className="dv-fig"><strong>{formatNumber(m.noiseIndoorMinDbA)}{m.noiseIndoorMaxDbA ? `–${formatNumber(m.noiseIndoorMaxDbA)}` : ""} dB(A)</strong><span>Bruit de l’unité intérieure, selon le fabricant</span></div> : null}
                        </div>
                        <Facts
                          rows={[
                            ["Unité extérieure", m.outdoorModel],
                            ["Unités intérieures", c.placement.indoor.map((u) => [u.model, u.label].filter(Boolean).join(" · ")).filter(Boolean).join(" ; ") || m.offListIndoor || p?.indoorDescription],
                            ["Jumelage selon Hydro-Québec", p?.indoorDescription],
                            ["Référence AHRI", p ? p.ahri : "Jumelage absent de la liste officielle LogisVert"],
                            ["Puissance nominale", p?.nominalBtu ? `${formatNumber(p.nominalBtu)} BTU/h` : ""],
                            ["Réfrigérant", m.refrigerant],
                            ["Climat froid", p?.coldClimate ? "Oui, reconnue pour les climats froids" : ""],
                          ]}
                        />
                        <p className={`dv-lv ${p && !m.offList ? "" : "dv-lv--no"}`}>
                          {p && !m.offList ? (
                            <>
                              <ShieldCheck size={16} aria-hidden /> Ce jumelage (AHRI {p.ahri}) figure sur la liste officielle LogisVert d’Hydro-Québec{m.listDate ? ` du ${m.listDate}` : ""}, pour un montant de <strong>{money(p.logisVertCents)}</strong>.
                            </>
                          ) : (
                            <>
                              <AlertTriangle size={16} aria-hidden /> Ce jumelage n’est pas sur la liste officielle LogisVert : aucune aide LogisVert n’est prévue dans cette soumission.
                            </>
                          )}
                        </p>
                      </div>
                    </Rise>
                  ) : (
                    <Missing what="Machine" show />
                  )}
                </Section>

                {/* 4. Inclus / non inclus */}
                <Section id="inclus" n="04" title="Ce qui est inclus, et ce qui ne l’est pas" lead="Les deux listes font partie de la soumission, au même titre que le prix.">
                  <div className="dv-inout">
                    <Rise className="dv-list dv-list--in">
                      <h3><Check size={18} aria-hidden /> Ce qui est inclus</h3>
                      <ul>
                        {c.inclusions.map((i) => (
                          <li key={i.id}><Check size={15} aria-hidden /><span>{i.label}{i.detail ? <small>{i.detail}</small> : null}</span></li>
                        ))}
                      </ul>
                    </Rise>
                    <Rise className="dv-list dv-list--out" delay={0.06}>
                      <h3><X size={18} aria-hidden /> Ce qui n’est pas inclus</h3>
                      <ul>
                        {c.exclusions.map((i) => (
                          <li key={i.id}><X size={15} aria-hidden /><span>{i.label}{i.detail ? <small>{i.detail}</small> : null}</span></li>
                        ))}
                      </ul>
                    </Rise>
                  </div>
                </Section>

                {/* 5. Hypothèses */}
                <Section id="hypotheses" n="05" title="Hypothèses et imprévus" lead="Le prix repose sur ces constats de la visite.">
                  <Rise>
                    {c.assumptions.length ? (
                      <ol className="dv-assume">
                        {c.assumptions.map((a) => (
                          <li key={a.id}>{a.label}{a.detail ? <small>{a.detail}</small> : null}</li>
                        ))}
                      </ol>
                    ) : null}
                    <p className="dv-callout">{doc.texts.changeOrder}</p>
                  </Rise>
                </Section>

                {/* 6. Date et déroulement */}
                <Section id="date" n="06" title="Date et déroulement">
                  <Rise className="dv-when">
                    <div className="dv-when__big">
                      <Clock size={20} aria-hidden />
                      <div>
                        <strong>{whenText(c.schedule)}</strong>
                        {c.schedule.windowText ? <span>{c.schedule.windowText}</span> : null}
                      </div>
                    </div>
                    <Facts rows={[["Durée estimée des travaux", c.schedule.duration], ["Arrivée de l’équipe", c.schedule.arrival], ["Remarques", c.schedule.notes]]} />
                    {c.schedule.prep.length ? (
                      <div className="dv-prep">
                        <h3>À préparer avant notre arrivée</h3>
                        <ul>{c.schedule.prep.map((x, i) => <li key={i}>{x}</li>)}</ul>
                      </div>
                    ) : null}
                    {doc.texts.weatherClause ? <p className="dv-note"><strong>Météo :</strong> {doc.texts.weatherClause}</p> : null}
                  </Rise>
                </Section>

                {/* 7. Prix */}
                <Section id="prix" n="07" title="Prix" lead={interactive && c.lines.some((l) => l.optional) ? "Cochez les options qui vous intéressent : le total se met à jour." : undefined}>
                  <Rise className="dv-lines">
                    {c.lines.map((l) => {
                      const t = byLine.get(l.id)!;
                      return (
                        <div key={l.id} className="dv-line" data-included={t.included} data-optional={l.optional}>
                          <div className="dv-line__main">
                            <p className="dv-line__label">
                              {l.label}
                              {l.optional ? <span className="dv-tag">Option</span> : null}
                            </p>
                            {l.description ? <p className="dv-line__desc">{l.description}</p> : null}
                            <p className="dv-line__qty">{qtyText(l)}</p>
                            {l.discount ? (
                              <p className={`dv-line__disc ${t.discountExpired ? "is-expired" : ""}`}>
                                Rabais : {l.discount.reason}
                                {l.discount.kind === "pourcentage" ? ` (${formatNumber(l.discount.value, 2)} %)` : ""}
                                {l.discount.expiresOn ? (t.discountExpired ? ` · expiré le ${formatDay(l.discount.expiresOn)}` : ` · valable jusqu’au ${formatDay(l.discount.expiresOn)}`) : ""}
                              </p>
                            ) : null}
                          </div>
                          <div className="dv-line__amt">
                            {t.discountCents > 0 ? <s aria-label="Prix avant rabais">{money(t.grossCents)}</s> : null}
                            <strong>{money(t.netCents)}</strong>
                            {l.optional ? (
                              <label className="dv-switch">
                                <input type="checkbox" name="options" value={l.id} form="dv-accept" checked={t.included} disabled={!interactive} onChange={(e) => toggle(l.id, e.target.checked)} />
                                <span className="dv-switch__track" aria-hidden><span className="dv-switch__knob" /></span>
                                <span className="dv-switch__txt">{t.included ? "Choisie" : "Ajouter"}</span>
                              </label>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </Rise>

                  <Rise className="dv-totals">
                    <div className="dv-trow"><span>Sous-total</span><span>{money(totals.subtotalCents)}</span></div>
                    {totals.quoteDiscounts.map((d) => (
                      <div key={d.id} className={`dv-trow dv-trow--disc ${d.expired ? "is-expired" : ""}`}>
                        <span>
                          Rabais : {d.reason}
                          {d.kind === "pourcentage" ? ` (${formatNumber(d.value, 2)} %)` : ""}
                          {d.expiresOn ? <small>{d.expired ? `Expiré le ${formatDay(d.expiresOn)}` : `Valable jusqu’au ${formatDay(d.expiresOn)}`}</small> : null}
                        </span>
                        <span>{d.expired ? "—" : `− ${money(d.amountCents)}`}</span>
                      </div>
                    ))}
                    {totals.quoteDiscountsCents ? <div className="dv-trow"><span>Montant avant taxes</span><span>{money(totals.taxableCents)}</span></div> : null}
                    <div className="dv-trow dv-trow--tax"><span>TPS (5 %){taxCo.tps ? <small>n° {taxCo.tps}</small> : null}</span><span>{money(totals.tpsCents)}</span></div>
                    <div className="dv-trow dv-trow--tax"><span>TVQ (9,975 %){taxCo.tvq ? <small>n° {taxCo.tvq}</small> : null}</span><span>{money(totals.tvqCents)}</span></div>
                    <div className="dv-trow dv-trow--total"><span>Total, taxes comprises</span><RollingMoney cents={totals.totalCents} /></div>
                  </Rise>

                  {lvModern ? (
                    <Rise className="dv-aid dv-aid--info">
                      <p className="dv-aid__k">Aide LogisVert · Hydro-Québec · information</p>
                      <div className="dv-trow"><span>{lvLabel}</span><RollingMoney cents={totals.logisvertCents} /></div>
                      <div className="dv-trow dv-trow--net">
                        <span>Estimation après l’aide<small>estimation, non garantie</small></span>
                        <RollingMoney cents={totals.netAfterAidCents} />
                      </div>
                      <p className="dv-aid__notice">{LOGISVERT_NOTICE}</p>
                      <p className="dv-aid__small">Le montant à payer reste le total, taxes comprises ({money(totals.totalCents)}) : l’aide n’en est jamais soustraite.</p>
                      {ready(lvText) ? <p className="dv-aid__small">{lvText}</p> : null}
                      <p className="dv-aid__small">
                        Jumelage AHRI {p?.ahri}{m?.listDate ? `, liste officielle du ${m.listDate}` : ""}. Conditions du programme :{" "}
                        <a href={doc.links.logisvert} target="_blank" rel="noreferrer">hydroquebec.com, LogisVert <ArrowUpRight size={12} aria-hidden /></a>
                      </p>
                    </Rise>
                  ) : totals.logisvertCents ? (
                    <Rise className="dv-aid">
                      <p className="dv-aid__k">Aide LogisVert · Hydro-Québec</p>
                      <div className="dv-trow"><span>{lvLabel}</span><RollingMoney cents={totals.logisvertCents} sign={totals.logisvertMode === "cession" ? "− " : ""} /></div>
                      <div className="dv-trow dv-trow--net">
                        <span>{totals.logisvertMode === "cession" ? "À payer à l’entreprise" : "Coût net estimé après l’aide"}</span>
                        <RollingMoney cents={totals.netAfterAidCents} />
                      </div>
                      {totals.logisvertMode === "client" ? <p className="dv-aid__small">Vous payez à l’entreprise le total, taxes comprises ({money(totals.totalCents)}). L’aide vous est versée plus tard par Hydro-Québec.</p> : null}
                      {lvText ? <p className="dv-aid__small">{lvText}</p> : null}
                      <p className="dv-aid__small">
                        Jumelage AHRI {p?.ahri}{m?.listDate ? `, liste officielle du ${m.listDate}` : ""}. Conditions du programme :{" "}
                        <a href={doc.links.logisvert} target="_blank" rel="noreferrer">hydroquebec.com, LogisVert <ArrowUpRight size={12} aria-hidden /></a>
                      </p>
                    </Rise>
                  ) : null}
                </Section>

                {/* 8. Paiement */}
                <Section id="paiement" n="08" title="Paiement">
                  <Rise className="dv-pay">
                    <div className="dv-pay__steps">
                      {totals.depositCents ? (
                        <div className="dv-pay__step"><span>1</span><div><strong>Acompte : <RollingMoney cents={totals.depositCents} /></strong><small>{c.deposit.kind === "pourcentage" ? `${formatNumber(c.deposit.value, 2)} % du montant payable à l’entreprise` : "Montant fixe"}</small></div></div>
                      ) : null}
                      <div className="dv-pay__step"><span>{totals.depositCents ? 2 : 1}</span><div><strong>{totals.depositCents ? "Solde" : "Montant payable"} : <RollingMoney cents={totals.balanceCents} /></strong><small>Selon les modalités ci-dessous</small></div></div>
                      {totals.logisvertMode === "cession" ? (
                        <div className="dv-pay__step dv-pay__step--hq"><span>HQ</span><div><strong>Aide LogisVert : {money(totals.logisvertCents)}</strong><small>Versée par Hydro-Québec directement à l’entreprise</small></div></div>
                      ) : null}
                    </div>
                    <Prose text={doc.texts.paymentTerms} />
                    <Prose text={doc.texts.depositRule} />
                  </Rise>
                </Section>

                {/* 9. Garanties */}
                <Section id="garanties" n="09" title="Garanties">
                  <div className="dv-warr">
                    {m && (m.warrantyText || (m.showCatalogWarranties && m.catalogWarranties.length)) ? (
                      <Rise className="dv-warr__card">
                        <h3>Fabricant ({m.brand})</h3>
                        {m.warrantyText ? <Prose text={m.warrantyText} /> : (
                          <ul>{m.catalogWarranties.map((w, i) => <li key={i}>{WARRANTY_TYPE[w.type] ?? w.type} : {w.years} ans{w.requiresRegistration ? ", avec enregistrement du produit" : ""}</li>)}</ul>
                        )}
                      </Rise>
                    ) : null}
                    <Rise className="dv-warr__card">
                      <h3>{modern ? "Main-d’œuvre" : `Main-d’œuvre (${company || "l’entreprise"})`}</h3>
                      <Prose text={doc.texts.warranty} />
                    </Rise>
                    <Rise className="dv-warr__card">
                      <h3>Garantie légale</h3>
                      {ready(doc.texts.legalWarranty) ? <Prose text={doc.texts.legalWarranty} /> : null}
                      <p className="dv-link"><a href={doc.links.opcGaranties} target="_blank" rel="noreferrer">Garanties prévues par la loi · Office de la protection du consommateur <ArrowUpRight size={12} aria-hidden /></a></p>
                    </Rise>
                  </div>
                </Section>

                {/* 10. Conditions */}
                <Section id="conditions" n="10" title="Conditions">
                  <Rise className="dv-terms">
                    <h3>Validité</h3>
                    <p>Cette soumission est valide jusqu’au {formatDay(doc.validUntil)} inclusivement. Après cette date, elle ne peut plus être acceptée en ligne.</p>
                    <h3>Annulation</h3>
                    {ready(doc.texts.cancellation) ? <Prose text={doc.texts.cancellation} /> : null}
                    <p className="dv-link"><a href={doc.links.opcAnnulation} target="_blank" rel="noreferrer">Annuler un achat conclu à distance · Office de la protection du consommateur <ArrowUpRight size={12} aria-hidden /></a></p>
                    {ready(doc.texts.terms) ? (<><h3>Conditions générales</h3><Prose text={doc.texts.terms} /></>) : null}
                    {c.notes ? (<><h3>Remarques</h3><Prose text={c.notes} /></>) : null}
                    <p className="dv-soft">Document rédigé en français. Contrat conclu à distance : <a href={doc.links.opcDistance} target="_blank" rel="noreferrer">vos droits, selon l’Office de la protection du consommateur</a>.</p>
                  </Rise>
                </Section>

                {/* 11. Acceptation */}
                <Section id="acceptation" n="11" title="Acceptation">
                  {props.acceptance ? (
                    <Rise className="dv-cert">
                      <span className="dv-cert__seal" aria-hidden><Check size={26} /></span>
                      <h3>Soumission acceptée</h3>
                      <p>Le {formatDateTime(props.acceptance.at)}, par <strong>« {props.acceptance.typedName} »</strong> (nom tapé, signature électronique), pour un total de <strong>{money(props.acceptance.totalCents)}</strong>, taxes comprises.</p>
                      <p>Options choisies : {chosen.length ? chosen.map((l) => l.label).join(", ") : "aucune"}.</p>
                      <p className="dv-hash"><span>Empreinte SHA-256 du document accepté</span><code>{props.acceptance.snapshotHash}</code></p>
                      <p className="dv-soft">Ce document est la version acceptée, figée : il ne change plus. Toute modification se fait par un avenant écrit.</p>
                    </Rise>
                  ) : status === "refusee" ? (
                    <Rise className="dv-cert dv-cert--muted"><h3>Soumission refusée</h3><p>Vous avez refusé cette soumission{props.refusal ? ` le ${formatDateTime(props.refusal.at)}` : ""}. Si vous changez d’idée, écrivez-nous ou appelez-nous.</p></Rise>
                  ) : (
                    <Rise className="dv-accept-wrap">
                      <div className="dv-accept-sum">
                        <p>Total, taxes comprises</p>
                        <strong><RollingMoney cents={totals.totalCents} /></strong>
                        {totals.logisvertMode === "cession" ? <small>À payer à l’entreprise après l’aide LogisVert : {money(totals.clientPaysCents)}</small> : null}
                        <small>Options choisies : {chosen.length ? chosen.map((l) => l.label).join(", ") : "aucune"}</small>
                      </div>
                      {props.canRespond || preview ? (
                        <form id="dv-accept" action={props.action ?? undefined} method="post" className="dv-accept" onSubmit={preview ? (e) => e.preventDefault() : undefined}>
                          <input type="hidden" name="decision" value="accepter" />
                          <input type="hidden" name="hash" value={props.contentHash} />
                          {mounted ? <input type="hidden" name="total" value={totals.totalCents} /> : null}
                          <label className="dv-consent">
                            <input type="checkbox" name="conditions" value="oui" required disabled={preview} />
                            <span>J’ai lu et j’accepte les conditions de cette soumission, y compris ce qui est inclus et ce qui ne l’est pas.</span>
                          </label>
                          <label className="dv-sign">
                            <span>Votre prénom et votre nom (signature électronique)</span>
                            <input name="nom" required minLength={4} maxLength={120} autoComplete="name" pattern="\S+(\s+\S+)+" title="Prénom et nom" disabled={preview} />
                          </label>
                          <p className="dv-fine">En cliquant sur « Accepter », vous signez électroniquement cette soumission. Nous conservons la date et l’heure, la version et le total acceptés, les options choisies, le nom tapé, votre adresse IP, votre navigateur et une empreinte du document, puis nous vous envoyons une copie par courriel.</p>
                          <button type="submit" className="dv-btn dv-btn--go" disabled={preview}>Accepter la soumission</button>
                          {preview ? <p className="dv-fine">Aperçu : le client verra ce formulaire actif.</p> : null}
                        </form>
                      ) : (
                        <p className="dv-callout dv-callout--bad">{expiredOn ? "Cette soumission est expirée : elle ne peut plus être acceptée." : "Cette soumission ne peut plus être acceptée."}</p>
                      )}
                      {!preview && props.action && status !== "remplacee" ? (
                        <div className="dv-other">
                          {props.canRespond ? (
                            <details className="dv-details">
                              <summary>Refuser la soumission</summary>
                              <form action={props.action} method="post" className="dv-mini">
                                <input type="hidden" name="decision" value="refuser" />
                                <label>Raison <small>(facultatif)</small><textarea name="raison" maxLength={1000} rows={3} /></label>
                                <button type="submit" className="dv-btn dv-btn--ghost">Confirmer le refus</button>
                              </form>
                            </details>
                          ) : null}
                          <details className="dv-details">
                            <summary><CircleHelp size={16} aria-hidden /> J’ai une question</summary>
                            <form action={props.action} method="post" className="dv-mini">
                              <input type="hidden" name="decision" value="question" />
                              <label>Votre question<textarea name="message" required minLength={3} maxLength={2000} rows={4} /></label>
                              <button type="submit" className="dv-btn dv-btn--ink">Envoyer ma question</button>
                            </form>
                          </details>
                        </div>
                      ) : null}
                    </Rise>
                  )}
                </Section>

                <p className="dv-printline">
                  <button type="button" className="dv-btn dv-btn--ink" onClick={() => window.print()}>
                    <Printer size={17} aria-hidden /> Télécharger / Imprimer en PDF
                  </button>
                </p>

                {/* Identité : l'entrepreneur qui réalise les travaux, puis la marque qui présente la soumission. */}
                {modern ? (
                  <footer className="dv-identity dv-identity--duo" aria-label="Entrepreneur et présentation de la soumission">
                    <div className="dv-identity__main">
                      <p className="dv-identity__role">Entrepreneur qui réalise les travaux</p>
                      <p className="dv-identity__name">{k?.legalName || <Missing what="Entrepreneur" show />}{k?.tradeName && k.tradeName !== k.legalName ? <span> · {k.tradeName}</span> : null}</p>
                      {k ? <p>{[k.address, k.city, k.postalCode].filter(Boolean).join(", ") || <Missing what="Adresse" show />}</p> : null}
                      {k ? <p>{[k.phone, k.email].filter(Boolean).join(" · ")}</p> : null}
                      <dl>
                        <div><dt>NEQ</dt><dd>{k?.neq || <Missing what="NEQ" show />}</dd></div>
                        <div><dt>Licence RBQ</dt><dd>{k?.rbq || <Missing what="RBQ" show />}</dd></div>
                        <div><dt>TPS</dt><dd>{k?.tps || <Missing what="TPS" show />}</dd></div>
                        <div><dt>TVQ</dt><dd>{k?.tvq || <Missing what="TVQ" show />}</dd></div>
                      </dl>
                    </div>
                    <div className="dv-identity__by">
                      <p className="dv-identity__role">Soumission préparée par</p>
                      <p className="dv-identity__presenter">{presenter}</p>
                      <p>{[co.phone, co.email, co.website].filter(Boolean).join(" · ")}</p>
                    </div>
                  </footer>
                ) : (
                <footer className="dv-identity" aria-label="L’entreprise">
                  <div>
                    <p className="dv-identity__name">{co.legalName || <Missing what="Raison sociale" show />}{co.tradeName && co.tradeName !== co.legalName ? <span> · {co.tradeName}</span> : null}</p>
                    <p>{[co.address, co.city, co.postalCode].filter(Boolean).join(", ") || <Missing what="Adresse" show />}</p>
                    <p>{[co.phone, co.email, co.website].filter(Boolean).join(" · ")}</p>
                  </div>
                  <dl>
                    <div><dt>NEQ</dt><dd>{co.neq || <Missing what="NEQ" show />}</dd></div>
                    <div><dt>Licence RBQ</dt><dd>{co.rbq || <Missing what="RBQ" show />}</dd></div>
                    <div><dt>TPS</dt><dd>{co.tps || <Missing what="TPS" show />}</dd></div>
                    <div><dt>TVQ</dt><dd>{co.tvq || <Missing what="TVQ" show />}</dd></div>
                  </dl>
                </footer>
                )}
              </div>
            </div>
          </div>
      </div>

      {interactive && !preview ? (
        <a href="#acceptation" className="dv-sticky">
          <span>Total <RollingMoney cents={totals.totalCents} /></span>
          <strong>Accepter</strong>
        </a>
      ) : null}
    </div>
  );
}
