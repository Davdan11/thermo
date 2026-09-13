"use server";

/* ==================================================================
   Chantier V — acceptation d'une invitation (sans session requise).
   POST seulement (bouton), jeton à usage unique et à durée limitée,
   débit limité par IP. Le membre devient actif et sa session s'ouvre ;
   la 2e étape obligatoire (réglage de l'équipe) est demandée ensuite
   par la couche d'accès. Tout est noté au journal d'audit.
   ================================================================== */

import { redirect } from "next/navigation";
import { startAdminSession } from "@/lib/gestion/auth/dal";
import { acceptInvite } from "@/lib/gestion/equipe/members";
import { limiters } from "@/lib/gestion/rate-limit";
import { requestIp } from "@/lib/gestion/request";
import { audit } from "@/lib/gestion/securite/audit";

export async function acceptInvitationAction(formData: FormData): Promise<void> {
  const token = String(formData.get("jeton") ?? "");
  const ip = await requestIp();
  if (!limiters.loginVerify.hit(ip)) {
    await audit("connexion.echec", { raison: "trop-d-essais", contexte: "invitation" }, { qui: null, ip });
    redirect("/gestion/connexion/invitation?erreur=trop");
  }
  const r = await acceptInvite(token);
  if (!r.ok) {
    await audit("connexion.echec", { raison: r.error, contexte: "invitation" }, { qui: null, ip });
    redirect(`/gestion/connexion/invitation?erreur=${r.error}`);
  }
  await startAdminSession(r.member.email);
  await audit("equipe.acceptee", { membre: r.member.id, role: r.member.role }, { qui: r.member.email, ip });
  await audit("connexion.reussie", { methode: "invitation" }, { qui: r.member.email, ip });
  redirect("/gestion");
}
