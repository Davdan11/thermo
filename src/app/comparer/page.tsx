import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { getComparisonData, MAX_COMPARE } from "@/lib/data/queries/comparator";
import { getSelectableModels } from "@/lib/data/queries/catalogue";
import { CompareSelector } from "@/components/compare/CompareSelector";
import { ComparePageClient } from "@/components/compare/ComparePageClient";
import Link from "next/link";

/* ------------------------------------------------------------------
   Metadata
   ------------------------------------------------------------------ */

export const metadata: Metadata = createMetadata({
  title: "Comparateur de thermopompes | ThermopompesAVendre.ca",
  description:
    "Comparez cote a cote les performances, l'efficacite, le silence et la garantie des thermopompes. Configuration par configuration.",
  alternates: { canonical: "/comparer" },
  robots: { index: true, follow: true },
});

/* ------------------------------------------------------------------
   Page
   ------------------------------------------------------------------ */

interface ComparerPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ComparerPage({ searchParams }: ComparerPageProps) {
  const params = await searchParams;

  const modelsParam = typeof params.models === "string" ? params.models : "";
  const slugs = modelsParam.split(",").map((s) => s.trim()).filter(Boolean);
  const data = getComparisonData(slugs);

  // Always load selectable models for the selector
  const selectableModels = getSelectableModels();

  const hasComparison = data.products.length >= 2;

  return (
    <main style={{ fontFamily: "var(--font-sans)", minHeight: "100vh", color: "var(--color-foreground)" }}>
      {/* ---- Hero ---- */}
      <section style={{ background: "#0C1821", paddingBottom: 48 }}>
        <div style={{ width: "calc(100% - 48px)", maxWidth: 1280, margin: "0 auto" }}>
          <nav style={{ paddingTop: 100, paddingBottom: 0 }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: 0, padding: 0, listStyle: "none", fontSize: 12, color: "rgba(255,255,255,.35)" }}>
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/thermopompes" style={{ color: "inherit", textDecoration: "none" }}>Thermopompes</Link></li>
              <li aria-hidden="true">/</li>
              <li style={{ color: "rgba(255,255,255,.7)" }}>Comparer</li>
            </ol>
          </nav>

          <p style={{
            margin: "24px 0 0", fontSize: 11, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.12em",
            color: "var(--color-accent)",
          }}>
            Comparateur
          </p>
          <h1 style={{
            margin: "8px 0 0",
            fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700,
            color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em",
            fontFamily: "var(--font-display)",
          }}>
            Comparez ce qui<br />compte vraiment.
          </h1>
          <p style={{
            margin: "12px 0 0", fontSize: 15,
            color: "rgba(255,255,255,.5)", maxWidth: 420, lineHeight: 1.5,
          }}>
            Performance hivernale, efficacite, silence et garantie &mdash; configuration par configuration.
          </p>
        </div>
      </section>

      {/* ---- Content ---- */}
      <section style={{ background: "var(--color-background)", paddingBottom: 0 }}>
        <div style={{ width: "calc(100% - 48px)", maxWidth: 1280, margin: "0 auto", paddingTop: 24 }}>
          {hasComparison ? (
            /* Show comparison results + ability to modify */
            <ComparePageClient
              data={data}
              maxCompare={MAX_COMPARE}
              selectableModels={selectableModels}
            />
          ) : (
            /* Show selector to pick models */
            <div style={{ paddingBottom: 80 }}>
              <div style={{
                textAlign: "center",
                marginBottom: 32,
                padding: "28px 24px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 10,
              }}>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "var(--color-foreground)" }}>
                  Selectionnez vos thermopompes a comparer
                </h2>
                <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--color-muted)", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
                  Choisissez entre 2 et {MAX_COMPARE} modeles pour les comparer cote a cote.
                  Filtrez par marque ou recherchez par nom.
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
