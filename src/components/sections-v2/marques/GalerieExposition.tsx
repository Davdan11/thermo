"use client";

/* ==================================================================
   Sections « Exposition » : la suite du héros « Galerie » (/marques).
   Même mur gris chaud #ECEAE5, lettrage charbon #22211F. L’annuaire
   devient l’exposition : des salles par lettres (A – C, D – G…), un
   plan des salles, chaque marque encadrée et accrochée à son clou, qui
   tombe et se balance quand elle entre à l’écran, un halo de projecteur
   au-dessus, et son cartel (vrais chiffres). Puis une salle sombre (le
   choix entre plusieurs marques) et les textes de salle (guides).
   La recherche du héros filtre les salles en direct (logique inchangée,
   dans BrandDirectoryClient).
   ================================================================== */

import "./sections.css";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { brandLogoPath } from "@/lib/data/brand-logos";
import type { BrandSummary } from "@/lib/data/queries/brand-detail";
import { DISPLAY, EASE, fr, typo } from "@/components/heroes-v2/marques/shared";
import { Calm } from "./Calm";
import { CountUp } from "./CountUp";

type GalleryBrand = BrandSummary & { hasLogo: boolean };

const C = {
  wall: "#ECEAE5",
  ink: "#22211F",
  mute: "rgba(34,33,31,0.72)",
  faint: "rgba(34,33,31,0.5)",
  line: "rgba(34,33,31,0.16)",
  mat: "#FBFAF6",
  card: "#F6F5F1",
  night: "#22211F",
  nightMute: "rgba(236,234,229,0.76)",
  nightLine: "rgba(236,234,229,0.28)",
} as const;

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"];
const SPOT = "radial-gradient(ellipse 46% 44% at 50% 42%, rgba(255,253,246,0.95), rgba(255,253,246,0) 72%)";
const PLINTH = { background: "linear-gradient(#DAD6CE, #D1CCC3)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55), 0 -1px 0 rgba(34,33,31,0.12)" } as const;

const cleanName = (b: GalleryBrand) => b.brand.name.replace(" [DEV]", "");

