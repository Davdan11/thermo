"use client";

/* ==================================================================
   Héros des pages /alertes-logisvert/confirmer et /desabonnement :
   un message court dans le style des héros du site (HeroKit), et, pour
   une alerte connue, un panneau récapitulatif (suivi, montant de
   référence en vert, état). Animé ; respecte « réduire les animations ».
   ================================================================== */
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";

const GREEN = "#1A8F4E";

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
  let title: ReactNode[];
  let lead: string;
  let actions: ReactNode;
  switch (variant) {
    case "confirmed":
    case "already":
      title = variant === "confirmed" ? ["Votre alerte", <Serif key="s">est active.</Serif>] : ["Alerte déjà", <Serif key="s">active.</Serif>];
      lead = `Nous vous écrirons dès qu’Hydro-Québec modifie le montant LogisVert pour ${what} : hausse, baisse, ajout à la liste ou retrait. Aucun autre courriel.`;
      actions = (
        <>
          {path && <HeroButton href={path}>Voir les montants actuels</HeroButton>}
          {unsubscribeHref && (
            <HeroButton href={unsubscribeHref} variant="ghost">
              Me désabonner
            </HeroButton>
          )}
        </>
      );
      break;
    case "unsubscribed":
      title = ["Vous êtes", <Serif key="s">désabonné.</Serif>];
      lead = `Plus aucune alerte LogisVert ne vous sera envoyée pour ${what}. Votre adresse a été retirée de cette alerte ; rien n’est conservé à son sujet.`;
      actions = (
        <>
          {path && <HeroButton href={path}>Revenir à la page</HeroButton>}
          <HeroButton href="/subventions" variant="ghost">
            Toutes les subventions
          </HeroButton>
        </>
      );
      break;
    case "unsubscribe-invalid":
      title = ["Déjà", <Serif key="s">désabonné.</Serif>];
      lead = "Ce lien n’est plus actif : l’alerte a déjà été retirée et vous ne recevrez plus rien à son sujet.";
      actions = (
        <HeroButton href="/subventions" variant="ghost">
          Toutes les subventions
        </HeroButton>
      );
      break;
    case "confirm-invalid":
      title = ["Ce lien n’est", <Serif key="s">plus actif.</Serif>];
      lead = "La demande a peut-être expiré (30 jours sans confirmation) ou l’alerte a été retirée. Vous pouvez en créer une nouvelle en quelques secondes depuis la fiche d’un modèle ou la page LogisVert d’une marque.";
      actions = (
        <>
          <HeroButton href="/subventions/logisvert">Subventions LogisVert par marque</HeroButton>
          <HeroButton href="/" variant="ghost">
            Accueil
          </HeroButton>
        </>
      );
      break;
  }

  const showPanel = Boolean(label && (variant === "confirmed" || variant === "already" || variant === "unsubscribed"));
  return (
    <HeroShell
      size="sm"
      snow={0.15}
      labelledBy="alerte-titre"
      visual={showPanel ? <StatusPanel label={label!} kind={kind} summary={summary} listDate={listDate} active={variant !== "unsubscribed"} /> : undefined}
    >
      <HeroEyebrow>Alerte LogisVert</HeroEyebrow>
      <HeroTitle id="alerte-titre" size="sm" lines={title} />
      <HeroLead>{lead}</HeroLead>
      <HeroActions>{actions}</HeroActions>
    </HeroShell>
  );
}

function StatusPanel({ label, kind, summary, listDate, active }: { label: string; kind?: "model" | "brand"; summary?: string; listDate?: string | null; active: boolean }) {
  const reduce = useReducedMotion();
  const rows: Array<[string, ReactNode]> = [
    ["Suivi", kind === "brand" ? `Toutes les thermopompes ${label}` : label],
    ...(summary ? ([["Montant de référence", <span key="a" style={{ color: GREEN, fontWeight: 600 }}>{summary}</span>]] as Array<[string, ReactNode]>) : []),
    ...(listDate ? ([["Liste Hydro-Québec du", listDate]] as Array<[string, ReactNode]>) : []),
    [
      "État",
      <span key="e" className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full" style={{ background: active ? GREEN : HC.faint }} />
        {active ? "Active" : "Retirée"}
      </span>,
    ],
  ];
  return (
    <HeroFade delay={0.45} className="mx-auto w-full max-w-[520px] lg:mr-0">
      <div
        className="relative overflow-hidden rounded-[24px]"
        style={{ background: "rgba(16,34,45,0.72)", border: `1px solid ${HC.line}`, backdropFilter: "blur(16px) saturate(130%)", WebkitBackdropFilter: "blur(16px) saturate(130%)" }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-0 h-[2px] w-full origin-left"
          style={{ background: HC.orange }}
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.3, ease: HERO_EASE, delay: 0.7 }}
        />
        <dl className="m-0">
          {rows.map(([k, v], i) => (
            <motion.div
              key={k}
              className="flex flex-col gap-1.5 px-6 py-4 sm:px-7"
              style={{ borderTop: i ? `1px solid ${HC.line}` : "none" }}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: HERO_EASE, delay: 0.75 + i * 0.1 }}
            >
              <dt className="text-[11.5px] font-medium uppercase" style={{ color: HC.faint, letterSpacing: "0.14em" }}>
                {k}
              </dt>
              <dd className="m-0 text-[18px] leading-snug" style={{ color: HC.cream, letterSpacing: "-0.01em" }}>
                {v}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </HeroFade>
  );
}
