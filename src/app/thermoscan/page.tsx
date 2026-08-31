import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { ThermoScanSection } from "@/components/thermoscan/ThermoScanSection";
import Link from "next/link";
import { Camera, Cpu, BarChart3, Lock, Zap, Target, Leaf } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "ThermoScan \u2014 Identifiez votre thermopompe actuelle | ThermopompesAVendre.ca",
  description: "Photographiez l'etiquette de votre thermopompe actuelle. Notre IA l'identifie en quelques secondes et compare ses performances avec les meilleurs modeles.",
  alternates: { canonical: "/thermoscan" },
  robots: { index: true, follow: true },
});

export default function ThermoScanPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">

      {/* Hero */}
      <div className="relative w-full bg-[#0C1821] py-16 md:py-24 overflow-hidden">
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="text-white font-bold leading-none" style={{ fontSize: "500px", letterSpacing: "-0.05em" }}>TS</span>
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <nav className="mb-10">
            <ol className="flex flex-wrap gap-2 text-xs text-white/30">
              <li><Link href="/" className="hover:text-white/60 transition-colors">Accueil</Link></li>
              <li>/</li>
              <li><Link href="/comparer" className="hover:text-white/60 transition-colors">Comparer</Link></li>
              <li>/</li>
              <li className="text-white/60">ThermoScan</li>
            </ol>
          </nav>

          <span className="text-[var(--color-accent)] font-bold text-[13px] tracking-widest uppercase mb-6 block">
            NOUVEAU &bull; ThermoScan&#8482;
          </span>

          <h1
            className="text-white font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1" }}
          >
            Identifiez votre<br />thermopompe actuelle.
          </h1>

          <p className="text-white/60 text-lg max-w-xl font-medium mb-12">
            Photographiez l&apos;&eacute;tiquette &mdash; notre IA identifie votre mod&egrave;le
            en quelques secondes et vous montre exactement ce que vous gagneriez en changeant.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { n: "1", Icon: Camera,   text: "Photographiez l\u2019etiquette" },
              { n: "2", Icon: Cpu,      text: "L\u2019IA identifie votre modele" },
              { n: "3", Icon: BarChart3,text: "Comparaison instantanee" },
            ].map(({ n, Icon, text }) => (
              <div key={n} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "var(--color-accent)" }}
                >
                  {n}
                </span>
                <Icon size={14} className="text-white/50 flex-shrink-0" />
                <span className="text-sm text-white/70">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scanner */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-[var(--color-foreground)] font-bold text-2xl mb-2">
              Scannez votre appareil
            </h2>
            <p className="text-[var(--color-muted)] text-sm">
              Choisissez une m&eacute;thode ci-dessous. Vous pourrez v&eacute;rifier et corriger
              les informations avant de lancer la comparaison.
            </p>
          </div>

          <div
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: "var(--color-border)", background: "var(--color-surface)", boxShadow: "var(--shadow-md)" }}
          >
            <div
              className="flex items-center gap-3 px-6 py-4 border-b"
              style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "var(--color-accent)" }}
              >
                <Camera size={16} />
              </div>
              <div>
                <p className="font-bold text-sm text-[var(--color-foreground)]">ThermoScan&#8482;</p>
                <p className="text-xs text-[var(--color-muted)]">Identification par IA &bull; Gemini Vision</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-green-700">IA Active</span>
              </div>
            </div>

            <div className="p-6">
              <ThermoScanSection compact={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Why ThermoScan */}
      <div className="border-t" style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16">
          <div className="mb-10">
            <span className="text-[var(--color-accent)] font-bold text-[11px] tracking-widest uppercase block mb-3">
              POURQUOI THERMOSCAN
            </span>
            <h2 className="text-[var(--color-foreground)] font-bold text-3xl">
              Simple, rapide, fiable.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Lock,   title: "Aucune donnee stockee",  desc: "La photo est analysee puis effacee immediatement. Aucune image conservee sur nos serveurs." },
              { Icon: Zap,    title: "Moins de 30 secondes",   desc: "Gemini Vision lit l'etiquette et compare les specifications en quelques secondes." },
              { Icon: Target, title: "1 681 modeles",          desc: "Catalogue ENERGY STAR 2026 complet. Mis a jour chaque annee." },
              { Icon: Leaf,   title: "Subventions incluses",   desc: "Estimation Logis Vert integree automatiquement dans chaque comparaison." },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-6 border"
                style={{ borderColor: "var(--color-border)", background: "var(--color-surface)", boxShadow: "var(--shadow-sm)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--color-background)" }}
                >
                  <Icon size={20} style={{ color: "var(--color-accent)" }} />
                </div>
                <p className="font-bold text-[var(--color-foreground)] mb-2 text-sm">{title}</p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t flex flex-wrap gap-4 items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-[var(--color-muted)] text-sm">Vous preferez comparer des modeles sans scanner ?</p>
            <Link
              href="/comparer"
              className="text-sm font-semibold underline underline-offset-4 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              Voir le comparateur &rarr;
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
