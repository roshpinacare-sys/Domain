# Probe Lane — candidate repos assessed for sovereignty expansion (single canon)

Operator lane opened 2026-10-03 ("מה לגבי זה …"). One canon per candidate; verdicts below are the fleet's record. Detail lives in worklog Z-43..Z-47.

| Candidate | Head (at probe) | What it is | Verdict | Where recorded |
|---|---|---|---|---|
| trycua/cua | (Z-43-a research) | VM/computer-use framework for agents | **ADOPTED as patterns** — probe-before-trust, permission-at-launch, action ladder; runtime class measured ABSENT locally; cloud fleet = tier C lock | CR-0006, hands-book.json, eval E18 |
| alirezarezvani/claude-skills | `19392f7` (2026-08-26) | 388-skill doctrine library (65MB); zero DeFi/on-chain content | **QUEUED** — 4 patterns (P1 loop-library bounded loops, P2 skill-grader, P3 memory ladder, P4 human-gate) awaiting a tier B CR; grader proven runnable on our 69-skill library | worklog Z-44 |
| cloudflare/security-audit-skill | `c1c8a8c` (2026-09-14) | Six-phase adversarial security-audit doctrine + zero-dep validators | **ADOPTED via CR-0007** — 3 files vendored unmodified; guidance-mode audit executed (this directory) | CR-0007 |
| usestrix/strix | `99c0711` (2026-10-02) | Autonomous AI pentest agents (dynamic execution + PoC) | **PARKED** — first candidate hard-blocked on operator inputs. Opening conditions: (1) operator supplies OpenAI-compatible LLM keys (tier C); (2) `STRIX_TELEMETRY=false` mandatory (default is ON, PostHog+Scarf); (3) fleet policy scope-lock to local estate only (no code-level scope guard upstream); (4) uv install + lockfile review as its own tier B CR | worklog Z-46 |

## Lane law

- probe-before-trust: every verdict above is measured, not assumed; clones stay in `/tmp` as read-only references until a CR says otherwise.
- permission-at-launch: adoption never follows from a green probe alone (policy beats probe).
- one canon per question: this file is the lane's single record; worklog chapters are its history.
