import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment ça marche — Thermopompes À Vendre.ca",
  description: "Comprenez comment Thermopompes À Vendre.ca vous aide à trouver et installer la bonne thermopompe au Québec.",
  alternates: { canonical: "/comment-ca-marche" },
  robots: { index: true, follow: true },
};

export default function CommentCaMarchePage() {
  return (
    <main>
      <h1>Comment ça marche</h1>
    </main>
  );
}

