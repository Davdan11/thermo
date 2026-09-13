/* ==================================================================
   /devis/[jeton] — la soumission vue par le client, sans compte.
   GET en lecture seule : aucune écriture, aucun changement de statut
   (même une soumission qui vient d'expirer est calculée à l'affichage).
   La consultation est notée par un POST (/devis/[jeton]/vue) que la
   page envoie une fois affichée dans un vrai navigateur : les robots
   qui vérifient les liens des courriels ne comptent pas comme une
   ouverture. Accepter, Refuser et Question : POST /repondre.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { devisLimiters } from "@/lib/soumissions/rate-limit";
import { getClientView } from "@/lib/soumissions/service";
import { TOKEN_RE } from "@/lib/soumissions/tokens";
import { QuoteDocumentView } from "@/components/gestion/soumissions/document/QuoteDocumentView";
// Conformité C1 : après l'approbation de l'installateur, le document devient le contrat final à signer.
import { SIGN_ERRORS } from "@/lib/contrats/regles";
import { clientParcours } from "@/lib/contrats/service";
import { todayIn } from "@/lib/soumissions/dates";
import { ContractClientView, type ContractFlash } from "@/components/contrats/ContractClientView";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Votre soumission" };

const ERRORS: Record<string, string> = {
  nom: "Tapez votre prénom et votre nom au complet : ils tiennent lieu de signature.",
  conditions: "Cochez « J’ai lu et j’accepte les conditions » pour accepter.",
  "total-change": "Le total a changé depuis l’ouverture de la page. Vérifiez vos options, puis acceptez de nouveau.",
  "document-change": "La soumission a changé depuis l’ouverture de la page. Relisez-la, puis acceptez de nouveau.",
  expiree: "Cette soumission est expirée : elle ne peut plus être acceptée.",
  remplacee: "Cette soumission a été remplacée par une version plus récente.",
  acceptee: "Cette soumission a déjà été acceptée.",
  refusee: "Cette soumission a été refusée.",
  // Conformité C1.
  case: "Cochez la case avant d’aller de l’avant.",
  jumelage: "La signature se fait sur le contrat final de votre entrepreneur licencié, dès son approbation.",
  message: "Écrivez votre question avant de l’envoyer.",
  integrite: "Le document ne correspond plus à celui qui vous a été envoyé. Communiquez avec nous.",
};

function Plain({ title, text }: { title: string; text: string }) {
  return (
    <main className="dv" style={{ display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <h1 className="dv-sec__title" style={{ fontSize: 30 }}>{title}</h1>
        <p className="dv-soft">{text}</p>
      </div>
    </main>
  );
}

export default async function DevisPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string; c?: string; e?: string }> }) {
  const { token } = await params;
  const { r, c, e } = await searchParams;
  if (!devisLimiters.view.hit(ipFromHeaders(await headers()))) return <Plain title="Trop de visites" text="Réessayez dans quelques minutes." />;
  if (!TOKEN_RE.test(token)) return <Plain title="Ce lien n’est pas valide" text="Vérifiez qu’il est complet, ou répondez au courriel qui vous l’a envoyé." />;
  const view = await getClientView(token);
  if (view.state === "invalide") return <Plain title="Ce lien n’est pas valide" text="Vérifiez qu’il est complet, ou répondez au courriel qui vous l’a envoyé." />;

  // Conformité C1 : contrat final (après l'approbation de l'installateur) : un seul document, le contrat à signer.
  const parcours = view.doc.parcours ? await clientParcours(token) : null;
  if (parcours?.contract && (parcours.stage === "contrat" || parcours.stage === "signe")) {
    const cflash: ContractFlash | null = r === "signe" ? { tone: "ok", text: "Merci ! Votre contrat est signé. Une copie intégrale vous a été envoyée par courriel." } : r === "avenant" ? { tone: "ok", text: "Votre réponse à l’avenant est enregistrée." } : null;
    return <ContractClientView token={token} view={parcours} flash={cflash} asOf={todayIn()} error={e ? SIGN_ERRORS[e] ?? "Rien n’a été enregistré. Réessayez." : null} />;
  }

  const flash =
    r === "jumelage"
      ? { tone: "ok" as const, title: "Merci, c’est noté : vous allez de l’avant.", text: " Votre entrepreneur licencié confirme votre projet ; vous recevrez son contrat final à signer, par courriel et par texto." }
      : r === "refuse" || r === "autre"
        ? { tone: "info" as const, title: r === "refuse" ? "Votre refus est noté." : "Demande notée : nous choisissons un autre installateur.", text: " Nous vous revenons rapidement." }
        : e
          ? { tone: "bad" as const, title: "Rien n’a été enregistré.", text: ` ${SIGN_ERRORS[e] ?? "Réessayez."}` }
          : r === "acceptee"
      ? { tone: "ok" as const, title: "Merci ! Votre acceptation est enregistrée.", text: "Une copie du document accepté vous a été envoyée par courriel. Nous vous appelons pour confirmer la date." }
      : r === "refusee"
        ? { tone: "info" as const, title: "C’est noté.", text: "Votre refus a été transmis. Merci d’avoir pris le temps de lire la soumission." }
        : r === "question"
          ? { tone: "ok" as const, title: "Question envoyée.", text: "Nous vous répondons rapidement, par courriel ou par téléphone." }
          : r === "erreur"
            ? { tone: "bad" as const, title: "Rien n’a été enregistré.", text: ERRORS[c ?? ""] ?? "Une erreur est survenue. Réessayez, ou répondez au courriel reçu." }
            : null;

  const base = `/devis/${encodeURIComponent(token)}`;
  return (
    <>
      <noscript>
        <style>{`.dv-rise{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <QuoteDocumentView
        doc={view.doc}
        mode="client"
        status={view.status}
        canRespond={view.canRespond}
        asOf={view.asOf}
        initialSelection={view.selection}
        contentHash={view.contentHash}
        photoBase={`${base}/photo/`}
        action={`${base}/repondre`}
        beaconUrl={`${base}/vue`}
        acceptance={view.acceptance}
        refusal={view.refusal}
        replacedBy={view.replacedBy ? { v: view.replacedBy.v, href: `/devis/${view.replacedBy.token}` } : null}
        flash={flash}
        stage={parcours?.stage ?? null}
        jumelage={view.jumelage}
      />
    </>
  );
}
