/* Chantier S — procédure de récupération (téléphone perdu, application effacée). Composant serveur. */
import { LifeBuoy } from "lucide-react";

export function Recovery({ open = false }: { open?: boolean }) {
  return (
    <details className="se-recovery" open={open}>
      <summary>
        <LifeBuoy size={16} aria-hidden /> Téléphone perdu ? Procédure de récupération
      </summary>
      <ol>
        <li>
          <strong>Code de secours.</strong> Après le lien de connexion, choisissez « Code de secours » et entrez un des 10 codes notés à l’activation. Créez ensuite de nouveaux codes et réinstallez l’application.
        </li>
        <li>
          <strong>Texto.</strong> Si ALERT_SMS_TO est configuré, choisissez « Texto » : un code arrive sur le cellulaire du propriétaire.
        </li>
        <li>
          <strong>Depuis le serveur</strong> (accès SSH) : <code>cd /var/www/thermopompesavendre.ca/current &amp;&amp; npx --no-install tsx scripts/securite-2fa.ts desactiver votre@adresse</code>. La 2e étape de cette adresse est retirée ; reconnectez-vous par lien, puis réactivez-la.
        </li>
        <li>
          <strong>Urgence</strong> : ajouter <code>GESTION_2FA_DESACTIVEE=1</code> dans shared/.env puis <code>pm2 reload thermo --update-env</code> suspend la 2e étape pour tous, sans rien effacer. Retirez la ligne dès que possible.
        </li>
      </ol>
    </details>
  );
}
