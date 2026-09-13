/* ==================================================================
   Chantier S — connexion à deux étapes : activation guidée (si elle
   n'est pas active), sinon gestion : appareils de confiance et leur
   durée, nouveaux codes de secours, désactivation. Les deux derniers
   exigent un code donné il y a moins de 10 minutes.
   ================================================================== */
import "@/components/gestion/securite/securite.css";
import type { Metadata } from "next";
import Link from "next/link";
import { LaptopMinimal } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { pendingEnrollment, twoFactorStatus } from "@/lib/gestion/securite/deux-etapes";
import { hasRecentStepUp } from "@/lib/gestion/securite/session";
import { listTrustedDevices, trustDays } from "@/lib/gestion/securite/sessions";
import { Card } from "@/components/gestion/kit/Card";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { EnrollWizard } from "@/components/gestion/securite/EnrollWizard";
import { Recovery } from "@/components/gestion/securite/Recovery";
import { RegenerateCodes } from "@/components/gestion/securite/RegenerateCodes";
import { SecondFactorForm } from "@/components/gestion/securite/SecondFactorForm";
import { ago, day } from "@/components/gestion/securite/format";
import {
  cancelEnrollmentAction,
  confirmEnrollmentAction,
  disableTwoFactorAction,
  finalizeEnrollmentAction,
  regenerateCodesAction,
  revokeDeviceAction,
  saveTrustDaysAction,
  sendStepUpSmsAction,
  startEnrollmentAction,
  stepUpAction,
} from "../actions";

export const metadata: Metadata = { title: "Deuxième étape" };

const ERRORS: Record<string, string> = {
  codes: "Cochez la case : vos codes de secours doivent être rangés avant l’activation.",
  expire: "L’activation a expiré (30 minutes). Recommencez.",
  code: "Entrez d’abord un nouveau code, plus haut.",
  confirmer: "Cochez la case de confirmation pour désactiver.",
};

function Head({ enabled }: { enabled: boolean }) {
  return (
    <Reveal className="k-pagehead">
      <div>
        <p className="k-eyebrow">
          <Link href="/gestion/securite">Sécurité</Link>
        </p>
        <h1 className="k-h1">
          Deuxième <em>étape</em>
        </h1>
        <p className="k-lead">{enabled ? "Appareils de confiance, codes de secours et désactivation." : "Un code sur votre téléphone en plus du lien par courriel : quatre étapes, environ deux minutes."}</p>
      </div>
    </Reveal>
  );
}

export default async function DeuxEtapesPage({ searchParams }: { searchParams: Promise<{ erreur?: string }> }) {
  const session = await requireAdmin();
  const { erreur } = await searchParams;
  const error = erreur ? (ERRORS[erreur] ?? null) : null;
  const st = await twoFactorStatus(session.email);

  if (!st.enabled) {
    const pending = await pendingEnrollment(session.email);
    return (
      <div className="se-narrow">
        <Head enabled={false} />
        {st.suspended ? <p className="se-flash se-flash--warn">La 2e étape est suspendue par le serveur (GESTION_2FA_DESACTIVEE=1). Retirez cette ligne de shared/.env pour la rétablir.</p> : null}
        <EnrollWizard pending={pending} email={session.email} error={error} startAction={startEnrollmentAction} confirmAction={confirmEnrollmentAction} finalizeAction={finalizeEnrollmentAction} cancelAction={cancelEnrollmentAction} />
        <Recovery />
      </div>
    );
  }

  const [recent, devices, days] = await Promise.all([hasRecentStepUp(), listTrustedDevices(), trustDays()]);
  const now = Date.now();
  return (
    <div className="se-narrow">
      <Head enabled />
      {error ? (
        <p className="se-flash se-flash--warn" role="alert">
          {error}
        </p>
      ) : null}

      {!recent ? (
        <Card title="Confirmez avec un nouveau code" sub="Pour créer des codes de secours ou désactiver la 2e étape. L’accès reste ouvert 10 minutes." id="code">
          <SecondFactorForm verifyAction={stepUpAction} smsAction={st.smsAvailable ? sendStepUpSmsAction : undefined} smsMasked={st.smsAvailable ? st.smsMasked : null} backupLeft={st.backupRemaining} submitLabel="Confirmer" returnTo="/gestion/securite/deux-etapes" />
        </Card>
      ) : null}

      <Card title="Appareils de confiance" sub={days ? `Le code n’est pas redemandé pendant ${days} jours sur ces appareils.` : "Désactivés : le code est demandé à chaque connexion."} className="se-block">
        {devices.length ? (
          <ul className="se-list">
            {devices.map((d, i) => (
              <li key={d.id} className="se-row" style={{ animationDelay: `${i * 40}ms` }}>
                <span className="se-row__icon" aria-hidden>
                  <LaptopMinimal size={18} />
                </span>
                <div className="se-row__body">
                  <p className="se-row__title">{d.device}</p>
                  <p className="se-row__meta">
                    {d.email} · ajouté le {day(d.createdAt)} · {d.lastUsedAt ? `utilisé ${ago(d.lastUsedAt, now)}` : "pas encore utilisé"} · expire le {day(d.expiresAt)}
                  </p>
                </div>
                <form action={revokeDeviceAction}>
                  <input type="hidden" name="appareil" value={d.id} />
                  <SubmitButton className="k-btn k-btn--ghost se-row__btn" pendingLabel="…">
                    Retirer
                  </SubmitButton>
                </form>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState compact title="Aucun appareil de confiance" body="Cochez « Faire confiance à cet appareil » au moment du code pour en ajouter un." />
        )}
        <form action={saveTrustDaysAction} className="se-inline">
          <label className="g-field" style={{ margin: 0 }}>
            <span className="g-label">Durée de confiance</span>
            <select name="jours" className="g-select g-input" defaultValue={String(days)}>
              <option value="0">Jamais (code à chaque connexion)</option>
              <option value="7">7 jours</option>
              <option value="14">14 jours</option>
              <option value="30">30 jours</option>
              <option value="60">60 jours</option>
              <option value="90">90 jours</option>
            </select>
          </label>
          <SubmitButton className="k-btn k-btn--ink" pendingLabel="…">
            Enregistrer
          </SubmitButton>
        </form>
      </Card>

      <Card title="Codes de secours" sub={`${st.backupRemaining} sur 10 encore utilisables. En créer de nouveaux annule les anciens.`} className="se-block">
        {recent ? <RegenerateCodes action={regenerateCodesAction} /> : <p className="g-hint">Entrez d’abord un nouveau code, plus haut.</p>}
      </Card>

      <Card title="Désactiver la deuxième étape" sub="L’outil ne demandera plus que le lien par courriel." className="se-block">
        {recent ? (
          <form action={disableTwoFactorAction} className="se-finalize">
            <label className="se-check">
              <input type="checkbox" name="confirmer" value="oui" required />
              <span>Je comprends qu’une boîte courriel piratée suffira de nouveau pour ouvrir l’outil.</span>
            </label>
            <SubmitButton className="k-btn se-btn-danger" pendingLabel="Désactivation…">
              Désactiver
            </SubmitButton>
          </form>
        ) : (
          <p className="g-hint">Entrez d’abord un nouveau code, plus haut.</p>
        )}
      </Card>

      <Recovery />
    </div>
  );
}
