/* ==================================================================
   /gestion/recrutement/accueil/[id] — Chantier R : accueil guidé d'un
   nouveau partenaire. Les étapes du volet A (entente, RBQ, assurance)
   renvoient vers sa fiche ; l'identité légale et les disponibilités se
   saisissent ici.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { INSTALLER_ID_RE } from "@/lib/gestion/partenaires/types";
import { WEEKDAYS } from "@/lib/gestion/reseau/accueil";
import { accueilView } from "@/lib/gestion/reseau/views";
import { availabilityAction, legalAction } from "../../../reseau-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import "@/components/gestion/reseau/reseau.css";

export const metadata: Metadata = { title: "Accueil d’un partenaire" };

const ORDER = [1, 2, 3, 4, 5, 6, 0];

export default async function AccueilPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!INSTALLER_ID_RE.test(id)) notFound();
  const v = await accueilView(id);
  if (!v) notFound();
  const legal = v.record?.legal;
  const av = v.record?.availability;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/recrutement" className="k-link">
            <ChevronLeft size={14} aria-hidden /> Recrutement
          </Link>
          <p className="k-eyebrow">Accueil</p>
          <h1 className="k-h1">
            {v.installer.company} <em>{v.done === v.total ? "en règle" : `${v.done} étapes sur ${v.total}`}</em>
          </h1>
          <span className="rs-progress" aria-hidden style={{ display: "block", maxWidth: 420 }}>
            <i style={{ transform: `scaleX(${v.done / v.total})` }} />
          </span>
        </div>
      </Reveal>

      <div className="rs-cands">
        <Card title="Étapes" sub="Dans l’ordre ; chaque étape s’ouvre là où elle se règle.">
          <ol className="rs-steps">
            {v.steps.map((s, i) => (
              <li key={s.id} style={{ ["--i" as string]: i }}>
                <Link href={s.href} className={`rs-step is-${s.state}`} style={{ ["--i" as string]: i }}>
                  <span className="rs-step__mark" aria-hidden>
                    {s.state === "fait" ? <Check size={15} /> : i + 1}
                  </span>
                  <span>
                    <b>{s.label}</b>
                    <small>{s.detail}</small>
                  </span>
                  <span className="g-hint">{s.state === "fait" ? "Fait" : s.state === "attente" ? "En attente" : "À faire"}</span>
                </Link>
              </li>
            ))}
          </ol>
        </Card>

        <div style={{ display: "grid", gap: 16 }}>
          <Card title="Identité légale" sub="Telle qu’au Registraire des entreprises du Québec">
            <ActionForm action={legalAction.bind(null, id)} submit="Enregistrer">
              <div className="g-field">
                <label className="g-label" htmlFor="lg-name">
                  Nom légal
                </label>
                <input id="lg-name" name="legalName" className="g-input" defaultValue={legal?.legalName ?? ""} maxLength={160} />
              </div>
              <div className="g-row g-row--2">
                <div className="g-field">
                  <label className="g-label" htmlFor="lg-neq">
                    NEQ <small>(10 chiffres)</small>
                  </label>
                  <input id="lg-neq" name="neq" inputMode="numeric" className="g-input" defaultValue={legal?.neq ?? ""} maxLength={20} />
                </div>
                <div className="g-field">
                  <label className="g-label" htmlFor="lg-addr">
                    Adresse du siège
                  </label>
                  <input id="lg-addr" name="address" className="g-input" defaultValue={legal?.address ?? ""} maxLength={240} />
                </div>
              </div>
            </ActionForm>
          </Card>

          <Card title="Disponibilités" sub="Sert à repérer les zones saturées sur la carte (agenda plein).">
            <ActionForm action={availabilityAction.bind(null, id)} submit="Enregistrer">
              <fieldset className="g-fieldset" style={{ border: 0, padding: 0, margin: 0 }}>
                <legend className="g-label">Jours de travail</legend>
                <div className="rs-days">
                  {ORDER.map((d) => (
                    <label key={d}>
                      <input type="checkbox" name="days" value={d} defaultChecked={av?.days.includes(d)} /> {WEEKDAYS[d]}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="g-row g-row--2">
                <div className="g-field">
                  <label className="g-label" htmlFor="av-cap">
                    Installations par semaine <small>(selon le partenaire)</small>
                  </label>
                  <input id="av-cap" name="weeklyCapacity" type="number" min={0} max={200} className="g-input" defaultValue={av?.weeklyCapacity ?? ""} />
                </div>
                <div className="g-field">
                  <label className="g-label" htmlFor="av-note">
                    Note
                  </label>
                  <input id="av-note" name="note" className="g-input" defaultValue={av?.note ?? ""} maxLength={300} placeholder="Vacances, saison…" />
                </div>
              </div>
            </ActionForm>
          </Card>
        </div>
      </div>
    </>
  );
}
