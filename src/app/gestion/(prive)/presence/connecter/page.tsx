/* Guide pour le propriétaire : relier la page Facebook (jeton de page permanent) et le passage planifié.
   Il colle LUI-MÊME les valeurs dans shared/.env sur le serveur. Jamais de jeton dans une conversation. */
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { configFacebook, VERSION_GRAPH_DEFAUT } from "@/lib/social/facebook";
import { Card } from "@/components/gestion/kit/Card";
import { Reveal } from "@/components/gestion/Reveal";
import { PresenceTabs } from "@/components/gestion/presence/PresenceTabs";

export const metadata: Metadata = { title: "Connecter Facebook" };

const ENV_BLOCK = `# Robot Facebook
META_PAGE_ID=<identifiant de la page Facebook>
META_PAGE_TOKEN=<jeton de page permanent>
# Facultatif : version de l'API Graph (défaut ${VERSION_GRAPH_DEFAUT})
# META_GRAPH_VERSION=${VERSION_GRAPH_DEFAUT}
# Secret du passage planifié (48 caractères au hasard : openssl rand -base64 36)
PRESENCE_CRON_SECRET=<48 caractères au hasard>`;

export default async function ConnecterPage() {
  await requireAdmin();
  const c = configFacebook();
  const complet = !!(c.pageId && c.jeton);
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Présence</p>
          <h1 className="k-h1">
            Connecter <em>Facebook</em>
          </h1>
          <p className="k-lead">Une seule fois. Le robot publie ensuite par l’accès officiel de Meta (API Graph), sans mot de passe et sans outil tiers. Instagram n’est pas utilisé.</p>
        </div>
      </Reveal>
      <PresenceTabs current="/gestion/presence/connecter" />

      <div className="pr-banner is-test" role="note">
        <ShieldAlert size={18} aria-hidden />
        <div>
          <b>Le jeton, c’est la clé de la page.</b>
          <span>Collez-le vous-même dans le fichier privé du serveur. Jamais dans une conversation, un courriel, un texto, un document partagé ou le dépôt GitHub.</span>
        </div>
      </div>

      <p className="g-hint">
        État actuel : connexion Facebook {complet ? "configurée" : "incomplète"}.{" "}
        <Link href="/gestion/presence/reglages" className="k-link">
          Vérifier la page et le jeton
        </Link>
      </p>

      <ol className="pr-steps">
        <li>
          <h2>Application Meta</h2>
          <p>
            Sur <b>developers.facebook.com</b>, avec le compte qui administre la page, l’application (« Tav ») doit avoir les permissions <code>pages_manage_posts</code> (publier), <code>pages_read_engagement</code> (relire les publications, vérification sans doublon) et <code>pages_show_list</code> (voir la page).
          </p>
        </li>
        <li>
          <h2>Jeton de page permanent</h2>
          <p>
            Dans l’Explorateur de l’API Graph, obtenez un jeton utilisateur avec ces permissions, prolongez-le dans le « Débogueur de jeton d’accès », puis demandez <code>me/accounts</code> : la réponse donne l’<b>identifiant</b> de la page (<code>id</code>) et son <b>jeton</b> (<code>access_token</code>). Le débogueur doit afficher « Expire : jamais ».
          </p>
        </li>
        <li>
          <h2>Coller les valeurs vous-même dans shared/.env</h2>
          <p>
            Connectez-vous au serveur (SSH), ouvrez <code>/var/www/thermopompesavendre.ca/shared/.env</code>, ajoutez ces lignes avec vos valeurs, puis rechargez le site avec <code>pm2 reload thermo --update-env</code>.
          </p>
          <pre className="pr-code">{ENV_BLOCK}</pre>
        </li>
        <li>
          <h2>Vérifier, puis allumer</h2>
          <p>
            Les <Link href="/gestion/presence/reglages">réglages</Link> doivent afficher le nom de la page et « Valide, n’expire pas ». Ouvrez un élément approuvé et lancez « Publier maintenant » en mode essai : le studio montre ce qui partirait. Quand tout est bon, allumez « Publication automatique ».
          </p>
        </li>
      </ol>

      <Card tone="cream" title="Si le jeton fuit ou si vous voulez tout couper">
        <p className="g-hint" style={{ margin: 0 }}>
          Éteignez l’interrupteur. Sur Facebook, dans les paramètres de la page : « Intégrations professionnelles », retirez l’application : le jeton cesse de fonctionner aussitôt. Recommencez ensuite les étapes 2 et 3 pour un nouveau jeton.
        </p>
      </Card>
    </>
  );
}