function initialOf(name: string): string {
  const c = name.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

/** Même libellé des types que l’ancienne carte d’annuaire. */
function typesText(b: GalleryBrand): string {
  let filteredTypes = b.systemTypes.filter((st) => st.value !== "other");
  if (filteredTypes.length === 0 && b.systemTypes.length > 0) filteredTypes = b.systemTypes;
  return filteredTypes.length > 0
    ? filteredTypes
        .map((st) => {
          if (st.value === "wall-single") return "Murales";
          if (st.value === "multi-zone") return "Multizones";
          if (st.value === "central-ducted") return "Centrales";
          return st.label === "Autre" ? "Modèles variés" : st.label;
        })
        .join(" • ")
    : "Modèles variés";
}

type Room = { id: string; from: string; to: string; brands: GalleryBrand[] };

/** Salles d’exposition : lettres consécutives regroupées jusqu’à une taille de salle raisonnable. */
function hangRooms(list: GalleryBrand[]): Room[] {
  const sorted = [...list].sort((a, b) => cleanName(a).localeCompare(cleanName(b), "fr-CA", { sensitivity: "base" }));
  const letters: Array<{ l: string; items: GalleryBrand[] }> = [];
  for (const b of sorted) {
    const l = initialOf(cleanName(b));
    const last = letters[letters.length - 1];
    if (last && last.l === l) last.items.push(b);
    else letters.push({ l, items: [b] });
  }
  const target = Math.max(3, Math.ceil(sorted.length / 5));
  const rooms: Room[] = [];
  let cur: typeof letters = [];
  const size = (g: typeof letters) => g.reduce((s, x) => s + x.items.length, 0);
  const close = () => {
    if (!cur.length) return;
    const from = cur[0].l;
    const to = cur[cur.length - 1].l;
    const slug = (l: string) => (l === "#" ? "0" : l.toLowerCase());
    rooms.push({ id: `salle-${slug(from)}${to !== from ? `-${slug(to)}` : ""}`, from, to, brands: cur.flatMap((x) => x.items) });
    cur = [];
  };
  for (const g of letters) {
    if (cur.length && size(cur) + g.items.length > target * 1.3 && size(cur) >= target * 0.5) close();
    cur.push(g);
  }
  close();
  return rooms;
}

const roomLetters = (r: Room) => (r.from === r.to ? r.from : `${r.from} – ${r.to}`);

export function GalerieExposition({ brands, search, onReset }: { brands: GalleryBrand[]; search: string; onReset: () => void }) {
  const rooms = useMemo(() => hangRooms(brands), [brands]);
  return (
    <Calm>
      <section id="annuaire" aria-labelledby="annuaire-titre" className="relative flex-1 scroll-mt-24" style={{ background: C.wall, color: C.ink, fontFamily: DISPLAY }}>
        {/* Lumière douce venue du plafond, comme dans le héros */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px]" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,254,250,0.55), rgba(255,254,250,0) 72%)" }} />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pt-28">
          <header className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:items-end lg:gap-16">
            <div>
              <motion.p
                className="flex items-center gap-4 text-[11.5px] font-semibold uppercase"
                style={{ letterSpacing: "0.24em", margin: 0 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE }}
              >
                <span>Plan de l’exposition</span>
                <motion.span
                  aria-hidden="true"
                  className="inline-block h-px w-12 origin-left"
                  style={{ background: C.ink }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: EASE, delay: 0.25 }}
                />
                {rooms.length ? (
                  <span style={{ color: C.mute }}>
                    {rooms.length} salle{rooms.length > 1 ? "s" : ""}
                  </span>
                ) : null}
              </motion.p>
              <motion.h2
                id="annuaire-titre"
                style={{ fontFamily: DISPLAY, fontSize: "clamp(40px, 5.4vw, 92px)", fontWeight: 500, letterSpacing: "-0.052em", lineHeight: 0.95, margin: "22px 0 0", paddingBottom: "0.08em" }}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.25, ease: EASE, delay: 0.1 }}
              >
                Marques documentées
              </motion.h2>
            </div>
            <div>
              {search && (
                <p aria-live="polite" className="text-[14px] font-medium" style={{ color: C.mute, margin: "0 0 14px" }}>
                  {brands.length} résultat{brands.length > 1 ? "s" : ""}
                </p>
              )}
              {rooms.length > 1 ? (
                <nav aria-label="Salles de l’exposition">
                  <ol className="flex flex-wrap gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {rooms.map((r, i) => (
                      <motion.li
                        key={r.id}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.3 + i * 0.07 }}
                      >
                        <a href={`#${r.id}`} className="mqs-room-link inline-flex items-baseline gap-2.5 px-3.5 py-2 text-[13px]" style={{ border: `1px solid ${C.ink}`, color: C.ink }}>
                          <span className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em" }}>
                            Salle {ROMAN[i] ?? i + 1}
                          </span>
                          <span className="font-semibold">{roomLetters(r)}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ol>
                </nav>
              ) : null}
            </div>
          </header>

          {rooms.length > 0 ? (
            rooms.map((r, i) => <RoomBlock key={r.id} room={r} n={i} />)
          ) : (
            <EmptyFrame search={search} onReset={onReset} />
          )}

          {/* Mention de disponibilité, en cartel */}
          <motion.p
            className="mx-auto mt-20 max-w-[560px] px-4 py-3 text-center text-[12.5px] leading-relaxed"
            style={{ background: C.card, color: C.mute, boxShadow: "0 1px 2px rgba(34,33,31,0.08), 0 0 0 1px rgba(34,33,31,0.05)", fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {typo("Certaines marques ne sont pas distribuées partout au Québec. La disponibilité varie selon la région et l'installateur.")}
          </motion.p>
        </div>
        <div aria-hidden="true" className="h-[22px]" style={PLINTH} />
      </section>

      <DarkRoom />
      <WallTexts />
    </Calm>
  );
}

