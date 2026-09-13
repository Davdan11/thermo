/* /gestion/partenaires/reglages — délais et seuils du volet A (valeurs par défaut modifiables). */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readPartnerSettings } from "@/lib/gestion/partenaires/service";
import { partnerSettingsAction } from "../../partenaires-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Réglages des partenaires" };

const pc = (x: number) => String(Math.round(x * 100));

function Num({ name, label, value, hint, step = "1", suffix }: { name: string; label: string; value: number | string; hint?: string; step?: string; suffix?: string }) {
  return (
    <div className="g-field">
      <label className="g-label" htmlFor={name}>
        {label} {suffix ? <small>({suffix})</small> : null}
      </label>
      <input id={name} name={name} type="number" step={step} className="g-input" defaultValue={value} />
      {hint ? <span className="g-hint">{hint}</span> : null}
    </div>
  );
}

export default async function PartnerSettingsPage() {
  await requireAdmin();
  const s = await readPartnerSettings();
  const t = s.thresholds;
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/partenaires" className="k-link">
            <ChevronLeft size={15} aria-hidden /> Partenaires
          </Link>
          <h1 className="k-h1">Réglages</h1>
          <p className="k-lead">Valeurs par défaut, à ajuster selon l’entente de l’avocat et votre expérience. Les niveaux n’influencent que le classement des prochains jobs.</p>
        </div>
      </Reveal>
      <ActionForm action={partnerSettingsAction} submit="Enregistrer les réglages" submitClass="k-btn k-btn--primary k-btn--lg" className="cr-stack">
        <Card title="Entente et conformité">
          <div className="g-row g-row--2">
            <Num name="graceDays" label="Délai de grâce pour signer une nouvelle version" suffix="jours" value={s.graceDays} hint="Pour les partenaires déjà en place ; un nouveau partenaire signe avant toute offre." />
            <Num name="alertDays" label="Alerte avant l’expiration RBQ / assurance" suffix="jours" value={s.alertDays} />
          </div>
          <label className="g-check" style={{ marginTop: 10 }}>
            <input type="checkbox" name="blockWhenMissing" value="1" defaultChecked={s.blockWhenMissing} /> Bloquer aussi les offres quand la date d’expiration n’est pas saisie
          </label>
        </Card>
        <Card title="Terrain et service">
          <div className="g-row g-row--3">
            <Num name="serviceHours" label="Prise en charge d’un billet" suffix="heures" value={s.serviceHours} />
            <Num name="punctualityMinutes" label="Tolérance de ponctualité" suffix="minutes" value={s.punctualityMinutes} />
            <div className="g-field">
              <label className="g-label" htmlFor="photoReview">
                Vérification des photos
              </label>
              <select id="photoReview" name="photoReview" className="g-select" defaultValue={s.photoReview}>
                <option value="chaque">Chaque job</option>
                <option value="hasard">Au hasard</option>
              </select>
            </div>
          </div>
          <Num name="photoSampleRate" label="Part des jobs vérifiés au hasard" suffix="%" value={pc(s.photoSampleRate)} />
        </Card>
        <Card title="Niveaux : points au classement des jobs" sub="Ajoutés au score sur 100 (marque 40, distance 30, charge 20, historique 10).">
          <div className="g-row g-row--3">
            <Num name="pts_or" label="Or" value={s.tierPoints.or} />
            <Num name="pts_standard" label="Standard" value={s.tierPoints.standard} />
            <Num name="pts_probation" label="Probation" value={s.tierPoints.probation} />
          </div>
        </Card>
        <Card title="Seuils du niveau Or">
          <div className="g-row g-row--3">
            <Num name="orMinInstalls" label="Installations au moins" value={t.orMinInstalls} />
            <Num name="orMaxLaborPer100" label="Appels main-d’œuvre au plus" suffix="par 100" value={t.orMaxLaborPer100} step="0.1" />
            <Num name="orMinPhotoRate" label="Photos conformes" suffix="%" value={pc(t.orMinPhotoRate)} />
            <Num name="orMinPunctuality" label="Ponctualité" suffix="%" value={pc(t.orMinPunctuality)} />
            <Num name="orMinAcceptance" label="Acceptation des offres" suffix="%" value={pc(t.orMinAcceptance)} />
          </div>
        </Card>
        <Card title="Seuils de la probation automatique">
          <div className="g-row g-row--2">
            <Num name="probationMinInstalls" label="Installations mesurées au moins" value={t.probationMinInstalls} />
            <Num name="probationLaborPer100" label="Appels main-d’œuvre dès" suffix="par 100" value={t.probationLaborPer100} step="0.1" />
            <Num name="probationPhotoRate" label="Photos conformes sous" suffix="%" value={pc(t.probationPhotoRate)} />
            <Num name="probationPunctuality" label="Ponctualité sous" suffix="%" value={pc(t.probationPunctuality)} />
          </div>
        </Card>
      </ActionForm>
    </div>
  );
}
