import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { getComparisonData, MAX_COMPARE } from "@/lib/data/queries/comparator";
import { getSelectableModels } from "@/lib/data/queries/catalogue";
import { CompareSelector } from "@/components/compare/CompareSelector";
import { ComparePageClient } from "@/components/compare/ComparePageClient";
import { ThermoScanEntryCard } from "@/components/thermoscan/ThermoScanEntryCard";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "Comparateur de thermopompes | ThermopompesAVendre.ca",
  description: "Comparez cote a cote les performances, l'efficacite, le silence et la garantie des thermopompes.",
  alternates: { canonical: "/comparer" },
  robots: { index: true, follow: true },
});

interface ComparerPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ComparerPage({ searchParams }: ComparerPageProps) {
  const params = await searchParams;
  const modelsParam = typeof params.models === "string" ? params.models : "";
  const slugs = modelsParam.split(",").map((s) => s.trim()).filter(Boolean);
  const data = getComparisonData(slugs);
  const selectableModels = getSelectableModels();
  const hasComparison = data.products.length >= 2;

  return (
    <main style={{ minHeight: "100vh" }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ background: "#0C1821", paddingBottom: 48 }}>
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <nav style={{ paddingTop: 100, paddingBottom: 0 }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: 0, padding: 0, listStyle: "none", fontSize: 12, color: "rgba(255,255,255,.35)" }}>
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/thermopompes" style={{ color: "inherit", textDecoration: "none" }}>Thermopompes</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "rgba(255,255,255,.7)" }}>Comparer</li>
            </ol>
          </nav>
          <p style={{ margin: "24px 0 0", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
            Comparateur
          </p>
          <h1 style={{ margin: "8px 0 0", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Comparez ce qui<br />compte vraiment.
          </h1>
          <p style={{ margin: "12px 0 0", fontSize: 15, color: "rgba(255,255,255,.5)", maxWidth: 420, lineHeight: 1.5 }}>
            Performance hivernale, efficacite, silence et garantie.
          </p>

          {/* ThermoScan entry card — visible right in the hero */}
          <div style={{ marginTop: 36 }}>
            <ThermoScanEntryCard />
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────── */}
      <section style={{ background: "var(--color-background)" }}>
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-8 pb-16 sm:pb-20">
          {hasComparison ? (
            <ComparePageClient data={data} maxCompare={MAX_COMPARE} selectableModels={selectableModels} />
          ) : (
            <div>
              <div style={{ textAlign: "center", marginBottom: 32, padding: "28px 24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 10 }}>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "var(--color-foreground)" }}>
                  Selectionnez vos thermopompes a comparer
                </h2>
                <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--color-muted)", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
                  Choisissez entre 2 et {MAX_COMPARE} modeles pour les comparer cote a cote.
                </p>
              </div>
              <CompareSelector
                models={selectableModels}
                initialSlugs={slugs.filter((s) => data.products.some((p) => p.detail.model.slug === s))}
                maxCompare={MAX_COMPARE}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
