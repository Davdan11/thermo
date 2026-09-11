# Déploiement

Le site est installé sur le VPS Hostinger (Ubuntu 24.04, `31.97.98.22`) à côté de bellechasseenergie.ca,
avec la même mécanique : une application Node sous **PM2** et un bloc **Nginx** avec certificat
**Let's Encrypt** (certbot).

## Où est quoi sur le VPS

| Élément | Emplacement |
|---|---|
| Versions déployées | `/var/www/thermopompesavendre.ca/releases/<horodatage>/` (3 conservées) |
| Version servie | `/var/www/thermopompesavendre.ca/current` (lien vers une release) |
| Variables secrètes | `/var/www/thermopompesavendre.ca/shared/.env` (modèle : `.env.example`) |
| Journal des leads | `/var/www/thermopompesavendre.ca/shared/data/leads/AAAA-MM.jsonl` (via `LEAD_JOURNAL_DIR` dans `shared/.env`) |
| Application PM2 | `thermo` (port local 3003, `ecosystem.config.js`, cwd = `current`) |
| Bloc Nginx | `/etc/nginx/sites-available/thermopompesavendre.ca` |
| Journaux | `pm2 logs thermo` |

## DNS (Hostinger)

| Nom | Type | Valeur |
|---|---|---|
| thermopompesavendre.ca | A | 31.97.98.22 |
| www.thermopompesavendre.ca | CNAME | thermopompesavendre.ca |

Une fois propagé, poser le certificat :

```bash
certbot --nginx -d thermopompesavendre.ca -d www.thermopompesavendre.ca -n --agree-tos -m info@thermopompesavendre.ca
```

## Mettre à jour le site (sans interruption)

