#!/usr/bin/env bash
# ==================================================================
# Publication des données sans reconstruction (VPS), appelée par le robot de nuit.
#
# Quand seule la liste LogisVert (et le catalogue qui en découle) a changé, reconstruire tout le site prend
# environ 30 minutes et a déjà épuisé la mémoire du VPS (8 Go, sans swap). Or le serveur lit ces fichiers sur
# le disque à l'exécution (src/lib/data/registry.ts, src/lib/subsidies/logisvert-official.ts et
# logisvert-meta.ts) : il suffit de les remplacer dans la version servie, puis de redémarrer le serveur.
#
#   1. vérifie que chaque nouveau fichier est un JSON lisible ;
#   2. garde une copie des fichiers en place (current/.donnees-precedentes) et remplace chaque fichier
#      d'un seul coup (copie temporaire puis mv) ;
#   3. pm2 reload thermo, puis attend que GET /api/donnees/revalider réponde avec la nouvelle empreinte
#      de la liste (le serveur a relu les fichiers, catalogue compris) ; sinon remet les anciens fichiers ;
#   4. POST /api/donnees/revalider (DONNEES_CRON_SECRET dans shared/.env) : toutes les pages prérendues sont
#      régénérées à leur prochaine visite. Sans ce secret, elles suivent en 6 heures au plus (ISR).
#
# Usage : bash scripts/publier-donnees.sh <copie de travail qui contient les nouveaux fichiers>
# Code de sortie : 0 publié, 1 refusé ou annulé (les anciennes données restent servies).
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
SRC="${1:?Usage : publier-donnees.sh <dossier source>}"
PORT="${THERMO_PORT:-3003}"
CUR=$(readlink -f "$ROOT/current")
export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

# Fichiers de données lus à l'exécution. Tout autre changement demande une reconstruction (deploy-vps.sh).
FICHIERS=(
  src/lib/subsidies/logisvert-official-amounts.json
  src/lib/subsidies/logisvert-model-index.json
  src/lib/subsidies/logisvert-metadata.json
  src/lib/data/fixtures/brands/all-auto-datasets.json
  src/lib/data/fixtures/brands/catalogue-build-report.json
  src/lib/data/energystar-types.json
)

for f in "${FICHIERS[@]}"; do
  node -e 'JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))' "$SRC/$f" 2>/dev/null || { log "Données : $f illisible dans $SRC, publication annulée."; exit 1; }
done
ATTENDU=$(node -e 'console.log(JSON.parse(require("fs").readFileSync(process.argv[1], "utf8")).contentSha256 || "")' "$SRC/src/lib/subsidies/logisvert-metadata.json")
[ -n "$ATTENDU" ] || { log "Données : empreinte absente des nouvelles métadonnées, publication annulée."; exit 1; }

SAUVE="$CUR/.donnees-precedentes"
rm -rf "$SAUVE"; mkdir -p "$SAUVE"
for f in "${FICHIERS[@]}"; do
  if [ -f "$CUR/$f" ]; then mkdir -p "$SAUVE/$(dirname "$f")"; cp -p "$CUR/$f" "$SAUVE/$f"; fi
done

remplacer() { # $1 = dossier d'origine
  for f in "${FICHIERS[@]}"; do
    [ -f "$1/$f" ] || continue
    mkdir -p "$CUR/$(dirname "$f")"
    cp "$1/$f" "$CUR/$f.tmp.$$" && mv -f "$CUR/$f.tmp.$$" "$CUR/$f"
  done
}

charge() { # empreinte de la liste lue par le serveur, vide s'il ne répond pas
  curl -sS --max-time 120 "http://127.0.0.1:${PORT}/api/donnees/revalider" 2>/dev/null |
    node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const j=JSON.parse(s);console.log(j.logisvert&&j.logisvert.fichesChargees>0?(j.logisvert.contentSha256||""):"")}catch{console.log("")}})'
}

redemarrer_et_attendre() { # $1 = empreinte attendue
  pm2 reload thermo --update-env >/dev/null 2>&1 || pm2 startOrReload "$ROOT/current/ecosystem.config.js" --update-env >/dev/null 2>&1
  for _ in $(seq 1 36); do
    sleep 5
    [ "$(charge)" = "$1" ] && return 0
  done
  return 1
}

remplacer "$SRC"
if ! redemarrer_et_attendre "$ATTENDU"; then
  log "Données : le serveur ne sert pas la nouvelle liste après 3 minutes, retour aux données précédentes."
  remplacer "$SAUVE"
  PRECEDENTE=$(node -e 'try{console.log(JSON.parse(require("fs").readFileSync(process.argv[1],"utf8")).contentSha256||"")}catch{console.log("")}' "$SAUVE/src/lib/subsidies/logisvert-metadata.json")
  redemarrer_et_attendre "$PRECEDENTE" || log "Données : ATTENTION, le serveur ne répond pas non plus avec les données précédentes (pm2 logs thermo)."
  exit 1
fi
log "Données : le serveur lit la nouvelle liste (${ATTENDU:0:12}…)."

set -a; . "$ROOT/shared/.env"; set +a
if [ -n "${DONNEES_CRON_SECRET:-}" ]; then
  OUT=$(curl -sS --max-time 60 -X POST -H "Authorization: Bearer ${DONNEES_CRON_SECRET}" "http://127.0.0.1:${PORT}/api/donnees/revalider" -w ' HTTP %{http_code}')
  log "Données : régénération des pages demandée : ${OUT: -8}"
else
  log "Données : DONNEES_CRON_SECRET absent de shared/.env ; les pages prérendues suivront en 6 heures au plus."
fi
exit 0
