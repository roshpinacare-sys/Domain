# Desk Evals — runnable expectations (fresh-process judge, Z-36)

_run-evals v1.1.0 (Z-36 + Z-38: +guard evals E7-E9) · 2026-10-02T22:48:14.552Z_

**evals green: 9/9 expectations hold**

## E1 · dedupe identity is stable across repeat harvest — PASS
- seed(3) + econ rows carrying the same two fills → exactly 3 entries
- second pass adds 0 (idempotent)
- _measured: entries=3 added=0 reAdded=0_

## E2 · seeds never double-counted against longer book-row text — PASS
- seed text is a prefix of the book-row text — identity must still match
- _measured: identity sample: WAIV 10.00000109|1.95151099_

## E3 · venture-desk exits 0 with unreachable canon (fail-soft) — PASS
- exit code 0 even when DEFU_DIR is bogus
- board still written, honest nulls where the oracle is unreachable
- 5 ventures present with statuses
- _measured: exit=0 open=5_

## E4 · harness-audit exits 0 with missing canon and keeps counts honest — PASS
- exit code 0 even when DEFU_DIR is bogus
- missing canon = honest FAILs, never a crash, never green-washed
- counts arithmetic consistent (pass+warn+fail == checks)
- _measured: exit=0 pass=21 warn=0 fail=9_

## E5 · concat-family regression: manabar coerced before arithmetic — PASS
- string+number concatenates ("74488519347811969") — the Z-33 third-incident family
- canonical num() coercion keeps the sum under the cap
- _measured: wrong="74488519347811969" right=1000000000_

## E6 · stamp hygiene: unstamped books flagged, never fresh — PASS
- every book with exists=true and ageHours==null must NOT carry fresh=true
- the audit surfaces a timestamp-hygiene check (WARN until owners stamp)
- _measured: unstamped-but-fresh=0 hygieneCheck=true_

## E7 · guard core: destructive DENY, rebase-law ALLOW — PASS
- git reset --hard / push --force / rm -rf agents/ → DENY with named rule
- git pull --rebase + plain push → ALLOW (the fleet rebase law must never be blocked)
- _measured: denies=core.git:reset-hard,core.git:push-force,fs:rm-rf allows=core.git:rebase-law,core.git:rebase-law_

## E8 · guard context: data ALLOW, session sync-idiom DENY — PASS
- a destructive string inside grep/echo is DATA — never blocked (no false positives)
- the same reset in an agent-session context has no retry-loop alibi → DENY
- _measured: data=data-context session=core.git:reset-hard_

## E9 · guard scan: CI executable surfaces clean or booked — PASS
- 0 DENY rows in .github/workflows (no destructive drift entered CI)
- the known mirror-bot sync idiom appears as booked allow-with-reason (≥10 rows), never silent
- ledger stamped (BOOKS-STAMP law)
- _measured: denies=0 syncIdiom=11 stamped=true_

_Eval discipline adopted from learn-harness-engineering (Z-36): an eval is a runnable expectation, not a hope. Pure functions = white-box; desk processes = black-box fresh processes._
