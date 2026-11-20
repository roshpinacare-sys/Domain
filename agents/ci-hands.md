# CI Hands — the fleet's hands on its own CI estate (trycua/cua adoption)

_ci-hands v1.0.0 · 2026-11-20T13:37:34.851Z · env-token (redacted) · stasis armed/free_

**CI-HANDS REACHED 16/16 · lanes 48/77 green (62%) · 4 active-red · 0 startup-failures**

| repo | lanes | green | active-red | self-healed | history-transient | verdict |
|---|---|---|---|---|---|---|
| saos-sovereign-platform | 1 | 1 | 0 | 0 | 0 | measured |
| steem | 2 | 2 | 0 | 0 | 0 | measured |
| Domain | 22 | 22 | 0 | 0 | 0 | measured |
| Console | 10 | 8 | 2 | 0 | 0 | measured |
| Zip | 2 | 2 | 0 | 0 | 0 | measured |
| roshpina | 2 | 2 | 0 | 0 | 0 | measured |
| anchor-baseline | 4 | 0 | 0 | 2 | 1 | measured |
| Saosmartwallet | 4 | 3 | 0 | 1 | 0 | measured |
| Sdk | 3 | 0 | 0 | 2 | 1 | measured |
| Project-files | 3 | 0 | 0 | 1 | 2 | measured |
| Adsmarket | 3 | 0 | 0 | 1 | 1 | measured |
| Defi | 3 | 0 | 0 | 0 | 3 | measured |
| saos-dex | 7 | 7 | 0 | 0 | 0 | measured |
| saos-jummper | 4 | 1 | 0 | 0 | 3 | measured |
| saos-control-center | 3 | 0 | 0 | 0 | 0 | measured |
| saos-sovereign-foundry | 4 | 0 | 2 | 0 | 0 | measured |

**Proposals (booked, not auto-opened — tier law):**
- Console/.github/workflows/console-publish.yml: ACTIVE-RED — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push
- Console/.github/workflows/truth-gate.yml: ACTIVE-RED+RECURRING — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push
- saos-sovereign-foundry/dynamic/dependabot/dependabot-updates: ACTIVE-RED — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push
- saos-sovereign-foundry/.github/workflows/gitleaks.yml: ACTIVE-RED+RECURRING — diagnose via jobs+logs (Task 25 method), fix, prove by dispatch/push

_cua-bench contract adopted: this book IS the summary.json; results + trajectory are in ci-hands.json. GUI layer = future tier-C rung (CUA-ADOPTION.md)._
