/* Chantier V — page du lien d'invitation. L'ouvrir (GET) n'accepte rien : les antivirus de messagerie visitent les
   liens. Le bouton envoie un POST (Server Action) qui accepte l'invitation, active le membre et ouvre sa session ; la
   2e étape obligatoire est activée juste après. Sous /gestion/connexion : le proxy laisse passer. */
import type { Metadata } from "next";
import Link from "next/link";
import { peekInvite } from "@/lib/gestion/equipe/members";
import { ROLE_LABELS } from "@/lib/gestion/equipe/types";
import { Mark } from "@/components/gestion/ui";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { acceptInvitationAction } from "./actions";

export const metadata: Metadata = { title: "Invitation" };

const MESSAGES: Record<string, string> = {
  expire: "Cette invitation a expiré. Demandez au propriétaire de vous en renvoyer une.",
  utilise: "Cette invitation a déjà servi. Connectez-vous avec votre adresse courriel.",
  invalide: "Ce lien d’invitation n’est pas valide.",
  trop: "Trop d’essais. Attendez quelques minutes, puis réessayez.",
};

export default async function InvitationPage({ searchParams }: { searchParams: Promise<{ jeton?: string; erreur?: string }> }) {
  const { jeton, erreur } = await searchParams;
  const peek = erreur ? { state: erreur } : typeof jeton === "string" ? await peekInvite(jeton) : { state: "invalide" };
  const ok = peek.state === "valide" && typeof jeton === "string" && "name" in peek;
  return (
    <main className="g-app g-center">
      <div className="g-panel">
        <Mark />
        <div className="k-card k-card--pad cr-rise">
          <p className="k-eyebrow">Invitation</p>
          {ok ? (
            <>
              <h1 className="k-h1" style={{ fontSize: 32 }}>
                Bienvenue, <em>{peek.name}</em>
              </h1>
              <p className="k-lead" style={{ marginBottom: 18 }}>
                Vous rejoignez l’outil de gestion comme <strong>{ROLE_LABELS[peek.role!].toLowerCase()}</strong>. Touchez le bouton pour ouvrir votre session sur cet appareil ; vous protégerez ensuite votre accès avec un code sur votre cellulaire.
              </p>
              <form action={acceptInvitationAction}>
                <input type="hidden" name="jeton" value={jeton} />
                <SubmitButton className="g-btn g-btn--primary g-btn--block g-btn--lg" pendingLabel="Ouverture…">
                  Accepter et ouvrir l’outil
                </SubmitButton>
              </form>
            </>
          ) : (
            <>
              <h1 className="k-h1" style={{ fontSize: 30 }}>
                Invitation non valide
              </h1>
              <p className="k-lead" style={{ marginBottom: 18 }}>{MESSAGES[peek.state] ?? MESSAGES.invalide}</p>
              <Link href="/gestion/connexion" className="g-btn g-btn--ink g-btn--block">
                Aller à la connexion
              </Link>
            </>
          )}
        </div>
        <p className="g-foot">Outil interne de Thermopompes À Vendre.</p>
      </div>
    </main>
  );
}
