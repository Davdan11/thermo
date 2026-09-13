/* Chantier V — première connexion d'un membre pour qui la 2e étape est obligatoire : activation guidée (même
   assistant que la page Sécurité). Sous /gestion/connexion : le proxy laisse passer ; la page vérifie l'état. */
import "@/components/gestion/securite/securite.css";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionState, LOGIN_PATH } from "@/lib/gestion/auth/dal";
import { pendingEnrollment } from "@/lib/gestion/securite/deux-etapes";
import { MFA_PATH } from "@/lib/gestion/securite/sessions";
import { ROLE_LABELS } from "@/lib/gestion/equipe/types";
import { Mark } from "@/components/gestion/ui";
import { EnrollWizard } from "@/components/gestion/securite/EnrollWizard";
import { cancelSetupAction, confirmSetupAction, finalizeSetupAction, startSetupAction } from "./actions";

export const metadata: Metadata = { title: "Protéger mon accès" };

const ERRORS: Record<string, string> = {
  codes: "Cochez la case : vos codes de secours doivent être rangés avant l’activation.",
  expire: "L’activation a expiré (30 minutes). Recommencez.",
};

export default async function ActiverDeuxEtapesPage({ searchParams }: { searchParams: Promise<{ erreur?: string }> }) {
  const state = await getSessionState();
  if (state.status === "none") redirect(LOGIN_PATH);
  if (state.status === "ok") redirect("/gestion");
  if (state.status === "mfa") redirect(MFA_PATH);
  const { erreur } = await searchParams;
  const pending = await pendingEnrollment(state.email);
  return (
    <main className="g-app g-center">
      <div className="g-panel" style={{ maxWidth: 560 }}>
        <Mark />
        <div className="k-card k-card--pad cr-rise se-mfa">
          <p className="k-eyebrow">Première connexion · {ROLE_LABELS[state.session.role]}</p>
          <h1 className="k-h1" style={{ fontSize: 30 }}>
            Protégez <em>votre accès</em>
          </h1>
          <p className="k-lead" style={{ marginBottom: 18 }}>
            Bonjour {state.session.name}. L’outil contient les coordonnées de vos clients : un code sur votre cellulaire est demandé en plus du lien par courriel. Quatre étapes, environ deux minutes, une seule fois.
          </p>
          <EnrollWizard pending={pending} email={state.email} error={erreur ? (ERRORS[erreur] ?? null) : null} startAction={startSetupAction} confirmAction={confirmSetupAction} finalizeAction={finalizeSetupAction} cancelAction={cancelSetupAction} />
        </div>
        <p className="g-foot">Téléphone perdu ? Le propriétaire peut réinitialiser votre accès.</p>
      </div>
    </main>
  );
}
