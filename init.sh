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

echo "[domain-init] judge node (fail-soft, refreshes the audit book)"
if [ -d "${DEFU_DIR:-../Defi}" ]; then
  node agents/harness-audit.cjs || true
else
  echo "  SKIP harness-audit: sibling canon Defi/ not checked out (fresh clone) — CI runs it with the PAT checkout"
fi

echo "DOMAIN-INIT-OK — restartable from AGENTS.md + the books"
