/* ==================================================================
   Chantier S — récupération de la connexion à deux étapes, depuis le
   serveur (accès SSH), quand le téléphone et les codes de secours sont
   perdus.

   Usage (depuis /var/www/thermopompesavendre.ca/current) :
     npx --no-install tsx scripts/securite-2fa.ts etat
     npx --no-install tsx scripts/securite-2fa.ts desactiver <adresse>
     npx --no-install tsx scripts/securite-2fa.ts deconnecter-partout

   Aucun redémarrage nécessaire : le fichier gestion-securite.json est
   relu à chaque requête. Chaque commande est notée au journal d'audit.
   Solution d'urgence sans ce script : GESTION_2FA_DESACTIVEE=1 dans
   shared/.env, puis pm2 reload thermo --update-env.
   ================================================================== */
import { config } from "dotenv";

config({ path: [".env.local", ".env"], quiet: true });

async function main() {
  const [cmd, email] = process.argv.slice(2);
  const { disableTwoFactor, twoFactorStatus } = await import("../src/lib/gestion/securite/deux-etapes");
  const { revokeAllSessions } = await import("../src/lib/gestion/securite/sessions");
  const { readSecurity, securityFile } = await import("../src/lib/gestion/securite/store");
  const { audit } = await import("../src/lib/gestion/securite/audit");
  const { adminEmails } = await import("../src/lib/gestion/auth/admins");

  if (cmd === "etat") {
    console.log(`Fichier : ${securityFile()}`);
    const d = await readSecurity();
    for (const a of [...new Set([...adminEmails(), ...Object.keys(d.users)])]) {
      const s = await twoFactorStatus(a);
      console.log(`  ${a} : ${s.enabled ? `2e étape ACTIVÉE (${s.backupRemaining} codes de secours)` : "2e étape non activée"}${s.suspended ? " — SUSPENDUE (GESTION_2FA_DESACTIVEE=1)" : ""}`);
    }
    return;
  }
  if (cmd === "desactiver") {
    if (!email) throw new Error("Indiquez l’adresse : desactiver <adresse>");
    const done = await disableTwoFactor(email.trim().toLowerCase());
    await audit("2fa.desactivee", { depuis: "serveur (récupération)" }, { qui: email.trim().toLowerCase(), ip: "serveur" });
    console.log(done ? `2e étape retirée pour ${email}. Reconnectez-vous par lien, puis réactivez-la dans /gestion/securite.` : `Aucune 2e étape active pour ${email}.`);
    return;
  }
  if (cmd === "deconnecter-partout") {
    const r = await revokeAllSessions();
    await audit("sessions.revoquees", { sessions: r.sessions, appareils: r.devices, depuis: "serveur" }, { qui: "serveur", ip: "serveur" });
    console.log(`Toutes les sessions sont fermées (${r.sessions} inscrites, ${r.devices} appareils de confiance).`);
    return;
  }
  console.log("Commandes : etat | desactiver <adresse> | deconnecter-partout");
  process.exit(1);
}

main().catch((e) => {
  console.error(`Échec : ${(e as Error)?.message ?? e}`);
  process.exit(1);
});