/* ------------------------------------------------------------------
   Une salle : lettres en vinyle à gauche (collantes), cadres à droite
   ------------------------------------------------------------------ */

function RoomBlock({ room, n }: { room: Room; n: number }) {
  const first = cleanName(room.brands[0]);
  const last = cleanName(room.brands[room.brands.length - 1]);
  return (
    <section
      id={room.id}
      aria-labelledby={`${room.id}-titre`}
      className="relative mt-16 grid scroll-mt-28 gap-10 pt-10 lg:mt-24 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14 lg:pt-14"
      style={{ borderTop: `1px solid ${C.line}` }}
    >
      <div className="flex items-end justify-between gap-6 lg:sticky lg:top-28 lg:block lg:self-start">
        <h3 id={`${room.id}-titre`} style={{ margin: 0, fontFamily: DISPLAY }}>
          <span className="flex items-center gap-3 text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.26em" }}>
            Salle {ROMAN[n] ?? n + 1}
            <span aria-hidden="true" className="inline-block h-px w-8" style={{ background: C.ink, opacity: 0.5 }} />
          </span>{" "}
          {/* Lettrage posé sur le mur de gauche à droite, comme un vinyle */}
          <motion.span
            className="mt-3 block whitespace-nowrap"
            style={{ fontSize: "clamp(60px, 6.4vw, 108px)", fontWeight: 500, letterSpacing: "-0.06em", lineHeight: 0.9, paddingBottom: "0.06em" }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            // Pas de seuil « amount » : l’élément entièrement masqué par clip-path aurait un ratio nul.
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            {roomLetters(room)}
          </motion.span>
        </h3>
        <p className="text-[13.5px] leading-snug lg:mt-5" style={{ color: C.mute, margin: 0, fontFamily: "var(--font-sans)" }}>
          <span className="block text-[26px] font-semibold tabular-nums" style={{ color: C.ink, letterSpacing: "-0.04em", fontFamily: DISPLAY, lineHeight: 1.1 }}>
            <CountUp value={room.brands.length} /> <span className="text-[13px] font-medium" style={{ letterSpacing: "0.02em" }}>marque{room.brands.length > 1 ? "s" : ""}</span>
          </span>
          {room.brands.length > 1 ? (
            <span className="mt-1 block">
              De {first} à {last}
            </span>
          ) : null}
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-14 sm:grid-cols-3 sm:gap-x-10 lg:gap-y-20 xl:grid-cols-4" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {room.brands.map((b, i) => (
          <Placard key={b.brand.id} b={b} i={i} />
        ))}
      </ul>
    </section>
  );
}

