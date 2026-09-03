import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        textAlign: "center",
        background: "var(--color-background, #f8f5f0)",
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--color-accent, #c66e42)",
          marginBottom: 8,
        }}
      >
        Erreur 404
      </p>
      <h1
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          color: "var(--color-foreground, #071d2b)",
          margin: "0 0 12px",
          lineHeight: 1.1,
        }}
      >
        Page introuvable
      </h1>
      <p
        style={{
          fontSize: 15,
          color: "var(--color-muted, #667680)",
          maxWidth: 440,
          lineHeight: 1.5,
          margin: "0 0 32px",
        }}
      >
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "12px 24px",
            background: "var(--color-accent, #c66e42)",
            color: "#fff",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/thermopompes"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "12px 24px",
            border: "1px solid var(--color-border, #ddd)",
            background: "var(--color-surface, #fff)",
            color: "var(--color-foreground, #071d2b)",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Explorer les thermopompes
        </Link>
      </div>
    </main>
  );
}
