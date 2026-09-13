/* ==================================================================
   /chantier/[jeton] — outil terrain de l'installateur, sans compte.
   Jeton : lien de l'offre acceptée ou lien de chantier envoyé depuis
   /gestion ; le job doit lui être encore attribué. Tout le reste
   (file hors ligne, photos, signature) vit dans FieldApp.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Clock, Link2Off, UserX } from "lucide-react";
import { voletLimits } from "@/lib/gestion/partenaires/limits";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { getFieldView } from "@/lib/gestion/terrain/service";
import { FieldApp } from "@/components/partenaires/FieldApp";
import { Plain } from "@/components/partenaires/PublicBits";
// Conformité C1 : contrat signé : un imprévu passe par un avenant signé par le client avant l'exécution.
import { fieldContract } from "@/lib/contrats/service";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Chantier" };

export default async function ChantierPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!voletLimits.chantierView.hit(ipFromHeaders(await headers()))) return <Plain icon={<Clock size={26} />} title="Trop de visites" text="Réessayez dans quelques minutes." />;
  const res = await getFieldView(token);
  if (res.state !== "ok") {
    return res.state === "plus-attribue" ? (
      <Plain icon={<UserX size={26} />} title="Ce job ne vous est plus attribué" text="Communiquez avec nous pour en savoir plus." />
    ) : (
      <Plain icon={<Link2Off size={26} />} title="Ce lien n’est pas valide" text="Ouvrez le lien de l’offre acceptée, ou celui du dernier courriel reçu." />
    );
  }
  const fc = await fieldContract(token); // Conformité C1
  return (
    <>
      {fc ? (
        <div className="pp" style={{ minHeight: 0, padding: "10px 14px 0" }}>
          <a className="pp-btn pp-btn--ghost pp-btn--sm" href={`/chantier/${encodeURIComponent(token)}/avenant`}>
            Un imprévu ? Préparer un avenant (contrat {fc.contractNumber})
          </a>
        </div>
      ) : null}
      <FieldApp token={token} initial={res.view} />
    </>
  );
}
