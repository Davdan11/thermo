#!/usr/bin/env bash
# Déploiement sans interruption sur le VPS.
#
# Arborescence : /var/www/thermopompesavendre.ca/
#   releases/<horodatage>/   une version complète par déploiement (code + node_modules + .next)
#   current -> releases/…    la version servie par pm2
#   shared/.env              secrets (jamais dans une release)
#   shared/data/             journal des leads et autres données persistantes
#   incoming/                arbre reçu par tar depuis le poste de travail
#
# L'ancienne version continue de servir pendant tout le build ; la bascule se fait
# en changeant le lien « current » puis en rechargeant pm2. Les 3 dernières versions
# sont conservées pour revenir en arrière (ln -sfn releases/<x> current ; pm2 reload thermo).
set -euo pipefail
ROOT=/var/www/thermopompesavendre.ca
SRC="${1:-$ROOT/incoming}"
STAMP=$(date +%Y%m%d-%H%M%S)
REL=$ROOT/releases/$STAMP

[ -d "$SRC" ] || { echo "Dossier source introuvable : $SRC" >&2; exit 1; }
mkdir -p "$ROOT/releases" "$ROOT/shared/data/leads"
[ -f "$ROOT/shared/.env" ] || { echo "Il manque $ROOT/shared/.env" >&2; exit 1; }

mv "$SRC" "$REL"
ln -sfn "$ROOT/shared/.env" "$REL/.env"
# Pas de lien vers shared/data dans la release : Turbopack refuse un lien qui sort du projet.
# Le journal des leads est dirigé vers shared/data par LEAD_JOURNAL_DIR dans shared/.env.
rm -rf "$REL/data"
grep -q "^LEAD_JOURNAL_DIR=" "$ROOT/shared/.env" || echo "LEAD_JOURNAL_DIR=$ROOT/shared/data/leads" >> "$ROOT/shared/.env"
cd "$REL"

export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH
export PUPPETEER_SKIP_DOWNLOAD=1

# Dépendances : réutilisées (liens durs) si le lockfile n'a pas changé, sinon npm ci.
if [ -d "$ROOT/current/node_modules" ] && cmp -s "$ROOT/current/package-lock.json" package-lock.json; then
  echo "Dépendances inchangées : réutilisation de node_modules."
  cp -al "$ROOT/current/node_modules" node_modules
else
  # npm ci exige un lockfile parfaitement synchronisé ; sinon npm install le complète (même versions épinglées).
  npm ci --no-audit --no-fund || npm install --no-audit --no-fund
fi

NODE_OPTIONS=--max-old-space-size=4096 npm run build

ln -sfn "$REL" "$ROOT/current"
pm2 startOrReload "$ROOT/current/ecosystem.config.js" --update-env
pm2 save >/dev/null

# Moteurs de recherche : Bing & co. sont prévenus des URL (IndexNow), sans bloquer le déploiement.
(sleep 90 && node scripts/indexnow.mjs > /var/log/thermo-indexnow.log 2>&1 &) || true

# Ménage : garder les 3 dernières versions.
ls -1dt "$ROOT"/releases/* | tail -n +4 | xargs -r rm -rf
echo "Déployé : $REL"
