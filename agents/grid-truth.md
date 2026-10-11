# GRID-TRUTH · 2026-10-11T16:23:34.599Z (live RPC, read-only)

The anti-phantom book: every number below was measured from the chain this run.
Drift measured vs previous snapshot: 2026-10-11T16:22:42.171Z

| chain | total effective power | total liquid | locked in orders | accounts alive |
|---|---|---|---|---|
| steem | 7.205 | 128.38 | 27.95 | 22 |
| hive | 164.667 | 13036.523 | 0 | 2 |
| blurt | 0.026 | 233.94 | 0 | 2 |

## STEEM

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| headcorner | treasury | 4.717 | 19.824 | 27.95 STEEM+91.875 SBD | 100 | 99.9 | 2026-10-11 | TREASURY-UNDERFLOOR |
| cornerstone | legacy-treasury | 1.354 | 49.771 |  | 100 | 100 | 2020-03-28 | INACTIVE |
| haran | worker-active | 0.126 | 0.01 |  | 100 | 100 | 2026-10-11 |  |
| cashmachine | worker-active | 0.121 | 0.01 |  | 100 | 98.6 | 2026-10-11 |  |
| wic | worker-active | 0.053 | 0.01 |  | 100 | 100 | 2026-10-11 |  |
| woq | worker-active | 0.113 | 0.01 |  | 100 | 96.5 | 2026-10-11 |  |
| tov | worker-active | 0.05 | 0.209 |  | 100 | 100 | 2026-10-11 |  |
| hcsoldier4 | worker-active | 0.027 | 1 |  | 100 | 52.3 | 2026-10-11 |  |
| hcsoldier5 | worker-active | 0.027 | 0.2 |  | 100 | 70.4 | 2026-10-11 |  |
| hcsoldier6 | worker-active | 0.027 | 1 |  | 100 | 71.1 | 2026-10-11 |  |
| spaminator | quarantine-vp-empty | 0.111 | 0 |  | 100 | 100 | 2025-04-25 |  |
| hcsoldier1 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| hcsoldier2 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| hcsoldier3 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| saos | shell | 0.008 | 0 |  | 100 | 100 | 1970-01-01 |  |
| powerspan | shell | 0 | 0 |  | 0 | 100 | 1970-01-01 |  |
| ynet | dead | 0 | 0.06 |  | 100 | 100 | 2024-02-10 |  |
| israelnews | worker-active | 0.152 | 0.235 |  | 100 | 95.9 | 2026-10-11 |  |
| lsa | worker-active | 0.129 | 0.01 |  | 100 | 97 | 2026-10-11 |  |
| macrame | worker-active | 0.121 | 0.01 |  | 100 | 98.4 | 2026-10-11 |  |
| siq | worker-active | 0.05 | 0.01 |  | 100 | 100 | 2026-10-11 |  |
| wog | worker-active | 0.019 | 0.01 |  | 100 | 100 | 2026-10-11 |  |

## HIVE

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| cornerstone | treasury-primary | 164.626 | 13036.489 |  | 100 | 100 | 2026-08-19 | INACTIVE |
| headcorner | worker-active | 0.041 | 0.034 |  | 100 | 0 | 2026-10-10 |  |

## BLURT

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| cornerstone | connect-target | 0.018 | 233.857 |  | 0 | — | 1970-01-01 | VP-EMPTY |
| headcorner | worker-active | 0.008 | 0.083 |  | 100 | — | 2026-09-13 | INACTIVE |

## PHANTOM-CLAIMS (books that contradict the chain)

- claim "recovery-plan-fleet-steem-power" asserts 4001 SP fleet total but chain measures 7.205 (ratio 0%) — source: Sandbox/ops/SOVEREIGN-RECOVERY-PLAN-2026-10-11.md (pre-correction book) — book is a ghost, correct the plan
- claim "recovery-plan-headcorner-sp" asserts 3676 SP headcorner but chain measures 4.717 (ratio 0%) — source: Sandbox/ops/SOVEREIGN-RECOVERY-PLAN-2026-10-11.md (pre-correction book) — book is a ghost, correct the plan

## ALERTS (11)

- steem:headcorner TREASURY-UNDERFLOOR — liquid 19.824 + locked-in-orders 27.95 = 47.774 below floor 90
- steem:cornerstone INACTIVE — last post 2388.2d ago (role expects activity)
- steem:hcsoldier1 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- steem:hcsoldier2 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- steem:hcsoldier3 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- hive:cornerstone INACTIVE — last post 52.7d ago (role expects activity)
- blurt:cornerstone VP-EMPTY — vp=0% below floor 20% — auto-voting drains mana
- blurt:headcorner INACTIVE — last post 28.5d ago (role expects activity)
- claims PHANTOM-CLAIM — claim "recovery-plan-fleet-steem-power" asserts 4001 SP fleet total but chain measures 7.205 (ratio 0%) — source: Sandbox/ops/SOVEREIGN-RECOVERY-PLAN-2026-10-11.md (pre-correction book) — book is a ghost, correct the plan
- claims PHANTOM-CLAIM — claim "recovery-plan-headcorner-sp" asserts 3676 SP headcorner but chain measures 4.717 (ratio 0%) — source: Sandbox/ops/SOVEREIGN-RECOVERY-PLAN-2026-10-11.md (pre-correction book) — book is a ghost, correct the plan
- roster BANNED-CAPITAL-INFLOW — banned account "headcorner" holds 0.394 SP delegated IN — capital lane violated the ban, reclaim or justify