function Placard({ b, i }: { b: GalleryBrand; i: number }) {
  const name = cleanName(b);
  const logoPath = b.hasLogo ? brandLogoPath(b.brand.slug) ?? "" : "";
  const tilt = (i % 2 ? -1 : 1) * (3 + (i % 3));
  const delay = (i % 4) * 0.09;
  return (
    <li className="relative min-w-0">
      <Link href={`/marques/${b.brand.slug}`} className="mqs-placard relative block" style={{ color: C.ink }}>
        {/* Halo du projecteur : s’allume à l’arrivée, se renforce au survol */}
        <motion.span
          aria-hidden="true"
          className="mqs-spot pointer-events-none absolute -left-1/4 -top-10 block h-[125%] w-[150%]"
          style={{ background: SPOT }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: EASE, delay }}
        />
        {/* Clou */}
        <span aria-hidden="true" className="relative block h-[22px]">
          <span className="absolute left-1/2 top-0 block h-[6px] w-[6px] -translate-x-1/2 rounded-full" style={{ background: "#5F5B55", boxShadow: "0 1px 1px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.35)" }} />
        </span>
        {/* Le cadre tombe sur son clou et se balance avant de s’immobiliser */}
        <motion.div
          className="relative"
          style={{ transformOrigin: "50% -18px" }}
          initial={{ y: -34, opacity: 0, rotate: tilt }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            y: { type: "spring", stiffness: 90, damping: 15, delay },
            opacity: { duration: 0.35, delay },
            rotate: { type: "spring", stiffness: 38, damping: 3.2, delay: delay + 0.1 },
          }}
        >
          <svg aria-hidden="true" className="pointer-events-none absolute bottom-full left-0 h-[18px] w-full overflow-visible" viewBox="0 0 100 18" preserveAspectRatio="none">
            <path d="M50 0 L18 18 M50 0 L82 18" fill="none" stroke="rgba(34,33,31,0.5)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="mqs-lift">
            <div className="mqs-box relative aspect-[4/3]" style={{ background: C.ink, padding: "clamp(5px, 0.42vw, 7px)" }}>
              <div
                className="relative flex h-full w-full items-center justify-center overflow-hidden"
                style={{ background: C.mat, boxShadow: "inset 0 0 0 1px rgba(34,33,31,0.07), inset 0 4px 10px rgba(34,33,31,0.1)" }}
              >
                {logoPath ? (
                  <span className="relative block h-[44%] w-[68%]">
                    <Image src={logoPath} alt={`Logo ${name}`} fill sizes="(min-width: 1280px) 190px, (min-width: 640px) 22vw, 40vw" style={{ objectFit: "contain" }} />
                  </span>
                ) : (
                  <span className="px-3 text-center font-extrabold uppercase" style={{ fontSize: "clamp(15px, 1.5vw, 22px)", letterSpacing: "0.03em", lineHeight: 1.1 }}>
                    {name}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        {/* Cartel */}
        <motion.span
          className="relative mt-5 flex w-full flex-col px-3 py-2.5"
          style={{ background: C.card, boxShadow: "0 1px 2px rgba(34,33,31,0.08), 0 0 0 1px rgba(34,33,31,0.05)" }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE, delay: delay + 0.45 }}
        >
          <span className="flex items-baseline justify-between gap-2">
            <span className="mqs-label-name text-[13.5px] font-semibold leading-tight">{name}</span>
            <span aria-hidden="true" className="mqs-arrow text-[13px]">
              →
            </span>
          </span>
          <span className="mt-1 text-[12px] leading-snug" style={{ color: C.mute, fontFamily: "var(--font-sans)" }}>
            {typesText(b)}
          </span>
          <span className="mt-0.5 text-[11.5px] leading-snug tabular-nums" style={{ color: C.mute, fontFamily: "var(--font-sans)" }}>
            {fr(b.modelCount)} modèle{b.modelCount > 1 ? "s" : ""}
            {b.coldClimateCount > 0 ? ` · ${fr(b.coldClimateCount)} climat froid` : ""}
          </span>
        </motion.span>
      </Link>
    </li>
  );
}

