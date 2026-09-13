/* Guide pas à pas pour le propriétaire : relier Instagram à la page, créer l'application Meta, obtenir le jeton de page
   longue durée et le coller LUI-MÊME dans shared/.env sur le serveur. Jamais de jeton dans une conversation. */
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { DEFAULT_GRAPH_VERSION, metaStatus } from "@/lib/presence/config";
import { Card } from "@/components/gestion/kit/Card";
import { Reveal } from "@/components/gestion/Reveal";
import { PresenceTabs } from "@/components/gestion/presence/PresenceTabs";

export const metadata: Metadata = { title: "Connecter Facebook et Instagram" };

const ENV_BLOCK = `# Studio de présence (Facebook + Instagram)
META_PAGE_ID=<identifiant de la page Facebook>
META_PAGE_TOKEN=<jeton de page longue durée>
META_IG_USER_ID=<identifiant du compte Instagram professionnel>
# Facultatif : version de l'API Graph (défaut ${DEFAULT_GRAPH_VERSION})
# META_GRAPH_VERSION=${DEFAULT_GRAPH_VERSION}
# Secret du passage planifié (48 caractères au hasard : openssl rand -base64 36)
PRESENCE_CRON_SECRET=<48 caractères au hasard>
# Facultatif : clé propre des visuels (sinon dérivée du secret des sessions)
# PRESENCE_SIGNING_SECRET=<48 caractères au hasard>`;

export default async function ConnecterPage() {
  await requireAdmin();
  const s = metaStatus();
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Présence</p>
          <h1 className="k-h1">
            Connecter <em>Facebook et Instagram</em>
          </h1>
          <p className="k-lead">Une seule fois, environ 20 minutes. Le studio publie ensuite par l’accès officiel de Meta (API Graph), sans mot de passe et sans outil tiers.</p>
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
        État actuel : Facebook {s.facebook ? "connecté" : "manquant"}, Instagram {s.instagram ? "connecté" : "manquant"}.{" "}
        <Link href="/gestion/presence/reglages" className="k-link">
          Voir les réglages
        </Link>
      </p>

      <ol className="pr-steps">
        <li>
          <h2>Passer Instagram en compte professionnel, relié à la page</h2>
          <p>Dans l’application Instagram : profil, menu, paramètres, puis « Type de compte et outils » et « Passer à un compte professionnel » (catégorie Entreprise). Ensuite, depuis la page Facebook : paramètres, « Comptes liés », Instagram, « Connecter ». Les libellés changent parfois : cherchez « compte professionnel » et « comptes liés ».</p>
        </li>
        <li>
          <h2>Créer l’application Meta</h2>
          <p>
            Sur <b>developers.facebook.com</b>, connectez-vous avec le compte qui administre la page, puis « Mes applications », « Créer une application », type « Entreprise ». Nommez-la par exemple « Studio ThermopompesÀVendre ». Quand elle ne sert qu’à vos propres comptes, Meta n’exige généralement pas d’examen ; si Meta en demande un, suivez ses instructions avant d’aller plus loin.
          </p>
        </li>
        <li>
          <h2>Demander les permissions</h2>
          <p>Dans l’Explorateur de l’API Graph (menu « Outils »), choisissez votre application, puis « Obtenir un jeton d’accès utilisateur » et cochez :</p>
          <ul>
            <li>
              <code>pages_manage_posts</code> : publier sur la page ;
            </li>
            <li>
              <code>pages_read_engagement</code> : relire les publications (vérification sans doublon) ;
            </li>
            <li>
              <code>instagram_basic</code> et <code>instagram_content_publish</code> : publier sur Instagram ;
            </li>
            <li>
              <code>pages_show_list</code> : voir la page (et <code>business_management</code> si la page est dans un portefeuille d’entreprise).
            </li>
          </ul>
        </li>
        <li>
          <h2>Obtenir le jeton de page longue durée</h2>
          <p>
            Collez le jeton obtenu dans le « Débogueur de jeton d’accès », puis « Prolonger le jeton d’accès ». Revenez dans l’Explorateur avec ce jeton prolongé et demandez <code>me/accounts</code> : la réponse donne l’<b>identifiant</b> de la page (<code>id</code>) et son <b>jeton</b> (<code>access_token</code>). Obtenu ainsi, le jeton de page n’expire pas tant que vous ne changez pas votre mot de passe ni les permissions : le débogueur doit afficher « Expire : jamais ».
          </p>
        </li>
        <li>
          <h2>Trouver l’identifiant Instagram</h2>
          <p>
            Toujours dans l’Explorateur, avec le jeton de page : <code>{"<id de la page>?fields=instagram_business_account"}</code>. Le champ <code>id</code> de la réponse est l’identifiant du compte Instagram professionnel.
          </p>
        </li>
        <li>
          <h2>Coller les valeurs vous-même dans shared/.env</h2>
          <p>
            Connectez-vous au serveur (SSH), ouvrez <code>/var/www/thermopompesavendre.ca/shared/.env</code> et ajoutez ces lignes avec vos valeurs, puis rechargez le site avec <code>pm2 reload thermo --update-env</code>.
          </p>
          <pre className="pr-code">{ENV_BLOCK}</pre>
        </li>
        <li>
          <h2>Ajouter le passage planifié</h2>
          <p>
            Avec <code>crontab -e</code>, ajoutez la ligne affichée dans les <Link href="/gestion/presence/reglages">réglages</Link>. Elle appelle le site toutes les 15 minutes ; rien ne part tant que l’interrupteur est éteint.
          </p>
        </li>
        <li>
          <h2>Vérifier, puis allumer</h2>
          <p>
            Les réglages doivent afficher « Connecté » pour Facebook et Instagram. Ouvrez une publication, « Publier maintenant » en mode essai : le studio montre les requêtes qui partiraient. Quand tout est bon, activez « Publication automatique ». Chaque série reste en approbation jusqu’à ce que vous la passiez en automatique.
          </p>
        </li>
      </ol>

      <Card tone="cream" title="Si le jeton fuit ou si vous voulez tout couper">
        <p className="g-hint" style={{ margin: 0 }}>
          Sur Facebook, dans les paramètres de la page : « Intégrations professionnelles », retirez l’application. Le jeton cesse de fonctionner aussitôt. Éteignez l’interrupteur, puis recommencez les étapes 4 à 6 pour un nouveau jeton.
        </p>
      </Card>
    </>
  );
}
