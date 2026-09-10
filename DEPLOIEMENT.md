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
tar czf - --exclude=./node_modules --exclude=./.next --exclude=./data --exclude='.env*' --exclude=.git --exclude=.claude .   | ssh root@31.97.98.22 'R=/var/www/thermopompesavendre.ca; rm -rf $R/incoming && mkdir -p $R/incoming && cd $R/incoming && tar xzf -'
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
