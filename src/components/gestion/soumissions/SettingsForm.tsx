"use client";

/* ==================================================================
   Réglages des soumissions :
   - Thermopompes À Vendre, la marque qui présente la soumission (sans
     licence RBQ : l'entrepreneur qui réalise les travaux est
     l'installateur partenaire choisi dans chaque soumission) ;
   - textes du contrat (marqueurs pour l'avocat), précision LogisVert ;
   - valeurs par défaut (validité, acompte, accès, présence,
     déroulement) ;
   - choix en un clic : listes modifiables (ajouter, retirer,
     réordonner) ;
   - modèles de listes, modèles de soumission, étapes Pipedrive.
   Liste de vérification en direct.
   ================================================================== */

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, CheckCircle2, ImagePlus, RotateCcw, Save, Trash2, X, XCircle } from "lucide-react";
import { deleteTemplateAction, saveSettingsAction } from "@/app/gestion/soumissions/actions";
import { CHOICE_META, DEFAULT_CHOICES } from "@/lib/soumissions/choices";
import { LAWYER_PLACEHOLDER, LINKS, LOGISVERT_NOTICE, PLACEHOLDER_RE } from "@/lib/soumissions/config";
import { settingsChecks, type CheckItem } from "@/lib/soumissions/checklist";
import type { DocumentTexts, PipedriveStages, Settings } from "@/lib/soumissions/types";
import { uploadPhoto } from "./compress";
import { Area, Money, Num, Seg, StringList, Text } from "./fields";
import { StandardInclusionsEditor } from "./StandardInclusionsEditor"; // Chantier D
import { DEFAULT_PRESENCE } from "@/lib/soumissions/defaults"; // Chantier D

const TEXTS: Array<{ key: keyof DocumentTexts; label: string; hint: string; lawyer?: boolean; link?: [string, string]; rows?: number }> = [
  { key: "paymentTerms", label: "Modalités de paiement", hint: "Échéancier, modes de paiement acceptés, intérêts s’il y a lieu." },
  { key: "depositRule", label: "Règle de l’acompte", hint: "Quand l’acompte est exigé et ce qu’il devient en cas d’annulation.", link: [LINKS.opcAcompte, "Acompte avant la conclusion d’un contrat (OPC)"] },
  { key: "warranty", label: "Garantie de main-d’œuvre", hint: "Durée, ce qui est couvert, comment la faire valoir." },
  { key: "legalWarranty", label: "Mention de la garantie légale", hint: "Texte fourni par l’avocat.", lawyer: true, link: [LINKS.opcGaranties, "Garanties prévues par la loi (OPC)"] },
  { key: "cancellation", label: "Conditions d’annulation", hint: "Texte fourni par l’avocat : droits et délais exacts.", lawyer: true, link: [LINKS.opcAnnulation, "Annuler un achat conclu à distance (OPC)"], rows: 5 },
  { key: "terms", label: "Conditions générales", hint: "Texte complet fourni par l’avocat ou le notaire.", lawyer: true, link: [LINKS.opcDistance, "Achats à distance (OPC)"], rows: 10 },
  { key: "weatherClause", label: "Clause météo", hint: "Quand l’installation peut être reportée à cause de la météo, et comment la date est refixée." },
  { key: "changeOrder", label: "Avenants", hint: "Montré sous les hypothèses : comment un changement est chiffré et accepté." },
];

const GROUPS = [...new Set(CHOICE_META.map((m) => m.group))];

function Live({ items }: { items: CheckItem[] }) {
  const open = items.filter((i) => !i.ok);
  if (!open.length) return <p className="g-hint" style={{ color: "var(--g-ok)" }}>Tout est rempli.</p>;
  return (
    <ul className="sq-checks">
      {open.map((i) => (
        <li key={i.id}>
          {i.severity === "bloquant" ? <XCircle size={17} className="is-bad" aria-label="Bloquant" /> : <AlertTriangle size={17} className="is-warn" aria-label="À vérifier" />}
          <span>{i.label}{i.hint ? <small>{i.hint}</small> : null}</span>
        </li>
      ))}
    </ul>
  );
}

