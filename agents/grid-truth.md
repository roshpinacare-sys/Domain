# GRID-TRUTH · 2026-10-11T16:36:06.326Z (live RPC, read-only)

The anti-phantom book: every number below was measured from the chain this run.
Drift measured vs previous snapshot: 2026-10-11T16:33:29.703Z

| chain | total effective power | total liquid | locked in orders | accounts alive |
|---|---|---|---|---|
| steem | 4469.972 | 128.38 | 27.95 | 22 |
| hive | 102457.845 | 13036.523 | 0 | 2 |
| blurt | 0.026 | 233.94 | 0 | 2 |

## STEEM

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| headcorner | treasury | 2925.574 | 19.824 | 27.95 STEEM+92.084 SBD | 100 | 99.3 | 2026-10-11 | SP-UNDERFLOOR,TREASURY-UNDERFLOOR |
| cornerstone | legacy-treasury | 839.89 | 49.771 |  | 100 | 100 | 2020-03-28 | INACTIVE |
| haran | worker-active | 78.37 | 0.01 |  | 100 | 100 | 2026-10-11 |  |
| cashmachine | worker-active | 75.238 | 0.01 |  | 100 | 98.6 | 2026-10-11 |  |
| wic | worker-active | 32.655 | 0.01 |  | 100 | 100 | 2026-10-11 |  |
| woq | worker-active | 69.987 | 0.01 |  | 100 | 96.5 | 2026-10-11 |  |
| tov | worker-active | 31.185 | 0.209 |  | 100 | 100 | 2026-10-11 |  |
| hcsoldier4 | worker-active | 16.999 | 1 |  | 100 | 52.3 | 2026-10-11 |  |
| hcsoldier5 | worker-active | 16.999 | 0.2 |  | 100 | 68.4 | 2026-10-11 |  |
| hcsoldier6 | worker-active | 16.999 | 1 |  | 100 | 71.1 | 2026-10-11 |  |
| spaminator | quarantine-vp-empty | 68.97 | 0 |  | 100 | 100 | 2025-04-25 |  |
| hcsoldier1 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| hcsoldier2 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| hcsoldier3 | keyless-stranded | 0 | 18.667 |  | 0 | 100 | 1970-01-01 | STRANDED-CAPITAL |
| saos | shell | 5.051 | 0 |  | 100 | 100 | 1970-01-01 |  |
| powerspan | shell | 0 | 0 |  | 0 | 100 | 1970-01-01 |  |
| ynet | dead | 0.105 | 0.06 |  | 100 | 100 | 2024-02-10 |  |
| israelnews | worker-active | 93.984 | 0.235 |  | 100 | 95.9 | 2026-10-11 |  |
| lsa | worker-active | 79.818 | 0.01 |  | 100 | 97 | 2026-10-11 |  |
| macrame | worker-active | 75.146 | 0.01 |  | 100 | 98.4 | 2026-10-11 |  |
| siq | worker-active | 31.147 | 0.01 |  | 100 | 100 | 2026-10-11 |  |
| wog | worker-active | 11.855 | 0.01 |  | 100 | 100 | 2026-10-11 |  |

## HIVE

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| cornerstone | treasury-primary | 102432.441 | 13036.489 |  | 100 | — | 2026-08-19 | INACTIVE,DRIFT-POWER |
| headcorner | worker-active | 25.404 | 0.034 |  | 100 | — | 2026-10-10 | DRIFT-POWER |

## BLURT

| account | role | eff power | liquid | locked | VP% | RC% | last post | alerts |
|---|---|---|---|---|---|---|---|---|
| cornerstone | connect-target | 0.018 | 233.857 |  | 0 | — | 1970-01-01 | VP-EMPTY |
| headcorner | worker-active | 0.008 | 0.083 |  | 100 | — | 2026-09-13 | INACTIVE |

## ALERTS (13)

- steem:headcorner SP-UNDERFLOOR — effective 2925.574 SP below floor 3000 — arming waves must respect the treasury floor
- steem:headcorner TREASURY-UNDERFLOOR — liquid 19.824 + locked-in-orders 27.95 = 47.774 below floor 90
- steem:cornerstone INACTIVE — last post 2388.2d ago (role expects activity)
- steem:hcsoldier1 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- steem:hcsoldier2 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- steem:hcsoldier3 STRANDED-CAPITAL — keyless account holds 18.667 STEEM liquid — no custody, unrecoverable without key recovery
- hive:cornerstone INACTIVE — last post 52.7d ago (role expects activity)
- hive:cornerstone DRIFT-POWER — eff power null -> 102432.441 (delta +102432.441 HIVEP) — expected only from arming/delegation, else investigate
- hive:headcorner DRIFT-POWER — eff power null -> 25.404 (delta +25.404 HIVEP) — expected only from arming/delegation, else investigate
- k blurt K-FALLBACK — dynamic global properties unavailable, naive /1e6 in use, numbers may be off by ~1612x
- blurt:cornerstone VP-EMPTY — vp=0% below floor 20% — auto-voting drains mana
- blurt:headcorner INACTIVE — last post 28.5d ago (role expects activity)
- roster BANNED-CAPITAL-INFLOW — banned account "headcorner" holds 244.196 SP delegated IN — capital lane violated the ban, reclaim or justify