function EmptyFrame({ search, onReset }: { search: string; onReset: () => void }) {
  return (
    <div className="mx-auto mt-20 flex max-w-[440px] flex-col items-center text-center">
      <span aria-hidden="true" className="relative block h-[22px] w-full">
        <span className="absolute left-1/2 top-0 block h-[6px] w-[6px] -translate-x-1/2 rounded-full" style={{ background: "#5F5B55" }} />
      </span>
      <motion.div
        className="w-full"
        style={{ transformOrigin: "50% -18px" }}
        initial={{ y: -30, rotate: 5, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ y: { type: "spring", stiffness: 90, damping: 15 }, opacity: { duration: 0.3 }, rotate: { type: "spring", stiffness: 38, damping: 3.2 } }}
      >
        <div className="aspect-[4/3] w-full" style={{ background: C.ink, padding: 7, boxShadow: "0 18px 28px -18px rgba(34,33,31,0.55)" }}>
          <div className="flex h-full w-full items-center justify-center px-8" style={{ background: C.mat, boxShadow: "inset 0 4px 10px rgba(34,33,31,0.1)" }}>
            <p className="text-[22px] font-semibold" style={{ margin: 0, letterSpacing: "-0.03em" }}>
              Aucune marque trouvée
            </p>
          </div>
        </div>
      </motion.div>
      <p className="mt-7 text-[15px]" style={{ color: C.mute, fontFamily: "var(--font-sans)" }}>
        Il n’y a pas de marque correspondante à « {search} ».
      </p>
      <button type="button" onClick={onReset} className="mqs-btn mt-6 px-5 py-3 text-[14.5px] font-semibold" style={{ background: C.ink, color: C.wall }}>
        Afficher toutes les marques
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------
   Salle sombre : hésiter entre plusieurs marques
   ------------------------------------------------------------------ */

function DarkRoom() {
  const lines = ["Vous hésitez entre", "plusieurs marques ?"];
  return (
    <section aria-labelledby="hesiter-titre" className="relative overflow-hidden" style={{ background: C.night, color: C.wall, fontFamily: DISPLAY }}>
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <motion.p
            className="flex items-center gap-4 text-[11.5px] font-semibold uppercase"
            style={{ letterSpacing: "0.24em", color: C.nightMute, margin: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Avant de choisir
            <span aria-hidden="true" className="inline-block h-px w-12" style={{ background: C.nightLine }} />
          </motion.p>
          <h2 id="hesiter-titre" style={{ fontFamily: DISPLAY, fontSize: "clamp(38px, 4.8vw, 80px)", fontWeight: 500, letterSpacing: "-0.05em", lineHeight: 0.98, margin: "22px 0 0", color: C.wall }}>
            {lines.map((l, i) => (
              <motion.span
                key={l}
                className="block"
                style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.1 + i * 0.18 }}
              >
                {l}
                {i < lines.length - 1 ? " " : null}
              </motion.span>
            ))}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.45 }}
          >
            <p className="max-w-[440px] text-[17px] leading-[1.65]" style={{ color: C.nightMute, margin: "26px 0 0", fontFamily: "var(--font-sans)" }}>
              Comparez les approches, les technologies et les gammes pour faire un choix éclairé.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link href="/thermopompes" className="mqs-btn inline-flex items-center justify-center gap-3 px-6 py-4 text-[15px] font-semibold" style={{ border: `1px solid ${C.nightLine}`, color: C.wall }}>
                Comparer les modèles
                <span aria-hidden="true" className="mqs-arrow">
                  →
                </span>
              </Link>
              <Link href="/trouver-ma-thermopompe" className="mqs-btn inline-flex items-center justify-center gap-3 px-6 py-4 text-[15px] font-semibold" style={{ background: C.wall, color: C.ink }}>
                Commencer
                <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={70} height={24} className="inline-block" style={{ width: 70, height: 24, maxWidth: "none", objectFit: "contain", filter: "brightness(0)" }} />
                <span aria-hidden="true" className="mqs-arrow">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Une photographie accrochée dans la salle sombre ; le projecteur s’allume en vacillant */}
        <div className="relative mx-auto w-full max-w-[440px] pt-10">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-[calc(100%+160px)] w-[170%] -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, rgba(255,247,226,0.2), rgba(255,247,226,0.02) 78%, rgba(255,247,226,0))", clipPath: "polygon(44% 0, 56% 0, 100% 100%, 0 100%)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.8, 0.3, 1] }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.5, times: [0, 0.3, 0.45, 1], delay: 0.3 }}
          />
          <span aria-hidden="true" className="relative block h-[26px]">
            <span className="absolute left-1/2 top-0 block h-[7px] w-[7px] -translate-x-1/2 rounded-full" style={{ background: "#8B867D" }} />
          </span>
          <motion.div
            className="relative"
            style={{ transformOrigin: "50% -22px" }}
            initial={{ y: -40, rotate: -4, opacity: 0 }}
            whileInView={{ y: 0, rotate: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ y: { type: "spring", stiffness: 80, damping: 15, delay: 0.5 }, opacity: { duration: 0.4, delay: 0.5 }, rotate: { type: "spring", stiffness: 34, damping: 3, delay: 0.6 } }}
          >
            <svg aria-hidden="true" className="pointer-events-none absolute bottom-full left-0 h-[22px] w-full overflow-visible" viewBox="0 0 100 22" preserveAspectRatio="none">
              <path d="M50 0 L16 22 M50 0 L84 22" fill="none" stroke="rgba(236,234,229,0.45)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            </svg>
            <div style={{ background: "#0F0F0E", padding: "clamp(8px, 0.8vw, 12px)", boxShadow: "0 50px 60px -30px rgba(0,0,0,0.8)" }}>
              <div style={{ background: "#F1EEE7", padding: "8%" }}>
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/hero_heatpump.webp" alt="Thermopompe grille" fill sizes="(min-width: 1024px) 380px, 80vw" className="object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Textes de salle : comprendre les différences
   ------------------------------------------------------------------ */

