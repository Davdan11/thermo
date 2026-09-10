# Déploiement

Le site est installé sur le VPS Hostinger (Ubuntu 24.04, `31.97.98.22`) à côté de bellechasseenergie.ca,
avec la même mécanique : une application Node sous **PM2** et un bloc **Nginx** avec certificat
**Let's Encrypt** (certbot).

## Où est quoi sur le VPS

| Élément | Emplacement |
|---|---|
| Code du site | `/var/www/thermopompesavendre.ca` |
| Variables secrètes | `/var/www/thermopompesavendre.ca/.env` (modèle : `.env.example`) |
| Journal des leads | `/var/www/thermopompesavendre.ca/data/leads/AAAA-MM.jsonl` |
| Application PM2 | `thermo` (port local 3003, `ecosystem.config.js`) |
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

## Mettre à jour le site

Depuis un poste où le dépôt git est à jour (`git pull` d'abord) :

```bash
tar czf - --exclude=./node_modules --exclude=./.next --exclude=./data --exclude='.env*' --exclude=.git --exclude=.claude . \
  | ssh root@31.97.98.22 'cd /var/www/thermopompesavendre.ca && tar xzf -'
ssh root@31.97.98.22 '/var/www/thermopompesavendre.ca/deploy-vps.sh'
```

`deploy-vps.sh` fait `npm ci` (sans le navigateur Puppeteer), `npm run build` avec 4 Go pour Node, puis
`pm2 startOrReload`. Le build prend plusieurs minutes : plusieurs centaines de pages sont générées.

## Variables d'environnement

Éditer `.env` sur le VPS puis `pm2 restart thermo --update-env`. Indispensables en production :
`NEXT_PUBLIC_SITE_URL`, `PIPEDRIVE_API_TOKEN`, `TWILIO_AUTH_TOKEN` (sans lui les webhooks téléphoniques
sont refusés), `RESEND_API_KEY` et `NOTIFICATION_EMAIL` pour les courriels.
