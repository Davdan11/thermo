"use client";

/* Formulaire d'installateur : coordonnées, zone (code postal de base, rayon avec aperçu, régions en plus),
   marques avec logos, types de système, disponibilité. */
import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { saveInstallerAction, type FormState } from "@/app/gestion/(prive)/actions";
import { QUEBEC_REGIONS } from "@/lib/gestion/regions";
import { SYSTEM_TYPES, SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import type { BrandOption } from "@/lib/gestion/catalog";
import { BrandGrid } from "./BrandGrid";
import { PostalField } from "./PostalField";
import { RadiusPreview, type CityDTO } from "./RadiusPreview";
import { Reveal } from "./Reveal";

export interface InstallerInitial {
  id?: string;
  company: string;
  contactName: string;
  phone: string;
  email: string;
  rbq: string;
  basePostalCode: string;
  radiusKm: number;
  extraRegions: string[];
  brands: string[];
  systemTypes: string[];
  active: boolean;
  maxOpenJobs: number | null;
  notes: string;
  candidatureId?: string;
  base: { lat: number; lon: number; city: string } | null;
}

function Err({ id, msg }: { id: string; msg?: string }) {
  return msg ? <p id={id} className="g-error">{msg}</p> : null;
}

export function InstallerForm({ brands, cities, initial, hintedBrands = [], hintedRegions = [] }: { brands: BrandOption[]; cities: CityDTO[]; initial: InstallerInitial; hintedBrands?: string[]; hintedRegions?: string[] }) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(saveInstallerAction, undefined);
  const [radius, setRadius] = useState(initial.radiusKm);
  const [base, setBase] = useState(initial.base);
  const [regions, setRegions] = useState<string[]>(initial.extraRegions);
  const [brandSel, setBrandSel] = useState<string[]>(initial.brands);
  const formRef = useRef<HTMLFormElement>(null);
  const e = state?.errors ?? {};

  useEffect(() => {
    if (state?.errors) formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state]);

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    startTransition(() => formAction(fd));
  };
  const inv = (k: string) => (e[k] ? { "aria-invalid": true as const, "aria-describedby": `err-${k}` } : {});
  const clampRadius = (n: number) => Math.max(5, Math.min(400, Number.isFinite(n) ? n : 60));

  return (
    <form ref={formRef} onSubmit={onSubmit} className="g-form" noValidate>
      {initial.id ? <input type="hidden" name="id" value={initial.id} /> : null}
      {initial.candidatureId ? <input type="hidden" name="candidatureId" value={initial.candidatureId} /> : null}

      <Reveal className="g-card g-card__pad" delay={0.04}>
        <fieldset className="g-fieldset">
          <legend className="g-legend">Entreprise</legend>
          <div className="g-row g-row--2">
            <div className="g-field">
              <label className="g-label" htmlFor="company">Entreprise</label>
              <input id="company" name="company" className="g-input" defaultValue={initial.company} required {...inv("company")} />
              <Err id="err-company" msg={e.company} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="contactName">Personne contact</label>
              <input id="contactName" name="contactName" className="g-input" defaultValue={initial.contactName} required {...inv("contactName")} />
              <Err id="err-contactName" msg={e.contactName} />
            </div>
          </div>
          <div className="g-row g-row--3">
            <div className="g-field">
              <label className="g-label" htmlFor="phone">Cellulaire <small>(textos)</small></label>
              <input id="phone" name="phone" type="tel" inputMode="tel" className="g-input" defaultValue={initial.phone} required {...inv("phone")} />
              <Err id="err-phone" msg={e.phone} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="email">Courriel</label>
              <input id="email" name="email" type="email" inputMode="email" className="g-input" defaultValue={initial.email} required {...inv("email")} />
              <Err id="err-email" msg={e.email} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="rbq">Licence RBQ</label>
              <input id="rbq" name="rbq" className="g-input" defaultValue={initial.rbq} inputMode="numeric" />
            </div>
          </div>
        </fieldset>
      </Reveal>

      <Reveal className="g-card g-card__pad" delay={0.08}>
        <fieldset className="g-fieldset">
          <legend className="g-legend">Zone desservie</legend>
          <div className="g-row g-row--2">
            <PostalField id="basePostalCode" name="basePostalCode" label="Code postal de base" defaultValue={initial.basePostalCode} error={e.basePostalCode} onResolved={(r) => setBase(r ? { lat: r.lat, lon: r.lon, city: r.city } : null)} />
            <div className="g-field">
              <label className="g-label" htmlFor="radiusKm">Rayon (km)</label>
              <div className="g-radius__row">
                <input type="range" min={10} max={250} step={5} value={Math.min(250, radius)} onChange={(ev) => setRadius(Number(ev.target.value))} aria-label="Rayon en kilomètres" />
                <input id="radiusKm" name="radiusKm" type="number" min={5} max={400} className="g-input g-radius__value" value={radius} onChange={(ev) => setRadius(clampRadius(Number(ev.target.value)))} {...inv("radiusKm")} />
              </div>
              <Err id="err-radiusKm" msg={e.radiusKm} />
            </div>
          </div>
          <RadiusPreview base={base} radius={radius} regions={regions} cities={cities} />
          <div className="g-field">
            <span className="g-label">Régions desservies en plus du rayon {hintedRegions.length ? <small>· devinées d’après la candidature</small> : null}</span>
            <div className="g-tiles">
              {QUEBEC_REGIONS.map((r) => (
                <label key={r.code} className="g-tile">
                  <input type="checkbox" name="regions" value={r.code} checked={regions.includes(r.code)} onChange={(ev) => setRegions((prev) => (ev.target.checked ? [...prev, r.code] : prev.filter((x) => x !== r.code)))} />
                  <span className="g-tile__box" aria-hidden><Check size={12} strokeWidth={3} /></span>
                  {r.name}
                  <span className="g-tile__code">{hintedRegions.includes(r.code) ? "devinée" : r.code}</span>
                </label>
              ))}
            </div>
          </div>
        </fieldset>
      </Reveal>

      <Reveal className="g-card g-card__pad" delay={0.12}>
        <fieldset className="g-fieldset">
          <legend className="g-legend">Marques et systèmes</legend>
          <div className="g-field">
            <span className="g-label">Marques vendues ou installées {hintedBrands.length ? <small>· devinées d’après la candidature, à confirmer</small> : null}</span>
            <BrandGrid brands={brands} type="checkbox" name="brands" selected={brandSel} onChange={setBrandSel} hinted={hintedBrands} idPrefix="inst-brand" />
            <Err id="err-brands" msg={e.brands} />
          </div>
          <div className="g-field">
            <span className="g-label">Types de système <small>(aucun coché = tous)</small></span>
            <div className="g-tiles">
              {SYSTEM_TYPES.map((t) => (
                <label key={t} className="g-tile">
                  <input type="checkbox" name="systemTypes" value={t} defaultChecked={initial.systemTypes.includes(t)} />
                  <span className="g-tile__box" aria-hidden><Check size={12} strokeWidth={3} /></span>
                  {SYSTEM_TYPE_LABELS[t]}
                </label>
              ))}
            </div>
          </div>
        </fieldset>
      </Reveal>

      <Reveal className="g-card g-card__pad" delay={0.16}>
        <fieldset className="g-fieldset">
          <legend className="g-legend">Disponibilité</legend>
          <label className="g-check">
            <input type="checkbox" name="active" defaultChecked={initial.active} />
            Actif : reçoit des offres (décochez pour le mettre en pause)
          </label>
          <div className="g-row g-row--2">
            <div className="g-field">
              <label className="g-label" htmlFor="maxOpenJobs">Jobs simultanés au maximum <small>(facultatif)</small></label>
              <input id="maxOpenJobs" name="maxOpenJobs" type="number" min={1} max={50} className="g-input" defaultValue={initial.maxOpenJobs ?? ""} {...inv("maxOpenJobs")} />
              <Err id="err-maxOpenJobs" msg={e.maxOpenJobs} />
            </div>
          </div>
          <div className="g-field">
            <label className="g-label" htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes" className="g-textarea" defaultValue={initial.notes} maxLength={2000} />
          </div>
        </fieldset>
      </Reveal>

      {state?.message ? <p className="g-alert" role="alert">{state.message}</p> : null}
      <div className="g-actions" style={{ justifyContent: "flex-end" }}>
        <button type="submit" className="g-btn g-btn--primary g-btn--lg" disabled={pending}>
          {pending ? "Enregistrement…" : initial.id ? "Enregistrer" : "Ajouter l’installateur"}
        </button>
      </div>
    </form>
  );
}
