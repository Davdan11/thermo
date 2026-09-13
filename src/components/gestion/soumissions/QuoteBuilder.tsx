"use client";

/* ==================================================================
   Constructeur de soumission : tout ce qui doit correspondre aux
   travaux réels (client, entrepreneur, chantier, machine et jumelage
   AHRI officiel, emplacement de chaque unité avec photos, date,
   inclus / non inclus, hypothèses, prix, options, rabais, LogisVert,
   paiement, validité).
   - « Trouver un client » : recherche dans les clients du CRM, un clic
     remplit le client et relie la soumission à sa fiche ;
   - « Entrepreneur qui réalise les travaux » : l'installateur
     partenaire choisi (conformité affichée), copié à l'envoi ;
   - choix en un clic (listes des réglages) et « Autre… » pour écrire ;
   - modèles : partir d'un modèle, enregistrer comme modèle ;
   - LogisVert : information seulement, jamais soustraite du total dû.
   Totaux et liste de vérification en direct ; enregistrement par une
   Server Action (validée côté serveur, machine recalculée depuis le
   catalogue).
   ================================================================== */

import { useEffect, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, CheckCircle2, Eye, ImagePlus, Info, Plus, RefreshCw, Save, Sparkles, Trash2, X, XCircle } from "lucide-react";
import { loadTemplateAction, machineAction, saveQuoteAction, saveTemplateAction } from "@/app/gestion/soumissions/actions";
import { ModelSearch, type ModelPick } from "@/components/gestion/ModelSearch";
import { circuitToInstall, isPumpDrain, LEGACY_LABELS, mountingKind } from "@/lib/soumissions/choices";
import { LINKS, LOGISVERT_NOTICE } from "@/lib/soumissions/config";
import { CONTRACTOR_GROUP, quoteChecks, settingsChecks, type CheckItem } from "@/lib/soumissions/checklist";
import type { QuoteClientPrefill } from "@/lib/soumissions/clients";
import type { ContractorStatus } from "@/lib/soumissions/contractor";
import { formatDay } from "@/lib/soumissions/dates";
import { emptyClient, newIndoor, rid, toItems } from "@/lib/soumissions/defaults";
import { formatNumber, money } from "@/lib/soumissions/money";
import { explanationDraft, extraLength } from "@/lib/soumissions/present";
import { applyTemplate } from "@/lib/soumissions/templates";
import { computeTotals, defaultSelection, logisvertAmount, logisvertModeFor, withLogisvertMode, type TaxRates } from "@/lib/soumissions/totals";
import {
  ELECTRICIAN_LABELS,
  UNIT_LABELS,
  type CatalogItem,
  type CatalogRole,
  type Discount,
  type IndoorPlacement,
  type LineUnit,
  type MachineInfo,
  type PairingInfo,
  type QuoteContent,
  type QuoteLine,
  type Settings,
} from "@/lib/soumissions/types";
import { Choice, ChoiceNum } from "./choice";
import { ClientFinder } from "./ClientFinder";
import { uploadPhoto } from "./compress";
import { ContractorPicker } from "./ContractorPicker";
import { Area, Check, ItemList, Money, move, Num, Select, Seg, StringList, Text } from "./fields";
import { TemplateBar, type TemplateOption } from "./TemplateBar";

type Opts<T extends string> = Array<[T, string]>;
const entries = <T extends string>(o: Record<T, string>) => Object.entries(o) as Opts<T>;
const FLOORS: Array<[number, string]> = [[0, "Sous-sol"], [1, "Rez-de-chaussée"], [2, "1er étage"], [3, "2e étage"]];
const WARRANTY_TYPE: Record<string, string> = { parts: "Pièces", compressor: "Compresseur", labor: "Main-d’œuvre", replacement: "Remplacement" };
const CONFIDENCE: Record<string, string> = { verified: "vérifiée", manufacturer_claim: "selon le fabricant", estimated: "estimée", placeholder: "provisoire", needs_review: "à revoir", deprecated: "périmée" };

export interface BuilderProps {
  quoteId: string | null;
  number: string | null;
  version: number | null;
  initial: QuoteContent;
  internalNotes: string;
  settings: Settings;
  today: string;
  rates: TaxRates;
  /** Partenaires proposés (actifs, plus celui déjà choisi) : résumés sans adresse ni numéros. */
  contractors: ContractorStatus[];
  contractorId: string | null;
  /** Fiche client du CRM reliée (c_…). */
  clientId: string | null;
  templates: TemplateOption[];
  /** Soumission copiée : « autre » quand c'est pour un autre client. */
  copy?: "meme" | "autre" | null;
}

