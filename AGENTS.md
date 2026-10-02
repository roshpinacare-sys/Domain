# AGENTS.md — Domain (fleet public home) · חוקי-על לכל סוכן שנוחת כאן

> Adopted Z-35 from the walkinglabs/learn-harness-engineering study (their #1
> CRITICAL: instructions must exist at repo root). Domain is the fleet's public
> home: agents, books, workflows, hub pages. Zero secrets ever live here.

## Startup path (in order)
1. Read `FLEET-NOTE.md` — what this repo is and is not.
2. Read the doctrine canon in the sibling private repo `Defi`: `fleet/AGENTS.md`,
   `fleet/DOCTRINE.md`, `fleet/DOCTRINE-economics.md` (the law you operate under).
3. Read the latest receipts: `Defi/fleet/CLAIMS.md` (public) — never re-do what
   a receipt already closes.
4. Books are the truth: `agents/*.json` are machine books (econ-book,
   money-ledger, ventures, fills-ledger, harness-audit). Read before writing.
   The chain is the truth behind the books (read-back law).

## Working rules
- **Zero secrets in any repo.** Keys arrive as runtime env/vault only, in-memory,
  wiped after run. A secret printed = owned incident + rotation recommendation.
- **verify-then-sign.** No signature without preflight evidence; no claim without
  chain read-back. `CHAIN-RECONCILED` beats any book.
- **Keyless desks are fail-soft, exit 0.** A desk never breaks a CI run; honest
  red in a book beats a crashed workflow.
- **Measured, never estimated.** Oracle data or null. `[object Object]`-class
  concat bugs are the third-time family — coerce with num()/f() on every chain field.
- **Parallel runtimes are real.** `git pull --rebase` before push; conflicts in
  measurement books resolve to the freshest census; never double-run another
  runtime's lane (DELEGATION-SELECTION LAW).
- **Evals are runnable expectations, not hopes** (`agents/evals/run-evals.cjs`, Z-36):
  pure functions get white-box evals, desk processes get black-box fresh-process
  evals; a new failure class becomes an eval within one wave of discovery.
  The fleet's real workflow is drawn in `agents/fleet-graph.md` — read it before
  adding a node, and update it when you add one.
- **Books must stamp themselves** (`at`/`updated` ISO) — freshness is audited
  (`agents/harness-audit.cjs` runs on schedule; its FAILs are next work, not noise).

## Definition of done
A change is done when: books updated honestly, receipts appended (CLAIMS +
worklog), self-checks pass, commit pushed with race handling, and the next
agent/session can resume from the books alone — no tribal memory.
