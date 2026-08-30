import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subventions",
  description:
    "Vérifiez l'admissibilité de votre projet aux programmes gouvernementaux. Calculez l'aide financière potentielle pour votre thermopompe.",
  alternates: { canonical: "/subventions" },
};

export default function SubventionsPage() {
  return <SubventionsClient />;
}

/* ═══════════════════════════════════════════════════════════════════
   CLIENT COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

import { SubventionsClient } from "./SubventionsClient";