function Step({ id, n, title, hint, children }: { id: string; n: string; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="sq-step" aria-labelledby={`${id}-t`}>
      <div className="sq-step__head">
        <span className="sq-step__n" aria-hidden>{n}</span>
        <div>
          <h2 id={`${id}-t`} className="sq-step__title">{title}</h2>
          {hint ? <p className="sq-step__hint">{hint}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

function PhotoPicker({ ids, onChange, quoteId }: { ids: string[]; onChange: (ids: string[]) => void; quoteId: string | null }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  return (
    <div>
      <div className="sq-thumbs">
        {ids.map((id) => (
          <span key={id} className="sq-thumb">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/gestion/soumissions/photo/${id}`} alt="Photo de la visite" loading="lazy" />
            <button type="button" onClick={() => onChange(ids.filter((x) => x !== id))} aria-label="Retirer la photo"><X size={14} aria-hidden /></button>
          </span>
        ))}
        {ids.length < 6 ? (
          <label className="sq-upload">
            <ImagePlus size={18} aria-hidden /> {busy ? "Envoi…" : "Photos de la visite"}
            <input
              type="file"
              accept="image/*"
              multiple
              disabled={busy}
              onChange={async (e) => {
                const files = [...(e.target.files ?? [])].slice(0, 6 - ids.length);
                e.target.value = "";
                if (!files.length) return;
                setBusy(true);
                setErr(null);
                const added: string[] = [];
                for (const f of files) {
                  const r = await uploadPhoto(f, { quoteId });
                  if (r.ok) added.push(r.id);
                  else setErr(r.error);
                }
                setBusy(false);
                if (added.length) onChange([...ids, ...added]);
              }}
            />
          </label>
        ) : null}
      </div>
      {err ? <p className="g-error">{err}</p> : null}
    </div>
  );
}

export function QuoteBuilder(props: BuilderProps) {
  const { settings, today, rates } = props;
  const ch = settings.choices;
  const router = useRouter();
  // Ancien brouillon « cession » ou « aucune » malgré un montant : le mode suit le jumelage.
  const [c, setC] = useState<QuoteContent>(() => withLogisvertMode(props.initial));
  const [notes, setNotes] = useState(props.internalNotes);
  const [contractorId, setContractorId] = useState<string | null>(props.contractorId);
  const [clientId, setClientId] = useState<string | null>(props.clientId);
  const [pairings, setPairings] = useState<PairingInfo[] | null>(null);
  const [loadingMachine, startMachine] = useTransition();
  const [saving, startSave] = useTransition();
  const [tplBusy, startTpl] = useTransition();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [dirty, setDirty] = useState(false);
  const [pkgHint, setPkgHint] = useState<string | null>(null);

  const up = (fn: (d: QuoteContent) => void) => {
    setC((prev) => {
      const d = structuredClone(prev);
      fn(d);
      return d;
    });
    setDirty(true);
  };

  useEffect(() => {
    const slug = props.initial.machine?.modelSlug;
    if (!slug) return;
    machineAction(slug).then((r) => r.ok && setPairings(r.pairings)).catch(() => undefined);
  }, [props.initial.machine?.modelSlug]);

  useEffect(() => {
    if (!dirty) return;
    const onLeave = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", onLeave);
    return () => window.removeEventListener("beforeunload", onLeave);
  }, [dirty]);

  const contractorStatus = props.contractors.find((s) => s.installerId === contractorId) ?? null;
  const pick = useMemo(() => ({ id: contractorId, status: contractorStatus }), [contractorId, contractorStatus]);
  const totals = useMemo(() => computeTotals(c, defaultSelection(c.lines), rates, today), [c, rates, today]);
  const checks = useMemo(() => [...settingsChecks(settings).filter((i) => i.severity === "bloquant"), ...quoteChecks(c, settings, today, rates, pick)], [c, settings, today, rates, pick]);
  const blockers = checks.filter((i) => !i.ok && i.severity === "bloquant");
  const warnings = checks.filter((i) => !i.ok && i.severity === "avertissement");
  const catalog = useMemo(() => [...settings.extras, ...settings.labour], [settings]);
  const byRole = (role: CatalogRole) => catalog.find((x) => x.role === role) ?? null;
  const m = c.machine;
  const lvAmount = logisvertAmount({ machine: m, logisvert: { mode: "client" } });
  const unit = c.placement.lengthUnit;
  const mounting = mountingKind(c.placement.outdoor.mounting);

  const pickModel = (p: ModelPick | null) => {
    if (!p) {
      up((d) => {
        d.machine = null;
        d.logisvert.mode = "aucune";
      });
      setPairings(null);
      return;
    }
    startMachine(async () => {
      const r = await machineAction(p.slug);
      if (!r.ok) {
        setMsg({ ok: false, text: r.error });
        return;
      }
      setPairings(r.pairings);
      up((d) => {
        d.machine = { ...r.machine, pairing: r.pairings[0] ?? null, offList: r.pairings.length === 0, offListIndoor: "", showCatalogWarranties: false, warrantyText: "", explanation: "" };
        d.logisvert.mode = logisvertModeFor(d.machine);
      });
    });
  };

  const setMachine = (patch: Partial<MachineInfo>) =>
    up((d) => {
      if (!d.machine) return;
      Object.assign(d.machine, patch);
      d.logisvert.mode = logisvertModeFor(d.machine);
    });

  const setUnit = (id: string, patch: Partial<IndoorPlacement>) =>
    up((d) => {
      const u = d.placement.indoor.find((x) => x.id === id);
      if (u) Object.assign(u, patch);
    });

  const newLine = (over: Partial<QuoteLine>): QuoteLine => ({ id: rid("l"), kind: "autre", label: "", description: "", unit: "forfait", quantity: 1, unitPriceCents: 0, optional: false, selectedByDefault: false, discount: null, catalogRef: null, unitRef: null, ...over });
  const fromCatalog = (x: CatalogItem, over: Partial<QuoteLine> = {}): QuoteLine => newLine({ kind: x.kind === "main-oeuvre" ? "main-oeuvre" : "extra", label: x.name, description: x.description, unit: x.unit, quantity: x.defaultQuantity || 1, unitPriceCents: x.unitPriceCents, optional: x.optional, selectedByDefault: x.optional, catalogRef: x.id, ...over });

  /** Ligne liée à une unité et à un rôle du catalogue (ligne supplémentaire, pompe…) : ajoutée ou mise à jour. */
  const linkLine = (role: CatalogRole, qty: number, unitRef: string | null, fallback: string, unitHint?: LineUnit) =>
    up((d) => {
      const item = catalog.find((x) => x.role === role) ?? null;
      const existing = d.lines.find((l) => l.unitRef === unitRef && ((item && l.catalogRef === item.id) || (!item && l.label === fallback)));
      let q = qty;
      if (item && unitHint && item.unit !== unitHint) q = unitHint === "pied" && item.unit === "metre" ? Math.round((qty / 3.28084) * 10) / 10 : unitHint === "metre" && item.unit === "pied" ? Math.ceil(qty * 3.28084) : qty;
      if (existing) existing.quantity = q;
      else d.lines.push(item ? fromCatalog(item, { quantity: q, unitRef, optional: false, selectedByDefault: false }) : newLine({ kind: "extra", label: fallback, quantity: q, unit: unitHint ?? "unite", unitRef }));
    });
  const hasLinked = (role: CatalogRole, unitRef: string | null) => {
    const item = byRole(role);
    return c.lines.some((l) => l.unitRef === unitRef && (item ? l.catalogRef === item.id : false));
  };

  const addPackage = (id: string) => {
    const p = settings.packages.find((x) => x.id === id);
    if (!p) return;
    up((d) => {
      d.lines.unshift(newLine({ kind: "forfait", label: p.label, description: p.description, unit: "forfait", quantity: 1, unitPriceCents: p.priceCents, catalogRef: p.id }));
      if (p.includedLineLength !== null) for (const u of d.placement.indoor) if (u.lineIncluded === null) u.lineIncluded = p.includedLineLength;
    });
    setPkgHint(p.inclusions.length ? p.id : null);
  };

  const suggested = settings.packages.filter((p) => {
    if (!m) return true;
    const cap = m.pairing?.nominalBtu ?? null;
    const typeOk = p.systemType === "tous" || !p.systemType || p.systemType === m.systemType;
    const capOk = cap === null || ((p.capacityMinBtu === null || cap >= p.capacityMinBtu) && (p.capacityMaxBtu === null || cap <= p.capacityMaxBtu));
    return typeOk && capOk;
  });

  const contentPayload = () => ({
    ...c,
    machine: c.machine ? { modelSlug: c.machine.modelSlug, ahri: c.machine.offList ? null : (c.machine.pairing?.ahri ?? null), offList: c.machine.offList, offListIndoor: c.machine.offListIndoor, showCatalogWarranties: c.machine.showCatalogWarranties, warrantyText: c.machine.warrantyText, explanation: c.machine.explanation } : null,
  });
  const payload = () => ({ content: contentPayload(), internalNotes: notes, contractorId, clientId });

  const save = (then?: "apercu" | "fiche") =>
    startSave(async () => {
      const r = await saveQuoteAction(props.quoteId, payload());
      if (!r.ok) {
        setMsg({ ok: false, text: r.error });
        return;
      }
      setDirty(false);
      setMsg({ ok: true, text: `Enregistré à ${new Date().toLocaleTimeString("fr-CA", { hour: "numeric", minute: "2-digit" })}.` });
      const id = r.id ?? props.quoteId;
      if (then === "apercu") router.push(`/gestion/soumissions/${id}/apercu`);
      else if (then === "fiche") router.push(`/gestion/soumissions/${id}`);
      else if (!props.quoteId && id) router.replace(`/gestion/soumissions/${id}/modifier`);
      else router.refresh();
    });

  /* ---------------- Client (CRM) ---------------- */

  const onPickClient = (p: QuoteClientPrefill) => {
    up((d) => void (d.client = { firstName: p.firstName, lastName: p.lastName, email: p.email, phone: p.phone, address: p.address, city: p.city, postalCode: p.postalCode }));
    setClientId(p.id);
    setMsg({ ok: true, text: `Client repris de sa fiche : ${[p.firstName, p.lastName].filter(Boolean).join(" ") || "coordonnées"}.` });
  };
  const onNewClient = () => {
    const typed = Object.values(c.client).some((v) => v.trim());
    if (typed && !window.confirm("Vider les coordonnées du client pour en saisir un nouveau ?")) return;
    if (typed) up((d) => void (d.client = emptyClient()));
    setClientId(null);
  };

  /* ---------------- Modèles ---------------- */

  const applyTemplateId = (id: string) =>
    startTpl(async () => {
      if ((c.machine || c.lines.length) && !window.confirm("Partir de ce modèle remplace la machine, le plan, les prix, les listes et le déroulement. Le client, le chantier et les dates restent. Continuer ?")) return;
      const r = await loadTemplateAction(id);
      if (!r.ok) {
        setMsg({ ok: false, text: r.error });
        return;
      }
      setC((prev) => withLogisvertMode(applyTemplate(prev, r.content)));
      setDirty(true);
      if (!contractorId && r.contractorId && props.contractors.some((s) => s.installerId === r.contractorId)) setContractorId(r.contractorId);
      setPairings(null);
      const slug = r.content.machine?.modelSlug;
      if (slug) {
        const mm = await machineAction(slug);
        if (mm.ok) setPairings(mm.pairings);
      }
      setMsg({ ok: true, text: `Modèle « ${r.name} » appliqué : vérifiez le plan et les prix.` });
    });

  const saveTemplate = async (name: string): Promise<{ ok: boolean; text: string }> => {
    const r = await saveTemplateAction({ name, content: contentPayload(), contractorId });
    if (!r.ok) return { ok: false, text: r.error };
    router.refresh();
    return { ok: true, text: r.message ?? "Modèle enregistré." };
  };

  const STEP_OF: Record<string, string> = { Client: "client", Chantier: "client", [CONTRACTOR_GROUP]: "entrepreneur", Machine: "machine", "Plan d’installation": "plan", Date: "date", Contenu: "contenu", Prix: "prix", Validité: "conditions" };
  const badSteps = new Set(blockers.map((b) => STEP_OF[b.group] ?? ""));
  const TOC: Array<[string, string]> = [["client", "Client"], ["entrepreneur", "Entrepreneur"], ["machine", "Machine"], ["plan", "Plan"], ["date", "Date"], ["contenu", "Inclus / exclus"], ["prix", "Prix"], ["conditions", "Conditions"], ["notes", "Notes"]];
  const clientName = `${c.client.firstName} ${c.client.lastName}`.trim();

  return (
    <div>
      <div className="g-head" style={{ marginBottom: 12 }}>
        <div>
          <p className="g-eyebrow">{props.number ? `Soumission ${props.number} · version ${props.version} (brouillon)` : "Nouvelle soumission"}</p>
          <h1 className="g-h1">{clientName || "Nouvelle soumission"}</h1>
        </div>
        {props.quoteId ? <Link href={`/gestion/soumissions/${props.quoteId}`} className="g-btn g-btn--ghost">Fiche de la soumission</Link> : null}
      </div>
      {props.copy === "autre" ? (
        <p className="g-alert g-alert--info" role="status" style={{ marginBottom: 12 }}>
          Copie pour un autre client : cherchez le client ou saisissez-le. La machine, le plan, les prix et l’entrepreneur sont repris.
        </p>
      ) : null}
      <TemplateBar templates={props.templates} onApply={applyTemplateId} onSave={saveTemplate} busy={tplBusy} />
      <nav className="sq-toc" aria-label="Sections">
        {TOC.map(([id, l]) => <a key={id} href={`#${id}`} className={badSteps.has(id) ? "is-bad" : ""}>{l}</a>)}
      </nav>

      <div className="sq-builder">
        <div>
          {/* 1. Client et chantier */}
          <Step id="client" n="01" title="Client et chantier" hint="Trouvez un client existant ou saisissez-en un nouveau, puis l’endroit exact des travaux.">
            <ClientFinder clientId={clientId} clientName={clientName} onPick={onPickClient} onNew={onNewClient} />
            <div className="g-row g-row--2">
              <Text label="Prénom" value={c.client.firstName} onChange={(v) => up((d) => void (d.client.firstName = v))} autoComplete="off" />
              <Text label="Nom" value={c.client.lastName} onChange={(v) => up((d) => void (d.client.lastName = v))} />
            </div>
            <div className="g-row g-row--2">
              <Text label="Courriel" type="email" inputMode="email" value={c.client.email} onChange={(v) => up((d) => void (d.client.email = v))} />
              <Text label="Téléphone" type="tel" inputMode="tel" value={c.client.phone} onChange={(v) => up((d) => void (d.client.phone = v))} />
            </div>
            <Text label="Adresse de facturation" value={c.client.address} onChange={(v) => up((d) => void (d.client.address = v))} />
            <div className="g-row g-row--2">
              <Text label="Ville" value={c.client.city} onChange={(v) => up((d) => void (d.client.city = v))} />
              <Text label="Code postal" value={c.client.postalCode} onChange={(v) => up((d) => void (d.client.postalCode = v.toUpperCase()))} maxLength={10} />
            </div>
            <p className="sq-sub">Chantier</p>
            <Check label="Les travaux ont lieu à l’adresse de facturation" checked={c.site.sameAsBilling} onChange={(v) => up((d) => void (d.site.sameAsBilling = v))} />
            {!c.site.sameAsBilling ? (
              <>
                <Text label="Adresse des travaux" value={c.site.address} onChange={(v) => up((d) => void (d.site.address = v))} />
                <div className="g-row g-row--2">
                  <Text label="Ville des travaux" value={c.site.city} onChange={(v) => up((d) => void (d.site.city = v))} />
                  <Text label="Code postal des travaux" value={c.site.postalCode} onChange={(v) => up((d) => void (d.site.postalCode = v.toUpperCase()))} maxLength={10} />
                </div>
              </>
            ) : null}
            <Choice label="Type de propriété" value={c.site.propertyType} options={ch.propertyType} legacy={LEGACY_LABELS.propertyType} maxLength={80} onChange={(v) => up((d) => void (d.site.propertyType = v))} />
            <div className="g-row g-row--2">
              <Text label="Année de construction" hint="si connue" value={c.site.yearBuilt} onChange={(v) => up((d) => void (d.site.yearBuilt = v))} maxLength={20} />
              <ChoiceNum label="Niveaux hors sol" value={c.site.floors} options={ch.floors} integer min={1} max={10} onChange={(v) => up((d) => void (d.site.floors = v))} />
            </div>
            <Check label="Il y a un sous-sol" checked={c.site.basement} onChange={(v) => up((d) => void (d.site.basement = v))} />
            <Choice label="Accès et stationnement" value={c.site.access} options={ch.access} multiline maxLength={1000} placeholder="Entrée par la ruelle, stationnement dans l’entrée…" onChange={(v) => up((d) => void (d.site.access = v))} />
            <Area label="Contraintes des occupants" rows={2} value={c.site.constraints} onChange={(v) => up((d) => void (d.site.constraints = v))} placeholder="Télétravail, jeune enfant, horaires…" />
            <Text label="Qui doit être présent pendant les travaux" value={c.site.presence} onChange={(v) => up((d) => void (d.site.presence = v))} placeholder="Un adulte, de l’arrivée de l’équipe à la mise en service" />
          </Step>

          {/* 2. Entrepreneur */}
          <Step id="entrepreneur" n="02" title="Entrepreneur qui réalise les travaux" hint="L’installateur partenaire choisi : sa raison sociale, sa licence RBQ, son NEQ et ses taxes figurent au document. Thermopompes À Vendre présente la soumission.">
            <ContractorPicker options={props.contractors} value={contractorId} onChange={(id) => { setContractorId(id); setDirty(true); }} />
          </Step>

          {/* 3. Machine */}
          <Step id="machine" n="03" title="Machine" hint="Modèle du catalogue, puis le jumelage exact de la liste officielle LogisVert.">
            {m ? (
              <div className="sq-machine">
                {m.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.imageUrl} alt="" />
                ) : <span />}
                <div>
                  <strong style={{ fontSize: 17 }}>{m.brand} {m.name}</strong>
                  <p className="g-hint" style={{ margin: "2px 0 6px" }}>Unité extérieure {m.outdoorModel} · {m.systemTypeLabel}{m.refrigerant ? ` · ${m.refrigerant}` : ""}</p>
                  <button type="button" className="g-btn g-btn--quiet" onClick={() => pickModel(null)}><RefreshCw size={15} aria-hidden /> Changer de modèle</button>
                </div>
              </div>
            ) : (
              <ModelSearch brand="" value={null} onChange={pickModel} />
            )}
            {loadingMachine ? <p className="g-hint">Chargement des jumelages officiels…</p> : null}

            {m ? (
              <>
                <p className="sq-sub">Jumelage (unité extérieure + intérieure)</p>
                {pairings === null ? <p className="g-hint">Chargement…</p> : null}
                {pairings && pairings.length === 0 ? <p className="sq-note">Aucun jumelage de ce modèle dans la liste officielle LogisVert{m.listDate ? ` du ${m.listDate}` : ""} : aucune aide possible.</p> : null}
                <div className="sq-pairings" role="radiogroup" aria-label="Jumelage">
                  {(pairings ?? []).map((p) => (
                    <label key={p.ahri} className="sq-pair">
                      <input type="radio" name="jumelage" checked={!m.offList && m.pairing?.ahri === p.ahri} onChange={() => setMachine({ pairing: p, offList: false })} />
                      <span>
                        <strong>AHRI {p.ahri}</strong>
                        {p.indoorDescription || "Unité intérieure non précisée"}
                        <span className="g-hint" style={{ display: "block" }}>
                          {[p.h5Btu ? `${formatNumber(p.h5Btu)} BTU/h à −15 °C` : p.h17Btu ? `${formatNumber(p.h17Btu)} BTU/h à −8 °C` : null, p.nominalBtu ? `nominal ${formatNumber(p.nominalBtu)}` : null, p.hspf2 ? `HSPF2 ${formatNumber(p.hspf2, 2)}` : null, p.seer2 ? `SEER2 ${formatNumber(p.seer2, 2)}` : null, p.coldClimate ? "climat froid" : null].filter(Boolean).join(" · ")}
                        </span>
                      </span>
                      <span className={`sq-pair__amt ${p.logisVertCents ? "" : "is-zero"}`}>{p.logisVertCents ? money(p.logisVertCents) : "0 $"}</span>
                    </label>
                  ))}
                  <label className="sq-pair">
                    <input type="radio" name="jumelage" checked={m.offList} onChange={() => setMachine({ offList: true, pairing: null })} />
                    <span><strong>Jumelage hors de la liste officielle</strong>Aucune aide LogisVert : le document le dira clairement.</span>
                    <span className="sq-pair__amt is-zero">0 $</span>
                  </label>
                </div>
                {m.offList ? <Text label="Unités intérieures du jumelage" value={m.offListIndoor} onChange={(v) => setMachine({ offListIndoor: v })} placeholder="Modèles des unités intérieures" /> : null}
                <p className={`sq-lv ${lvAmount ? "" : "sq-lv--no"}`} style={{ marginTop: 10 }}>
                  {lvAmount ? <>Montant officiel de ce jumelage : <strong>{money(lvAmount)}</strong> (liste LogisVert{m.listDate ? ` du ${m.listDate}` : ""}), montré au client à titre d’information.</> : <>Jumelage absent de la liste ou sans montant : aucune aide LogisVert.</>}
                </p>

                <p className="sq-sub">Garantie du fabricant</p>
                {m.catalogWarranties.length ? (
                  <>
                    <ul className="sq-checks" style={{ marginBottom: 8 }}>
                      {m.catalogWarranties.map((w, i) => (
                        <li key={i}><AlertTriangle size={16} className="is-warn" aria-hidden /><span>{WARRANTY_TYPE[w.type] ?? w.type} : {w.years} ans{w.requiresRegistration ? ", enregistrement requis" : ""} <small>Donnée du catalogue : {CONFIDENCE[w.confidence] ?? w.confidence}</small></span></li>
                      ))}
                    </ul>
                    <Check label="J’ai vérifié ces garanties auprès du fabricant : les afficher au client" checked={m.showCatalogWarranties} onChange={(v) => setMachine({ showCatalogWarranties: v })} />
                  </>
                ) : <p className="g-hint">Le catalogue n’a pas de garantie pour ce modèle.</p>}
                <Area label="Garantie du fabricant (votre texte, prioritaire)" rows={2} value={m.warrantyText} onChange={(v) => setMachine({ warrantyText: v })} placeholder="Ex. 10 ans pièces et compresseur, sur enregistrement du produit dans les 60 jours (à vérifier)" />
                <Area label="Ce que la machine fera pour cette maison" hint="en mots simples" rows={3} value={m.explanation} onChange={(v) => setMachine({ explanation: v })} />
                <button type="button" className="g-btn g-btn--quiet" onClick={() => setMachine({ explanation: explanationDraft(m) })}><Sparkles size={15} aria-hidden /> Proposer un texte à partir des chiffres certifiés</button>
              </>
            ) : null}
          </Step>

          {/* 4. Plan d'installation */}
          <Step id="plan" n="04" title="Plan d’installation" hint="Un clic par choix ; « Autre… » pour écrire. Tout apparaît au client.">
            <Seg label="Unité de longueur" value={unit} options={[["pi", "Pieds"], ["m", "Mètres"]]} onChange={(v) => up((d) => void (d.placement.lengthUnit = v))} />
            <div className="sq-unit">
              <div className="sq-unit__head"><strong>Unité extérieure</strong></div>
              <div className="sq-choices">
                <Choice label="Emplacement" value={c.placement.outdoor.location} options={ch.outdoorLocation} maxLength={200} placeholder="Mur arrière, à gauche de la porte-patio" onChange={(v) => up((d) => void (d.placement.outdoor.location = v))} />
                <Choice label="Support" value={c.placement.outdoor.mounting} options={ch.mounting} legacy={LEGACY_LABELS.mounting} onChange={(v) => up((d) => void (d.placement.outdoor.mounting = v))} />
                <Choice label="Dégagement" value={c.placement.outdoor.clearance} options={ch.clearance} maxLength={400} placeholder="30 cm du mur, 60 cm devant" onChange={(v) => up((d) => void (d.placement.outdoor.clearance = v))} />
                <Choice label="Neige et glace" value={c.placement.outdoor.snow} options={ch.snow} maxLength={400} placeholder="Hors de la chute de neige du toit" onChange={(v) => up((d) => void (d.placement.outdoor.snow = v))} />
              </div>
              <Text label="Remarques" value={c.placement.outdoor.notes} onChange={(v) => up((d) => void (d.placement.outdoor.notes = v))} />
              {mounting === "support-mural" && !hasLinked("support-mural", null) ? <button type="button" className="g-btn g-btn--quiet" onClick={() => linkLine("support-mural", 1, null, "Support mural")}><Plus size={15} aria-hidden /> Ajouter le support mural aux prix</button> : null}
              {mounting === "support-sol" && !hasLinked("support-sol", null) ? <button type="button" className="g-btn g-btn--quiet" onClick={() => linkLine("support-sol", 1, null, "Support au sol")}><Plus size={15} aria-hidden /> Ajouter le support au sol aux prix</button> : null}
              <PhotoPicker ids={c.placement.outdoor.photos} quoteId={props.quoteId} onChange={(ids) => up((d) => void (d.placement.outdoor.photos = ids))} />
            </div>

            {c.placement.indoor.map((u, i) => {
              const extra = extraLength(u);
              return (
                <div key={u.id} className="sq-unit">
                  <div className="sq-unit__head">
                    <input className="g-input" value={u.label} aria-label="Nom de l’unité" onChange={(e) => setUnit(u.id, { label: e.target.value })} style={{ maxWidth: 260 }} />
                    <span className="sq-items__btns">
                      <button type="button" className="sq-icon" disabled={i === 0} onClick={() => up((d) => void (d.placement.indoor = move(d.placement.indoor, i, -1)))} aria-label="Monter">↑</button>
                      <button type="button" className="sq-icon sq-icon--bad" onClick={() => up((d) => { d.placement.indoor = d.placement.indoor.filter((x) => x.id !== u.id); d.lines = d.lines.filter((l) => l.unitRef !== u.id); })} aria-label="Retirer l’unité"><Trash2 size={16} aria-hidden /></button>
                    </span>
                  </div>
                  <Choice label="Type" value={u.type} options={ch.indoorType} legacy={LEGACY_LABELS.indoorType} onChange={(v) => setUnit(u.id, { type: v })} />
                  <div className="g-row g-row--2">
                    <Text label="Modèle de l’unité intérieure" value={u.model} onChange={(v) => setUnit(u.id, { model: v })} />
                    <Num label="Capacité" suffix="BTU/h" integer value={u.capacityBtu} onChange={(v) => setUnit(u.id, { capacityBtu: v })} />
                  </div>
                  <div className="sq-choices">
                    <ChoiceNum label="Niveau" hint="autre : 0 sous-sol, 1 rez-de-chaussée, 2 premier étage…" value={u.floor} presets={FLOORS} integer min={0} max={10} onChange={(v) => setUnit(u.id, { floor: v })} />
                    <Choice label="Pièce" value={u.room} options={ch.room} placeholder="Salon" onChange={(v) => setUnit(u.id, { room: v })} />
                    <Choice label="Mur" value={u.wall} options={ch.wall} maxLength={160} placeholder="Mur extérieur arrière, au-dessus de la fenêtre" onChange={(v) => setUnit(u.id, { wall: v })} />
                    <Choice label="Hauteur approximative" value={u.height} options={ch.height} placeholder="Environ 2,1 m du plancher" onChange={(v) => setUnit(u.id, { height: v })} />
                    <ChoiceNum label="Longueur de ligne" value={u.lineLength} options={ch.lineLength} suffix={unit} max={1000} onChange={(v) => setUnit(u.id, { lineLength: v })} />
                    <ChoiceNum label="Longueur incluse" value={u.lineIncluded} options={ch.lineLength} suffix={unit} max={1000} onChange={(v) => setUnit(u.id, { lineIncluded: v })} />
                    <Choice label="Parcours" value={u.lineRoute} options={ch.route} legacy={LEGACY_LABELS.route} onChange={(v) => setUnit(u.id, { lineRoute: v })} />
                    <Choice label="Finition" value={u.lineFinish} options={ch.finish} legacy={LEGACY_LABELS.finish} onChange={(v) => setUnit(u.id, { lineFinish: v })} />
                    <ChoiceNum label="Percements" value={u.penetrations} options={ch.penetrations} integer max={20} onChange={(v) => setUnit(u.id, { penetrations: v })} />
                    <Choice label="Matériau du mur" value={u.wallMaterial} options={ch.wallMaterial} legacy={LEGACY_LABELS.wallMaterial} onChange={(v) => setUnit(u.id, { wallMaterial: v })} />
                    <Choice label="Drain" value={u.drain} options={ch.drain} legacy={LEGACY_LABELS.drain} onChange={(v) => setUnit(u.id, { drain: v })} />
                  </div>
                  {extra > 0 ? (
                    <p className="sq-note" style={{ marginTop: 8 }}>
                      {formatNumber(extra, 1)} {unit} au-delà de la longueur incluse.{" "}
                      <button type="button" className="g-btn g-btn--quiet" onClick={() => linkLine("ligne-supplementaire", extra, u.id, "Ligne de réfrigérant supplémentaire", unit === "pi" ? "pied" : "metre")}>
                        {hasLinked("ligne-supplementaire", u.id) ? "Mettre à jour la ligne de prix" : "Facturer cette longueur"}
                      </button>
                    </p>
                  ) : null}
                  {isPumpDrain(u.drain) && !hasLinked("pompe-drain", u.id) ? <button type="button" className="g-btn g-btn--quiet" onClick={() => linkLine("pompe-drain", 1, u.id, "Pompe à condensat (pompe à drain)")}><Plus size={15} aria-hidden /> Ajouter la pompe à condensat aux prix</button> : null}
                  <Text label="Remarques" value={u.notes} onChange={(v) => setUnit(u.id, { notes: v })} />
                  <PhotoPicker ids={u.photos} quoteId={props.quoteId} onChange={(ids) => setUnit(u.id, { photos: ids })} />
                </div>
              );
            })}
            <div className="sq-add">
              <button type="button" className="g-btn g-btn--ghost" onClick={() => up((d) => void d.placement.indoor.push(newIndoor(d.placement.indoor.length + 1, settings.defaults.includedLineLength)))}><Plus size={16} aria-hidden /> Ajouter une unité intérieure</button>
            </div>

            <p className="sq-sub">Électricité</p>
            <p className="g-hint" style={{ marginTop: -4 }}>De simples choix : aucune valeur électrique n’est imposée.</p>
            <div className="sq-choices">
              <Choice label="Capacité du panneau" hint="si connue" value={c.placement.electrical.panelCapacity} options={ch.panelCapacity} maxLength={40} placeholder="200 A" onChange={(v) => up((d) => void (d.placement.electrical.panelCapacity = v))} />
              <Choice label="Circuit dédié" value={c.placement.electrical.circuit} options={ch.circuit} legacy={LEGACY_LABELS.circuit} onChange={(v) => up((d) => void (d.placement.electrical.circuit = v))} />
              <Choice label="Disjoncteur" value={c.placement.electrical.breaker} options={ch.breaker} maxLength={40} placeholder="2 × 20 A" onChange={(v) => up((d) => void (d.placement.electrical.breaker = v))} />
              <Choice label="Sectionneur" value={c.placement.electrical.disconnect} options={ch.disconnect} legacy={LEGACY_LABELS.disconnect} onChange={(v) => up((d) => void (d.placement.electrical.disconnect = v))} />
              <ChoiceNum label="Distance panneau → unité extérieure" value={c.placement.electrical.panelDistance} options={ch.panelDistance} suffix={unit} max={1000} onChange={(v) => up((d) => void (d.placement.electrical.panelDistance = v))} />
            </div>
            <Select label="Maître électricien" value={c.placement.electrical.electrician} options={entries(ELECTRICIAN_LABELS)} onChange={(v) => up((d) => void (d.placement.electrical.electrician = v))} />
            <Text label="Remarques sur l’électricité" value={c.placement.electrical.notes} onChange={(v) => up((d) => void (d.placement.electrical.notes = v))} />
            {circuitToInstall(c.placement.electrical.circuit) && !hasLinked("circuit", null) ? <button type="button" className="g-btn g-btn--quiet" onClick={() => linkLine("circuit", 1, null, "Circuit électrique dédié")}><Plus size={15} aria-hidden /> Ajouter le circuit dédié aux prix</button> : null}

            <p className="sq-sub">Ancien système</p>
            <Check label="Retrait de l’ancien système" checked={c.placement.removal.remove} onChange={(v) => up((d) => void (d.placement.removal.remove = v))} />
            {c.placement.removal.remove ? (
              <>
                <Choice label="Ce qui est retiré" value={c.placement.removal.description} options={ch.removal} multiline maxLength={600} placeholder="Climatiseur de fenêtre du salon, disposé de façon responsable" onChange={(v) => up((d) => void (d.placement.removal.description = v))} />
                {!hasLinked("retrait", null) ? <button type="button" className="g-btn g-btn--quiet" onClick={() => linkLine("retrait", 1, null, "Retrait de l’ancien appareil")}><Plus size={15} aria-hidden /> Ajouter le retrait aux prix</button> : null}
              </>
            ) : null}
          </Step>

          {/* 5. Date */}
          <Step id="date" n="05" title="Date et déroulement">
            <Seg label="Planification" value={c.schedule.mode} options={[["date", "Date prévue"], ["fenetre", "Fenêtre de dates"]]} onChange={(v) => up((d) => void (d.schedule.mode = v))} />
            {c.schedule.mode === "date" ? (
              <Text label="Date prévue" type="date" value={c.schedule.date} onChange={(v) => up((d) => void (d.schedule.date = v))} />
            ) : c.schedule.mode === "fenetre" ? (
              <div className="g-row g-row--2">
                <Text label="Au plus tôt le" type="date" value={c.schedule.windowStart} onChange={(v) => up((d) => void (d.schedule.windowStart = v))} />
                <Text label="Au plus tard le" type="date" value={c.schedule.windowEnd} onChange={(v) => up((d) => void (d.schedule.windowEnd = v))} />
              </div>
            ) : null}
            <Text label="Précision" hint="facultatif" value={c.schedule.windowText} onChange={(v) => up((d) => void (d.schedule.windowText = v))} placeholder="Date confirmée par téléphone à la réception de l’équipement" />
            <div className="g-row g-row--2">
              <Text label="Durée estimée des travaux" value={c.schedule.duration} onChange={(v) => up((d) => void (d.schedule.duration = v))} placeholder="Une journée" />
              <Text label="Arrivée de l’équipe" value={c.schedule.arrival} onChange={(v) => up((d) => void (d.schedule.arrival = v))} placeholder="Entre 7 h 30 et 9 h" />
            </div>
            <p className="sq-sub">À préparer par le client</p>
            <StringList values={c.schedule.prep} onChange={(v) => up((d) => void (d.schedule.prep = v))} addLabel="Ajouter une consigne" />
            <Text label="Remarques" value={c.schedule.notes} onChange={(v) => up((d) => void (d.schedule.notes = v))} />
            <p className="g-hint">La clause météo vient des <Link href="/gestion/soumissions/reglages#textes">réglages</Link>. Les valeurs par défaut (accès, présence, durée, arrivée) aussi.</p>
          </Step>

          {/* 6. Inclus / exclus / hypothèses */}
          <Step id="contenu" n="06" title="Ce qui est inclus, ce qui ne l’est pas, et les hypothèses" hint="Chaque ligne apparaît telle quelle. Retirez ce qui ne s’applique pas à ce chantier.">
            <p className="sq-sub">Ce qui est inclus</p>
            {pkgHint ? (
              <p className="sq-note sq-note--info">
                Ce forfait a sa propre liste d’inclusions.{" "}
                <button type="button" className="g-btn g-btn--quiet" onClick={() => { const p = settings.packages.find((x) => x.id === pkgHint); if (p) up((d) => void (d.inclusions = toItems(p.inclusions))); setPkgHint(null); }}>Utiliser la liste du forfait</button>
              </p>
            ) : null}
            <ItemList items={c.inclusions} onChange={(v) => up((d) => void (d.inclusions = v))} addLabel="Ajouter une inclusion" />
            <p className="sq-sub">Ce qui n’est pas inclus</p>
            <ItemList items={c.exclusions} onChange={(v) => up((d) => void (d.exclusions = v))} addLabel="Ajouter une exclusion" />
            <p className="sq-sub">Hypothèses du prix</p>
            <ItemList items={c.assumptions} onChange={(v) => up((d) => void (d.assumptions = v))} addLabel="Ajouter une hypothèse" />
            <button type="button" className="g-btn g-btn--quiet" style={{ marginTop: 10 }} onClick={() => up((d) => { d.inclusions = toItems(settings.templates.inclusions); d.exclusions = toItems(settings.templates.exclusions); d.assumptions = toItems(settings.templates.assumptions); })}>
              <RefreshCw size={15} aria-hidden /> Recharger les trois listes des réglages
            </button>
          </Step>

          {/* 7. Prix */}
          <Step id="prix" n="07" title="Prix, options et rabais" hint="Lignes obligatoires ou facultatives (le client coche). Rabais : raison obligatoire.">
            <div className="sq-lines">
              {c.lines.map((l, i) => {
                const t = totals.lines.find((x) => x.id === l.id);
                const setLine = (patch: Partial<QuoteLine>) => up((d) => { const x = d.lines.find((y) => y.id === l.id); if (x) Object.assign(x, patch); });
                return (
                  <div key={l.id} className="sq-line" data-optional={l.optional}>
                    <div className="sq-line__grid">
                      <Text label="Libellé" value={l.label} onChange={(v) => setLine({ label: v })} className="sq-line__full-sm" />
                      <Num label="Quantité" value={l.quantity} onChange={(v) => setLine({ quantity: v ?? 0 })} />
                      <Select label="Unité" value={l.unit} options={Object.entries(UNIT_LABELS).map(([k, v]) => [k as LineUnit, v.one])} onChange={(v) => setLine({ unit: (v || "unite") as LineUnit })} />
                      <Money label="Prix unitaire" value={l.unitPriceCents} onChange={(v) => setLine({ unitPriceCents: v })} />
                      <div className="sq-line__amt">{money(t?.netCents ?? 0)}</div>
                      <Area label="Description (visible par le client)" rows={1} value={l.description} onChange={(v) => setLine({ description: v })} className="sq-line__full" />
                    </div>
                    <div className="sq-line__opts">
                      <Check label="Facultative : le client choisit" checked={l.optional} onChange={(v) => setLine({ optional: v, selectedByDefault: v ? l.selectedByDefault : false })} />
                      {l.optional ? <Check label="Cochée d’office" checked={l.selectedByDefault} onChange={(v) => setLine({ selectedByDefault: v })} /> : null}
                      <Check label="Rabais sur cette ligne" checked={Boolean(l.discount)} onChange={(v) => setLine({ discount: v ? { id: rid("d"), reason: "", kind: "pourcentage", value: 10, expiresOn: null } : null })} />
                      <span style={{ flex: 1 }} />
                      <span className="sq-items__btns">
                        <button type="button" className="sq-icon" disabled={i === 0} onClick={() => up((d) => void (d.lines = move(d.lines, i, -1)))} aria-label="Monter la ligne">↑</button>
                        <button type="button" className="sq-icon" disabled={i === c.lines.length - 1} onClick={() => up((d) => void (d.lines = move(d.lines, i, 1)))} aria-label="Descendre la ligne">↓</button>
                        <button type="button" className="sq-icon sq-icon--bad" onClick={() => up((d) => void (d.lines = d.lines.filter((x) => x.id !== l.id)))} aria-label="Retirer la ligne"><Trash2 size={16} aria-hidden /></button>
                      </span>
                    </div>
                    {l.discount ? <DiscountRow d={l.discount} onChange={(dd) => setLine({ discount: dd })} /> : null}
                  </div>
                );
              })}
            </div>
            <div className="sq-add">
              {settings.packages.length ? (
                <select className="g-select" value="" onChange={(e) => addPackage(e.target.value)} aria-label="Ajouter un forfait" style={{ maxWidth: 300 }}>
                  <option value="">+ Forfait d’installation…</option>
                  {suggested.length ? <optgroup label="Convient à cette machine">{suggested.map((p) => <option key={p.id} value={p.id}>{p.label} · {money(p.priceCents)}</option>)}</optgroup> : null}
                  <optgroup label="Tous les forfaits">{settings.packages.map((p) => <option key={p.id} value={p.id}>{p.label} · {money(p.priceCents)}</option>)}</optgroup>
                </select>
              ) : <Link href="/gestion/soumissions/prix" className="g-btn g-btn--quiet">Créer vos forfaits</Link>}
              <select className="g-select" value="" onChange={(e) => { const x = catalog.find((y) => y.id === e.target.value); if (x) up((d) => void d.lines.push(fromCatalog(x))); }} aria-label="Ajouter un extra ou de la main-d’œuvre" style={{ maxWidth: 300 }}>
                <option value="">+ Extra ou main-d’œuvre…</option>
                {catalog.map((x) => <option key={x.id} value={x.id}>{x.name} · {x.unitPriceCents ? money(x.unitPriceCents) : "prix à saisir"}</option>)}
              </select>
              <button type="button" className="g-btn g-btn--ghost" onClick={() => up((d) => void d.lines.push(newLine({})))}><Plus size={16} aria-hidden /> Ligne libre</button>
            </div>

            <p className="sq-sub">Rabais sur la soumission</p>
            {c.discounts.map((d) => (
              <DiscountRow key={d.id} d={d} onChange={(dd) => up((x) => void (x.discounts = x.discounts.map((y) => (y.id === d.id ? dd : y))))} onRemove={() => up((x) => void (x.discounts = x.discounts.filter((y) => y.id !== d.id)))} />
            ))}
            <div className="sq-add">
              <button type="button" className="g-btn g-btn--ghost" onClick={() => up((d) => void d.discounts.push({ id: rid("d"), reason: "", kind: "montant", value: 0, expiresOn: null }))}><Plus size={16} aria-hidden /> Rabais</button>
              {settings.discounts.length ? (
                <select className="g-select" value="" aria-label="Rabais prédéfini" style={{ maxWidth: 280 }} onChange={(e) => { const p = settings.discounts.find((x) => x.id === e.target.value); if (p) up((d) => void d.discounts.push({ id: rid("d"), reason: p.reason, kind: p.kind, value: p.value, expiresOn: null })); }}>
                  <option value="">+ Rabais prédéfini…</option>
                  {settings.discounts.map((p) => <option key={p.id} value={p.id}>{p.reason}</option>)}
                </select>
              ) : null}
            </div>
            <p className="g-hint">Aucun « prix barré » inventé : seul le prix saisi de la ligne apparaît barré, et seulement quand un rabais s’y applique. L’aide LogisVert est présentée à part, jamais comme un rabais.</p>
          </Step>

          {/* 8. Conditions */}
          <Step id="conditions" n="08" title="LogisVert, paiement et validité">
            <p className="sq-sub">Aide LogisVert</p>
            {lvAmount ? (
              <div className="sq-lvinfo">
                <Info size={18} aria-hidden />
                <div>
                  <p style={{ margin: 0 }}>
                    <strong>{money(lvAmount)}</strong> : montant officiel de ce jumelage{m?.listDate ? ` (liste du ${m.listDate})` : ""}, montré au client à titre d’information.
                  </p>
                  <p className="sq-lvinfo__quote">{LOGISVERT_NOTICE}</p>
                  <p className="g-hint" style={{ margin: 0 }}>Le total dû reste le prix complet : l’aide n’en est jamais soustraite. L’estimation après l’aide est marquée « estimation, non garantie ».</p>
                </div>
              </div>
            ) : (
              <p className="g-hint">Jumelage absent de la liste officielle ou sans montant : aucune aide LogisVert n’est mentionnée au client.</p>
            )}
            <p className="sq-note" style={{ marginTop: 10 }}>
              Admissibilité, délais et pièces exigées : à confirmer avec Hydro-Québec. Une précision facultative se modifie dans les <Link href="/gestion/soumissions/reglages#logisvert">réglages</Link>.{" "}
              <a href={LINKS.logisvert} target="_blank" rel="noreferrer">Page officielle du programme</a>
            </p>
            <p className="sq-sub">Acompte</p>
            <div className="g-row g-row--2">
              <Seg value={c.deposit.kind} options={[["aucun", "Aucun"], ["pourcentage", "Pourcentage"], ["montant", "Montant"]]} onChange={(v) => up((d) => void (d.deposit = { kind: v, value: 0 }))} />
              {c.deposit.kind === "pourcentage" ? <Num label="Pourcentage" suffix="%" value={c.deposit.value} onChange={(v) => up((d) => void (d.deposit.value = Math.min(100, v ?? 0)))} /> : c.deposit.kind === "montant" ? <Money label="Montant de l’acompte" value={c.deposit.value} onChange={(v) => up((d) => void (d.deposit.value = v))} /> : null}
            </div>
            <p className="g-hint">Un acompte demandé avant la conclusion du contrat a ses propres règles : <a href={LINKS.opcAcompte} target="_blank" rel="noreferrer">voir l’Office de la protection du consommateur</a>.</p>
            <p className="sq-sub">Validité</p>
            <Text label="Valide jusqu’au (inclusivement)" type="date" value={c.validUntil} onChange={(v) => up((d) => void (d.validUntil = v))} />
          </Step>

          {/* 9. Notes */}
          <Step id="notes" n="09" title="Résumé et notes">
            <Area label="Votre projet : mot d’introduction" hint="visible par le client" rows={3} value={c.projectSummary} onChange={(v) => up((d) => void (d.projectSummary = v))} placeholder="Laissé vide : une phrase est composée à partir de la machine et de l’adresse." />
            <Area label="Remarques pour le client" rows={3} value={c.notes} onChange={(v) => up((d) => void (d.notes = v))} />
            <Area label="Notes internes" hint="jamais montrées au client" rows={3} value={notes} onChange={(v) => { setNotes(v); setDirty(true); }} />
          </Step>

          <div className="sq-savebar">
            <span className={`sq-savebar__msg ${msg && !msg.ok ? "is-bad" : ""}`} role="status">{msg ? msg.text : dirty ? "Modifications non enregistrées." : "Aucune modification."}</span>
            <span className="sq-actions">
              <button type="button" className="g-btn g-btn--ghost" disabled={saving} onClick={() => save("apercu")}><Eye size={16} aria-hidden /> Aperçu</button>
              <button type="button" className="g-btn g-btn--ghost" disabled={saving} onClick={() => save("fiche")}>Enregistrer et envoyer…</button>
              <button type="button" className="g-btn g-btn--primary" disabled={saving} onClick={() => save()}><Save size={16} aria-hidden /> {saving ? "Enregistrement…" : "Enregistrer"}</button>
            </span>
          </div>
        </div>

        <aside className="sq-aside">
          <div className="sq-card">
            <h2 className="g-h2" style={{ fontSize: 18, marginBottom: 10 }}>Totaux (options cochées d’office)</h2>
            <div className="sq-totals">
              <div><span>Sous-total</span><span>{money(totals.subtotalCents)}</span></div>
              {totals.lineDiscountsCents ? <div className="is-disc"><span>dont rabais de ligne</span><span>− {money(totals.lineDiscountsCents)}</span></div> : null}
              {totals.quoteDiscountsCents ? <div className="is-disc"><span>Rabais</span><span>− {money(totals.quoteDiscountsCents)}</span></div> : null}
              <div><span>TPS</span><span>{money(totals.tpsCents)}</span></div>
              <div><span>TVQ</span><span>{money(totals.tvqCents)}</span></div>
              <div className="is-total"><span>Total dû, taxes comprises</span><span>{money(totals.totalCents)}</span></div>
              {totals.logisvertCents ? <div className="is-aid"><span>Aide LogisVert prévue (information)</span><span>{money(totals.logisvertCents)}</span></div> : null}
              {totals.logisvertCents ? <div className="is-est"><span>Estimation après l’aide, non garantie</span><span>{money(totals.netAfterAidCents)}</span></div> : null}
              {totals.depositCents ? <div><span>Acompte</span><span>{money(totals.depositCents)}</span></div> : null}
              <div><span>Valide jusqu’au</span><span>{formatDay(c.validUntil)}</span></div>
            </div>
          </div>
          <div className="sq-card">
            <h2 className="g-h2" style={{ fontSize: 18, marginBottom: 6 }}>Avant l’envoi</h2>
            {blockers.length ? <p className="g-hint" style={{ marginTop: 0 }}>{blockers.length} élément{blockers.length > 1 ? "s" : ""} bloquant{blockers.length > 1 ? "s" : ""}</p> : <p className="g-hint" style={{ marginTop: 0, color: "var(--g-ok)" }}>Rien ne bloque l’envoi.</p>}
            <LiveChecks items={[...blockers, ...warnings]} />
          </div>
        </aside>
      </div>
    </div>
  );
}

function DiscountRow({ d, onChange, onRemove }: { d: Discount; onChange: (d: Discount) => void; onRemove?: () => void }) {
  return (
    <div className="sq-disc">
      <Text label="Raison du rabais (obligatoire)" value={d.reason} onChange={(v) => onChange({ ...d, reason: v })} invalid={!d.reason.trim()} placeholder="Rabais de fin de saison" />
      <Select label="Type" value={d.kind} options={[["pourcentage", "Pourcentage"], ["montant", "Montant"]]} onChange={(v) => onChange({ ...d, kind: (v || "montant") as Discount["kind"], value: 0 })} />
      {d.kind === "pourcentage" ? <Num label="Valeur" suffix="%" value={d.value} onChange={(v) => onChange({ ...d, value: Math.min(100, v ?? 0) })} /> : <Money label="Valeur" value={d.value} onChange={(v) => onChange({ ...d, value: v })} />}
      <Text label="Valable jusqu’au" hint="facultatif" type="date" value={d.expiresOn ?? ""} onChange={(v) => onChange({ ...d, expiresOn: v || null })} />
      {onRemove ? <button type="button" className="sq-icon sq-icon--bad" onClick={onRemove} aria-label="Retirer le rabais"><Trash2 size={16} aria-hidden /></button> : <span />}
    </div>
  );
}

function LiveChecks({ items }: { items: CheckItem[] }) {
  if (!items.length) return null;
  return (
    <ul className="sq-checks">
      {items.map((i) => (
        <li key={`${i.group}-${i.id}`}>
          {i.severity === "bloquant" ? <XCircle size={17} className="is-bad" aria-label="Bloquant" /> : i.ok ? <CheckCircle2 size={17} className="is-ok" aria-hidden /> : <AlertTriangle size={17} className="is-warn" aria-label="À vérifier" />}
          <span>
            {i.href ? (i.href.startsWith("#") ? <a href={i.href}>{i.label}</a> : <Link href={i.href}>{i.label}</Link>) : i.label}
            {i.hint ? <small>{i.hint}</small> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
