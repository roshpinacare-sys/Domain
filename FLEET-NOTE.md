# FLEET-NOTE · R130 · 2026-09-28

**הכרזה בין-סוכנים קנונית**: שלושה סוכני-משימה (AGENT-Z / B / C) מתואמים
על `roshpinacare-sys/Defi` → `fleet/`:

- `fleet/AGENTS.md` — חוקי הקומיט והערוצים
- `fleet/MISSION-1000.md` — סולם L0→L4 ליעד 1000$/יום + מנוע-טריגרים
- `fleet/CLAIMS.md` — לוח תביעות (ראשון-קומיט-ראשון-תביעה)
- `fleet/audits/2026-09-28-ZAI-ECOSYSTEM-AUDIT.md` — ביקורת-בסיס 14 ריפואים
- `fleet/PHASE-0-KEY-HYGIENE.md` — ערכת רוטציית מפתחות (חוסם-על X-1)

**מה רץ בריפו זה במסגרת R130**: כלום לא השתנה בקוד — ריפו זה קיבל
רק סמן-הכרזה. שינויי-קוד בריפו זה יבואו דרך תביעות B-1/B-3 (saos-dex)
על ענף `fleet/r130` אחרי תיאום בלוח.

**הכלל**: קומיט = עובדה נמדדת. אין סודות בגיט. השרשרת היא השופטת.

— AGENT-Z (Z.ai Code) · זיהוי-קומיטים: `[agent:Z]`

---

## Task 19 (2026-10-03) · LHE harness adoption — the estate runs on a real harness

Adopted from **walkinglabs/learn-harness-engineering** (owner directive: study it
and use it properly). Z-35 planted the seed (Domain AGENTS.md + judge node); Task 19
finished the adoption estate-wide:

| LHE subsystem | Fleet instance |
|---|---|
| Instructions | `AGENTS.md` at root of Domain + steem + Console + platform (landing protocol, routing not manuals) |
| State | `feature_list.json` + `progress.md` + `session-handoff.md` per repo, **plus** the live books (`agents/*.json`) as external state |
| Verification | `init.sh` per repo (fails fast) + harness-audit judge node + agent-verify + org-gitleaks 16/16 head=0 |
| Scope | one-feature-at-a-time + deps tracked + NEVER_TOUCH roster + caps + kill rules |
| Lifecycle | receipts cadence + RESUME-KIT + session-handoff (restartable from books alone) |

**Loop engineering (L13) six primitives, mapped:** automations = 44 Domain
workflows (cron + dispatch-on-demand) · worktrees = rebase-first runtime lanes ·
skills = desk scripts (agents/*.cjs|mjs) · connectors = receipts trail ·
sub-agents = recruited roles (recruitment.json, workers audited) · external
state = books + CLAIMS + worklog.

**Graph engineering (L14) mapped:** nodes = desks/engines; edges = receipts +
books (the one-writer law keeps every edge single-headed); shared state =
`agents/*.json`; routing = recruit.yml + CLAIMS first-commit-first-claim. The
three structural failures stay counter-measured: Goodhart (two-sided ledgers,
measured never estimated), blindness-upward (kill rules + operator gate),
conflict (rebase races + one-lock doctrine).

**Measured (Task 19):** LHE validator 100/100 on all four core repos (steem 20→100,
Console 20→100, platform 20→100, Domain 32→100); harness-audit 26 PASS / 0 WARN /
0 FAIL, books 9/9 fresh; learning-ledger stamping fixed; role→worker wiring now an
audited invariant, not a promise.
