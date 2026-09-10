#!/usr/bin/env bash
# ==================================================================
# Robot quotidien LogisVert (VPS) — lancé par cron, voir DEPLOIEMENT.md.
#
# 1. Synchronise la copie de travail avec GitHub (clé /root/.ssh/thermo-bot).
#    Sans synchronisation possible, le robot s'arrête : il ne déploie jamais
#    une copie qui pourrait être en retard sur le dépôt.
# 2. Compare l'empreinte de la liste Hydro-Québec avec celle en place
#    (node scripts/scrape-logisvert.mjs --check). Inchangée : fin.
# 3. Nouvelle liste : régénération des fichiers LogisVert, tests, commit,
#    push GitHub, puis déploiement sans interruption (deploy-vps.sh).
#
# Journal : /var/log/thermo-logisvert-bot.log
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
BOT=$ROOT/bot/repo
REPO=git@github.com:Davdan11/thermo.git
export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH
export PUPPETEER_SKIP_DOWNLOAD=1
export GIT_SSH_COMMAND="ssh -i /root/.ssh/thermo-bot -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

log "Robot LogisVert : début"
mkdir -p "$ROOT/bot"
if [ ! -d "$BOT/.git" ]; then
  git clone -q "$REPO" "$BOT" || { log "Clonage impossible : la clé /root/.ssh/thermo-bot.pub doit être ajoutée au dépôt GitHub (Deploy keys, accès en écriture). Arrêt."; exit 1; }
fi
cd "$BOT"
git fetch -q origin main || { log "GitHub injoignable ou clé refusée : arrêt sans déploiement."; exit 1; }
git reset -q --hard origin/main

# Dépendances : celles de la version servie, réutilisées par liens durs si le lockfile est identique.
if ! cmp -s package-lock.json "$ROOT/current/package-lock.json"; then
  npm ci --no-audit --no-fund >/dev/null 2>&1 || npm install --no-audit --no-fund >/dev/null 2>&1
elif [ ! -d node_modules ]; then
  cp -al "$ROOT/current/node_modules" node_modules
fi

node scripts/scrape-logisvert.mjs --check
case $? in
  0) log "Liste Hydro-Québec inchangée : rien à faire."; exit 0 ;;
  3) log "Nouvelle liste Hydro-Québec détectée : régénération." ;;
  *) log "Vérification impossible (Hydro-Québec injoignable ?) : nouvel essai demain."; exit 1 ;;
esac

node scripts/scrape-logisvert.mjs > /tmp/logisvert-run.log 2>&1 || { log "Régénération en échec :"; tail -n 20 /tmp/logisvert-run.log; git checkout -- src/lib/subsidies; exit 1; }
tail -n 6 /tmp/logisvert-run.log

if ! npx vitest run --reporter=dot >/tmp/logisvert-tests.log 2>&1; then
  log "TESTS EN ÉCHEC après régénération : aucun déploiement, fichiers restaurés."
  tail -n 30 /tmp/logisvert-tests.log
  git checkout -- src/lib/subsidies
  exit 1
fi

DATE=$(date +%Y-%m-%d)
git add src/lib/subsidies
git -c user.name="Robot LogisVert" -c user.email="robot@thermopompesavendre.ca" commit -qm "LogisVert : liste Hydro-Québec du $DATE (mise à jour automatique)" || { log "Rien à valider."; exit 0; }
git push -q origin main || { log "Push GitHub refusé : commit conservé localement, déploiement quand même."; }

rm -rf "$ROOT/incoming"
mkdir -p "$ROOT/incoming"
rsync -a --exclude=.git --exclude=node_modules --exclude=.next --exclude='.env*' "$BOT/" "$ROOT/incoming/"
if bash "$ROOT/incoming/deploy-vps.sh" > /var/log/thermo-deploy.log 2>&1; then
  log "Déployé : $(tail -n 1 /var/log/thermo-deploy.log)"
else
  log "Déploiement en échec :"; tail -n 20 /var/log/thermo-deploy.log; exit 1
fi
