"use client";

/* Réglages des soumissions : identité légale (jamais préremplie), textes du contrat (marqueurs pour l'avocat),
   textes LogisVert, valeurs par défaut, modèles de listes, étapes Pipedrive. Liste de vérification en direct. */
import { useMemo, useState, useTransition } from "react";
import { ImagePlus, Save, X } from "lucide-react";
import { saveSettingsAction } from "@/app/gestion/soumissions/actions";
import { LAWYER_PLACEHOLDER, LINKS, PLACEHOLDER_RE } from "@/lib/soumissions/config";
import { settingsChecks, type CheckItem } from "@/lib/soumissions/checklist";
import type { DocumentTexts, PipedriveStages, Settings } from "@/lib/soumissions/types";
import { uploadPhoto } from "./compress";
import { Area, Money, Num, Seg, StringList, Text } from "./fields";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const TEXTS: Array<{ key: keyof DocumentTexts; label: string; hint: string; lawyer?: boolean; link?: [string, string]; rows?: number }> = [
  { key: "paymentTerms", label: "Modalités de paiement", hint: "Échéancier, modes de paiement acceptés, intérêts s’il y a lieu." },
  { key: "depositRule", label: "Règle de l’acompte", hint: "Quand l’acompte est exigé et ce qu’il devient en cas d’annulation.", link: [LINKS.opcAcompte, "Acompte avant la conclusion d’un contrat (OPC)"] },
  { key: "warranty", label: "Garantie de main-d’œuvre de l’entreprise", hint: "Durée, ce qui est couvert, comment la faire valoir." },
  { key: "legalWarranty", label: "Mention de la garantie légale", hint: "Texte fourni par l’avocat.", lawyer: true, link: [LINKS.opcGaranties, "Garanties prévues par la loi (OPC)"] },
  { key: "cancellation", label: "Conditions d’annulation", hint: "Texte fourni par l’avocat : droits et délais exacts.", lawyer: true, link: [LINKS.opcAnnulation, "Annuler un achat conclu à distance (OPC)"], rows: 5 },
  { key: "terms", label: "Conditions générales", hint: "Texte complet fourni par l’avocat ou le notaire.", lawyer: true, link: [LINKS.opcDistance, "Achats à distance (OPC)"], rows: 10 },
  { key: "weatherClause", label: "Clause météo", hint: "Quand l’installation peut être reportée à cause de la météo, et comment la date est refixée." },
  { key: "changeOrder", label: "Avenants", hint: "Montré sous les hypothèses : comment un changement est chiffré et accepté." },
];

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

