"use client";

/* ==================================================================
   « Entrepreneur qui réalise les travaux » : l'installateur partenaire
   dont l'identité légale (raison sociale, NEQ, licence RBQ, taxes)
   figure au document. Liste des partenaires actifs, avec l'état de
   leur identité, de leur licence RBQ et de leur assurance.
   Seuls des résumés arrivent ici (champs manquants, états, dates) :
   jamais l'adresse ni les numéros du partenaire.
   ================================================================== */

import Link from "next/link";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { contractorBlockingReasons, type ComplianceState, type ContractorStatus } from "@/lib/soumissions/contractor";
import { formatDay } from "@/lib/soumissions/dates";

const STATE: Record<ComplianceState, { label: string; tone: "ok" | "warn" | "bad" }> = {
  valide: { label: "valide", tone: "ok" },
  bientot: { label: "expire bientôt", tone: "warn" },
  expiree: { label: "expirée", tone: "bad" },
  manquante: { label: "date à saisir", tone: "warn" },
};

function Tag({ tone, children, title }: { tone: "ok" | "warn" | "bad" | "muted"; children: React.ReactNode; title?: string }) {
  return (
    <span className={`sq-tag sq-tag--${tone}`} title={title}>
      <i aria-hidden />
      {children}
    </span>
  );
}

export function ContractorPicker({ options, value, onChange }: { options: ContractorStatus[]; value: string | null; onChange: (id: string | null) => void }) {
  if (!options.length) {
    return (
      <p className="sq-note">
        Aucun installateur partenaire actif. <Link href="/gestion/partenaires/nouveau">Ajoutez un installateur</Link>, puis remplissez son identité légale dans sa fiche partenaire.
      </p>
    );
  }
  const chosen = options.find((o) => o.installerId === value) ?? null;
  return (
    <div>
      <div className="sq-contractors" role="radiogroup" aria-label="Entrepreneur qui réalise les travaux">
        {options.map((s, i) => {
          const blocks = contractorBlockingReasons(s);
          const idTone = s.missing.length ? "bad" : !s.verified && s.source === "partenaire" ? "warn" : "ok";
          const idText = s.missing.length ? `identité : ${s.missing.length} champ${s.missing.length > 1 ? "s" : ""} à compléter` : !s.verified && s.source === "partenaire" ? "identité à vérifier" : "identité complète";
          return (
            <label key={s.installerId} className={`sq-contractor${blocks.length ? " is-blocked" : ""}`} style={{ ["--i" as string]: i }}>
              <input type="radio" name="entrepreneur" value={s.installerId} checked={value === s.installerId} onChange={() => onChange(s.installerId)} />
              <span className="sq-contractor__body">
                <strong>{s.company}</strong>
                <span className="sq-contractor__sub">{[s.legalName || "raison sociale à compléter", s.rbqNumber ? `RBQ ${s.rbqNumber}` : "", s.city].filter(Boolean).join(" · ")}</span>
                <span className="sq-contractor__tags">
                  <Tag tone={idTone} title={s.missing.length ? `À compléter : ${s.missing.join(", ")}` : undefined}>{idText}</Tag>
                  <Tag tone={STATE[s.rbq.state].tone} title={s.rbq.expiresOn ? `Expire le ${formatDay(s.rbq.expiresOn)}` : undefined}>licence RBQ {STATE[s.rbq.state].label}</Tag>
                  <Tag tone={STATE[s.assurance.state].tone} title={s.assurance.expiresOn ? `Expire le ${formatDay(s.assurance.expiresOn)}` : undefined}>assurance {STATE[s.assurance.state].label}</Tag>
                  {s.ended ? <Tag tone="bad">partenariat terminé</Tag> : !s.active ? <Tag tone="muted">en pause</Tag> : null}
                </span>
              </span>
              <span className={`sq-contractor__mark${blocks.length ? " is-bad" : ""}`} aria-hidden>
                {blocks.length ? <ShieldAlert size={20} /> : <ShieldCheck size={20} />}
              </span>
            </label>
          );
        })}
      </div>
      {chosen ? (
        <p className="g-hint" style={{ marginBottom: 0 }}>
          {contractorBlockingReasons(chosen).length ? (
            <>
              Envoi bloqué tant que : {contractorBlockingReasons(chosen).join(", ")}.{" "}
            </>
          ) : (
            <>Son identité est copiée dans la soumission à l’envoi : un changement ultérieur de sa fiche ne modifie pas une soumission déjà envoyée. </>
          )}
          <Link href={`/gestion/partenaires/${chosen.installerId}#identite`}>Fiche du partenaire</Link>
        </p>
      ) : null}
    </div>
  );
}
