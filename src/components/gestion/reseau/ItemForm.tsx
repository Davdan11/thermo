"use client";

/* Chantier R — formulaire d'un article en stock : type, modèle du catalogue (recherche), quantités, emplacement,
   coût saisi par le propriétaire (aucun prix proposé), seuil d'alerte. */
import { useState } from "react";
import type { RaResult } from "@/app/gestion/(prive)/reseau-actions";
import { ModelSearch, type ModelPick } from "@/components/gestion/ModelSearch";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import { ITEM_KIND_LABELS, ITEM_KINDS, type ItemKind } from "@/lib/gestion/inventaire/types";

export interface ItemInitial {
  kind: ItemKind;
  label: string;
  model: { slug: string; label: string } | null;
  partNumber: string;
  perJob: number;
  location: string;
  unitCost: string;
  lowThreshold: string;
  supplier: string;
}

export const EMPTY_ITEM: ItemInitial = { kind: "exterieur", label: "", model: null, partNumber: "", perJob: 1, location: "", unitCost: "", lowThreshold: "", supplier: "" };

export function ItemForm({ action, initial = EMPTY_ITEM, withQuantity = false, submit }: { action: (prev: RaResult, fd: FormData) => Promise<RaResult>; initial?: ItemInitial; withQuantity?: boolean; submit: string }) {
  const [model, setModel] = useState<{ slug: string; label: string } | null>(initial.model);
  const [kind, setKind] = useState<ItemKind>(initial.kind);
  const onPick = (m: ModelPick | null) => setModel(m ? { slug: m.slug, label: m.label } : null);
  return (
    <ActionForm action={action} submit={submit} pending="Enregistrement…">
      <div className="g-row g-row--2">
        <div className="g-field">
          <label className="g-label" htmlFor="it-kind">
            Type
          </label>
          <select id="it-kind" name="kind" className="g-input" value={kind} onChange={(e) => setKind(e.target.value as ItemKind)}>
            {ITEM_KINDS.map((k) => (
              <option key={k} value={k}>
                {ITEM_KIND_LABELS[k]}
              </option>
            ))}
          </select>
        </div>
        <div className="g-field">
          <label className="g-label" htmlFor="it-label">
            Désignation <small>(sinon le nom du modèle)</small>
          </label>
          <input id="it-label" name="label" className="g-input" defaultValue={initial.label} maxLength={160} />
        </div>
      </div>
      <div className="g-field">
        <span className="g-label">
          Modèle du catalogue <small>{kind === "accessoire" ? "(facultatif)" : "(réservé automatiquement pour les jobs et soumissions acceptées de ce modèle)"}</small>
        </span>
        <ModelSearch brand="" value={model} onChange={onPick} />
        <input type="hidden" name="modelSlug" value={model?.slug ?? ""} />
      </div>
      <div className="g-row g-row--2">
        <div className="g-field">
          <label className="g-label" htmlFor="it-part">
            Numéro du fabricant
          </label>
          <input id="it-part" name="partNumber" className="g-input" defaultValue={initial.partNumber} maxLength={80} />
        </div>
        <div className="g-field">
          <label className="g-label" htmlFor="it-per">
            Unités par installation
          </label>
          <input id="it-per" name="perJob" type="number" min={1} max={20} className="g-input" defaultValue={initial.perJob} />
        </div>
      </div>
      <div className="g-row g-row--2">
        {withQuantity ? (
          <div className="g-field">
            <label className="g-label" htmlFor="it-qty">
              Quantité en main
            </label>
            <input id="it-qty" name="quantity" type="number" min={0} max={10000} className="g-input" defaultValue={0} />
          </div>
        ) : null}
        <div className="g-field">
          <label className="g-label" htmlFor="it-loc">
            Emplacement
          </label>
          <input id="it-loc" name="location" className="g-input" defaultValue={initial.location} maxLength={120} placeholder="Entrepôt, étagère…" />
        </div>
      </div>
      <div className="g-row g-row--2">
        <div className="g-field">
          <label className="g-label" htmlFor="it-cost">
            Coût unitaire <small>(votre coût, facultatif)</small>
          </label>
          <input id="it-cost" name="unitCost" inputMode="decimal" className="g-input" defaultValue={initial.unitCost} maxLength={20} placeholder="0,00" />
        </div>
        <div className="g-field">
          <label className="g-label" htmlFor="it-low">
            Seuil d’alerte <small>(disponible au plus)</small>
          </label>
          <input id="it-low" name="lowThreshold" type="number" min={0} max={10000} className="g-input" defaultValue={initial.lowThreshold} />
        </div>
      </div>
      <div className="g-field">
        <label className="g-label" htmlFor="it-sup">
          Fournisseur habituel
        </label>
        <input id="it-sup" name="supplier" className="g-input" defaultValue={initial.supplier} maxLength={120} />
      </div>
    </ActionForm>
  );
}
