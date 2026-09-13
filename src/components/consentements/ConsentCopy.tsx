"use client";

/* ==================================================================
   Conformité C2 — textes de consentement dans les formulaires publics.

   useConsentTexts() : textes en vigueur (GET /api/consentements/textes,
   une seule requête par page). « actuel » : trousse ou identité
   incomplète, le formulaire garde ses textes actuels.
   <ConsentCopy> : un texte tel quel, avec le lien de la politique
   cliquable ; les champs séparés par deux espaces (adresse, courriel,
   lien) sont joints par « · ». Aucun style imposé : chaque formulaire
   garde le sien (passer className / linkStyle).
   ================================================================== */

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import type { ConsentAnswers, PublicConsentReady, PublicConsentTexts } from "@/lib/consentements/publics";

export type ConsentState = { status: "chargement" | "actuel"; texts: null } | { status: "pret"; texts: PublicConsentReady };

let pending: Promise<PublicConsentTexts> | null = null;

function load(): Promise<PublicConsentTexts> {
  pending ??= fetch("/api/consentements/textes")
    .then((r) => (r.ok ? (r.json() as Promise<PublicConsentTexts>) : { ready: false as const }))
    .catch(() => {
      pending = null;
      return { ready: false as const };
    });
  return pending;
}

export function useConsentTexts(): ConsentState {
  const [state, setState] = useState<ConsentState>({ status: "chargement", texts: null });
  useEffect(() => {
    let live = true;
    load().then((t) => live && setState(t.ready ? { status: "pret", texts: t } : { status: "actuel", texts: null }));
    return () => {
      live = false;
    };
  }, []);
  return state;
}

/** Champ « consentements » envoyé avec le formulaire (seulement quand les textes C2 sont affichés). */
export function consentAnswers(state: ConsentState, v: { rappels: boolean; promotions: boolean; jumelage?: boolean }): ConsentAnswers | undefined {
  if (state.status !== "pret") return undefined;
  return { version: state.texts.version, rappels: v.rappels, promotions: v.promotions, ...(v.jumelage !== undefined ? { jumelage: v.jumelage } : {}) };
}

const URL_RE = /(https?:\/\/[^\s]+?)([.,;:)]?)(?=\s|$)/g;

function linkify(text: string, linkStyle?: CSSProperties, linkClassName?: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(URL_RE)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    const href = m[1];
    const label = href.replace(/^https?:\/\//, "");
    out.push(
      <a key={`${i}-${href}`} href={href} target="_blank" rel="noopener" style={linkStyle} className={linkClassName}>
        {label}
      </a>,
    );
    if (m[2]) out.push(m[2]);
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** Un texte de la trousse, mot pour mot : lien de la politique cliquable, champs joints par « · ». */
export function ConsentCopy({ text, linkStyle, linkClassName }: { text: string; linkStyle?: CSSProperties; linkClassName?: string }) {
  const parts = text.split(/\s{2,}/);
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 ? " · " : null}
          {linkify(p, linkStyle, linkClassName)}
        </span>
      ))}
    </>
  );
}

/** Paragraphe d'avis : un intitulé en tête (séparé par deux espaces) est mis en gras. */
export function NoticeParagraph({ text, linkStyle, linkClassName, style, className }: { text: string; linkStyle?: CSSProperties; linkClassName?: string; style?: CSSProperties; className?: string }) {
  const m = /^([^\n]{2,40}?)\s{2,}([\s\S]+)$/.exec(text);
  return (
    <p style={style} className={className}>
      {m ? (
        <>
          <strong>{m[1]}</strong> <ConsentCopy text={m[2]} linkStyle={linkStyle} linkClassName={linkClassName} />
        </>
      ) : (
        <ConsentCopy text={text} linkStyle={linkStyle} linkClassName={linkClassName} />
      )}
    </p>
  );
}
