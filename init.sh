#!/usr/bin/env bash
# Domain harness init — the standard verification entrypoint (LHE adoption, Task 19)
cd "$(dirname "$0")"   # location-independent
# Fails fast on broken structure; desk audit is fail-soft by doctrine.
set -e

echo "[domain-init] structure"
test -d agents || { echo "FAIL: agents/ missing"; exit 1; }
test -f AGENTS.md || { echo "FAIL: AGENTS.md missing"; exit 1; }
test -f feature_list.json || { echo "FAIL: feature_list.json missing"; exit 1; }
node -e "JSON.parse(require('fs').readFileSync('feature_list.json','utf8'))" \
  || { echo "FAIL: feature_list.json not valid JSON"; exit 1; }

echo "[domain-init] syntax gate on desk scripts"
shopt -s nullglob
for f in agents/*.cjs agents/*.mjs scripts/*.mjs scripts/*.cjs; do
  node --check "$f" >/dev/null
  echo "  ok $f"
done

echo "[domain-init] destructive-command guard battery (dcg adoption, tier-C law — fleet-native guard)"
gv() { node agents/command-guard.cjs explain "$1" 2>/dev/null | node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{try{const j=JSON.parse(d);console.log(j.decision||j.verdict||j.action||'unknown')}catch(e){console.log('unknown')}})"; }
[ "$(gv 'git push --force origin main')" = "DENY" ] || { echo "FAIL: guard allows force-push"; exit 1; }
[ "$(gv 'git reset --hard HEAD~5')" = "DENY" ] || { echo "FAIL: guard allows reset --hard"; exit 1; }
[ "$(gv 'rm -rf agents/')" = "DENY" ] || { echo "FAIL: guard allows estate rm -rf"; exit 1; }
[ "$(gv 'git pull --rebase origin main')" != "DENY" ] || { echo "FAIL: guard blocks the rebase law"; exit 1; }
[ "$(gv 'grep "rm -rf" docs/x.md')" != "DENY" ] || { echo "FAIL: guard blocks data-position"; exit 1; }
echo "  guard battery ok (DENY on destruction, allow on law+data)"

echo "[domain-init] judge node (fail-soft, refreshes the audit book)"
if [ -d "${DEFU_DIR:-../Defi}" ]; then
  node agents/harness-audit.cjs || true
else
  echo "  SKIP harness-audit: sibling canon Defi/ not checked out (fresh clone) — CI runs it with the PAT checkout"
fi

echo "DOMAIN-INIT-OK — restartable from AGENTS.md + the books"
