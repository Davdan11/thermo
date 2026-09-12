"use client";

import "./seo-hero.css";
import type { ReactNode } from "react";
import Image from "next/image";
import { HeroActions, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { K, StatsPanel } from "./parts";

/* ==================================================================
   Vue du héros SEO (client) : coquille premium commune, titre révélé
   ligne par ligne, « En bref », boutons, chiffres ; le motif propre à
   la page arrive tout fait dans `visual` (et `background`).
   ================================================================== */

export type TitleLine = { before: string; serif?: string; after?: string };

const TITLE_SIZE = {
  short: "clamp(42px, 5.2vw, 88px)",
  medium: "clamp(38px, 4.1vw, 70px)",
  long: "clamp(34px, 3.4vw, 58px)",
};

export function SeoHeroView({
  eyebrow,
  lines,
  titleLength,
  intro,
  answer,
  breadcrumbs,
  stats,
  visual,
  background,
  snow = 0,
  image,
  imageAlt = "",
  columns,
}: {
  eyebrow?: string;
  lines: TitleLine[];
  titleLength: number;
  intro: string;
  answer?: string;
  breadcrumbs: BreadcrumbItem[];
  stats?: Array<{ label: string; value: string }>;
  visual?: ReactNode;
  background?: ReactNode;
  snow?: number;
  image?: string;
  imageAlt?: string;
  columns?: string;
}) {
  const size = titleLength <= 30 ? "short" : titleLength <= 56 ? "medium" : "long";
  const bg = (
    <>
      {image && (
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]" aria-hidden="true">
          <Image src={image} alt={imageAlt} fill preload sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-center opacity-40 lg:opacity-70" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${K.ink} 0%, rgba(10,20,25,0.8) 45%, rgba(10,20,25,0.35) 100%)` }} />
        </div>
      )}
      {background}
    </>
  );

  return (
    <HeroShell visual={visual} background={bg} snow={snow} size="md" labelledBy="seo-hero-titre" columns={columns}>
      <HeroFade delay={0} className="ph-crumbs -mt-2">
        <Breadcrumbs items={breadcrumbs} />
      </HeroFade>
      {eyebrow ? <HeroEyebrow>{eyebrow}</HeroEyebrow> : null}
      <HeroTitle
        id="seo-hero-titre"
        style={{ fontSize: TITLE_SIZE[size], lineHeight: size === "long" ? 1 : 0.96, margin: eyebrow ? "22px 0 0" : "8px 0 0", textWrap: "balance" }}
        lines={lines.map((l, i) => (
          <>
            {l.before}
            {l.serif ? <Serif>{l.serif}</Serif> : null}
            {l.after}
            {/* Espace réelle entre deux lignes : le texte du h1 reste « mot mot » pour les moteurs. */}
            {i < lines.length - 1 ? " " : null}
          </>
        ))}
      />
      <HeroLead delay={0.55} style={{ maxWidth: 640 }}>
        {intro}
      </HeroLead>
      {answer ? (
        <HeroFade delay={0.7} className="mt-7 max-w-[640px]">
          <div role="note" aria-label="En bref" className="relative rounded-[18px] py-4 pl-6 pr-5" style={{ background: "rgba(16,34,45,0.62)", border: `1px solid ${K.line}` }}>
            <span aria-hidden="true" className="absolute bottom-4 left-0 top-4 w-[2px] rounded-full" style={{ background: K.orange }} />
            <p className="text-[11px] font-semibold uppercase" style={{ color: K.orange, letterSpacing: "0.2em", margin: 0 }}>
              En bref
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "rgba(244,239,231,0.88)", margin: "6px 0 0" }}>
              {answer}
            </p>
          </div>
        </HeroFade>
      ) : null}
      <HeroActions delay={0.85}>
        <HeroButton href="/trouver-ma-thermopompe">Trouver ma thermopompe en 2 min</HeroButton>
        <a href="tel:4389003224" className="ph-ghost inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold" style={{ border: `1px solid ${K.line}`, color: K.cream }}>
          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          438-900-3224
        </a>
      </HeroActions>
      <HeroFade delay={0.95}>
        <p className="text-[13px]" style={{ color: K.faint, margin: "14px 0 0" }}>
          Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle.
        </p>
      </HeroFade>
      {stats && stats.length > 0 ? <StatsPanel items={stats} delay={1.05} /> : null}
    </HeroShell>
  );
}