Depuis un poste où le dépôt git est à jour (`git pull` d'abord). L'arbre est envoyé dans `incoming/`,
puis `deploy-vps.sh` le transforme en release, construit, bascule `current` et recharge pm2. L'ancienne
version sert les visiteurs pendant tout le build (≈ 30 min : plusieurs milliers de pages).

```bash
tar czf - --exclude=./node_modules --exclude=./.next --exclude=./data/leads --exclude='.env*' --exclude=.git --exclude=.claude .   | ssh root@31.97.98.22 'R=/var/www/thermopompesavendre.ca; rm -rf $R/incoming && mkdir -p $R/incoming && cd $R/incoming && tar xzf -'
ssh root@31.97.98.22 'nohup /var/www/thermopompesavendre.ca/incoming/deploy-vps.sh > /var/www/thermopompesavendre.ca/deploy.log 2>&1 < /dev/null & disown'
```

Suivre : `ssh root@31.97.98.22 'tail -f /var/www/thermopompesavendre.ca/deploy.log'`. Revenir à la version
précédente : `ln -sfn /var/www/thermopompesavendre.ca/releases/<x> /var/www/thermopompesavendre.ca/current && pm2 reload thermo`.

## Variables d'environnement

Éditer `shared/.env` sur le VPS puis `pm2 restart thermo --update-env`. Indispensables en production :
`NEXT_PUBLIC_SITE_URL`, `PIPEDRIVE_API_TOKEN`, `TWILIO_AUTH_TOKEN` (sans lui les webhooks téléphoniques
sont refusés), `RESEND_API_KEY` et `NOTIFICATION_EMAIL` pour les courriels.


## Robot LogisVert quotidien

Un cron sur le VPS (`30 5 * * *`, `/var/www/thermopompesavendre.ca/bot/run.sh`) exécute `scripts/logisvert-bot.sh` :

1. synchronise `/var/www/thermopompesavendre.ca/bot/repo` avec GitHub (clé `/root/.ssh/thermo-bot`, à inscrire dans **Settings → Deploy keys** du dépôt avec accès en écriture) ; sans synchronisation, il s'arrête sans rien déployer ;
2. compare l'empreinte SHA-256 du fichier Hydro-Québec avec `src/lib/subsidies/logisvert-metadata.json` (`node scripts/scrape-logisvert.mjs --check`) ;
3. si la liste a changé : régénération, `vitest`, commit « LogisVert : liste Hydro-Québec du AAAA-MM-JJ », push, puis déploiement sans interruption par `deploy-vps.sh`.

Journal : `/var/log/thermo-logisvert-bot.log`. Lancement manuel : `bash /var/www/thermopompesavendre.ca/bot/run.sh`.

## Robot de nuit (LogisVert + blogue)

`bot/run.sh` (cron 5 h 30) lance `scripts/nightly-bot.sh` : synchronisation GitHub, vérification LogisVert (voir ci-dessus), puis `scripts/blog-bot.mjs` qui publie **un article par jour**, si `shared/.env` contient `ANTHROPIC_API_KEY` (Claude) ou, à défaut, `GEMINI_API_KEY` (Gemini 2.5 Flash, palier gratuit suffisant ; c'est la configuration actuelle du VPS). La photo est générée si une clé d'images répond (`OPENAI_API_KEY` ou `GEMINI_API_KEY`), sinon une image de couverture du site est utilisée : l'article ne dépend pas de la photo. Un seul commit et un seul déploiement par nuit. Vérifier un guide écrit à la main : `node scripts/valider-guide.mjs <slug>`.

- Sujets : `data/blog/sujets.json` (file d'attente, un sujet par ligne ; ajouter des sujets pour prolonger). Publiés : `data/blog/publies.json`.
- Garde-fous : seuls les chiffres du contexte factuel (`scripts/blog-context.ts`) sont autorisés ; validation du frontmatter, de la longueur, des liens internes ; second essai avec les erreurs ; abandon sinon (journal `/var/log/thermo-nightly-bot.log`).
- Essai local : `node scripts/blog-bot.mjs --dry-run --topic <slug>` (affiche l'article sans écrire).

## Courriels automatiques Pipedrive (étapes du pipeline)

- Webhook Pipedrive (id 19180) : `deal.updated` → `POST https://thermopompesavendre.ca/api/webhooks/pipedrive`, authentification HTTP Basic avec `PIPEDRIVE_WEBHOOK_USER` / `PIPEDRIVE_WEBHOOK_PASSWORD` (shared/.env).
- À chaque changement d'étape (pipelines Ventes, Installation & Opérations, Service & Maintenance) ou passage en « perdue », le client reçoit un courriel signé Thermopompes À Vendre, personnalisé avec les champs de l'affaire (type de projet, région, modèle proposé, capacité, subvention, date d'installation, installateur). Une note est ajoutée sur l'affaire.
- Étapes reconnues par leur nom (`src/lib/crm/templates/stage-emails.ts`) : renommer une étape dans Pipedrive sans changer le gabarit coupe l'envoi pour cette étape. « Nouveau lead » n'envoie rien (courriel de bienvenue déjà envoyé à la création).
- Seules les affaires de ce site sont traitées (champ « Site web » = thermopompesavendre.ca ou titre préfixé `[TAV]`).
- Anti-doublon : `$LEAD_JOURNAL_DIR/pipedrive-courriels.json` (une clé par affaire et par étape). Supprimer l'entrée pour renvoyer un courriel.
- Aperçu des gabarits hors production : `http://localhost:3000/api/webhooks/pipedrive/apercu` (en production, ajouter `?cle=<PIPEDRIVE_WEBHOOK_PASSWORD>`).
- Envoi par le relais SMTP Google Workspace (`SMTP_HOST=smtp-relay.gmail.com`), voir la section courriels.
- Le relais n'autorise que l'IPv4 du VPS (31.97.98.22) ; en IPv6 il répond « Invalid credentials for relay ». `ecosystem.config.js` force donc `NODE_OPTIONS=--dns-result-order=ipv4first`. Ne pas retirer cette option, sinon plus aucun courriel ne part.

## Rendez-vous en ligne, Google Agenda et Google Meet

La page `/rendez-vous` propose trois formats : **appel téléphonique** (30 min), **rencontre en ligne**
(Google Meet, 45 min) et **visite à domicile** par l'équipe (plage de 2 h, secteurs Montréal, Laval,
Rive-Nord, Rive-Sud, Lanaudière). Moteur : `src/lib/rdv/booking.ts` (conseillers, horaires, plages,
dates fermées, secteurs par code postal), réservations dans `shared/data/rendez-vous.json`.

Pour chaque réservation : journal des leads, événement dans l'agenda Google du conseiller (`email` dans
`ADVISORS`, sinon `GOOGLE_CALENDAR_USER`) avec lien Meet pour une rencontre en ligne, affaire et activité
datée dans Pipedrive, alerte à l'équipe et confirmation au client avec fichier `.ics`. Si l'agenda Google
n'est pas configuré, le client est prévenu que le lien Meet suivra et l'alerte le signale en rouge.

Mise en place de Google Agenda, une seule fois (environ 15 minutes) :

1. **Google Cloud** (console.cloud.google.com) : créer un projet, puis *API et services → Bibliothèque →
   Google Calendar API → Activer*.
2. *IAM et administration → Comptes de service → Créer* (nom `rendez-vous`). Ouvrir le compte, onglet
   *Clés → Ajouter une clé → JSON*. Noter `client_email`, `private_key` et l'« ID client » (21 chiffres).
3. **Console d'administration Workspace** (admin.google.com) : *Sécurité → Contrôle des accès et des données
   → Commandes API → Délégation au niveau du domaine → Ajouter* : l'ID client et le champ d'application
   `https://www.googleapis.com/auth/calendar.events`.
4. Dans `shared/.env` : `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_SERVICE_ACCOUNT_KEY` (la `private_key`
   telle quelle, entre guillemets, ou encodée en base64), `GOOGLE_CALENDAR_USER` (agenda par défaut).
   Puis `pm2 restart thermo --update-env`.
5. Vérifier : `node scripts/verifier-google-agenda.mjs` dans `current/` (crée puis supprime un événement test
   avec lien Meet). Renseigner ensuite `email` pour chaque conseiller dans `src/lib/rdv/booking.ts`.

Erreurs fréquentes (`pm2 logs thermo`) : `unauthorized_client` (délégation absente ou mauvais champ
d'application), `invalid_grant` (clé ou horloge), `403 Calendar API has not been used` (API non activée).
