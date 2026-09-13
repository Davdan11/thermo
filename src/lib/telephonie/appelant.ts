/* ==================================================================
   Conformité C2 — nom dit au client dans l'avis 6.3 (« ici [NOM] de… ») :
   prénom du membre de l'équipe qui lance l'appel masqué (session), sinon
   « un conseiller ». Jamais un courriel ni un numéro.
   ================================================================== */

export async function callerFirstName(by: string): Promise<string> {
  const email = by.trim().toLowerCase();
  if (email.includes("@")) {
    const { listMembers } = await import("@/lib/gestion/equipe/members");
    const member = (await listMembers().catch(() => [])).find((m) => (m as { email?: string }).email?.toLowerCase() === email) as { name?: string } | undefined;
    const first = member?.name?.trim().split(/\s+/)[0];
    if (first) return first.slice(0, 40);
  }
  return "un conseiller";
}