export interface TemplateListItem {
  id: string;
  name: string;
  summary: string;
}

export function SettingsForm({ initial, stages, stagesError, templates }: { initial: Settings; checks: CheckItem[]; stages: Array<{ id: number; name: string }>; stagesError: string | null; templates: TemplateListItem[] }) {
  const router = useRouter();
  const [s, setS] = useState<Settings>(initial);
  const [tpls, setTpls] = useState(templates);
  const [saving, start] = useTransition();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [logoBusy, setLogoBusy] = useState(false);
  const up = (fn: (d: Settings) => void) =>
    setS((prev) => {
      const d = structuredClone(prev);
      fn(d);
      return d;
    });
  const checks = useMemo(() => settingsChecks(s), [s]);
  const blocking = checks.filter((i) => !i.ok && i.severity === "bloquant").length;
  const co = s.company;
  const setCo = (k: keyof Settings["company"]) => (v: string) => up((d) => void ((d.company as unknown as Record<string, string>)[k] = v));

  const save = () =>
    start(async () => {
      // Chantier D : « Inclusions standard » enregistrées avec le reste.
      const r = await saveSettingsAction({ company: s.company, texts: s.texts, defaults: s.defaults, standard: s.standard, choices: s.choices, templates: s.templates, pipedriveStages: s.pipedriveStages });
      setMsg(r.ok ? { ok: true, text: r.message ?? "Enregistré." } : { ok: false, text: r.error });
    });

  const removeTemplate = (id: string, name: string) =>
    start(async () => {
      if (!window.confirm(`Supprimer le modèle « ${name} » ? Les soumissions déjà créées ne changent pas.`)) return;
      const r = await deleteTemplateAction(id);
      if (r.ok) {
        setTpls((l) => l.filter((t) => t.id !== id));
        router.refresh();
      }
      setMsg(r.ok ? { ok: true, text: r.message ?? "Modèle supprimé." } : { ok: false, text: r.error });
    });

  const stageSelect = (key: keyof PipedriveStages, label: string) => (
    <div className="g-field">
      <label className="g-label" htmlFor={`st-${key}`}>{label}</label>
      <select id={`st-${key}`} className="g-select" value={s.pipedriveStages[key] ?? ""} onChange={(e) => up((d) => void (d.pipedriveStages[key] = e.target.value ? Number(e.target.value) : null))}>
        <option value="">Ne pas déplacer l’affaire</option>
        {stages.map((st) => <option key={st.id} value={st.id}>{st.name}</option>)}
        {s.pipedriveStages[key] && !stages.some((st) => st.id === s.pipedriveStages[key]) ? <option value={s.pipedriveStages[key]!}>Étape {s.pipedriveStages[key]} (introuvable)</option> : null}
      </select>
    </div>
  );

  return (
    <div>
      <div className="g-head">
        <div>
          <p className="g-eyebrow">Créateur de soumissions</p>
          <h1 className="g-h1">Réglages</h1>
        </div>
      </div>
      <nav className="sq-toc" aria-label="Sections">
        {[["entreprise", "Présentation"], ["textes", "Textes"], ["logisvert", "LogisVert"], ["defauts", "Par défaut"], ["standard", "Inclusions standard"], ["choix", "Choix en un clic"], ["listes", "Listes"], ["modeles", "Modèles"], ["pipedrive", "Pipedrive"]].map(([id, l]) => (
          <a key={id} href={`#${id}`}>{l}</a>
        ))}
      </nav>
      <div className="sq-builder">
        <div>
          <section id="entreprise" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">01</span><div><h2 className="sq-step__title">Thermopompes À Vendre : la marque qui présente la soumission</h2><p className="sq-step__hint">Affichée comme « Soumission préparée par ». Aucune licence RBQ n’est demandée ici.</p></div></div>
            <p className="sq-note sq-note--info">
              L’entrepreneur qui réalise les travaux est l’installateur partenaire choisi dans chaque soumission : sa raison sociale, sa licence RBQ, son NEQ et ses numéros de taxes viennent de sa fiche partenaire, section « Identité légale », et sont vérifiés avant l’envoi.
            </p>
            <div className="g-row g-row--2">
              <Text label="Nom de l’entreprise qui présente" hint="nom légal" value={co.legalName} onChange={setCo("legalName")} placeholder="Thermopompes À Vendre" />
              <Text label="Nom affiché" hint="facultatif" value={co.tradeName} onChange={setCo("tradeName")} placeholder="Thermopompes À Vendre" />
            </div>
            <div className="g-row g-row--3">
              <Text label="Téléphone" type="tel" value={co.phone} onChange={setCo("phone")} />
              <Text label="Courriel" type="email" value={co.email} onChange={setCo("email")} />
              <Text label="Site web" hint="facultatif" value={co.website} onChange={setCo("website")} />
            </div>
            <Text label="Adresse" hint="facultatif" value={co.address} onChange={setCo("address")} />
            <div className="g-row g-row--2">
              <Text label="Ville" hint="facultatif" value={co.city} onChange={setCo("city")} />
              <Text label="Code postal" hint="facultatif" value={co.postalCode} onChange={(v) => setCo("postalCode")(v.toUpperCase())} maxLength={10} />
            </div>
            <details className="g-details" style={{ marginTop: 10 }}>
              <summary>NEQ et numéros de taxes de Thermopompes À Vendre (facultatifs, factures de commission)</summary>
              <div className="g-row g-row--3" style={{ marginTop: 8 }}>
                <Text label="NEQ" value={co.neq} onChange={setCo("neq")} placeholder="10 chiffres" />
                <Text label="Numéro de TPS" value={co.tps} onChange={setCo("tps")} placeholder="123456789 RT0001" />
                <Text label="Numéro de TVQ" value={co.tvq} onChange={setCo("tvq")} placeholder="1234567890 TQ0001" />
              </div>
            </details>
            <div className="g-field">
              <span className="g-label">Logo <small>facultatif, affiché sur la couverture</small></span>
              <div className="sq-thumbs">
                {co.logoId ? (
                  <span className="sq-thumb" style={{ width: 140, background: "var(--g-ink)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/gestion/soumissions/photo/${co.logoId}`} alt="Logo" style={{ objectFit: "contain", padding: 8 }} />
                    <button type="button" onClick={() => up((d) => void (d.company.logoId = null))} aria-label="Retirer le logo"><X size={14} aria-hidden /></button>
                  </span>
                ) : (
                  <label className="sq-upload">
                    <ImagePlus size={18} aria-hidden /> {logoBusy ? "Envoi…" : "Téléverser le logo"}
                    <input type="file" accept="image/png,image/jpeg,image/webp" onChange={async (e) => { const f = e.target.files?.[0]; e.target.value = ""; if (!f) return; setLogoBusy(true); const r = await uploadPhoto(f, { logo: true }); setLogoBusy(false); if (r.ok) up((d) => void (d.company.logoId = r.id)); else setMsg({ ok: false, text: r.error }); }} />
                  </label>
                )}
              </div>
            </div>
          </section>

          <section id="textes" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">02</span><div><h2 className="sq-step__title">Textes du contrat</h2><p className="sq-step__hint">Tout texte qui contient un marqueur « [À … ] » bloque l’envoi (sauf les textes facultatifs).</p></div></div>
            <p className="sq-note">
              L’outil n’invente aucun texte juridique. Les conditions générales, l’annulation et la mention de la garantie légale doivent être rédigées ou validées par un avocat ou un notaire du Québec, puis collées ici à la place du marqueur {LAWYER_PLACEHOLDER}. Le modèle « l’installateur partenaire réalise les travaux, Thermopompes À Vendre présente la soumission » est aussi à faire valider.
            </p>
            {TEXTS.map((t) => (
              <div key={t.key} style={{ marginTop: 12 }}>
                <Area label={t.label} hint={t.hint} rows={t.rows ?? 3} value={s.texts[t.key]} maxLength={t.rows && t.rows > 5 ? 20000 : 4000} onChange={(v) => up((d) => void (d.texts[t.key] = v))} />
                <p className="g-hint" style={{ margin: "4px 0 0" }}>
                  {PLACEHOLDER_RE.test(s.texts[t.key]) ? <span style={{ color: "var(--g-bad)", fontWeight: 600 }}>Marqueur encore présent. </span> : null}
                  {t.link ? <a href={t.link[0]} target="_blank" rel="noreferrer">{t.link[1]}</a> : null}
                </p>
              </div>
            ))}
          </section>

          <section id="logisvert" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">03</span><div><h2 className="sq-step__title">LogisVert</h2><p className="sq-step__hint">Toujours versée au client, jamais garantie : montrée à titre d’information, jamais soustraite du total dû.</p></div></div>
            <div className="sq-lvinfo">
              <CheckCircle2 size={18} aria-hidden />
              <div>
                <p style={{ margin: 0, fontWeight: 600 }}>Mention montrée au client quand le jumelage figure sur la liste officielle :</p>
                <p className="sq-lvinfo__quote">{LOGISVERT_NOTICE}</p>
                <p className="g-hint" style={{ margin: 0 }}>Le montant vient de la liste officielle d’Hydro-Québec ; il ne se saisit pas à la main. <a href={LINKS.logisvert} target="_blank" rel="noreferrer">Page officielle LogisVert</a></p>
              </div>
            </div>
            <Area label="Précision facultative, montrée sous la mention" rows={4} value={s.texts.logisvertClient} onChange={(v) => up((d) => void (d.texts.logisvertClient = v))} />
            <p className="g-hint">Le texte de l’ancien mode « aide déduite du prix » n’est plus proposé ; les soumissions déjà envoyées gardent le texte de leur envoi.</p>
          </section>

          <section id="defauts" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">04</span><div><h2 className="sq-step__title">Valeurs par défaut</h2><p className="sq-step__hint">Reprises dans chaque nouvelle soumission, puis modifiables.</p></div></div>
            <div className="g-row g-row--2">
              <Num label="Validité d’une soumission" suffix="jours" integer value={s.defaults.validityDays} onChange={(v) => up((d) => void (d.defaults.validityDays = Math.min(365, Math.max(1, v ?? 30))))} />
              <Num label="Longueur de ligne incluse par unité" suffix={s.defaults.lengthUnit} value={s.defaults.includedLineLength} onChange={(v) => up((d) => void (d.defaults.includedLineLength = v))} />
            </div>
            <Seg label="Unité de longueur" value={s.defaults.lengthUnit} options={[["pi", "Pieds"], ["m", "Mètres"]]} onChange={(v) => up((d) => void (d.defaults.lengthUnit = v))} />
            <div className="g-row g-row--2">
              <Seg label="Acompte par défaut" value={s.defaults.deposit.kind} options={[["aucun", "Aucun"], ["pourcentage", "Pourcentage"], ["montant", "Montant"]]} onChange={(v) => up((d) => void (d.defaults.deposit = { kind: v, value: 0 }))} />
              {s.defaults.deposit.kind === "pourcentage" ? <Num label="Pourcentage" suffix="%" value={s.defaults.deposit.value} onChange={(v) => up((d) => void (d.defaults.deposit.value = Math.min(100, v ?? 0)))} /> : s.defaults.deposit.kind === "montant" ? <Money label="Montant" value={s.defaults.deposit.value} onChange={(v) => up((d) => void (d.defaults.deposit.value = v))} /> : null}
            </div>
            <p className="sq-sub">Chantier</p>
            <Area label="Accès et stationnement" rows={2} value={s.defaults.site.access} maxLength={1000} onChange={(v) => up((d) => void (d.defaults.site.access = v))} placeholder="Laissé vide : à remplir à chaque soumission." />
            {/* Chantier D : textes par défaut des « Détails facultatifs » (jamais bloquants ; le client peut les remplir dans la visite photo). */}
            <Text label="Qui doit être présent pendant les travaux" hint={`laissé vide : « ${DEFAULT_PRESENCE} »`} value={s.defaults.site.presence} maxLength={300} onChange={(v) => up((d) => void (d.defaults.site.presence = v))} placeholder={DEFAULT_PRESENCE} />
            <Area label="Contraintes des occupants" rows={2} value={s.defaults.site.constraints ?? ""} maxLength={1000} onChange={(v) => up((d) => void (d.defaults.site.constraints = v))} placeholder="Laissé vide : à remplir au besoin, ou par le client dans la visite photo." />
            <p className="sq-sub">Déroulement</p>
            <div className="g-row g-row--2">
              <Text label="Durée estimée des travaux" value={s.defaults.schedule.duration} maxLength={120} onChange={(v) => up((d) => void (d.defaults.schedule.duration = v))} placeholder="Une journée" />
              <Text label="Arrivée de l’équipe" value={s.defaults.schedule.arrival} maxLength={120} onChange={(v) => up((d) => void (d.defaults.schedule.arrival = v))} placeholder="Entre 7 h 30 et 9 h" />
            </div>
            <Text label="Précision sur la date" value={s.defaults.schedule.windowText} maxLength={200} onChange={(v) => up((d) => void (d.defaults.schedule.windowText = v))} placeholder="Date confirmée par téléphone à la réception de l’équipement" />
          </section>

          {/* Chantier D : ce que comprend l'installation standard (valeurs par défaut du plan et de « Ce qui est inclus »). */}
          <section id="standard" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">04b</span><div><h2 className="sq-step__title">Inclusions standard</h2><p className="sq-step__hint">S’appliquent aux nouvelles soumissions quand rien d’autre n’est réglé ; n’écrasent jamais votre liste de prix.</p></div></div>
            <StandardInclusionsEditor value={s.standard} unit={s.defaults.lengthUnit} onChange={(v) => up((d) => void (d.standard = v))} />
          </section>

          <section id="choix" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">05</span><div><h2 className="sq-step__title">Choix en un clic</h2><p className="sq-step__hint">Les pastilles proposées dans chaque soumission, plus « Autre… » pour écrire. Ajoutez, retirez, réordonnez. Aucune valeur n’est imposée.</p></div></div>
            {GROUPS.map((g, gi) => {
              const metas = CHOICE_META.filter((m) => m.group === g);
              return (
                <details key={g} className="sq-choicegroup" open={gi === 0}>
                  <summary>
                    {g}
                    <small>{metas.map((m) => s.choices[m.key].length).reduce((a, b) => a + b, 0)} choix</small>
                  </summary>
                  {metas.map((meta) => (
                    <div key={meta.key}>
                      <p className="sq-sub">{meta.label}{meta.numeric ? " · nombres, dans l’unité de la soumission" : ""}</p>
                      <StringList values={s.choices[meta.key]} onChange={(v) => up((d) => void (d.choices[meta.key] = v))} placeholder={meta.numeric ? "25" : "Nouveau choix"} addLabel="Ajouter un choix" />
                    </div>
                  ))}
                </details>
              );
            })}
            <button type="button" className="g-btn g-btn--quiet" style={{ marginTop: 12 }} onClick={() => { if (window.confirm("Revenir aux choix de départ pour toutes les listes ?")) up((d) => void (d.choices = structuredClone(DEFAULT_CHOICES))); }}>
              <RotateCcw size={15} aria-hidden /> Revenir aux choix de départ
            </button>
          </section>

          <section id="listes" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">06</span><div><h2 className="sq-step__title">Modèles de listes</h2><p className="sq-step__hint">Copiés dans chaque nouvelle soumission, puis modifiables. De simples libellés : confirmez chacun.</p></div></div>
            <p className="sq-sub">Ce qui est inclus</p>
            <StringList values={s.templates.inclusions} onChange={(v) => up((d) => void (d.templates.inclusions = v))} />
            <p className="sq-sub">Ce qui n’est pas inclus</p>
            <StringList values={s.templates.exclusions} onChange={(v) => up((d) => void (d.templates.exclusions = v))} />
            <p className="sq-sub">Hypothèses du prix</p>
            <StringList values={s.templates.assumptions} onChange={(v) => up((d) => void (d.templates.assumptions = v))} />
            <p className="sq-sub">À préparer par le client</p>
            <StringList values={s.templates.prep} onChange={(v) => up((d) => void (d.templates.prep = v))} />
          </section>

          <section id="modeles" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">07</span><div><h2 className="sq-step__title">Modèles de soumission</h2><p className="sq-step__hint">Créés dans le créateur avec « Enregistrer comme modèle » ; repris avec « Partir d’un modèle ».</p></div></div>
            {tpls.length ? (
              <ul className="sq-tpls">
                {tpls.map((t) => (
                  <li key={t.id}>
                    <div>
                      <strong>{t.name}</strong>
                      <small>{t.summary}</small>
                    </div>
                    <button type="button" className="sq-icon sq-icon--bad" disabled={saving} onClick={() => removeTemplate(t.id, t.name)} aria-label={`Supprimer le modèle ${t.name}`}><Trash2 size={16} aria-hidden /></button>
                  </li>
                ))}
              </ul>
            ) : <p className="g-hint">Aucun modèle pour l’instant.</p>}
          </section>

          <section id="pipedrive" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">08</span><div><h2 className="sq-step__title">Pipedrive</h2><p className="sq-step__hint">L’affaire est déplacée seulement vers une étape choisie ici, qui existe dans le pipeline des ventes.</p></div></div>
            {stagesError ? <p className="sq-note">Étapes non chargées : {stagesError}</p> : null}
            <div className="g-row g-row--2">
              {stageSelect("envoyee", "Soumission envoyée")}
              {stageSelect("ouverte", "Soumission ouverte")}
            </div>
            <div className="g-row g-row--2">
              {stageSelect("acceptee", "Soumission acceptée")}
              {stageSelect("refusee", "Soumission refusée")}
            </div>
          </section>

          <div className="sq-savebar">
            <span className={`sq-savebar__msg ${msg && !msg.ok ? "is-bad" : ""}`} role="status">{msg ? msg.text : blocking ? `${blocking} élément${blocking > 1 ? "s" : ""} bloquant${blocking > 1 ? "s" : ""} l’envoi` : "Réglages complets"}</span>
            <button type="button" className="g-btn g-btn--primary" disabled={saving} onClick={save}><Save size={16} aria-hidden /> {saving ? "Enregistrement…" : "Enregistrer les réglages"}</button>
          </div>
        </div>
        <aside className="sq-aside">
          <div className="sq-card">
            <h2 className="g-h2" style={{ fontSize: 18, marginBottom: 6 }}>Ce qui manque</h2>
            <Live items={checks} />
            {!checks.some((i) => !i.ok) ? <p className="g-hint"><CheckCircle2 size={15} aria-hidden /> Présentation et textes complets.</p> : null}
            <p className="g-hint" style={{ marginBottom: 0 }}>L’identité légale exigée avant l’envoi est celle de l’entrepreneur choisi dans chaque soumission.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
