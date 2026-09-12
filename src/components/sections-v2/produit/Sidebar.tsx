import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import { Arrow, CropMarks, DocGlyph, Reveal, Rule } from "./motion";
import { INK, LABEL, LINE, MUTE, ORANGE } from "./tokens";

/* ==================================================================
   Colonne latérale de la fiche d'ingénierie (/produit/[slug]) :
   cartouche « Résumé rapide », ThermoMatch, ThermoScan (équivalent
   thématique de ThermoScanPromo « card » : même texte, même lien),
   brochure officielle, liens « Sur ce site ».
   ================================================================== */

export type CartoucheRow = { label: string; value: string; mono?: boolean };

/** Cartouche de plan : titre, puis un tableau libellé / valeur sous filets. */
export function Cartouche({ title, rows }: { title: string; rows: CartoucheRow[] }) {
  return (
    <Reveal className="relative bg-white" style={{ border: `1px solid ${INK}` }}>
      <div className="flex items-center justify-between gap-4 px-4 py-3" style={{ borderBottom: `1px solid ${INK}` }}>
        <p className="m-0 text-[15px] font-semibold" style={{ letterSpacing: "-0.015em", color: INK }}>
          {title}
        </p>
        <span aria-hidden="true" className="block h-[9px] w-[9px]" style={{ background: ORANGE }} />
      </div>
      <dl className="m-0">
        {rows.map((r, i) => (
          <Reveal key={r.label} delay={0.12 + i * 0.04} y={0} x={-6} className="grid grid-cols-[104px_minmax(0,1fr)]" style={{ borderTop: i ? `1px solid ${LINE}` : "none" }}>
            <dt className="sv2f-mono px-4 py-2.5 text-[10px] uppercase" style={{ color: LABEL, letterSpacing: "0.1em", borderRight: `1px solid ${LINE}` }}>
              {r.label}
            </dt>
            <dd className={`m-0 px-4 py-2.5 text-right ${r.mono ? "sv2f-mono text-[12.5px]" : "text-[13.5px] font-medium"}`} style={{ color: INK, overflowWrap: "anywhere" }}>
              {r.value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Reveal>
  );
}

/** ThermoMatch : valider la fiche pour la maison du visiteur. */
export function SideThermoMatch({ brandName }: { brandName: string }) {
  return (
    <Reveal className="sv2f-dark relative p-6" style={{ background: INK, color: "#fff" }}>
      <span className="absolute inset-x-0 top-0 block">
        <Rule color={ORANGE} thick={2} delay={0.2} />
      </span>
      <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={170} height={34} className="object-contain brightness-0 invert" style={{ height: 24, width: "auto", maxWidth: "none" }} />
      <p className="m-0 mt-5 text-[19px] font-semibold leading-[1.2]" style={{ letterSpacing: "-0.025em" }}>
        Ce {brandName} convient-il à votre maison&nbsp;?
      </p>
      <p className="m-0 mt-2 text-[13.5px] leading-[1.55]" style={{ color: "rgba(255,255,255,.72)" }}>
        13 questions, 2 minutes. ThermoMatch vérifie la capacité certifiée à -15 °C par rapport à votre superficie, votre isolation et votre zone climatique, puis compare avec toutes les marques.
      </p>
      <Link href="/trouver-ma-thermopompe" className="sv2f-btn sv2f-orange mt-5 flex items-center justify-between gap-3 rounded-[3px] px-4 py-3.5 text-[14.5px] font-semibold text-white" style={{ background: ORANGE }}>
        Vérifier avec ThermoMatch
        <Arrow />
      </Link>
      <p className="sv2f-mono m-0 mt-3 text-center text-[10.5px]" style={{ color: "rgba(255,255,255,.58)" }}>
        Gratuit · données certifiées Hydro-Québec
      </p>
    </Reveal>
  );
}

/** ThermoScan (format carte) : comparer avec l'appareil que le visiteur remplace. */
export function SideThermoScan({ context }: { context?: string }) {
  const href = context ? `/thermoscan?depuis=${encodeURIComponent(context)}` : "/thermoscan";
  return (
    <aside aria-labelledby="thermoscan-card" className="relative">
      <Reveal className="relative bg-white p-6" style={{ border: `1px solid ${LINE}` }}>
        {/* Viseur : quatre coins, comme un cadrage de photo */}
        <CropMarks color={ORANGE} inset={-1} len={16} />
        <span className="inline-flex items-center rounded-[2px] px-2.5 py-1.5" style={{ background: "#0C1821", lineHeight: 0 }}>
          <Image src="/images/thermoscan-logo-nav.webp" alt="ThermoScan" width={90} height={20} style={{ width: 90, height: 20, maxWidth: "none", display: "block" }} />
        </span>
        <p id="thermoscan-card" className="m-0 mt-4 text-[17px] font-semibold leading-[1.25]" style={{ letterSpacing: "-0.02em", color: INK }}>
          Vous remplacez un appareil&nbsp;? <span className="whitespace-nowrap">Scannez-le.</span>
        </p>
        <p className="m-0 mt-2 text-[13.5px] leading-[1.55]" style={{ color: MUTE }}>
          Une photo de l&apos;étiquette : ThermoScan identifie votre thermopompe actuelle, son âge, son fluide, et mesure ce que vous gagneriez avec un modèle d&apos;aujourd&apos;hui.
        </p>
        <Link href={href} className="sv2f-btn sv2f-ghost mt-5 flex items-center justify-center gap-2 rounded-[3px] px-4 py-3 text-[14px] font-semibold" style={{ border: `1px solid ${INK}`, color: INK }}>
          <Camera size={16} aria-hidden="true" /> Scanner mon appareil
        </Link>
        <p className="sv2f-mono m-0 mt-3 text-center text-[10.5px]" style={{ color: LABEL }}>
          Gratuit · photo effacée après lecture
        </p>
      </Reveal>
    </aside>
  );
}

/** Brochure officielle du fabricant (téléchargement direct). */
export function SideBrochure({ href, brandName }: { href: string; brandName: string }) {
  return (
    <Reveal className="relative bg-white p-6" style={{ border: `1px solid ${LINE}` }}>
      <div className="flex items-start gap-4">
        <DocGlyph size={30} />
        <div className="min-w-0">
          <p className="m-0 text-[15px] font-semibold" style={{ color: INK, letterSpacing: "-0.015em" }}>
            Brochure officielle
          </p>
          <p className="m-0 mt-1.5 text-[13px] leading-[1.55]" style={{ color: MUTE }}>
            Téléchargez la documentation technique officielle du fabricant {brandName}.
          </p>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="sv2f-btn mt-5 flex items-center justify-center gap-2 rounded-[3px] px-4 py-3 text-[13.5px] font-semibold text-white"
        style={{ background: INK }}
      >
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
          <path d="M21 15v6H3v-6" />
          <path d="M7 10l5 5 5-5" />
          <path d="M12 15V3" />
        </svg>
        Télécharger la brochure (PDF)
      </a>
    </Reveal>
  );
}

/** Liens « Sur ce site ». */
export function SideLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <Reveal className="sv2f-side">
      <p className="sv2f-mono m-0 text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: LABEL }}>
        Sur ce site
      </p>
      <ul className="m-0 mt-3 list-none p-0" style={{ borderTop: `1px solid ${INK}` }}>
        {links.map((l) => (
          <li key={l.href} style={{ borderBottom: `1px solid ${LINE}` }}>
            <Link href={l.href} className="sv2f-lnk flex items-center justify-between gap-3 py-2.5 text-[13.5px]" style={{ color: MUTE }}>
              <span className="sv2f-lnk-t">{l.label}</span>
              <Arrow size={13} />
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