const PANELS = [
  {
    title: "Performance hivernale",
    text: "Toutes les thermopompes ne se valent pas par grand froid. Comprenez les indices clés et les technologies qui font la différence au Québec.",
  },
  { title: "Garantie", text: "Durée, pièces, main-d'œuvre : apprenez à lire entre les lignes pour éviter les mauvaises surprises." },
  {
    title: "Disponibilité des pièces",
    text: "Un bon système, c'est aussi un bon service après-vente. Voyez pourquoi la disponibilité des pièces compte autant que la marque.",
  },
];

function WallTexts() {
  return (
    <section aria-labelledby="differences-titre" className="relative" style={{ background: C.wall, color: C.ink, fontFamily: DISPLAY }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[420px]" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,254,250,0.5), rgba(255,254,250,0) 72%)" }} />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <motion.p
          className="flex items-center gap-4 text-[11.5px] font-semibold uppercase"
          style={{ letterSpacing: "0.24em", margin: 0 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Textes de salle
          <span aria-hidden="true" className="inline-block h-px w-12" style={{ background: C.ink, opacity: 0.6 }} />
        </motion.p>
        <motion.h2
          id="differences-titre"
          style={{ fontFamily: DISPLAY, fontSize: "clamp(36px, 4.4vw, 72px)", fontWeight: 500, letterSpacing: "-0.05em", lineHeight: 0.98, margin: "20px 0 0", paddingBottom: "0.08em" }}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
        >
          Comprendre les différences
        </motion.h2>
        <ol className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8" style={{ listStyle: "none", padding: 0 }}>
          {PANELS.map((p, i) => (
            <motion.li
              key={p.title}
              className="flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.14 }}
            >
              <div className="mqs-panel relative flex w-full flex-col px-7 pb-8 pt-9 lg:px-9" style={{ background: C.card, boxShadow: "0 1px 2px rgba(34,33,31,0.08), 0 0 0 1px rgba(34,33,31,0.05)" }}>
                {/* Vis de fixation du panneau */}
                <span aria-hidden="true" className="absolute left-3 top-3 block h-[5px] w-[5px] rounded-full" style={{ background: "#A8A298" }} />
                <span aria-hidden="true" className="absolute right-3 top-3 block h-[5px] w-[5px] rounded-full" style={{ background: "#A8A298" }} />
                <span aria-hidden="true" className="tabular-nums" style={{ fontSize: 60, fontWeight: 300, letterSpacing: "-0.06em", lineHeight: 0.9 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <motion.span
                  aria-hidden="true"
                  className="mt-6 block h-px w-full origin-left"
                  style={{ background: C.ink, opacity: 0.25 }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.2 + i * 0.14 }}
                />
                <h3 style={{ fontFamily: DISPLAY, fontSize: 23, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "22px 0 0" }}>{p.title}</h3>
                <p className="text-[15px] leading-[1.7]" style={{ color: C.mute, margin: "12px 0 0", fontFamily: "var(--font-sans)" }}>
                  {typo(p.text)}
                </p>
                <Link href="/guides" className="mt-auto inline-flex items-center gap-2 pt-7 text-[14px] font-semibold" style={{ color: C.ink }}>
                  <span className="mqs-u">Lire le guide</span>
                  <span aria-hidden="true" className="mqs-arrow">
                    →
                  </span>
                </Link>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
