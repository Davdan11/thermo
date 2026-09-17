#!/usr/bin/env bash
# ==================================================================
# Robot de nuit (VPS, cron 5 h 30, lancé par bot/run.sh) — un seul passage :
#   1. synchronisation de la copie de travail avec GitHub (clé thermo-bot) ;
#      impossible → arrêt sans rien publier ;
#   2. LogisVert : empreinte du contenu de la liste en vigueur (fichier quotidien ENERGY STAR lu par l'outil
#      d'Hydro-Québec, voir scripts/scrape-logisvert.mjs) ; si elle a changé : liste, types ENERGY STAR et
#      catalogue régénérés (chaque script refuse d'écrire un résultat anormal) ;
#   3. Blogue : un nouvel article + sa photo générée (scripts/blog-bot.mjs),
#      si ANTHROPIC_API_KEY ou GEMINI_API_KEY est dans shared/.env ;
#   4. s'il y a du nouveau : tests, commit, push, puis publication :
#      - seulement des données, et la version servie a le même code que cette copie
#        (scripts/empreinte-code.mjs) : publication à chaud, sans reconstruction
#        (scripts/publier-donnees.sh : fichiers remplacés, pm2 reload, pages régénérées) ;
#      - sinon (nouvel article, code différent) : reconstruction complète (deploy-vps.sh) ;
#   5. alertes LogisVert aux abonnés, une fois les nouvelles données en ligne.
# Journal : /var/log/thermo-nightly-bot.log
# Fins de ligne LF obligatoires (.gitattributes) : en CRLF, bash échoue dès « set -o pipefail ».
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
DONNEES=0   # liste LogisVert et catalogue régénérés
CODE=0      # autre chose que des données (article de blogue) : reconstruction nécessaire
DONNEES_FICHIERS=(src/lib/subsidies src/lib/data/fixtures/brands src/lib/data/energystar-types.json)

# ---- 1. LogisVert ----
node scripts/scrape-logisvert.mjs --check > /tmp/logisvert-check.log 2>&1
case $? in
  0) log "LogisVert : liste inchangée." ;;
  3)
    log "LogisVert : nouvelle liste, régénération (liste, types ENERGY STAR, catalogue)."
    if node scripts/scrape-logisvert.mjs > /tmp/logisvert-run.log 2>&1 \
      && node scripts/energystar-types.mjs > /tmp/energystar-types.log 2>&1 \
      && NODE_OPTIONS=--max-old-space-size=3072 node scripts/build-catalogue.mjs > /tmp/catalogue-build.log 2>&1; then
      DONNEES=1
      LISTE=$(node -e 'console.log(JSON.parse(require("fs").readFileSync("src/lib/subsidies/logisvert-metadata.json","utf8")).listDate || "?")')
      CHANGES+=("LogisVert : liste du $LISTE")
      tail -n 2 /tmp/logisvert-run.log; tail -n 2 /tmp/catalogue-build.log
    else
      log "LogisVert : régénération refusée (fichier anormal, ENERGY STAR injoignable ou catalogue invalide), données inchangées."
      tail -n 12 /tmp/logisvert-run.log /tmp/energystar-types.log /tmp/catalogue-build.log 2>/dev/null
      git checkout -- "${DONNEES_FICHIERS[@]}"
    fi ;;
  *) log "LogisVert : vérification impossible (fichier introuvable ou anormal), nouvel essai demain."; tail -n 5 /tmp/logisvert-check.log ;;
esac

# ---- 2. Blogue ----
if [ -n "${ANTHROPIC_API_KEY:-}" ] || [ -n "${GEMINI_API_KEY:-}" ]; then
  if node scripts/blog-bot.mjs > /tmp/blog-run.log 2>&1; then
    tail -n 4 /tmp/blog-run.log
    NEW=$(git status --porcelain src/content/guides | grep '^??' | awk '{print $2}' | head -n 1)
    if [ -n "$NEW" ]; then CHANGES+=("Blogue : $(basename "$NEW" .md)"); CODE=1; fi
  else
    log "Blogue : génération en échec"; tail -n 15 /tmp/blog-run.log
    git checkout -- src/content/guides data/blog 2>/dev/null; git clean -qfd src/content/guides public/images/guides/generes data/blog 2>/dev/null
  fi
else
  log "Blogue : aucune clé de rédaction (ANTHROPIC_API_KEY ou GEMINI_API_KEY), étape sautée."
fi

# ---- 3. Tests, commit ----
if [ ${#CHANGES[@]} -eq 0 ]; then log "Rien de nouveau : fin."; exit 0; fi

# Deux processus de test au plus : le site tourne sur la même machine (8 Go, sans swap).
if ! npx vitest run --reporter=dot --maxWorkers=2 > /tmp/nightly-tests.log 2>&1; then
  log "TESTS EN ÉCHEC : rien n'est publié, modifications annulées."; tail -n 30 /tmp/nightly-tests.log
  git reset -q --hard origin/main; git clean -qfd -e node_modules; exit 1
fi

git add -A "${DONNEES_FICHIERS[@]}" src/content/guides public/images/guides/generes data/blog
MSG=$(printf '%s\n' "${CHANGES[@]}" | paste -sd ';' - | sed 's/;/ ; /g')
git -c user.name="Robot ThermopompesAVendre" -c user.email="robot@thermopompesavendre.ca" commit -qm "$MSG (mise à jour automatique)" || { log "Rien à valider."; exit 0; }
git push -q origin main || log "Push GitHub refusé : commit conservé localement, publication quand même."

# ---- 4. Publication ----
PUBLIE=0
if [ $CODE -eq 0 ] && [ $DONNEES -eq 1 ] && [ "$(node scripts/empreinte-code.mjs "$ROOT/current")" = "$(node scripts/empreinte-code.mjs "$BOT")" ]; then
  log "Publication à chaud : seules les données ont changé et la version servie a le même code."
  if bash scripts/publier-donnees.sh "$BOT"; then
    PUBLIE=1; log "Publié sans reconstruction : $MSG"
  else
    log "Publication à chaud en échec : anciennes données toujours servies. Pas de reconstruction automatique (mémoire du VPS) ; le prochain déploiement complet les inclura."
    exit 1
  fi
else
  [ $DONNEES -eq 1 ] && [ $CODE -eq 0 ] && log "Code de la version servie différent de GitHub : reconstruction complète."
  rm -rf "$ROOT/incoming"; mkdir -p "$ROOT/incoming"
  rsync -a --exclude=.git --exclude=node_modules --exclude=.next --exclude='.env*' --exclude=data/leads "$BOT/" "$ROOT/incoming/"
  if bash "$ROOT/incoming/deploy-vps.sh" > /var/log/thermo-deploy.log 2>&1; then
    PUBLIE=1; log "Déployé : $MSG"
  else
    log "Déploiement en échec :"; tail -n 20 /var/log/thermo-deploy.log; exit 1
  fi
fi

# ---- 5. Alertes LogisVert (données en ligne) ----
if [ $PUBLIE -eq 1 ] && [ $DONNEES -eq 1 ]; then
  # Avis aux abonnés confirmés dont le montant a changé (abonnés dans shared/data). Jamais bloquant.
  if NODE_OPTIONS=--max-old-space-size=4096 timeout 900 npx tsx scripts/notify-logisvert-alerts.ts > /tmp/logisvert-alerts.log 2>&1; then
    log "Alertes LogisVert : $(tail -n 1 /tmp/logisvert-alerts.log)"
  else
    log "Alertes LogisVert : passage en échec (code $?), sans effet sur le reste du robot"; tail -n 15 /tmp/logisvert-alerts.log
  fi
fi
exit 0
