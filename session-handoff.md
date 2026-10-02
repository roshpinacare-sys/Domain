# Session Handoff — Domain

## Blockers
- Owner-only keys: tov-hive + headcorner-hive exist in NO git folder (proven
  negative, Task 13) — cannot be wired from here; owner closes these.
- Realized >1¢/day needs days of maturing receipts — cadence, not code.

## Files
- `AGENTS.md` — the landing protocol (read first)
- `feature_list.json` / `progress.md` / this file — the state layer
- `agents/harness-audit.cjs` — judge node; its json/md are the latest verdict
- `agents/*.json` — machine books (external state; stamp before you leave)
- `.github/workflows/economy-engine.yml` — daily economy (dispatch = don't wait)
- Sibling canon: `../Defi/fleet/` (AGENTS, DOCTRINE, DOCTRINE-economics, CLAIMS)

## Next Session
1. `git pull --rebase origin main` first (parallel runtimes are real).
2. `./init.sh` — baseline green? If not, repair before new scope.
3. Read `agents/harness-audit.md` verdict + `Defi/fleet/CLAIMS.md` tail —
   never re-do what a receipt already closes.
4. Take exactly one feature from `feature_list.json` to done-with-evidence.
5. Update the three state files; push rebase-first; leave books fresher.