export function SettingsForm({ initial, stages, stagesError }: { initial: Settings; checks: CheckItem[]; stages: Array<{ id: number; name: string }>; stagesError: string | null }) {
  const [s, setS] = useState<Settings>(initial);
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
      const r = await saveSettingsAction({ company: s.company, texts: s.texts, defaults: s.defaults, templates: s.templates, pipedriveStages: s.pipedriveStages });
      setMsg(r.ok ? { ok: true, text: r.message ?? "Enregistré." } : { ok: false, text: r.error });
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
      <div className="sq-builder">
        <div>
          <section id="entreprise" className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">01</span><div><h2 className="sq-step__title">Identité de l’entreprise</h2><p className="sq-step__hint">Obligatoire avant tout envoi. Rien n’est prérempli : saisissez les valeurs exactes de vos documents officiels.</p></div></div>
            <div className="g-row g-row--2">
              <Text label="Raison sociale (nom légal)" value={co.legalName} onChange={setCo("legalName")} />
              <Text label="Nom commercial" hint="facultatif" value={co.tradeName} onChange={setCo("tradeName")} />
            </div>
            <div className="g-row g-row--2">
              <Text label="NEQ" value={co.neq} onChange={setCo("neq")} placeholder="10 chiffres" />
              <Text label="Licence RBQ" value={co.rbq} onChange={setCo("rbq")} placeholder="0000-0000-00" />
            </div>
            <Text label="Adresse" value={co.address} onChange={setCo("address")} />
            <div className="g-row g-row--2">
              <Text label="Ville" value={co.city} onChange={setCo("city")} />
              <Text label="Code postal" value={co.postalCode} onChange={(v) => setCo("postalCode")(v.toUpperCase())} maxLength={10} />
            </div>
            <div className="g-row g-row--3">
              <Text label="Téléphone" type="tel" value={co.phone} onChange={setCo("phone")} />
              <Text label="Courriel" type="email" value={co.email} onChange={setCo("email")} />
              <Text label="Site web" hint="facultatif" value={co.website} onChange={setCo("website")} />
            </div>
            <div className="g-row g-row--2">
              <Text label="Numéro de TPS" value={co.tps} onChange={setCo("tps")} placeholder="123456789 RT0001" />
              <Text label="Numéro de TVQ" value={co.tvq} onChange={setCo("tvq")} placeholder="1234567890 TQ0001" />
            </div>
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
              L’outil n’invente aucun texte juridique. Les conditions générales, l’annulation et la mention de la garantie légale doivent être rédigées ou validées par un avocat ou un notaire du Québec, puis collées ici à la place du marqueur {LAWYER_PLACEHOLDER}.
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
            <div className="sq-step__head"><span className="sq-step__n">03</span><div><h2 className="sq-step__title">Textes LogisVert</h2><p className="sq-step__hint">Montrés au client selon le mode choisi dans chaque soumission.</p></div></div>
            <p className="sq-note">
              Confirmez avec Hydro-Québec les conditions exactes du programme avant d’utiliser ces textes : admissibilité, possibilité de céder l’aide à l’entrepreneur, délais et pièces exigées. L’outil n’affirme aucune règle du programme ; seul le montant du jumelage vient de la liste officielle.{" "}
              <a href={LINKS.logisvert} target="_blank" rel="noreferrer">Page officielle LogisVert</a>
            </p>
            <Area label="Mode « déduite du prix : l’aide est versée à l’entreprise »" rows={4} value={s.texts.logisvertCession} onChange={(v) => up((d) => void (d.texts.logisvertCession = v))} />
            <Area label="Mode « versée au client par Hydro-Québec après l’installation »" rows={4} value={s.texts.logisvertClient} onChange={(v) => up((d) => void (d.texts.logisvertClient = v))} />
          </section>

          <section className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">04</span><div><h2 className="sq-step__title">Valeurs par défaut</h2></div></div>
            <div className="g-row g-row--2">
              <Num label="Validité d’une soumission" suffix="jours" integer value={s.defaults.validityDays} onChange={(v) => up((d) => void (d.defaults.validityDays = Math.min(365, Math.max(1, v ?? 30))))} />
              <Num label="Longueur de ligne incluse par unité" suffix={s.defaults.lengthUnit} value={s.defaults.includedLineLength} onChange={(v) => up((d) => void (d.defaults.includedLineLength = v))} />
            </div>
            <Seg label="Unité de longueur" value={s.defaults.lengthUnit} options={[["pi", "Pieds"], ["m", "Mètres"]]} onChange={(v) => up((d) => void (d.defaults.lengthUnit = v))} />
            <div className="g-row g-row--2">
              <Seg label="Acompte par défaut" value={s.defaults.deposit.kind} options={[["aucun", "Aucun"], ["pourcentage", "Pourcentage"], ["montant", "Montant"]]} onChange={(v) => up((d) => void (d.defaults.deposit = { kind: v, value: 0 }))} />
              {s.defaults.deposit.kind === "pourcentage" ? <Num label="Pourcentage" suffix="%" value={s.defaults.deposit.value} onChange={(v) => up((d) => void (d.defaults.deposit.value = Math.min(100, v ?? 0)))} /> : s.defaults.deposit.kind === "montant" ? <Money label="Montant" value={s.defaults.deposit.value} onChange={(v) => up((d) => void (d.defaults.deposit.value = v))} /> : null}
            </div>
          </section>

          <section className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">05</span><div><h2 className="sq-step__title">Modèles de listes</h2><p className="sq-step__hint">Copiés dans chaque nouvelle soumission, puis modifiables. De simples libellés : confirmez chacun.</p></div></div>
            <p className="sq-sub">Ce qui est inclus</p>
            <StringList values={s.templates.inclusions} onChange={(v) => up((d) => void (d.templates.inclusions = v))} />
            <p className="sq-sub">Ce qui n’est pas inclus</p>
            <StringList values={s.templates.exclusions} onChange={(v) => up((d) => void (d.templates.exclusions = v))} />
            <p className="sq-sub">Hypothèses du prix</p>
            <StringList values={s.templates.assumptions} onChange={(v) => up((d) => void (d.templates.assumptions = v))} />
            <p className="sq-sub">À préparer par le client</p>
            <StringList values={s.templates.prep} onChange={(v) => up((d) => void (d.templates.prep = v))} />
          </section>

          <section className="sq-step">
            <div className="sq-step__head"><span className="sq-step__n">06</span><div><h2 className="sq-step__title">Pipedrive</h2><p className="sq-step__hint">L’affaire est déplacée seulement vers une étape choisie ici, qui existe dans le pipeline des ventes.</p></div></div>
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
            {!checks.some((i) => !i.ok) ? <p className="g-hint"><CheckCircle2 size={15} aria-hidden /> Identité et textes complets.</p> : null}
          </div>
        </aside>
      </div>
    </div>
  );
}
