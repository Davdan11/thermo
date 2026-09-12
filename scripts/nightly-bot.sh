#!/usr/bin/env bash
# ==================================================================
# Robot de nuit (VPS, cron 5 h 30) — un seul passage, un seul déploiement :
#   1. synchronisation de la copie de travail avec GitHub (clé thermo-bot) ;
#      impossible → arrêt sans rien déployer ;
#   2. LogisVert : empreinte de la liste Hydro-Québec, régénération si elle a changé ;
#   3. Blogue : un nouvel article + sa photo générée (scripts/blog-bot.mjs),
#      si ANTHROPIC_API_KEY ou GEMINI_API_KEY est dans shared/.env (Gemini gratuit suffit) ;
#   4. s'il y a du nouveau : tests, commit, push, déploiement sans interruption.
# Journal : /var/log/thermo-nightly-bot.log
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
BOT=$ROOT/bot/repo
REPO=git@github.com:Davdan11/thermo.git
export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH
export PUPPETEER_SKIP_DOWNLOAD=1
export GIT_SSH_COMMAND="ssh -i /root/.ssh/thermo-bot -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

log "Robot de nuit : début"
mkdir -p "$ROOT/bot"
if [ ! -d "$BOT/.git" ]; then
  git clone -q "$REPO" "$BOT" || { log "Clonage impossible (clé thermo-bot non autorisée sur GitHub). Arrêt."; exit 1; }
fi
cd "$BOT"
git fetch -q origin main || { log "GitHub injoignable ou clé refusée : arrêt sans déploiement."; exit 1; }
git reset -q --hard origin/main
git clean -qfd -e node_modules

if ! cmp -s package-lock.json "$ROOT/current/package-lock.json"; then
  npm ci --no-audit --no-fund >/dev/null 2>&1 || npm install --no-audit --no-fund >/dev/null 2>&1
elif [ ! -d node_modules ]; then
  cp -al "$ROOT/current/node_modules" node_modules
fi

# Secrets du site (clés d'API, Pipedrive…) pour les scripts du robot.
set -a; . "$ROOT/shared/.env"; set +a

CHANGES=()

# ---- 1. LogisVert ----
node scripts/scrape-logisvert.mjs --check >/dev/null 2>&1
case $? in
  0) log "LogisVert : liste inchangée." ;;
  3)
    log "LogisVert : nouvelle liste, régénération."
    if node scripts/scrape-logisvert.mjs > /tmp/logisvert-run.log 2>&1; then
      CHANGES+=("LogisVert : liste Hydro-Québec du $(date +%Y-%m-%d)")
      # Alertes LogisVert : avis aux abonnés confirmés dont le montant a changé (abonnés dans shared/data). Jamais bloquant.
      if NODE_OPTIONS=--max-old-space-size=4096 timeout 900 npx tsx scripts/notify-logisvert-alerts.ts > /tmp/logisvert-alerts.log 2>&1; then
        log "Alertes LogisVert : $(tail -n 1 /tmp/logisvert-alerts.log)"
      else
        log "Alertes LogisVert : passage en échec (code $?), sans effet sur le reste du robot"; tail -n 15 /tmp/logisvert-alerts.log
      fi
    else
      log "LogisVert : régénération en échec"; tail -n 10 /tmp/logisvert-run.log; git checkout -- src/lib/subsidies
    fi ;;
  *) log "LogisVert : vérification impossible (Hydro-Québec injoignable ?), nouvel essai demain." ;;
esac

# ---- 2. Blogue ----
if [ -n "${ANTHROPIC_API_KEY:-}" ] || [ -n "${GEMINI_API_KEY:-}" ]; then
  if node scripts/blog-bot.mjs > /tmp/blog-run.log 2>&1; then
    tail -n 4 /tmp/blog-run.log
    NEW=$(git status --porcelain src/content/guides | grep '^??' | awk '{print $2}' | head -n 1)
    [ -n "$NEW" ] && CHANGES+=("Blogue : $(basename "$NEW" .md)")
  else
    log "Blogue : génération en échec"; tail -n 15 /tmp/blog-run.log
    git checkout -- src/content/guides data/blog 2>/dev/null; git clean -qfd src/content/guides public/images/guides/generes data/blog 2>/dev/null
  fi
else
  log "Blogue : aucune clé de rédaction (ANTHROPIC_API_KEY ou GEMINI_API_KEY), étape sautée."
fi

# ---- 3. Publication ----
if [ ${#CHANGES[@]} -eq 0 ]; then log "Rien de nouveau : fin."; exit 0; fi

if ! npx vitest run --reporter=dot > /tmp/nightly-tests.log 2>&1; then
  log "TESTS EN ÉCHEC : aucun déploiement, modifications annulées."; tail -n 30 /tmp/nightly-tests.log
  git reset -q --hard origin/main; git clean -qfd -e node_modules; exit 1
fi

git add -A src/lib/subsidies src/content/guides public/images/guides/generes data/blog
MSG=$(printf '%s\n' "${CHANGES[@]}" | paste -sd ';' - | sed 's/;/ ; /g')
git -c user.name="Robot ThermopompesAVendre" -c user.email="robot@thermopompesavendre.ca" commit -qm "$MSG (mise à jour automatique)" || { log "Rien à valider."; exit 0; }
git push -q origin main || log "Push GitHub refusé : commit conservé localement, déploiement quand même."

rm -rf "$ROOT/incoming"; mkdir -p "$ROOT/incoming"
rsync -a --exclude=.git --exclude=node_modules --exclude=.next --exclude='.env*' --exclude=data/leads "$BOT/" "$ROOT/incoming/"
if bash "$ROOT/incoming/deploy-vps.sh" > /var/log/thermo-deploy.log 2>&1; then
  log "Déployé : $MSG"
else
  log "Déploiement en échec :"; tail -n 20 /var/log/thermo-deploy.log; exit 1
fi
