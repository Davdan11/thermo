"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import type { GoogleReview } from "@/lib/avis/types";
import { roboto } from "./fonts";

/* ==================================================================
   Pièces communes aux deux mises en scène des avis Google :
   étoiles qui se remplissent, attribution « Google Maps » (exigée par
   Google hors d'une carte), avatar de l'auteur, mention sur l'ordre.
   ================================================================== */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const STAR = "M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z";

/** Mention exigée par Google : comment les avis sont choisis et classés. */
export const ORDER_NOTICE = "Les avis les plus pertinents selon Google, dans l’ordre choisi par Google. Google cherche les faux avis, mais ne vérifie pas chaque avis.";

export const fmtRating = (n: number) => n.toLocaleString("fr-CA", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function starsLabel(value: number): string {
  return `${Number.isInteger(value) ? value : fmtRating(value)} étoile${value >= 2 ? "s" : ""} sur 5`;
}

/** Cinq étoiles ; le remplissage se trace de gauche à droite à l'entrée à l'écran. */
export function Stars({ value, size = 16, color, track, delay = 0, className, style }: { value: number; size?: number; color: string; track: string; delay?: number; className?: string; style?: CSSProperties }) {
  const reduce = useReduced();
  return (
    <span role="img" aria-label={starsLabel(value)} className={`inline-flex items-center gap-[3px] ${className ?? ""}`} style={style}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} aria-hidden="true" className="relative block" style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" width={size} height={size} className="absolute inset-0">
              <path d={STAR} fill={track} />
            </svg>
            <motion.span
              className="absolute inset-0 block"
              initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
              whileInView={{ clipPath: `inset(0% ${Math.round((1 - fill) * 100)}% 0% 0%)` }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: reduce ? 0 : 0.45, ease: EASE, delay: reduce ? 0 : delay + i * 0.07 }}
            >
              <svg viewBox="0 0 24 24" width={size} height={size}>
                <path d={STAR} fill={color} />
              </svg>
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

/** Attribution Google Maps (texte, Roboto 400) : gris #5E5E5E sur fond clair, blanc sur fond foncé. */
export function GoogleMapsMark({ tone, size = 14 }: { tone: "light" | "dark"; size?: number }) {
  return (
    <span translate="no" className={roboto.className} style={{ fontSize: size, fontWeight: 400, letterSpacing: 0, color: tone === "dark" ? "#FFFFFF" : "#5E5E5E", whiteSpace: "nowrap" }}>
      Google Maps
    </span>
  );
}

/** Photo de profil Google de l'auteur, sinon son initiale. */
export function Avatar({ review, size, bg, fg }: { review: GoogleReview; size: number; bg: string; fg: string }) {
  if (review.authorPhotoUri) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- photo de profil Google, affichée telle quelle (attribution)
      <img src={review.authorPhotoUri} alt="" width={size} height={size} loading="lazy" referrerPolicy="no-referrer" className="block shrink-0 rounded-full object-cover" style={{ width: size, height: size, background: bg }} />
    );
  }
  return (
    <span aria-hidden="true" className="flex shrink-0 items-center justify-center rounded-full font-semibold" style={{ width: size, height: size, background: bg, color: fg, fontSize: size * 0.42 }}>
      {review.author.trim().charAt(0).toUpperCase() || "G"}
    </span>
  );
}

/** Nom de l'auteur, lié à son profil Google quand il est fourni. */
export function AuthorName({ review, className, style }: { review: GoogleReview; className?: string; style?: CSSProperties }) {
  return review.authorUri ? (
    <a href={review.authorUri} target="_blank" rel="noopener noreferrer nofollow" className={className} style={{ textDecoration: "none", ...style }}>
      {review.author}
    </a>
  ) : (
    <span className={className} style={style}>
      {review.author}
    </span>
  );
}

/** Texte limité à `lines` lignes (le texte complet reste sur Google, lien sous l'avis). */
export function clampStyle(lines: number): CSSProperties {
  return { display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical", overflow: "hidden" };
}

/** Au-delà de cette longueur, le texte est coupé à l'écran : lien vers l'avis complet sur Google. */
export const LONG_REVIEW = 300;
