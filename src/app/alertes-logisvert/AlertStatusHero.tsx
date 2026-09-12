/* ==================================================================
   Héros des pages /alertes-logisvert/confirmer et /desabonnement :
   choisit le message de chaque état (titre, texte, boutons, cachet et,
   pour une alerte connue, le récapitulatif : suivi, montant de référence,
   date de la liste, état) et le confie au héros « L’enveloppe »
   (components/heroes-v2/alertes). Animé ; respecte « réduire les animations ».
   ================================================================== */
import { EnveloppeHero, type EnvelopeAction, type EnvelopeRow } from "@/components/heroes-v2/alertes/EnveloppeHero";

export type AlertStatusVariant = "confirmed" | "already" | "unsubscribed" | "confirm-invalid" | "unsubscribe-invalid";

type Props = {
  variant: AlertStatusVariant;
  label?: string;
  kind?: "model" | "brand";
  /** Montant de référence (« 1 250 $ », « 12 modèles admissibles, jusqu’à 3 250 $ »). */
  summary?: string;
  listDate?: string | null;
  path?: string;
  unsubscribeHref?: string;
};

export function AlertStatusHero({ variant, label, kind, summary, listDate, path, unsubscribeHref }: Props) {
  const what = label ? (kind === "brand" ? `les thermopompes ${label}` : label) : "ce modèle";
  let title: [string, string];
  let lead: string;
  let actions: EnvelopeAction[];
  let postmark: string[];
  switch (variant) {
    case "confirmed":
    case "already":
      title = variant === "confirmed" ? ["Votre alerte", "est active."] : ["Alerte déjà", "active."];
      lead = `Nous vous écrirons dès qu’Hydro-Québec modifie le montant LogisVert pour ${what} : hausse, baisse, ajout à la liste ou retrait. Aucun autre courriel.`;
      actions = [
        ...(path ? [{ href: path, label: "Voir les montants actuels" }] : []),
        ...(unsubscribeHref ? [{ href: unsubscribeHref, label: "Me désabonner", ghost: true }] : []),
      ];
      postmark = variant === "confirmed" ? ["Confirmée"] : ["Déjà", "active"];
      break;
    case "unsubscribed":
      title = ["Vous êtes", "désabonné."];
      lead = `Plus aucune alerte LogisVert ne vous sera envoyée pour ${what}. Votre adresse a été retirée de cette alerte ; rien n’est conservé à son sujet.`;
      actions = [...(path ? [{ href: path, label: "Revenir à la page" }] : []), { href: "/subventions", label: "Toutes les subventions", ghost: true }];
      postmark = ["Retirée"];
      break;
    case "unsubscribe-invalid":
      title = ["Déjà", "désabonné."];
      lead = "Ce lien n’est plus actif : l’alerte a déjà été retirée et vous ne recevrez plus rien à son sujet.";
      actions = [{ href: "/subventions", label: "Toutes les subventions", ghost: true }];
      postmark = ["Déjà", "retirée"];
      break;
    case "confirm-invalid":
      title = ["Ce lien n’est", "plus actif."];
      lead =
        "La demande a peut-être expiré (30 jours sans confirmation) ou l’alerte a été retirée. Vous pouvez en créer une nouvelle en quelques secondes depuis la fiche d’un modèle ou la page LogisVert d’une marque.";
      actions = [
        { href: "/subventions/logisvert", label: "Subventions LogisVert par marque" },
        { href: "/", label: "Accueil", ghost: true },
      ];
      postmark = ["Lien", "inactif"];
      break;
  }

  const showPanel = Boolean(label && (variant === "confirmed" || variant === "already" || variant === "unsubscribed"));
  const active = variant !== "unsubscribed";
  const rows: EnvelopeRow[] | undefined = showPanel
    ? [
        { label: "Suivi", value: kind === "brand" ? `Toutes les thermopompes ${label}` : (label as string) },
        ...(summary ? [{ label: "Montant de référence", value: summary, tone: "amount" as const }] : []),
        ...(listDate ? [{ label: "Liste Hydro-Québec du", value: listDate }] : []),
        { label: "État", value: active ? "Active" : "Retirée", tone: active ? ("active" as const) : ("removed" as const) },
      ]
    : undefined;

  return <EnveloppeHero title={title} lead={lead} actions={actions} rows={rows} postmark={postmark} />;
}
