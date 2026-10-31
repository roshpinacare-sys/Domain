# CI Hands — the fleet's hands on its own CI estate (trycua/cua adoption)

_ci-hands v1.0.0 · 2026-10-31T10:38:12.652Z · env-token (redacted) · stasis armed/free_

**CI-HANDS REACHED 16/16 · lanes 38/70 green (54%) · 5 active-red · 0 startup-failures**

| repo | lanes | green | active-red | self-healed | history-transient | verdict |
|---|---|---|---|---|---|---|
| saos-sovereign-platform | 1 | 1 | 0 | 0 | 0 | measured |
| steem | 6 | 3 | 2 | 0 | 0 | measured |
| Domain | 21 | 21 | 0 | 0 | 0 | measured |
| Console | 6 | 6 | 0 | 0 | 0 | measured |
| Zip | 2 | 1 | 0 | 1 | 0 | measured |
| roshpina | 1 | 1 | 0 | 0 | 0 | measured |
| anchor-baseline | 4 | 0 | 0 | 2 | 2 | measured |
| Saosmartwallet | 3 | 1 | 1 | 0 | 0 | measured |
| Sdk | 3 | 0 | 0 | 2 | 1 | measured |
| Project-files | 3 | 0 | 0 | 1 | 2 | measured |
| Adsmarket | 3 | 0 | 0 | 1 | 1 | measured |
| Defi | 3 | 0 | 0 | 0 | 3 | measured |
| saos-dex | 5 | 4 | 1 | 0 | 0 | measured |
| saos-jummper | 3 | 0 | 0 | 0 | 3 | measured |
| saos-control-center | 3 | 0 | 0 | 0 | 0 | measured |
| saos-sovereign-foundry | 3 | 0 | 1 | 0 | 1 | measured |

**Proposals (booked, not auto-opened — tier law):**
- steem/.github/workflows/gitleaks.yml: ACTIVE-RED+RECURRING — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push
- steem/.github/workflows/workflow-yaml-guard.yml: ACTIVE-RED — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push
- Saosmartwallet/.github/workflows/ci.yml: ACTIVE-RED+RECURRING — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push
- saos-dex/.github/workflows/selftest.yml: ACTIVE-RED+RECURRING — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push
- saos-sovereign-foundry/.github/workflows/gitleaks.yml: ACTIVE-RED+RECURRING — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push

_cua-bench contract adopted: this book IS the summary.json; results + trajectory are in ci-hands.json. GUI layer = future tier-C rung (CUA-ADOPTION.md)._
