/* Chantier S — 2e étape de la connexion. Sous /gestion/connexion : le proxy laisse passer ; la page
   vérifie elle-même l'état (sans session : connexion ; 2e étape déjà faite : accueil). */
import "@/components/gestion/securite/securite.css";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSessionState, LOGIN_PATH, MFA_SETUP_PATH } from "@/lib/gestion/auth/dal";
import { twoFactorStatus } from "@/lib/gestion/securite/deux-etapes";
import { trustDays } from "@/lib/gestion/securite/sessions";
import { logout } from "../actions";
import { sendLoginSmsAction, verifyLoginCodeAction } from "./actions";
import { Mark } from "@/components/gestion/ui";
import { SecondFactorForm } from "@/components/gestion/securite/SecondFactorForm";

export const metadata: Metadata = { title: "Deuxième étape" };

export default async function DeuxEtapesConnexionPage() {
  const state = await getSessionState();
  if (state.status === "none") redirect(LOGIN_PATH);
  if (state.status === "ok") redirect("/gestion");
  if (state.status === "mfa-setup") redirect(MFA_SETUP_PATH); // Chantier V : 2e étape à activer d'abord
  const [st, days] = await Promise.all([twoFactorStatus(state.email), trustDays()]);
  return (
    <main className="g-app g-center">
      <div className="g-panel">
        <Mark />
        <div className="k-card k-card--pad cr-rise se-mfa">
          <p className="k-eyebrow">Deuxième étape</p>
          <h1 className="k-h1" style={{ fontSize: 32 }}>
            Confirmez <em>que c’est vous</em>
          </h1>
          <p className="k-lead" style={{ marginBottom: 18 }}>
            Entrez le code à 6 chiffres affiché dans votre application d’authentification pour <strong>{state.email}</strong>.
          </p>
          <SecondFactorForm verifyAction={verifyLoginCodeAction} smsAction={st.smsAvailable ? sendLoginSmsAction : undefined} smsMasked={st.smsAvailable ? st.smsMasked : null} trustDays={days} backupLeft={st.backupRemaining} submitLabel="Ouvrir l’outil" />
          <form action={logout} className="se-alt">
            <button type="submit" className="se-linkbtn">
              Annuler et se déconnecter
            </button>
          </form>
        </div>
        <p className="g-foot">Téléphone perdu ? Un code de secours ou la procédure de récupération (serveur) vous rend l’accès.</p>
      </div>
    </main>
  );
}
