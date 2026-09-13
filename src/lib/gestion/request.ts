/* Adresse publique pour les liens envoyés par courriel et texto.
   En production : toujours l'adresse du site (jamais l'en-tête Host, qu'un tiers pourrait falsifier
   pour détourner un lien de connexion). En développement : l'hôte de la requête (localhost:3001). */

import { headers } from "next/headers";
import { ipFromHeaders } from "./rate-limit";

export const SITE_BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermopompesavendre.ca").replace(/\/$/, "");

export function baseUrlFromHeaders(h: Headers): string {
  if (process.env.NODE_ENV === "production") return SITE_BASE_URL;
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return host ? `${proto}://${host}` : SITE_BASE_URL;
}

export async function publicBaseUrl(): Promise<string> {
  return baseUrlFromHeaders(await headers());
}

export async function requestIp(): Promise<string> {
  return ipFromHeaders(await headers());
}
