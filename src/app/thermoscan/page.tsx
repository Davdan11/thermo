import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { ThermoScanSection } from "@/components/thermoscan/ThermoScanSection";
import { LabelLocator } from "@/components/thermoscan/ThermoScanArt";
import { ViseurHero } from "@/components/heroes-v2/outils/ViseurHero";
import { Camera, ScanLine, GitCompareArrows, Thermometer, Clock, ShieldCheck, Leaf, Trash2, Database, PencilLine, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------
   /thermoscan — Lecture de l'étiquette d'une thermopompe existante.
   Le héros montre le geste (viseur, balayage, champs lus), la page
   explique où est l'étiquette et ce qu'on obtient. Le scanner lui-même
   est ThermoScanSection (client).
   ------------------------------------------------------------------ */

export const metadata: Metadata = createMetadata({
  title: "ThermoScan : identifiez votre thermopompe actuelle à partir de son étiquette",
  description:
    "Photographiez l'étiquette de votre thermopompe. ThermoScan lit la marque, le modèle et l'année, retrouve la fiche ENERGY STAR et compare l'appareil avec les modèles admissibles à LogisVert.",
  alternates: { canonical: "/thermoscan" },
  robots: { index: true, follow: true },
});

const STEPS = [
  { Icon: Camera, title: "Photographiez l'étiquette", text: "La plaque signalétique, sur le côté de l'unité extérieure ou sous l'unité murale. Depuis votre téléphone, en plein jour de préférence." },
  { Icon: ScanLine, title: "ThermoScan lit la plaque", text: "Marque, numéro de modèle, année, capacité et fluide sont extraits, puis vérifiés dans le catalogue ENERGY STAR Canada. Vous corrigez si besoin." },
  { Icon: GitCompareArrows, title: "Vous voyez l'écart avec le neuf", text: "Efficacité HSPF2, tenue au froid, fluide, garantie et montant LogisVert des modèles comparables. Puis une soumission si vous le voulez." },
];

const OUTPUTS = [
  { Icon: Thermometer, title: "Capacité et efficacité", text: "Capacité de chauffage à -15 °C, HSPF2 et SEER2 tirés de la fiche certifiée quand le modèle est au catalogue ; sinon, les valeurs lues sur l'étiquette." },
  { Icon: Clock, title: "Âge et fluide frigorigène", text: "Un appareil au R-22 ou de plus de 12 ans est signalé : recharge coûteuse, pièces rares, remplacement à planifier." },
  { Icon: ShieldCheck, title: "Garantie du fabricant", text: "Pièces, compresseur et main-d'œuvre, avec les conditions d'inscription, pour les marques dont nous avons les grilles." },
  { Icon: Leaf, title: "Comparaison et LogisVert", text: "Les modèles comparables du catalogue, l'écart d'efficacité en pourcentage et le montant LogisVert officiel de chacun." },
];

const TRUST = [
  { Icon: Trash2, title: "Photo effacée après lecture", text: "L'image sert à la lecture, puis elle est supprimée. Rien n'est conservé sur nos serveurs." },
  { Icon: Database, title: "Catalogue certifié", text: "ENERGY STAR Canada et liste LogisVert d'Hydro-Québec, mise à jour chaque nuit." },
  { Icon: PencilLine, title: "Vous gardez la main", text: "Chaque champ lu est affiché et modifiable avant la fiche. Une lecture douteuse est signalée." },
];

export default function ThermoScanPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* ── Héros « Viseur » : mise au point sur la plaque, photo réelle ── */}
      <ViseurHero />

      {/* ── Scanner ───────────────────────────────────────────── */}
      <section id="scanner" className="scroll-mt-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 -mt-8 lg:-mt-10 relative z-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-8 items-start">
            <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid #e4ddd5", boxShadow: "0 24px 60px -30px rgba(7,29,43,.35)" }}>
              <div className="flex items-center gap-4 px-6 py-5" style={{ borderBottom: "1px solid #ede7df", background: "#fbf9f6" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "#0C1821" }}>
                  <ScanLine size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[17px] leading-tight" style={{ color: "#071d2b" }}>Scanner votre appareil</p>
                  <p className="text-[13px] mt-0.5" style={{ color: "#536873" }}>Photo de l&apos;étiquette, vérification des champs lus, puis fiche technique et comparaison.</p>
                </div>
                <span className="ml-auto hidden sm:inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider" style={{ background: "rgba(229,75,23,.1)", color: "#e54b17" }}>Bêta</span>
              </div>
              <div className="p-6 sm:p-8">
                <ThermoScanSection compact={true} />
              </div>
            </div>

            <aside className="rounded-2xl p-6 lg:mt-10" style={{ background: "#fff", border: "1px solid #e4ddd5" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "#e54b17" }}>Avant de photographier</p>
              <ul className="mt-4 space-y-3.5">
                {[
                  ["Cadrez toute la plaque", "Le numéro de modèle et le numéro de série doivent être lisibles en entier."],
                  ["Évitez les reflets", "Placez-vous de biais par rapport au soleil ou à la lampe ; essuyez la plaque si elle est sale."],
                  ["Unité extérieure d'abord", "C'est elle qui porte le modèle certifié. L'unité murale sert de plan B."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e54b17" }} />
                    <div>
                      <p className="font-semibold text-[14px]" style={{ color: "#071d2b" }}>{t}</p>
                      <p className="text-[13px] leading-relaxed mt-0.5" style={{ color: "#536873" }}>{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-5 text-[13px] leading-relaxed" style={{ borderTop: "1px solid #f0ebe4", color: "#536873" }}>
                Vous connaissez déjà le modèle ? Le <Link href="/comparer" className="font-semibold underline underline-offset-4" style={{ color: "#071d2b" }}>comparateur</Link> accepte la saisie directe.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Comment ça marche ──────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "#fff", borderTop: "1px solid #e4ddd5" }}>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "#e54b17" }}>Comment ça marche</p>
            <h2 className="mt-2 font-bold tracking-tight" style={{ fontSize: "clamp(26px, 3vw, 36px)", color: "#071d2b", lineHeight: 1.1 }}>Trois gestes, aucune saisie.</h2>
          </div>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
            <div aria-hidden="true" className="hidden md:block absolute left-[16.6%] right-[16.6%] top-[26px] h-px" style={{ background: "linear-gradient(90deg, transparent, #e4ddd5 15%, #e4ddd5 85%, transparent)" }} />
            {STEPS.map(({ Icon, title, text }, i) => (
              <li key={title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="relative w-[52px] h-[52px] rounded-full flex items-center justify-center flex-shrink-0 text-white" style={{ background: "#0C1821", boxShadow: "0 0 0 6px #fff" }}>
                    <Icon size={22} />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-[12px] font-bold flex items-center justify-center text-white" style={{ background: "#e54b17", boxShadow: "0 0 0 3px #fff" }}>{i + 1}</span>
                  </span>
                </div>
                <h3 className="mt-5 font-bold text-[19px] tracking-tight" style={{ color: "#071d2b" }}>{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#536873" }}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Où est l'étiquette ────────────────────────────────── */}
      <section id="etiquette" className="scroll-mt-24 py-16 lg:py-20" style={{ background: "#F7F5F0" }}>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "#e54b17" }}>Où est l&apos;étiquette</p>
              <h2 className="mt-2 font-bold tracking-tight" style={{ fontSize: "clamp(26px, 3vw, 36px)", color: "#071d2b", lineHeight: 1.1 }}>La plaque signalétique se trouve toujours au même endroit.</h2>
              <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "#536873" }}>
                Un autocollant argenté ou blanc avec les mentions <strong style={{ color: "#071d2b" }}>Model / Modèle</strong>, <strong style={{ color: "#071d2b" }}>Serial</strong>, la tension et le fluide. ThermoScan a besoin du numéro de modèle en entier.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  ["Unité extérieure", "Sur le panneau latéral droit, près des raccords de tuyauterie, parfois à l'arrière. C'est le numéro qui compte pour la certification."],
                  ["Unité murale intérieure", "Sous l'appareil ou sur le côté, derrière le volet de la grille. Utile si l'extérieure est inaccessible."],
                  ["Centrale ou gainable", "Sur le caisson de la fournaise ou du ventilo-convecteur, côté service, et sur l'unité extérieure."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0" style={{ background: i === 0 ? "#e54b17" : "#0C1821" }}>{i + 1}</span>
                    <div>
                      <p className="font-semibold text-[15px]" style={{ color: "#071d2b" }}>{t}</p>
                      <p className="text-[14px] leading-relaxed mt-0.5" style={{ color: "#536873" }}>{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <LabelLocator />
          </div>
        </div>
      </section>

      {/* ── Ce que vous obtenez ───────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "#fff", borderTop: "1px solid #e4ddd5" }}>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "#e54b17" }}>Ce que ThermoScan vous dit</p>
            <h2 className="mt-2 font-bold tracking-tight" style={{ fontSize: "clamp(26px, 3vw, 36px)", color: "#071d2b", lineHeight: 1.1 }}>La fiche de votre appareil, face aux modèles d&apos;aujourd&apos;hui.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OUTPUTS.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl p-6 transition-transform hover:-translate-y-1" style={{ background: "#F7F5F0", border: "1px solid #ebe5dc" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#fff", border: "1px solid #e4ddd5", color: "#e54b17" }}>
                  <Icon size={21} />
                </div>
                <h3 className="mt-5 font-bold text-[17px] tracking-tight" style={{ color: "#071d2b" }}>{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "#536873" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Confiance + suite ─────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "#0C1821" }}>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST.map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", color: "#e54b17" }}>
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-bold text-white text-[16px]">{title}</p>
                  <p className="mt-1 text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 flex flex-wrap items-center justify-between gap-5" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
            <p className="text-[15px]" style={{ color: "rgba(255,255,255,.6)" }}>Vous préférez partir de zéro plutôt que de votre appareil actuel ?</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/trouver-ma-thermopompe" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold text-white" style={{ background: "#e54b17" }}>
                Questionnaire ThermoMatch <ArrowRight size={16} />
              </Link>
              <Link href="/comparer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,.22)" }}>
                Comparateur
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
