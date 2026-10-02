# Harness Audit — the fleet's five-subsystem check (fresh-context judge node)

_harness-audit v1.0.0 · 2026-10-02T23:10:34.275Z · born from the learn-harness-engineering study (Z-35, extended Task 19)_

**harness green: 31 checks pass, 0 fail — the five subsystems hold and the three structural failures have named countermeasures**

| # | Subsystem | Check | Status | Evidence |
|---|---|---|---|---|
| 1 | instructions | Defi/fleet/AGENTS.md present (coordination law) | PASS | fleet/AGENTS.md |
| 2 | instructions | Defi/DOCTRINE.md present | PASS | DOCTRINE.md |
| 3 | instructions | Domain/FLEET-NOTE.md present (per-repo living note) | PASS | FLEET-NOTE.md |
| 4 | instructions | Domain/AGENTS.md present at repo root (any-agent landing page) | PASS | AGENTS.md |
| 5 | instructions | agents carry doctrine headers (sample: venture-desk, econ-desk, treasury-desk) | PASS | 3 sampled agent headers |
| 6 | state | live books exist and fresh (<48h) | PASS | 9/9 books fresh |
| 7 | state | money-ledger books chain truth (not session memory) | PASS | money-ledger.json |
| 8 | state | self-heal layer proven (econ summary clean — string or object) | PASS | econ-book.json summary |
| 9 | verification | verify-then-sign bound in signing agents (4/4) | PASS | verify-then-sign markers |
| 10 | verification | independent judge node exists (agent-verify workflow, fresh context) | PASS | .github/workflows/agent-verify.yml |
| 11 | verification | read-back law (chain speaks last) | PASS | chain-truth recon in curation |
| 12 | verification | secret-leak gate on the wire (gitleaks) | PASS | gitleaks workflow |
| 13 | verification | eval discipline live (runnable expectations, E1-E6) | PASS | agents/evals/ |
| 14 | scope | doctrine binds kill rules (ventures have them) | PASS | DOCTRINE-economics.md §4 |
| 15 | scope | ventures board carries kill rules (5/5) | PASS | ventures.json |
| 16 | scope | resource floors/ceilings in code (VP floor, dust holds, RC gate) | PASS | treasury-desk CUR_VP_FLOOR |
| 17 | lifecycle | CLAIMS ledger fresh (receipts keep continuity) | PASS | last receipt 0.4h ago |
| 18 | lifecycle | recovery path codified (RESUME-KIT + .fleet/restore.sh) | PASS | canon reachable |
| 19 | graph-failures | Goodhart countermeasure: two-sided ledger, measured never estimated | PASS | EARN-GOVERNOR LAW |
| 20 | graph-failures | Blindness-upward countermeasure: kill rules + operator gate | PASS | kill rules + operator gates |
| 21 | graph-failures | Conflict countermeasure: rebase races + one-lock doctrine | PASS | recruit.yml pull --rebase |
| 22 | anchors | book timestamp hygiene (every live book stamps its run) | PASS | all live books stamped |
| 23 | anchors | earn fills pinned to chain arithmetic (seed provenance) | PASS | fills-ledger.json seeds |
| 24 | anchors | KPI names its method (oracle discipline) | PASS | KPI.json method field |
| 25 | anchors | spot oracle measured at run time (not cached stories) | PASS | ventures.json priceOracle |
| 26 | graph | every FILLED role names a reachable worker artifact (role→worker wiring) | PASS | 7 FILLED roles · 7 wired |
| 27 | loop | all six loop primitives have live fleet instances (automations/worktrees/skills/connectors/sub-agents/external state) | PASS | workflows:41 desks:48 receipts:true books:9 claims:true |
| 28 | sovereignty | role-registry integrity: every charter row names a real file (roles-as-data, no invented agents) | PASS | 49 rows · cols 9 · dupes 0 · missing files 0 |
| 29 | sovereignty | change-request ledger integrity: every CR well-formed, no PENDING abandoned >7d | PASS | 3 CRs · malformed 0 · stale-pending 0 |
| 30 | sovereignty | mechanical override live: destructive-command guard stamped, evals E7-E9 pin it | PASS | ledger at 2026-10-02T23:10:31.794Z · scan denies 0 · guardEvals green |
| 31 | sovereignty | cognitive rail governed: provider registry valid, forbidden rails never enabled, keyless probes booked, E10-E12 pin it | PASS | agents/inference-providers.csv + rail-ledger.json |

**Books pulse:** econ-book.json ✓ · curation-book.json ✓ · money-ledger.json ✓ · ventures.json ✓ · fills-ledger.json ✓ · bridge-book.json ✓ · dex-book.json ✓ · learning-ledger.json ✓ · recruitment.json ✓

**Four silent costs (watched, per the study):**
- **verificationDebt:** selftests cover past incidents; every NEW failure mode (concat family ×3, null-deref, dedupe) becomes a check within one wave of discovery
- **comprehensionRot:** notebooks (v1-v5-NOTES.md) rewritten per cycle; doctrine rewritten on amendment — no tribal memory
- **cognitiveSurrender:** judge nodes (agent-verify, this desk) are separate processes with fresh context
- **tokenBlowout:** CI does the deterministic work; agent sessions only where judgment is required (LABOR TIERING LAW)

_The model is smart, the harness makes it reliable. This desk is the checker node the producer cannot be (generator/evaluator separation)._
