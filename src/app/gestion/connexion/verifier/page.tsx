/* Page du lien de connexion. L'ouvrir (GET) ne connecte pas : les antivirus de messagerie visitent les liens.
   Le bouton envoie un POST (Server Action) qui consomme le lien et ouvre la session. */
import type { Metadata } from "next";
import Link from "next/link";
import { peekMagicLink } from "@/lib/gestion/auth/magic-link";
import { confirmLogin } from "../actions";
import { Mark } from "@/components/gestion/ui";
import { SubmitButton } from "@/components/gestion/SubmitButton";

export const metadata: Metadata = { title: "Connexion" };

const MESSAGES: Record<string, string> = {
  expire: "Ce lien a expiré (15 minutes). Demandez-en un nouveau.",
  utilise: "Ce lien a déjà servi. Demandez-en un nouveau.",
  invalide: "Ce lien n’est pas valide. Demandez-en un nouveau.",
  trop: "Trop d’essais. Attendez quelques minutes, puis réessayez.",
};

export default async function VerifierPage({ searchParams }: { searchParams: Promise<{ jeton?: string; erreur?: string }> }) {
  const { jeton, erreur } = await searchParams;
  const state = erreur ? erreur : typeof jeton === "string" ? await peekMagicLink(jeton) : "invalide";
  const ok = state === "valide" && typeof jeton === "string";
  return (
    <main className="g-app g-center">
      <div className="g-panel">
        <Mark />
        <div className="g-card g-card__pad">
          <p className="g-eyebrow">Connexion</p>
          {ok ? (
            <>
              <h1 className="g-h1" style={{ fontSize: 30 }}>Ouvrir l’outil</h1>
              <p className="g-lead" style={{ marginBottom: 20 }}>Touchez le bouton pour ouvrir votre session sur cet appareil. Elle reste ouverte 30 jours.</p>
              <form action={confirmLogin}>
                <input type="hidden" name="jeton" value={jeton} />
                <SubmitButton className="g-btn g-btn--primary g-btn--block g-btn--lg" pendingLabel="Ouverture…">Me connecter</SubmitButton>
              </form>
            </>
          ) : (
            <>
              <h1 className="g-h1" style={{ fontSize: 30 }}>Lien non valide</h1>
              <p className="g-lead" style={{ marginBottom: 20 }}>{MESSAGES[state] ?? MESSAGES.invalide}</p>
              <Link href="/gestion/connexion" className="g-btn g-btn--ink g-btn--block">Recevoir un nouveau lien</Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
