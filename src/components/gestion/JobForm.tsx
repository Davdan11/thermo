"use client";

/* Formulaire de job (création et modification). Envoi par onSubmit + transition : React ne vide pas le
   formulaire quand la validation échoue. */
import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { saveJobAction, type FormState } from "@/app/gestion/(prive)/actions";
import { QUEBEC_REGIONS } from "@/lib/gestion/regions";
import { SYSTEM_TYPES, SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import type { BrandOption } from "@/lib/gestion/catalog";
import { BrandGrid } from "./BrandGrid";
import { ModelSearch, type ModelPick } from "./ModelSearch";
import { PostalField, type PostalResult } from "./PostalField";
import { Reveal } from "./Reveal";

export interface JobInitial {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  regionGuess: string | null;
  brand: string;
  systemType: string;
  model: { slug: string; label: string } | null;
  capacity: string;
  desiredDate: string;
  desiredWindow: string;
  installerNotes: string;
  internalNotes: string;
  resolvedCity: string | null;
}

function Err({ id, msg }: { id: string; msg?: string }) {
  return msg ? <p id={id} className="g-error">{msg}</p> : null;
}

export function JobForm({ brands, initial }: { brands: BrandOption[]; initial?: JobInitial }) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(saveJobAction, undefined);
  const [brand, setBrand] = useState(initial?.brand ?? "");
  const [systemType, setSystemType] = useState(initial?.systemType ?? "");
  const [region, setRegion] = useState(initial?.region ?? "");
  const [regionTouched, setRegionTouched] = useState(Boolean(initial?.region));
  const [guess, setGuess] = useState<string | null>(initial?.regionGuess ?? null);
  const [city, setCity] = useState(initial?.city ?? "");
  const [cityTouched, setCityTouched] = useState(Boolean(initial?.city));
  const [model, setModel] = useState<{ slug: string; label: string } | null>(initial?.model ?? null);
  const [capacity, setCapacity] = useState(initial?.capacity ?? "");
  const formRef = useRef<HTMLFormElement>(null);
  const e = state?.errors ?? {};

  useEffect(() => {
    if (state?.errors) formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state]);

  const onResolved = (r: PostalResult | null) => {
    setGuess(r?.region ?? null);
    if (r?.region && !regionTouched) setRegion(r.region);
    if (r && !cityTouched) setCity(r.city.replace(/\s*\(.*\)$/, ""));
  };

  const onPick = (m: ModelPick | null) => {
    setModel(m ? { slug: m.slug, label: m.label } : null);
    if (!m) return;
    if (!brand) setBrand(m.brandId);
    if (!systemType) setSystemType(m.systemType);
    if (!capacity && m.capacityBtu) setCapacity(`${m.capacityBtu.toLocaleString("fr-CA")} BTU`);
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    startTransition(() => formAction(fd));
  };

  const inv = (k: string) => (e[k] ? { "aria-invalid": true as const, "aria-describedby": `err-${k}` } : {});

  return (
    <form ref={formRef} onSubmit={onSubmit} className="g-form" noValidate>
      {initial?.id ? <input type="hidden" name="id" value={initial.id} /> : null}

      <Reveal className="g-card g-card__pad" delay={0.04}>
        <fieldset className="g-fieldset">
          <legend className="g-legend">Client</legend>
          <div className="g-row g-row--2">
            <div className="g-field">
              <label className="g-label" htmlFor="firstName">Prénom</label>
              <input id="firstName" name="firstName" className="g-input" defaultValue={initial?.firstName} autoComplete="off" required {...inv("firstName")} />
              <Err id="err-firstName" msg={e.firstName} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="lastName">Nom</label>
              <input id="lastName" name="lastName" className="g-input" defaultValue={initial?.lastName} autoComplete="off" />
            </div>
          </div>
          <div className="g-row g-row--2">
            <div className="g-field">
              <label className="g-label" htmlFor="phone">Téléphone</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" className="g-input" defaultValue={initial?.phone} autoComplete="off" required {...inv("phone")} />
              <Err id="err-phone" msg={e.phone} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="email">Courriel <small>(facultatif)</small></label>
              <input id="email" name="email" type="email" inputMode="email" className="g-input" defaultValue={initial?.email} autoComplete="off" {...inv("email")} />
              <Err id="err-email" msg={e.email} />
            </div>
          </div>
          <div className="g-field">
            <label className="g-label" htmlFor="address">Adresse <small>(montrée à l’installateur seulement après acceptation)</small></label>
            <input id="address" name="address" className="g-input" defaultValue={initial?.address} autoComplete="off" />
          </div>
          <div className="g-row g-row--2">
            <PostalField id="postalCode" name="postalCode" label="Code postal" defaultValue={initial?.postalCode} error={e.postalCode} onResolved={onResolved} />
            <div className="g-field">
              <label className="g-label" htmlFor="city">Ville</label>
              <input id="city" name="city" className="g-input" value={city} onChange={(ev) => { setCity(ev.target.value); setCityTouched(true); }} autoComplete="off" />
            </div>
          </div>
          <div className="g-field">
            <label className="g-label" htmlFor="region">
              Région administrative {guess && region === guess ? <small>· devinée d’après le code postal</small> : guess ? <small>· corrigée</small> : null}
            </label>
            <select id="region" name="region" className="g-select" value={region} onChange={(ev) => { setRegion(ev.target.value); setRegionTouched(true); }} {...inv("region")}>
              <option value="">À préciser</option>
              {QUEBEC_REGIONS.map((r) => (
                <option key={r.code} value={r.code}>{r.name}</option>
              ))}
            </select>
            <Err id="err-region" msg={e.region} />
          </div>
        </fieldset>
      </Reveal>

      <Reveal className="g-card g-card__pad" delay={0.08}>
        <fieldset className="g-fieldset">
          <legend className="g-legend">Équipement</legend>
          <div className="g-field">
            <span className="g-label" id="brand-label">Marque</span>
            <BrandGrid brands={brands} type="radio" name="brand" selected={brand ? [brand] : []} onChange={(ids) => setBrand(ids[0] ?? "")} noneLabel="À préciser" idPrefix="job-brand" />
            <Err id="err-brand" msg={e.brand} />
          </div>
          <div className="g-field">
            <span className="g-label">Type de système</span>
            <div className="g-tiles" role="radiogroup" aria-label="Type de système">
              <label className="g-tile">
                <input type="radio" name="systemType" value="" checked={systemType === ""} onChange={() => setSystemType("")} />
                <span className="g-tile__box" aria-hidden />À préciser
              </label>
              {SYSTEM_TYPES.map((t) => (
                <label key={t} className="g-tile">
                  <input type="radio" name="systemType" value={t} checked={systemType === t} onChange={() => setSystemType(t)} />
                  <span className="g-tile__box" aria-hidden />
                  {SYSTEM_TYPE_LABELS[t]}
                </label>
              ))}
            </div>
          </div>
          <div className="g-row g-row--2">
            <div className="g-field">
              <label className="g-label" htmlFor="model-search">Modèle <small>(facultatif)</small></label>
              <ModelSearch brand={brand} value={model} onChange={onPick} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="capacity">Capacité <small>(facultatif)</small></label>
              <input id="capacity" name="capacity" className="g-input" value={capacity} onChange={(ev) => setCapacity(ev.target.value)} placeholder="ex. 24 000 BTU, 2 zones" />
            </div>
          </div>
        </fieldset>
      </Reveal>

      <Reveal className="g-card g-card__pad" delay={0.12}>
        <fieldset className="g-fieldset">
          <legend className="g-legend">Date et consignes</legend>
          <div className="g-row g-row--2">
            <div className="g-field">
              <label className="g-label" htmlFor="desiredDate">Date souhaitée</label>
              <input id="desiredDate" name="desiredDate" type="date" className="g-input" defaultValue={initial?.desiredDate} {...inv("desiredDate")} />
              <Err id="err-desiredDate" msg={e.desiredDate} />
            </div>
            <div className="g-field">
              <label className="g-label" htmlFor="desiredWindow">Ou fenêtre</label>
              <input id="desiredWindow" name="desiredWindow" className="g-input" defaultValue={initial?.desiredWindow} placeholder="ex. semaine du 20 octobre, en matinée" />
            </div>
          </div>
          <div className="g-field">
            <label className="g-label" htmlFor="installerNotes">Notes pour l’installateur</label>
            <textarea id="installerNotes" name="installerNotes" className="g-textarea" defaultValue={initial?.installerNotes} maxLength={1500} placeholder="Accès, conduits existants, emplacement souhaité de l’unité…" />
            <p className="g-hint">Visibles dans l’offre. N’y mettez pas les coordonnées du client.</p>
          </div>
          <div className="g-field">
            <label className="g-label" htmlFor="internalNotesForm">Notes internes</label>
            <textarea id="internalNotesForm" name="internalNotes" className="g-textarea" defaultValue={initial?.internalNotes} maxLength={3000} placeholder="Jamais montrées aux installateurs." />
          </div>
        </fieldset>
      </Reveal>

      {state?.message ? <p className="g-alert" role="alert">{state.message}</p> : null}
      <div className="g-actions" style={{ justifyContent: "flex-end" }}>
        <button type="submit" className="g-btn g-btn--primary g-btn--lg" disabled={pending}>
          {pending ? "Enregistrement…" : initial?.id ? "Enregistrer les changements" : "Créer le job et voir les installateurs"}
        </button>
      </div>
    </form>
  );
}
