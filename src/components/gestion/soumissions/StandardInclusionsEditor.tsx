"use client";

/* Chantier D — réglage « Inclusions standard » : ce que comprend l'installation de base (50 pi de ligne, cache-ligne,
   base ou support, drain par gravité, électricité jusqu'au panneau). Aperçu des lignes de « Ce qui est inclus ». */
import { DEFAULT_STANDARD, standardItems } from "@/lib/soumissions/standard";
import type { LengthUnit, StandardInclusions } from "@/lib/soumissions/types";
import { Check, Num } from "./fields";

export function StandardInclusionsEditor({ value, unit, onChange }: { value: StandardInclusions | undefined; unit: LengthUnit; onChange: (v: StandardInclusions) => void }) {
  const v = value ?? DEFAULT_STANDARD;
  const set = (patch: Partial<StandardInclusions>) => onChange({ ...v, ...patch });
  const preview = standardItems(v, unit);
  return (
    <div>
      <Check label="Utiliser l’installation standard dans les nouvelles soumissions" checked={v.enabled} onChange={(on) => set({ enabled: on })} />
      {v.enabled ? (
        <>
          <Num label="Ligne frigorifique incluse par tête intérieure" suffix="pi" value={v.lineIncludedFt} onChange={(n) => set({ lineIncludedFt: n })} placeholder="50" />
          <p className="g-hint" style={{ marginTop: -4 }}>Au-delà : le « pied de ligne supplémentaire » de votre liste de prix (rôle « Ligne supplémentaire »). S’il n’y est pas, le créateur vous le dit ; aucun prix n’est inventé.</p>
          <Check label="Cache-ligne inclus (seule la couleur se choisit, pastilles « Couleur du cache-ligne »)" checked={v.lineCover} onChange={(on) => set({ lineCover: on })} />
          <Check label="Base au sol ou support mural inclus, au choix" checked={v.mounting} onChange={(on) => set({ mounting: on })} />
          <Check label="Drain par gravité inclus (la pompe de condensat reste un extra de la liste de prix)" checked={v.gravityDrain} onChange={(on) => set({ gravityDrain: on })} />
          <Check label="Raccordement électrique jusqu’au panneau inclus (sans limite de distance)" checked={v.electricalToPanel} onChange={(on) => set({ electricalToPanel: on })} />
          <p className="sq-sub">Dans « Ce qui est inclus » de chaque nouvelle soumission</p>
          <ul className="sq-checks">
            {preview.map((i) => (
              <li key={i.label}>
                <span>
                  {i.label}
                  {i.detail ? <small>{i.detail}</small> : null}
                </span>
              </li>
            ))}
          </ul>
          <p className="g-hint">La longueur incluse d’un forfait de votre liste de prix, ou celle des valeurs par défaut, passe avant ces 50 pi.</p>
        </>
      ) : null}
    </div>
  );
}
