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
  return <FieldApp token={token} initial={res.view} />;
}
